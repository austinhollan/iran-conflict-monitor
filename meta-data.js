/* meta-data.js — VIDEO_DATA + READERS_NOTES */
const VIDEO_DATA = [
  {
    id: "v1",
    title: "CENTCOM Operation Epic Fury — First Strike Footage",
    source: "Current Report (@Currentreport1)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/Currentreport1/status/2027813254173757661",
    tweet_id: "2027813254173757661",
    description: "CENTCOM-released footage showing initial strikes on Iranian military targets as part of Operation Epic Fury.",
    nsfw_risk: "medium",
    followers: "182K",
    confirmed: false
  },
  {
    id: "v2",
    title: "Dramatic Footage of US Strikes on Iran — NY Post",
    source: "New York Post (@nypost)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/nypost/status/2027885662351892566",
    tweet_id: "2027885662351892566",
    description: "NY Post compilation of dramatic footage showing US military strikes on Iranian targets including explosions and aerial views.",
    nsfw_risk: "medium",
    followers: "3.6M",
    confirmed: true
  },
  {
    id: "v3",
    title: "Pentagon Releases Official Strike Footage",
    source: "Defense News (@defense_news)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/defense_news/status/2027822711087514000",
    tweet_id: "2027822711087514000",
    description: "Pentagon official release of precision strike footage against Iranian air defense and missile sites.",
    nsfw_risk: "low",
    followers: "271K",
    confirmed: true
  },
  {
    id: "v4",
    title: "USS Abraham Lincoln Carrier Launch Operations",
    source: "The Independent (@Independent)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/Independent/status/2027870262600007680",
    tweet_id: "2027870262600007680",
    description: "Footage of carrier-based aircraft launching from USS Abraham Lincoln for strike missions against Iran.",
    nsfw_risk: "low",
    followers: "3.4M",
    confirmed: true
  },
  {
    id: "v5",
    title: "IRGC Response: Iran's Revolutionary Guard Statements",
    source: "TRT World (@trtworld)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/trtworld/status/2027773883206545863",
    tweet_id: "2027773883206545863",
    description: "TRT World coverage of IRGC response to US/Israeli strikes, including official Iranian military statements.",
    nsfw_risk: "low",
    followers: "675K",
    confirmed: true
  },
  {
    id: "v6",
    title: "Dubai International Airport Disruption Footage",
    source: "OSINT Defender (@sentdefender)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/sentdefender/status/2027855511870116249",
    tweet_id: "2027855511870116249",
    description: "Reports of Dubai airport evacuations and flight disruptions amid regional conflict escalation. Multiple flights diverted.",
    nsfw_risk: "low",
    followers: "1.9M",
    confirmed: false
  },
  {
    id: "v7",
    title: "Impact Footage Near Dubai Airport",
    source: "Megatron (@Megatron_ron)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/Megatron_ron/status/2027859974341157077",
    tweet_id: "2027859974341157077",
    description: "Unverified footage showing reported impacts near Dubai International Airport during Iranian retaliatory strikes.",
    nsfw_risk: "medium",
    followers: "605K",
    confirmed: false
  },
  {
    id: "v8",
    title: "Over 900 Strikes Documented — Compilation",
    source: "WORLD AT WAR (@World_At_War_6)",
    platform: "X (Twitter)",
    date: "2026-02-28",
    url: "https://x.com/World_At_War_6/status/2027855074916241736",
    tweet_id: "2027855074916241736",
    description: "Compilation footage documenting the scale of US/Israeli military operations with over 900 documented strike events.",
    nsfw_risk: "high",
    followers: "106K",
    confirmed: false
  }
];

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
