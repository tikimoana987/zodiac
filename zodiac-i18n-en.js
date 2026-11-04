/* ============================================================
   Zodiaque & Décans — traduction : anglais
   Fusionnée sur le français : une clé manquante s'affiche en français.
   ============================================================ */

I18N.en = deepMerge(I18N.fr, {
  appTitle: "Zodiac & Decans",
  labelName: "First and last name",
  labelBirthDate: "Date of birth",
  labelBirthTime: "Time of birth",
  optional: "(optional)",
  btnReveal: "Reveal my sign",
  btnReset: "New search",
  btnExport: "Export as image",
  btnShare: "Share",
  shareCopied: "Link copied!",
  exported: "Image saved ✓",
  errorNoDate: "Please select a date.",
  errorInvalid: "Invalid date.",
  exportError: "Couldn't export the image.",
  close: "Close",
  langSelector: "Language selector",
  cuspSign: "The Sun changes sign on this day: add your time of birth for an exact result.",
  cuspDecan: "The Sun changes decan on this day: add your time of birth for an exact result.",
  searching: "Searching the sky…",
  found: "Constellation found",
  decanLabel: ["First decan", "Second decan", "Third decan"],
  sections: {
    profile: "Profile",
    strengthWeak: "Strengths & weaknesses",
    loveCareer: "Love & career",
    decan: "Decan",
    affinities: "Affinities",
    affinityHint: "Click a sign for details",
    quickInfo: "Information",
    western: "Western zodiac",
    chinese: "Chinese zodiac",
    yearElement: "Element of the year"
  },
  labels: {
    dateRange: "Usual dates",
    sunPosition: "Sun position",
    modality: "Modality",
    ruler: "Planet",
    luckyNumbers: "Numbers",
    colors: "Colors",
    stone: "Stone",
    day: "Day",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
    love: "Love",
    career: "Career",
    natalMoon: "Birth Moon",
    moonSign: "Moon sign"
  },
  signNames: {
    aries: "Aries",
    taurus: "Taurus",
    gemini: "Gemini",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Scorpio",
    sagittarius: "Sagittarius",
    capricorn: "Capricorn",
    aquarius: "Aquarius",
    pisces: "Pisces"
  },
  summaries: {
    aries: "Fire sign ruled by Mars. Energetic, courageous and pioneering, Aries charges toward goals with passion.",
    taurus: "Earth sign ruled by Venus. Loyal, patient and sensual, Taurus seeks stability and simple pleasures.",
    gemini: "Air sign ruled by Mercury. Curious, adaptable and witty, Gemini loves to learn and communicate.",
    cancer: "Water sign ruled by the Moon. Sensitive, protective and intuitive, Cancer is deeply attached to home.",
    leo: "Fire sign ruled by the Sun. Charismatic, generous and creative, Leo loves to shine and inspire.",
    virgo: "Earth sign ruled by Mercury. Analytical, meticulous and helpful, Virgo strives for perfection.",
    libra: "Air sign ruled by Venus. Diplomatic, aesthetic and sociable, Libra seeks harmony and justice.",
    scorpio: "Water sign ruled by Pluto. Intense, passionate and mysterious, Scorpio lives everything deeply.",
    sagittarius: "Fire sign ruled by Jupiter. Adventurous, optimistic and philosophical, Sagittarius craves freedom.",
    capricorn: "Earth sign ruled by Saturn. Ambitious, disciplined and responsible, Capricorn builds to last.",
    aquarius: "Air sign ruled by Uranus. Original, humanistic and independent, Aquarius thinks differently.",
    pisces: "Water sign ruled by Neptune. Dreamy, empathetic and artistic, Pisces is connected to the unseen."
  },
  strengths: {
    aries: ["Courage", "Determination", "Enthusiasm"],
    taurus: ["Loyalty", "Patience", "Reliability"],
    gemini: ["Curiosity", "Adaptability", "Wit"],
    cancer: ["Empathy", "Loyalty", "Intuition"],
    leo: ["Charisma", "Generosity", "Creativity"],
    virgo: ["Rigor", "Analysis", "Reliability"],
    libra: ["Diplomacy", "Charm", "Fairness"],
    scorpio: ["Intensity", "Loyalty", "Magnetism"],
    sagittarius: ["Optimism", "Adventure", "Honesty"],
    capricorn: ["Ambition", "Discipline", "Responsibility"],
    aquarius: ["Originality", "Humanism", "Independence"],
    pisces: ["Empathy", "Imagination", "Gentleness"]
  },
  weaknesses: {
    aries: ["Impatience", "Impulsiveness", "Stubbornness"],
    taurus: ["Stubbornness", "Possessiveness", "Rigidity"],
    gemini: ["Inconstancy", "Superficiality", "Nervousness"],
    cancer: ["Oversensitivity", "Possessiveness", "Moodiness"],
    leo: ["Pride", "Vanity", "Authoritarianism"],
    virgo: ["Perfectionism", "Anxiety", "Criticism"],
    libra: ["Indecision", "People-pleasing", "Codependency"],
    scorpio: ["Jealousy", "Possessiveness", "Resentment"],
    sagittarius: ["Recklessness", "Inconstancy", "Bluntness"],
    capricorn: ["Rigidity", "Pessimism", "Coldness"],
    aquarius: ["Detachment", "Rebellion", "Intransigence"],
    pisces: ["Naivety", "Escapism", "Oversensitivity"]
  },
  love: {
    aries: "Passionate and direct, loves conquest and hates boredom.",
    taurus: "Loyal and romantic, seeks security and tenderness.",
    gemini: "Charming and playful, needs intellectual stimulation.",
    cancer: "Tender and protective, seeks a reassuring cocoon.",
    leo: "Passionate and romantic, loves being admired and pampered.",
    virgo: "Attentive and devoted, expresses feelings with modesty.",
    libra: "Romantic and harmonious, seeks a balancing partner.",
    scorpio: "Passionate and fusion-like, loves deeply and exclusively.",
    sagittarius: "Free and enthusiastic, needs space and adventures.",
    capricorn: "Loyal and reserved, builds lasting relationships.",
    aquarius: "Atypical and free, seeks an intellectual connection.",
    pisces: "Romantic and fusion-like, dreams of absolute love."
  },
  career: {
    aries: "Excels in leadership, entrepreneurship and action.",
    taurus: "Thrives in finance, crafts and gastronomy.",
    gemini: "Shines in journalism, marketing and teaching.",
    cancer: "Thrives in care, education and real estate.",
    leo: "Shines in arts, entertainment and management.",
    virgo: "Excels in health, research and analysis.",
    libra: "Thrives in law, fashion and design.",
    scorpio: "Excels in psychology, investigation and finance.",
    sagittarius: "Shines in travel, teaching and international work.",
    capricorn: "Thrives in management, politics and architecture.",
    aquarius: "Shines in tech, science and NGOs.",
    pisces: "Thrives in art, music and spirituality."
  },
  rulers: {
    mars: "Mars",
    venus: "Venus",
    mercury: "Mercury",
    moon: "Moon",
    sun: "Sun",
    pluto: "Pluto",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune"
  },
  colors: {
    red: "Red",
    white: "White",
    green: "Green",
    brown: "Brown",
    yellow: "Yellow",
    silver: "Silver",
    gold: "Gold",
    orange: "Orange",
    pink: "Pink",
    blue: "Blue",
    black: "Black",
    purple: "Purple",
    seaGreen: "Sea green"
  },
  stones: {
    diamond: "Diamond",
    emerald: "Emerald",
    pearl: "Pearl",
    moonstone: "Moonstone",
    ruby: "Ruby",
    sapphire: "Sapphire",
    opal: "Opal",
    topaz: "Topaz",
    turquoise: "Turquoise",
    garnet: "Garnet",
    amethyst: "Amethyst",
    aquamarine: "Aquamarine"
  },
  modalities: { cardinal: "Cardinal", fixed: "Fixed", mutable: "Mutable" },
  elements: { fire: "Fire", earth: "Earth", air: "Air", water: "Water" },
  decanTraits: {
    aries: [
      [["Pioneering", "Enthusiastic", "Conquering"], "Under Mars, this decan embodies Aries in its purest form: pioneering, enthusiastic and conquering."],
      [["Charismatic", "Proud", "Generous"], "Under the Sun, this decan softens Aries: more charismatic, proud and generous."],
      [["Adventurous", "Optimistic", "Expansive"], "Under Jupiter, this decan broadens Aries' horizons: more optimistic, adventurous and expansive."]
    ],
    taurus: [
      [["Sensual", "Loyal", "Aesthetic"], "Under Venus, this decan embodies Taurus in its purest form: sensual, loyal and a lover of beauty."],
      [["Practical", "Curious", "Skilful"], "Under Mercury, this decan makes Taurus more curious, practical and skilful."],
      [["Persevering", "Ambitious", "Rigorous"], "Under Saturn, this decan makes Taurus more rigorous, persevering and ambitious."]
    ],
    gemini: [
      [["Lively", "Curious", "Communicative"], "Under Mercury, this decan embodies Gemini in its purest form: lively, curious and talkative."],
      [["Charming", "Sociable", "Aesthetic"], "Under Venus, this decan embellishes Gemini: more charming, sociable and refined."],
      [["Original", "Innovative", "Independent"], "Under Uranus, this decan radicalises Gemini: more original, innovative and independent."]
    ],
    cancer: [
      [["Emotional", "Protective", "Loyal"], "Under the Moon, this decan embodies Cancer in its purest form: emotional, protective and loyal."],
      [["Intense", "Determined", "Resilient"], "Under Pluto, this decan makes Cancer more intense, determined and resilient."],
      [["Intuitive", "Artistic", "Dreamy"], "Under Neptune, this decan makes Cancer more dreamy, intuitive and artistic."]
    ],
    leo: [
      [["Charismatic", "Generous", "Creative"], "Under the Sun, this decan embodies Leo in its purest form: radiant, generous and creative."],
      [["Bold", "Adventurous", "Expansive"], "Under Jupiter, this decan makes Leo more adventurous, bold and expansive."],
      [["Combative", "Strong-willed", "Commanding"], "Under Mars, this decan makes Leo more combative, strong-willed and commanding."]
    ],
    virgo: [
      [["Analytical", "Meticulous", "Practical"], "Under Mercury, this decan embodies Virgo in its purest form: analytical, meticulous and practical."],
      [["Persevering", "Reliable", "Structured"], "Under Saturn, this decan makes Virgo more structured, reliable and persevering."],
      [["Sensitive", "Creative", "Aesthetic"], "Under Venus, this decan softens Virgo: more sensitive, creative and refined."]
    ],
    libra: [
      [["Diplomatic", "Sociable", "Aesthetic"], "Under Venus, this decan embodies Libra in its purest form: diplomatic, sociable and refined."],
      [["Visionary", "Independent", "Original"], "Under Uranus, this decan makes Libra more original, independent and visionary."],
      [["Curious", "Intellectual", "Eloquent"], "Under Mercury, this decan makes Libra more intellectual, curious and eloquent."]
    ],
    scorpio: [
      [["Intense", "Passionate", "Magnetic"], "Under Pluto, this decan embodies Scorpio in its purest form: intense, passionate and magnetic."],
      [["Intuitive", "Mystical", "Empathetic"], "Under Neptune, this decan makes Scorpio more mystical, intuitive and empathetic."],
      [["Emotional", "Protective", "Devoted"], "Under the Moon, this decan makes Scorpio more emotional, protective and devoted."]
    ],
    sagittarius: [
      [["Adventurous", "Optimistic", "Philosophical"], "Under Jupiter, this decan embodies Sagittarius in its purest form: adventurous, optimistic and philosophical."],
      [["Passionate", "Bold", "Conquering"], "Under Mars, this decan makes Sagittarius more passionate, bold and conquering."],
      [["Radiant", "Creative", "Generous"], "Under the Sun, this decan makes Sagittarius more radiant, creative and generous."]
    ],
    capricorn: [
      [["Ambitious", "Disciplined", "Responsible"], "Under Saturn, this decan embodies Capricorn in its purest form: ambitious, disciplined and responsible."],
      [["Patient", "Sensitive", "Aesthetic"], "Under Venus, this decan softens Capricorn: more patient, sensitive and refined."],
      [["Methodical", "Analytical", "Pragmatic"], "Under Mercury, this decan makes Capricorn more methodical, analytical and pragmatic."]
    ],
    aquarius: [
      [["Original", "Humanistic", "Visionary"], "Under Uranus, this decan embodies Aquarius in its purest form: original, humanistic and visionary."],
      [["Curious", "Sociable", "Inventive"], "Under Mercury, this decan makes Aquarius more curious, sociable and inventive."],
      [["Harmonious", "Warm", "Idealistic"], "Under Venus, this decan makes Aquarius more harmonious, warm and idealistic."]
    ],
    pisces: [
      [["Dreamy", "Empathetic", "Artistic"], "Under Neptune, this decan embodies Pisces in its purest form: dreamy, empathetic and artistic."],
      [["Intuitive", "Emotional", "Compassionate"], "Under the Moon, this decan makes Pisces more intuitive, emotional and compassionate."],
      [["Intense", "Resilient", "Transformative"], "Under Pluto, this decan makes Pisces more intense, resilient and transformative."]
    ]
  },
  compat: {
    levels: {
      1: "Tense relationship — attraction is possible, but friction is frequent.",
      2: "Stimulating but challenging relationship.",
      3: "Average compatibility — possible with mutual effort.",
      4: "Highly compatible — fluid understanding with minor adjustments.",
      5: "Soulmates — natural and deep connection."
    },
    pairs: {
      fire_fire: "Two fires igniting: intense passion, risk of burning.",
      fire_air: "Air feeds the flame: intellectual complicity and shared enthusiasm.",
      fire_earth: "Earth smothers fire: requires patience and adjustment.",
      fire_water: "Water quenches fire: elemental opposition, magnetic attraction.",
      earth_earth: "Two earths: stability and reliability, risk of routine.",
      earth_air: "Earth and air: two different rhythms to reconcile.",
      earth_water: "Water fertilises earth: growth, mutual support and fertility.",
      air_air: "Two airs: mental complicity, risk of superficiality.",
      air_water: "Air moves water: the mind meets the depths.",
      water_water: "Two waters: emotional fusion, intensity and unspoken understanding."
    }
  },
  cn: {
    names: {
      rat: "Rat",
      ox: "Ox",
      tiger: "Tiger",
      rabbit: "Rabbit",
      dragon: "Dragon",
      snake: "Snake",
      horse: "Horse",
      goat: "Goat",
      monkey: "Monkey",
      rooster: "Rooster",
      dog: "Dog",
      pig: "Pig"
    },
    summaries: {
      rat: "Quick, resourceful and charming, the Rat seizes every opportunity and never runs out of ideas.",
      ox: "Patient, hardworking and dependable, the Ox moves forward steadily and builds on solid ground.",
      tiger: "Brave, passionate and independent, the Tiger rushes toward adventure and stands up for its beliefs.",
      rabbit: "Gentle, refined and diplomatic, the Rabbit seeks harmony and cultivates the art of living.",
      dragon: "Powerful, ambitious and radiant, the Dragon inspires others and thinks big in everything.",
      snake: "Wise, intuitive and elegant, the Snake thinks before acting and sees through mysteries.",
      horse: "Free, energetic and enthusiastic, the Horse loves movement and wide open spaces.",
      goat: "Gentle, artistic and compassionate, the Goat seeks peace and beauty all around.",
      monkey: "Clever, curious and full of humour, the Monkey finds a solution to everything.",
      rooster: "Frank, organised and hardworking, the Rooster loves precision and work done well.",
      dog: "Loyal, fair and protective, the Dog defends the people it loves and just causes.",
      pig: "Generous, sincere and easygoing, the Pig enjoys simple pleasures shared with others."
    },
    strengths: {
      rat: ["Ingenuity", "Charm", "Adaptability"],
      ox: ["Perseverance", "Reliability", "Honesty"],
      tiger: ["Courage", "Generosity", "Charisma"],
      rabbit: ["Gentleness", "Diplomacy", "Caution"],
      dragon: ["Energy", "Ambition", "Self-confidence"],
      snake: ["Wisdom", "Intuition", "Elegance"],
      horse: ["Enthusiasm", "Independence", "Sociability"],
      goat: ["Creativity", "Kindness", "Empathy"],
      monkey: ["Intelligence", "Humour", "Versatility"],
      rooster: ["Rigour", "Frankness", "Courage"],
      dog: ["Loyalty", "Honesty", "Sense of justice"],
      pig: ["Generosity", "Sincerity", "Tolerance"]
    },
    weaknesses: {
      rat: ["Opportunism", "Greed", "Nervousness"],
      ox: ["Stubbornness", "Rigidity", "Grudges"],
      tiger: ["Impulsiveness", "Rebelliousness", "Impatience"],
      rabbit: ["Indecision", "Conflict avoidance", "Touchiness"],
      dragon: ["Pride", "Intolerance", "Impatience"],
      snake: ["Distrust", "Jealousy", "Secrecy"],
      horse: ["Impatience", "Inconstancy", "Self-centredness"],
      goat: ["Worry", "Pessimism", "Dependence"],
      monkey: ["Mischief", "Vanity", "Restlessness"],
      rooster: ["Fault-finding", "Boastfulness", "Perfectionism"],
      dog: ["Anxiety", "Pessimism", "Distrust"],
      pig: ["Naivety", "Excess", "Laziness"]
    },
    love: {
      rat: "Attentive and sentimental, faithful to those who earn its trust.",
      ox: "Discreet and loyal, loves for the long term and protects its loved ones.",
      tiger: "Ardent and wholehearted, lives intense passions and needs freedom.",
      rabbit: "Tender and attentive, seeks a peaceful and reassuring home.",
      dragon: "Passionate and magnetic, attracts many but gives itself fully only to the one who deserves it.",
      snake: "Seductive and possessive, loves intensely and with great reserve.",
      horse: "Romantic and spirited, falls in love quickly but values its independence.",
      goat: "Tender and devoted, needs emotional security and attention.",
      monkey: "Playful and seductive, needs a partner who keeps it stimulated.",
      rooster: "Faithful and protective, shows love through concrete gestures.",
      dog: "Faithful and sincere, commits for life once trust is earned.",
      pig: "Warm and devoted, loves without calculation and with great tenderness."
    },
    career: {
      rat: "Shines in business, writing and strategy.",
      ox: "Thrives in agriculture, industry, finance and crafts.",
      tiger: "Excels in leadership, entrepreneurship and high-risk professions.",
      rabbit: "Thrives in the arts, diplomacy, consulting and interior design.",
      dragon: "Shines in management, politics, entertainment and innovation.",
      snake: "Excels in research, psychology, finance and philosophy.",
      horse: "Shines in travel, sales, communication and sport.",
      goat: "Thrives in the arts, care, design and teaching.",
      monkey: "Excels in science, engineering, trade and entertainment.",
      rooster: "Shines in administration, medicine, the military and journalism.",
      dog: "Thrives in law, social work, health and security.",
      pig: "Thrives in hospitality, entertainment, social work and real estate."
    },
    elements: { wood: "Wood", fire: "Fire", earth: "Earth", metal: "Metal", water: "Water" },
    elementTraits: {
      wood: [["Generous", "Creative", "Idealistic"], "Wood year: growth and generosity. Wood makes the animal more creative, cooperative and caring toward others."],
      fire: [["Passionate", "Dynamic", "Daring"], "Fire year: energy and passion. Fire makes the animal more dynamic, expressive and daring."],
      earth: [["Stable", "Patient", "Reliable"], "Earth year: stability and patience. Earth makes the animal more pragmatic, reliable and composed."],
      metal: [["Determined", "Rigorous", "Ambitious"], "Metal year: strength and rigour. Metal makes the animal more determined, demanding and ambitious."],
      water: [["Intuitive", "Flexible", "Diplomatic"], "Water year: intuition and flexibility. Water makes the animal more intuitive, adaptable and diplomatic."]
    },
    yin: "Yin",
    yang: "Yang",
    polarityDesc: { yin: "Yin: receptive energy, turned inward.", yang: "Yang: active energy, turned outward." },
    labels: {
      year: "Chinese year",
      yearElement: "Year element",
      polarity: "Polarity",
      fixedElement: "Fixed element",
      hourAnimal: "Hour animal"
    },
    hourNote: "Your “Chinese ascendant”, set by your time of birth.",
    noHour: "Add your time of birth to find your hour animal.",
    outOfRange: "The Chinese zodiac is available for births from 1900 to 2100.",
    relationNames: {
      harmony: "Six Harmonies (六合)",
      triad: "Triad (三合)",
      clash: "Clash (六冲)",
      harm: "Harm (六害)",
      punishment: "Punishment (相刑)",
      selfPunish: "Same sign (自刑)",
      same: "Same sign",
      neutral: "Neutral relationship"
    },
    relations: {
      harmony: "A secret alliance: these two signs complement each other naturally and support each other over time.",
      triad: "Members of the same triad: shared values and energy, a smooth and spontaneous understanding.",
      clash: "Opposite signs in the cycle: attraction is possible, but tension and clashes of character are frequent.",
      harm: "A wearing relationship: misunderstandings and small hurts pile up if left unchecked.",
      punishment: "A demanding dynamic: each one's flaws come out, and the relationship takes a lot of effort.",
      selfPunish: "Two identical natures that amplify their faults: real closeness, but a risk of excess.",
      same: "Two identical natures: instant understanding, but little complementarity.",
      neutral: "No particular bond in tradition: everything depends on the people and their efforts."
    },
    yearOf: {
      rat: "Year of the {el} Rat",
      ox: "Year of the {el} Ox",
      tiger: "Year of the {el} Tiger",
      rabbit: "Year of the {el} Rabbit",
      dragon: "Year of the {el} Dragon",
      snake: "Year of the {el} Snake",
      horse: "Year of the {el} Horse",
      goat: "Year of the {el} Goat",
      monkey: "Year of the {el} Monkey",
      rooster: "Year of the {el} Rooster",
      dog: "Year of the {el} Dog",
      pig: "Year of the {el} Pig"
    },
    yearElementOf: { wood: "Wood", fire: "Fire", earth: "Earth", metal: "Metal", water: "Water" }
  },
  horo: {
    title: "Horoscope",
    day: "Day",
    week: "Week",
    date: "Reading date",
    weekOf: "Week of {start} – {end}",
    groups: {
      major: "Long-term trends",
      moment: "Current climate",
      retro: "Retrogrades",
      positions: "Planet positions",
      moon: "Moon this week",
      natal: "On your birth chart"
    },
    aspects: { conj: "in your sign", trine: "trine", square: "square", opp: "opposite" },
    when: { from: "from {d}", until: "until {d}", range: "{a} – {b}" },
    none: "No notable transit for your sign: a calm sky, make the most of it.",
    note: "Positions calculated for noon, local time. Symbolic interpretations from the astrological tradition.",
    retrograde: "retrograde",
    phases: ["New Moon", "Waxing crescent", "First quarter", "Waxing gibbous", "Full Moon", "Waning gibbous", "Last quarter", "Waning crescent"],
    texts: {
      sun: {
        conj: "It's your season: vitality and confidence peak, the moment to put your plans forward.",
        trine: "Smooth energy and good spirits: your initiatives are well received.",
        square: "A dip in energy: pace yourself and avoid pointless power struggles.",
        opp: "Others take centre stage: favour cooperation over ego."
      },
      moon: {
        conj: "Emotions run high: listen to your intuition, it sees clearly today.",
        trine: "A calm inner climate: a good day for shared moments.",
        square: "Changeable mood: take a step back before reacting.",
        opp: "Sensitive to others' expectations: find the balance between giving and receiving."
      },
      mercury: {
        conj: "Sharp mind and easy words: ideal for negotiating, writing or persuading.",
        trine: "Smooth exchanges: a good time for paperwork, contracts and travel.",
        square: "Risk of misunderstandings: reread your messages and check the details.",
        opp: "Lively debates with those around you: listen as much as you speak."
      },
      venus: {
        conj: "Charm at its peak: encounters, reconciliations and pleasures are favoured.",
        trine: "Gentleness in relationships: a favourable climate for love and finances.",
        square: "Minor emotional frustrations: avoid impulsive spending.",
        opp: "Your relationships are at the heart of everything: make room for compromise in love."
      },
      mars: {
        conj: "Energy multiplied: go for it, but beware of impatience and clashes.",
        trine: "Well-channelled drive: your efforts pay off.",
        square: "Tension and irritability: channel your energy into sport or action.",
        opp: "Power struggles are possible: choose your battles carefully."
      },
      jupiter: {
        conj: "A period of expansion: luck smiles on you, dare to think bigger.",
        trine: "Opportunities ahead: support or good news could change everything.",
        square: "Too much optimism: don't promise more than you can deliver.",
        opp: "Others open doors for you: stay realistic in your commitments."
      },
      saturn: {
        conj: "A time of building: effort and discipline lay lasting foundations.",
        trine: "Stability and seriousness: your long-term projects make steady progress.",
        square: "Obstacles and delays: be patient, every difficulty helps you grow.",
        opp: "Responsibilities toward others: keep your commitments, they will be rewarded."
      },
      uranus: {
        conj: "Winds of change: the unexpected shakes up your habits, stay flexible.",
        trine: "New ideas and freedom: dare to be original.",
        square: "Surprises and instability: keep a plan B at hand.",
        opp: "People close to you surprise you: agree to leave your comfort zone."
      },
      neptune: {
        conj: "Imagination and intuition heightened: dream, but keep your feet on the ground.",
        trine: "Inspiration and artistic sensitivity: a climate that favours creativity.",
        square: "Haze and illusions: check the facts before committing.",
        opp: "Beware of promises that sound too good: clear up ambiguous situations."
      },
      pluto: {
        conj: "Deep transformation: a chapter closes to make way for renewal.",
        trine: "Personal power strengthened: you know how to turn situations to your advantage.",
        square: "Intense soul-searching: let go of what no longer suits you.",
        opp: "Power dynamics in your relationships: choose transparency."
      }
    },
    retroTexts: {
      mercury: "Be careful with contracts, messages and devices; ideal for reviewing and revising.",
      venus: "The romantic past resurfaces; avoid hasty decisions in love.",
      mars: "Energy turns inward; resume rather than launch.",
      jupiter: "Time to consolidate your gains rather than expand.",
      saturn: "Review your structures and deeper commitments.",
      uranus: "Changes ripen behind the scenes.",
      neptune: "Illusions fade, clarity returns.",
      pluto: "Inner work and quiet transformations."
    },
    natalExact: "exact on {d}",
    natalNone: "No notable transit on your birth chart right now."
  },
  map: {
    title: "Sky map",
    place: "Observing location",
    myPosition: "📍 My location",
    locate: "Locate me",
    locating: "Locating…",
    geoError: "Location unavailable: choose a city from the list.",
    time: "Observing time",
    visibleNow: "Visible at this time",
    noneVisible: "No planet above the horizon.",
    daylight: "It is daytime at this hour: stars are not visible.",
    meteors: "Meteor showers",
    meteorActive: "active · peak on {d} · up to {zhr} per hour",
    meteorNext: "Next peak: {name}, on {d}",
    eclipses: "Upcoming eclipses",
    visibleHere: "visible from here",
    notVisibleHere: "not visible from here",
    solarWhere: "visible from part of the globe",
    note: "Sky calculated for the local time of the chosen place (device time for “My location”), without atmospheric refraction. Stars: d3-celestial (O. Frohn, BSD licence), Hipparcos catalogue.",
    directions: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
    eclipseTypes: {
      T: "Total solar eclipse",
      A: "Annular solar eclipse",
      H: "Hybrid solar eclipse",
      P: "Partial solar eclipse",
      t: "Total lunar eclipse",
      p: "Partial lunar eclipse",
      n: "Penumbral lunar eclipse"
    },
    showers: {
      quadrantids: "Quadrantids",
      lyrids: "Lyrids",
      etaAquariids: "Eta Aquariids",
      deltaAquariids: "Southern Delta Aquariids",
      perseids: "Perseids",
      draconids: "Draconids",
      orionids: "Orionids",
      leonids: "Leonids",
      geminids: "Geminids",
      ursids: "Ursids"
    },
    constellations: {
      Ori: "Orion",
      UMa: "Big Dipper",
      UMi: "Little Dipper",
      Cas: "Cassiopeia",
      Cyg: "Swan",
      Cru: "Cross",
      Lyr: "Lyre",
      Aql: "Eagle",
      CMa: "Great Dog"
    },
    aboveHorizon: "Above the horizon",
    eclPartial: "partial from here: {pct} of the Sun hidden, from {a} to {b} (maximum at {m})",
    eclTotal: "total from here: {dur} of totality around {m} (eclipse from {a} to {b})",
    eclAnnular: "annular from here: {dur} of ring around {m} (eclipse from {a} to {b})",
    eclRises: "the Sun rises already eclipsed",
    eclSets: "the Sun sets still eclipsed",
    eclSafety: "⚠️ Never look at the Sun without eclipse glasses meeting the ISO 12312-2 standard."
  },
  pair: {
    title: "Compatibility for two",
    partnerName: "Other person's name",
    partnerDate: "Their date of birth",
    partnerTime: "Their time of birth",
    compare: "Compare",
    you: "You",
    other: "The other person",
    global: "Overall harmony",
    western: "Zodiac signs",
    chinese: "Chinese animals",
    moon: "Moons · emotional affinity",
    moonUnknown: "To compare the Moons, add the times of birth: the Moon changes sign on one of the birth days.",
    invalid: "Invalid date of birth.",
    noDate: "Enter the other person's date of birth.",
    note: "Symbolic compatibility, based on the Western and Chinese astrological traditions. Overall harmony is the average of the available axes.",
    partnerPlace: "Their place of birth",
    synTitle: "In-depth analysis (synastry)",
    synHarmony: "Points of harmony",
    synTension: "Points of tension",
    synNone: "No notable aspect.",
    synBalance: "{h} points of harmony · {t} points of tension",
    synNote: "Without birth times, the Moon and the ascendant are not compared."
  },
  theme: { light: "Light mode" },
  wheel: { title: "Zodiac wheel", today: "Today", birth: "At birth" },
  history: { title: "Recent", clear: "Clear history" },
  offline: {
    button: "Offline version",
    hint: "Download the complete tool as a single HTML file, usable without internet and easy to share.",
    opened: "The standalone version opens in a new tab: click “Offline version” there to save it.",
    soon: "coming soon"
  },
  labelBirthPlace: "Place of birth",
  placeNone: "— not specified —",
  natal: {
    title: "Birth chart",
    tabSigns: "Sign & Chinese zodiac",
    tabNatal: "Birth chart",
    tabsLabel: "Result view",
    ascendant: "Ascendant",
    midheaven: "Midheaven",
    positions: "Positions at birth",
    house: "House",
    reading: "Chart reading",
    aspects: "Aspects",
    noAspects: "No major aspect.",
    needBoth: "Add the time and place of birth to get the ascendant, the Midheaven and the houses.",
    needTime: "Add the time of birth to get the ascendant, the Midheaven and the houses.",
    needPlace: "Add the place of birth to get the ascendant, the Midheaven and the houses.",
    noonMoon: "Without the time of birth, positions are calculated for noon: the Moon may be off by a few degrees.",
    placidus: "Placidus houses.",
    equal: "Equal houses: beyond the polar circle, the Placidus method cannot be applied.",
    tzNote: "Local time at the place of birth, clock changes included.",
    mcText: "The Midheaven relates to vocation and public image.",
    legend: "The planet says what, the sign says how, the house says where.",
    domains: {
      sun: "identity, will",
      moon: "emotions, inner needs",
      mercury: "thinking, communication",
      venus: "love, tastes, harmony",
      mars: "energy, action, desire",
      jupiter: "luck, growth, confidence",
      saturn: "rules, maturity, trials",
      uranus: "originality, change (a generational mark)",
      neptune: "dreams, intuition (a generational mark)",
      pluto: "transformation, power (a generational mark)"
    },
    styles: {
      aries: "with drive, frankness and impatience",
      taurus: "with steadiness, sensuality and caution",
      gemini: "with curiosity, lightness and liveliness",
      cancer: "with sensitivity, care and attachment",
      leo: "with brilliance, generosity and pride",
      virgo: "with precision, method and reserve",
      libra: "with charm, diplomacy and a sense of balance",
      scorpio: "with intensity, passion and depth",
      sagittarius: "with enthusiasm, openness and a love of freedom",
      capricorn: "with ambition, discipline and patience",
      aquarius: "with originality, independence and a collective spirit",
      pisces: "with sensitivity, imagination and compassion"
    },
    houses: ["personality, appearance", "money, possessions", "communication, close circle", "home, family", "love, pleasures, creativity", "daily work, health", "partnership, associates", "transformation, intimacy", "travel, studies, philosophy", "career, reputation", "friends, projects", "inner life"],
    asc: {
      aries: "Aries ascendant: a direct, energetic presence. People see you as enterprising, someone who goes for it and hates waiting.",
      taurus: "Taurus ascendant: a calm, reassuring presence. People see you as steady, patient and fond of comfort.",
      gemini: "Gemini ascendant: a lively, talkative presence. People see you as curious, funny and always on the move.",
      cancer: "Cancer ascendant: a gentle, protective presence. People see you as sensitive, caring and close to your loved ones.",
      leo: "Leo ascendant: a bright, warm presence. People see you as generous, self-assured and fond of the spotlight.",
      virgo: "Virgo ascendant: a discreet, polished presence. People see you as precise, helpful and attentive to detail.",
      libra: "Libra ascendant: a pleasant, elegant presence. People see you as diplomatic, sociable and in search of harmony.",
      scorpio: "Scorpio ascendant: an intense, magnetic presence. People see you as mysterious, perceptive and determined.",
      sagittarius: "Sagittarius ascendant: an enthusiastic, open presence. People see you as optimistic, frank and eager for discovery.",
      capricorn: "Capricorn ascendant: a serious, composed presence. People see you as reliable, ambitious and self-controlled.",
      aquarius: "Aquarius ascendant: an original, independent presence. People see you as inventive, free and a little apart.",
      pisces: "Pisces ascendant: a gentle, dreamy presence. People see you as intuitive, empathetic and hard to pin down."
    },
    aspectNames: {
      conjunction: "conjunction",
      sextile: "sextile",
      square: "square",
      trine: "trine",
      opposition: "opposition"
    },
    aspectMeanings: {
      conjunction: "fusion: both energies act together",
      sextile: "opportunity: an easy collaboration to seize",
      square: "tension: a challenge that drives action",
      trine: "harmony: a natural talent",
      opposition: "polarity: a balance to find between two forces"
    },
    tabSignsSub: "The simple portrait",
    tabNatalSub: "The full portrait",
    completeFields: "Add the time and place",
    wheelHint: "Tap a planet, sign, house or aspect to read about it."
  },
  infoLabel: "More information",
  timePlaceHint: "The more complete and accurate your details, the more precise your portrait and the more faithful to tradition.",
  info: {
    sunPosition: "The Sun's exact position on the zodiac at birth, in degrees within the sign (0 to 30°). It determines the sign and the decan, and it is calculated astronomically rather than from fixed dates.",
    natalMoon: "The sign the Moon was in at birth; in astrology it stands for emotional life. The Moon changes sign about every two and a half days: without the time of birth, two signs are sometimes possible.",
    modality: "The signs fall into three modes: cardinal (initiating, at the start of each season), fixed (stabilising, at the heart of the season) and mutable (adapting, at the end of the season).",
    ruler: "The celestial body traditionally linked to the sign, said to colour its character. Modern astrology assigns Uranus, Neptune and Pluto to Aquarius, Pisces and Scorpio.",
    decan: "Each sign covers 30° of the zodiac, split into three decans of 10°. Depending on the Sun's degree, the decan adds the influence of a second body: the ruler of a sign of the same element.",
    affinities: "Traditional affinity between signs, from 1 to 5 stars, based mostly on the elements: Fire and Air stimulate each other, Earth and Water complement each other, opposite elements attract but clash.",
    cnAffinities: "Traditional affinity between Chinese animals: the six harmonies and the triads are favourable; oppositions, harms and punishments are difficult.",
    cnYear: "The Chinese year begins at the Lunar New Year, between 21 January and 20 February. If you were born before that date, you belong to the previous year's animal.",
    yearElement: "Years follow a cycle of five elements (Wood, Fire, Earth, Metal, Water), each lasting two years. Combined with the 12 animals, it forms a great 60-year cycle.",
    polarity: "Years alternate between yang and yin: even years are yang (active energy, turned outward), odd years are yin (receptive energy, turned inward).",
    fixedElement: "Each animal also has its own element, which does not change from year to year (the Rat is always linked to Water, for example). It combines with the element of the year.",
    hourAnimal: "The day is divided into 12 two-hour periods, each linked to an animal (the Rat from 11 pm to 1 am, the Ox from 1 to 3 am, and so on). The animal of your birth hour completes the portrait.",
    natalChart: "The birth chart is the complete map of the sky at the moment and place of birth: the position of each body in the signs and houses, and the angles they form with one another.",
    ascendant: "The sign rising on the eastern horizon at the moment of birth. It changes roughly every two hours, hence the need for the exact time and place. It is said to reflect how you come across to others.",
    midheaven: "The point of the zodiac highest in the sky at the moment of birth. Tradition links it to vocation, career and public image.",
    houses: "The birth sky is divided into 12 houses starting from the ascendant, each tied to an area of life (money, partnership, career…). A body's house shows where its energy is expressed. Calculation method: Placidus.",
    aspects: "Specific angles between two bodies, measured along the zodiac: conjunction (0°), sextile (60°), square (90°), trine (120°) and opposition (180°), with a margin called the orb. The smaller the orb, the stronger the aspect.",
    retrograde: "Seen from Earth, a planet sometimes seems to move backwards on the zodiac for a few weeks: an illusion caused by the planets' motion relative to one another. In astrology, this period invites you to revisit the planet's area.",
    horoscope: "The horoscope compares the current positions of the bodies with your sign: a body crossing your sign or forming an angle with it (a transit) colours the period. Slow planets set the major trends, fast ones the mood of the moment.",
    skymap: "The sky as you see it when you look up from the chosen city: the edge of the disc is the horizon, the centre the point straight above you. North is at the top and east on the left, because you are looking up.",
    compat: "The overall match is the average of the available axes: zodiac signs, Chinese animals and, if the birth times are known, Moon signs. It is a symbolic reading, not a prediction.",
    signVsConstellation: "Astrological signs are 12 equal 30° sectors counted from the March equinox: this is the tropical zodiac, used here. The constellations of the same name are groups of stars of unequal sizes. Because of the slow wobble of Earth's axis (precession), signs and constellations have drifted apart by about one sign since antiquity: the Sun can be in the sign of Aries while standing in front of the constellation Pisces.",
    night: "Full darkness begins when the Sun is more than 18° below the horizon (end of astronomical twilight) and ends at dawn. The Moon brightens the sky and hides faint stars: the best time combines full darkness with the Moon set. A planet counts as well placed when it is more than 10° high with the Sun more than 6° below the horizon.",
    solarEclipse: "Calculated for this place, to within half a minute. The percentage is the share of the Sun's surface hidden by the Moon; the times run from the first to the last contact of the two discs, limited to when the Sun is up. A total or annular eclipse is only seen as such within a narrow band; elsewhere it is partial.",
    natalTransits: "Transits compare where the planets are now with where they were at your birth: a planet in conjunction, sextile, square, trine or opposition with a point of your chart colours that area. The orb is 1° for fast planets and 1.5° for slow ones; the dates give the period of influence and the day the aspect is exact. The natal Moon is used only if the time of birth is known; the ascendant and midheaven only if both time and place are.",
    synastry: "Synastry compares two birth charts: each planet of one is set against each planet of the other. Trines and sextiles are points of harmony, squares and oppositions points of tension; a conjunction is harmonious, except with Saturn, or with Mars other than with Venus (Venus–Mars stands for attraction). Orbs: 6° for conjunctions and oppositions, 5° for squares and trines, 4° for sextiles. Links between Sun, Moon, Venus, Mars and the ascendant come first. It is a traditional, symbolic reading, not a prediction.",
    numerology: "Numerology reduces dates and names to a digit from 1 to 9 by adding their digits, except the master numbers 11, 22 and 33, which are kept as they are. Life path: day, month and year of birth reduced separately, then added. Name numbers: each letter has a value (A = 1, B = 2… I = 9, then J = 1…); all letters give the expression, vowels the soul urge, consonants the personality. In Arabic, the abjad values are used (ا = 1… غ = 1000); in Russian, the equivalent Cyrillic table.",
    personalYear: "Your personal year adds your birth day and month to the current year; it follows a 9-year cycle. The personal month adds the current month, the personal day the day of the month. Cycles are calculated for the horoscope's reading date.",
    tarot: "Birth card: add the day, month and year of birth, then reduce by adding the digits until you get 22 or less; 22 is the Fool. Card of the day: a draw specific to each person and each date, the same all day long. The Tarot de Marseille and the Waite-Smith share the 22 major arcana, but some names differ, and Strength and Justice swap numbers (XI and VIII in Marseille, VIII and XI in Waite-Smith): the same calculation can therefore give one or the other depending on the deck.",
    spread: "Choose a spread from the list. “One question, one card” sheds light on a specific question. “Past · Present · Future” explores what led to the situation, what is happening now and what might unfold. “Situation · Challenge · Advice” highlights what is at stake, what needs your attention and a way forward. “The next six months” offers a theme for reflection each month. If your spread requires a question, write it down, shuffle the deck, choose your face-down cards, lay them out and turn them over one by one. The deck is shuffled using the browser's randomness, so choosing a card is equivalent to drawing one at random. Each spread can be made once a day, except the six-month spread, which can be made once a month. Your question stays on your device and does not appear in the exported image. Tarot is a symbolic tradition: it encourages reflection, not predictions about the future.",
    fieldName: "Your first name personalises the app. Traditional numerology relies on your full birth name: all your first names and your surname, as on your birth certificate. With a first name alone, your name numbers reflect only part of your name.",
    fieldTime: "It lets the app calculate your ascendant and houses, place the Moon precisely (it changes sign every two and a half days) and find the animal of your birth hour in Chinese astrology. Without it, these elements are missing or may be wrong, and your portrait remains incomplete. It is often on the birth certificate; even an approximate time helps.",
    fieldPlace: "It gives the exact time zone of your birth, daylight saving time included, and its coordinates. Without a place, the ascendant and houses cannot be calculated. The nearest town is enough. Place not found? Paste its GPS coordinates or a map link (Google Maps, OpenStreetMap, Apple Maps): the time zone is taken from the nearest town, and you can change it.",
    privacy: "Everything you enter (name, date, time, place, history, tarot question) is stored only in your browser's memory, on this device. No data is sent to any server, and the app contains no analytics or tracking tools. Clearing this site's data in your browser deletes everything. Only the “Share” button creates a link containing your date of birth, which you send yourself.",
    reversed: "With a real deck, some cards come out upside down: tradition gives them a nuanced meaning, where the card's energy is blocked, delayed, turned inward or excessive. This option is off by default; when on, each card of the daily spread has a one-in-two chance of coming out reversed. It applies to the next spread: a spread already drawn does not change.",
    calendar: "The list shows the sky's appointments for the next 30 days, recalculated every day: new and full moons, eclipses (with their visibility from the sky map's location), starts and ends of retrograde motion, sign changes, and the exact dates of slow-planet transits (Jupiter to Pluto) on your birth chart. You can add those of the next 7 days to your calendar: Apple, Outlook and most calendars receive an .ics file; Google Calendar receives the events one by one (its app cannot open .ics files). A reminder at the end of the week invites you to come back and add the next one.",
    tarotMinors: "The 56 Minor Arcana explore everyday experiences symbolically through four suits. Batons or Wands are linked to Fire and action, while Cups reflect Water and emotions. Swords correspond to Air and thought, and Coins or Pentacles to Earth and practical life. You can include them in your daily reading by selecting the full 78-card deck.",
    square: "Pythagoras Square arranges the digits of your date of birth in a nine-cell grid. Four working numbers, calculated using Alexander Alexandrov's method, are added to the date's digits. For births from 2000 onwards, ZODIAC uses the modern '+ 19' variation adopted by most calculators today, whereas Alexandrov kept his original formula. Each cell shows how often its digit appears; an empty cell represents a quality to cultivate. This is a symbolic tradition within Numerology: it invites reflection rather than defining anyone's personality or capabilities.",
    squareLines: "Each row, column or diagonal adds together the digits from three cells. Its subtle, balanced or pronounced level compares your grid with those of people born in the same century: dates in the 1900s and 2000s do not contain the same digits, and the method calculates them differently. These levels are a convention used by ZODIAC: they do not rank anyone, and everyone has their own strengths."
  },
  placePlaceholder: "Type a city name…",
  placeNoMatch: "No city found. Try the nearest town.",
  placeUnknown: "Place of birth not recognised: choose a city from the suggestions (the nearest one will do).",
  placeClear: "Clear the place",
  placesCredit: "Cities: GeoNames (www.geonames.org), CC BY 4.0 licence.",
  rangeWarning: "Calculations are verified for births from 1900 to 2100: outside this period, planetary positions and time zones become less accurate.",
  night: {
    title: "Observing the sky tonight",
    sunset: "Sunset",
    sunrise: "Sunrise",
    dark: "Full darkness",
    moon: "Moon",
    moonLit: "{pct} lit",
    moonrise: "rises at {t}",
    moonset: "sets at {t}",
    moonAllNight: "above the horizon all night",
    moonNone: "below the horizon all night",
    best: "Best time to observe",
    bestNone: "No moonless full darkness tonight.",
    planets: "Visible planets",
    noPlanets: "No planet well placed tonight.",
    polarDay: "The Sun does not set: polar day.",
    polarNight: "The Sun does not rise: polar night.",
    noAstroNight: "No full darkness at this time of year: the Sun stays too close to the horizon.",
    note: "Local times at the chosen place, for a clear horizon. Weather and light pollution are not taken into account."
  },
  num: {
    tab: "Numerology",
    tabSub: "The numbers of your life",
    dateCard: "Date of birth",
    cyclesCard: "Personal cycles",
    nameCard: "Name",
    lifePath: "Life path",
    lifePathDesc: "Your path and your great life lessons.",
    expression: "Expression number",
    expressionDesc: "Your talents and way of acting (all the letters of the name).",
    soul: "Soul urge number",
    soulDesc: "Your deepest aspirations (vowels of the name).",
    personality: "Personality number",
    personalityDesc: "The image you project (consonants of the name).",
    personalYear: "Personal year",
    personalMonth: "Personal month",
    personalDay: "Personal day",
    master: "Master number",
    nameMissing: "Enter your name in the form (ideally your full birth name) to calculate the name numbers.",
    nameScript: "Name numbers are calculated from Latin, Arabic (abjad) or Cyrillic letters: enter your name in one of these scripts.",
    abjad: "Abjad value: {v}",
    note: "Numerology is a symbolic tradition with no scientific basis: its numbers are an invitation to reflect.",
    numbers: {
      1: {
        keywords: ["Independence", "Initiative", "Leadership"],
        text: "The 1 leads the way: starting energy, the will to act on one's own and to stand out."
      },
      2: {
        keywords: ["Cooperation", "Sensitivity", "Diplomacy"],
        text: "The 2 connects: listening, patience and a sense of partnership, in the service of harmony."
      },
      3: {
        keywords: ["Expression", "Creativity", "Joy"],
        text: "The 3 communicates: imagination, ease with others, a need to create and share."
      },
      4: {
        keywords: ["Stability", "Work", "Method"],
        text: "The 4 builds: rigour, perseverance and a taste for solid foundations."
      },
      5: {
        keywords: ["Freedom", "Change", "Curiosity"],
        text: "The 5 explores: movement, adaptability and a thirst for new experiences."
      },
      6: {
        keywords: ["Responsibility", "Love", "Harmony"],
        text: "The 6 takes care: a sense of home, of duty and of the beauty of relationships."
      },
      7: {
        keywords: ["Reflection", "Intuition", "Wisdom"],
        text: "The 7 searches: introspection, analysis and a quest for meaning beyond appearances."
      },
      8: {
        keywords: ["Ambition", "Authority", "Achievement"],
        text: "The 8 accomplishes: business sense, authority and the ability to make things real."
      },
      9: {
        keywords: ["Altruism", "Ideals", "Completion"],
        text: "The 9 gathers: generosity, openness to the world and a sense of completion."
      },
      11: {
        keywords: ["Inspiration", "Intuition", "Ideals"],
        text: "Master number 11: an amplified 2; keen intuition, inspiration and the role of a messenger."
      },
      22: {
        keywords: ["Builder", "Vision", "Realisation"],
        text: "Master number 22: an amplified 4; the ability to build great, lasting projects."
      },
      33: {
        keywords: ["Compassion", "Healing", "Devotion"],
        text: "Master number 33: an amplified 6; devotion, kindness and a sense of service."
      }
    },
    years: ["A year of new beginnings: sow, dare, launch projects.", "A year of patience and cooperation: build bonds, let things ripen.", "A year of expression and creativity: communicate, show yourself, enjoy.", "A year of work and foundations: organise, consolidate, persevere.", "A year of change and freedom: move, adapt, discover.", "A year of responsibilities and the heart: home, family, commitments.", "A year of stepping back and introspection: learn, reflect, recharge.", "A year of achievement: ambitions, finances, recognition.", "A year of review and closure: finish, sort out, prepare the next cycle."],
    square: {
      title: "Pythagoras Square",
      working: "Working numbers",
      cell: "Cell",
      empty: "No digits",
      linesTitle: "Lines",
      more: "Read the full analysis",
      less: "Collapse the analysis",
      levels: { low: "Subtle level", mid: "Balanced level", high: "Pronounced level" },
      cells: {
        c1: {
          name: "Character",
          l0: "You tend to assert yourself gently: you often listen before making a decision. This restraint is a strength, especially when you also give yourself permission to say clearly what you want when it matters to you.",
          l1: "Your character combines self-assurance with flexibility: you can take a stand without closing down the discussion. This balance helps you defend your ideas while making room for others, particularly when opinions differ.",
          l2: "Your character is assured and steady: you know what matters to you and are willing to say so. This confidence inspires trust; it works best when accompanied by listening and an appreciation of different perspectives.",
          l3: "You have a powerful sense of purpose: you like taking charge and staying the course. This strength works best with balance, leaving others room to contribute so that your drive encourages rather than overwhelms."
        },
        c2: {
          name: "Energy",
          l0: "Your energy tends to come in waves rather than flowing constantly: it helps to recognise what genuinely restores your enthusiasm. You can nurture this quality by protecting time for breaks and choosing carefully where to invest yourself.",
          l1: "You use your energy thoughtfully, directing it towards what feels meaningful to you. Choosing your priorities and respecting your own pace helps you keep moving forward over time without spreading yourself too thin.",
          l2: "You have energy to share: you bring enthusiasm to your own projects and to the people around you. That enthusiasm flows more freely when you also allow yourself to receive support and take time to rest.",
          l3: "You have plenty of energy: you readily inspire others and enjoy taking action. This strength benefits from balance, keeping some energy for yourself and allowing everyone to move at their own pace."
        },
        c3: {
          name: "Curiosity and method",
          l0: "Your curiosity follows whatever interests you in the moment rather than a fixed plan. This freedom is valuable; organising your ideas a little, perhaps by writing them down, can help you pursue what truly fascinates you.",
          l1: "You enjoy understanding how things work, in your own way and at your own pace. A little structure can turn that curiosity into lasting knowledge about the subjects that matter to you.",
          l2: "You approach learning with curiosity and organisation: you enjoy exploring, sorting and understanding things in depth. This methodical approach becomes a real resource when you share it and adapt it to the unexpected.",
          l3: "You have a strong appreciation for order and knowledge: you look for precision and logic in everything. This rigour becomes even more useful when you make room for surprises and other people's ways of doing things."
        },
        c4: {
          name: "Perseverance",
          l0: "Your perseverance develops through experience: you often move forward in successive bursts of enthusiasm. Short-term goals and small, regular habits can help you stay committed over time to what matters most to you.",
          l1: "You know how to persevere when a goal feels meaningful. This quiet determination thrives on simple reminders of why you started and on the satisfaction of recognising each step you have completed.",
          l2: "Your perseverance is steady: you can sustain your efforts over time and see your commitments through. This reliability is a valuable resource, especially when you also allow yourself breaks and adjustments along the way.",
          l3: "Your perseverance is particularly strong: you like seeing your projects through, whatever happens. This determination works best when it remains flexible enough to change direction if another path becomes more suitable for you."
        },
        c5: {
          name: "Intuition and logic",
          l0: "You tend to rely on experience and facts rather than hunches. Taking a moment to notice your impressions without judging them can bring a fresh and unexpected perspective to your decisions.",
          l1: "Your intuition is present but understated: it suggests possibilities that your reasoning then helps you explore. This partnership between feeling and logic can help you make thoughtful decisions with a sense of calm.",
          l2: "You readily connect the clues: intuition and logic work together in the way you approach things. Sharing how you move from an initial impression to an understanding can help others follow your thinking.",
          l3: "Your intuition is especially lively: you often sense things before you can explain them. This sensitivity benefits from being checked against facts and other people's views, so it remains a useful guide when making choices."
        },
        c6: {
          name: "Practical sense",
          l0: "Ideas and relationships often appeal to you more than hands-on work. A practical approach can be cultivated too: making small things with your hands may bring you a reassuring sense of grounding and simple satisfaction.",
          l1: "You know how to turn an idea into action when needed. This straightforward, effective practical sense helps you make your projects real without getting caught up in details or putting things off.",
          l2: "Practical projects inspire you: you enjoy making things and seeing the results of your efforts. Turning ideas into tangible achievements can be a valuable resource for you and those around you.",
          l3: "You have a strong practical streak: you like to see things moving forward and taking shape. This hands-on drive benefits from making room for thought and rest too, rather than carrying everything on your own shoulders."
        },
        c7: {
          name: "Opportunities",
          l0: "You tend to build things through your own efforts rather than relying on circumstances. Staying open to new encounters and happy coincidences can bring unexpected openings and fresh ideas along your way.",
          l1: "You can recognise an opportunity when it appears. Being alert to the right moments works even better with a little boldness: saying yes to what draws you can open up new possibilities.",
          l2: "Opportunities seem to cross your path often, and you know how to seize them. Being receptive to new openings is a resource that bears fruit when you choose those that truly suit you.",
          l3: "You have a keen eye for opportunities: you know how to make the most of circumstances and encounters. This instinct works best with focus, choosing the paths that truly matter rather than following every possibility."
        },
        c8: {
          name: "Sense of duty",
          l0: "You tend to commit yourself where your heart leads rather than out of obligation. This freedom is valuable, especially when paired with commitments you choose and honour because they mean something to you.",
          l1: "You take your responsibilities seriously without letting them define you. This balanced sense of duty makes you dependable while preserving your freedom to choose which commitments to make.",
          l2: "You have a strong sense of responsibility: others can rely on you, and you look out for them. This dependability is precious; it becomes easier to carry when you also accept help from those around you.",
          l3: "Your sense of duty is particularly strong: you want to do things well and avoid disappointing anyone. This high standard benefits from balance, giving yourself permission to say no and make time for yourself."
        },
        c9: {
          name: "Reflection",
          l0: "You enjoy learning through experience and action rather than theory. Taking time to reflect on what you go through, perhaps by writing about it, can deepen what you take away from those experiences.",
          l1: "You enjoy thinking things through and understanding subjects that interest you in your own way. Nurturing this curiosity through reading or conversation can open up new horizons and different points of view.",
          l2: "Learning and exploring ideas matter to you: you enjoy remembering what you discover and making connections. This openness is a valuable resource, especially when shared through lively, curious conversations.",
          l3: "Your enjoyment of reflection is particularly strong: you like analysing, exploring and understanding things in detail. This inner richness benefits from leaving room for intuition and action too, rather than going round in circles."
        }
      },
      lines: {
        r147: {
          name: "Determination",
          low: "Your goals tend to take shape along the way rather than being set out in advance. This flexibility helps you embrace what comes; choosing one or two simple directions can help you move forward with confidence.",
          mid: "You can set goals and work towards them while remaining willing to adjust them. This balance between determination and flexibility helps you move steadily towards what matters.",
          high: "Your determination is strong: you know what you want and stick with it. This drive benefits from staying open to detours, which sometimes take you further than expected."
        },
        r258: {
          name: "Close relationships",
          low: "Your independence matters to you, and you choose your relationships carefully. The connections you value can flourish through small, regular gestures of care, expressed in your own way.",
          mid: "You make room for both other people and yourself. This sense of connection, without dependence, helps you build warm and dependable relationships that last.",
          high: "Relationships matter deeply to you: you enjoy caring for those close to you and sharing with them. This generosity is a strength, especially when you also keep some time for yourself."
        },
        r369: {
          name: "Habits and stability",
          low: "You enjoy novelty and change more than routine. This freedom helps you adapt; a few simple points of reference can offer a reassuring foundation when everything around you is shifting.",
          mid: "You can find a balance between reassuring habits and the desire for change. This flexibility helps you adapt to circumstances without losing sight of what anchors you.",
          high: "Familiar routines and consistency mean a great deal to you: you like building on firm foundations. This stability is a strength, particularly when you occasionally welcome a little spontaneity."
        },
        c123: {
          name: "Self-esteem",
          low: "You tend to see yourself modestly. Recognising your achievements, however small, and accepting compliments can nurture a quiet confidence in your own worth.",
          mid: "You tend to see yourself in a fair and balanced light. This grounded confidence helps you recognise your strengths while remaining aware of what you would still like to develop.",
          high: "You have firm confidence in yourself and what you can do. This assurance is a resource, especially when paired with listening and curiosity about how others see things."
        },
        c456: {
          name: "Material life",
          low: "Material comfort is not your main motivation: other things inspire you more. Bringing a little organisation to daily life can nevertheless free your attention for what really matters.",
          mid: "You have a balanced relationship with money and everyday practicalities without letting them take over. This practical outlook helps you create a settled foundation for your projects.",
          high: "Material life matters to you: you enjoy building a solid and comfortable foundation. This practical outlook is a strength, especially when it also leaves room for life's simple pleasures."
        },
        c789: {
          name: "Creativity",
          low: "Your creativity often finds quiet expression in the small details of daily life. Making some space for it, however modest, can bring to light interests you have not yet discovered.",
          mid: "You feel drawn to create and express what inspires you, at your own pace. Cultivating that pleasure without pressure to produce results can enrich other parts of your life too.",
          high: "Your desire to create is very present: ideas, projects and personal expression inspire you. This richness is best brought to life step by step, by choosing the projects closest to your heart."
        },
        d159: {
          name: "Spiritual drive",
          low: "Your attention is drawn mainly to practical matters and the present moment. Occasionally making space for quiet, perspective or contemplation can bring fresh insight into everyday life.",
          mid: "Finding meaning in your experiences matters to you without drawing you away from practical reality. This balance between inner life and tangible involvement can bring a calming sense of perspective to everyday life.",
          high: "The search for meaning holds an important place in your life: you enjoy exploring why things are as they are. This depth becomes even richer when it stays connected to simple acts and to other people."
        },
        d357: {
          name: "Temperament",
          low: "Your temperament tends to be calm and considered. This serenity reassures those around you; letting your enthusiasm show from time to time can bring extra warmth to your relationships.",
          mid: "Your temperament combines enthusiasm and composure: you can feel excited without being carried away. This balance makes your presence both lively and reassuring to others.",
          high: "Your temperament is passionate: you experience things with intensity and enthusiasm. This spark is a valuable quality that benefits from balance, making room for your energy and that of others."
        }
      }
    }
  },
  tarot: {
    tab: "Tarot",
    tabSub: "The major arcana",
    deck: "Deck",
    birthCard: "Birth card",
    birthCardDesc: "Your arcanum, calculated from your date of birth.",
    dayCard: "Card of the day",
    dayCardDesc: "Draw for {d}: the same card all day long.",
    note: "Tarot is a symbolic tradition: its cards invite reflection, they do not predict the future.",
    decks: { marseille: "Tarot de Marseille", ws: "Waite-Smith" },
    cards: {
      fool: {
        name: "The Fool",
        keywords: ["Freedom", "Spontaneity", "New start"],
        text: "Momentum and trust in the unknown: an adventure begins, to be lived lightly without losing your footing."
      },
      magician: {
        name: "The Magician",
        keywords: ["Initiative", "Skill", "Beginning"],
        text: "All the tools are on the table: time to dare and put your talents into play."
      },
      priestess: {
        name: "The High Priestess",
        keywords: ["Intuition", "Hidden knowledge", "Silence"],
        text: "Inner wisdom: listen to your intuition, observe, let things ripen before acting."
      },
      empress: {
        name: "The Empress",
        keywords: ["Creativity", "Abundance", "Expression"],
        text: "Fertile ideas and projects: beauty, generosity and expression bear fruit."
      },
      emperor: {
        name: "The Emperor",
        keywords: ["Authority", "Structure", "Stability"],
        text: "The power that organises and protects: set a framework, take responsibility, build solidly."
      },
      hierophant: {
        name: "The Hierophant",
        keywords: ["Transmission", "Tradition", "Guidance"],
        text: "Wisdom passed on: a guide, a teaching or shared values light the way."
      },
      lovers: {
        name: "The Lovers",
        keywords: ["Choice", "Union", "Heart"],
        text: "A decision of the heart: choose by your values, commit to a relationship or a path."
      },
      chariot: {
        name: "The Chariot",
        keywords: ["Willpower", "Victory", "Movement"],
        text: "Mastery on the move: advance with determination, hold your course and overcome obstacles."
      },
      strength: {
        name: "Strength",
        keywords: ["Courage", "Self-control", "Gentleness"],
        text: "Quiet strength: tame your impulses with patience and gentleness rather than force."
      },
      hermit: {
        name: "The Hermit",
        keywords: ["Introspection", "Wisdom", "Seeking"],
        text: "The lantern that lights one step at a time: step back, seek your truth, go at your own pace."
      },
      wheel: {
        name: "Wheel of Fortune",
        keywords: ["Cycle", "Change", "Destiny"],
        text: "Everything turns: a page turns, circumstances change; adapt to the movement of life."
      },
      justice: {
        name: "Justice",
        keywords: ["Balance", "Truth", "Responsibility"],
        text: "Time to weigh and decide: clarity, honesty and fair consequences of one's actions."
      },
      hangedman: {
        name: "The Hanged Man",
        keywords: ["Pause", "Letting go", "New perspective"],
        text: "Suspend action to see things differently: waiting becomes fruitful when you let go."
      },
      death: {
        name: "Death",
        keywords: ["Transformation", "Ending", "Renewal"],
        text: "A necessary ending opens the way to renewal: clear the ground so life can transform."
      },
      temperance: {
        name: "Temperance",
        keywords: ["Harmony", "Patience", "Calm"],
        text: "The art of the right blend: moderation, peaceful exchanges and a return to balance."
      },
      devil: {
        name: "The Devil",
        keywords: ["Desire", "Attachments", "Passion"],
        text: "The forces of desire and of ties that bind: recognise your attachments to free yourself or own them."
      },
      tower: {
        name: "The Tower",
        keywords: ["Upheaval", "Revelation", "Liberation"],
        text: "Lightning brings down what was not solid: a salutary shock that frees and reveals."
      },
      star: {
        name: "The Star",
        keywords: ["Hope", "Inspiration", "Serenity"],
        text: "Light after the ordeal: renewed confidence, inspiration and faith in the future."
      },
      moon: {
        name: "The Moon",
        keywords: ["Dreams", "Doubts", "Imagination"],
        text: "The realm of intuition and illusion: move through your fears, listen to your dreams without getting lost."
      },
      sun: {
        name: "The Sun",
        keywords: ["Joy", "Success", "Clarity"],
        text: "Radiance and vitality: success, warm bonds and happiness shared in full light."
      },
      judgement: {
        name: "Judgement",
        keywords: ["Awakening", "Calling", "Rebirth"],
        text: "A call to wake up: taking stock, forgiveness and a fresh start, like a rebirth."
      },
      world: {
        name: "The World",
        keywords: ["Fulfilment", "Wholeness", "Unity"],
        text: "The cycle ends beautifully: complete success, harmony and openness to the world."
      }
    },
    marseilleNames: {
      fool: "The Fool",
      magician: "The Juggler",
      priestess: "The Popess",
      hierophant: "The Pope",
      lovers: "The Lover",
      wheel: "The Wheel of Fortune",
      death: "The Nameless Arcanum",
      tower: "The House of God"
    },
    spreadTitle: "Three-card spread",
    spreadIntro: "Take a moment to put into words the question that matters to you today, then draw the cards.",
    spreadDraw: "Draw the cards",
    spreadAgain: "New question",
    spreadPast: "Past",
    spreadPresent: "Present",
    spreadFuture: "Future",
    spreadNote: "One spread per day, kept until tomorrow. The future shows a trend, not a fate.",
    spreadQuestionLabel: "Your question",
    spreadQuestionHint: "For example: “What do I need to understand about this situation?”",
    spreadFlip: "Tap each card to turn it over.",
    spreadFlipAria: "Turn over the card: {pos}",
    spreadTomorrow: "Your spread for today is done. Next spread: tomorrow.",
    artCredit: "Card illustrations generated with Gemini (Google) and ChatGPT (OpenAI).",
    reversedToggle: "Reversed cards",
    reversedBadge: "Reversed",
    reversed: {
      fool: {
        keywords: ["Recklessness", "Hesitation", "Scattering"],
        text: "Momentum meets recklessness or the fear of leaping: take time to look where you step."
      },
      magician: {
        keywords: ["Self-doubt", "Manipulation", "Untapped talents"],
        text: "The tools are there but misused: doubt, scattering or the temptation to deceive; return to a sound intention."
      },
      priestess: {
        keywords: ["Secrets", "Ignored intuition", "Withdrawal"],
        text: "Intuition is stifled or the truth stays hidden: listen to what you refuse to hear within."
      },
      empress: {
        keywords: ["Creative block", "Dependence", "Excess"],
        text: "Creation stalls or you forget yourself by giving too much: rebalance caring for others and for yourself."
      },
      emperor: {
        keywords: ["Rigidity", "Domination", "Disorder"],
        text: "The framework becomes a cage or slips away: look for the right firmness, neither too much nor too little."
      },
      hierophant: {
        keywords: ["Questioning", "Dogmatism", "Freedom"],
        text: "Established rules weigh heavy or are questioned: find your own path without rejecting all inherited wisdom."
      },
      lovers: {
        keywords: ["Disagreement", "Indecision", "Imbalance"],
        text: "A hard choice or a rocky relationship: align heart and values before committing."
      },
      chariot: {
        keywords: ["Lost direction", "Scattering", "Obstacles"],
        text: "Forces pull in opposite directions: take back the reins before moving on."
      },
      strength: {
        keywords: ["Self-doubt", "Impatience", "Anger"],
        text: "Confidence wavers or impulsiveness wins: reconnect with gentleness and patience towards yourself."
      },
      hermit: {
        keywords: ["Isolation", "Excessive withdrawal", "Refusing advice"],
        text: "Solitude turns into isolation: it is time to share your light and accept that of others."
      },
      wheel: {
        keywords: ["Setbacks", "Resisting change", "Repetition"],
        text: "The cycle seems stuck or contrary: go along with change rather than fighting the current."
      },
      justice: {
        keywords: ["Bias", "Imbalance", "Denial"],
        text: "A skewed decision or an imbalance: look honestly at your share of responsibility."
      },
      hangedman: {
        keywords: ["Stagnation", "Needless sacrifice", "Resistance"],
        text: "Waiting turns into standstill: truly let go, or finally decide to move."
      },
      death: {
        keywords: ["Resistance", "Fear of letting go", "Slowness"],
        text: "An ending is delayed by the fear of letting go: renewal waits for you to turn the page."
      },
      temperance: {
        keywords: ["Excess", "Imbalance", "Haste"],
        text: "The middle way is lost: excess, haste or tension; come back to moderation."
      },
      devil: {
        keywords: ["Release", "Awareness", "Detachment"],
        text: "The ties loosen: a moment of awareness and a chance to free yourself from what held you back."
      },
      tower: {
        keywords: ["Inner crisis", "Delayed change", "Fear of upheaval"],
        text: "The upheaval is delayed or lived inwardly: better to go along with change than to endure it."
      },
      star: {
        keywords: ["Discouragement", "Doubt", "Veiled hope"],
        text: "Hope fades for a while: the light is still there, make room for it."
      },
      moon: {
        keywords: ["Clarification", "Fears fading", "Truth revealed"],
        text: "Illusions slowly dissolve: what was confused begins to clear."
      },
      sun: {
        keywords: ["Veiled joy", "Delayed success", "Overconfidence"],
        text: "The light is veiled or slow to come: success is still possible with a little patience and clarity."
      },
      judgement: {
        keywords: ["Hesitation", "Harsh judgement", "Ignored calling"],
        text: "You hesitate to answer the call or judge yourself too harshly: forgive yourself to move forward."
      },
      world: {
        keywords: ["Unfinished business", "Delay", "Last step"],
        text: "The cycle struggles to close: one last thing remains to be completed before fulfilment."
      }
    },
    minors: {
      fullDeck: "Full deck (78 cards)",
      badge: "Minor Arcana",
      suits: {
        wands: { marseille: "Batons", ws: "Wands", element: "Fire" },
        cups: { marseille: "Cups", ws: "Cups", element: "Water" },
        swords: { marseille: "Swords", ws: "Swords", element: "Air" },
        pentacles: { marseille: "Coins", ws: "Pentacles", element: "Earth" }
      },
      cards: {
        wands_ace: {
          name: { marseille: "Ace of Batons", ws: "Ace of Wands" },
          keywords: ["Momentum", "Inspiration", "Initiative"],
          text: "A creative spark catches light: welcome this impulse and give your wish to act a simple shape."
        },
        wands_2: {
          name: { marseille: "Two of Batons", ws: "Two of Wands" },
          keywords: ["Vision", "Planning", "Choice"],
          text: "Two paths appear on the horizon: choose a direction without losing sight of your aspirations."
        },
        wands_3: {
          name: { marseille: "Three of Batons", ws: "Three of Wands" },
          keywords: ["Expansion", "Perspective", "Shared momentum"],
          text: "Your gaze reaches beyond the first steps: welcome exchanges that could broaden your project."
        },
        wands_4: {
          name: { marseille: "Four of Batons", ws: "Four of Wands" },
          keywords: ["Celebration", "Grounding", "Harmony"],
          text: "A welcoming space takes shape: enjoy the milestones reached and the joy of coming together."
        },
        wands_5: {
          name: { marseille: "Five of Batons", ws: "Five of Wands" },
          keywords: ["Clashing views", "Healthy rivalry", "Diversity"],
          text: "Different ambitions meet: turn rivalry into lively dialogue rather than a battle of egos."
        },
        wands_6: {
          name: { marseille: "Six of Batons", ws: "Six of Wands" },
          keywords: ["Recognition", "Confidence", "Achievement"],
          text: "Your efforts find an echo: welcome encouragement without making others' approval your compass."
        },
        wands_7: {
          name: { marseille: "Seven of Batons", ws: "Seven of Wands" },
          keywords: ["Courage", "Standing firm", "Perseverance"],
          text: "Your position calls for resolve: set your boundaries calmly without shutting other people out."
        },
        wands_8: {
          name: { marseille: "Eight of Batons", ws: "Eight of Wands" },
          keywords: ["Movement", "Flow", "Messages"],
          text: "Events quicken like arrows in flight: seize the momentum while keeping your direction clear."
        },
        wands_9: {
          name: { marseille: "Nine of Batons", ws: "Nine of Wands" },
          keywords: ["Endurance", "Vigilance", "Resilience"],
          text: "One final stretch tests your resolve: protect your strength without letting mistrust take over."
        },
        wands_10: {
          name: { marseille: "Ten of Batons", ws: "Ten of Wands" },
          keywords: ["Responsibilities", "Burden", "Commitment"],
          text: "The batons grow heavy: share the load and distinguish your commitments from those of others."
        },
        wands_page: {
          name: { marseille: "Page of Batons", ws: "Page of Wands" },
          keywords: ["Curiosity", "Discovery", "Boldness"],
          text: "A curious messenger explores a new idea: dare to experiment before trying to master everything."
        },
        wands_knight: {
          name: { marseille: "Knight of Batons", ws: "Knight of Wands" },
          keywords: ["Enthusiasm", "Movement", "Boldness"],
          text: "A knight follows an ardent impulse: move toward what inspires you without ignoring the consequences."
        },
        wands_queen: {
          name: { marseille: "Queen of Batons", ws: "Queen of Wands" },
          keywords: ["Radiance", "Confidence", "Creativity"],
          text: "A warm presence inspires others: trust your creativity and share the energy that moves you."
        },
        wands_king: {
          name: { marseille: "King of Batons", ws: "King of Wands" },
          keywords: ["Leadership", "Vision", "Initiative"],
          text: "A clear will sets the course: guide your projects boldly while leaving room for other voices."
        },
        cups_ace: {
          name: { marseille: "Ace of Cups", ws: "Ace of Cups" },
          keywords: ["Open heart", "Sensitivity", "New feelings"],
          text: "A cup overflows with fresh water: welcome emerging emotions without trying to hold them back."
        },
        cups_2: {
          name: { marseille: "Two of Cups", ws: "Two of Cups" },
          keywords: ["Connection", "Mutual care", "Agreement"],
          text: "Two cups answer one another: nurture a bond in which each person feels heard and valued."
        },
        cups_3: {
          name: { marseille: "Three of Cups", ws: "Three of Cups" },
          keywords: ["Friendship", "Sharing", "Shared joy"],
          text: "Cups rise together: celebrate the strength of a circle where joy grows when it is shared."
        },
        cups_4: {
          name: { marseille: "Four of Cups", ws: "Four of Cups" },
          keywords: ["Introspection", "Weariness", "Perspective"],
          text: "A cup remains within sight: take time to notice what still truly moves you."
        },
        cups_5: {
          name: { marseille: "Five of Cups", ws: "Five of Cups" },
          keywords: ["Disappointment", "Regret", "Acceptance"],
          text: "What has been lost draws your gaze: make room for sadness without forgetting the bonds that remain."
        },
        cups_6: {
          name: { marseille: "Six of Cups", ws: "Six of Cups" },
          keywords: ["Memories", "Tenderness", "Generosity"],
          text: "A tender memory returns like a familiar scent: draw strength from the past without living in it."
        },
        cups_7: {
          name: { marseille: "Seven of Cups", ws: "Seven of Cups" },
          keywords: ["Possibilities", "Imagination", "Discernment"],
          text: "Seven cups reflect countless desires: distinguish your deepest wishes from enticing illusions."
        },
        cups_8: {
          name: { marseille: "Eight of Cups", ws: "Eight of Cups" },
          keywords: ["Detachment", "Search for meaning", "Chosen departure"],
          text: "Something feels missing despite abundance: listen to the longing for meaning that calls for change."
        },
        cups_9: {
          name: { marseille: "Nine of Cups", ws: "Nine of Cups" },
          keywords: ["Contentment", "Gratitude", "Pleasure"],
          text: "The cups in a row suggest quiet joy: savor what you have without mistaking comfort for fulfillment."
        },
        cups_10: {
          name: { marseille: "Ten of Cups", ws: "Ten of Cups" },
          keywords: ["Harmony", "Belonging", "Shared happiness"],
          text: "A circle of trust evokes shared joy: nurture bonds that leave each person free to be themselves."
        },
        cups_page: {
          name: { marseille: "Page of Cups", ws: "Page of Cups" },
          keywords: ["Intuition", "Sensitivity", "Wonder"],
          text: "A surprise appears inside the cup: pay attention to your emotions and unexpected ideas."
        },
        cups_knight: {
          name: { marseille: "Knight of Cups", ws: "Knight of Cups" },
          keywords: ["Romance", "Heartfelt impulse", "Invitation"],
          text: "A knight rides forward with a cup: follow your feelings while respecting the other person's reality."
        },
        cups_queen: {
          name: { marseille: "Queen of Cups", ws: "Queen of Cups" },
          keywords: ["Empathy", "Intuition", "Receptiveness"],
          text: "A precious cup invites attentive listening: welcome emotions without carrying everyone else's burdens."
        },
        cups_king: {
          name: { marseille: "King of Cups", ws: "King of Cups" },
          keywords: ["Emotional maturity", "Balance", "Kindness"],
          text: "The throne stays steady beside the waves: let feelings flow without allowing them to steer everything."
        },
        swords_ace: {
          name: { marseille: "Ace of Swords", ws: "Ace of Swords" },
          keywords: ["Clarity", "Insight", "Truth"],
          text: "A blade cuts through the mist of ideas: name the facts precisely before taking a position."
        },
        swords_2: {
          name: { marseille: "Two of Swords", ws: "Two of Swords" },
          keywords: ["Dilemma", "Pause", "Balance"],
          text: "Two crossed swords hold back a decision: hear both sides without prolonging the wait forever."
        },
        swords_3: {
          name: { marseille: "Three of Swords", ws: "Three of Swords" },
          keywords: ["Sorrow", "Disillusionment", "Painful truth"],
          text: "A painful truth passes through the heart: make room for sorrow without forgetting your inner resources."
        },
        swords_4: {
          name: { marseille: "Four of Swords", ws: "Four of Swords" },
          keywords: ["Rest", "Reflection", "Recovery"],
          text: "Silence surrounds the swords and invites a pause: let your thoughts settle before starting again."
        },
        swords_5: {
          name: { marseille: "Five of Swords", ws: "Five of Swords" },
          keywords: ["Disagreement", "Power struggle", "Awareness"],
          text: "A victory may leave a bitter taste: consider the cost of confrontation before insisting on being right."
        },
        swords_6: {
          name: { marseille: "Six of Swords", ws: "Six of Swords" },
          keywords: ["Transition", "Moving away", "Relief"],
          text: "Crossing from one inner shore to another takes time: welcome what helps you move forward."
        },
        swords_7: {
          name: { marseille: "Seven of Swords", ws: "Seven of Swords" },
          keywords: ["Strategy", "Discretion", "Independence"],
          text: "Taking a detour may seem easier than speaking plainly: choose a thoughtful approach without losing honesty."
        },
        swords_8: {
          name: { marseille: "Eight of Swords", ws: "Eight of Swords" },
          keywords: ["Perceived limits", "Self-doubt", "Perspective"],
          text: "Thoughts draw invisible barriers around you: question the limits that appear impossible to cross."
        },
        swords_9: {
          name: { marseille: "Nine of Swords", ws: "Nine of Swords" },
          keywords: ["Worry", "Rumination", "Vulnerability"],
          text: "Worries awaken old scenarios: share your concerns instead of letting them grow unchecked."
        },
        swords_10: {
          name: { marseille: "Ten of Swords", ws: "Ten of Swords" },
          keywords: ["Cycle ending", "Exhaustion", "Letting go"],
          text: "A cycle reaches the end of its strength: acknowledge what cannot continue in quite the same way."
        },
        swords_page: {
          name: { marseille: "Page of Swords", ws: "Page of Swords" },
          keywords: ["Intellectual curiosity", "Observation", "Candor"],
          text: "A young figure watches the shifting winds of thought: ask questions and sharpen your critical thinking."
        },
        swords_knight: {
          name: { marseille: "Knight of Swords", ws: "Knight of Swords" },
          keywords: ["Decision", "Candor", "Determination"],
          text: "A knight cuts through the wind: put your clarity in the service of measured action."
        },
        swords_queen: {
          name: { marseille: "Queen of Swords", ws: "Queen of Swords" },
          keywords: ["Discernment", "Independence", "Clear boundaries"],
          text: "A queen holds her sword steadily: speak your truth with firmness and openness."
        },
        swords_king: {
          name: { marseille: "King of Swords", ws: "King of Swords" },
          keywords: ["Sound judgment", "Reason", "Responsibility"],
          text: "A king weighs the facts before deciding: base your choices on reflection rather than mood."
        },
        pentacles_ace: {
          name: { marseille: "Ace of Coins", ws: "Ace of Pentacles" },
          keywords: ["Tangible opportunity", "Resources", "Grounding"],
          text: "A coin rests in an open hand: give a promising idea its first concrete step."
        },
        pentacles_2: {
          name: { marseille: "Two of Coins", ws: "Two of Pentacles" },
          keywords: ["Flexibility", "Balance", "Adaptation"],
          text: "Two coins trace a continuous motion: adjust your pace to the competing demands of daily life."
        },
        pentacles_3: {
          name: { marseille: "Three of Coins", ws: "Three of Pentacles" },
          keywords: ["Cooperation", "Skill", "Building"],
          text: "A shared work takes shape through many hands: value the skills each person brings to the project."
        },
        pentacles_4: {
          name: { marseille: "Four of Coins", ws: "Four of Pentacles" },
          keywords: ["Security", "Preservation", "Control"],
          text: "Four coins are carefully guarded: protect what you have built without forgetting the freedom to share."
        },
        pentacles_5: {
          name: { marseille: "Five of Coins", ws: "Five of Pentacles" },
          keywords: ["Feeling deprived", "Isolation", "Mutual support"],
          text: "The feeling of lacking enough can be isolating: remember that asking for support remains possible."
        },
        pentacles_6: {
          name: { marseille: "Six of Coins", ws: "Six of Pentacles" },
          keywords: ["Generosity", "Exchange", "Fairness"],
          text: "One hand gives while another receives: seek a form of sharing that respects everyone's needs."
        },
        pentacles_7: {
          name: { marseille: "Seven of Coins", ws: "Seven of Pentacles" },
          keywords: ["Patience", "Assessment", "Growth"],
          text: "A harvest is still growing: look at how far you have come before judging the results."
        },
        pentacles_8: {
          name: { marseille: "Eight of Coins", ws: "Eight of Pentacles" },
          keywords: ["Dedication", "Learning", "Mastery"],
          text: "Each carefully shaped coin refines the craft: nurture your skills with patience and curiosity."
        },
        pentacles_9: {
          name: { marseille: "Nine of Coins", ws: "Nine of Pentacles" },
          keywords: ["Independence", "Measured abundance", "Serenity"],
          text: "Patient efforts bring a sense of ease: appreciate your independence and life's simple pleasures."
        },
        pentacles_10: {
          name: { marseille: "Ten of Coins", ws: "Ten of Pentacles" },
          keywords: ["Legacy", "Stability", "Continuity"],
          text: "A legacy passes between generations: care for what is handed down beyond material possessions."
        },
        pentacles_page: {
          name: { marseille: "Page of Coins", ws: "Page of Pentacles" },
          keywords: ["Study", "Practicality", "Potential"],
          text: "A young figure considers a coin: explore a new skill through time, attention and method."
        },
        pentacles_knight: {
          name: { marseille: "Knight of Coins", ws: "Knight of Pentacles" },
          keywords: ["Reliability", "Consistency", "Method"],
          text: "A knight moves at the earth's steady pace: trust small, regular and well-considered steps."
        },
        pentacles_queen: {
          name: { marseille: "Queen of Coins", ws: "Queen of Pentacles" },
          keywords: ["Everyday care", "Generosity", "Practical sense"],
          text: "A queen tends a fertile garden: look after your resources and the place where you live."
        },
        pentacles_king: {
          name: { marseille: "King of Coins", ws: "King of Pentacles" },
          keywords: ["Stability", "Responsibility", "Wise stewardship"],
          text: "A king surveys lasting work: use your resources thoughtfully and in a spirit of sharing."
        }
      },
      reversed: {
        wands_ace: {
          keywords: ["Blocked impulse", "Hesitation", "Scattered energy"],
          text: "The flame struggles to catch: take time to see what truly deserves your energy."
        },
        wands_2: {
          keywords: ["Narrow outlook", "Waiting", "Fear of choosing"],
          text: "The horizon seems less open: hesitation invites you to clarify your priorities before setting off."
        },
        wands_3: {
          keywords: ["Delay", "Impatience", "Clouded outlook"],
          text: "Results are slow to emerge: adjust your expectations rather than forcing progress."
        },
        wands_4: {
          keywords: ["Delayed celebration", "Unsteady support", "Disagreement"],
          text: "The celebration feels incomplete: tend to your connections or foundations before marking the occasion."
        },
        wands_5: {
          keywords: ["Hidden tension", "Fruitless rivalry", "Avoidance"],
          text: "Debate stalls or falls silent: name disagreements without letting competition drain the group."
        },
        wands_6: {
          keywords: ["Approval seeking", "Self-doubt", "Quiet success"],
          text: "Recognition feels absent or too important: measure your path by your values, not by applause."
        },
        wands_7: {
          keywords: ["Exhaustion", "Overdefensiveness", "Withdrawal"],
          text: "Constant vigilance grows tiring: choose what deserves your energy and release the rest."
        },
        wands_8: {
          keywords: ["Setbacks", "Rushing", "Confusion"],
          text: "Signals cross and the pace becomes muddled: slowing down may help you act more wisely."
        },
        wands_9: {
          keywords: ["Built-up fatigue", "Rigid defenses", "Letting go"],
          text: "Keeping guard becomes a burden: acknowledging fatigue may restore a healthier perspective."
        },
        wands_10: {
          keywords: ["Overload", "Delegation", "Release"],
          text: "Obligations feel overwhelming: lighten what you can instead of carrying every expectation alone."
        },
        wands_page: {
          keywords: ["Scattered enthusiasm", "Delayed start", "Inconsistency"],
          text: "The urge to explore scatters in every direction: give your curiosity something concrete to grow within."
        },
        wands_knight: {
          keywords: ["Impulsiveness", "Instability", "Frustration"],
          text: "Enthusiasm turns into haste: make room for a pause before momentum carries you away."
        },
        wands_queen: {
          keywords: ["Comparison", "Restrained energy", "Sensitivity"],
          text: "Your inner light wavers under others' gaze: nurture confidence without comparing yourself to anyone."
        },
        wands_king: {
          keywords: ["Rigid authority", "Impatience", "Control"],
          text: "The urge to lead becomes overbearing: listening to others can strengthen genuine authority."
        },
        cups_ace: {
          keywords: ["Held-back feelings", "Withdrawal", "Vulnerability"],
          text: "The cup seems closed: give your feelings time to find a space where they can be expressed."
        },
        cups_2: {
          keywords: ["Imbalance", "Fragile dialogue", "Distance"],
          text: "The reflection between two cups blurs: reopen dialogue while respecting both people's needs."
        },
        cups_3: {
          keywords: ["Distraction", "Isolation", "Excess"],
          text: "The group feels out of tune: seek sincere exchanges rather than celebration at any cost."
        },
        cups_4: {
          keywords: ["Withdrawal", "Dissatisfaction", "Inner awakening"],
          text: "Withdrawal lingers or begins to loosen: seeing an offer differently may awaken fresh desire."
        },
        cups_5: {
          keywords: ["Relief", "Fresh outlook", "Reconciliation"],
          text: "Your gaze slowly turns away from loss: space opens for what might still be repaired."
        },
        cups_6: {
          keywords: ["Heavy nostalgia", "Idealization", "Neglected present"],
          text: "Memories take up too much space: keep their warmth while welcoming what the present offers."
        },
        cups_7: {
          keywords: ["Illusion", "Indecision", "Excessive dreaming"],
          text: "Attractive images cloud your choice: returning to simple needs can bring you back to reality."
        },
        cups_8: {
          keywords: ["Attachment", "Delayed departure", "Hesitation"],
          text: "A step hangs suspended on the path: explore what holds you back before turning the page."
        },
        cups_9: {
          keywords: ["Dissatisfaction", "Excess", "Shallow joy"],
          text: "The smile behind the cups seems forced: seek what truly nourishes you beyond appearances."
        },
        cups_10: {
          keywords: ["Idealized hopes", "Family tensions", "Bonds to mend"],
          text: "The picture of perfect happiness begins to crack: choose genuine bonds over a show of harmony."
        },
        cups_page: {
          keywords: ["Shyness", "Daydreaming", "Held-back feelings"],
          text: "The heart's message remains half spoken: expressing a simple feeling may ease hesitation."
        },
        cups_knight: {
          keywords: ["Idealization", "Vague promises", "Disappointment"],
          text: "The dream takes up all the space: gently compare your hopes with actions and facts."
        },
        cups_queen: {
          keywords: ["Oversensitivity", "Blurred boundaries", "Emotional withdrawal"],
          text: "Sensitivity overflows or shuts down: set gentle boundaries to preserve your openness."
        },
        cups_king: {
          keywords: ["Hidden emotions", "Distance", "Emotional control"],
          text: "Calm becomes too rigid a mask: naming a feeling can bring closeness without losing your footing."
        },
        swords_ace: {
          keywords: ["Confusion", "Hasty judgment", "Hidden truth"],
          text: "Thought loses its thread or grows too sharp: check your assumptions before reaching a conclusion."
        },
        swords_2: {
          keywords: ["Indecision", "Avoidance", "Inner tension"],
          text: "The postponed choice occupies every thought: acknowledging your fears may make the decision clearer."
        },
        swords_3: {
          keywords: ["Inner healing", "Relief", "Easing sorrow"],
          text: "The clouds begin to part: welcome gradual relief without pushing yourself to recover too quickly."
        },
        swords_4: {
          keywords: ["Restlessness", "Delayed rest", "Overload"],
          text: "The mind refuses to settle: moments of quiet may restore room for reflection."
        },
        swords_5: {
          keywords: ["Lingering conflict", "Resentment", "De-escalation"],
          text: "The need to be right wears down the bond: stepping aside may open a calmer way forward."
        },
        swords_6: {
          keywords: ["Resistance to change", "Attachment", "Slow passage"],
          text: "The crossing seems suspended: proceed at your own pace without demanding immediate certainty."
        },
        swords_7: {
          keywords: ["Evasion", "Mistrust", "Renewed honesty"],
          text: "Unspoken truths complicate the road: greater openness may ease what remains unresolved."
        },
        swords_8: {
          keywords: ["Breaking free", "Renewed confidence", "Wider outlook"],
          text: "The bonds begin to loosen: another view of the situation may restore room to move."
        },
        swords_9: {
          keywords: ["Gradual relief", "Perspective", "Lighter thoughts"],
          text: "The weight of your thoughts begins to ease: separate facts from the scenarios that trouble you."
        },
        swords_10: {
          keywords: ["Rebuilding", "Relief", "Fresh outlook"],
          text: "After the heaviest stretch, a little light appears: move forward without demanding too much of yourself."
        },
        swords_page: {
          keywords: ["Suspicion", "Hasty words", "Nervousness"],
          text: "Curiosity turns to suspicion: listen fully before responding or drawing conclusions."
        },
        swords_knight: {
          keywords: ["Haste", "Rigidity", "Harsh words"],
          text: "Thought races ahead of listening: slow down before certainty closes the conversation."
        },
        swords_queen: {
          keywords: ["Coldness", "Excessive demands", "Distance"],
          text: "Insight becomes too cutting: keep some gentleness in the boundaries you set."
        },
        swords_king: {
          keywords: ["Dogmatism", "Mental control", "Rigid judgment"],
          text: "Principles harden into certainties: welcome other perspectives to bring nuance to your decision."
        },
        pentacles_ace: {
          keywords: ["Delayed opportunity", "Inertia", "Unclear priorities"],
          text: "The possibility remains only a plan: check your resources and begin with one realistic step."
        },
        pentacles_2: {
          keywords: ["Distraction", "Imbalance", "Overload"],
          text: "Tasks jostle like coins in motion: simplify your priorities to regain some breathing room."
        },
        pentacles_3: {
          keywords: ["Poor coordination", "Isolated effort", "Misunderstanding"],
          text: "The group effort lacks harmony: clarify roles and make room for everyone's contribution."
        },
        pentacles_4: {
          keywords: ["Clinging", "Fear of scarcity", "Letting go"],
          text: "Security becomes a suit of armor: loosen your hold on what you are trying to keep."
        },
        pentacles_5: {
          keywords: ["Renewed support", "Openness", "Rebuilding"],
          text: "A once-hidden door seems within reach: accepting help can make the road feel less heavy."
        },
        pentacles_6: {
          keywords: ["Imbalance", "Symbolic debt", "Conditional giving"],
          text: "The exchange seems weighed down by expectations: redefine what can be given or received freely."
        },
        pentacles_7: {
          keywords: ["Impatience", "Doubted efforts", "Reassessment"],
          text: "The fruit is slow to ripen: reconsider your method without dismissing the work already done."
        },
        pentacles_8: {
          keywords: ["Perfectionism", "Routine", "Low motivation"],
          text: "The repeated gesture loses its meaning: rediscover the joy of learning without demanding perfection."
        },
        pentacles_9: {
          keywords: ["Chosen solitude", "Comfort dependence", "Dissatisfaction"],
          text: "Comfort no longer brings enough joy: reflect on the space you leave for connection."
        },
        pentacles_10: {
          keywords: ["Burdensome legacy", "Family expectations", "Fragile stability"],
          text: "Inherited habits become restrictive: choose what you wish to preserve and what to transform."
        },
        pentacles_page: {
          keywords: ["Lack of method", "Distraction", "Delayed project"],
          text: "The urge to learn becomes scattered: a modest goal may give your efforts fresh direction."
        },
        pentacles_knight: {
          keywords: ["Inertia", "Rigidity", "Repetitive work"],
          text: "Caution slows every step: bring back some flexibility without losing your thoroughness."
        },
        pentacles_queen: {
          keywords: ["Overcommitment", "Self-neglect", "Material worries"],
          text: "Caring for everything becomes heavy: give your own needs some attention too."
        },
        pentacles_king: {
          keywords: ["Possessiveness", "Rigidity", "Material attachment"],
          text: "The search for security closes in on itself: leave room for change and generosity."
        }
      }
    },
    spreads: {
      title: "Choose a spread",
      one: {
        name: "One question, one card",
        desc: "A single card to shed light on a specific question.",
        pos: "Tarot's answer",
        hint: "The card that sheds light on your question"
      },
      three: {
        name: "Past · Present · Future",
        desc: "What led to this situation, what is happening now and what might unfold.",
        hints: {
          past: "What led to this situation",
          present: "What is happening now",
          future: "What might unfold if nothing changes"
        }
      },
      sca: {
        name: "Situation · Challenge · Advice",
        desc: "What is at stake, what needs your attention and a way forward.",
        pos: { situation: "Situation", challenge: "Challenge", advice: "Advice" },
        hints: { situation: "What is at stake", challenge: "What needs your attention", advice: "A way forward" }
      },
      six: {
        name: "The next six months",
        desc: "One card per month, offering a thread for reflection over the coming half-year.",
        hint: "The month's symbolic atmosphere",
        note: "Each card offers a theme to reflect on for the month, not a forecast.",
        done: "Your six-month spread is complete. Your next spread will be next month."
      }
    },
    gesture: {
      shuffle: "Shuffle the deck",
      shuffling: "Shuffling the deck…",
      pick: "Choose your cards",
      cardAria: "Face-down card",
      restart: "Start again",
      place: "Lay out the cards",
      allChosen: "All cards selected"
    },
    synth: {
      title: "What this means for your question",
      titleSix: "What the next six months suggest",
      tendency: { up: "Favourable momentum", open: "Opportunity to seize", work: "Challenge to work through" },
      one: {
        up: ["“{card}” gives the reading a favourable tone: progress seems possible if you nurture this momentum.", "With “{card}”, the reading suggests fertile ground. You can build on what is already working."],
        open: ["“{card}” hints at an opportunity, provided you consider what needs your attention before deciding.", "The message of “{card}” is of a door left ajar: your judgement may make the difference."],
        work: ["“{card}” highlights resistance, not a dead end. By facing it clearly, you can regain room to act.", "With “{card}”, the reading invites you to adjust your approach rather than force matters. One considered step may already help."]
      },
      three: {
        up: ["In the Future position, “{card}” suggests an encouraging outcome if the current momentum continues. Your choices can support it.", "“{card}”, in the Future position, suggests that positive change may be possible. Your decisions can still shape what unfolds."],
        open: ["In the Future position, “{card}” points to a possibility that may take shape if you take time to weigh your options.", "“{card}” opens a path ahead without determining the outcome. A thoughtful decision could help it take shape."],
        work: ["In the Future position, “{card}” signals a possible difficulty if nothing changes. You can still influence this trend.", "“{card}” suggests that what comes next may call for adjustments. Identifying what holds things back gives you a starting point."]
      },
      sca: {
        up: ["In the Advice position, “{card}” invites you to support what is already moving forward. Confidence and care may strengthen this momentum.", "“{card}”, in the Advice position, highlights your resources. Using them wisely could encourage constructive change."],
        open: ["In the Advice position, “{card}” points to a path worth exploring. Paying attention to detail may help you make the most of it.", "As Advice, “{card}” suggests not closing off possibilities too quickly. Listening to your doubts may clarify your choice."],
        work: ["As Advice, “{card}” suggests approaching the sensitive issue methodically. Even a small adjustment may change the situation.", "“{card}”, in the Advice position, invites you to acknowledge resistance without losing heart. A different angle may help you move forward."]
      },
      six: {
        up: ["Together, the six cards suggest a broadly supportive atmosphere. Opportunities for progress seem present; meet them with discernment.", "This half-year appears to bring favourable support. By cultivating consistency and confidence, you may make the most of it."],
        open: ["The six-month reading reveals possibilities, but also choices to make. Noticing promising signs may help you move forward.", "This half-year seems to offer several openings to explore. Patience and flexibility may matter as much as momentum."],
        work: ["Across the six months, some resistance calls for attention. Nothing is set in stone: adjusting your pace may ease the way.", "The overall tone invites you to face a few challenges with clarity. Each stage may help you understand your needs better."]
      },
      sixBest: "The most promising months, according to the reading: {months}. Welcome them with confidence and discernment.",
      sixCare: "The months calling for the most attention: {months}. Approach them flexibly and without losing heart.",
      close: ["This reading offers you avenues to explore; you decide which resonate with your situation.", "Take these cards as a source of insight, then trust your judgement as you move forward.", "The reading invites reflection; the decisions that shape what comes next remain yours."]
    }
  },
  tabs: {
    sky: "Sky right now",
    skySub: "Horoscope, sky map, tonight",
    compat: "Compatibility",
    compatSub: "With another person",
    numTarot: "Numerology",
    numTarotSub: "Numbers and portrait",
    tarot: "Tarot",
    tarotSub: "Spreads and arcana"
  },
  me: {
    set: "This is me",
    is: "My profile",
    saved: "This profile will open directly on each visit.",
    removed: "This profile will no longer open automatically."
  },
  privacyLine: "Your details stay on your device: nothing is sent or stored online.",
  privacyTitle: "Privacy",
  version: { label: "Version {v}", available: "A new version of the app is available.", reload: "Reload" },
  placeCoordsHint: "Place not found? Paste its GPS coordinates (for example 48.8566, 2.3522) or a map link.",
  placeNear: "near {city}",
  placeTz: "Time zone",
  placeTzFrom: "from {city}, {km} km away",
  cal: {
    title: "Sky calendar",
    intro: "The sky's appointments for the next 30 days, updated every day. Add this week's to your calendar.",
    period: "Period",
    months: "{n} months",
    catMoon: "New and full moons",
    catEclipses: "Eclipses",
    catRetro: "Retrogrades",
    catIngress: "Sign changes",
    catTransits: "Transits on your chart",
    button: "Download the calendar",
    count: "{n} events",
    note: "The file is created on your device: nothing is sent online, except the events you add to Google Calendar yourself.",
    direct: "direct",
    calName: "Sky calendar — {name}",
    thisWeek: "This week",
    nextWeek: "Next week",
    later: "Later",
    none: "No sky appointment in the next 30 days.",
    addWeek: "Add the next 7 days to:",
    toolGoogle: "Google Calendar",
    toolApple: "Apple",
    toolOutlook: "Outlook",
    toolOther: "Other (.ics)",
    hintApple: "Open the downloaded file: your iPhone, iPad or Mac offers to add all the events.",
    hintOutlook: "Open the downloaded file: Outlook adds the events to your calendar.",
    hintOther: "Open the downloaded file, or import it into your calendar (Samsung Calendar, Thunderbird…).",
    hintGoogle: "Tap ＋ to add an event to Google Calendar: it is then sent to Google, at your request.",
    googleImport: "On a computer, import the whole week at once",
    addOne: "Add to Google Calendar",
    weekEmpty: "No sky appointment in the next 7 days: come back next week!",
    reminder: "📅 Sky calendar: add the following week",
    reminderDesc: "Open Zodiac & Decans to add the sky's appointments for the following week."
  },
  print: {
    button: "Print or save as PDF",
    hint: "In the print window, choose “Save as PDF” to get a file.",
    title: "Birth chart — {name}",
    footer: "Sheet created with Zodiac & Decans on {date}. Positions calculated from ephemerides; symbolic interpretations from the astrological tradition."
  },
  oracle: {
    open: "Yes / No Oracle",
    title: "Yes / No Oracle",
    hint: "Think of your question, then tap the centre",
    ask: "Ask the oracle",
    again: "Tap the centre for another question",
    note: "Just for fun, not a prediction",
    answers: { yes: "Yes", no: "No", maybe: "Maybe", soon: "Soon" }
  },
  support: {
    open: "Support the project",
    line: "Enjoying the app?",
    intro: "The app is free and respects your privacy. If you like it, you can support its development.",
    share: "Share the app",
    note: "Donations are made on the platform you choose, in a new tab. The app passes nothing on."
  },
  dst: {
    gap: "On that day in {place}, according to official historical time records, clocks moved forward by {shift}: {time} did not occur. ZODIAC used {equiv}, the same instant expressed in the new local time. Check the time on the birth certificate.",
    overlap: "On that day in {place}, according to official historical time records, clocks moved back by {shift}: {time} occurred twice. Please specify which occurrence; otherwise, ZODIAC uses the first.",
    before: "Before the clock change",
    after: "After the clock change",
    choice: "Time of birth",
    old: "Before 1970, these historical records are less reliable in some countries."
  }
});
