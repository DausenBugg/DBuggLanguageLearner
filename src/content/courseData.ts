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
    imageUrl: "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?auto=format&fit=crop&w=1200&q=80"
  }
];
