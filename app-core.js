/* app-core.js — Iran Conflict Monitor — Application Logic */

/* === CONSTANTS === */
const ATTACKER_COLORS = {
  "United States": "#3B82F6",
  "Israel": "#8B5CF6",
  "Iran": "#EF4444",
  "Houthis": "#F59E0B",
  "Hezbollah": "#10B981",
  "Hamas": "#EC4899",
  "Unknown": "#6B7280"
};

const ASSET_ICONS = {
  carrier: "⚓",
  base: "🛡️",
  missile_battery: "🎯",
  nuclear: "☢️"
};

/* === STATE === */
const state = {
  activeTab: "news",
  categoryFilter: "all",
  sourceFilter: "all",
  searchQuery: "",
  sortOrder: "newest",
  kpiFilter: null,
  mapAttackerFilter: "all",
  showAssets: true,
  showStrikes: true,
  dateFrom: null,
  dateTo: null
};

/* === HELPERS === */
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function timeAgo(dateStr) {
  if (!dateStr) return "";
  const now = new Date();
  const d = new Date(dateStr + "T12:00:00");
  const diff = Math.floor((now - d) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* === KPI COMPUTATION === */
function computeKPIs(items) {
  const operations = new Set();
  const countries = new Set();
  let unconfirmed = 0;
  let nuclear = 0;

  items.forEach(item => {
    if (item.operation) operations.add(item.operation);
    if (item.attacker) countries.add(item.attacker);
    if (item.country) countries.add(item.country);
    if (item.confirmed === false) unconfirmed++;
    if (item.tags && item.tags.includes("nuclear")) nuclear++;
  });

  return {
    total: items.length,
    operations: operations.size,
    countries: countries.size,
    unconfirmed,
    nuclear
  };
}

/* === FILTER LOGIC === */
function getFilteredItems() {
  let items = [...NEWS_DATA];

  // KPI filter
  if (state.kpiFilter === "operations") {
    items = items.filter(i => i.operation);
  } else if (state.kpiFilter === "unconfirmed") {
    items = items.filter(i => i.confirmed === false);
  } else if (state.kpiFilter === "nuclear") {
    items = items.filter(i => i.tags && i.tags.includes("nuclear"));
  } else if (state.kpiFilter === "total") {
    // no filter
  }

  // Category filter
  if (state.categoryFilter !== "all") {
    items = items.filter(i => i.category === state.categoryFilter);
  }

  // Source filter
  if (state.sourceFilter !== "all") {
    items = items.filter(i => {
      const s = (i.source_type || "").toLowerCase();
      return s === state.sourceFilter;
    });
  }

  // Search
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    items = items.filter(i =>
      (i.title || "").toLowerCase().includes(q) ||
      (i.summary || "").toLowerCase().includes(q) ||
      (i.source || "").toLowerCase().includes(q) ||
      (i.operation || "").toLowerCase().includes(q) ||
      (i.attacker || "").toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.sortOrder === "newest") {
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (state.sortOrder === "oldest") {
    items.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (state.sortOrder === "engagement") {
    items.sort((a, b) => {
      const aE = parseInt((a.engagement || "0").replace(/[^0-9]/g, "") || 0);
      const bE = parseInt((b.engagement || "0").replace(/[^0-9]/g, "") || 0);
      return bE - aE;
    });
  }

  return items;
}

/* === RENDER FUNCTIONS === */
function renderKPIs(items) {
  const kpis = computeKPIs(items);
  document.getElementById("kpi-total").textContent = kpis.total.toLocaleString();
  document.getElementById("kpi-operations").textContent = kpis.operations.toLocaleString();
  document.getElementById("kpi-countries").textContent = kpis.countries.toLocaleString();
  document.getElementById("kpi-unconfirmed").textContent = kpis.unconfirmed.toLocaleString();
  document.getElementById("kpi-nuclear").textContent = kpis.nuclear.toLocaleString();
}

function renderFilters() {
  // Category chips
  const categories = ["all", ...new Set(NEWS_DATA.map(i => i.category).filter(Boolean))];
  const catContainer = document.getElementById("category-filters");
  catContainer.innerHTML = categories.map(cat => `
    <button class="filter-chip ${state.categoryFilter === cat ? "active" : ""}" 
            data-category="${cat}">${cat === "all" ? "All" : cat}</button>
  `).join("");

  // Source type chips
  const sourceTypes = ["all", ...new Set(NEWS_DATA.map(i => (i.source_type || "").toLowerCase()).filter(Boolean))];
  const srcContainer = document.getElementById("source-filters");
  srcContainer.innerHTML = sourceTypes.map(src => `
    <button class="filter-chip ${state.sourceFilter === src ? "active" : ""}" 
            data-source="${src}">${src === "all" ? "All" : src}</button>
  `).join("");
}

function renderMentionGraph(allItems) {
  const container = document.getElementById("mention-graph-bars");
  if (!container) return;

  // Combine news + strikes by month
  const monthCounts = {};
  [...allItems, ...STRIKES_DATA].forEach(item => {
    const d = item.date || item.date_range_start;
    if (!d) return;
    const m = d.slice(0, 7);
    monthCounts[m] = (monthCounts[m] || 0) + 1;
  });

  const months = Object.keys(monthCounts).sort();
  if (!months.length) return;

  const max = Math.max(...Object.values(monthCounts));

  container.innerHTML = months.map(m => {
    const count = monthCounts[m];
    const pct = Math.round((count / max) * 100);
    const label = new Date(m + "-01").toLocaleDateString("en-US", { month: "short", year: "2-digit" });
    return `
      <div class="mention-bar-wrap" title="${label}: ${count} events">
        <div class="mention-bar" style="height: ${pct}%"></div>
        <span class="mention-bar-label">${label}</span>
      </div>
    `;
  }).join("");
}

function renderSortControls() {
  const existingSort = document.getElementById("sort-controls");
  if (existingSort) existingSort.remove();

  const resultsInfo = document.querySelector(".results-info");
  if (!resultsInfo) return;

  const sortDiv = document.createElement("div");
  sortDiv.id = "sort-controls";
  sortDiv.className = "sort-controls";
  sortDiv.innerHTML = `
    <label class="sort-label">Sort:</label>
    <select id="sort-select" class="sort-select">
      <option value="newest" ${state.sortOrder === "newest" ? "selected" : ""}>Newest First</option>
      <option value="oldest" ${state.sortOrder === "oldest" ? "selected" : ""}>Oldest First</option>
      <option value="engagement" ${state.sortOrder === "engagement" ? "selected" : ""}>Most Engaged</option>
    </select>
  `;
  resultsInfo.parentNode.insertBefore(sortDiv, resultsInfo);

  document.getElementById("sort-select").addEventListener("change", e => {
    state.sortOrder = e.target.value;
    renderNews();
  });
}

function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;
  grid.innerHTML = VIDEO_DATA.map(v => `
    <div class="video-card">
      <div class="video-embed">
        <blockquote class="twitter-tweet" data-dnt="true">
          <a href="${v.url}"></a>
        </blockquote>
      </div>
      <div class="video-meta">
        <span class="video-source">${escapeHtml(v.source)}</span>
        <span class="video-date">${formatDate(v.date)}</span>
        ${v.confirmed ? '<span class="badge badge--confirmed">Confirmed</span>' : '<span class="badge badge--unconfirmed">Unverified</span>'}
        ${v.nsfw_risk === "high" ? '<span class="badge badge--alert">NSFW Risk</span>' : ""}
      </div>
      <p class="video-desc">${escapeHtml(v.description)}</p>
    </div>
  `).join("");

  // Re-run Twitter widget
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load(grid);
  }
}

function buildReaderNote(title) {
  const note = READERS_NOTES[title];
  if (!note) return "";
  const sourcesHtml = note.sources && note.sources.length
    ? `<div class="reader-note-sources">Sources: ${note.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.name)}</a>`).join(", ")}</div>`
    : "";
  return `
    <div class="reader-note">
      <div class="reader-note-label">Reader Note</div>
      <div class="reader-note-text">${escapeHtml(note.note)}</div>
      ${sourcesHtml}
    </div>
  `;
}

function renderNewsItem(item) {
  const id = slugify(item.title || "");
  const categoryClass = `category--${slugify(item.category || "other")}`;
  const confirmedBadge = item.confirmed === false
    ? '<span class="badge badge--unconfirmed">Unconfirmed</span>'
    : item.confirmed === true
      ? '<span class="badge badge--confirmed">Confirmed</span>'
      : '';
  const operationBadge = item.operation
    ? `<span class="badge badge--operation">${escapeHtml(item.operation)}</span>`
    : '';
  const nuclearBadge = item.tags && item.tags.includes("nuclear")
    ? '<span class="badge badge--nuclear">Nuclear</span>'
    : '';
  const readerNote = buildReaderNote(item.title);
  const engagementHtml = item.engagement
    ? `<span class="news-engagement" title="Engagement">💬 ${escapeHtml(item.engagement)}</span>`
    : '';

  return `
    <article class="news-item ${categoryClass}" id="item-${id}" data-date="${item.date}">
      <div class="news-item-header">
        <div class="news-item-meta">
          <span class="news-category">${escapeHtml(item.category)}</span>
          <span class="news-date" title="${item.date}">${timeAgo(item.date)}</span>
          ${engagementHtml}
        </div>
        <div class="news-item-badges">
          ${confirmedBadge}${operationBadge}${nuclearBadge}
        </div>
      </div>
      <h2 class="news-title">
        ${item.url
          ? `<a href="${item.url}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a>`
          : escapeHtml(item.title)
        }
      </h2>
      <p class="news-summary">${escapeHtml(item.summary)}</p>
      ${readerNote}
      <div class="news-item-footer">
        <span class="news-source">${escapeHtml(item.source)}</span>
        <span class="news-source-type">${escapeHtml(item.source_type || "")}</span>
      </div>
    </article>
  `;
}

function renderNews() {
  const feed = document.getElementById("news-feed");
  const filtered = getFilteredItems();

  document.getElementById("results-count").textContent =
    `${filtered.length} of ${NEWS_DATA.length} events`;

  if (filtered.length === 0) {
    feed.innerHTML = '<div class="empty-state">No events match the current filters.</div>';
    return;
  }

  feed.innerHTML = filtered.map(renderNewsItem).join("");
  renderKPIs(filtered);
}

/* === MAP === */
let map = null;
let strikeMarkers = [];
let assetMarkers = [];

function initMap() {
  if (map) return;
  map = L.map("map", { center: [29, 53], zoom: 5 });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);
  renderStrikes();
  renderLegend();
}

function renderStrikes() {
  // Clear existing markers
  strikeMarkers.forEach(m => map.removeLayer(m));
  assetMarkers.forEach(m => map.removeLayer(m));
  strikeMarkers = [];
  assetMarkers = [];

  const dateFrom = state.dateFrom ? new Date(state.dateFrom) : null;
  const dateTo = state.dateTo ? new Date(state.dateTo) : null;

  if (state.showStrikes) {
    STRIKES_DATA.forEach(strike => {
      if (!strike.lat || !strike.lng) return;

      // Date filter
      const strikeDate = new Date(strike.date || strike.date_range_start || "2000-01-01");
      if (dateFrom && strikeDate < dateFrom) return;
      if (dateTo && strikeDate > dateTo) return;

      // Attacker filter
      if (state.mapAttackerFilter !== "all" && strike.attacker !== state.mapAttackerFilter) return;

      const color = ATTACKER_COLORS[strike.attacker] || ATTACKER_COLORS["Unknown"];
      const marker = L.circleMarker([strike.lat, strike.lng], {
        radius: 7,
        fillColor: color,
        color: "#fff",
        weight: 1.5,
        opacity: 1,
        fillOpacity: 0.85
      });

      const confirmedLabel = strike.confirmed === false ? "⚠️ Unconfirmed" : "✅ Confirmed";
      marker.bindPopup(`
        <strong>${escapeHtml(strike.target)}</strong><br>
        <em>${escapeHtml(strike.attacker)}</em><br>
        📅 ${strike.date || strike.date_range_start || "Unknown"}<br>
        🎯 ${escapeHtml(strike.weapon || "Unknown weapon")}<br>
        ${confirmedLabel}<br>
        ${strike.casualties ? `💀 ${escapeHtml(String(strike.casualties))} casualties<br>` : ""}
        ${strike.notes ? `<small>${escapeHtml(strike.notes)}</small>` : ""}
      `);

      marker.addTo(map);
      strikeMarkers.push(marker);
    });
  }

  if (state.showAssets && typeof MILITARY_ASSETS !== "undefined") {
    MILITARY_ASSETS.forEach(asset => {
      if (!asset.lat || !asset.lng) return;
      const icon = ASSET_ICONS[asset.type] || "📍";
      const marker = L.marker([asset.lat, asset.lng], {
        icon: L.divIcon({
          html: `<div class="asset-icon" style="font-size:20px;cursor:pointer">${icon}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          className: ""
        })
      });
      marker.bindPopup(`
        <strong>${escapeHtml(asset.name)}</strong><br>
        Type: ${escapeHtml(asset.type)}<br>
        ${asset.notes ? escapeHtml(asset.notes) : ""}
      `);
      marker.addTo(map);
      assetMarkers.push(marker);
    });
  }
}

