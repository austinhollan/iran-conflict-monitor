/* app.js — Iran Conflict Monitor Dashboard */

/* === EMBEDDED DATA === */
const NEWS_DATA = [{"title":"Trump Redesignates Houthis as Foreign Terrorist Organization","source":"Reuters","source_type":"news_agency","date":"2025-01-22","summary":"President Trump signed an executive order redesignating the Houthi movement in Yemen as a Foreign Terrorist Organization (FTO) and Specially Designated Global Terrorist (SDGT), reversing a Biden-era decision. The move was part of a broader maximum-pressure campaign targeting Iran and its proxies. The redesignation enables broader sanctions and restrictions on entities doing business with the Houthis.","url":"https://www.reuters.com/world/middle-east/trump-redesignates-houthis-terrorist-organization-2025-01-22/","confirmed":true,"category":"regional_proxy","time":"12:01"},{"title":"Trump Sends Letter to Iran's Khamenei Requesting New Nuclear Deal","source":"PBS NewsHour","source_type":"news_agency","date":"2025-03-07","summary":"President Trump announced he had sent a letter to Iran's Supreme Leader Ali Khamenei requesting a new nuclear deal with Tehran. Trump stated he had warned that without negotiations, there would be military consequences. The letter came as Trump resumed maximum pressure sanctions on Iran following his return to the presidency and while authorizing major strikes on Houthi targets in Yemen. Earlier, in February, Khamenei had described proposed discussions with the US as 'not intelligent, wise or honorable.'","url":"https://www.pbs.org/newshour/world/a-timeline-of-tensions-over-irans-nuclear-program-as-talks-with-u-s-approach","confirmed":true,"category":"diplomacy","time":"21:10"},{"title":"Houthis Fire Missile at US Air Force F-16, Shoot Down MQ-9 Reaper Drone Over Yemen","source":"CENTCOM","source_type":"military","date":"2025-03-11","summary":"Houthi forces announced the resumption of attacks against Israeli-linked shipping in the Red Sea, firing a missile at a US Air Force F-16 and shooting down a US MQ-9 Reaper drone over Yemen. This escalation followed the Houthis' announcement of a ceasefire in January 2025, driven by Gaza ceasefire negotiations. CENTCOM reported the shoot-down and confirmed the F-16 was not damaged.","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":true,"category":"military_operation","time":"14:30"},{"title":"Trump Orders Massive Strikes on Houthi Targets in Yemen — Operation Rough Rider","source":"Department of Defense","source_type":"military","date":"2025-03-15","summary":"President Trump ordered large-scale military strikes against Houthi targets in Yemen, launching 'Operation Rough Rider.' The operation involved B-2 stealth bombers, carrier-based aircraft, and naval vessels striking over 50 targets across Yemen, including weapons depots, radar systems, drone facilities, and leadership compounds. It was described as the largest US military operation in the Middle East in years.","url":"https://www.defense.gov/News/Releases/Release/Article/4100000/","confirmed":true,"category":"military_operation","time":"20:00"},{"title":"CENTCOM Reports Over 800 Houthi Targets Struck, 650+ Casualties, 87% Reduction in Missile Attacks","source":"CENTCOM","source_type":"military","date":"2025-04-28","summary":"US Central Command reported that Operation Rough Rider had struck over 800 Houthi military targets, killed over 650 Houthi fighters, and achieved an 87% reduction in ballistic missile attacks and a 65% drop in drone attacks on shipping. CENTCOM said the campaign significantly degraded Houthi offensive capabilities.","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":false,"category":"military_operation","time":"17:45"},{"title":"CENTCOM: Operation Rough Rider Struck Over 1,000 Targets; Ballistic Missile Attacks Down 69%","source":"CENTCOM","source_type":"military","date":"2025-06-01","summary":"CENTCOM updated its Operation Rough Rider tally to over 1,000 Houthi targets struck since March 2025, including command centers, weapons storage, and air defense. It also claimed a 69% reduction in ballistic missile launches.","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":false,"category":"military_operation","time":"11:00"},{"title":"US and Israel Launch Operation Midnight Hammer: B-2 Bombers Strike Iranian Nuclear Sites","source":"Pentagon / White House","source_type":"government","date":"2025-06-22","summary":"The United States and Israel jointly launched 'Operation Midnight Hammer,' a coordinated strike campaign targeting Iran's three primary nuclear enrichment sites: Fordow, Natanz, and Isfahan. B-2 Spirit stealth bombers dropped GBU-57 Massive Ordnance Penetrators (MOPs). The operation began at approximately 2 AM Tehran time. Trump announced the strikes from the Oval Office.","url":"https://www.whitehouse.gov/briefing-room/","confirmed":true,"category":"military_operation","time":"02:00"},{"title":"Pentagon Assessment: US Strikes Degraded Iran's Nuclear Program by 1-2 Years","source":"Department of Defense","source_type":"government","date":"2025-06-25","summary":"The Pentagon released an initial battle damage assessment claiming US strikes on Iranian nuclear facilities had set back Iran's nuclear program by an estimated 1-2 years. Secretary Hegseth described the Fordow and Natanz sites as 'obliterated.' The assessment was disputed by a leaked DIA report.","url":"https://www.defense.gov/News/","confirmed":false,"category":"nuclear_program","time":"15:30"},{"title":"IDF Drone Strike Kills Hamas Al-Qassam Brigades Spokesman Abu Obaida in Gaza City","source":"Israel Defense Forces","source_type":"military","date":"2025-08-31","summary":"Israel's IDF announced a drone strike killed Abu Obaida, the masked spokesman of Hamas's military wing, the Al-Qassam Brigades, in Gaza City. Abu Obaida had been the public face of Hamas's military communications throughout the Gaza conflict. Hamas did not initially confirm or deny the claim.","url":"https://www.idf.il/en/","confirmed":false,"category":"military_operation","time":"18:00"},{"title":"Iran Nuclear Deal Talks Collapse; Iran Resumes Uranium Enrichment at Fordow","source":"Reuters","source_type":"news_agency","date":"2025-09-15","summary":"Negotiations for a new Iran nuclear deal collapsed after Iran rejected US preconditions. Iran announced it was resuming uranium enrichment at the Fordow site, though at reduced capacity compared to pre-strike levels. The IAEA confirmed Iranian engineers had begun repairs and reconstruction at damaged centrifuge halls.","url":"https://www.reuters.com/world/middle-east/","confirmed":true,"category":"nuclear_program","time":"13:00"},{"title":"Houthis Resume Red Sea Shipping Attacks After 3-Month Pause","source":"Reuters","source_type":"news_agency","date":"2025-07-14","summary":"Houthi forces resumed attacks on commercial shipping in the Red Sea, targeting vessels linked to the US, Israel, and UK. The group declared the ceasefire with shipping companies void and fired anti-ship ballistic missiles at two container ships in the Bab el-Mandeb strait.","url":"https://www.reuters.com/world/middle-east/","confirmed":true,"category":"military_operation","time":"08:45"},{"title":"Israel Launches Operation Northern Shield II: Strikes on Hezbollah Weapons Convoys in Lebanon","source":"Israel Defense Forces","source_type":"military","date":"2025-10-03","summary":"Israel launched a fresh wave of strikes on Hezbollah weapons storage and transfer routes in southern Lebanon and the Bekaa Valley, dubbed 'Northern Shield II.' The IDF said the strikes targeted Iranian-supplied precision-guided missiles. Lebanon's health ministry reported 23 killed.","url":"https://www.idf.il/en/","confirmed":true,"category":"military_operation","time":"03:30"},{"title":"Iran-Backed Iraqi PMF Fires Rockets at Al-Asad Air Base in Iraq","source":"US CENTCOM","source_type":"military","date":"2025-10-18","summary":"Iran-backed Iraqi Popular Mobilization Forces (PMF) factions fired a salvo of rockets at Al-Asad Air Base in western Iraq, where US forces are stationed. CENTCOM said the base's CIWS intercepted multiple rockets; three US soldiers were wounded. The US struck the launch site in a retaliatory strike.","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":true,"category":"regional_proxy","time":"22:15"},{"title":"US Imposes New Round of Sanctions Targeting Iran's Oil Export Network","source":"US Treasury Department","source_type":"government","date":"2025-11-12","summary":"The US Treasury OFAC designated 14 entities and 8 vessels involved in transporting Iranian crude oil, primarily to China. The designations targeted front companies in the UAE, Hong Kong, and Malaysia. Treasury Secretary stated the action was part of continued maximum pressure to deny Iran revenue for its nuclear and proxy programs.","url":"https://home.treasury.gov/news/press-releases/","confirmed":true,"category":"sanctions","time":"10:00"},{"title":"IAEA Report: Iran Has Enough Enriched Uranium for Multiple Warheads","source":"International Atomic Energy Agency","source_type":"think_tank","date":"2025-12-10","summary":"The IAEA released a quarterly report finding Iran had accumulated enough enriched uranium (at 60% purity) to produce material for 3-4 nuclear weapons if further enriched to weapons grade. The report noted Iran had partially restored centrifuge operations at Natanz despite US/Israeli strikes in June 2025.","url":"https://www.iaea.org/newscenter/pressreleases/","confirmed":true,"category":"nuclear_program","time":"14:00"},{"title":"Hamas Formally Confirms Death of Abu Obaida in Video Statement","source":"Al Jazeera","source_type":"news_agency","date":"2025-12-29","summary":"Hamas's Al-Qassam Brigades released a video formally confirming the death of Abu Obaida, their longtime spokesman, in an Israeli drone strike in August 2025. The statement named a successor and vowed continued resistance. Al Jazeera reported the confirmation came after months of ambiguity.","url":"https://www.aljazeera.com/news/2025/12/29/hamas-armed-wing-confirms-deaths-of-figures-israel-earlier-said-it-killed-2","confirmed":true,"category":"military_operation","time":"16:30"},{"title":"USS Abraham Lincoln Carrier Strike Group Redirected to Arabian Sea Near Iran","source":"US Navy / CSIS","source_type":"military","date":"2026-01-18","summary":"The USS Abraham Lincoln Carrier Strike Group (CSG-3) was redirected from the South China Sea to the Arabian Sea, positioning south of Iran near Oman. The redeployment was part of the Trump administration's 'Operation Epic Fury' buildup. The carrier group includes F/A-18 Super Hornets, F-35C fighters, and E/A-18G Growlers.","url":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true,"category":"military_deployment","time":"09:00"},{"title":"B-52 Bombers Deploy to Diego Garcia as Iran Pressure Mounts","source":"CSIS / Task & Purpose","source_type":"think_tank","date":"2026-01-25","summary":"The US deployed additional B-52H Stratofortress strategic bombers to Diego Garcia in the Indian Ocean, bringing the total to at least 6 aircraft. The deployment was seen as a direct signal to Iran. B-52s can carry the GBU-28 bunker buster and are capable of conventional strikes on hardened targets.","url":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true,"category":"military_deployment","time":"11:30"},{"title":"US Aircraft Carrier Jets Intercept Iranian Drone Over Arabian Sea","source":"US CENTCOM","source_type":"military","date":"2026-02-04","summary":"An F/A-18 Super Hornet from USS Abraham Lincoln shot down an Iranian IRGC drone that was surveilling the carrier group in the Arabian Sea. CENTCOM described it as an 'unsafe and unprofessional' provocation. Iran did not comment. The incident heightened tensions as diplomatic back-channels remained stalled.","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":true,"category":"military_operation","time":"14:20"},{"title":"USS Gerald R. Ford Carrier Strike Group Arrives Near Israeli Coast","source":"Task & Purpose","source_type":"military","date":"2026-02-28","summary":"The USS Gerald R. Ford (CVN-78), the world's largest aircraft carrier, arrived near the Israeli coast in the Eastern Mediterranean as part of the Operation Epic Fury buildup. The carrier had been deployed for over 241 days. It joins a force posture aimed at deterrence and potential strike operations against Iran.","url":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true,"category":"military_deployment","time":"07:00"},{"title":"US and Israel Launch Operation Epic Fury: Strikes Across Iran","source":"Reuters / AP","source_type":"news_agency","date":"2026-02-28","summary":"The United States and Israel launched a massive joint operation, 'Operation Epic Fury,' striking military targets across Iran including IRGC command centers, air defense systems, missile batteries, naval assets, and suspected nuclear-related sites. B-2 bombers, carrier-based aircraft, and cruise missiles were used. The Pentagon said the operation involved over 125 strike aircraft and hundreds of munitions.","url":"https://www.reuters.com/world/middle-east/","confirmed":true,"category":"military_operation","time":"01:30"},{"title":"Iran Supreme Leader Khamenei Reported Killed in Israeli Strikes on Tehran","source":"Multiple (Unverified)","source_type":"social_media","date":"2026-02-28","summary":"Multiple reports circulated claiming Iran's Supreme Leader Ali Khamenei was killed in Israeli airstrikes on Tehran. Israeli officials said their battle-damage assessment puts his survival as 'extremely low.' Iranian FM Abbas Araghchi said Khamenei was alive 'as far as I know.' Reuters reported he was transferred to a secure location. No independent verification has surfaced.","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","confirmed":false,"category":"intelligence","time":"06:15"},{"title":"Iran Fires Ballistic Missiles at Israel and US Bases in Gulf — Retaliation Begins","source":"Al Jazeera / Reuters","source_type":"news_agency","date":"2026-02-28","summary":"Iran launched a wave of ballistic missiles and drones targeting Israel and US military bases in the Persian Gulf region, including in Bahrain and Qatar. Iron Dome and Patriot systems intercepted many, but reports of impacts near Eilat and a US logistics facility in Qatar emerged. Iran's IRGC called it the start of 'Operation True Promise III.'","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","confirmed":false,"category":"military_operation","time":"09:45"},{"title":"Dubai International Airport Suspends Flights Amid Regional Conflict","source":"UAE Civil Aviation / Reuters","source_type":"news_agency","date":"2026-02-28","summary":"Dubai International Airport temporarily suspended all flights amid escalating regional conflict, with reports of Iranian missiles in Gulf airspace. Multiple airlines diverted flights to Muscat, Doha, and Amman. The UAE issued an airspace advisory. Reports emerged of an impact near the airport perimeter, though UAE authorities did not confirm hostile fire.","url":"https://www.reuters.com/world/middle-east/","confirmed":false,"category":"civilian_impact","time":"11:00"}];

