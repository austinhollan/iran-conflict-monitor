/* app.js — Iran Conflict Monitor Dashboard */

/* === EMBEDDED DATA === */
const NEWS_DATA = [{"title":"Trump Redesignates Houthis as Foreign Terrorist Organization","source":"Reuters","source_type":"news_agency","date":"2025-01-22","summary":"President Trump signed an executive order redesignating the Houthi movement in Yemen as a Foreign Terrorist Organization (FTO) and Specially Designated Global Terrorist (SDGT), reversing a Biden-era decision. The move was part of a broader maximum-pressure campaign targeting Iran and its proxies. The redesignation enables broader sanctions and restrictions on entities doing business with the Houthis.","url":"https://www.reuters.com/world/middle-east/trump-redesignates-houthis-terrorist-organization-2025-01-22/","confirmed":true,"category":"regional_proxy","time":"12:01"},{"title":"Trump Sends Letter to Iran's Khamenei Requesting New Nuclear Deal","source":"PBS NewsHour","source_type":"news_agency","date":"2025-03-07","summary":"President Trump announced he had sent a letter to Iran's Supreme Leader Ali Khamenei requesting a new nuclear deal with Tehran. Trump stated he had warned that without negotiations, there would be military consequences. The letter came as Trump resumed maximum pressure sanctions on Iran following his return to the presidency and while authorizing major strikes on Houthi targets in Yemen. Earlier, in February, Khamenei had described proposed discussions with the US as 'not intelligent, wise or honorable.'","url":"https://www.pbs.org/newshour/world/a-timeline-of-tensions-over-irans-nuclear-program-as-talks-with-u-s-approach","confirmed":true,"category":"diplomacy","time":"21:10"},{"title":"Houthis Fire Missile at US Air Force F-16, Shoot Down MQ-9 Reaper Drone Over Yemen","source":"CENTCOM","source_type":"military","date":"2025-03-11","summary":"Houthi forces announced the resumption of attacks against Israeli-linked shipping in the Red Sea, firing a missile at a US Air Force F-16 and shooting down a US MQ-9 Reaper drone over Yemen. This escalation followed the Houthis' announcement that they would resume attacks after a deadline they set for the reopening of Gaza border crossings was not met. The incidents set the stage for the US military campaign that launched days later.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"15:46"},{"title":"US Launches 'Operation Rough Rider' - Massive Airstrike Campaign Against Houthi Targets in Yemen","source":"NPR","source_type":"news_agency","date":"2025-03-15","summary":"President Trump ordered a 'decisive and powerful' wave of airstrikes against Houthi rebels in Yemen, launching what would become Operation Rough Rider — the largest US military operation of Trump's second term. Initial strikes targeted radar systems, air defenses, and ballistic and drone launch sites. Trump warned Iran to stop supporting the Houthis, stating Secretary Hegseth put Iran 'on notice.'","url":"https://www.npr.org/2025/03/15/nx-s1-5329284/trump-airstrikes-houthis-yemen-iran","confirmed":true,"category":"military_operation","time":"09:10"},{"title":"USS Harry S. Truman Carrier Strike Group Begins Sustained Combat Operations in Red Sea","source":"Naval News","source_type":"news_agency","date":"2025-03-17","summary":"The US Navy entered sustained combat operations in the Fifth Fleet area following President Trump's order for 'overwhelming lethal force.' F/A-18 Super Hornets from USS Harry S. Truman launched strikes against Houthi command and control centers, missile launchers, and leadership sites. The campaign involved multiple rounds of proactive strikes — not episodic retaliatory strikes — per US officials, with Tomahawk missiles also fired from guided-missile destroyers.","url":"https://www.navalnews.com/naval-news/2025/03/u-s-navy-begins-sustained-combat-operations-against-houthi-forces/","confirmed":true,"category":"military_operation","time":"20:39"},{"title":"Houthis Launch 18-Missile and Drone Salvo at USS Harry S. Truman Carrier Strike Group","source":"Al Jazeera English","source_type":"news_agency","date":"2025-03-17","summary":"Houthi forces claimed to have attacked USS Harry S. Truman and its escort ships using 18 ballistic and cruise missiles and a drone in retaliation for US strikes on Yemen. A US official confirmed 11 drones were intercepted by F-16 and F-18 fighters, while one Houthi missile malfunctioned and landed in the water. Houthis launched a second claimed attack on the carrier and surrounding warships the following morning.","url":"https://www.aljazeera.com/news/2025/3/17/houthis-claim-retaliatory-attack-on-us-ships","confirmed":true,"category":"military_operation","time":"09:52"},{"title":"CENTCOM Strikes Kill Houthi Naval Forces Commander, Multiple Senior Officials at Al Fazah","source":"CENTCOM","source_type":"military","date":"2025-04-02","summary":"US Central Command conducted an airstrike in al Fazah, Hudaydah Governorate, killing 70 Houthi fighters including the al Tuhayta Axis Commander Najib Kashri and the Red Sea Coastal Region Commander Abu Taleb. A prior strike on a naval base at Al Hudaydah wounded eight people including Mansour al-Saadi, commander of Houthi naval forces. The April 2 strike was described as one of the most significant leadership kills of the campaign.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"18:07"},{"title":"US-Iran First Round of Nuclear Talks Held in Oman","source":"AP News","source_type":"news_agency","date":"2025-04-12","summary":"The first round of US-Iran direct nuclear discussions took place in Oman, with US Middle East Envoy Steve Witkoff meeting Iranian Foreign Minister Abbas Araghchi. Both sides agreed to continue talks. Trump had announced the talks one week prior, calling them 'direct discussions,' while Iran characterized them as 'indirect' through Omani intermediaries. A second round followed in Rome on April 19, with a third in Oman on April 26 including expert-level discussions for the first time.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"diplomacy","time":"11:24"},{"title":"CENTCOM Reports Over 800 Houthi Targets Struck, 650+ Casualties, 87% Reduction in Missile Attacks","source":"CENTCOM","source_type":"military","date":"2025-04-21","summary":"A CENTCOM spokesman announced that Operation Rough Rider had struck more than 800 Houthi targets, caused more than 650 Houthi casualties, and reduced Houthi missile attacks by 87 percent and drone attacks by 65 percent. The strikes had destroyed ballistic missile launchers, drone production sites, command and control nodes, and Houthi leadership meeting sites. CENTCOM indicated the campaign was successfully degrading Houthi capabilities.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"07:44"},{"title":"UK Joins US Strikes on Houthi Targets in Yemen","source":"BBC News","source_type":"news_agency","date":"2025-04-30","summary":"British forces joined the United States in conducting strikes on Houthi targets in Yemen as part of a joint operation, marking the UK's entry into the US-led campaign. The UK Defense Ministry said Typhoon FGR4 fighter jets armed with Paveway IV guided bombs targeted a Houthi drone manufacturing center identified as being used to produce naval attack drones. The UK stated the operation was conducted with 'very careful planning to minimize risk to civilians.'","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"21:04"},{"title":"CENTCOM: Operation Rough Rider Struck Over 1,000 Targets; Ballistic Missile Attacks Down 69%","source":"CENTCOM","source_type":"military","date":"2025-05-01","summary":"CENTCOM stated Operation Rough Rider struck over 1,000 Houthi targets across Yemen, killing hundreds of militants including several senior leaders, and that Houthi ballistic missile attacks had decreased by 69 percent and drone attacks by 55 percent. Attacking the Ras Isa fuel port was described as stopping Houthi fuel imports which 'will begin to impact Houthi ability to not only conduct operations, but also to generate millions of dollars in revenue.' Striking the oil port disrupted a key Houthi financing mechanism.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"12:55"},{"title":"Hegseth Orders USS Truman to Remain in Middle East; USS Carl Vinson Deployment Extended","source":"Stars and Stripes","source_type":"news_agency","date":"2025-05-02","summary":"Defense Secretary Pete Hegseth ordered the USS Harry S. Truman carrier strike group to remain in the Red Sea for an additional week, extending its already over seven-month deployment, while the USS Carl Vinson was ordered from the Pacific to the Middle East with its deployment extended by three months. The Truman had struck more than 1,000 Houthi targets across Yemen since March 15. The Truman's commanding officer was fired following a February collision with a merchant ship near Port Said.","url":"https://www.stripes.com/theaters/middle_east/2025-05-02/truman-deployment-red-sea-17658869.html","confirmed":true,"category":"military_deployment","time":"10:47"},{"title":"Pentagon Reports Over 1,000 Houthi Targets Struck; US-Houthi Ceasefire Announced","source":"Pentagon","source_type":"government","date":"2025-05-06","summary":"Trump declared Operation Rough Rider strikes 'over, effective immediately' after a ceasefire between the US and Houthis brokered by Oman, after the Pentagon claimed over 1,000 Houthi targets had been struck throughout the campaign. The Houthis asserted the ceasefire did not preclude attacking Israel. Defense Secretary Hegseth said the campaign had 'killed senior Houthi missile and UAV officials' and 'depleted Houthi capabilities to attack.'","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"diplomacy","time":"17:54"},{"title":"Israel Launches Operation Gideon's Chariots - Major Gaza Offensive to Seize 75% of Strip","source":"Wikipedia / Multiple Sources","source_type":"news_agency","date":"2025-05-16","summary":"Israel's security cabinet approved and launched Operation Gideon's Chariots, a major ground offensive aimed at defeating Hamas, destroying its military and governing capabilities, and seizing control of three-quarters of the Gaza Strip. The IDF combined land, air, and sea operations in the largest ground offensive since the early stages of the war. On May 18, Israel struck over 670 Hamas targets in preliminary airstrikes, killing over 400 people.","url":"https://en.wikipedia.org/wiki/May_2025_Gaza_offensive","confirmed":true,"category":"military_operation","time":"10:17"},{"title":"IAEA Report: Iran's Uranium Stockpile Reaches 9,247 kg Including 408 kg of 60% HEU","source":"IAEA","source_type":"government","date":"2025-05-31","summary":"The IAEA's May 2025 verification report showed Iran's total enriched uranium stockpile had reached 9,247.6 kg, an increase of 953.2 kg since the prior quarterly report. The stockpile included 408.6 kg of uranium enriched to 60% U-235 — enough, if enriched further, for approximately 9 nuclear weapons. The IAEA stated Iran's production of 60% HEU at the Fordow facility had reached 37.5 kg per month, calling it 'of serious concern' as the only non-nuclear state producing such material.","url":"https://www.iaea.org/sites/default/files/25/06/gov2025-24.pdf","confirmed":true,"category":"nuclear_program","time":"09:46"},{"title":"USS Harry S. Truman Carrier Strike Group Returns from Historic 8-Month Deployment","source":"US Navy / US 2nd Fleet","source_type":"military","date":"2025-06-01","summary":"The USS Harry S. Truman carrier strike group returned to Norfolk, Virginia after an eight-month deployment to the US Fifth and Sixth Fleet areas of operations. The strike group logged over 13,000 sorties and 25,000 flight hours, launching Tomahawk missiles and precision airstrikes for more than 50 days in Operation Rough Rider. The deployment included a February collision with a merchant ship near Port Said and a December friendly-fire incident where the USS Gettysburg downed an F/A-18.","url":"https://www.c2f.usff.navy.mil/Press-Room/Press-Releases/Article/4203172/uss-harry-s-truman-strike-group-returns-from-8-month-deployment/","confirmed":true,"category":"military_deployment","time":"12:31"},{"title":"CENTCOM Posture Statement 2025: 'Most Highly Kinetic Period in Past Decade'","source":"CENTCOM","source_type":"military","date":"2025-06-10","summary":"CENTCOM Commander Gen. Kurilla's posture statement described the CENTCOM AOR as experiencing its 'most highly kinetic period than at any other time in the past decade.' US servicemembers had come under fire from nearly 400 UAVs, 350 rockets, 50 ballistic missiles, and 30 cruise missiles from Iran-backed groups. The statement documented Iran's activation of its 'entire proxy network' following Hamas's October 7, 2023 attack, and described the Houthis as Iran's 'newest stalwart' front.","url":"https://www.centcom.mil/ABOUT-US/POSTURE-STATEMENT/","confirmed":true,"category":"military_operation","time":"09:34"},{"title":"IAEA Board of Governors Censures Iran for Nuclear Non-Compliance","source":"IAEA","source_type":"government","date":"2025-06-12","summary":"The IAEA Board of Governors concluded that Iran was not complying with its nuclear commitments under its safeguards agreement. Iran responded by disclosing the construction and imminent activation of a third nuclear enrichment facility. The censure came amid IAEA warnings that Iran could convert its 60% enriched uranium stockpile into weapons-grade material in as little as 2-3 days at Fordow.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"nuclear_program","time":"21:10"},{"title":"Israel Launches Operation Rising Lion: Strikes Iranian Nuclear Sites and Military Leadership","source":"Times of Israel","source_type":"news_agency","date":"2025-06-13","summary":"Israel launched Operation Rising Lion, sending more than 200 fighter jets in five waves to strike over 100 targets in Iran including the Natanz nuclear facility, military bases, and infrastructure. Opening strikes codenamed Operation Red Wedding and Operation Narnia assassinated 30 Iranian generals in minutes and 9 of Iran's top 10 nuclear scientists. IRGC Commander Hossein Salami, Armed Forces Chief Mohammed Bagheri, and IRGC Air Force Commander Amir Ali Hajizadeh were killed. Mossad covertly established a drone base near Tehran to neutralize Iran's air defenses prior to the strikes.","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true,"category":"military_operation","time":"02:15"},{"title":"Iran Launches Mass Ballistic Missile and Drone Barrage at Israel in Retaliation","source":"Reuters","source_type":"news_agency","date":"2025-06-13","summary":"Iran retaliated within hours of Israel's Operation Rising Lion launch, firing large-scale missile and drone strikes at Israeli cities. The IRGC launched over 400 ballistic missiles and over 1,000 suicide drones at Israel over the course of the 12-day conflict. In the opening days, the IDF shot down 30 Iranian drones overnight while four impacts occurred in Tel Aviv, one directly striking Camp Moshe Dayan.","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true,"category":"military_operation","time":"05:32"},{"title":"IAEA Director Grossi Addresses UN Security Council on Iran Nuclear Damage","source":"IAEA","source_type":"government","date":"2025-06-20","summary":"IAEA Director General Rafael Grossi briefed the UN Security Council on damage to Iran's nuclear sites from Israeli strikes. He stated that four buildings at the Esfahan nuclear site were damaged, including the central chemical laboratory, uranium conversion plant, and Tehran reactor-fuel manufacturing plant. The Fordow facility was Iran's main enrichment location for 60% uranium. Grossi emphasized that Iran's uranium stockpiles remained under safeguards but that inspections needed to resume urgently.","url":"http://www.iaea.org/newscenter/statements/iaea-director-general-grossis-statement-to-unsc-on-situation-in-iran-20-june-2025","confirmed":true,"category":"nuclear_program","time":"13:20"},{"title":"US Launches Operation Midnight Hammer: B-2 Bombers Strike Three Iranian Nuclear Sites","source":"Air Force Magazine / DoD News","source_type":"military","date":"2025-06-22","summary":"Seven B-2 Spirit stealth bombers launched from Whiteman Air Force Base, Missouri, flew 18 hours to strike Iran's Fordow, Natanz, and Isfahan nuclear facilities using 14 GBU-57 Massive Ordnance Penetrator bunker-buster bombs in their first-ever combat use. A US Navy submarine fired over two dozen Tomahawk cruise missiles at Isfahan. The operation involved 125 US aircraft and approximately 75 precision-guided weapons. Chairman of the Joint Chiefs Gen. Caine stated 'all three sites sustained extremely severe damage.'","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","confirmed":true,"category":"military_operation","time":"01:30"},{"title":"Pentagon Press Conference: Hegseth and Caine Brief on Operation Midnight Hammer Success","source":"Pentagon","source_type":"government","date":"2025-06-22","summary":"Defense Secretary Pete Hegseth and Chairman of the Joint Chiefs Gen. Dan Caine held a Pentagon press conference detailing Operation Midnight Hammer. Hegseth called it 'an incredible and overwhelming success' and said the mission was 'not, and has not been, about regime change.' Caine said deception tactics including decoys flying west over the Pacific were used, Iran's fighters 'did not fly' and surface-to-air missile systems 'did not see us.' CENTCOM was placed on elevated force protection measures across the Middle East.","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","confirmed":true,"category":"military_operation","time":"18:25"},{"title":"Iran Fires Missiles at US Al Udeid Air Base in Qatar in Retaliation for US Nuclear Strikes","source":"Breaking Defense / Pentagon","source_type":"military","date":"2025-06-23","summary":"Iran fired short- and medium-range ballistic missiles at Al Udeid Air Base in Qatar, the regional headquarters of US Central Command, housing approximately 10,000 US troops — Iran's retaliation for Operation Midnight Hammer strikes on its nuclear facilities. The Pentagon said there were no US casualties reported. The attack was Iran's most direct strike on a major US military installation to date.","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","confirmed":true,"category":"military_operation","time":"22:15"},{"title":"Trump Announces Ceasefire Between Israel and Iran — '12-Day War' Ends","source":"New York Times","source_type":"news_agency","date":"2025-06-24","summary":"President Trump announced a ceasefire between Israel and Iran after 12 days of conflict, declaring the agreement on social media. The ceasefire had a volatile start with both sides accusing each other of violations in the initial hours. Iran reported over 610 citizens killed in Israeli strikes, while Israel reported 28 killed from Iranian missile impacts. Iran launched over 550 ballistic missiles and 1,000 drones at Israel during the conflict, with only 5% of missiles impacting the ground.","url":"https://www.nytimes.com/live/2025/06/24/world/ceasefire-iran-israel-trump","confirmed":true,"category":"diplomacy","time":"18:42"},{"title":"Pentagon Assessment: US Strikes Degraded Iran's Nuclear Program by 1-2 Years","source":"Reuters","source_type":"news_agency","date":"2025-07-02","summary":"Pentagon spokesman Sean Parnell announced that US strikes on Iran's nuclear sites had degraded Iran's nuclear program by 'at least one to two years,' aligning with Trump's claim it was 'obliterated.' However, a preliminary Defense Intelligence Agency assessment had leaked saying the strikes delayed the program by only a few months. The IAEA's Grossi noted that Fordow centrifuges were 'no longer operational' but that Iran could resume uranium enrichment 'within a matter of months.'","url":"https://www.reuters.com/world/middle-east/iranian-nuclear-program-degraded-by-up-two-years-pentagon-says-2025-07-02/","confirmed":true,"category":"nuclear_program","time":"10:05"},{"title":"Houthis Resume Red Sea Shipping Attacks — Sink MV Magic Seas, Kill Crew of Eternity C","source":"FDD Long War Journal","source_type":"news_agency","date":"2025-07-06","summary":"Houthis ended a seven-month hiatus from commercial shipping attacks by attacking MV Magic Seas and sinking it with unmanned boats, RPGs, and drones. The next day they attacked the Liberian-flagged Eternity C, killing three crew members, with six more believed held in Houthi custody. Both attacks occurred in the Red Sea near Hodeidah. Human Rights Watch later characterized the attacks as war crimes, noting neither ship had connections to Israel despite Houthi claims.","url":"https://www.longwarjournal.org/archives/2025/07/houthis-resume-deadly-red-sea-shipping-attacks.php","confirmed":true,"category":"regional_proxy","time":"19:02"},{"title":"Israel Strikes Yemeni Ports of Hodeidah, Al Salif, and Ras Isa in Response to Houthi Ship Attacks","source":"The Soufan Center","source_type":"think_tank","date":"2025-07-06","summary":"In response to the Houthi attack on the MV Magic Seas, Israel launched Operation Black Flag, striking Yemeni ports of Hodeidah, As-Salif and Ras Isa, the Ras Kanatib power station, and the Hodeidah airport. The strikes also targeted Houthi military infrastructure including weapons storage sites. Israeli officials said the operation was aimed at degrading Houthi operational capacity following the resumption of shipping attacks.","url":"https://thesoufancenter.org/intelbrief-2025-july-10/","confirmed":true,"category":"military_operation","time":"22:10"},{"title":"IDF Drone Strike Kills Hamas Al-Qassam Brigades Spokesman Abu Obaida in Gaza City","source":"BBC News","source_type":"news_agency","date":"2025-08-31","summary":"The Israel Defense Forces conducted a precision drone strike in Gaza City that Israel claimed killed Abu Obaida, the masked spokesman of Hamas's al-Qassam Brigades who had become one of the most recognizable faces of Hamas during the war. Hamas did not confirm the kill at the time. Abu Obaida's death was later confirmed by Hamas in December 2025.","url":"https://www.bbc.com/news/articles/cm214r5rd29o","confirmed":false,"category":"military_operation","time":"14:30"},{"title":"Trump Threatens Iran with Bombing If Nuclear Deal Not Reached, Posts 'MAXIMUM PRESSURE'","source":"Reuters","source_type":"news_agency","date":"2025-09-16","summary":"President Trump threatened to bomb Iran if a nuclear deal was not reached, posting 'MAXIMUM PRESSURE' on social media. Trump's threat came as Iran was reportedly rebuilding its nuclear infrastructure damaged in Operation Rising Lion and Operation Midnight Hammer, with IAEA inspectors noting reconstruction activity at Fordow and Natanz.","url":"https://www.reuters.com/world/middle-east/trump-threatens-bomb-iran-if-nuclear-deal-not-reached-2025-09-16/","confirmed":true,"category":"diplomacy","time":"11:30"},{"title":"IAEA: Iran Resumes Uranium Enrichment at Rebuilt Fordow Facility","source":"Reuters","source_type":"news_agency","date":"2025-10-14","summary":"IAEA inspectors confirmed that Iran had resumed uranium enrichment operations at the Fordow underground facility following reconstruction efforts after US and Israeli strikes. The resumption contradicted Pentagon claims that Iran's nuclear program had been set back by 1-2 years, aligning more closely with DIA assessments of a few months' setback. Iran announced enrichment was resuming at 60% purity.","url":"https://www.reuters.com/world/middle-east/iaea-iran-resumes-enrichment-fordow-2025-10-14/","confirmed":true,"category":"nuclear_program","time":"14:15"},{"title":"US-Iran Nuclear Negotiations Resume in Geneva Under New Framework","source":"AP News","source_type":"news_agency","date":"2025-11-03","summary":"US and Iranian negotiators resumed nuclear talks in Geneva with a new framework proposed by European mediators. The talks came after Iran's resumption of uranium enrichment at Fordow. US Special Envoy Witkoff described the negotiations as 'serious and substantive.' Iran demanded sanctions relief and security guarantees before agreeing to any limitations on its nuclear program.","url":"https://apnews.com/article/iran-us-nuclear-talks-geneva-2025","confirmed":true,"category":"diplomacy","time":"16:20"},{"title":"US Deploys Additional B-52 Bombers and F-22 Fighters to Diego Garcia, Qatar","source":"Stars and Stripes","source_type":"news_agency","date":"2025-12-01","summary":"The Pentagon announced the deployment of additional B-52 Stratofortress bombers to Diego Garcia and F-22 Raptors to Al Udeid Air Base in Qatar as part of an ongoing regional deterrence posture. Defense officials described the deployments as 'prudent' given Iran's nuclear activities and the regional security environment following the 12-Day War and ceasefire.","url":"https://www.stripes.com/theaters/middle_east/2025-12-01/us-deploys-b52-diego-garcia-f22-qatar.html","confirmed":true,"category":"military_deployment","time":"09:00"},{"title":"Hamas Confirms Death of Abu Obaida in December Video Statement","source":"Al Jazeera","source_type":"news_agency","date":"2025-12-29","summary":"Hamas's military wing, the al-Qassam Brigades, formally confirmed the death of spokesman Abu Obaida in a video statement, months after Israel claimed to have killed him in an August 2025 drone strike in Gaza. The statement marked the official acknowledgment of one of the most high-profile targeted killings of the conflict.","url":"https://www.aljazeera.com/news/2025/12/29/hamas-armed-wing-confirms-deaths-of-figures-israel-earlier-said-it-killed-2","confirmed":true,"category":"military_operation","time":"18:00"},{"title":"Trump Issues 60-Day Ultimatum to Iran: Accept Nuclear Deal or Face Military Action","source":"Reuters","source_type":"news_agency","date":"2026-01-15","summary":"President Trump issued a 60-day ultimatum to Iran demanding it accept a nuclear deal or face military action. The ultimatum was delivered through back-channel communications and confirmed publicly by White House officials. Iran's foreign ministry called the ultimatum 'unacceptable' and 'a form of nuclear blackmail.'","url":"https://www.reuters.com/world/middle-east/trump-issues-60-day-ultimatum-iran-nuclear-deal-2026-01-15/","confirmed":true,"category":"diplomacy","time":"14:00"},{"title":"USS Abraham Lincoln Carrier Strike Group Redirected to Arabian Sea Amid Iran Tensions","source":"USNI News","source_type":"military","date":"2026-01-18","summary":"The USS Abraham Lincoln carrier strike group was redirected from the South China Sea to the Arabian Sea following Trump's 60-day ultimatum to Iran. The carrier, with Carrier Air Wing 9 (CVW-9) embarked, took station south of Iran near Oman. The repositioning was described as part of a broader buildup of US military assets in the region.","url":"https://news.usni.org/2026/01/18/uss-abraham-lincoln-redirected-arabian-sea","confirmed":true,"category":"military_deployment","time":"11:30"},{"title":"IRGC Launches Ballistic Missiles at US Carrier Strike Group in Arabian Sea","source":"Reuters","source_type":"news_agency","date":"2026-02-05","summary":"Iran's Islamic Revolutionary Guard Corps launched a salvo of ballistic missiles at the USS Abraham Lincoln carrier strike group operating in the Arabian Sea, claiming it as a 'warning shot' against US military buildup. The USS Abraham Lincoln's carrier air wing and Aegis destroyers in the strike group intercepted all incoming missiles. One Iranian drone was shot down by an F/A-18 from Abraham Lincoln.","url":"https://www.reuters.com/world/middle-east/irgc-launches-missiles-us-carrier-arabian-sea-2026-02-05/","confirmed":true,"category":"military_operation","time":"03:15"},{"title":"Trump Authorizes 'Operation Epic Fury': US and Israel Launch Coordinated Strikes on Iran","source":"Washington Post","source_type":"news_agency","date":"2026-02-28","summary":"President Trump authorized a massive coordinated military operation with Israel targeting Iran's remaining military and nuclear infrastructure. Operation Epic Fury involved over 900 strike sorties in the opening hours, targeting IRGC headquarters, air defense systems, ballistic missile production facilities, naval assets, and remaining nuclear-related sites. The operation began before dawn local time and involved US carrier-based aircraft from USS Abraham Lincoln, B-2 and B-52 bombers, and Israeli Air Force jets.","url":"https://www.washingtonpost.com/national-security/2026/02/28/trump-operation-epic-fury-iran-strikes/","confirmed":true,"category":"military_operation","time":"02:00"},{"title":"Iran Supreme Leader Khamenei Reported Killed in Israeli Strikes on Tehran","source":"Reuters / Times of Israel","source_type":"news_agency","date":"2026-02-28","summary":"Israeli officials reported that Supreme Leader Ali Khamenei was killed in a targeted strike on a secure location in Tehran during Operation Epic Fury. Israeli preliminary battle-damage assessment put his survival probability as 'extremely low.' Iranian Foreign Minister Araghchi told NBC that Khamenei is alive 'as far as I know' and that 'almost all officials are safe and sound.' Reuters reported Khamenei was transferred to a secure location. No independent verification has surfaced.","url":"https://www.reuters.com/world/middle-east/khamenei-strike-tehran-israel-2026-02-28/","confirmed":false,"category":"military_operation","time":"08:30"},{"title":"IRGC Fires Ballistic Missiles at Dubai, Abu Dhabi, and Riyadh in Retaliation","source":"Al Jazeera","source_type":"news_agency","date":"2026-02-28","summary":"Iran's IRGC launched retaliatory ballistic missile salvos at targets in the UAE and Saudi Arabia, including near Dubai International Airport. Multiple flights were diverted and Dubai International Airport briefly suspended operations. UAE and Saudi Patriot air defense batteries intercepted the majority of missiles. Several impacts were reported in the outskirts of Dubai and Abu Dhabi.","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","confirmed":false,"category":"military_operation","time":"11:00"}];

const STRIKES_DATA = [{"date":"2024-01-12","location_name":"Sanaa (Al-Dailami Air Base)","country":"Yemen","lat":15.4783,"lng":44.2194,"attacker":"United States","target":"Houthi missile launch and drone facilities, Al-Dailami Air Base","description":"First wave of Operation Poseidon Archer. US and UK struck approximately 30 Houthi military sites across Yemen including Al-Dailami Air Base near Sanaa. Destroyed/degraded over 27 missile and drone launch facilities.","confirmed":true,"source":"ACLED / USNI News","url":"https://acleddata.com/update/yemen-situation-update-january-2024","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Hodeidah (Hudaydah)","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi coastal defense and missile storage","description":"Part of initial Operation Poseidon Archer strikes. US and UK targeted Houthi military infrastructure in Hudaydah, a key Red Sea port city used for Houthi weapons transfers.","confirmed":true,"source":"BBC News","url":"https://www.bbc.com/news/world-middle-east-68064422","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Taiz","country":"Yemen","lat":13.5795,"lng":44.018,"attacker":"United States","target":"Houthi military positions","description":"Operation Poseidon Archer initial wave. Strikes on Houthi military targets in Taiz governorate.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi underground weapon storage site, missile and air surveillance capabilities","description":"Second joint US-UK strike under Operation Poseidon Archer. Eight targets hit including an underground storage site. ~25-30 precision munitions deployed including Tomahawk cruise missiles. Four RAF Typhoons participated.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Hudaydah","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi military infrastructure, coastal defense","description":"Part of second US-UK Poseidon Archer wave targeting Houthi military infrastructure along the Red Sea coast. UK Typhoons struck Houthi weapons storage in Hudaydah port area.","confirmed":true,"source":"BBC News","url":"https://www.bbc.com/news/world-middle-east-68064422","weapon_type":"airstrike"},{"date":"2024-04-01","location_name":"Damascus","country":"Syria","lat":33.5138,"lng":36.2765,"attacker":"Israel","target":"IRGC Quds Force headquarters, Iranian consulate complex","description":"Israeli airstrike destroyed the Iranian consulate annex in Damascus, killing seven IRGC officers including two generals: Mohammad Reza Zahedi and Mohammad Hadi Haji Rahimi. The strike was a major escalation targeting senior IRGC Quds Force commanders.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/iran-says-israel-bombed-its-consulate-damascus-killing-several-military-officers-2024-04-01/","weapon_type":"airstrike"},{"date":"2024-04-13","location_name":"Israel (nationwide)","country":"Israel","lat":31.5,"lng":34.8,"attacker":"Iran","target":"Israeli military and civilian infrastructure","description":"Iran launched Operation True Promise: over 170 drones, 30 cruise missiles, and 110 ballistic missiles at Israel in direct retaliation for the Damascus consulate strike. Israel, with US, UK, France, and Jordan support, intercepted ~99% of projectiles.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/iran-launches-unprecedented-attack-against-israel-2024-04-13/","weapon_type":"ballistic_missile"},{"date":"2024-04-19","location_name":"Isfahan","country":"Iran","lat":32.6546,"lng":51.6679,"attacker":"Israel","target":"Iranian air defense radar near Isfahan nuclear facility","description":"Israel responded to Iran's April 13 attack with a limited strike near Isfahan, targeting an S-300 air defense radar. The strike was calibrated to demonstrate reach without triggering major escalation. Iran initially downplayed the attack.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/explosion-reported-near-iranian-city-of-isfahan-2024-04-19/","weapon_type":"airstrike"},{"date":"2024-07-30","location_name":"Beirut (Hezbollah HQ)","country":"Lebanon","lat":33.8547,"lng":35.5227,"attacker":"Israel","target":"Hezbollah senior commander Fuad Shukr","description":"Israeli airstrike in Beirut's southern suburbs killed senior Hezbollah commander Fuad Shukr, one of the group's most senior military figures. The strike came hours before Hezbollah launched a major drone and rocket attack on northern Israel.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/hezbollah-commander-fuad-shukr-killed-beirut-strike-israel-says-2024-07-31/","weapon_type":"airstrike"},{"date":"2024-07-31","location_name":"Tehran","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"Hamas political bureau chief Ismail Haniyeh","description":"Mossad operation killed Hamas political chief Ismail Haniyeh at a guest house in Tehran where he was attending the inauguration of Iran's new president. The killing was a major blow to Hamas and Israeli intelligence penetration of Tehran. Iran vowed retaliation.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/hamas-chief-haniyeh-was-killed-tehran-iran-2024-07-31/","weapon_type":"targeted_killing"},{"date":"2024-09-27","location_name":"Beirut (Hezbollah HQ)","country":"Lebanon","lat":33.8547,"lng":35.5227,"attacker":"Israel","target":"Hezbollah Secretary-General Hassan Nasrallah","description":"Israel killed Hezbollah Secretary-General Hassan Nasrallah and several other senior commanders in a massive airstrike on Hezbollah's headquarters in Beirut's Dahiyeh suburb. Multiple bunker-buster bombs were used. The killing decapitated Hezbollah's top leadership.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israelis-mourn-hezbollah-chief-hassan-nasrallah-killed-airstrike-2024-09-28/","weapon_type":"airstrike"},{"date":"2024-10-01","location_name":"Israel (nationwide)","country":"Israel","lat":31.5,"lng":34.8,"attacker":"Iran","target":"Israeli military bases and infrastructure","description":"Iran launched Operation True Promise II: ~180 ballistic missiles at Israel in retaliation for the killing of Nasrallah and other proxy leaders. Israel and US intercepted the majority. Several missiles impacted the Nevatim and Tel Nof air bases.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/iran-fires-ballistic-missiles-israel-2024-10-01/","weapon_type":"ballistic_missile"},{"date":"2024-10-26","location_name":"Tehran (IRGC sites)","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"IRGC air defense systems, missile production facilities","description":"Israel's Operation Days of Repentance retaliated for Iran's October 1 barrage. Israeli jets struck IRGC missile production and air defense sites in Iran, including the S-300 batteries used to defend Tehran. Syria was used as a transit corridor for some strikes.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israel-iran-exchange-fire-middle-east-braces-2024-10-26/","weapon_type":"airstrike"},{"date":"2025-01-19","location_name":"Gaza-Israel border","country":"Gaza","lat":31.3547,"lng":34.308,"attacker":"Israel","target":"Hamas forces","description":"Israel-Hamas ceasefire entered Phase 1, pausing active fighting. First phase involved hostage-for-prisoner exchanges and humanitarian aid delivery. Israeli forces remained in Gaza in a tactical pause while negotiations continued.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israel-hamas-ceasefire-phase1-2025-01-19/","weapon_type":"ceasefire"},{"date":"2025-03-15","location_name":"Sanaa (Al-Dailami Air Base)","country":"Yemen","lat":15.4783,"lng":44.2194,"attacker":"United States","target":"Houthi air defense and missile infrastructure","description":"Opening strikes of Operation Rough Rider. US carrier-based aircraft and Tomahawk missiles struck Houthi radar systems, air defenses, and ballistic and drone launch sites across Yemen. Largest US military operation of Trump's second term.","confirmed":true,"source":"NPR","url":"https://www.npr.org/2025/03/15/nx-s1-5329284/trump-airstrikes-houthis-yemen-iran","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Hodeidah","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi coastal defense, missile storage, naval infrastructure","description":"Operation Rough Rider strikes on Houthi coastal defense and naval infrastructure in Hodeidah. F/A-18s from USS Harry S. Truman and Tomahawks from guided-missile destroyers targeted multiple sites.","confirmed":true,"source":"Naval News","url":"https://www.navalnews.com/naval-news/2025/03/u-s-navy-begins-sustained-combat-operations-against-houthi-forces/","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Taiz","country":"Yemen","lat":13.5795,"lng":44.018,"attacker":"United States","target":"Houthi missile launch sites","description":"Operation Rough Rider opening strikes on Houthi missile infrastructure in Taiz governorate, targeting ballistic missile launch sites and storage.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/MEDIA/NEWS-ARTICLES/News-Article-View/Article/operation-rough-rider/","weapon_type":"airstrike"},{"date":"2025-04-02","location_name":"Al Hudaydah (al Fazah)","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi naval commanders, leadership meeting","description":"CENTCOM airstrike killed 70 Houthi fighters including naval commanders Najib Kashri and Abu Taleb. One of the most significant leadership kills of the campaign.","confirmed":true,"source":"CENTCOM","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","weapon_type":"airstrike"},{"date":"2025-04-18","location_name":"Ras Isa Fuel Port","country":"Yemen","lat":15.0667,"lng":42.5833,"attacker":"United States","target":"Houthi fuel import infrastructure","description":"US strikes on Ras Isa fuel terminal destroyed Houthi fuel import capacity. CENTCOM said the strike would 'impact Houthi ability to not only conduct operations, but also to generate millions of dollars in revenue.'","confirmed":true,"source":"CENTCOM","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Natanz","country":"Iran","lat":33.7225,"lng":51.7268,"attacker":"Israel","target":"Natanz nuclear enrichment facility","description":"Operation Rising Lion opening strikes. Israeli jets struck Natanz nuclear facility, one of Iran's primary uranium enrichment sites. IAEA confirmed damage to surface structures.","confirmed":true,"source":"Times of Israel","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Tehran (IRGC HQ)","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"IRGC General Staff, 30 Iranian generals","description":"Operation Red Wedding and Operation Narnia: opening strikes of Operation Rising Lion assassinated IRGC Commander Salami, Armed Forces Chief Bagheri, IRGC Air Force Commander Hajizadeh, and 30 Iranian generals in minutes. 9 of Iran's top 10 nuclear scientists also killed.","confirmed":true,"source":"Times of Israel","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Esfahan","country":"Iran","lat":32.6546,"lng":51.6679,"attacker":"Israel","target":"Isfahan nuclear site, uranium conversion plant","description":"Israeli strikes on the Isfahan nuclear complex damaged four buildings including the central chemical laboratory, uranium conversion plant, and Tehran reactor-fuel manufacturing plant. IAEA Director Grossi briefed UN Security Council on the damage.","confirmed":true,"source":"IAEA","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Tel Aviv","country":"Israel","lat":32.0853,"lng":34.7818,"attacker":"Iran","target":"Israeli military and civilian infrastructure","description":"Iran launched over 400 ballistic missiles and 1,000 suicide drones at Israel in retaliation for Operation Rising Lion. In the opening hours, 30 drones were shot down overnight. Four impacts occurred in Tel Aviv, one directly striking Camp Moshe Dayan.","confirmed":true,"source":"Reuters","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"ballistic_missile"},{"date":"2025-06-22","location_name":"Fordow","country":"Iran","lat":34.8848,"lng":50.7184,"attacker":"United States","target":"Fordow underground nuclear enrichment facility","description":"Operation Midnight Hammer: Seven B-2 Spirit bombers dropped GBU-57 Massive Ordnance Penetrators on Fordow, Iran's most hardened nuclear facility, buried 80+ meters underground. First combat use of the MOP. Centrifuges confirmed 'no longer operational' by IAEA.","confirmed":true,"source":"DoD / Air Force Magazine","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Natanz","country":"Iran","lat":33.7225,"lng":51.7268,"attacker":"United States","target":"Natanz underground enrichment halls","description":"Operation Midnight Hammer B-2 strike on Natanz with GBU-57 MOPs. Pentagon said all three targeted sites sustained 'extremely severe damage.' A Navy submarine also fired Tomahawk cruise missiles at Isfahan.","confirmed":true,"source":"DoD News","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Isfahan","country":"Iran","lat":32.6546,"lng":51.6679,"attacker":"United States","target":"Isfahan nuclear complex","description":"Operation Midnight Hammer: US Navy submarine fired over two dozen Tomahawk cruise missiles at Isfahan nuclear facilities, complementing B-2 strikes on Fordow and Natanz. Pentagon: all three sites 'extremely severely damaged.'","confirmed":true,"source":"DoD News","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","weapon_type":"cruise_missile"},{"date":"2025-06-23","location_name":"Al Udeid Air Base, Qatar","country":"Qatar","lat":25.1173,"lng":51.3147,"attacker":"Iran","target":"US Central Command HQ, Al Udeid Air Base","description":"Iran fired short- and medium-range ballistic missiles at Al Udeid Air Base, housing ~10,000 US troops and CENTCOM HQ. No US casualties reported. Most significant Iranian direct strike on a US military installation.","confirmed":true,"source":"Breaking Defense","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","weapon_type":"ballistic_missile"},{"date":"2025-07-06","location_name":"Hodeidah Port","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"Israel","target":"Yemeni ports: Hodeidah, As-Salif, Ras Isa; power station","description":"Operation Black Flag: Israel struck Yemeni ports of Hodeidah, As-Salif and Ras Isa, and the Ras Kanatib power station in response to Houthi sinking of MV Magic Seas. Targeted Houthi military infrastructure and weapons storage.","confirmed":true,"source":"The Soufan Center","url":"https://thesoufancenter.org/intelbrief-2025-july-10/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Tehran (IRGC Headquarters)","country":"Iran","lat":35.7219,"lng":51.3347,"attacker":"United States","target":"IRGC General Staff Headquarters","description":"Operation Epic Fury opening strikes. US and Israeli aircraft struck IRGC headquarters in Tehran. Reports of major explosions across the city. Part of over 900 strike sorties in opening hours.","confirmed":true,"source":"Washington Post","url":"https://www.washingtonpost.com/national-security/2026/02/28/trump-operation-epic-fury-iran-strikes/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Fordow","country":"Iran","lat":34.8848,"lng":50.7184,"attacker":"United States","target":"Rebuilt Fordow nuclear enrichment facility","description":"Operation Epic Fury strikes on rebuilt Fordow facility. US B-2 bombers and cruise missiles targeted the facility that Iran had rebuilt after Operation Midnight Hammer. Israeli F-35Is participated in the strike package.","confirmed":true,"source":"Washington Post","url":"https://www.washingtonpost.com/national-security/2026/02/28/trump-operation-epic-fury-iran-strikes/","weapon_type":"bunker_buster"},{"date":"2026-02-28","location_name":"Bandar Abbas Naval Base","country":"Iran","lat":27.1832,"lng":56.2666,"attacker":"United States","target":"IRGC Navy fast-attack craft, mine-laying vessels","description":"Operation Epic Fury naval component. US Tomahawk missiles and carrier-based aircraft struck IRGC Navy facilities at Bandar Abbas, targeting fast-attack boats and mine-laying vessels threatening Persian Gulf shipping.","confirmed":true,"source":"CSIS Middle East Analysis","url":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","weapon_type":"cruise_missile"},{"date":"2026-02-28","location_name":"Dubai (outskirts)","country":"UAE","lat":25.2048,"lng":55.2708,"attacker":"Iran","target":"UAE civilian and military infrastructure","description":"IRGC ballistic missile retaliation hit outskirts of Dubai. Multiple impacts reported near Dubai International Airport causing flight disruptions and airport evacuation. UAE Patriot batteries intercepted majority of missiles.","confirmed":false,"source":"Al Jazeera","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","weapon_type":"ballistic_missile"},{"date":"2026-02-28","location_name":"Natanz","country":"Iran","lat":33.7225,"lng":51.7268,"attacker":"Israel","target":"Natanz nuclear facility (rebuilt)","description":"Operation Epic Fury Israeli component. IAF F-35Is struck Natanz nuclear facility which Iran had partially rebuilt after the 12-Day War. Israeli Air Force operated under US air superiority umbrella.","confirmed":true,"source":"Times of Israel","url":"https://www.washingtonpost.com/national-security/2026/02/28/trump-operation-epic-fury-iran-strikes/","weapon_type":"airstrike"}];

const MILITARY_ASSETS = [{"asset_name":"USS Abraham Lincoln (CVN-72)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Arabian Sea, south of Iran near Oman","lat":22.0,"lng":61.5,"status":"deployed","details":"Carrier Strike Group 3 (CSG-3). Redirected from South China Sea to Arabian Sea in mid-January 2026. Carrying F/A-18 Super Hornets, F-35C fighters, and E/A-18G Growlers. One of its jets shot down an Iranian drone in early February 2026. Part of 'Operation Epic Fury' buildup against Iran.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"USS Gerald R. Ford (CVN-78)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Eastern Mediterranean Sea, off coast of Israel","lat":33.5,"lng":33.5,"status":"deployed","details":"World's largest aircraft carrier. Carrier Strike Group with embarked CVW-8. Departed Norfolk June 24, 2025, was in Caribbean for Operation Absolute Resolve, returned to Mediterranean in mid-February 2026 amid Iran tensions. Due to arrive near Israeli coast on Feb 28, 2026. Over 241 days deployed as of Feb 20.","last_updated":"2026-02-28","source":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true},{"asset_name":"USS Delbert D. Black (DDG-119)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater","lat":26.5,"lng":55.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of Persian Gulf theater forces; can launch Tomahawk land-attack missiles and has advanced air and missile defense capabilities. Confirmed in Persian Gulf theater as of February 2026.","last_updated":"2026-02-11","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Mitscher (DDG-57)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater, Abraham Lincoln CSG escort","lat":22.5,"lng":60.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of the USS Abraham Lincoln carrier strike group operating in the Arabian Sea. Equipped with Tomahawk missiles and SM-2/SM-6 air defense missiles.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"USS Wayne E. Meyer (DDG-108)","asset_type":"destroyer","nation":"United States","location_description":"Arabian Sea theater","lat":23.0,"lng":62.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer operating in the Arabian Sea theater as part of the buildup around the USS Abraham Lincoln strike group. Deployed for Operation Epic Fury support.","last_updated":"2026-02-28","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Gravely (DDG-107)","asset_type":"destroyer","nation":"United States","location_description":"Red Sea / Gulf of Aden","lat":13.0,"lng":45.5,"status":"deployed","details":"Arleigh Burke-class destroyer operating in the Red Sea. Has Tomahawk strike capability and Aegis air defense. Previously participated in Operation Rough Rider against Houthi targets and remains in theater.","last_updated":"2026-02-28","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Bataan (LHD-5)","asset_type":"amphibious_assault","nation":"United States","location_description":"Arabian Sea, Persian Gulf approaches","lat":24.0,"lng":58.0,"status":"deployed","details":"Wasp-class amphibious assault ship. Carrying Marine Expeditionary Unit (MEU) with AV-8B Harriers and CH-53 helicopters. Deployed as part of the broader Middle East buildup for potential contingency operations.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"B-2 Spirit Bombers (7 aircraft)","asset_type":"strategic_bomber","nation":"United States","location_description":"Diego Garcia / Whiteman AFB (deployed)","lat":-7.3195,"lng":72.4231,"status":"deployed","details":"Seven B-2 Spirit stealth bombers participated in Operation Midnight Hammer (June 2025), flying 18-hour missions from Whiteman AFB. As of February 2026, B-2s are again forward-deployed to Diego Garcia for Operation Epic Fury. First-ever combat use of GBU-57 Massive Ordnance Penetrators occurred during Midnight Hammer.","last_updated":"2026-02-28","source":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","confirmed":true},{"asset_name":"B-52 Stratofortress Bombers","asset_type":"strategic_bomber","nation":"United States","location_description":"Diego Garcia, British Indian Ocean Territory","lat":-7.3195,"lng":72.4231,"status":"deployed","details":"B-52H Stratofortress bombers forward-deployed to Diego Garcia. Carry conventional cruise missiles (AGM-86C CALCM and JASSM-ER) for long-range strikes. Part of the bomber task force deployed for deterrence and strike options against Iran.","last_updated":"2026-02-28","source":"https://www.stripes.com/theaters/middle_east/2025-12-01/us-deploys-b52-diego-garcia-f22-qatar.html","confirmed":true},{"asset_name":"F-22 Raptors","asset_type":"fighter","nation":"United States","location_description":"Al Udeid Air Base, Qatar","lat":25.1173,"lng":51.3147,"status":"deployed","details":"F-22 Raptor stealth fighters deployed to Al Udeid Air Base for air superiority and SEAD (Suppression of Enemy Air Defenses) missions. Provide advanced penetrating strike capability to support broader strike operations against Iran.","last_updated":"2026-02-28","source":"https://www.stripes.com/theaters/middle_east/2025-12-01/us-deploys-b52-diego-garcia-f22-qatar.html","confirmed":true},{"asset_name":"THAAD Battery (Saudi Arabia)","asset_type":"missile_defense","nation":"United States","location_description":"Saudi Arabia (Riyadh region)","lat":24.7136,"lng":46.6753,"status":"deployed","details":"Terminal High Altitude Area Defense (THAAD) battery deployed to Saudi Arabia. Provides upper-tier ballistic missile defense for the Arabian Peninsula. Operated by US Army personnel. Critical for defense against Iranian ballistic missile attacks.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Patriot PAC-3 Batteries (Qatar/Kuwait/UAE)","asset_type":"missile_defense","nation":"United States","location_description":"Multiple Gulf states","lat":25.3,"lng":51.2,"status":"deployed","details":"Multiple Patriot Advanced Capability-3 batteries deployed across Qatar, Kuwait, and UAE providing theater ballistic missile defense. Used to protect US bases and Gulf state infrastructure from Iranian ballistic missile attacks.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Israeli Air Force F-35I Adir","asset_type":"fighter","nation":"Israel","location_description":"Nevatim Air Base, Israel","lat":31.2077,"lng":35.012,"status":"deployed","details":"Israel's F-35I 'Adir' stealth fighters based at Nevatim Air Base. Participated in Operation Rising Lion (June 2025) striking Iran directly. Flew over 200 sorties in five waves in the 12-Day War. Now participating in Operation Epic Fury alongside US forces.","last_updated":"2026-02-28","source":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true},{"asset_name":"Israeli Navy Sa'ar 6 Corvettes","asset_type":"destroyer","nation":"Israel","location_description":"Eastern Mediterranean / Red Sea","lat":29.5,"lng":34.9,"status":"deployed","details":"Israeli Sa'ar 6-class corvettes equipped with C-Dome naval Iron Dome systems and Barak-8 missiles. Deployed in the Red Sea and Eastern Mediterranean to intercept Houthi drones and missiles fired at Israel.","last_updated":"2026-02-28","source":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true},{"asset_name":"IRGC Shahab-3 / Emad Missile Batteries","asset_type":"ballistic_missile_battery","nation":"Iran","location_description":"Western Iran (dispersed)","lat":34.0,"lng":47.0,"status":"active","details":"Iran's Shahab-3/Emad medium-range ballistic missiles capable of reaching Israel and US bases across the Middle East. Multiple launch batteries dispersed across western Iran. Used in Operation True Promise I and II against Israel.","last_updated":"2026-02-28","source":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true},{"asset_name":"IRGC Navy Fast Attack Craft","asset_type":"fast_attack","nation":"Iran","location_description":"Persian Gulf, Strait of Hormuz","lat":26.5,"lng":56.25,"status":"active","details":"IRGC Navy operates hundreds of fast attack craft in the Persian Gulf and Strait of Hormuz. Capable of swarming attacks on larger vessels and can lay naval mines. Critical threat to commercial shipping through Hormuz.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Houthi Ballistic Missile Forces","asset_type":"ballistic_missile_battery","nation":"Yemen (Houthi)","location_description":"Sanaa region, Yemen","lat":15.3694,"lng":44.191,"status":"active","details":"Houthi ballistic missile and drone forces surviving Operation Rough Rider. Resumed Red Sea shipping attacks in July 2025. Continue to threaten Israeli and Gulf state targets. Iranian-supplied Burkan-3 and Zulfiqar missiles.","last_updated":"2026-02-28","source":"https://www.longwarjournal.org/archives/2025/07/houthis-resume-deadly-red-sea-shipping-attacks.php","confirmed":true},{"asset_name":"Saudi THAAD / Patriot Batteries","asset_type":"missile_defense","nation":"Saudi Arabia","location_description":"Riyadh, Eastern Province","lat":24.7136,"lng":46.6753,"status":"active","details":"Saudi Arabia's own THAAD and Patriot PAC-3 batteries defending major cities and oil infrastructure. Activated during Iranian retaliatory missile strikes on the region. Operated alongside US missile defense assets.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true}];

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
