/* app-core.js — Iran Conflict Monitor — Application Logic */

/* === CONSTANTS === */
const ATTACKER_COLORS = {
  "United States": "#3B82F6",
  "Israel": "#22C55E",
  "Iran": "#EF4444",
  "Houthi/Ansar Allah": "#F59E0B",
  "Hezbollah": "#A855F7",
  "Hamas": "#EC4899",
  "Iraq PMF": "#6B7280",
  "Unknown": "#9CA3AF"
};

const ASSET_NATION_COLORS = {
  "United States": "#3B82F6",
  "Israel": "#22C55E",
  "Iran": "#EF4444",
  "Saudi Arabia": "#FBBF24",
  "UAE": "#FBBF24",
  "Yemen (Houthi)": "#F59E0B"
};

const CATEGORIES = [
  "military_operation", "diplomacy", "sanctions", "military_deployment",
  "intelligence", "civilian_impact", "nuclear_program", "regional_proxy"
];

const CATEGORY_LABELS = {
  military_operation: "Military Op",
  diplomacy: "Diplomacy",
  sanctions: "Sanctions",
  military_deployment: "Deployment",
  intelligence: "Intelligence",
  civilian_impact: "Civilian Impact",
  nuclear_program: "Nuclear Sites",
  regional_proxy: "Regional Proxy"
};

const SOURCE_TYPES = [
  "government", "military", "news_agency", "social_media", "state_media", "think_tank"
];

const SOURCE_TYPE_LABELS = {
  government: "Government",
  military: "Military",
  news_agency: "News Agency",
  social_media: "Social Media",
  state_media: "State Media",
  think_tank: "Think Tank"
};

/* === STATE === */
let state = {
  activeTab: "news",
  categoryFilters: new Set(),
  sourceFilters: new Set(),
  searchQuery: "",
  attackerFilters: new Set(Object.keys(ATTACKER_COLORS)),
  showAssets: true,
  showStrikes: true,
  dateFrom: null,
  dateTo: null,
  kpiFilter: null,  // active KPI filter: "total"|"operations"|"unconfirmed"|"nuclear"|null
  showVideos: true,
  sortMode: "date"  // "date" (newest first) or "popular" (highest engagement first)
};

let map = null;
let strikeMarkers = [];
let assetMarkers = [];
let mapInitialized = false;

/* === REFRESH INTERVAL === */
let refreshTimer = null;

/* === INIT === */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTabs();
  initCategoryFilters();
  initSourceFilters();
  initSearch();
  initKPIClicks();
  renderKPIs();
  renderNewsFeed();
  renderMentionGraph();
  initSortToggle();
  initVideoToggle();
  renderVideoFeed();
  updateTimestamp();
  startAutoRefresh();

  // Resize handler for graph
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderMentionGraph(), 150);
  });

  // Hash routing: auto-open map tab if #map in URL
  if (window.location.hash === "#map" || window.location.search.includes("tab=map")) {
    setTimeout(() => document.querySelector('[data-tab="map"]').click(), 100);
  }
});

/* === AUTO-REFRESH (every 5 minutes) === */
function startAutoRefresh() {
  if (refreshTimer) clearInterval(refreshTimer);
  refreshTimer = setInterval(() => {
    renderNewsFeed();
    renderKPIs();
    renderMentionGraph();
    updateTimestamp();
    updateRefreshCountdown();
  }, 5 * 60 * 1000); // 5 minutes
  updateRefreshCountdown();
}

function updateRefreshCountdown() {
  const el = document.getElementById("refresh-indicator");
  if (!el) return;
  const textEl = el.querySelector(".refresh-text");
  if (textEl) textEl.textContent = "Auto-refresh: 5 min";
}

/* === THEME TOGGLE === */
function initThemeToggle() {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;
  // Force dark mode as default
  root.setAttribute("data-theme", "dark");
  let theme = "dark";

  if (toggle) {
    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      toggle.innerHTML = theme === "dark"
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      // Re-render map tiles if map is active
      if (map) {
        map.invalidateSize();
      }
      // Re-render mention graph for theme change
      renderMentionGraph();
    });
  }
}