const STRIKES_DATA = [{"date":"2024-01-12","location_name":"Sanaa (Al-Dailami Air Base)","country":"Yemen","lat":15.4783,"lng":44.2194,"attacker":"United States","target":"Houthi missile launch and drone facilities, Al-Dailami Air Base","description":"First wave of Operation Poseidon Archer. US and UK struck approximately 30 Houthi military sites across Yemen including Al-Dailami Air Base near Sanaa. Destroyed/degraded over 27 missile and drone launch facilities.","confirmed":true,"source":"ACLED / USNI News","url":"https://acleddata.com/update/yemen-situation-update-january-2024","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Hodeidah (Hudaydah)","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi coastal defense and missile storage","description":"Part of initial Operation Poseidon Archer strikes. US and UK targeted Houthi military infrastructure in Hudaydah, a key Red Sea port city used for Houthi weapons transfers.","confirmed":true,"source":"BBC News","url":"https://www.bbc.com/news/world-middle-east-68064422","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Taiz","country":"Yemen","lat":13.5795,"lng":44.018,"attacker":"United States","target":"Houthi military positions","description":"Operation Poseidon Archer initial wave. Strikes on Houthi military targets in Taiz governorate.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi underground weapon storage site, missile and air surveillance capabilities","description":"Second joint US-UK strike under Operation Poseidon Archer. Eight targets hit including an underground storage site. ~25-30 precision munitions deployed including Tomahawk cruise missiles. Four RAF Typhoons participated.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"cruise_missile"},{"date":"2024-02-03","location_name":"Ruba, Syria","country":"Syria","lat":33.5,"lng":38.5,"attacker":"United States","target":"IRGC-linked Iran-backed militia facilities","description":"US strikes on Iran-backed militia facilities in eastern Syria in retaliation for Tower 22 drone attack in Jordan that killed 3 US soldiers. Strikes on 85 targets across 7 sites in Iraq and Syria.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","weapon_type":"airstrike"},{"date":"2024-02-03","location_name":"Abu Kamal, Syria","country":"Syria","lat":34.45,"lng":40.919,"attacker":"United States","target":"Iran-backed militia command and weapons storage","description":"Part of retaliatory strikes on Iran-backed militias following Tower 22 attack. CENTCOM said it struck 7 facilities used by IRGC and affiliated groups.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","weapon_type":"airstrike"},{"date":"2024-02-03","location_name":"Al-Qa'im, Iraq","country":"Iraq","lat":34.385,"lng":41.117,"attacker":"United States","target":"Kataib Hezbollah command facilities","description":"Part of retaliatory Operation Inherent Resolve response strikes. US targeted Kataib Hezbollah sites in western Iraq.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","weapon_type":"airstrike"},{"date":"2024-04-01","location_name":"Damascus, Syria","country":"Syria","lat":33.5138,"lng":36.2765,"attacker":"Israel","target":"Iranian consulate building, IRGC leadership","description":"Israel struck what Iran called its consular building in Damascus, killing 7 IRGC officers including Brig. Gen. Mohammad Reza Zahedi, the head of IRGC-Quds Force operations in Syria and Lebanon. The strike escalated to Iran's direct retaliatory strike on Israel April 13-14.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israeli-airstrike-kills-two-iranian-generals-damascus-2024-04-01/","weapon_type":"airstrike"},{"date":"2024-04-13","location_name":"Southern Israel (Negev)","country":"Israel","lat":30.8,"lng":34.8,"attacker":"Iran","target":"Israeli military bases — Nevatim Air Base and Ramon Air Base","description":"Iran launched 'Operation True Promise' — first-ever direct attack on Israel from Iranian soil. Fired 170 drones, 30 cruise missiles, and 110 ballistic missiles. Over 99% intercepted by Israel, US, UK, France, and Jordan. Minor damage to Nevatim Air Base, 7-year-old girl injured by shrapnel.","confirmed":true,"source":"IDF / Reuters","url":"https://www.reuters.com/world/middle-east/iran-launches-drone-attack-against-israel-2024-04-13/","weapon_type":"ballistic_missile"},{"date":"2024-07-30","location_name":"Tehran, Iran","country":"Iran","lat":35.7219,"lng":51.3347,"attacker":"Israel","target":"Ismail Haniyeh, Hamas Political Bureau Chief","description":"Ismail Haniyeh, Chairman of the Hamas Political Bureau, was assassinated in Tehran while attending the inauguration of Iranian President Masoud Pezeshkian. Israel did not claim the strike at the time. Iran blamed Israel and the US.","confirmed":true,"source":"Reuters / Al Jazeera","url":"https://www.reuters.com/world/middle-east/hamas-chief-ismail-haniyeh-killed-tehran-iran-state-media-2024-07-31/","weapon_type":"targeted_strike"},{"date":"2024-08-25","location_name":"Southern Lebanon (Hezbollah positions)","country":"Lebanon","lat":33.27,"lng":35.5,"attacker":"Israel","target":"Hezbollah rocket and missile launch sites","description":"Israel launched large preemptive strikes on Hezbollah rocket and missile infrastructure in Lebanon, firing over 100 aircraft in coordinated strikes on ~40 Hezbollah positions. Hezbollah simultaneously launched a retaliatory rocket barrage.","confirmed":true,"source":"IDF","url":"https://www.idf.il/en/","weapon_type":"airstrike"},{"date":"2024-09-27","location_name":"Beirut, Lebanon","country":"Lebanon","lat":33.8886,"lng":35.4955,"attacker":"Israel","target":"Hassan Nasrallah, Hezbollah Secretary-General; Hezbollah HQ","description":"Israel struck Hezbollah's headquarters in the Dahieh suburb of Beirut with a series of bunker-busting bombs, killing Hezbollah leader Hassan Nasrallah. The strike also killed several other Hezbollah commanders including Ali Karaki. The killing was a major blow to the Iran-backed group.","confirmed":true,"source":"IDF / Reuters","url":"https://www.reuters.com/world/middle-east/israel-strikes-hezbollah-hq-beirut-says-nasrallah-targeted-2024-09-27/","weapon_type":"bunker_buster"},{"date":"2024-10-01","location_name":"Central and Southern Israel","country":"Israel","lat":31.8,"lng":34.9,"attacker":"Iran","target":"Israeli military bases and infrastructure — Operation True Promise II","description":"Iran launched 'Operation True Promise II' with ~200 ballistic missiles targeting Israel, including Nevatim and Tel Nof air bases. Approximately 90% intercepted. Two missiles hit the Nevatim base runway. One Palestinian man killed by shrapnel in the West Bank.","confirmed":true,"source":"IDF / Reuters","url":"https://www.reuters.com/world/middle-east/iran-fires-missiles-israel-live-updates-2024-10-01/","weapon_type":"ballistic_missile"},{"date":"2024-10-26","location_name":"Tehran and Karaj, Iran","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"Iranian air defense systems (S-300), radar sites, missile production","description":"Israel launched retaliatory strikes targeting Iranian air defense systems, radar installations, and missile fuel production facilities in Tehran and Karaj. Iran's S-300 batteries were targeted and several destroyed. This was Israel's most direct attack on Iranian soil to date.","confirmed":true,"source":"IDF / Reuters","url":"https://www.reuters.com/world/middle-east/israel-attacks-iran-drones-heard-near-isfahan-iranian-media-2024-10-26/","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Sanaa, Yemen","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi command, control, and weapons — Operation Rough Rider","description":"Launch of Operation Rough Rider. Largest US strikes on Yemen since the conflict began. B-2 bombers and carrier aircraft struck Houthi leadership compounds, weapons depots, and radar systems across Yemen.","confirmed":true,"source":"DOD","url":"https://www.defense.gov/News/","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Hodeidah, Yemen","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi naval and weapons infrastructure","description":"Operation Rough Rider strikes on Hodeidah port area targeting Houthi weapons transfer facilities and naval assets.","confirmed":true,"source":"DOD","url":"https://www.defense.gov/News/","weapon_type":"airstrike"},{"date":"2025-06-22","location_name":"Fordow, Iran","country":"Iran","lat":34.8845,"lng":50.9747,"attacker":"United States","target":"Fordow Fuel Enrichment Plant (FFEP) — underground nuclear site","description":"Operation Midnight Hammer. US B-2 bombers dropped GBU-57 Massive Ordnance Penetrators on the deeply buried Fordow underground nuclear enrichment plant. The site had been enriching uranium to 60% purity.","confirmed":true,"source":"Pentagon","url":"https://www.defense.gov/News/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Natanz, Iran","country":"Iran","lat":33.7225,"lng":51.7268,"attacker":"United States","target":"Natanz Fuel Enrichment Plant — primary enrichment facility","description":"Operation Midnight Hammer. Strikes on Natanz, Iran's main nuclear enrichment site. Multiple bunker-busting bombs dropped. Aboveground structures destroyed; extent of underground damage disputed.","confirmed":true,"source":"Pentagon","url":"https://www.defense.gov/News/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Isfahan, Iran","country":"Iran","lat":32.6597,"lng":51.6653,"attacker":"United States","target":"Isfahan Nuclear Technology Center / uranium conversion facility","description":"Operation Midnight Hammer. US strikes on nuclear-related facilities in Isfahan including the Uranium Conversion Facility (UCF). Isfahan is the location of multiple nuclear research and production centers.","confirmed":true,"source":"Pentagon","url":"https://www.defense.gov/News/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Tehran, Iran","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"IRGC HQ, air defense command, leadership compounds","description":"Operation Epic Fury. Israeli F-35I Adir strikes on IRGC headquarters in Tehran, air defense command nodes, and suspected leadership compounds. Reports of impacts near Khamenei's residence compound.","confirmed":true,"source":"IDF","url":"https://www.idf.il/en/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Bandar Abbas, Iran","country":"Iran","lat":27.1832,"lng":56.2666,"attacker":"United States","target":"IRGC Navy headquarters and fast-attack boat facilities","description":"Operation Epic Fury. US Navy Tomahawk cruise missiles and carrier aircraft struck IRGC Navy bases at Bandar Abbas, targeting fast-attack vessels, mine warfare infrastructure, and headquarters.","confirmed":true,"source":"Pentagon","url":"https://www.defense.gov/News/","weapon_type":"cruise_missile"},{"date":"2026-02-28","location_name":"Kharg Island, Iran","country":"Iran","lat":29.2496,"lng":50.3265,"attacker":"United States","target":"Oil export terminal and IRGC coastal defense","description":"Operation Epic Fury. US strikes on Kharg Island, Iran's primary oil export terminal. Also targeted IRGC coastal defense installations. The strike aimed to pressure Iran economically by disrupting oil exports.","confirmed":false,"source":"Reuters (unconfirmed)","url":"https://www.reuters.com/world/middle-east/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Parchin Military Complex, Iran","country":"Iran","lat":35.5167,"lng":51.7667,"attacker":"Israel","target":"Suspected nuclear weapons research and conventional missile production","description":"Operation Epic Fury. Israeli strikes on Parchin military complex, which has been associated with Iranian nuclear weapons research and conventional missile manufacturing.","confirmed":false,"source":"Unconfirmed reports","url":"https://www.reuters.com/world/middle-east/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Israel (Southern — retaliatory)","country":"Israel","lat":31.0,"lng":34.8,"attacker":"Iran","target":"Israeli military bases — retaliatory ballistic missile salvo","description":"Iran fired a salvo of ballistic missiles toward Israel in retaliation for Operation Epic Fury strikes. Iron Dome, Arrow-3, and David's Sling systems intercepted most missiles. Reports of partial impacts near Dimona and Nevatim.","confirmed":false,"source":"Unconfirmed","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","weapon_type":"ballistic_missile"},{"date":"2026-02-28","location_name":"US bases, Bahrain/Qatar","country":"Bahrain","lat":26.2172,"lng":50.5954,"attacker":"Iran","target":"US Naval Support Activity Bahrain, Al Udeid Air Base Qatar","description":"Iran-launched missiles and drones targeted US military installations in the Gulf. Patriot systems at NSA Bahrain and Al Udeid intercepted multiple inbound munitions. Reports of minor damage at Al Udeid perimeter.","confirmed":false,"source":"Unconfirmed","url":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","weapon_type":"ballistic_missile"}];

const MILITARY_ASSETS = [{"asset_name":"USS Abraham Lincoln (CVN-72)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Arabian Sea, south of Iran near Oman","lat":22.0,"lng":61.5,"status":"deployed","details":"Carrier Strike Group 3 (CSG-3). Redirected from South China Sea to Arabian Sea in mid-January 2026. Carrying F/A-18 Super Hornets, F-35C fighters, and E/A-18G Growlers. One of its jets shot down an Iranian drone in early February 2026. Part of 'Operation Epic Fury' buildup against Iran.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"USS Gerald R. Ford (CVN-78)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Eastern Mediterranean Sea, off coast of Israel","lat":33.5,"lng":33.5,"status":"deployed","details":"World's largest aircraft carrier. Carrier Strike Group with embarked CVW-8. Departed Norfolk June 24, 2025, was in Caribbean for Operation Absolute Resolve, returned to Mediterranean in mid-February 2026 amid Iran tensions. Due to arrive near Israeli coast on Feb 28, 2026. Over 241 days deployed as of Feb 20.","last_updated":"2026-02-28","source":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true},{"asset_name":"USS Delbert D. Black (DDG-119)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater","lat":26.5,"lng":55.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of Persian Gulf theater forces; can launch Tomahawk land-attack missiles and has advanced air and missile defense capabilities. Confirmed in Persian Gulf theater as of February 2026.","last_updated":"2026-02-11","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Mitscher (DDG-57)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater","lat":26.8,"lng":55.5,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of Persian Gulf theater forces. Confirmed deployed to the region as of February 2026 as part of the Operation Epic Fury buildup.","last_updated":"2026-02-11","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"B-52H Stratofortress (6 aircraft)","asset_type":"strategic_bomber","nation":"United States","location_description":"Diego Garcia, British Indian Ocean Territory","lat":-7.3195,"lng":72.4236,"status":"deployed","details":"At least 6 B-52H strategic bombers deployed to Diego Garcia. Capable of carrying conventional cruise missiles and bunker-busting munitions. Part of the pressure campaign against Iran. Can reach Iranian targets within hours.","last_updated":"2026-02-25","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"B-2 Spirit Stealth Bombers","asset_type":"strategic_bomber","nation":"United States","location_description":"Whiteman AFB / Diego Garcia forward deployment","lat":38.7218,"lng":-93.5491,"status":"active","details":"B-2 Spirit stealth bombers used in Operation Midnight Hammer (June 2025) to strike Iranian nuclear sites. Also used in Operation Rough Rider against Houthi targets. Can carry GBU-57 Massive Ordnance Penetrators.","last_updated":"2026-02-28","source":"https://www.defense.gov/News/","confirmed":true},{"asset_name":"IRGC Navy (Strait of Hormuz)","asset_type":"naval_force","nation":"Iran","location_description":"Strait of Hormuz and Persian Gulf","lat":26.5667,"lng":56.25,"status":"active","details":"IRGC Navy has significant presence in the Strait of Hormuz with fast-attack boats, anti-ship missiles, and mine-laying capabilities. Has threatened to close the strait. Key threat to US and allied naval forces in the Gulf.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Iran Ballistic Missile Forces (IRGC Aerospace)","asset_type":"missile_battery","nation":"Iran","location_description":"Underground missile silos across Iran","lat":32.4279,"lng":53.688,"status":"active","details":"Iran maintains an estimated 3,000+ ballistic missiles including Shahab-3, Emad, Ghadr, and Fattah hypersonic missiles. Has fired two direct salvo attacks on Israel (April and October 2024). Threatening posture against US bases and Israel as of Feb 2026.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Houthi Missile and Drone Arsenal","asset_type":"missile_battery","nation":"Yemen (Houthi)","location_description":"Yemen — multiple underground launch sites","lat":15.5,"lng":44.2,"status":"active","details":"Houthis have fired over 400 drones and missiles at Israel and Red Sea shipping since October 2023. Despite extensive US strikes (Ops Poseidon Archer and Rough Rider), they retain significant launch capability including Zulfiqar ballistic missiles and Shahed-style drones supplied by Iran.","last_updated":"2026-02-28","source":"https://www.centcom.mil/MEDIA/PRESS-RELEASES/","confirmed":true},{"asset_name":"IDF Air Force (F-35I Adir fleet)","asset_type":"air_force","nation":"Israel","location_description":"Nevatim Air Base, Israel","lat":31.2083,"lng":35.0122,"status":"active","details":"Israel operates ~50 F-35I Adir stealth fighters. Used in strikes on Iranian nuclear sites (June 2025) and Operation Epic Fury (Feb 2026). Nevatim Air Base is the primary base. Israel also operates F-15Is (Ra'am) for long-range strike missions.","last_updated":"2026-02-28","source":"https://www.idf.il/en/","confirmed":true}];

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

/* === VIDEO DATA === */
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
  showVideos: true
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
          ${item.time ? `<span class="news-time">${formatTime(item.time)}</span>` : ""}
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
    var unconfirmedBadge = !video.confirmed ? '<span class="badge badge-unconfirmed">UNCONFIRMED</span>' : '';

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
          unconfirmedBadge +
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
