import { LessonUnit } from "../types/course";

export const lessons: LessonUnit[] = [
  {
    id: "m1w1-greetings",
    month: 1,
    week: 1,
    title: "Greetings & Politeness",
    focus: "speaking",
    objective: "Use greetings at different times and respond politely.",
    phrases: [
      { japanese: "おはようございます", romaji: "Ohayou gozaimasu", english: "Good morning." },
      { japanese: "こんにちは", romaji: "Konnichiwa", english: "Hello / Good afternoon." },
      { japanese: "こんばんは", romaji: "Konbanwa", english: "Good evening." },
      { japanese: "ありがとうございます", romaji: "Arigatou gozaimasu", english: "Thank you very much." }
    ],
    customs: [
      "A light bow is more natural than a handshake in many situations.",
      "Use polite forms with strangers and staff.",
      "Speak gently in trains and quiet public spaces."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    roleplay: [
      { id: "r1", speaker: "guide", japanese: "いらっしゃいませ。", romaji: "Irasshaimase.", english: "Welcome." },
      {
        id: "r2",
        speaker: "learner",
        japanese: "こんにちは。",
        romaji: "Konnichiwa.",
        english: "Hello.",
        choices: [
          { id: "c1", label: "Say thanks politely", replyTurnId: "r3" },
          { id: "c2", label: "Ask a simple question", replyTurnId: "r4" }
        ]
      },
      { id: "r3", speaker: "guide", japanese: "ありがとうございます。", romaji: "Arigatou gozaimasu.", english: "Thank you." },
      { id: "r4", speaker: "guide", japanese: "はい、どうぞ。", romaji: "Hai, douzo.", english: "Yes, go ahead." }
    ]
  },
  {
    id: "m1w2-introductions",
    month: 1,
    week: 2,
    title: "Self-Introduction",
    focus: "speaking",
    objective: "Introduce yourself and your origin in 3-4 short lines.",
    phrases: [
      { japanese: "はじめまして", romaji: "Hajimemashite", english: "Nice to meet you." },
      { japanese: "わたしはアレックスです", romaji: "Watashi wa Arekkusu desu", english: "I am Alex." },
      { japanese: "アメリカからきました", romaji: "Amerika kara kimashita", english: "I came from the U.S." },
      { japanese: "よろしくおねがいします", romaji: "Yoroshiku onegaishimasu", english: "Please treat me well." }
    ],
    customs: [
      "Keep your introduction modest and concise.",
      "Avoid very direct personal questions early.",
      "Exchanging business cards should be done with both hands if offered."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m1w3-simple-questions",
    month: 1,
    week: 3,
    title: "Simple Questions",
    focus: "speaking",
    objective: "Ask and answer basic travel questions politely.",
    phrases: [
      { japanese: "これはなんですか", romaji: "Kore wa nan desu ka", english: "What is this?" },
      { japanese: "どこですか", romaji: "Doko desu ka", english: "Where is it?" },
      { japanese: "いくらですか", romaji: "Ikura desu ka", english: "How much is it?" },
      { japanese: "わかりました", romaji: "Wakarimashita", english: "I understand." }
    ],
    customs: [
      "Use a soft tone when asking for help from staff.",
      "Pointing with a whole hand is often preferred over a finger.",
      "Say thank you after receiving directions or explanations."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
    roleplay: [
      { id: "m1w3-r1", speaker: "guide", japanese: "なにをさがしていますか。", romaji: "Nani o sagashite imasu ka.", english: "What are you looking for?" },
      {
        id: "m1w3-r2",
        speaker: "learner",
        japanese: "えきはどこですか。",
        romaji: "Eki wa doko desu ka.",
        english: "Where is the station?",
        choices: [
          { id: "m1w3-c1", label: "Thank them", replyTurnId: "m1w3-r3" },
          { id: "m1w3-c2", label: "Ask them to repeat", replyTurnId: "m1w3-r4" }
        ]
      },
      { id: "m1w3-r3", speaker: "guide", japanese: "どういたしまして。", romaji: "Douitashimashite.", english: "You're welcome." },
      { id: "m1w3-r4", speaker: "guide", japanese: "もういちどいいますね。", romaji: "Mou ichido iimasu ne.", english: "I'll say it one more time." }
    ]
  },
  {
    id: "m1w4-polite-requests",
    month: 1,
    week: 4,
    title: "Polite Requests",
    focus: "culture",
    objective: "Make polite requests in service situations and public places.",
    phrases: [
      { japanese: "すみません", romaji: "Sumimasen", english: "Excuse me / Sorry." },
      { japanese: "おねがいします", romaji: "Onegaishimasu", english: "Please." },
      { japanese: "だいじょうぶです", romaji: "Daijoubu desu", english: "It's okay / No thank you." },
      { japanese: "ありがとうございます", romaji: "Arigatou gozaimasu", english: "Thank you very much." }
    ],
    customs: [
      "Queue patiently and avoid cutting lines.",
      "On escalators, follow local standing norms for each city.",
      "Keep voice volume low in elevators and train cars."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m2w1-ordering-food",
    month: 2,
    week: 1,
    title: "Ordering Food",
    focus: "speaking",
    objective: "Order meals, ask preferences, and settle the bill.",
    phrases: [
      { japanese: "これをください", romaji: "Kore o kudasai", english: "This one, please." },
      { japanese: "おすすめはなんですか", romaji: "Osusume wa nan desu ka", english: "What do you recommend?" },
      { japanese: "みずをください", romaji: "Mizu o kudasai", english: "Water, please." },
      { japanese: "おかいけいおねがいします", romaji: "Okaikei onegaishimasu", english: "Check, please." }
    ],
    customs: [
      "Do not tip in restaurants; good service is standard.",
      "Say itadakimasu before eating in more formal settings.",
      "Keep phone calls brief or avoid them while dining."
    ],
    speakingModes: ["drill", "roleplay", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m2w2-shopping-basics",
    month: 2,
    week: 2,
    title: "Shopping Basics",
    focus: "speaking",
    objective: "Handle simple store interactions and payments.",
    phrases: [
      { japanese: "これをみせてください", romaji: "Kore o misete kudasai", english: "Please show me this." },
      { japanese: "カードはつかえますか", romaji: "Kaado wa tsukaemasu ka", english: "Can I use a card?" },
      { japanese: "べつべつでおねがいします", romaji: "Betsu betsu de onegaishimasu", english: "Separate bills, please." }
    ],
    customs: [
      "Place cash or cards in the tray at checkout when provided.",
      "Handle merchandise carefully and return items neatly.",
      "Say a quick thank you when leaving smaller shops."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m2w3-train-and-subway",
    month: 2,
    week: 3,
    title: "Train and Subway",
    focus: "speaking",
    objective: "Ask for stations, platforms, and transfer help.",
    phrases: [
      { japanese: "しぶやえきまでいきたいです", romaji: "Shibuya eki made ikitai desu", english: "I want to go to Shibuya Station." },
      { japanese: "なんばんホームですか", romaji: "Nanban hoomu desu ka", english: "Which platform number is it?" },
      { japanese: "のりかえはどこですか", romaji: "Norikae wa doko desu ka", english: "Where is the transfer?" }
    ],
    customs: [
      "Line up where floor markings indicate.",
      "Set phones to silent mode on trains.",
      "Avoid eating on commuter trains unless it is a long-distance route."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m2w4-counters-and-time",
    month: 2,
    week: 4,
    title: "Counters and Time",
    focus: "writing",
    objective: "Use simple counters and tell time for reservations and tickets.",
    phrases: [
      { japanese: "ひとつ ふたつ みっつ", romaji: "Hitotsu futatsu mittsu", english: "One, two, three (general counter)." },
      { japanese: "さんにんです", romaji: "San-nin desu", english: "We are three people." },
      { japanese: "しちじにおねがいします", romaji: "Shichi-ji ni onegaishimasu", english: "Please at 7 o'clock." }
    ],
    customs: [
      "Arrive on time; punctuality is strongly valued.",
      "Confirm reservation details briefly and politely.",
      "If late, contact the venue as early as possible."
    ],
    speakingModes: ["drill"],
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m3w1-hotel-checkin",
    month: 3,
    week: 1,
    title: "Hotel Check-In",
    focus: "speaking",
    objective: "Check in, confirm booking details, and ask room questions.",
    phrases: [
      { japanese: "よやくしています", romaji: "Yoyaku shiteimasu", english: "I have a reservation." },
      { japanese: "パスポートはこちらです", romaji: "Pasupooto wa kochira desu", english: "Here is my passport." },
      { japanese: "あさごはんはなんじですか", romaji: "Asagohan wa nanji desu ka", english: "What time is breakfast?" }
    ],
    customs: [
      "Prepare documents before reaching the counter.",
      "Speak calmly and avoid crowding the desk.",
      "Follow hotel quiet-hour policies strictly."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m3w2-hiragana-starter",
    month: 3,
    week: 2,
    title: "Hiragana Starter",
    focus: "writing",
    objective: "Read and write core hiragana needed for signs and menus.",
    phrases: [
      { japanese: "あ い う え お", romaji: "a i u e o", english: "Vowel row." },
      { japanese: "きっぷ", romaji: "kippu", english: "Ticket." },
      { japanese: "えき", romaji: "eki", english: "Station." },
      { japanese: "でぐち", romaji: "deguchi", english: "Exit." }
    ],
    customs: [
      "Station signs often mix kanji and kana; learning kana helps quickly.",
      "Take photos of signs only where photography is permitted.",
      "Do not block walkways while reading maps or signs."
    ],
    speakingModes: ["drill"],
    imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m3w3-directions-in-city",
    month: 3,
    week: 3,
    title: "Directions in the City",
    focus: "speaking",
    objective: "Understand and give simple walking directions.",
    phrases: [
      { japanese: "まっすぐいってください", romaji: "Massugu itte kudasai", english: "Please go straight." },
      { japanese: "ひだりにまがってください", romaji: "Hidari ni magatte kudasai", english: "Please turn left." },
      { japanese: "ちかくです", romaji: "Chikaku desu", english: "It's nearby." }
    ],
    customs: [
      "Stand to the side when checking maps.",
      "Thank people even if they only give partial help.",
      "Avoid blocking bike lanes or station exits."
    ],
    speakingModes: ["drill", "roleplay", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m3w4-emergency-basics",
    month: 3,
    week: 4,
    title: "Emergency Basics",
    focus: "speaking",
    objective: "Ask for help in urgent situations.",
    phrases: [
      { japanese: "たすけてください", romaji: "Tasukete kudasai", english: "Please help me." },
      { japanese: "びょういんはどこですか", romaji: "Byouin wa doko desu ka", english: "Where is the hospital?" },
      { japanese: "けいさつをよんでください", romaji: "Keisatsu o yonde kudasai", english: "Please call the police." }
    ],
    customs: [
      "Stay calm and concise when asking for emergency help.",
      "Use official help points and station staff first when possible.",
      "Carry your accommodation card in case communication is difficult."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m4w1-temple-etiquette",
    month: 4,
    week: 1,
    title: "Shrine & Temple Etiquette",
    focus: "culture",
    objective: "Use respectful language and follow etiquette in sacred spaces.",
    phrases: [
      { japanese: "しつれいします", romaji: "Shitsurei shimasu", english: "Excuse me." },
      { japanese: "しゃしんをとってもいいですか", romaji: "Shashin o totte mo ii desu ka", english: "May I take a photo?" },
      { japanese: "おじゃまします", romaji: "Ojama shimasu", english: "Sorry for intruding." }
    ],
    customs: [
      "Purify hands at shrine water basins before approaching.",
      "Avoid loud conversation and flash photography.",
      "Follow posted rules for pathways and prayer order."
    ],
    speakingModes: ["roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m4w2-onsen-and-public-bath",
    month: 4,
    week: 2,
    title: "Onsen & Public Bath Manners",
    focus: "culture",
    objective: "Navigate bath etiquette and ask rules politely.",
    phrases: [
      { japanese: "はいるまえにあらいます", romaji: "Hairu mae ni araimasu", english: "Wash before entering." },
      { japanese: "タオルはここですか", romaji: "Taoru wa koko desu ka", english: "Are towels here?" },
      { japanese: "ルールをおしえてください", romaji: "Ruuru o oshiete kudasai", english: "Please tell me the rules." }
    ],
    customs: [
      "Wash thoroughly before entering shared baths.",
      "Do not place towels in the bath water.",
      "Respect signage about tattoos and facility policy."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m4w3-katakana-essentials",
    month: 4,
    week: 3,
    title: "Katakana Essentials",
    focus: "writing",
    objective: "Read common loanwords used in travel contexts.",
    phrases: [
      { japanese: "ホテル", romaji: "hoteru", english: "Hotel." },
      { japanese: "レストラン", romaji: "resutoran", english: "Restaurant." },
      { japanese: "タクシー", romaji: "takushii", english: "Taxi." },
      { japanese: "コンビニ", romaji: "konbini", english: "Convenience store." }
    ],
    customs: [
      "Many signs use katakana for imported words.",
      "Read signs quickly, then move aside to avoid congestion.",
      "Use station maps before boarding to reduce confusion."
    ],
    speakingModes: ["drill"],
    imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m4w4-polite-requests-and-permission",
    month: 4,
    week: 4,
    title: "Requests and Permission",
    focus: "speaking",
    objective: "Use permission and request forms naturally in public spaces.",
    phrases: [
      { japanese: "つかってもいいですか", romaji: "Tsukatte mo ii desu ka", english: "May I use it?" },
      { japanese: "ここにすわってもいいですか", romaji: "Koko ni suwatte mo ii desu ka", english: "May I sit here?" },
      { japanese: "もうすこしゆっくりおねがいします", romaji: "Mou sukoshi yukkuri onegaishimasu", english: "A little slower, please." }
    ],
    customs: [
      "Asking permission is appreciated in shared spaces.",
      "Apologize briefly if you accidentally inconvenience others.",
      "Keep bags compact on trains and in stores."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m5w1-fast-listening",
    month: 5,
    week: 1,
    title: "Fast Listening Basics",
    focus: "speaking",
    objective: "Catch keywords in naturally paced speech.",
    phrases: [
      { japanese: "もういちどおねがいします", romaji: "Mou ichido onegaishimasu", english: "One more time, please." },
      { japanese: "キーワードだけわかりました", romaji: "Kiwaado dake wakarimashita", english: "I only understood the keywords." },
      { japanese: "ゆっくりはなしてください", romaji: "Yukkuri hanashite kudasai", english: "Please speak slowly." }
    ],
    customs: [
      "It's okay to ask for repetition politely.",
      "Nodding while listening shows engagement.",
      "Avoid interrupting abruptly; wait for a pause."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m5w2-repair-strategies",
    month: 5,
    week: 2,
    title: "Repair Strategies",
    focus: "speaking",
    objective: "Keep conversations flowing when you miss information.",
    phrases: [
      { japanese: "いみをおしえてください", romaji: "Imi o oshiete kudasai", english: "Please tell me the meaning." },
      { japanese: "かんたんにいってください", romaji: "Kantan ni itte kudasai", english: "Please say it simply." },
      { japanese: "メモにかいてください", romaji: "Memo ni kaite kudasai", english: "Please write it down." }
    ],
    customs: [
      "People often appreciate your effort when you continue politely.",
      "Keep your requests short and specific.",
      "Thank people for adapting their speech."
    ],
    speakingModes: ["drill", "roleplay", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m5w3-repair-phrases",
    month: 5,
    week: 3,
    title: "Repair Phrases",
    focus: "speaking",
    objective: "Recover quickly when you miss something in conversation.",
    phrases: [
      { japanese: "もういちどおねがいします", romaji: "Mou ichido onegaishimasu", english: "One more time, please." },
      { japanese: "ゆっくりはなしてください", romaji: "Yukkuri hanashite kudasai", english: "Please speak slowly." },
      { japanese: "いみをおしえてください", romaji: "Imi o oshiete kudasai", english: "Please tell me the meaning." }
    ],
    customs: [
      "It is polite to smile and acknowledge your learning effort.",
      "People may switch to English to help; thank them and continue gently.",
      "Short polite requests are preferred over abrupt commands."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m5w4-regional-courtesy",
    month: 5,
    week: 4,
    title: "Regional Courtesy",
    focus: "culture",
    objective: "Adapt politely to common regional communication differences.",
    phrases: [
      { japanese: "このちいきのおすすめはなんですか", romaji: "Kono chiiki no osusume wa nan desu ka", english: "What do you recommend in this area?" },
      { japanese: "ことばがちがいますね", romaji: "Kotoba ga chigaimasu ne", english: "The language is a bit different, right?" },
      { japanese: "おしえてくれてありがとうございます", romaji: "Oshiete kurete arigatou gozaimasu", english: "Thank you for teaching me." }
    ],
    customs: [
      "Regional dialects vary; don't panic if pronunciation sounds different.",
      "Locals appreciate curiosity when phrased respectfully.",
      "Observe social pace and mirror formality level."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m6w1-airport-to-city",
    month: 6,
    week: 1,
    title: "Airport to City Transfer",
    focus: "speaking",
    objective: "Complete arrival conversations from airport to transportation.",
    phrases: [
      { japanese: "バスていはどこですか", romaji: "Basu tei wa doko desu ka", english: "Where is the bus stop?" },
      { japanese: "このきっぷでだいじょうぶですか", romaji: "Kono kippu de daijoubu desu ka", english: "Is this ticket okay?" },
      { japanese: "しんじゅくまでいきたいです", romaji: "Shinjuku made ikitai desu", english: "I want to go to Shinjuku." }
    ],
    customs: [
      "Have destination details ready when asking staff.",
      "Move luggage aside when stopping to check routes.",
      "Use polite forms with airport and station personnel."
    ],
    speakingModes: ["drill", "roleplay", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m6w2-hotel-and-day-plan",
    month: 6,
    week: 2,
    title: "Hotel and Day Plan",
    focus: "speaking",
    objective: "Plan your day and coordinate with hotel staff.",
    phrases: [
      { japanese: "おすすめのばしょはありますか", romaji: "Osusume no basho wa arimasu ka", english: "Do you have recommended places?" },
      { japanese: "タクシーをよんでください", romaji: "Takushii o yonde kudasai", english: "Please call a taxi." },
      { japanese: "ちずをもらえますか", romaji: "Chizu o moraemasu ka", english: "Can I get a map?" }
    ],
    customs: [
      "Front desk staff can help, but keep questions concise.",
      "Be clear about timing to avoid misunderstandings.",
      "Thank staff before leaving for the day."
    ],
    speakingModes: ["drill", "roleplay"],
    imageUrl: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m6w3-emergency-recovery",
    month: 6,
    week: 3,
    title: "Emergency Recovery",
    focus: "speaking",
    objective: "Handle lost-item, delay, and emergency communication scenarios.",
    phrases: [
      { japanese: "さいふをなくしました", romaji: "Saifu o nakushimashita", english: "I lost my wallet." },
      { japanese: "でんしゃがおくれています", romaji: "Densha ga okurete imasu", english: "The train is delayed." },
      { japanese: "えいごをはなせますか", romaji: "Eigo o hanasemasu ka", english: "Can you speak English?" }
    ],
    customs: [
      "Go to official counters for lost-and-found first.",
      "Provide clear details step by step.",
      "Keep receipts and transport cards accessible."
    ],
    speakingModes: ["drill", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "m6w4-trip-capstone",
    month: 6,
    week: 4,
    title: "Trip Capstone Simulation",
    focus: "speaking",
    objective: "Complete a full-day tourist scenario using practical Japanese.",
    phrases: [
      { japanese: "ホテルのチェックインをおねがいします", romaji: "Hoteru no chekkuin o onegaishimasu", english: "I'd like to check in." },
      { japanese: "このでんしゃはしぶやにいきますか", romaji: "Kono densha wa Shibuya ni ikimasu ka", english: "Does this train go to Shibuya?" },
      { japanese: "たすけてください", romaji: "Tasukete kudasai", english: "Please help me." },
      { japanese: "ほんとうにありがとうございました", romaji: "Hontou ni arigatou gozaimashita", english: "Thank you very much (past)." }
    ],
    customs: [
      "Queue patiently and respect personal space in stations.",
      "Carry cash backup; some small shops may be cash-only.",
      "Dispose of trash properly; public bins can be limited."
    ],
    speakingModes: ["drill", "roleplay", "scoring"],
    imageUrl: "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?auto=format&fit=crop&w=1200&q=80",
    roleplay: [
      { id: "m6w4-r1", speaker: "guide", japanese: "こんにちは、なにをてつだいましょうか。", romaji: "Konnichiwa, nani o tetsudaimashou ka.", english: "Hello, how can I help you?" },
      {
        id: "m6w4-r2",
        speaker: "learner",
        japanese: "ホテルのチェックインをおねがいします。",
        romaji: "Hoteru no chekkuin o onegaishimasu.",
        english: "I'd like to check in.",
        choices: [
          { id: "m6w4-c1", label: "Ask about breakfast time", replyTurnId: "m6w4-r3" },
          { id: "m6w4-c2", label: "Ask for station directions", replyTurnId: "m6w4-r4" }
        ]
      },
      { id: "m6w4-r3", speaker: "guide", japanese: "あさごはんはしちじからです。", romaji: "Asagohan wa shichi-ji kara desu.", english: "Breakfast is from 7 o'clock." },
      { id: "m6w4-r4", speaker: "guide", japanese: "えきはまっすぐいってみぎです。", romaji: "Eki wa massugu itte migi desu.", english: "The station is straight ahead and right." }
    ]
  }
];