/* === TABS === */
function initTabs() {
  const btns = document.querySelectorAll(".tab-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      state.activeTab = tab;

      btns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
      document.getElementById("tab-" + tab).classList.add("active");

      if (tab === "map" && !mapInitialized) {
        setTimeout(() => initMap(), 100);
      } else if (tab === "map" && map) {
        setTimeout(() => map.invalidateSize(), 100);
      }
    });
  });
}

/* === CATEGORY FILTERS === */
function initCategoryFilters() {
  const container = document.getElementById("category-filters");
  CATEGORIES.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "filter-chip";
    chip.textContent = CATEGORY_LABELS[cat] || cat;
    chip.dataset.category = cat;
    chip.addEventListener("click", () => {
      // Clear KPI filter when using chip filters
      state.kpiFilter = null;
      document.querySelectorAll(".kpi-card").forEach(c => c.classList.remove("kpi-card--active"));
      if (state.categoryFilters.has(cat)) {
        state.categoryFilters.delete(cat);
        chip.classList.remove("active");
      } else {
        state.categoryFilters.add(cat);
        chip.classList.add("active");
      }
      renderNewsFeed();
    });
    container.appendChild(chip);
  });
}

/* === SOURCE FILTERS === */
function initSourceFilters() {
  const container = document.getElementById("source-filters");
  SOURCE_TYPES.forEach(st => {
    const chip = document.createElement("button");
    chip.className = "filter-chip";
    chip.textContent = SOURCE_TYPE_LABELS[st] || st;
    chip.dataset.source = st;
    chip.addEventListener("click", () => {
      // Clear KPI filter when using chip filters
      state.kpiFilter = null;
      document.querySelectorAll(".kpi-card").forEach(c => c.classList.remove("kpi-card--active"));
      if (state.sourceFilters.has(st)) {
        state.sourceFilters.delete(st);
        chip.classList.remove("active");
      } else {
        state.sourceFilters.add(st);
        chip.classList.add("active");
      }
      renderNewsFeed();
    });
    container.appendChild(chip);
  });
}

/* === SEARCH === */
function initSearch() {
  const input = document.getElementById("search-input");
  let debounceTimer;
  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.searchQuery = input.value.trim().toLowerCase();
      renderNewsFeed();
    }, 200);
  });
}

/* === KPIs === */
function renderKPIs() {
  const totalEvents = NEWS_DATA.length;
  const activeOps = NEWS_DATA.filter(n => n.category === "military_operation" &&
    new Date(n.date) >= new Date("2026-01-01")).length;

  const countriesSet = new Set();
  STRIKES_DATA.forEach(s => countriesSet.add(s.country));
  NEWS_DATA.forEach(n => {
    const text = (n.title + " " + n.summary).toLowerCase();
    ["iran","israel","yemen","iraq","syria","lebanon","qatar","bahrain","uae","kuwait","jordan","saudi arabia","united states"]
      .forEach(c => { if (text.includes(c)) countriesSet.add(c); });
  });

  const unconfirmed = NEWS_DATA.filter(n => !n.confirmed).length;
  const nuclear = NEWS_DATA.filter(n => n.category === "nuclear_program").length;

  animateKPI("kpi-total", totalEvents);
  animateKPI("kpi-operations", activeOps);
  animateKPI("kpi-countries", countriesSet.size);
  animateKPI("kpi-unconfirmed", unconfirmed);
  animateKPI("kpi-nuclear", nuclear);

  // Update active state on KPI cards
  document.querySelectorAll(".kpi-card[data-kpi]").forEach(card => {
    card.classList.toggle("kpi-card--active", state.kpiFilter === card.dataset.kpi);
  });
}

