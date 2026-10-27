/* ============================================================
   Zodiaque & Décans — traduction : anglais
   Fusionnée sur le français : une clé manquante s'affiche en français.
   ============================================================ */

I18N.en = deepMerge(I18N.fr, {
  appTitle: "Zodiac & Decans",
  labelName: "Name",
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
  timePlaceHint: "The time and place of birth are needed for the birth chart (ascendant and houses).",
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
    spread: "The three-card spread sheds light on a question: the past (what led to it), the present (what is at play) and the future (the trend if nothing changes). There is only one spread per day, for a carefully considered question: it stays on screen until the next day. Cards are drawn at random from the 22 major arcana, with no repeats. Your question stays on your device and does not appear in the exported image."
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
    years: ["A year of new beginnings: sow, dare, launch projects.", "A year of patience and cooperation: build bonds, let things ripen.", "A year of expression and creativity: communicate, show yourself, enjoy.", "A year of work and foundations: organise, consolidate, persevere.", "A year of change and freedom: move, adapt, discover.", "A year of responsibilities and the heart: home, family, commitments.", "A year of stepping back and introspection: learn, reflect, recharge.", "A year of achievement: ambitions, finances, recognition.", "A year of review and closure: finish, sort out, prepare the next cycle."]
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
    artCredit: "Card illustrations generated with Gemini (Google)."
  },
  tabs: {
    sky: "Sky right now",
    skySub: "Horoscope, sky map, tonight",
    compat: "Compatibility",
    compatSub: "With another person",
    numTarot: "Numerology & tarot",
    numTarotSub: "Numbers and arcana"
  },
  me: {
    set: "This is me",
    is: "My profile",
    saved: "This profile will open directly on each visit.",
    removed: "This profile will no longer open automatically."
  }
});
