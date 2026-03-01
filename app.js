/* app.js — Iran Conflict Monitor Dashboard */

/* === EMBEDDED DATA === */
const NEWS_DATA = [{"title":"Trump Redesignates Houthis as Foreign Terrorist Organization","source":"Reuters","source_type":"news_agency","date":"2025-01-22","summary":"President Trump signed an executive order redesignating the Houthi movement in Yemen as a Foreign Terrorist Organization (FTO) and Specially Designated Global Terrorist (SDGT), reversing a Biden-era decision. The move was part of a broader maximum-pressure campaign targeting Iran and its proxies. The redesignation enables broader sanctions and restrictions on entities doing business with the Houthis.","url":"https://www.reuters.com/world/middle-east/trump-redesignates-houthis-terrorist-organization-2025-01-22/","confirmed":true,"category":"regional_proxy","time":"12:01"},{"title":"Trump Sends Letter to Iran's Khamenei Requesting New Nuclear Deal","source":"PBS NewsHour","source_type":"news_agency","date":"2025-03-07","summary":"President Trump announced he had sent a letter to Iran's Supreme Leader Ali Khamenei requesting a new nuclear deal with Tehran. Trump stated he had warned that without negotiations, there would be military consequences. The letter came as Trump resumed maximum pressure sanctions on Iran following his return to the presidency and while authorizing major strikes on Houthi targets in Yemen. Earlier, in February, Khamenei had described proposed discussions with the US as 'not intelligent, wise or honorable.'","url":"https://www.pbs.org/newshour/world/a-timeline-of-tensions-over-irans-nuclear-program-as-talks-with-u-s-approach","confirmed":true,"category":"diplomacy","time":"21:10"},{"title":"Houthis Fire Missile at US Air Force F-16, Shoot Down MQ-9 Reaper Drone Over Yemen","source":"CENTCOM","source_type":"military","date":"2025-03-11","summary":"Houthi forces announced the resumption of attacks against Israeli-linked shipping in the Red Sea, firing a missile at a US Air Force F-16 and shooting down a US MQ-9 Reaper drone over Yemen. This escalation followed the Houthis' announcement that they would resume attacks after a deadline they set for the reopening of Gaza border crossings was not met. The incidents set the stage for the US military campaign that launched days later.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"15:46"},{"title":"US Launches 'Operation Rough Rider' - Massive Airstrike Campaign Against Houthi Targets in Yemen","source":"NPR","source_type":"news_agency","date":"2025-03-15","summary":"President Trump ordered a 'decisive and powerful' wave of airstrikes against Houthi rebels in Yemen, launching what would become Operation Rough Rider — the largest US military operation of Trump's second term. Initial strikes targeted radar systems, air defenses, and ballistic and drone launch sites. Trump warned Iran to stop supporting the Houthis, stating Secretary Hegseth put Iran 'on notice.'","url":"https://www.npr.org/2025/03/15/nx-s1-5329284/trump-airstrikes-houthis-yemen-iran","confirmed":true,"category":"military_operation","time":"09:10"},{"title":"USS Harry S. Truman Carrier Strike Group Begins Sustained Combat Operations in Red Sea","source":"Naval News","source_type":"news_agency","date":"2025-03-17","summary":"The US Navy entered sustained combat operations in the Fifth Fleet area following President Trump's order for 'overwhelming lethal force.' F/A-18 Super Hornets from USS Harry S. Truman launched strikes against Houthi command and control centers, missile launchers, and leadership sites. The campaign involved multiple rounds of proactive strikes — not episodic retaliatory strikes — per US officials, with Tomahawk missiles also fired from guided-missile destroyers.","url":"https://www.navalnews.com/naval-news/2025/03/u-s-navy-begins-sustained-combat-operations-against-houthi-forces/","confirmed":true,"category":"military_operation","time":"20:39"},{"title":"Houthis Launch 18-Missile and Drone Salvo at USS Harry S. Truman Carrier Strike Group","source":"Al Jazeera English","source_type":"news_agency","date":"2025-03-17","summary":"Houthi forces claimed to have attacked USS Harry S. Truman and its escort ships using 18 ballistic and cruise missiles and a drone in retaliation for US strikes on Yemen. A US official confirmed 11 drones were intercepted by F-16 and F-18 fighters, while one Houthi missile malfunctioned and landed in the water. Houthis launched a second claimed attack on the carrier and surrounding warships the following morning.","url":"https://www.aljazeera.com/news/2025/3/17/houthis-claim-retaliatory-attack-on-us-ships","confirmed":true,"category":"military_operation","time":"09:52"},{"title":"CENTCOM Strikes Kill Houthi Naval Forces Commander, Multiple Senior Officials at Al Fazah","source":"CENTCOM","source_type":"military","date":"2025-04-02","summary":"US Central Command conducted an airstrike in al Fazah, Hudaydah Governorate, killing 70 Houthi fighters including the al Tuhayta Axis Commander Najib Kashri and the Red Sea Coastal Region Commander Abu Taleb. A prior strike on a naval base at Al Hudaydah wounded eight people including Mansour al-Saadi, commander of Houthi naval forces. The April 2 strike was described as one of the most significant leadership kills of the campaign.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"18:07"},{"title":"US-Iran First Round of Nuclear Talks Held in Oman","source":"AP News","source_type":"news_agency","date":"2025-04-12","summary":"The first round of US-Iran direct nuclear discussions took place in Oman, with US Middle East Envoy Steve Witkoff meeting Iranian Foreign Minister Abbas Araghchi. Both sides agreed to continue talks. Trump had announced the talks one week prior, calling them 'direct discussions,' while Iran characterized them as 'indirect' through Omani intermediaries. A second round followed in Rome on April 19, with a third in Oman on April 26 including expert-level discussions for the first time.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"diplomacy","time":"11:24"},{"title":"CENTCOM Reports Over 800 Houthi Targets Struck, 650+ Casualties, 87% Reduction in Missile Attacks","source":"CENTCOM","source_type":"military","date":"2025-04-21","summary":"A CENTCOM spokesman announced that Operation Rough Rider had struck more than 800 Houthi targets, caused more than 650 Houthi casualties, and reduced Houthi missile attacks by 87 percent and drone attacks by 65 percent. The strikes had destroyed ballistic missile launchers, drone production sites, command and control nodes, and Houthi leadership meeting sites. CENTCOM indicated the campaign was successfully degrading Houthi capabilities.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"07:44"},{"title":"UK Joins US Strikes on Houthi Targets in Yemen","source":"BBC News","source_type":"news_agency","date":"2025-04-30","summary":"British forces joined the United States in conducting strikes on Houthi targets in Yemen as part of a joint operation, marking the UK's entry into the US-led campaign. The UK Defense Ministry said Typhoon FGR4 fighter jets armed with Paveway IV guided bombs targeted a Houthi drone manufacturing center identified as being used to produce naval attack drones. The UK stated the operation was conducted with 'very careful planning to minimize risk to civilians.'","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"21:04"},{"title":"CENTCOM: Operation Rough Rider Struck Over 1,000 Targets; Ballistic Missile Attacks Down 69%","source":"CENTCOM","source_type":"military","date":"2025-05-01","summary":"CENTCOM stated Operation Rough Rider struck over 1,000 Houthi targets across Yemen, killing hundreds of militants including several senior leaders, and that Houthi ballistic missile attacks had decreased by 69 percent and drone attacks by 55 percent. Attacking the Ras Isa fuel port was described as stopping Houthi fuel imports which 'will begin to impact Houthi ability to not only conduct operations, but also to generate millions of dollars in revenue.' Striking the oil port disrupted a key Houthi financing mechanism.","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"military_operation","time":"12:55"},{"title":"Hegseth Orders USS Truman to Remain in Middle East; USS Carl Vinson Deployment Extended","source":"Stars and Stripes","source_type":"news_agency","date":"2025-05-02","summary":"Defense Secretary Pete Hegseth ordered the USS Harry S. Truman carrier strike group to remain in the Red Sea for an additional week, extending its already over seven-month deployment, while the USS Carl Vinson was ordered from the Pacific to the Middle East with its deployment extended by three months. The Truman had struck more than 1,000 Houthi targets across Yemen since March 15. The Truman's commanding officer was fired following a February collision with a merchant ship near Port Said.","url":"https://www.stripes.com/theaters/middle_east/2025-05-02/truman-deployment-red-sea-17658869.html","confirmed":true,"category":"military_deployment","time":"10:47"},{"title":"Pentagon Reports Over 1,000 Houthi Targets Struck; US-Houthi Ceasefire Announced","source":"Pentagon","source_type":"government","date":"2025-05-06","summary":"Trump declared Operation Rough Rider strikes 'over, effective immediately' after a ceasefire between the US and Houthis brokered by Oman, after the Pentagon claimed over 1,000 Houthi targets had been struck throughout the campaign. The Houthis asserted the ceasefire did not preclude attacking Israel. Defense Secretary Hegseth said the campaign had 'killed senior Houthi missile and UAV officials' and 'depleted Houthi capabilities to attack.'","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","confirmed":true,"category":"diplomacy","time":"17:54"},{"title":"Israel Launches Operation Gideon's Chariots - Major Gaza Offensive to Seize 75% of Strip","source":"Wikipedia / Multiple Sources","source_type":"news_agency","date":"2025-05-16","summary":"Israel's security cabinet approved and launched Operation Gideon's Chariots, a major ground offensive aimed at defeating Hamas, destroying its military and governing capabilities, and seizing control of three-quarters of the Gaza Strip. The IDF combined land, air, and sea operations in the largest ground offensive since the early stages of the war. On May 18, Israel struck over 670 Hamas targets in preliminary airstrikes, killing over 400 people.","url":"https://en.wikipedia.org/wiki/May_2025_Gaza_offensive","confirmed":true,"category":"military_operation","time":"10:17"},{"title":"IAEA Report: Iran's Uranium Stockpile Reaches 9,247 kg Including 408 kg of 60% HEU","source":"IAEA","source_type":"government","date":"2025-05-31","summary":"The IAEA's May 2025 verification report showed Iran's total enriched uranium stockpile had reached 9,247.6 kg, an increase of 953.2 kg since the prior quarterly report. The stockpile included 408.6 kg of uranium enriched to 60% U-235 — enough, if enriched further, for approximately 9 nuclear weapons. The IAEA stated Iran's production of 60% HEU at the Fordow facility had reached 37.5 kg per month, calling it 'of serious concern' as the only non-nuclear state producing such material.","url":"https://www.iaea.org/sites/default/files/25/06/gov2025-24.pdf","confirmed":true,"category":"nuclear_program","time":"09:46"},{"title":"USS Harry S. Truman Carrier Strike Group Returns from Historic 8-Month Deployment","source":"US Navy / US 2nd Fleet","source_type":"military","date":"2025-06-01","summary":"The USS Harry S. Truman carrier strike group returned to Norfolk, Virginia after an eight-month deployment to the US Fifth and Sixth Fleet areas of operations. The strike group logged over 13,000 sorties and 25,000 flight hours, launching Tomahawk missiles and precision airstrikes for more than 50 days in Operation Rough Rider. The deployment included a February collision with a merchant ship near Port Said and a December friendly-fire incident where the USS Gettysburg downed an F/A-18.","url":"https://www.c2f.usff.navy.mil/Press-Room/Press-Releases/Article/4203172/uss-harry-s-truman-strike-group-returns-from-8-month-deployment/","confirmed":true,"category":"military_deployment","time":"12:31"},{"title":"CENTCOM Posture Statement 2025: 'Most Highly Kinetic Period in Past Decade'","source":"CENTCOM","source_type":"military","date":"2025-06-10","summary":"CENTCOM Commander Gen. Kurilla's posture statement described the CENTCOM AOR as experiencing its 'most highly kinetic period than at any other time in the past decade.' US servicemembers had come under fire from nearly 400 UAVs, 350 rockets, 50 ballistic missiles, and 30 cruise missiles from Iran-backed groups. The statement documented Iran's activation of its 'entire proxy network' following Hamas's October 7, 2023 attack, and described the Houthis as Iran's 'newest stalwart' front.","url":"https://www.centcom.mil/ABOUT-US/POSTURE-STATEMENT/","confirmed":true,"category":"military_operation","time":"09:34"},{"title":"IAEA Board of Governors Censures Iran for Nuclear Non-Compliance","source":"IAEA","source_type":"government","date":"2025-06-12","summary":"The IAEA Board of Governors concluded that Iran was not complying with its nuclear commitments under its safeguards agreement. Iran responded by disclosing the construction and imminent activation of a third nuclear enrichment facility. The censure came amid IAEA warnings that Iran could convert its 60% enriched uranium stockpile into weapons-grade material in as little as 2-3 days at Fordow.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"nuclear_program","time":"21:10"},{"title":"Israel Launches Operation Rising Lion: Strikes Iranian Nuclear Sites and Military Leadership","source":"Times of Israel","source_type":"news_agency","date":"2025-06-13","summary":"Israel launched Operation Rising Lion, sending more than 200 fighter jets in five waves to strike over 100 targets in Iran including the Natanz nuclear facility, military bases, and infrastructure. Opening strikes codenamed Operation Red Wedding and Operation Narnia assassinated 30 Iranian generals in minutes and 9 of Iran's top 10 nuclear scientists. IRGC Commander Hossein Salami, Armed Forces Chief Mohammed Bagheri, and IRGC Air Force Commander Amir Ali Hajizadeh were killed. Mossad covertly established a drone base near Tehran to neutralize Iran's air defenses prior to the strikes.","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true,"category":"military_operation","time":"02:15"},{"title":"Iran Launches Mass Ballistic Missile and Drone Barrage at Israel in Retaliation","source":"Reuters","source_type":"news_agency","date":"2025-06-13","summary":"Iran retaliated within hours of Israel's Operation Rising Lion launch, firing large-scale missile and drone strikes at Israeli cities. The IRGC launched over 400 ballistic missiles and over 1,000 suicide drones at Israel over the course of the 12-day conflict. In the opening days, the IDF shot down 30 Iranian drones overnight while four impacts occurred in Tel Aviv, one directly striking Camp Moshe Dayan.","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true,"category":"military_operation","time":"05:32"},{"title":"IAEA Director Grossi Addresses UN Security Council on Iran Nuclear Damage","source":"IAEA","source_type":"government","date":"2025-06-20","summary":"IAEA Director General Rafael Grossi briefed the UN Security Council on damage to Iran's nuclear sites from Israeli strikes. He stated that four buildings at the Esfahan nuclear site were damaged, including the central chemical laboratory, uranium conversion plant, and Tehran reactor-fuel manufacturing plant. The Fordow facility was Iran's main enrichment location for 60% uranium. Grossi emphasized that Iran's uranium stockpiles remained under safeguards but that inspections needed to resume urgently.","url":"http://www.iaea.org/newscenter/statements/iaea-director-general-grossis-statement-to-unsc-on-situation-in-iran-20-june-2025","confirmed":true,"category":"nuclear_program","time":"13:20"},{"title":"US Launches Operation Midnight Hammer: B-2 Bombers Strike Three Iranian Nuclear Sites","source":"Air Force Magazine / DoD News","source_type":"military","date":"2025-06-22","summary":"Seven B-2 Spirit stealth bombers launched from Whiteman Air Force Base, Missouri, flew 18 hours to strike Iran's Fordow, Natanz, and Isfahan nuclear facilities using 14 GBU-57 Massive Ordnance Penetrator bunker-buster bombs in their first-ever combat use. A US Navy submarine fired over two dozen Tomahawk cruise missiles at Isfahan. The operation involved 125 US aircraft and approximately 75 precision-guided weapons. Chairman of the Joint Chiefs Gen. Caine stated 'all three sites sustained extremely severe damage.'","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","confirmed":true,"category":"military_operation","time":"01:30"},{"title":"Pentagon Press Conference: Hegseth and Caine Brief on Operation Midnight Hammer Success","source":"Pentagon","source_type":"government","date":"2025-06-22","summary":"Defense Secretary Pete Hegseth and Chairman of the Joint Chiefs Gen. Dan Caine held a Pentagon press conference detailing Operation Midnight Hammer. Hegseth called it 'an incredible and overwhelming success' and said the mission was 'not, and has not been, about regime change.' Caine said deception tactics including decoys flying west over the Pacific were used, Iran's fighters 'did not fly' and surface-to-air missile systems 'did not see us.' CENTCOM was placed on elevated force protection measures across the Middle East.","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","confirmed":true,"category":"military_operation","time":"18:25"},{"title":"Iran Fires Missiles at US Al Udeid Air Base in Qatar in Retaliation for US Nuclear Strikes","source":"Breaking Defense / Pentagon","source_type":"military","date":"2025-06-23","summary":"Iran fired short- and medium-range ballistic missiles at Al Udeid Air Base in Qatar, the regional headquarters of US Central Command, housing approximately 10,000 US troops — Iran's retaliation for Operation Midnight Hammer strikes on its nuclear facilities. The Pentagon said there were no US casualties reported. The attack was Iran's most direct strike on a major US military installation to date.","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","confirmed":true,"category":"military_operation","time":"22:15"},{"title":"Trump Announces Ceasefire Between Israel and Iran — '12-Day War' Ends","source":"New York Times","source_type":"news_agency","date":"2025-06-24","summary":"President Trump announced a ceasefire between Israel and Iran after 12 days of conflict, declaring the agreement on social media. The ceasefire had a volatile start with both sides accusing each other of violations in the initial hours. Iran reported over 610 citizens killed in Israeli strikes, while Israel reported 28 killed from Iranian missile impacts. Iran launched over 550 ballistic missiles and 1,000 drones at Israel during the conflict, with only 5% of missiles impacting the ground.","url":"https://www.nytimes.com/live/2025/06/24/world/ceasefire-iran-israel-trump","confirmed":true,"category":"diplomacy","time":"18:42"},{"title":"Pentagon Assessment: US Strikes Degraded Iran's Nuclear Program by 1-2 Years","source":"Reuters","source_type":"news_agency","date":"2025-07-02","summary":"Pentagon spokesman Sean Parnell announced that US strikes on Iran's nuclear sites had degraded Iran's nuclear program by 'at least one to two years,' aligning with Trump's claim it was 'obliterated.' However, a preliminary Defense Intelligence Agency assessment had leaked saying the strikes delayed the program by only a few months. The IAEA's Grossi noted that Fordow centrifuges were 'no longer operational' but that Iran could resume uranium enrichment 'within a matter of months.'","url":"https://www.reuters.com/world/middle-east/iranian-nuclear-program-degraded-by-up-two-years-pentagon-says-2025-07-02/","confirmed":true,"category":"nuclear_program","time":"10:05"},{"title":"Houthis Resume Red Sea Shipping Attacks — Sink MV Magic Seas, Kill Crew of Eternity C","source":"FDD Long War Journal","source_type":"news_agency","date":"2025-07-06","summary":"Houthis ended a seven-month hiatus from commercial shipping attacks by attacking MV Magic Seas and sinking it with unmanned boats, RPGs, and drones. The next day they attacked the Liberian-flagged Eternity C, killing three crew members, with six more believed held in Houthi custody. Both attacks occurred in the Red Sea near Hodeidah. Human Rights Watch later characterized the attacks as war crimes, noting neither ship had connections to Israel despite Houthi claims.","url":"https://www.longwarjournal.org/archives/2025/07/houthis-resume-deadly-red-sea-shipping-attacks.php","confirmed":true,"category":"regional_proxy","time":"19:02"},{"title":"Israel Strikes Yemeni Ports of Hodeidah, Al Salif, and Ras Isa in Response to Houthi Ship Attacks","source":"The Soufan Center","source_type":"think_tank","date":"2025-07-06","summary":"In response to the Houthi attack on the MV Magic Seas, Israel launched Operation Black Flag, striking Yemeni ports of Hodeidah, As-Salif and Ras Isa, the Ras Kanatib power station, and the hijacked ship Galaxy Leader. Israeli Defense Minister Israel Katz stated 'Yemen's fate will be like Tehran's.' The Houthis subsequently fired two ballistic missiles at Israel in retaliation. The timing — one day before a Trump-Netanyahu meeting — was widely seen as a Houthi message that the Axis of Resistance remained potent.","url":"https://thesoufancenter.org/intelbrief-2025-july-8/","confirmed":true,"category":"military_operation","time":"12:55"},{"title":"Human Rights Watch: Houthi Attacks on Red Sea Cargo Ships Constitute War Crimes","source":"Human Rights Watch","source_type":"think_tank","date":"2025-07-23","summary":"Human Rights Watch documented that the Houthi attacks on MV Magic Seas and MV Eternity C between July 6-9 constituted war crimes under international law. The organization found that neither ship bore any connection to Israel and were therefore civilian vessels with no lawful military target status. Six crew members remained unlawfully detained by Houthis. The Houthis sunk both ships and killed several crew members.","url":"https://www.hrw.org/news/2025/07/23/yemen-houthis-attacks-on-cargo-ships-apparent-war-crimes","confirmed":true,"category":"civilian_impact","time":"15:28"},{"title":"Iran and EU3 Hold Nuclear Talks in Istanbul Following June Ceasefire","source":"Al Jazeera English","source_type":"news_agency","date":"2025-07-25","summary":"Iranian and European diplomats conducted discussions in Istanbul regarding Iran's nuclear program following the June 2025 twelve-day war. The talks were among the first formal diplomatic engagements involving Iran's nuclear program post-ceasefire. Iran had not yet allowed IAEA inspectors back into its bombed nuclear facilities, and its parliament had enacted a law suspending cooperation with the IAEA following the agency's failure to condemn US and Israeli strikes.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"diplomacy","time":"10:41"},{"title":"Israel Approves Operation Gideon's Chariots II — Military Offensive to Seize Gaza City","source":"FDD Long War Journal","source_type":"news_agency","date":"2025-08-20","summary":"Israel launched 'Operation Gideon's Chariots II' (also called Gideon's Chariots B), a new ground offensive targeting Gaza City. Israel Defense Minister Katz approved plans to occupy Gaza City with 60,000 reservists called up. The IDF announced the operation would aim to seize Gaza City, the last major Hamas-controlled population center, following earlier operations that had placed approximately 75% of the Gaza Strip under IDF control.","url":"https://www.longwarjournal.org/archives/2025/08/israeli-military-begins-new-offensive-targeting-gaza-city.php","confirmed":true,"category":"military_operation","time":"12:19"},{"title":"France, Germany, UK Trigger UN Sanctions 'Snapback' Against Iran","source":"Reuters","source_type":"news_agency","date":"2025-08-28","summary":"France, Germany, and the United Kingdom announced the initiation of the JCPOA 'snapback' process to reinstate UN Security Council sanctions against Iran after sending a warning in August that Iran must reach a 'satisfactory solution' on its nuclear program by August 31 or face reimposed sanctions. The UN Security Council voted on September 19 and 26 to decline efforts by China and Russia to halt the snapback process. UN sanctions were fully reimposed on September 28.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"sanctions","time":"17:48"},{"title":"IDF Drone Strike Kills Hamas Al-Qassam Brigades Spokesman Abu Obaida in Gaza City","source":"Al Jazeera English","source_type":"news_agency","date":"2025-08-30","summary":"Israeli Shin Bet carried out a drone strike in Gaza City targeting Hamas spokesman Abu Obaida, who had been the public voice of the Al-Qassam Brigades throughout the war. Israel stated he was killed; Hamas did not confirm or deny the claim. The strike occurred during the IDF's offensive in Gaza City as part of Operation Gideon's Chariots II, in which the IDF reported operational control over 40% of Gaza City by early September.","url":"https://en.wikipedia.org/wiki/2025_Gaza_City_offensive","confirmed":false,"category":"military_operation","time":"12:25"},{"title":"Iran-IAEA Reach Agreement for Potential Resumption of Inspections","source":"AP News","source_type":"news_agency","date":"2025-09-09","summary":"Iran and the IAEA reached an agreement to potentially commence inspections of Iran's nuclear sites, including those damaged in the June 2025 strikes, though implementation details remained unclear. The agreement came as the E3 (France, Germany, UK) pursued the snapback mechanism. Iran had barred IAEA access to bombed sites since June, and the IAEA had been unable to verify whether Iran had halted enrichment or account for the location of its 400+ kg of 60% enriched uranium stockpile.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"nuclear_program","time":"20:15"},{"title":"UN Security Council Reimposed Snapback Sanctions on Iran","source":"Reuters","source_type":"news_agency","date":"2025-09-28","summary":"The United Nations reinstated 'snapback' sanctions on Iran following the UK, France, and Germany's invocation of the JCPOA mechanism. The UN Security Council declined last-minute efforts by China and Russia to block the reimposition on September 19 and 26. The sanctions reimposition marks a return to pre-JCPOA international restrictions on Iran's nuclear program and arms transfers, adding to existing US maximum pressure sanctions.","url":"https://apnews.com/article/iran-us-talks-oman-nuclear-protests-e5fce5e891243b7651cf76d8211f78ae","confirmed":true,"category":"sanctions","time":"19:56"},{"title":"Israel-Hamas Gaza Ceasefire Announced; Trump Peace Plan Enters First Phase","source":"Reuters","source_type":"news_agency","date":"2025-10-10","summary":"Israel's government approved a ceasefire and hostage release deal for Gaza, initiating the first phase of Trump's twenty-point peace plan. The ceasefire took effect at noon with Israeli military beginning withdrawal to designated lines. The deal required Hamas to release all 48 remaining hostages (20 confirmed alive) within 72 hours in exchange for Israel releasing 250 Palestinian security prisoners, 1,700 Gazan detainees, and providing significant increase in humanitarian aid.","url":"https://www.reuters.com/world/middle-east/details-gaza-ceasefire-agreement-2025-10-10/","confirmed":true,"category":"diplomacy","time":"15:58"},{"title":"IDF Operations in Lebanon Against Hezbollah Continue Post-Ceasefire — November 2025 Summary","source":"FDD Long War Journal","source_type":"think_tank","date":"2025-11-09","summary":"The IDF conducted numerous operations in Lebanon against Hezbollah between November 3-9, 2025, concentrated in southern Lebanon on both sides of the Litani River in the most intense week since prior months. Thursday saw a significant Israeli escalation targeting multiple Hezbollah installations. Israeli operations killed 10 people including seven Hezbollah operatives and wounded 26. The IDF cited Hezbollah's ongoing efforts to 'restore infrastructure in violation of the understandings between Israel and Lebanon.'","url":"https://www.longwarjournal.org/archives/2025/11/israeli-operations-in-lebanon-against-hezbollah-november-3-9-2025.php","confirmed":true,"category":"military_operation","time":"17:06"},{"title":"Yemen's Houthis Appear to Pull Back From Red Sea Attacks as Gaza Ceasefire Takes Hold","source":"Al Jazeera English","source_type":"news_agency","date":"2025-11-15","summary":"Houthi officials signaled a potential de-escalation in Red Sea attacks following the Israel-Hamas ceasefire in Gaza, with one official saying the group would 'assess' whether to continue attacking shipping given the ceasefire terms. The Houthis had resumed attacks in July 2025 following a period of relative calm, and had continued missile and drone attacks on Israel despite the US-Houthi ceasefire. The ceasefire's holding through its first 30 days appeared to reduce the Houthis' stated rationale for maritime attacks.","url":"https://www.aljazeera.com/news/2025/11/15/yemens-houthis-appear-to-pull-back-from-red-sea-attacks-as-gaza-ceasefire","confirmed":true,"category":"regional_proxy","time":"14:07"},{"title":"Trump Signs Executive Order Imposing New Sanctions on Iran's Oil Sector","source":"Reuters","source_type":"news_agency","date":"2025-12-01","summary":"President Trump signed a new executive order imposing additional sanctions on Iran's oil and petrochemical sectors, targeting entities facilitating Iranian oil exports. The sanctions targeted six Iranian oil companies and three Chinese refineries purchasing Iranian crude. Administration officials said the goal was to reduce Iran's oil revenues to near-zero to deny funding for Iran's nuclear and military programs. Iran's oil exports had recovered somewhat in the months following the June 2025 ceasefire.","url":"https://www.reuters.com/world/middle-east/trump-signs-executive-order-iran-oil-sanctions-2025-12-01/","confirmed":true,"category":"sanctions","time":"11:35"},{"title":"IDF Kills Hamas Al-Qassam Brigades Commander Mohammed Deif in Gaza","source":"Times of Israel","source_type":"news_agency","date":"2025-12-14","summary":"The IDF confirmed the killing of Mohammed Deif, commander of Hamas's Al-Qassam Brigades, through an airstrike during ongoing Gaza operations. The IDF had attempted to kill Deif in a July 2024 strike that killed 90 civilians before later confirming his death. The December 2025 announcement coincided with confirmation by Hamas of Abu Obaida's death (killed in August 2025), with the Al-Qassam Brigades releasing a video tribute and announcing new leadership.","url":"https://www.aljazeera.com/news/2025/12/29/hamas-armed-wing-confirms-deaths-of-figures-israel-earlier-said-it-killed-2","confirmed":true,"category":"military_operation","time":"16:42"},{"title":"Iran Supreme Leader Khamenei Reported Killed in Israeli Strikes on Tehran","source":"Multiple Sources / Unverified","source_type":"news_agency","date":"2026-02-28","summary":"Multiple unverified reports emerged claiming Israeli strikes killed Supreme Leader Ali Khamenei in Tehran. Israel's military stated it had struck 20 targets in Tehran including leadership bunkers. Iran's FM Araghchi told NBC Khamenei is alive 'as far as I know' and officials are 'safe and sound.' Reuters reported Khamenei was transferred to a secure location. An Israeli official told CBS the probability of Khamenei's survival is 'extremely low,' but no independent verification, photos, or state acknowledgment of his death has emerged.","url":"https://www.bbc.com/news/live/cn5ge95q6y7t","confirmed":false,"category":"military_operation","time":"14:55"},{"title":"US and Israel Launch 'Operation Epic Fury' — Joint Strike Campaign Against Iran","source":"Multiple Sources","source_type":"news_agency","date":"2026-02-28","summary":"The United States and Israel launched a coordinated military campaign called 'Operation Epic Fury,' striking over 900 Iranian military targets in the opening hours. US B-2 stealth bombers, carrier-based aircraft from USS Abraham Lincoln and USS Gerald R. Ford, and Israeli F-35s participated. Targets included Iran's air defense systems, missile production facilities, IRGC command centers, and leadership bunkers in Tehran. Trump said the campaign aimed to 'end Iran's ability to sponsor terrorism' and achieve 'complete and total denuclearization.'","url":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true,"category":"military_operation","time":"02:15"},{"title":"Iran Launches Ballistic Missile Strikes on Israel and US Bases in Response to Operation Epic Fury","source":"Reuters","source_type":"news_agency","date":"2026-02-28","summary":"Iran launched ballistic missile and drone strikes at Israeli cities and US military bases in the region in direct retaliation for Operation Epic Fury. Iranian missiles targeted Tel Aviv, Haifa, and the Negev. Iran's IRGC also targeted US bases in Qatar, Bahrain, Kuwait, and Iraq with ballistic missiles. US THAAD, Patriot, and Iron Dome systems intercepted the majority of missiles. Iranian state media reported the IRGC launched over 200 ballistic missiles against Israel and 80 against US bases.","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","confirmed":true,"category":"military_operation","time":"09:32"},{"title":"Iran Fires Missiles at Dubai International Airport; UAE Airspace Disrupted","source":"Multiple Sources / Unverified","source_type":"news_agency","date":"2026-02-28","summary":"Multiple unverified reports emerged of Iranian missiles impacting near or at Dubai International Airport in the UAE, one of the world's busiest airports. Multiple flights were reported diverted and the airport was reportedly evacuated. The UAE had not officially commented on the reports. If confirmed, it would mark Iran's first direct strike on UAE territory and a major escalation threatening Gulf stability.","url":"https://x.com/sentdefender/status/2027855511870116249","confirmed":false,"category":"civilian_impact","time":"11:48"},{"title":"IRGC Announces Strait of Hormuz Closure; Global Oil Markets in Turmoil","source":"IRGC / Iranian State Media","source_type":"state_media","date":"2026-02-28","summary":"Iran's Revolutionary Guard Corps announced the temporary closure of the Strait of Hormuz to international shipping, citing the ongoing US-Israeli military campaign. The closure threatens approximately 20% of the world's daily oil supply that transits the strait. Global oil prices spiked over 12% on the announcement. The US 5th Fleet based in Bahrain was placed on heightened alert to respond to any Hormuz closure enforcement actions.","url":"https://www.reuters.com/world/middle-east/iran-us-strait-hormuz-2026/","confirmed":false,"category":"military_operation","time":"13:22"}];

const STRIKES_DATA = [{"date":"2024-01-12","location_name":"Sanaa (Al-Dailami Air Base)","country":"Yemen","lat":15.4783,"lng":44.2194,"attacker":"United States","target":"Houthi missile launch and drone facilities, Al-Dailami Air Base","description":"First wave of Operation Poseidon Archer. US and UK struck approximately 30 Houthi military sites across Yemen including Al-Dailami Air Base near Sanaa. Destroyed/degraded over 27 missile and drone launch facilities.","confirmed":true,"source":"ACLED / USNI News","url":"https://acleddata.com/update/yemen-situation-update-january-2024","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Hodeidah (Hudaydah)","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi coastal defense and missile storage","description":"Part of initial Operation Poseidon Archer strikes. US and UK targeted Houthi military infrastructure in Hudaydah, a key Red Sea port city used for Houthi weapons transfers.","confirmed":true,"source":"BBC News","url":"https://www.bbc.com/news/world-middle-east-68064422","weapon_type":"airstrike"},{"date":"2024-01-12","location_name":"Taiz","country":"Yemen","lat":13.5795,"lng":44.018,"attacker":"United States","target":"Houthi military positions","description":"Operation Poseidon Archer initial wave. Strikes on Houthi military targets in Taiz governorate.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi underground weapon storage site, missile and air surveillance capabilities","description":"Second joint US-UK strike under Operation Poseidon Archer. Eight targets hit including an underground storage site. ~25-30 precision munitions deployed including Tomahawk cruise missiles. Four RAF Typhoons participated.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/us-uk-launch-new-strikes-houthi-targets-yemen-2024-01-22/","weapon_type":"airstrike"},{"date":"2024-01-22","location_name":"Hajjah","country":"Yemen","lat":15.6929,"lng":43.6027,"attacker":"United States","target":"Houthi radar and missile systems","description":"Part of the second joint US-UK strike package targeting Houthi military capabilities across multiple governorates. Coalition struck 8 targets overall in this round.","confirmed":true,"source":"USNI News","url":"https://news.usni.org/2024/01/22/u-s-u-k-launch-major-strike-missions-on-houthi-missile-drone-infrastructure","weapon_type":"airstrike"},{"date":"2024-03-25","location_name":"Hudaydah Port","country":"Yemen","lat":14.8022,"lng":42.9667,"attacker":"United States","target":"Houthi fuel storage facilities used to fund Houthi operations","description":"US struck Houthi fuel storage facilities at Hudaydah port used for financing operations. Fire from the strike burned for days. The Houthis stated the strike caused civilian casualties.","confirmed":true,"source":"Al Jazeera / USNI","url":"https://www.aljazeera.com/news/2024/3/26/us-uk-strike-yemens-hudaydah-for-first-time","weapon_type":"airstrike"},{"date":"2024-03-25","location_name":"Ras Isa","country":"Yemen","lat":15.3519,"lng":42.9098,"attacker":"United States","target":"Houthi petroleum infrastructure","description":"US airstrikes hit Ras Isa oil terminal as part of expanded campaign targeting Houthi economic resources and fuel supply chain.","confirmed":true,"source":"Al Jazeera","url":"https://www.aljazeera.com/news/2024/3/26/us-uk-strike-yemens-hudaydah-for-first-time","weapon_type":"airstrike"},{"date":"2024-04-01","location_name":"Damascus (Iranian Consulate)","country":"Syria","lat":33.5138,"lng":36.2765,"attacker":"Israel","target":"Iranian Consulate Annex, IRGC-QF senior leadership","description":"Israel struck the Iranian consular building in Damascus, killing IRGC-Quds Force Brig. Gen. Mohammad Reza Zahedi and six others. The attack destroyed the consular building and was one of the most significant Israeli strikes on Iranian personnel.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israelis-strike-iranian-consulate-damascus-killing-top-commander-2024-04-01/","weapon_type":"airstrike"},{"date":"2024-04-13","location_name":"Israel (widespread)","country":"Israel","lat":31.5,"lng":34.75,"attacker":"Iran","target":"Israeli military and civilian infrastructure","description":"Iran launched Operation True Promise: 170 drones, 30 cruise missiles, and 120 ballistic missiles at Israel — its first-ever direct strike from Iranian territory. Over 99% intercepted by Israel, US, Jordan, UK, and France.","confirmed":true,"source":"IDF / Reuters","url":"https://www.reuters.com/world/middle-east/iran-launches-drones-toward-israel-2024-04-13/","weapon_type":"ballistic_missile"},{"date":"2024-04-19","location_name":"Isfahan","country":"Iran","lat":32.6546,"lng":51.6679,"attacker":"Israel","target":"Iranian air defense radar near nuclear facility","description":"Israel struck Isfahan with small drones targeting air defense radar near nuclear sites. Israel neither confirmed nor denied; Iran initially downplayed. This was Israel's first publicly known direct strike on Iranian soil.","confirmed":true,"source":"AP / BBC","url":"https://apnews.com/article/israel-iran-war-attack-response-news-04-19-2024-be369de3a34b7fd6a4d7e5fcedfb048a","weapon_type":"drone"},{"date":"2024-10-01","location_name":"Israel (Tel Aviv, Negev)","country":"Israel","lat":32.0,"lng":34.8,"attacker":"Iran","target":"Israeli military bases and civilian infrastructure","description":"Iran launched Operation True Promise II: approximately 200 ballistic missiles at Israel in retaliation for the killing of Hezbollah's Nasrallah and Hamas political bureau chief Haniyeh. Israeli officials said most were intercepted; some reached the Negev.","confirmed":true,"source":"AP / Reuters","url":"https://apnews.com/article/iran-missiles-israel-true-promise-2-b5f32a8cf48c8bc3b1b0a2f9e8c4d3","weapon_type":"ballistic_missile"},{"date":"2024-10-26","location_name":"Tehran (multiple sites)","country":"Iran","lat":35.6892,"lng":51.389,"attacker":"Israel","target":"Iranian air defense systems, military infrastructure, missile production","description":"Israel launched major strike 'Operation Days of Repentance' targeting Iran's air defense batteries (specifically S-300 systems), military infrastructure, and missile production facilities. Over 100 Israeli jets participated in multiple waves.","confirmed":true,"source":"Times of Israel","url":"https://www.timesofisrael.com/israel-strikes-iran-in-days-of-repentance","weapon_type":"airstrike"},{"date":"2024-10-26","location_name":"Khuzestan Province","country":"Iran","lat":31.3,"lng":48.7,"attacker":"Israel","target":"Military radar and air defense systems","description":"Israeli strikes as part of Operation Days of Repentance targeted air defense radar systems in Khuzestan province, near key oil infrastructure.","confirmed":true,"source":"Reuters","url":"https://www.reuters.com/world/middle-east/israel-strikes-iran-2024-10-26/","weapon_type":"airstrike"},{"date":"2025-01-12","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi military targets as part of renewed pressure campaign","description":"US resumed strikes on Houthi targets in Sanaa under the new Trump administration's renewed pressure campaign against Iran and its proxies.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Sanaa","country":"Yemen","lat":15.3694,"lng":44.191,"attacker":"United States","target":"Houthi radar, air defenses, ballistic missile and drone launch sites","description":"Operation Rough Rider launched — massive airstrike campaign against Houthis. First wave targeted Houthi radar systems, air defenses, and ballistic/drone launch facilities.","confirmed":true,"source":"NPR / CENTCOM","url":"https://www.npr.org/2025/03/15/nx-s1-5329284/trump-airstrikes-houthis-yemen-iran","weapon_type":"airstrike"},{"date":"2025-03-15","location_name":"Hodeidah","country":"Yemen","lat":14.798,"lng":42.9511,"attacker":"United States","target":"Houthi military infrastructure and port facilities","description":"Operation Rough Rider strikes on Hodeidah targeting Houthi military infrastructure as part of the broader opening wave of the campaign.","confirmed":true,"source":"CENTCOM","url":"https://www.centcom.mil/","weapon_type":"airstrike"},{"date":"2025-04-02","location_name":"Al Fazah (Hudaydah)","country":"Yemen","lat":14.95,"lng":43.0,"attacker":"United States","target":"Houthi leadership meeting — Axis and Coastal Commanders","description":"CENTCOM strike killed 70 Houthi fighters including al Tuhayta Axis Commander Najib Kashri and Red Sea Coastal Region Commander Abu Taleb in al Fazah, Hudaydah Governorate.","confirmed":true,"source":"CENTCOM","url":"https://en.wikipedia.org/wiki/March%E2%80%93May_2025_United_States_attacks_in_Yemen","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Natanz Nuclear Facility","country":"Iran","lat":33.7225,"lng":51.7272,"attacker":"Israel","target":"Uranium enrichment centrifuge halls, power systems","description":"Operation Rising Lion — Israel struck Natanz as part of the first wave targeting Iran's nuclear program. Over 200 Israeli fighter jets participated across five waves targeting 100+ sites.","confirmed":true,"source":"Times of Israel / Wikipedia","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Tehran (IRGC HQ)","country":"Iran","lat":35.7219,"lng":51.3347,"attacker":"Israel","target":"IRGC Command and Control, senior military leadership","description":"Operation Rising Lion opening strike codenamed 'Operation Red Wedding' — Israeli jets struck IRGC command centers, killing IRGC Commander Hossein Salami, Armed Forces Chief Bagheri, and IRGC Air Force Commander Hajizadeh.","confirmed":true,"source":"Wikipedia / Times of Israel","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-13","location_name":"Israel (Tel Aviv, widespread)","country":"Israel","lat":32.0853,"lng":34.7818,"attacker":"Iran","target":"Israeli cities and military infrastructure","description":"Iran retaliated immediately with Operation True Promise III — over 400 ballistic missiles and 1,000+ suicide drones launched at Israel. Four impacts in Tel Aviv including one at Camp Moshe Dayan. IDF intercepted approximately 95%.","confirmed":true,"source":"Reuters / Wikipedia","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"ballistic_missile"},{"date":"2025-06-16","location_name":"Fordow Nuclear Facility","country":"Iran","lat":34.8845,"lng":50.9788,"attacker":"Israel","target":"Underground uranium enrichment facility (primary 60% HEU site)","description":"Israel struck Fordow in later waves of Operation Rising Lion. Fordow was Iran's primary production site for 60% enriched uranium at 37.5 kg/month. The IAEA later confirmed centrifuges were 'no longer operational.'","confirmed":true,"source":"IAEA / Times of Israel","url":"https://en.wikipedia.org/wiki/Twelve-Day_War","weapon_type":"airstrike"},{"date":"2025-06-22","location_name":"Fordow Nuclear Facility","country":"Iran","lat":34.8845,"lng":50.9788,"attacker":"United States","target":"Underground nuclear enrichment halls (GBU-57 Massive Ordnance Penetrators)","description":"Operation Midnight Hammer — Seven B-2 bombers from Whiteman AFB dropped 14 GBU-57 Massive Ordnance Penetrators, first ever combat use. Gen. Caine described 'extremely severe damage' to all three sites.","confirmed":true,"source":"USAF / DoD","url":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Natanz Nuclear Facility","country":"Iran","lat":33.7225,"lng":51.7272,"attacker":"United States","target":"Underground uranium enrichment facility","description":"Operation Midnight Hammer B-2 strike on Natanz using GBU-57 bunker busters. Tomahawk cruise missiles also fired from US Navy submarine at Isfahan.","confirmed":true,"source":"DoD / Air Force Magazine","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","weapon_type":"bunker_buster"},{"date":"2025-06-22","location_name":"Isfahan Nuclear Site","country":"Iran","lat":32.6546,"lng":51.6679,"attacker":"United States","target":"Nuclear research facilities, uranium conversion plant","description":"Operation Midnight Hammer — Tomahawk cruise missiles from US Navy submarine struck Isfahan nuclear facilities. IAEA confirmed damage to uranium conversion plant and central chemical laboratory.","confirmed":true,"source":"DoD / IAEA","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","weapon_type":"cruise_missile"},{"date":"2025-06-23","location_name":"Al Udeid Air Base, Qatar","country":"Qatar","lat":25.1175,"lng":51.3148,"attacker":"Iran","target":"US CENTCOM regional HQ (~10,000 US troops)","description":"Iran fired short- and medium-range ballistic missiles at Al Udeid, the largest US air base in the Middle East. Pentagon reported no US casualties. Most intercepted by THAAD and Patriot systems.","confirmed":true,"source":"Pentagon / Breaking Defense","url":"https://breakingdefense.com/2025/06/operation-midnight-hammer-how-the-us-conducted-surprise-strikes-on-iran/","weapon_type":"ballistic_missile"},{"date":"2025-07-06","location_name":"Hodeidah Port","country":"Yemen","lat":14.8022,"lng":42.9667,"attacker":"Israel","target":"Houthi port infrastructure, Galaxy Leader","description":"Operation Black Flag — Israel struck Hodeidah, As-Salif, and Ras Isa ports plus the Ras Kanatib power station in retaliation for Houthi attacks on MV Magic Seas. Israeli Defense Minister Katz stated 'Yemen's fate will be like Tehran's.'","confirmed":true,"source":"Soufan Center","url":"https://thesoufancenter.org/intelbrief-2025-july-8/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Tehran (IRGC Command Centers)","country":"Iran","lat":35.7219,"lng":51.3347,"attacker":"United States","target":"IRGC command centers, leadership bunkers","description":"Operation Epic Fury — US and Israeli joint campaign. B-2 bombers and carrier-based aircraft struck IRGC command centers and leadership bunkers including potential Khamenei location. Over 900 targets struck in opening hours.","confirmed":true,"source":"Task & Purpose / Reuters","url":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Tehran (Air Defense Systems)","country":"Iran","lat":35.8,"lng":51.5,"attacker":"Israel","target":"Iranian air defense batteries, S-300/S-400 systems","description":"Operation Epic Fury — Israeli F-35s suppressed Iranian air defenses as part of coordinated US-Israeli joint campaign opening strikes.","confirmed":true,"source":"Task & Purpose","url":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","weapon_type":"airstrike"},{"date":"2026-02-28","location_name":"Israel (Tel Aviv, Haifa, Negev)","country":"Israel","lat":32.0853,"lng":34.7818,"attacker":"Iran","target":"Israeli cities and military bases","description":"Iranian retaliation to Operation Epic Fury — IRGC launched over 200 ballistic missiles at Israeli cities and military bases. US THAAD, Patriot, and Israeli Arrow/Iron Dome intercepted the majority. Limited impacts reported.","confirmed":true,"source":"Reuters / Al Jazeera","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","weapon_type":"ballistic_missile"},{"date":"2026-02-28","location_name":"Al Udeid Air Base, Qatar","country":"Qatar","lat":25.1175,"lng":51.3148,"attacker":"Iran","target":"US CENTCOM HQ, US personnel","description":"Iran fired ballistic missiles at Al Udeid Air Base (US CENTCOM HQ, ~10,000 US troops) as part of its retaliation for Operation Epic Fury. Part of a broader Iranian strike on US bases across the region including Bahrain, Kuwait, and Iraq.","confirmed":true,"source":"Reuters","url":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","weapon_type":"ballistic_missile"},{"date":"2026-02-28","location_name":"Dubai (near Airport)","country":"UAE","lat":25.2532,"lng":55.3657,"attacker":"Iran","target":"Unspecified — reported impacts near Dubai International Airport","description":"Unverified reports of Iranian missile impacts near Dubai International Airport. UAE airspace disrupted and airport reportedly evacuated. Not officially confirmed by UAE government as of reporting.","confirmed":false,"source":"OSINT / Social Media","url":"https://x.com/sentdefender/status/2027855511870116249","weapon_type":"ballistic_missile"}];

const MILITARY_ASSETS = [{"asset_name":"USS Abraham Lincoln (CVN-72)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Arabian Sea, south of Iran near Oman","lat":22.0,"lng":61.5,"status":"deployed","details":"Carrier Strike Group 3 (CSG-3). Redirected from South China Sea to Arabian Sea in mid-January 2026. Carrying F/A-18 Super Hornets, F-35C fighters, and E/A-18G Growlers. One of its jets shot down an Iranian drone in early February 2026. Part of 'Operation Epic Fury' buildup against Iran.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"USS Gerald R. Ford (CVN-78)","asset_type":"aircraft_carrier","nation":"United States","location_description":"Eastern Mediterranean Sea, off coast of Israel","lat":33.5,"lng":33.5,"status":"deployed","details":"World's largest aircraft carrier. Carrier Strike Group with embarked CVW-8. Departed Norfolk June 24, 2025, was in Caribbean for Operation Absolute Resolve, returned to Mediterranean in mid-February 2026 amid Iran tensions. Due to arrive near Israeli coast on Feb 28, 2026. Over 241 days deployed as of Feb 20.","last_updated":"2026-02-28","source":"https://taskandpurpose.com/news/us-israel-combat-bomb-iran/","confirmed":true},{"asset_name":"USS Delbert D. Black (DDG-119)","asset_type":"destroyer","nation":"United States","location_description":"Persian Gulf theater","lat":26.5,"lng":55.0,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Part of Persian Gulf theater forces; can launch Tomahawk land-attack missiles and has advanced air and missile defense capabilities. Confirmed in Persian Gulf theater as of February 2026.","last_updated":"2026-02-11","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"USS Mitscher (DDG-57)","asset_type":"destroyer","nation":"United States","location_description":"Red Sea / Bab-el-Mandeb area","lat":13.5,"lng":43.5,"status":"deployed","details":"Arleigh Burke-class guided-missile destroyer. Deployed to the Red Sea theater to support operations against Houthi threats. Equipped with SM-2, SM-6, and Tomahawk missiles.","last_updated":"2026-02-20","source":"https://www.rferl.org/a/us-military-deployment-gulf-iran-strikes/33675133.html","confirmed":true},{"asset_name":"B-2 Spirit Bombers (7 aircraft)","asset_type":"strategic_bomber","nation":"United States","location_description":"Diego Garcia / Whiteman AFB forward staging","lat":-7.3195,"lng":72.4242,"status":"deployed","details":"Seven B-2 Spirit stealth bombers used in Operation Midnight Hammer (June 2025) flew 18-hour round trips from Whiteman AFB, Missouri, dropping GBU-57 Massive Ordnance Penetrators. Now forward staged at Diego Garcia for Operation Epic Fury.","last_updated":"2026-02-28","source":"https://www.af.mil/News/Article-Display/Article/4222562/hegseth-caine-laud-success-of-us-strike-on-iran-nuke-sites/","confirmed":true},{"asset_name":"THAAD Battery — Israel","asset_type":"missile_defense","nation":"United States","location_description":"Israel (Nevatim Air Base area)","lat":31.2,"lng":35.01,"status":"deployed","details":"US Terminal High Altitude Area Defense battery deployed to Israel. Has been intercepting Iranian ballistic missiles since October 2024. Operational during the 12-Day War June 2025 and Operation Epic Fury February 2026.","last_updated":"2026-02-28","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"IDF Air Force F-35I Adir Fleet","asset_type":"fighter_aircraft","nation":"Israel","location_description":"Nevatim Air Base, Israel","lat":31.2074,"lng":35.012,"status":"active","details":"Israel's F-35I Adir stealth fighters participated in Operation Rising Lion (June 2025) and Operation Epic Fury (Feb 2026), suppressing Iranian air defenses and striking hardened targets. Israel operates approximately 50 F-35Is.","last_updated":"2026-02-28","source":"https://en.wikipedia.org/wiki/Twelve-Day_War","confirmed":true},{"asset_name":"IRGC Aerospace Force Missiles","asset_type":"missile_battery","nation":"Iran","location_description":"Multiple sites across Iran","lat":32.4279,"lng":53.6880,"status":"active","details":"IRGC Aerospace Force operates Iran's ballistic missile arsenal including Shahab-3, Emad, Ghadr, Fattah-1 hypersonic, and Kheibar Shekan missiles. Launched 200+ ballistic missiles against Israel and US bases in response to Operation Epic Fury on Feb 28, 2026.","last_updated":"2026-02-28","source":"https://www.aljazeera.com/news/2026/2/28/world-reacts-to-us-israel-attack-on-iran-tehran-retaliation","confirmed":true},{"asset_name":"USS Bataan Amphibious Ready Group","asset_type":"amphibious_group","nation":"United States","location_description":"Mediterranean Sea / Eastern Med","lat":34.5,"lng":30.0,"status":"deployed","details":"Amphibious Ready Group with embarked Marine Expeditionary Unit. Deployed to Eastern Mediterranean in support of regional contingencies. Can conduct amphibious operations, non-combatant evacuation, and crisis response.","last_updated":"2026-02-15","source":"https://www.csis.org/analysis/us-military-middle-east-numbers-behind-trumps-threats-against-iran","confirmed":true},{"asset_name":"Houthi Missile & Drone Arsenal","asset_type":"missile_battery","nation":"Yemen (Houthi)","location_description":"Northwest Yemen — multiple dispersed sites","lat":15.55,"lng":43.5,"status":"active","details":"Houthis operate Iranian-supplied Quds-1 cruise missiles, Zulfiqar ballistic missiles, and Shahed-136 kamikaze drones. Resumed Red Sea shipping attacks in July 2025 after ceasefire. Continue periodic attacks on Israel.","last_updated":"2026-02-15","source":"https://www.longwarjournal.org/archives/2025/07/houthis-resume-deadly-red-sea-shipping-attacks.php","confirmed":true}];

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