function initKPIClicks() {
  // Attach click directly to each KPI card for maximum reliability
  document.querySelectorAll(".kpi-card[data-kpi]").forEach(function(card) {
    card.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var filter = this.getAttribute("data-kpi");
      // Countries KPI is not filterable
      if (filter === "countries") return;
      // Toggle: clicking the same KPI again clears the filter
      if (state.kpiFilter === filter) {
        state.kpiFilter = null;
      } else {
        state.kpiFilter = filter;
      }
      // Clear chip-based category/source filters when using KPI
      state.categoryFilters.clear();
      state.sourceFilters.clear();
      document.querySelectorAll(".filter-chip").forEach(function(c) { c.classList.remove("active"); });
      renderNewsFeed();
      renderKPIs();
      // Scroll feed into view
      var feedEl = document.getElementById("news-feed");
      if (feedEl) feedEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function animateKPI(id, target) {
  const el = document.getElementById(id);
  let current = 0;
  const step = Math.max(1, Math.floor(target / 20));
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current >= target) clearInterval(interval);
  }, 30);
}

/* === NEWS FEED === */
function getFilteredNews() {
  let items = [...NEWS_DATA];

  // KPI filter (takes precedence over chip filters)
  if (state.kpiFilter) {
    switch (state.kpiFilter) {
      case "total":
        // Show all — no filter
        break;
      case "operations":
        items = items.filter(n => n.category === "military_operation" &&
          new Date(n.date) >= new Date("2026-01-01"));
        break;
      case "unconfirmed":
        items = items.filter(n => !n.confirmed);
        break;
      case "nuclear":
        items = items.filter(n => n.category === "nuclear_program");
        break;
    }
  } else {
    // Category filter
    if (state.categoryFilters.size > 0) {
      items = items.filter(n => state.categoryFilters.has(n.category));
    }

    // Source filter
    if (state.sourceFilters.size > 0) {
      items = items.filter(n => state.sourceFilters.has(n.source_type));
    }
  }

  // Search
  if (state.searchQuery) {
    items = items.filter(n =>
      n.title.toLowerCase().includes(state.searchQuery) ||
      n.summary.toLowerCase().includes(state.searchQuery) ||
      n.source.toLowerCase().includes(state.searchQuery)
    );
  }

  // Sort based on current mode
  if (state.sortMode === "popular") {
    items.sort((a, b) => (b.engagement || 0) - (a.engagement || 0));
  } else {
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return items;
}

function renderNewsFeed() {
  const feed = document.getElementById("news-feed");
  const items = getFilteredNews();

  document.getElementById("results-count").textContent =
    `${items.length} of ${NEWS_DATA.length} events`;

  if (items.length === 0) {
    feed.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">&#x26A0;</div>
        <div class="no-results-text">No events match current filters</div>
      </div>`;
    return;
  }

  feed.innerHTML = items.map(item => {
    const isUnconfirmed = !item.confirmed;
    const readerNote = READERS_NOTES[item.title];
    const noteHTML = readerNote ? `
      <div class="readers-note">
        <div class="readers-note-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Reader's Note — Disputed or Contested</span>
        </div>
        <p class="readers-note-text">${escapeHTML(readerNote.note)}</p>
        ${readerNote.sources.length > 0 ? `<div class="readers-note-sources">Counterpoint sources: ${readerNote.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)}</a>`).join(", ")}</div>` : ""}
      </div>` : "";
    return `
      <article class="news-item ${isUnconfirmed ? "news-item--unconfirmed" : ""}${readerNote ? " news-item--disputed" : ""}">
        <div class="news-item-header">
          <span class="news-date">${item.date}</span>
          ${item.time ? `<span class="news-time">${formatTime(item.time)}</span>` : ""}
          <span class="sep">·</span>
          <span class="news-source">${item.source}</span>
          <span class="badge badge-source">${SOURCE_TYPE_LABELS[item.source_type] || item.source_type}</span>
          <span class="badge badge-${item.category}">${CATEGORY_LABELS[item.category] || item.category}</span>
          ${isUnconfirmed ? '<span class="badge badge-unconfirmed">UNCONFIRMED</span>' : ""}
          ${item.engagement ? '<span class="badge badge-engagement" title="Popularity score based on social media activity and web coverage">' + item.engagement + '% engagement</span>' : ""}
          ${readerNote ? '<span class="badge badge-disputed">DISPUTED</span>' : ""}
        </div>
        <h3 class="news-title">${escapeHTML(item.title)}</h3>
        <p class="news-summary">${escapeHTML(item.summary)}</p>
        ${noteHTML}
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-link">
          View Source &#x2197;
        </a>
      </article>`;
  }).join("");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatTime(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${m.toString().padStart(2, "0")} ${suffix}`;
}

/* === MENTION VOLUME GRAPH (HTML/CSS bars — Canvas-free for reliability) === */
function renderMentionGraph() {
  var container = document.getElementById("mention-graph-bars");
  if (!container) return;

  // Aggregate events by month
  var monthCounts = {};
  NEWS_DATA.forEach(function(item) {
    var d = new Date(item.date);
    var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
    monthCounts[key] = (monthCounts[key] || 0) + 1;
  });
  STRIKES_DATA.forEach(function(item) {
    var d = new Date(item.date);
    var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
    monthCounts[key] = (monthCounts[key] || 0) + 1;
  });

  var sortedMonths = Object.keys(monthCounts).sort();
  var values = sortedMonths.map(function(k) { return monthCounts[k]; });
  var maxVal = Math.max.apply(null, values.concat([1]));

  var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var monthLabels = sortedMonths.map(function(k) {
    var parts = k.split("-");
    return monthNames[parseInt(parts[1]) - 1] + " '" + parts[0].slice(2);
  });

  var html = '<div class="mg-bars-row">';
  for (var i = 0; i < values.length; i++) {
    var pct = Math.round((values[i] / maxVal) * 100);
    html += '<div class="mg-bar-col">';
    html += '<span class="mg-bar-val">' + values[i] + '</span>';
    html += '<div class="mg-bar-track"><div class="mg-bar-fill" style="height:' + pct + '%"></div></div>';
    html += '<span class="mg-bar-label">' + monthLabels[i] + '</span>';
    html += '</div>';
  }
  html += '</div>';
  container.innerHTML = html;
}


/* === SORT TOGGLE === */
function initSortToggle() {
  var bar = document.querySelector(".filter-bar");
  if (!bar) return;

  // Create sort section
  var sortSection = document.createElement("div");
  sortSection.className = "filter-section filter-sort";
  sortSection.innerHTML =
    '<label class="filter-label">Sort By</label>' +
    '<div class="sort-toggle">' +
      '<button class="sort-btn sort-btn--active" data-sort="date">Newest</button>' +
      '<button class="sort-btn" data-sort="popular">Most Popular</button>' +
    '</div>';
  bar.appendChild(sortSection);

  // Attach handlers
  sortSection.querySelectorAll(".sort-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var mode = btn.dataset.sort;
      state.sortMode = mode;
      sortSection.querySelectorAll(".sort-btn").forEach(function(b) {
        b.classList.toggle("sort-btn--active", b.dataset.sort === mode);
      });
      renderNewsFeed();
    });
  });
}

/* === VIDEO FEED === */
function initVideoToggle() {
  var toggle = document.getElementById("video-toggle");
  if (!toggle) return;
  toggle.addEventListener("change", function() {
    state.showVideos = toggle.checked;
    var grid = document.getElementById("video-grid");
    var disclaimer = document.querySelector(".video-disclaimer");
    if (grid) grid.style.display = state.showVideos ? "" : "none";
    if (disclaimer) disclaimer.style.display = state.showVideos ? "" : "none";
  });
}

function renderVideoFeed() {
  var grid = document.getElementById("video-grid");
  if (!grid) return;

  var html = VIDEO_DATA.map(function(video) {
    var riskClass = "nsfw-" + video.nsfw_risk;
    var riskLabel = video.nsfw_risk === "high" ? "HIGH RISK — Graphic Content Likely" :
                    video.nsfw_risk === "medium" ? "MEDIUM RISK — May Contain Disturbing Content" :
                    "LOW RISK — News/Official Source";
    // Removed: unconfirmed badge not applicable to video content (viewer discretion warning suffices)

    return '<div class="video-card">' +
      '<div class="video-warning ' + riskClass + '">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
        '<span>' + riskLabel + '</span>' +
      '</div>' +
      '<div class="video-embed" id="embed-' + video.id + '">' +
        '<blockquote class="twitter-tweet" data-theme="dark" data-conversation="none">' +
          '<a href="' + video.url + '"></a>' +
        '</blockquote>' +
      '</div>' +
      '<div class="video-meta">' +
        '<div class="video-title">' + escapeHTML(video.title) + '</div>' +
        '<div class="video-source-row">' +
          '<span class="video-source">' + escapeHTML(video.source) + '</span>' +
          '<span class="sep">&middot;</span>' +
          '<span class="video-platform">' + video.platform + '</span>' +
          '<span class="sep">&middot;</span>' +
          '<span class="video-followers">' + video.followers + ' followers</span>' +
          '' +
        '</div>' +
        '<p class="video-description">' + escapeHTML(video.description) + '</p>' +
        '<a href="' + video.url + '" target="_blank" rel="noopener noreferrer" class="news-link">View on X &#x2197;</a>' +
      '</div>' +
    '</div>';
  }).join("");

  grid.innerHTML = html;

  // Trigger Twitter widget rendering
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load(grid);
  }
}

/* === TIMESTAMP === */
function updateTimestamp() {
  const el = document.getElementById("last-updated");
  const now = new Date();
  el.textContent = "Last Updated: " + now.toISOString().replace("T", " ").slice(0, 19) + " UTC";
}

/* === MAP === */
function initMap() {
  map = L.map("map", {
    center: [28, 47],
    zoom: 5,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  renderStrikes();
  renderAssets();
  renderLegend();
  renderStrikeSummary();
  renderAttackerFilters();
  initMapControls();

  mapInitialized = true;
}

function renderStrikes() {
  // Clear existing
  strikeMarkers.forEach(m => map.removeLayer(m));
  strikeMarkers = [];

  let filtered = STRIKES_DATA;
  if (state.dateFrom) {
    filtered = filtered.filter(s => s.date >= state.dateFrom);
  }
  if (state.dateTo) {
    filtered = filtered.filter(s => s.date <= state.dateTo);
  }

  filtered.forEach(strike => {
    if (!state.attackerFilters.has(strike.attacker)) return;
    if (!state.showStrikes) return;

    const color = ATTACKER_COLORS[strike.attacker] || "#9CA3AF";
    const marker = L.circleMarker([strike.lat, strike.lng], {
      radius: 6,
      fillColor: color,
      fillOpacity: 0.8,
      color: color,
      weight: 1.5,
      opacity: 0.9
    }).addTo(map);

    marker.bindPopup(`
      <div class="popup-title">${escapeHTML(strike.location_name)}</div>
      <div class="popup-detail"><strong>Date:</strong> ${strike.date}</div>
      <div class="popup-detail"><strong>Attacker:</strong> ${strike.attacker}</div>
      <div class="popup-detail"><strong>Target:</strong> ${escapeHTML(strike.target)}</div>
      <div class="popup-detail"><strong>Weapon:</strong> ${strike.weapon_type}</div>
      <div class="popup-detail" style="margin-top:4px;">${escapeHTML(strike.description.slice(0, 200))}</div>
      <a href="${strike.url}" target="_blank" rel="noopener noreferrer" class="popup-link">View Source &#x2197;</a>
    `, { maxWidth: 320 });

    strikeMarkers.push(marker);
  });
}

function renderAssets() {
  assetMarkers.forEach(m => map.removeLayer(m));
  assetMarkers = [];

  if (!state.showAssets) return;

  MILITARY_ASSETS.forEach(asset => {
    const color = ASSET_NATION_COLORS[asset.nation] || "#9CA3AF";

    // Create diamond-shaped marker using DivIcon
    const icon = L.divIcon({
      className: "",
      html: `<div style="
        width: 12px; height: 12px;
        background: ${color};
        transform: rotate(45deg);
        border: 1.5px solid rgba(255,255,255,0.5);
        box-shadow: 0 0 4px rgba(0,0,0,0.5);
      "></div>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });

    const marker = L.marker([asset.lat, asset.lng], { icon }).addTo(map);

    marker.bindPopup(`
      <div class="popup-title">${escapeHTML(asset.asset_name)}</div>
      <div class="popup-detail"><strong>Type:</strong> ${asset.asset_type.replace(/_/g, " ")}</div>
      <div class="popup-detail"><strong>Nation:</strong> ${asset.nation}</div>
      <div class="popup-detail"><strong>Status:</strong> ${asset.status}</div>
      <div class="popup-detail"><strong>Location:</strong> ${escapeHTML(asset.location_description)}</div>
      <div class="popup-detail" style="margin-top:4px;">${escapeHTML(asset.details.slice(0, 250))}</div>
      <a href="${asset.source}" target="_blank" rel="noopener noreferrer" class="popup-link">View Source &#x2197;</a>
    `, { maxWidth: 320 });

    assetMarkers.push(marker);
  });
}