function renderLegend() {
  const strikesEl = document.getElementById("legend-strikes");
  const assetsEl = document.getElementById("legend-assets");
  if (strikesEl) {
    strikesEl.innerHTML = Object.entries(ATTACKER_COLORS).map(([name, color]) =>
      `<div class="legend-item"><span class="legend-dot" style="background:${color}"></span>${name}</div>`
    ).join("");
  }
  if (assetsEl) {
    assetsEl.innerHTML = Object.entries(ASSET_ICONS).map(([type, icon]) =>
      `<div class="legend-item">${icon} ${type}</div>`
    ).join("");
  }
}

function renderAttackerFilters() {
  const container = document.getElementById("attacker-filters");
  if (!container) return;
  const attackers = ["all", ...new Set(STRIKES_DATA.map(s => s.attacker).filter(Boolean))];
  container.innerHTML = attackers.map(a =>
    `<label class="toggle-label">
      <input type="radio" name="attacker-filter" value="${a}" ${state.mapAttackerFilter === a ? "checked" : ""}>
      <span>${a === "all" ? "All Attackers" : a}</span>
    </label>`
  ).join("");
  container.querySelectorAll("input[name='attacker-filter']").forEach(radio => {
    radio.addEventListener("change", e => {
      state.mapAttackerFilter = e.target.value;
      renderStrikes();
    });
  });
}

