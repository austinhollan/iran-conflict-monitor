/* app.js — Iran Conflict Monitor Dashboard */

/* === EMBEDDED DATA === */
const NEWS_DATA = [{"title":"Trump Redesignates Houthis as Foreign Terrorist Organization","source":"Reuters","source_type":"news_agency","date":"2025-01-22","summary":"President Trump signed an executive order redesignating the Houthi movement in Yemen as a Foreign Terrorist Organization (FTO) and Specially Designated Global Terrorist (SDGT), reversing a Biden-era decision. The move was part of a broader maximum-pressure campaign targeting Iran and its proxies. The redesignation enables broader sanctions and restrictions on entities doing business with the Houthis.","url":"https://www.reuters.com/world/middle-east/trump-redesignates-houthis-terrorist-organization-2025-01-22/","confirmed":true,"category":"regional_proxy"},{"title":"Trump Sends Letter to Iran's Khamenei Requesting New Nuclear Deal","source":"PBS NewsHour","source_type":"news_agency","date":"2025-03-07","summary":"President Trump announced he had sent a letter to Iran's Supreme Leader Ali Khamenei requesting a new nuclear deal with Tehran. Trump stated he had warned that without negotiations, there would be military consequences. The letter came as Trump resumed maximum pressure sanctions on Iran following his return to the presidency and while authorizing major strikes on Houthi targets in Yemen. Earlier, in February, Khamenei had described proposed discussions with the US as 'not intelligent, wise or honorable.'","url":"https://www.pbs.org/newshour/world/a-timeline-of-tensions-over-irans-nuclear-program-as-talks-with-u-s-approach","confirmed":true,"category":"diplomacy"},{"title":"Houthis Fire Missile at US Air Force F-16, Shoot Down MQ-9 Reaper Drone Over Yemen","source":"CENTCOM","source_type":"military","date":"2025-03-11","summary":"Houthi forces announced the resumption of attacks against Israeli-linked shipping in the Red Sea, firing a missile at a US Air Force F-16 and shooting down a US MQ-9 Reaper drone over Yemen. This escalation followed the Houthis' announcement that they would resume at... [truncated, 48809 chars]

const STRIKES_DATA = [{"date":"2024-01-12","location_name":"Sanaa (Al-Dailami Air Base)","country":"Yemen","lat":15.4783,"lng":44.2194,"attacker":"United States","target":"Houthi missile launch and drone facilities, Al-Dailami Air Base","description":"First wave of Operation Poseidon Archer. US and UK struck approximately 30 Houthi military sites across Yemen including Al-Dailami Air Base near Sanaa. Destroyed/degraded over 27 missile and drone launch facilities.","confirmed":true,"source":"ACLED / USNI News","url":"https://acleddata.com/update/yemen-situation-update-january-2024","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Hodeidah (Hudaydah)","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi coastal defense and missile storage","description":"Part of initial Operation Poseidon Archer strikes. US and UK targeted Houthi military infrastructure in Hudaydah, a key Red Sea port city used for Houthi weapons transfers.","confirmed":true,"source":"BBC News","url":"https://www.bbc.com/news/world-middle-east-68064422","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Taiz","country":"Yemen","lat":13.5795,"lng":44.018,"attacker":"United States","target":"Houthi military positions","description":"Operation Poseidon Archer initial wave. Strikes on Houthi military targets in Taiz governorate.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi underground weapon storage site, missile and air surveillance capabilities","description":"Second joint US-UK strike under Operation Poseidon Archer. Eight targets hit including an underground storage site. ~25-30 precision munitions deployed including Tomahawk cruise missiles. Four RAF Typhoons participa... [truncated, 40763 chars]

const MILITARY_ASSETS = [{"asset_name":"USS Abraham Lincoln (CVN-72)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Arabian Sea, south of Iran near Oman","lat":22.0,"lng":61.5,"status":"deployed","details":"Carrier Strike Group 3 (CSG-3). Redirected from South China Sea to Arabian Sea in mid-January 2026. Carrying F/A-18 Super Hornets, F-35C fighters, and E/A-18G Growlers. One of its jets shot down an Iranian drone in early February 2026. Part of 'Operation Epic Fury' buildup against Iran.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"USS Gerald R. Ford (CVN-78)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Eastern Mediterranean Sea, off coast of Israel","lat":33.5,"lng":33.5,"status":"deployed","details":"World's largest aircraft carrier. Carrier Strike Group with embarked CVW-8. Departed Norfolk June 24, 2025, was in Caribbean for Operation Absolute Resolve, returned to Mediterranean in mid-February 2026 amid Iran tensions. Due to arrive near Israeli coast on Feb 28, 2026. Over 241 days deployed as of Feb 20.","last_updated":"2026-02-28","source":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true},{"asset_name":"USS Delbert D. Black (DDG-119)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater","lat":26.5,"lng":55.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of Persian Gulf theater forces; can launch Tomahawk land-attack missiles and has advanced air and missile defense capabilities. Confirmed in Persian Gulf theater as of February 2026.","last_updated":"2026-02-11","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Mitscher (DDG-57)","asset_type":"destroyer","nation":"United States","loca... [truncated, 36421 chars]

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

/* === READER'S NOTES: Disputed or Contested Claims === */
const READERS_NOTES = {
  "Iran Supreme Leader Khamenei Reported Killed in Israeli Strikes on Tehran": {
    note: "Iranian FM Abbas Araghchi told NBC that Khamenei is alive 'as far as I know' and that 'almost all officials are safe and sound.' Reuters reported Khamenei was transferred to a secure location outside Tehran. No independent verification, photos, or Iranian state acknowledgment of his death has surfaced. Israeli officials say their preliminary battle-damage assessment puts his survival probability as 'extremely low,' but the BBC notes the claim remains unverified.",
    sources: [
      { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation" },
      { name: "BBC Live", url: "https://www.bbc.com/news/live/cn5ge95q6y7t" },
      { name: "The Deep Dive", url: "https://thedeepdive.ca/khamenei-death-claim-unconfirmed/" }
    ]
  },
  "IDF Drone Strike Kills Hamas Al-Qassam Brigades Spokesman Abu Obaida in Gaza City": {
    note: "At the time of this strike, Hamas did not confirm or deny Abu Obaida's death. Israel claimed the kill in August 2025, but Hamas only formally acknowledged his death months later in December 2025 via a video statement from the al-Qassam Brigades. The BBC was unable to independently verify claims from either side at the time of the strike.",
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news/articles/cm214r5rd29o" },
      { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/12/29/hamas-armed-wing-confirms-deaths-of-figures-israel-earlier-said-it-killed-2" },
      { name: "NYT", url: "https://www.nytimes.com/2025/08/31/world/middleeast/hamas-abu-obeida-israel-gaza-city.html" }
    ]
  },
  "Pentagon Assessment: US Strikes Degraded Iran's Nuclear Program by 1-2 Years": {
    note: "This Pentagon claim is directly disputed by a leaked Defense Intelligence Agency (DIA) assessment, which found the strikes may have only delayed Iran's nuclear program by a few months. CNN reported the damage was largely confined to aboveground structures. An NBC News investigation found US strikes destroyed only one of three targeted nuclear sites. The CIA director acknowledged 'considerable damage' but said agencies were still analyzing the impact. Israeli officials separately assessed a two-year setback.",
    sources: [
      { name: "CNN Investigation", url: "https://www.cnn.com/2025/06/24/politics/intel-assessment-us-strikes-iran-nuclear-sites" },
      { name: "NBC News", url: "https://www.nbcnews.com/politics/national-security/new-us-assessment-finds-american-strikes-destroyed-only-one-three-iran-rcna218761" },
      { name: "NYT", url: "https://www.nytimes.com/2025/07/02/us/politics/iran-nuclear-us-strike-trump.html" }
    ]
  },
  "US Launches Operation Midnight Hammer: B-2 Bombers Strike Three Iranian Nuclear Sites": {
    note: "While the strikes themselves are confirmed, the extent of damage is disputed. Trump and Hegseth described the sites as 'obliterated,' but a DIA assessment found only one of three sites was effectively destroyed. The Chairman of the Joint Chiefs used more cautious language, saying it was 'way too early' to determine Iran's remaining nuclear capabilities. A classified CIA briefing described 'severe damage' but not total destruction.",
    sources: [
      { name: "NBC News", url: "https://www.nbcnews.com/politics/national-security/new-us-assessment-finds-american-strikes-destroyed-only-one-three-iran-rcna218761" },
      { name: "CNN", url: "https://www.cnn.com/2025/06/24/politics/intel-assessment-us-strikes-iran-nuclear-sites" }
    ]
  },
  "CENTCOM Reports Over 800 Houthi Targets Struck, 650+ Casualties, 87% Reduction in Missile Attacks": {
    note: "These figures are from CENTCOM's own reporting and have not been independently verified. Houthi forces disputed the casualty figures and later resumed missile and drone attacks on shipping and Israel, calling into question the claimed 87% reduction in capability.",
    sources: []
  },
  "CENTCOM: Operation Rough Rider Struck Over 1,000 Targets; Ballistic Missile Attacks Down 69%": {
    note: "CENTCOM-sourced figures. After the claimed 69% reduction, Houthis resumed Red Sea shipping attacks in July 2025 and continued missile strikes on Israel through late 2025, suggesting the operational degradation may have been temporary or overstated.",
    sources: []
  }
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
  dateTo: null
};

let map = null;
let strikeMarkers = [];
let assetMarkers = [];
let mapInitialized = false;

/* === INIT === */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTabs();
  initCategoryFilters();
  initSourceFilters();
  initSearch();
  renderKPIs();
  renderNewsFeed();
  updateTimestamp();

  // Hash routing: auto-open map tab if #map in URL
  if (window.location.hash === "#map" || window.location.search.includes("tab=map")) {
    setTimeout(() => document.querySelector('[data-tab="map"]').click(), 100);
  }
});

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

  // Category filter
  if (state.categoryFilters.size > 0) {
    items = items.filter(n => state.categoryFilters.has(n.category));
  }

  // Source filter
  if (state.sourceFilters.size > 0) {
    items = items.filter(n => state.sourceFilters.has(n.source_type));
  }

  // Search
  if (state.searchQuery) {
    items = items.filter(n =>
      n.title.toLowerCase().includes(state.searchQuery) ||
      n.summary.toLowerCase().includes(state.searchQuery) ||
      n.source.toLowerCase().includes(state.searchQuery)
    );
  }

  // Sort newest first
  items.sort((a, b) => new Date(b.date) - new Date(a.date));
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
          <span class="sep">·</span>
          <span class="news-source">${item.source}</span>
          <span class="badge badge-source">${SOURCE_TYPE_LABELS[item.source_type] || item.source_type}</span>
          <span class="badge badge-${item.category}">${CATEGORY_LABELS[item.category] || item.category}</span>
          ${isUnconfirmed ? '<span class="badge badge-unconfirmed">UNCONFIRMED</span>' : ""}
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

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
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