function renderLegend() {
  // Strikes legend
  const strikesLegend = document.getElementById("legend-strikes");
  strikesLegend.innerHTML = Object.entries(ATTACKER_COLORS).map(([name, color]) => `
    <div class="legend-item">
      <div class="legend-circle" style="background:${color};"></div>
      <span>${name}</span>
    </div>
  `).join("");

  // Assets legend
  const assetsLegend = document.getElementById("legend-assets");
  const assetNations = [
    ["US", "#3B82F6"],
    ["Israel", "#22C55E"],
    ["Iran", "#EF4444"],
    ["Saudi/UAE", "#FBBF24"],
    ["Houthi", "#F59E0B"]
  ];
  assetsLegend.innerHTML = assetNations.map(([name, color]) => `
    <div class="legend-item">
      <div class="legend-diamond" style="background:${color};"></div>
      <span>${name}</span>
    </div>
  `).join("");
}

function renderStrikeSummary() {
  const summary = document.getElementById("strike-summary");
  const counts = {};
  STRIKES_DATA.forEach(s => {
    counts[s.attacker] = (counts[s.attacker] || 0) + 1;
  });

  // Sort by count descending
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  summary.innerHTML = sorted.map(([name, count]) => `
    <div class="strike-count-row">
      <div class="strike-count-name">
        <div class="strike-count-dot" style="background:${ATTACKER_COLORS[name] || "#9CA3AF"};"></div>
        <span>${name}</span>
      </div>
      <span class="strike-count-num">${count}</span>
    </div>
  `).join("");
}