function renderStrikeSummary() {
  const el = document.getElementById("strike-summary");
  if (!el) return;
  const counts = {};
  STRIKES_DATA.forEach(s => {
    const a = s.attacker || "Unknown";
    counts[a] = (counts[a] || 0) + 1;
  });
  el.innerHTML = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => {
      const color = ATTACKER_COLORS[name] || "#6B7280";
      return `<div class="strike-summary-row"><span class="legend-dot" style="background:${color}"></span><span>${name}</span><span class="strike-count">${count}</span></div>`;
    }).join("");
}

/* === TABS === */
function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      document.querySelectorAll(".tab-content").forEach(tc => {
        tc.classList.toggle("active", tc.id === `tab-${tab}`);
      });
      state.activeTab = tab;
      if (tab === "map") {
        setTimeout(() => {
          initMap();
          map.invalidateSize();
          renderAttackerFilters();
          renderStrikeSummary();
        }, 100);
      }
    });
  });
}

/* === THEME === */
function initTheme() {
  const btn = document.querySelector("[data-theme-toggle]");
  const html = document.documentElement;
  const saved = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", saved);
  updateThemeBtn(btn, saved);

  btn && btn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeBtn(btn, next);
  });
}

function updateThemeBtn(btn, theme) {
  if (!btn) return;
  btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

/* === FILTER EVENT LISTENERS === */
function initFilters() {
  document.getElementById("category-filters").addEventListener("click", e => {
    if (e.target.dataset.category) {
      state.categoryFilter = e.target.dataset.category;
      state.kpiFilter = null;
      renderFilters();
      renderNews();
    }
  });

  document.getElementById("source-filters").addEventListener("click", e => {
    if (e.target.dataset.source) {
      state.sourceFilter = e.target.dataset.source;
      renderFilters();
      renderNews();
    }
  });

  document.getElementById("search-input").addEventListener("input", e => {
    state.searchQuery = e.target.value;
    renderNews();
  });

  document.querySelectorAll(".kpi-card[data-kpi]").forEach(card => {
    card.addEventListener("click", () => {
      const kpi = card.dataset.kpi;
      state.kpiFilter = state.kpiFilter === kpi ? null : kpi;
      renderNews();
    });
  });
}

/* === VIDEO TOGGLE === */
function initVideoToggle() {
  const toggle = document.getElementById("video-toggle");
  const section = document.getElementById("video-section");
  if (!toggle || !section) return;
  toggle.addEventListener("change", () => {
    section.classList.toggle("hidden", !toggle.checked);
    if (toggle.checked && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(document.getElementById("video-grid"));
    }
  });
}

/* === MAP DATE FILTERS === */
function initMapDateFilters() {
  const dateFrom = document.getElementById("date-from");
  const dateTo = document.getElementById("date-to");
  if (!dateFrom || !dateTo) return;

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

/* === INIT === */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTabs();
  renderFilters();
  renderSortControls();
  renderVideos();
  renderMentionGraph(NEWS_DATA);
  renderNews();
  initFilters();
  initVideoToggle();
  initMapDateFilters();

  // Auto-refresh
  setInterval(() => {
    renderNews();
    document.getElementById("last-updated").textContent =
      `Updated ${new Date().toLocaleTimeString()}`;
  }, 5 * 60 * 1000);

  document.getElementById("last-updated").textContent =
    `Updated ${new Date().toLocaleTimeString()}`;
});