function renderAttackerFilters() {
  const container = document.getElementById("attacker-filters");
  container.innerHTML = Object.keys(ATTACKER_COLORS).map(attacker => `
    <label class="attacker-toggle">
      <input type="checkbox" data-attacker="${attacker}" ${state.attackerFilters.has(attacker) ? "checked" : ""}>
      <span>${attacker}</span>
    </label>
  `).join("");

  container.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      const att = input.dataset.attacker;
      if (input.checked) {
        state.attackerFilters.add(att);
      } else {
        state.attackerFilters.delete(att);
      }
      renderStrikes();
    });
  });
}

function initMapControls() {
  // Assets toggle
  document.getElementById("toggle-assets").addEventListener("change", (e) => {
    state.showAssets = e.target.checked;
    renderAssets();
  });

  // Strikes toggle
  document.getElementById("toggle-strikes").addEventListener("change", (e) => {
    state.showStrikes = e.target.checked;
    renderStrikes();
  });

  // Date range
  const dateFrom = document.getElementById("date-from");
  const dateTo = document.getElementById("date-to");

  // Set min/max
  const dates = STRIKES_DATA.map(s => s.date).sort();
  dateFrom.min = dates[0];
  dateFrom.max = dates[dates.length - 1];
  dateTo.min = dates[0];
  dateTo.max = dates[dates.length - 1];

  dateFrom.addEventListener("change", () => {
    state.dateFrom = dateFrom.value || null;
    renderStrikes();
  });
  dateTo.addEventListener("change", () => {
    state.dateTo = dateTo.value || null;
    renderStrikes();
  });

  document.getElementById("reset-dates").addEventListener("click", () => {
    dateFrom.value = "";
    dateTo.value = "";
    state.dateFrom = null;
    state.dateTo = null;
    renderStrikes();
  });
}
