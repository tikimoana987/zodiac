/* ============================================================
   Zodiaque & Décans — traduction : allemand
   Fusionnée sur le français : une clé manquante s'affiche en français.
   ============================================================ */

I18N.de = deepMerge(I18N.fr, {
  appTitle: "Zodiak & Dekane",
  labelName: "Vor- und Nachname",
  labelBirthDate: "Geburtsdatum",
  labelBirthTime: "Geburtszeit",
  optional: "(optional)",
  btnReveal: "Mein Zeichen enthüllen",
  btnReset: "Neue Suche",
  btnExport: "Als Bild exportieren",
  btnShare: "Teilen",
  shareCopied: "Link kopiert!",
  exported: "Bild gespeichert ✓",
  errorNoDate: "Bitte wähle ein Datum.",
  errorInvalid: "Ungültiges Datum.",
  exportError: "Bild konnte nicht exportiert werden.",
  close: "Schließen",
  langSelector: "Sprachauswahl",
  cuspSign: "Die Sonne wechselt an diesem Tag das Zeichen: Gib deine Geburtszeit an, um ein genaues Ergebnis zu erhalten.",
  cuspDecan: "Die Sonne wechselt an diesem Tag den Dekan: Gib deine Geburtszeit an, um ein genaues Ergebnis zu erhalten.",
  searching: "Suche im Himmel…",
  found: "Konstellation gefunden",
  decanLabel: ["Erster Dekan", "Zweiter Dekan", "Dritter Dekan"],
  sections: {
    profile: "Profil",
    strengthWeak: "Stärken & Schwächen",
    loveCareer: "Liebe & Karriere",
    decan: "Dekan",
    affinities: "Affinitäten",
    affinityHint: "Klicke ein Zeichen für Details",
    quickInfo: "Informationen",
    western: "Westlicher Tierkreis",
    chinese: "Chinesischer Tierkreis",
    yearElement: "Element des Jahres"
  },
  labels: {
    dateRange: "Übliche Daten",
    sunPosition: "Sonnenstand",
    modality: "Modalität",
    ruler: "Planet",
    luckyNumbers: "Zahlen",
    colors: "Farben",
    stone: "Stein",
    day: "Tag",
    strengths: "Stärken",
    weaknesses: "Schwächen",
    love: "Liebe",
    career: "Karriere",
    natalMoon: "Geburtsmond",
    moonSign: "Mondzeichen"
  },
  signNames: {
    aries: "Widder",
    taurus: "Stier",
    gemini: "Zwillinge",
    cancer: "Krebs",
    leo: "Löwe",
    virgo: "Jungfrau",
    libra: "Waage",
    scorpio: "Skorpion",
    sagittarius: "Schütze",
    capricorn: "Steinbock",
    aquarius: "Wassermann",
    pisces: "Fische"
  },
  summaries: {
    aries: "Feuerzeichen, regiert von Mars. Energisch, mutig und bahnbrechend stürmt der Widder leidenschaftlich auf seine Ziele zu.",
    taurus: "Erdzeichen, regiert von Venus. Loyal, geduldig und sinnlich sucht der Stier Stabilität und einfache Freuden.",
    gemini: "Luftzeichen, regiert von Merkur. Neugierig, anpassungsfähig und geistreich lieben die Zwillinge das Lernen und Kommunizieren.",
    cancer: "Wasserzeichen, regiert vom Mond. Sensibel, beschützend und intuitiv ist der Krebs tief mit seinen Wurzeln verbunden.",
    leo: "Feuerzeichen, regiert von der Sonne. Charismatisch, großzügig und kreativ liebt es der Löwe, zu glänzen und zu inspirieren.",
    virgo: "Erdzeichen, regiert von Merkur. Analytisch, sorgfältig und hilfsbereit strebt die Jungfrau nach Perfektion.",
    libra: "Luftzeichen, regiert von Venus. Diplomatisch, ästhetisch und gesellig sucht die Waage Harmonie und Gerechtigkeit.",
    scorpio: "Wasserzeichen, regiert von Pluto. Intensiv, leidenschaftlich und geheimnisvoll erlebt der Skorpion alles mit voller Hingabe.",
    sagittarius: "Feuerzeichen, regiert von Jupiter. Abenteuerlustig, optimistisch und philosophisch dürstet der Schütze nach Freiheit.",
    capricorn: "Erdzeichen, regiert von Saturn. Ehrgeizig, diszipliniert und verantwortungsbewusst baut der Steinbock auf Dauer.",
    aquarius: "Luftzeichen, regiert von Uranus. Originell, humanistisch und unabhängig denkt der Wassermann anders.",
    pisces: "Wasserzeichen, regiert von Neptun. Verträumt, einfühlsam und künstlerisch sind die Fische mit dem Unsichtbaren verbunden."
  },
  strengths: {
    aries: ["Mut", "Entschlossenheit", "Begeisterung"],
    taurus: ["Loyalität", "Geduld", "Zuverlässigkeit"],
    gemini: ["Neugier", "Anpassungsfähigkeit", "Geist"],
    cancer: ["Empathie", "Loyalität", "Intuition"],
    leo: ["Charisma", "Großzügigkeit", "Kreativität"],
    virgo: ["Genauigkeit", "Analyse", "Zuverlässigkeit"],
    libra: ["Diplomatie", "Charme", "Fairness"],
    scorpio: ["Intensität", "Loyalität", "Magnetismus"],
    sagittarius: ["Optimismus", "Abenteuer", "Ehrlichkeit"],
    capricorn: ["Ehrgeiz", "Disziplin", "Verantwortung"],
    aquarius: ["Originalität", "Humanismus", "Unabhängigkeit"],
    pisces: ["Empathie", "Vorstellungskraft", "Sanftheit"]
  },
  weaknesses: {
    aries: ["Ungeduld", "Impulsivität", "Sturheit"],
    taurus: ["Sturheit", "Besitzergreifung", "Starrheit"],
    gemini: ["Unbeständigkeit", "Oberflächlichkeit", "Nervosität"],
    cancer: ["Überempfindlichkeit", "Besitzergreifung", "Launenhaftigkeit"],
    leo: ["Stolz", "Eitelkeit", "Autoritarismus"],
    virgo: ["Perfektionismus", "Angst", "Kritik"],
    libra: ["Unentschlossenheit", "Gefälligkeit", "Abhängigkeit"],
    scorpio: ["Eifersucht", "Besitzergreifung", "Groll"],
    sagittarius: ["Rücksichtslosigkeit", "Unbeständigkeit", "Direktheit"],
    capricorn: ["Starrheit", "Pessimismus", "Kälte"],
    aquarius: ["Distanziertheit", "Rebellion", "Kompromisslosigkeit"],
    pisces: ["Naivität", "Realitätsflucht", "Überempfindlichkeit"]
  },
  love: {
    aries: "Leidenschaftlich und direkt, liebt Eroberungen, hasst Langeweile.",
    taurus: "Loyal und romantisch, sucht Sicherheit und Zärtlichkeit.",
    gemini: "Charmant und verspielt, braucht intellektuelle Anregung.",
    cancer: "Zärtlich und beschützend, sucht ein beruhigendes Nest.",
    leo: "Leidenschaftlich und romantisch, liebt Bewunderung und Verwöhnung.",
    virgo: "Aufmerksam und hingebungsvoll, drückt Gefühle zurückhaltend aus.",
    libra: "Romantisch und harmonisch, sucht einen ausgleichenden Partner.",
    scorpio: "Leidenschaftlich und verschmelzend, liebt tief und exklusiv.",
    sagittarius: "Frei und enthusiastisch, braucht Raum und Abenteuer.",
    capricorn: "Loyal und zurückhaltend, baut dauerhafte Beziehungen auf.",
    aquarius: "Ungewöhnlich und frei, sucht eine intellektuelle Verbindung.",
    pisces: "Romantisch und verschmelzend, träumen von absoluter Liebe."
  },
  career: {
    aries: "Glänzt in Führung, Unternehmertum und Aktion.",
    taurus: "Gedeiht in Finanzen, Handwerk und Gastronomie.",
    gemini: "Glänzt in Journalismus, Marketing und Lehre.",
    cancer: "Gedeiht in Pflege, Bildung und Immobilien.",
    leo: "Glänzt in Kunst, Show und Management.",
    virgo: "Glänzt in Gesundheit, Forschung und Analyse.",
    libra: "Gedeiht in Recht, Mode und Design.",
    scorpio: "Glänzt in Psychologie, Investigation und Finanzen.",
    sagittarius: "Glänzt in Reisen, Lehre und internationaler Arbeit.",
    capricorn: "Gedeiht in Management, Politik und Architektur.",
    aquarius: "Glänzt in Technologie, Wissenschaft und NGOs.",
    pisces: "Gedeiht in Kunst, Musik und Spiritualität."
  },
  rulers: {
    mars: "Mars",
    venus: "Venus",
    mercury: "Merkur",
    moon: "Mond",
    sun: "Sonne",
    pluto: "Pluto",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptun"
  },
  colors: {
    red: "Rot",
    white: "Weiß",
    green: "Grün",
    brown: "Braun",
    yellow: "Gelb",
    silver: "Silber",
    gold: "Gold",
    orange: "Orange",
    pink: "Rosa",
    blue: "Blau",
    black: "Schwarz",
    purple: "Lila",
    seaGreen: "Meergrün"
  },
  stones: {
    diamond: "Diamant",
    emerald: "Smaragd",
    pearl: "Perle",
    moonstone: "Mondstein",
    ruby: "Rubin",
    sapphire: "Saphir",
    opal: "Opal",
    topaz: "Topas",
    turquoise: "Türkis",
    garnet: "Granat",
    amethyst: "Amethyst",
    aquamarine: "Aquamarin"
  },
  modalities: { cardinal: "Kardinal", fixed: "Fix", mutable: "Veränderlich" },
  elements: { fire: "Feuer", earth: "Erde", air: "Luft", water: "Wasser" },
  decanTraits: {
    aries: [
      [["Bahnbrechend", "Begeistert", "Eroberungslustig"], "Unter Mars verkörpert dieser Dekan den Widder in Reinform: bahnbrechend, begeistert und eroberungslustig."],
      [["Charismatisch", "Stolz", "Großzügig"], "Unter der Sonne wird der Widder sanfter: charismatischer, stolzer und großzügiger."],
      [["Abenteuerlustig", "Optimistisch", "Expansiv"], "Unter Jupiter weitet sich der Horizont des Widders: optimistischer, abenteuerlustiger und expansiver."]
    ],
    taurus: [
      [["Sinnlich", "Loyal", "Ästhetisch"], "Unter Venus verkörpert dieser Dekan den Stier in Reinform: sinnlich, loyal und schönheitsliebend."],
      [["Praktisch", "Neugierig", "Geschickt"], "Unter Merkur wird der Stier neugieriger, praktischer und geschickter."],
      [["Beharrlich", "Ehrgeizig", "Gründlich"], "Unter Saturn wird der Stier gründlicher, beharrlicher und ehrgeiziger."]
    ],
    gemini: [
      [["Lebhaft", "Neugierig", "Gesprächig"], "Unter Merkur verkörpert dieser Dekan die Zwillinge in Reinform: lebhaft, neugierig und gesprächig."],
      [["Charmant", "Gesellig", "Ästhetisch"], "Unter Venus werden die Zwillinge charmanter, geselliger und ästhetischer."],
      [["Originell", "Innovativ", "Unabhängig"], "Unter Uranus werden die Zwillinge origineller, innovativer und unabhängiger."]
    ],
    cancer: [
      [["Emotional", "Beschützend", "Loyal"], "Unter dem Mond verkörpert dieser Dekan den Krebs in Reinform: emotional, beschützend und loyal."],
      [["Intensiv", "Entschlossen", "Belastbar"], "Unter Pluto wird der Krebs intensiver, entschlossener und belastbarer."],
      [["Intuitiv", "Künstlerisch", "Verträumt"], "Unter Neptun wird der Krebs verträumter, intuitiver und künstlerischer."]
    ],
    leo: [
      [["Charismatisch", "Großzügig", "Kreativ"], "Unter der Sonne verkörpert dieser Dekan den Löwen in Reinform: strahlend, großzügig und kreativ."],
      [["Kühn", "Abenteuerlustig", "Expansiv"], "Unter Jupiter wird der Löwe abenteuerlustiger, kühner und expansiver."],
      [["Kämpferisch", "Willensstark", "Führungsstark"], "Unter Mars wird der Löwe kämpferischer, willensstärker und führungsstärker."]
    ],
    virgo: [
      [["Analytisch", "Sorgfältig", "Praktisch"], "Unter Merkur verkörpert dieser Dekan die Jungfrau in Reinform: analytisch, sorgfältig und praktisch."],
      [["Beharrlich", "Zuverlässig", "Strukturiert"], "Unter Saturn wird die Jungfrau strukturierter, zuverlässiger und beharrlicher."],
      [["Sensibel", "Kreativ", "Ästhetisch"], "Unter Venus wird die Jungfrau sanfter: sensibler, kreativer und ästhetischer."]
    ],
    libra: [
      [["Diplomatisch", "Gesellig", "Ästhetisch"], "Unter Venus verkörpert dieser Dekan die Waage in Reinform: diplomatisch, gesellig und ästhetisch."],
      [["Visionär", "Unabhängig", "Originell"], "Unter Uranus wird die Waage origineller, unabhängiger und visionärer."],
      [["Neugierig", "Intellektuell", "Redegewandt"], "Unter Merkur wird die Waage intellektueller, neugieriger und redegewandter."]
    ],
    scorpio: [
      [["Intensiv", "Leidenschaftlich", "Magnetisch"], "Unter Pluto verkörpert dieser Dekan den Skorpion in Reinform: intensiv, leidenschaftlich und magnetisch."],
      [["Intuitiv", "Mystisch", "Einfühlsam"], "Unter Neptun wird der Skorpion mystischer, intuitiver und einfühlsamer."],
      [["Emotional", "Beschützend", "Hingebungsvoll"], "Unter dem Mond wird der Skorpion emotionaler, beschützender und hingebungsvoller."]
    ],
    sagittarius: [
      [["Abenteuerlustig", "Optimistisch", "Philosophisch"], "Unter Jupiter verkörpert dieser Dekan den Schützen in Reinform: abenteuerlustig, optimistisch und philosophisch."],
      [["Leidenschaftlich", "Kühn", "Eroberungslustig"], "Unter Mars wird der Schütze leidenschaftlicher, kühner und eroberungslustiger."],
      [["Strahlend", "Kreativ", "Großzügig"], "Unter der Sonne wird der Schütze strahlender, kreativer und großzügiger."]
    ],
    capricorn: [
      [["Ehrgeizig", "Diszipliniert", "Verantwortungsvoll"], "Unter Saturn verkörpert dieser Dekan den Steinbock in Reinform: ehrgeizig, diszipliniert und verantwortungsvoll."],
      [["Geduldig", "Sensibel", "Ästhetisch"], "Unter Venus wird der Steinbock sanfter: geduldiger, sensibler und ästhetischer."],
      [["Methodisch", "Analytisch", "Pragmatisch"], "Unter Merkur wird der Steinbock methodischer, analytischer und pragmatischer."]
    ],
    aquarius: [
      [["Originell", "Humanistisch", "Visionär"], "Unter Uranus verkörpert dieser Dekan den Wassermann in Reinform: originell, humanistisch und visionär."],
      [["Neugierig", "Gesellig", "Erfinderisch"], "Unter Merkur wird der Wassermann neugieriger, geselliger und erfinderischer."],
      [["Harmonisch", "Warmherzig", "Idealistisch"], "Unter Venus wird der Wassermann harmonischer, warmherziger und idealistischer."]
    ],
    pisces: [
      [["Verträumt", "Einfühlsam", "Künstlerisch"], "Unter Neptun verkörpert dieser Dekan die Fische in Reinform: verträumt, einfühlsam und künstlerisch."],
      [["Intuitiv", "Emotional", "Mitfühlend"], "Unter dem Mond werden die Fische intuitiver, emotionaler und mitfühlender."],
      [["Intensiv", "Belastbar", "Wandlungsfähig"], "Unter Pluto werden die Fische intensiver, belastbarer und wandlungsfähiger."]
    ]
  },
  compat: {
    levels: {
      1: "Spannungsreiche Beziehung — Anziehung möglich, aber häufige Reibung.",
      2: "Stimulierende, aber herausfordernde Beziehung.",
      3: "Durchschnittliche Kompatibilität — mit gegenseitiger Anstrengung möglich.",
      4: "Sehr kompatibel — fließendes Verständnis mit kleinen Anpassungen.",
      5: "Seelenverwandte — natürliche und tiefe Verbindung."
    },
    pairs: {
      fire_fire: "Zwei Feuer: intensive Leidenschaft, Verbrennungsrisiko.",
      fire_air: "Luft nährt die Flamme: intellektuelle Nähe und gemeinsame Begeisterung.",
      fire_earth: "Erde erstickt Feuer: erfordert Geduld und Anpassung.",
      fire_water: "Wasser löscht Feuer: elementare Opposition, magnetische Anziehung.",
      earth_earth: "Zwei Erden: Stabilität, aber Routinegefahr.",
      earth_air: "Erde und Luft: zwei verschiedene Rhythmen zu vereinbaren.",
      earth_water: "Wasser befruchtet Erde: Wachstum und gegenseitige Unterstützung.",
      air_air: "Zwei Lüfte: geistige Nähe, Oberflächlichkeitsrisiko.",
      air_water: "Luft bewegt Wasser: Geist trifft Tiefe.",
      water_water: "Zwei Wasser: emotionale Verschmelzung, Intensität und wortloses Verstehen."
    }
  },
  cn: {
    names: {
      rat: "Ratte",
      ox: "Büffel",
      tiger: "Tiger",
      rabbit: "Hase",
      dragon: "Drache",
      snake: "Schlange",
      horse: "Pferd",
      goat: "Ziege",
      monkey: "Affe",
      rooster: "Hahn",
      dog: "Hund",
      pig: "Schwein"
    },
    summaries: {
      rat: "Flink, findig und charmant, nutzt die Ratte jede Gelegenheit und weiß sich immer zu helfen.",
      ox: "Geduldig, fleißig und zuverlässig, geht der Büffel beständig voran und baut auf festem Grund.",
      tiger: "Mutig, leidenschaftlich und unabhängig, stürzt sich der Tiger ins Abenteuer und verteidigt seine Überzeugungen.",
      rabbit: "Sanft, kultiviert und diplomatisch, sucht der Hase Harmonie und pflegt die Kunst des Lebens.",
      dragon: "Mächtig, ehrgeizig und strahlend, inspiriert der Drache andere und denkt in großen Dimensionen.",
      snake: "Weise, intuitiv und elegant, denkt die Schlange nach, bevor sie handelt, und durchschaut Geheimnisse.",
      horse: "Frei, energiegeladen und begeisterungsfähig, liebt das Pferd Bewegung und Weite.",
      goat: "Sanft, künstlerisch und mitfühlend, sucht die Ziege Frieden und Schönheit um sich herum.",
      monkey: "Schlau, neugierig und humorvoll, findet der Affe für alles eine Lösung.",
      rooster: "Offen, organisiert und fleißig, liebt der Hahn Präzision und gut gemachte Arbeit.",
      dog: "Treu, gerecht und beschützend, verteidigt der Hund die Menschen, die er liebt, und gerechte Anliegen.",
      pig: "Großzügig, aufrichtig und genussfreudig, schätzt das Schwein einfache, geteilte Freuden."
    },
    strengths: {
      rat: ["Einfallsreichtum", "Charme", "Anpassungsfähigkeit"],
      ox: ["Ausdauer", "Zuverlässigkeit", "Ehrlichkeit"],
      tiger: ["Mut", "Großzügigkeit", "Charisma"],
      rabbit: ["Feingefühl", "Diplomatie", "Umsicht"],
      dragon: ["Energie", "Ehrgeiz", "Selbstvertrauen"],
      snake: ["Weisheit", "Intuition", "Eleganz"],
      horse: ["Begeisterung", "Unabhängigkeit", "Geselligkeit"],
      goat: ["Kreativität", "Freundlichkeit", "Empathie"],
      monkey: ["Intelligenz", "Humor", "Vielseitigkeit"],
      rooster: ["Genauigkeit", "Offenheit", "Mut"],
      dog: ["Treue", "Ehrlichkeit", "Gerechtigkeitssinn"],
      pig: ["Großzügigkeit", "Aufrichtigkeit", "Toleranz"]
    },
    weaknesses: {
      rat: ["Opportunismus", "Gier", "Nervosität"],
      ox: ["Sturheit", "Starrheit", "Nachtragendheit"],
      tiger: ["Impulsivität", "Rebellion", "Ungeduld"],
      rabbit: ["Unentschlossenheit", "Konfliktscheu", "Empfindlichkeit"],
      dragon: ["Stolz", "Intoleranz", "Ungeduld"],
      snake: ["Misstrauen", "Eifersucht", "Verschlossenheit"],
      horse: ["Ungeduld", "Unbeständigkeit", "Egozentrik"],
      goat: ["Sorge", "Pessimismus", "Abhängigkeit"],
      monkey: ["Gerissenheit", "Eitelkeit", "Unruhe"],
      rooster: ["Kritiksucht", "Prahlerei", "Perfektionismus"],
      dog: ["Ängstlichkeit", "Pessimismus", "Misstrauen"],
      pig: ["Naivität", "Maßlosigkeit", "Trägheit"]
    },
    love: {
      rat: "Aufmerksam und gefühlvoll, bleibt sie denen treu, die ihr Vertrauen gewinnen.",
      ox: "Zurückhaltend und treu, liebt er dauerhaft und beschützt seine Liebsten.",
      tiger: "Feurig und ganz, lebt er intensive Leidenschaften und braucht Freiheit.",
      rabbit: "Zärtlich und aufmerksam, sucht er ein friedliches, sicheres Zuhause.",
      dragon: "Leidenschaftlich und anziehend, zieht er viele an, schenkt sich aber ganz nur dem, der es verdient.",
      snake: "Verführerisch und besitzergreifend, liebt sie intensiv und mit viel Zurückhaltung.",
      horse: "Romantisch und feurig, verliebt es sich schnell, legt aber Wert auf Unabhängigkeit.",
      goat: "Zärtlich und hingebungsvoll, braucht sie emotionale Sicherheit und Aufmerksamkeit.",
      monkey: "Verspielt und verführerisch, braucht er einen Partner, der ihn anregt.",
      rooster: "Treu und beschützend, zeigt er seine Liebe durch konkrete Taten.",
      dog: "Treu und aufrichtig, bindet er sich fürs Leben, sobald er vertraut.",
      pig: "Herzlich und hingebungsvoll, liebt es ohne Berechnung und mit viel Zärtlichkeit."
    },
    career: {
      rat: "Glänzt in Handel, Schreiben und Strategie.",
      ox: "Gedeiht in Landwirtschaft, Industrie, Finanzen und Handwerk.",
      tiger: "Glänzt in Führung, Unternehmertum und risikoreichen Berufen.",
      rabbit: "Gedeiht in Kunst, Diplomatie, Beratung und Innenarchitektur.",
      dragon: "Glänzt in Management, Politik, Unterhaltung und Innovation.",
      snake: "Glänzt in Forschung, Psychologie, Finanzen und Philosophie.",
      horse: "Glänzt in Reisen, Vertrieb, Kommunikation und Sport.",
      goat: "Gedeiht in Kunst, Pflege, Design und Lehre.",
      monkey: "Glänzt in Wissenschaft, Technik, Handel und Unterhaltung.",
      rooster: "Glänzt in Verwaltung, Medizin, Militär und Journalismus.",
      dog: "Gedeiht in Recht, Sozialarbeit, Gesundheit und Sicherheit.",
      pig: "Gedeiht in Gastronomie, Unterhaltung, Sozialem und Immobilien."
    },
    elements: { wood: "Holz", fire: "Feuer", earth: "Erde", metal: "Metall", water: "Wasser" },
    elementTraits: {
      wood: [["Großzügig", "Kreativ", "Idealistisch"], "Holz-Jahr: Wachstum und Großzügigkeit. Holz macht das Tier kreativer, kooperativer und zugewandter."],
      fire: [["Leidenschaftlich", "Dynamisch", "Kühn"], "Feuer-Jahr: Energie und Leidenschaft. Feuer macht das Tier dynamischer, ausdrucksstärker und kühner."],
      earth: [["Stabil", "Geduldig", "Zuverlässig"], "Erde-Jahr: Stabilität und Geduld. Erde macht das Tier pragmatischer, zuverlässiger und gelassener."],
      metal: [["Entschlossen", "Gründlich", "Ehrgeizig"], "Metall-Jahr: Stärke und Strenge. Metall macht das Tier entschlossener, anspruchsvoller und ehrgeiziger."],
      water: [["Intuitiv", "Flexibel", "Diplomatisch"], "Wasser-Jahr: Intuition und Flexibilität. Wasser macht das Tier intuitiver, anpassungsfähiger und diplomatischer."]
    },
    yin: "Yin",
    yang: "Yang",
    polarityDesc: {
      yin: "Yin: empfangende, nach innen gerichtete Energie.",
      yang: "Yang: aktive, nach außen gerichtete Energie."
    },
    labels: {
      year: "Chinesisches Jahr",
      yearElement: "Jahreselement",
      polarity: "Polarität",
      fixedElement: "Festes Element",
      hourAnimal: "Tier der Stunde"
    },
    hourNote: "Dein „chinesischer Aszendent“, bestimmt durch die Geburtszeit.",
    noHour: "Gib deine Geburtszeit an, um dein Tier der Stunde zu erfahren.",
    outOfRange: "Der chinesische Tierkreis ist für Geburten von 1900 bis 2100 verfügbar.",
    relationNames: {
      harmony: "Sechs Harmonien (六合)",
      triad: "Triade (三合)",
      clash: "Konflikt (六冲)",
      harm: "Schaden (六害)",
      punishment: "Strafe (相刑)",
      selfPunish: "Gleiches Zeichen (自刑)",
      same: "Gleiches Zeichen",
      neutral: "Neutrale Beziehung"
    },
    relations: {
      harmony: "Ein geheimes Bündnis: Diese beiden Zeichen ergänzen sich ganz natürlich und stützen sich auf Dauer.",
      triad: "Mitglieder derselben Triade: gleiche Werte und gleiche Energie, ein müheloses, spontanes Verständnis.",
      clash: "Gegenüberliegende Zeichen im Zyklus: Anziehung ist möglich, doch Spannungen und Charakterkonflikte sind häufig.",
      harm: "Eine zermürbende Beziehung: Missverständnisse und kleine Verletzungen häufen sich, wenn man nicht achtgibt.",
      punishment: "Eine anspruchsvolle Dynamik: Die Schwächen beider treten hervor, die Beziehung verlangt viel Einsatz.",
      selfPunish: "Zwei gleiche Naturen, die ihre Schwächen verstärken: echte Nähe, aber Gefahr der Übertreibung.",
      same: "Zwei gleiche Naturen: sofortiges Verständnis, aber wenig Ergänzung.",
      neutral: "Keine besondere Verbindung in der Tradition: Alles hängt von den Menschen und ihrem Einsatz ab."
    },
    yearOf: {
      rat: "Jahr der {el}-Ratte",
      ox: "Jahr des {el}-Büffels",
      tiger: "Jahr des {el}-Tigers",
      rabbit: "Jahr des {el}-Hasen",
      dragon: "Jahr des {el}-Drachen",
      snake: "Jahr der {el}-Schlange",
      horse: "Jahr des {el}-Pferdes",
      goat: "Jahr der {el}-Ziege",
      monkey: "Jahr des {el}-Affen",
      rooster: "Jahr des {el}-Hahns",
      dog: "Jahr des {el}-Hundes",
      pig: "Jahr des {el}-Schweins"
    },
    yearElementOf: { wood: "Holz", fire: "Feuer", earth: "Erde", metal: "Metall", water: "Wasser" }
  },
  horo: {
    title: "Horoskop",
    day: "Tag",
    week: "Woche",
    date: "Lesedatum",
    weekOf: "Woche vom {start} bis {end}",
    groups: {
      major: "Große Tendenzen",
      moment: "Aktuelles Klima",
      retro: "Rückläufigkeiten",
      positions: "Planetenpositionen",
      moon: "Mond der Woche",
      natal: "Auf dein Geburtshoroskop"
    },
    aspects: { conj: "in deinem Zeichen", trine: "im Trigon", square: "im Quadrat", opp: "in Opposition" },
    when: { from: "ab {d}", until: "bis {d}", range: "{a} – {b}" },
    none: "Kein bedeutender Transit für dein Zeichen: ein ruhiger Himmel, genieß ihn.",
    note: "Positionen für 12 Uhr Ortszeit berechnet. Symbolische Deutungen aus der astrologischen Tradition.",
    retrograde: "rückläufig",
    phases: ["Neumond", "Zunehmende Sichel", "Erstes Viertel", "Zunehmender Mond", "Vollmond", "Abnehmender Mond", "Letztes Viertel", "Abnehmende Sichel"],
    texts: {
      sun: {
        conj: "Es ist deine Zeit: Vitalität und Selbstvertrauen auf dem Höhepunkt, der Moment, deine Pläne voranzubringen.",
        trine: "Fließende Energie und gute Laune: Deine Initiativen kommen gut an.",
        square: "Ein kleines Energietief: Teil dir deine Kräfte ein und meide unnötige Machtkämpfe.",
        opp: "Andere stehen im Mittelpunkt: Setze auf Zusammenarbeit statt auf dein Ego."
      },
      moon: {
        conj: "Gefühle liegen blank: Hör auf deine Intuition, sie liegt heute richtig.",
        trine: "Innere Ruhe: ein guter Tag für gemeinsame Momente.",
        square: "Wechselhafte Stimmung: Nimm dir einen Moment, bevor du reagierst.",
        opp: "Empfindlich für die Erwartungen anderer: Finde das Gleichgewicht zwischen Geben und Nehmen."
      },
      mercury: {
        conj: "Wacher Geist und leichte Worte: ideal zum Verhandeln, Schreiben oder Überzeugen.",
        trine: "Flüssiger Austausch: eine gute Zeit für Formalitäten, Verträge und Reisen.",
        square: "Gefahr von Missverständnissen: Lies deine Nachrichten nochmals und prüfe die Details.",
        opp: "Lebhafte Debatten im Umfeld: Hör ebenso viel zu, wie du sprichst."
      },
      venus: {
        conj: "Charme auf dem Höhepunkt: Begegnungen, Versöhnungen und Genuss werden begünstigt.",
        trine: "Sanftheit in Beziehungen: ein günstiges Klima für Liebe und Finanzen.",
        square: "Kleine emotionale Frustrationen: Vermeide Spontankäufe.",
        opp: "Die Beziehung zu anderen steht im Mittelpunkt: Raum für Kompromisse in der Liebe."
      },
      mars: {
        conj: "Vervielfachte Energie: Leg los, aber Vorsicht vor Ungeduld und Zusammenstößen.",
        trine: "Gut gelenkte Dynamik: Deine Anstrengungen tragen Früchte.",
        square: "Spannungen und Reizbarkeit: Lenke deine Energie in Sport oder Tatkraft.",
        opp: "Machtkämpfe sind möglich: Wähle deine Kämpfe mit Bedacht."
      },
      jupiter: {
        conj: "Eine Zeit der Expansion: Das Glück lächelt dir zu, wage es, größer zu denken.",
        trine: "Chancen in Sicht: Unterstützung oder eine gute Nachricht kann alles verändern.",
        square: "Zu viel Optimismus: Versprich nicht mehr, als du halten kannst.",
        opp: "Andere öffnen dir Türen: Bleib bei deinen Zusagen realistisch."
      },
      saturn: {
        conj: "Eine Zeit des Aufbaus: Einsatz und Disziplin legen dauerhafte Grundlagen.",
        trine: "Stabilität und Ernsthaftigkeit: Deine langfristigen Projekte kommen sicher voran.",
        square: "Hindernisse und Verzögerungen: Geduld, jede Schwierigkeit lässt dich wachsen.",
        opp: "Verantwortung gegenüber anderen: Halte deine Zusagen, es wird sich lohnen."
      },
      uranus: {
        conj: "Wind der Veränderung: Unerwartetes rüttelt an deinen Gewohnheiten, bleib flexibel.",
        trine: "Neue Ideen und Befreiung: Trau dich, originell zu sein.",
        square: "Überraschungen und Unbeständigkeit: Halte einen Plan B bereit.",
        opp: "Nahestehende überraschen dich: Wage es, deine Komfortzone zu verlassen."
      },
      neptune: {
        conj: "Fantasie und Intuition verstärkt: Träume, aber bleib auf dem Boden.",
        trine: "Inspiration und künstlerisches Gespür: ein Klima, das die Kreativität fördert.",
        square: "Unklarheit und Illusionen: Prüfe die Fakten, bevor du dich festlegst.",
        opp: "Vorsicht bei zu schönen Versprechen: Kläre zweideutige Situationen."
      },
      pluto: {
        conj: "Tiefe Wandlung: Ein Kapitel schließt sich, um Platz für Neues zu machen.",
        trine: "Gestärkte persönliche Kraft: Du verstehst es, Situationen zu deinem Vorteil zu wenden.",
        square: "Intensive Selbstprüfung: Lass los, was nicht mehr zu dir passt.",
        opp: "Machtspiele in deinen Beziehungen: Setze auf Transparenz."
      }
    },
    retroTexts: {
      mercury: "Vorsicht bei Verträgen, Nachrichten und Geräten; ideal zum Überprüfen und Überarbeiten.",
      venus: "Die Liebesvergangenheit kehrt zurück; vermeide überstürzte Herzensentscheidungen.",
      mars: "Die Energie richtet sich nach innen; nimm wieder auf, statt neu zu starten.",
      jupiter: "Zeit, Erreichtes zu festigen, statt zu expandieren.",
      saturn: "Überprüfe deine Strukturen und grundlegenden Verpflichtungen.",
      uranus: "Veränderungen reifen im Hintergrund.",
      neptune: "Illusionen lösen sich auf, Klarheit kehrt zurück.",
      pluto: "Innere Arbeit und stille Wandlungen."
    },
    natalExact: "exakt am {d}",
    natalNone: "Derzeit kein bedeutender Transit auf dein Geburtshoroskop."
  },
  map: {
    title: "Sternkarte",
    place: "Beobachtungsort",
    myPosition: "📍 Mein Standort",
    locate: "Standort ermitteln",
    locating: "Wird ermittelt…",
    geoError: "Standort nicht verfügbar: Wähle eine Stadt aus der Liste.",
    time: "Beobachtungszeit",
    visibleNow: "Zu dieser Zeit sichtbar",
    noneVisible: "Kein Planet über dem Horizont.",
    daylight: "Zu dieser Uhrzeit ist es Tag: Die Sterne sind nicht sichtbar.",
    meteors: "Sternschnuppen",
    meteorActive: "aktiv · Maximum am {d} · bis zu {zhr} pro Stunde",
    meteorNext: "Nächstes Maximum: {name}, am {d}",
    eclipses: "Nächste Finsternisse",
    visibleHere: "von hier sichtbar",
    notVisibleHere: "von hier nicht sichtbar",
    solarWhere: "von einem Teil der Erde aus sichtbar",
    note: "Himmel berechnet für die Ortszeit des gewählten Ortes (Gerätezeit für „Mein Standort“), ohne atmosphärische Refraktion. Sterne: d3-celestial (O. Frohn, BSD-Lizenz), Hipparcos-Katalog.",
    directions: ["N", "NO", "O", "SO", "S", "SW", "W", "NW"],
    eclipseTypes: {
      T: "Totale Sonnenfinsternis",
      A: "Ringförmige Sonnenfinsternis",
      H: "Hybride Sonnenfinsternis",
      P: "Partielle Sonnenfinsternis",
      t: "Totale Mondfinsternis",
      p: "Partielle Mondfinsternis",
      n: "Halbschatten-Mondfinsternis"
    },
    showers: {
      quadrantids: "Quadrantiden",
      lyrids: "Lyriden",
      etaAquariids: "Eta-Aquariiden",
      deltaAquariids: "Südliche Delta-Aquariiden",
      perseids: "Perseiden",
      draconids: "Draconiden",
      orionids: "Orioniden",
      leonids: "Leoniden",
      geminids: "Geminiden",
      ursids: "Ursiden"
    },
    constellations: {
      Ori: "Orion",
      UMa: "Großer Bär",
      UMi: "Kleiner Bär",
      Cas: "Kassiopeia",
      Cyg: "Schwan",
      Cru: "Kreuz des Südens",
      Lyr: "Leier",
      Aql: "Adler",
      CMa: "Großer Hund"
    },
    aboveHorizon: "Über dem Horizont",
    eclPartial: "partiell von hier: {pct} der Sonne verdeckt, von {a} bis {b} (Maximum {m})",
    eclTotal: "total von hier: {dur} Totalität gegen {m} (Finsternis von {a} bis {b})",
    eclAnnular: "ringförmig von hier: {dur} Ring gegen {m} (Finsternis von {a} bis {b})",
    eclRises: "die Sonne geht bereits verfinstert auf",
    eclSets: "die Sonne geht noch verfinstert unter",
    eclSafety: "⚠️ Nie ohne Finsternisbrille nach Norm ISO 12312-2 in die Sonne schauen."
  },
  pair: {
    title: "Kompatibilität zu zweit",
    partnerName: "Name der anderen Person",
    partnerDate: "Geburtsdatum der anderen Person",
    partnerTime: "Geburtszeit der anderen Person",
    compare: "Vergleichen",
    you: "Du",
    other: "Die andere Person",
    global: "Gesamtharmonie",
    western: "Tierkreiszeichen",
    chinese: "Chinesische Tiere",
    moon: "Monde · emotionale Nähe",
    moonUnknown: "Um die Monde zu vergleichen, gib die Geburtszeiten an: Der Mond wechselt am Tag einer der Geburten das Zeichen.",
    invalid: "Ungültiges Geburtsdatum.",
    noDate: "Gib das Geburtsdatum der anderen Person an.",
    note: "Symbolische Kompatibilität nach westlicher und chinesischer astrologischer Tradition. Die Gesamtharmonie ist der Durchschnitt der verfügbaren Achsen.",
    partnerPlace: "Geburtsort der anderen Person",
    synTitle: "Vertiefte Analyse (Synastrie)",
    synHarmony: "Harmonische Verbindungen",
    synTension: "Spannungsreiche Verbindungen",
    synNone: "Kein bedeutender Aspekt.",
    synBalance: "{h} harmonische · {t} spannungsreiche Verbindungen",
    synNote: "Ohne Geburtszeiten werden Mond und Aszendent nicht verglichen."
  },
  theme: { light: "Heller Modus" },
  wheel: { title: "Tierkreisrad", today: "Heute", birth: "Bei der Geburt" },
  history: { title: "Zuletzt", clear: "Verlauf löschen" },
  offline: {
    button: "Offline-Version",
    hint: "Das komplette Tool als einzelne HTML-Datei herunterladen – ohne Internet nutzbar und leicht weiterzugeben.",
    opened: "Die eigenständige Version öffnet sich in einem neuen Tab: Klicke dort auf „Offline-Version“, um sie zu speichern.",
    soon: "bald verfügbar"
  },
  labelBirthPlace: "Geburtsort",
  placeNone: "— nicht angegeben —",
  natal: {
    title: "Geburtshoroskop",
    tabSigns: "Zeichen & chinesischer Tierkreis",
    tabNatal: "Geburtshoroskop",
    tabsLabel: "Ergebnisansicht",
    ascendant: "Aszendent",
    midheaven: "Medium Coeli",
    positions: "Stellungen bei der Geburt",
    house: "Haus",
    reading: "Deutung des Horoskops",
    aspects: "Aspekte",
    noAspects: "Kein Hauptaspekt.",
    needBoth: "Gib Geburtszeit und Geburtsort an, um Aszendent, Medium Coeli und Häuser zu erhalten.",
    needTime: "Gib die Geburtszeit an, um Aszendent, Medium Coeli und Häuser zu erhalten.",
    needPlace: "Gib den Geburtsort an, um Aszendent, Medium Coeli und Häuser zu erhalten.",
    noonMoon: "Ohne Geburtszeit werden die Stellungen für 12 Uhr berechnet: Der Mond kann um einige Grad abweichen.",
    placidus: "Häuser nach Placidus.",
    equal: "Äqualhäuser: Jenseits des Polarkreises ist die Placidus-Methode nicht anwendbar.",
    tzNote: "Ortszeit am Geburtsort, Zeitumstellungen eingeschlossen.",
    mcText: "Das Medium Coeli steht für Berufung und öffentliches Bild.",
    legend: "Der Planet sagt was, das Zeichen wie, das Haus wo.",
    domains: {
      sun: "Identität, Wille",
      moon: "Gefühle, innere Bedürfnisse",
      mercury: "Denken, Kommunikation",
      venus: "Liebe, Geschmack, Harmonie",
      mars: "Energie, Handeln, Begehren",
      jupiter: "Glück, Wachstum, Vertrauen",
      saturn: "Regeln, Reife, Prüfungen",
      uranus: "Originalität, Wandel (Merkmal einer Generation)",
      neptune: "Traum, Intuition (Merkmal einer Generation)",
      pluto: "Wandlung, Macht (Merkmal einer Generation)"
    },
    styles: {
      aries: "mit Schwung, Offenheit und Ungeduld",
      taurus: "mit Beständigkeit, Sinnlichkeit und Vorsicht",
      gemini: "mit Neugier, Leichtigkeit und Lebhaftigkeit",
      cancer: "mit Feingefühl, Fürsorge und Bindung",
      leo: "mit Glanz, Großzügigkeit und Stolz",
      virgo: "mit Genauigkeit, Methode und Zurückhaltung",
      libra: "mit Charme, Diplomatie und Sinn für Ausgleich",
      scorpio: "mit Intensität, Leidenschaft und Tiefe",
      sagittarius: "mit Begeisterung, Offenheit und Freiheitsliebe",
      capricorn: "mit Ehrgeiz, Disziplin und Geduld",
      aquarius: "mit Originalität, Unabhängigkeit und Gemeinschaftssinn",
      pisces: "mit Feingefühl, Fantasie und Mitgefühl"
    },
    houses: ["Persönlichkeit, Erscheinung", "Geld, Besitz", "Kommunikation, nahes Umfeld", "Zuhause, Familie", "Liebe, Vergnügen, Kreativität", "Arbeitsalltag, Gesundheit", "Partnerschaft, Teilhaber", "Wandlungen, Intimität", "Reisen, Studium, Philosophie", "Karriere, Ansehen", "Freunde, Pläne", "Innenleben"],
    asc: {
      aries: "Aszendent Widder: eine direkte, energiegeladene Ausstrahlung. Man sieht dich als unternehmungslustig, als jemanden, der loslegt und nicht gern wartet.",
      taurus: "Aszendent Stier: eine ruhige, beruhigende Ausstrahlung. Man sieht dich als beständig, geduldig und komfortliebend.",
      gemini: "Aszendent Zwillinge: eine lebhafte, gesprächige Ausstrahlung. Man sieht dich als neugierig, witzig und immer in Bewegung.",
      cancer: "Aszendent Krebs: eine sanfte, schützende Ausstrahlung. Man sieht dich als einfühlsam, aufmerksam und deinen Liebsten nah.",
      leo: "Aszendent Löwe: eine strahlende, warme Ausstrahlung. Man sieht dich als großzügig, selbstsicher und gern im Mittelpunkt.",
      virgo: "Aszendent Jungfrau: eine dezente, gepflegte Ausstrahlung. Man sieht dich als genau, hilfsbereit und detailverliebt.",
      libra: "Aszendent Waage: eine liebenswürdige, elegante Ausstrahlung. Man sieht dich als diplomatisch, gesellig und harmoniesuchend.",
      scorpio: "Aszendent Skorpion: eine intensive, magnetische Ausstrahlung. Man sieht dich als geheimnisvoll, scharfsinnig und entschlossen.",
      sagittarius: "Aszendent Schütze: eine begeisterte, offene Ausstrahlung. Man sieht dich als optimistisch, offen und entdeckungsfreudig.",
      capricorn: "Aszendent Steinbock: eine ernste, gefasste Ausstrahlung. Man sieht dich als zuverlässig, ehrgeizig und beherrscht.",
      aquarius: "Aszendent Wassermann: eine originelle, unabhängige Ausstrahlung. Man sieht dich als erfinderisch, frei und ein wenig eigen.",
      pisces: "Aszendent Fische: eine sanfte, verträumte Ausstrahlung. Man sieht dich als intuitiv, einfühlsam und schwer zu fassen."
    },
    aspectNames: {
      conjunction: "Konjunktion",
      sextile: "Sextil",
      square: "Quadrat",
      trine: "Trigon",
      opposition: "Opposition"
    },
    aspectMeanings: {
      conjunction: "Verschmelzung: beide Energien wirken zusammen",
      sextile: "Gelegenheit: eine leicht zu nutzende Zusammenarbeit",
      square: "Spannung: eine Herausforderung, die zum Handeln drängt",
      trine: "Harmonie: ein natürliches Talent",
      opposition: "Polarität: ein Gleichgewicht zwischen zwei Kräften finden"
    },
    tabSignsSub: "Das einfache Porträt",
    tabNatalSub: "Das vollständige Porträt",
    completeFields: "Zeit und Ort ergänzen",
    wheelHint: "Tippe auf einen Planeten, ein Zeichen, ein Haus oder einen Aspekt, um die Erklärung zu lesen."
  },
  infoLabel: "Mehr Informationen",
  timePlaceHint: "Je vollständiger und genauer deine Angaben, desto präziser dein Porträt und desto treuer der Tradition.",
  info: {
    sunPosition: "Die genaue Stellung der Sonne im Tierkreis bei der Geburt, in Grad innerhalb des Zeichens (0 bis 30°). Sie bestimmt Zeichen und Dekan und wird astronomisch berechnet, nicht nach festen Daten.",
    natalMoon: "Das Zeichen, in dem der Mond bei der Geburt stand; in der Astrologie steht es für das Gefühlsleben. Der Mond wechselt etwa alle zweieinhalb Tage das Zeichen: Ohne Geburtszeit sind manchmal zwei Zeichen möglich.",
    modality: "Die Zeichen teilen sich in drei Qualitäten: kardinal (beginnend, am Anfang jeder Jahreszeit), fix (festigend, mitten in der Jahreszeit) und veränderlich (anpassend, am Ende der Jahreszeit).",
    ruler: "Der Himmelskörper, der traditionell mit dem Zeichen verbunden ist und seinen Charakter prägen soll. Die moderne Astrologie ordnet Uranus, Neptun und Pluto dem Wassermann, den Fischen und dem Skorpion zu.",
    decan: "Jedes Zeichen umfasst 30° des Tierkreises, aufgeteilt in drei Dekane zu 10°. Je nach Grad der Sonne fügt der Dekan den Einfluss eines zweiten Himmelskörpers hinzu: des Herrschers eines Zeichens desselben Elements.",
    affinities: "Traditionelle Verträglichkeit der Zeichen, von 1 bis 5 Sternen, vor allem nach den Elementen: Feuer und Luft beflügeln sich, Erde und Wasser ergänzen sich, gegensätzliche Elemente ziehen sich an, reiben sich aber.",
    cnAffinities: "Traditionelle Verträglichkeit der chinesischen Tiere: Die sechs Harmonien und die Triaden sind günstig; Oppositionen, Schädigungen und Strafen sind schwierig.",
    cnYear: "Das chinesische Jahr beginnt mit dem Mondneujahr, zwischen dem 21. Januar und dem 20. Februar. Wer vor diesem Datum geboren ist, gehört zum Tier des Vorjahres.",
    yearElement: "Die Jahre folgen einem Zyklus aus fünf Elementen (Holz, Feuer, Erde, Metall, Wasser), von denen jedes zwei Jahre dauert. Zusammen mit den 12 Tieren ergibt sich ein großer 60-Jahres-Zyklus.",
    polarity: "Die Jahre wechseln zwischen Yang und Yin: Gerade Jahre sind Yang (aktive, nach außen gerichtete Energie), ungerade Jahre Yin (empfangende, nach innen gerichtete Energie).",
    fixedElement: "Jedes Tier hat außerdem ein eigenes Element, das sich von Jahr zu Jahr nicht ändert (die Ratte gehört zum Beispiel immer zum Wasser). Es verbindet sich mit dem Element des Jahres.",
    hourAnimal: "Der Tag ist in 12 Abschnitte von zwei Stunden geteilt, jeder einem Tier zugeordnet (die Ratte von 23 bis 1 Uhr, der Büffel von 1 bis 3 Uhr usw.). Das Tier der Geburtsstunde vervollständigt das Porträt.",
    natalChart: "Das Geburtshoroskop ist die vollständige Karte des Himmels zum Zeitpunkt und am Ort der Geburt: die Stellung jedes Himmelskörpers in den Zeichen und Häusern und die Winkel, die sie zueinander bilden.",
    ascendant: "Das Zeichen, das im Moment der Geburt am östlichen Horizont aufstieg. Es wechselt etwa alle zwei Stunden, daher braucht man genaue Zeit und genauen Ort. Es soll zeigen, wie man auf andere wirkt.",
    midheaven: "Der höchste Punkt des Tierkreises am Himmel im Moment der Geburt. Die Tradition verbindet ihn mit Berufung, Karriere und öffentlichem Bild.",
    houses: "Der Geburtshimmel wird vom Aszendenten aus in 12 Häuser geteilt, jedes einem Lebensbereich zugeordnet (Geld, Partnerschaft, Karriere …). Das Haus eines Himmelskörpers zeigt, wo sich seine Energie ausdrückt. Berechnungsmethode: Placidus.",
    aspects: "Besondere Winkel zwischen zwei Himmelskörpern, entlang des Tierkreises gemessen: Konjunktion (0°), Sextil (60°), Quadrat (90°), Trigon (120°) und Opposition (180°), mit einem Spielraum, dem Orbis. Je kleiner der Orbis, desto stärker der Aspekt.",
    retrograde: "Von der Erde aus scheint ein Planet manchmal einige Wochen im Tierkreis rückwärts zu laufen: eine Täuschung durch die Bewegung der Planeten zueinander. In der Astrologie lädt diese Zeit dazu ein, den Bereich des Planeten zu überdenken.",
    horoscope: "Das Horoskop vergleicht die aktuelle Stellung der Himmelskörper mit deinem Zeichen: Ein Himmelskörper, der dein Zeichen durchläuft oder einen Winkel dazu bildet (ein Transit), prägt die Zeit. Langsame Planeten bestimmen die großen Trends, schnelle die Stimmung des Augenblicks.",
    skymap: "Der Himmel, wie man ihn sieht, wenn man in der gewählten Stadt nach oben schaut: Der Rand der Scheibe ist der Horizont, die Mitte der Punkt direkt über dir. Norden ist oben und Osten links, weil du nach oben blickst.",
    compat: "Die Gesamtverträglichkeit ist der Durchschnitt der verfügbaren Achsen: Tierkreiszeichen, chinesische Tiere und, wenn die Geburtszeiten bekannt sind, Mondzeichen. Es ist eine symbolische Deutung, keine Vorhersage.",
    signVsConstellation: "Die astrologischen Zeichen sind 12 gleich große Abschnitte von 30°, gezählt ab der Frühlings-Tagundnachtgleiche: der hier verwendete tropische Tierkreis. Die gleichnamigen Sternbilder sind Sterngruppen von ungleicher Größe. Durch die langsame Kreiselbewegung der Erdachse (Präzession) haben sich Zeichen und Sternbilder seit der Antike um etwa ein Zeichen verschoben: Die Sonne kann im Zeichen Widder stehen und sich zugleich vor dem Sternbild Fische befinden.",
    night: "Die volle Dunkelheit beginnt, wenn die Sonne mehr als 18° unter dem Horizont steht (Ende der astronomischen Dämmerung), und endet in der Morgendämmerung. Der Mond erhellt den Himmel und verdeckt schwache Sterne: Am besten ist volle Dunkelheit bei untergegangenem Mond. Ein Planet gilt als gut sichtbar ab 10° Höhe, wenn die Sonne mehr als 6° unter dem Horizont steht.",
    solarEclipse: "Berechnung für diesen Ort, auf eine halbe Minute genau. Der Prozentwert ist der Anteil der Sonnenfläche, den der Mond verdeckt; die Zeiten reichen vom ersten bis zum letzten Kontakt der beiden Scheiben, begrenzt auf die Zeit, in der die Sonne über dem Horizont steht. Eine totale oder ringförmige Finsternis ist nur in einem schmalen Streifen als solche zu sehen; anderswo ist sie partiell.",
    natalTransits: "Transite vergleichen die heutige Stellung der Planeten mit der bei deiner Geburt: Ein Planet in Konjunktion, Sextil, Quadrat, Trigon oder Opposition zu einem Punkt deines Horoskops färbt dessen Bereich. Der Orbis beträgt 1° für schnelle und 1,5° für langsame Planeten; die Daten zeigen den Wirkungszeitraum und den Tag, an dem der Aspekt exakt ist. Der Geburtsmond wird nur bei bekannter Geburtszeit verwendet, Aszendent und Himmelsmitte nur bei bekannter Zeit und bekanntem Ort.",
    synastry: "Die Synastrie vergleicht zwei Geburtshoroskope: Jeder Planet des einen wird jedem Planeten des anderen gegenübergestellt. Trigone und Sextile gelten als harmonisch, Quadrate und Oppositionen als spannungsreich; eine Konjunktion ist harmonisch, außer mit Saturn oder mit Mars (außer mit Venus – Venus–Mars steht für Anziehung). Orben: 6° für Konjunktionen und Oppositionen, 5° für Quadrate und Trigone, 4° für Sextile. Verbindungen zwischen Sonne, Mond, Venus, Mars und Aszendent stehen vorn. Es ist eine traditionelle, symbolische Deutung, keine Vorhersage.",
    numerology: "Die Numerologie reduziert Daten und Namen durch Addieren ihrer Ziffern auf eine Zahl von 1 bis 9 – außer den Meisterzahlen 11, 22 und 33, die erhalten bleiben. Lebensweg: Tag, Monat und Jahr der Geburt werden einzeln reduziert und dann addiert. Namenszahlen: Jeder Buchstabe hat einen Wert (A = 1, B = 2 … I = 9, dann J = 1 …); alle Buchstaben ergeben die Ausdruckszahl, die Vokale die Seelenzahl, die Konsonanten die Persönlichkeitszahl. Im Arabischen gelten die Abdschad-Werte (ا = 1 … غ = 1000), im Russischen die entsprechende kyrillische Tabelle.",
    personalYear: "Das persönliche Jahr addiert deinen Geburtstag und -monat zum laufenden Jahr; es folgt einem Zyklus von 9 Jahren. Der persönliche Monat fügt den laufenden Monat hinzu, der persönliche Tag den Tag des Monats. Die Zyklen gelten für das Lesedatum des Horoskops.",
    tarot: "Geburtskarte: Tag, Monat und Jahr der Geburt werden addiert und dann durch Addieren der Ziffern reduziert, bis 22 oder weniger herauskommt; 22 entspricht dem Narren. Tageskarte: eine Ziehung für jede Person und jedes Datum, den ganzen Tag dieselbe. Das Tarot de Marseille und das Waite-Smith teilen die 22 großen Arkana, doch manche Namen unterscheiden sich, und Kraft und Gerechtigkeit tauschen ihre Nummern (XI und VIII bei Marseille, VIII und XI bei Waite-Smith): Dieselbe Rechnung kann je nach Deck die eine oder die andere ergeben.",
    spread: "Die Legung mit drei Karten beleuchtet eine Frage: die Vergangenheit (was dazu geführt hat), die Gegenwart (was gerade wirkt) und die Zukunft (die Tendenz, wenn sich nichts ändert). Es gibt nur eine Legung pro Tag, für eine gut überlegte Frage: Sie bleibt bis zum nächsten Tag sichtbar. Die Karten werden zufällig aus den 22 großen Arkana gezogen, ohne Wiederholung. Deine Frage bleibt auf deinem Gerät und erscheint nicht im exportierten Bild. Die Tradition verlangt eine klare und aufrichtige Frage, die nur einmal gestellt wird: Eine vage Frage oder eine, die wiederholt wird, um eine andere Antwort zu bekommen, nimmt der Legung ihren Sinn.",
    fieldName: "Dein Vorname personalisiert die App. Die klassische Numerologie stützt sich auf den vollständigen Geburtsnamen: alle Vornamen und den Familiennamen, wie in der Geburtsurkunde. Mit dem Vornamen allein spiegeln deine Namenszahlen nur einen Teil deines Namens wider.",
    fieldTime: "Mit ihr lassen sich Aszendent und Häuser berechnen, der Mond genau bestimmen (er wechselt alle zweieinhalb Tage das Zeichen) und das Tier deiner Geburtsstunde in der chinesischen Astrologie finden. Ohne sie fehlen diese Elemente oder können falsch sein, und dein Porträt bleibt unvollständig. Sie steht oft in der Geburtsurkunde; auch ungefähr hilft sie.",
    fieldPlace: "Er liefert die genaue Zeitzone deiner Geburt, Sommerzeit inbegriffen, und ihre Koordinaten. Ohne Ort lassen sich Aszendent und Häuser nicht berechnen. Die nächstgelegene Stadt genügt. Ort nicht gefunden? Füge seine GPS-Koordinaten oder einen Kartenlink ein (Google Maps, OpenStreetMap, Apple Karten): Die Zeitzone wird von der nächstgelegenen Stadt übernommen, und du kannst sie ändern.",
    privacy: "Alles, was du eingibst (Name, Datum, Uhrzeit, Ort, Verlauf, Tarot-Frage), wird nur im Speicher deines Browsers auf diesem Gerät abgelegt. Es werden keine Daten an einen Server gesendet, und die App enthält keine Statistik- oder Tracking-Werkzeuge. Wenn du die Daten dieser Website in deinem Browser löschst, ist alles gelöscht. Nur die Schaltfläche „Teilen“ erstellt einen Link mit deinem Geburtsdatum, den du selbst verschickst.",
    reversed: "Bei einem echten Deck kommen manche Karten verkehrt herum: Die Tradition gibt ihnen eine nuancierte Bedeutung, bei der die Energie der Karte blockiert, verzögert, nach innen gewendet oder übersteigert ist. Diese Option ist standardmäßig aus; ist sie an, kommt jede Karte der Tageslegung mit einer Wahrscheinlichkeit von eins zu zwei umgekehrt. Sie gilt für die nächste Legung: Eine bereits gezogene Legung ändert sich nicht.",
    calendar: "Die Liste zeigt die Himmelstermine der nächsten 30 Tage, täglich neu berechnet: Neu- und Vollmonde, Finsternisse (mit ihrer Sichtbarkeit vom Ort der Himmelskarte), Beginn und Ende von Rückläufigkeiten, Zeichenwechsel sowie die exakten Daten der Transite der langsamen Planeten (Jupiter bis Pluto) auf dein Geburtshoroskop. Die Termine der nächsten 7 Tage kannst du deinem Kalender hinzufügen: Apple, Outlook und die meisten Kalender erhalten eine .ics-Datei; Google Kalender erhält die Ereignisse einzeln (seine App kann keine .ics-Dateien öffnen). Eine Erinnerung am Ende der Woche lädt dich ein, die nächste hinzuzufügen."
  },
  placePlaceholder: "Stadtnamen eingeben …",
  placeNoMatch: "Keine Stadt gefunden. Versuche die nächstgelegene.",
  placeUnknown: "Geburtsort nicht erkannt: Wähle eine Stadt aus der Liste (die nächstgelegene genügt).",
  placeClear: "Ort löschen",
  placesCredit: "Städte: GeoNames (www.geonames.org), Lizenz CC BY 4.0.",
  rangeWarning: "Die Berechnungen sind für Geburten von 1900 bis 2100 geprüft: Außerhalb dieses Zeitraums werden Planetenstellungen und Zeitzonen ungenauer.",
  night: {
    title: "Den Himmel heute Nacht beobachten",
    sunset: "Sonnenuntergang",
    sunrise: "Sonnenaufgang",
    dark: "Volle Dunkelheit",
    moon: "Mond",
    moonLit: "zu {pct} beleuchtet",
    moonrise: "Aufgang {t}",
    moonset: "Untergang {t}",
    moonAllNight: "die ganze Nacht über dem Horizont",
    moonNone: "die ganze Nacht unter dem Horizont",
    best: "Beste Beobachtungszeit",
    bestNone: "Heute Nacht keine volle Dunkelheit ohne Mond.",
    planets: "Sichtbare Planeten",
    noPlanets: "Heute Nacht ist kein Planet gut sichtbar.",
    polarDay: "Die Sonne geht nicht unter: Polartag.",
    polarNight: "Die Sonne geht nicht auf: Polarnacht.",
    noAstroNight: "Zu dieser Jahreszeit keine volle Dunkelheit: Die Sonne bleibt zu nah am Horizont.",
    note: "Ortszeiten des gewählten Ortes, bei freiem Horizont. Wetter und Lichtverschmutzung werden nicht berücksichtigt."
  },
  num: {
    tab: "Numerologie",
    tabSub: "Die Zahlen deines Lebens",
    dateCard: "Geburtsdatum",
    cyclesCard: "Persönliche Zyklen",
    nameCard: "Name",
    lifePath: "Lebensweg",
    lifePathDesc: "Dein Weg und die großen Lektionen deines Lebens.",
    expression: "Ausdruckszahl",
    expressionDesc: "Deine Talente und deine Art zu handeln (alle Buchstaben des Namens).",
    soul: "Seelenzahl",
    soulDesc: "Deine tiefsten Wünsche (Vokale des Namens).",
    personality: "Persönlichkeitszahl",
    personalityDesc: "Das Bild, das du nach außen vermittelst (Konsonanten des Namens).",
    personalYear: "Persönliches Jahr",
    personalMonth: "Persönlicher Monat",
    personalDay: "Persönlicher Tag",
    master: "Meisterzahl",
    nameMissing: "Gib deinen Namen im Formular ein (am besten den vollständigen Geburtsnamen), um die Namenszahlen zu berechnen.",
    nameScript: "Die Namenszahlen werden aus lateinischen, arabischen (Abdschad) oder kyrillischen Buchstaben berechnet: Gib deinen Namen in einer dieser Schriften ein.",
    abjad: "Abdschad-Wert: {v}",
    note: "Numerologie ist eine symbolische Tradition ohne wissenschaftliche Grundlage: Ihre Zahlen laden zum Nachdenken ein.",
    numbers: {
      1: {
        keywords: ["Unabhängigkeit", "Initiative", "Führung"],
        text: "Die 1 geht voran: Aufbruchsenergie, der Wille, selbst zu handeln und eigene Wege zu gehen."
      },
      2: {
        keywords: ["Zusammenarbeit", "Feingefühl", "Diplomatie"],
        text: "Die 2 verbindet: Zuhören, Geduld und Sinn für Partnerschaft im Dienst der Harmonie."
      },
      3: {
        keywords: ["Ausdruck", "Kreativität", "Freude"],
        text: "Die 3 kommuniziert: Fantasie, Leichtigkeit im Umgang mit anderen, Lust am Schaffen und Teilen."
      },
      4: {
        keywords: ["Stabilität", "Arbeit", "Methode"],
        text: "Die 4 baut: Gründlichkeit, Ausdauer und Freude an soliden Fundamenten."
      },
      5: {
        keywords: ["Freiheit", "Wandel", "Neugier"],
        text: "Die 5 erkundet: Bewegung, Anpassungsfähigkeit und Durst nach neuen Erfahrungen."
      },
      6: {
        keywords: ["Verantwortung", "Liebe", "Harmonie"],
        text: "Die 6 sorgt: Sinn für Zuhause, Pflicht und die Schönheit von Beziehungen."
      },
      7: {
        keywords: ["Nachdenken", "Intuition", "Weisheit"],
        text: "Die 7 sucht: Selbstbesinnung, Analyse und Suche nach Sinn hinter dem Schein."
      },
      8: {
        keywords: ["Ehrgeiz", "Autorität", "Verwirklichung"],
        text: "Die 8 vollbringt: Geschäftssinn, Autorität und die Fähigkeit, Pläne umzusetzen."
      },
      9: {
        keywords: ["Nächstenliebe", "Ideal", "Vollendung"],
        text: "Die 9 vereint: Großzügigkeit, Weltoffenheit und Sinn für das Abschließen."
      },
      11: {
        keywords: ["Inspiration", "Intuition", "Ideal"],
        text: "Meisterzahl 11: eine verstärkte 2; wache Intuition, Inspiration und die Rolle eines Boten."
      },
      22: {
        keywords: ["Baumeister", "Vision", "Umsetzung"],
        text: "Meisterzahl 22: eine verstärkte 4; die Fähigkeit, große, dauerhafte Projekte zu errichten."
      },
      33: {
        keywords: ["Mitgefühl", "Heilung", "Hingabe"],
        text: "Meisterzahl 33: eine verstärkte 6; Hingabe, Güte und Sinn für den Dienst an anderen."
      }
    },
    years: ["Ein Jahr des Neubeginns: säen, wagen, Projekte starten.", "Ein Jahr der Geduld und Zusammenarbeit: Bindungen knüpfen, reifen lassen.", "Ein Jahr des Ausdrucks und der Kreativität: kommunizieren, sich zeigen, genießen.", "Ein Jahr der Arbeit und der Fundamente: ordnen, festigen, durchhalten.", "Ein Jahr des Wandels und der Freiheit: aufbrechen, sich anpassen, entdecken.", "Ein Jahr der Verantwortung und des Herzens: Zuhause, Familie, Verpflichtungen.", "Ein Jahr des Rückzugs und der Selbstbesinnung: lernen, nachdenken, Kraft tanken.", "Ein Jahr der Verwirklichung: Ziele, Finanzen, Anerkennung.", "Ein Jahr der Bilanz und des Abschlusses: beenden, aussortieren, den nächsten Zyklus vorbereiten."]
  },
  tarot: {
    tab: "Tarot",
    tabSub: "Die großen Arkana",
    deck: "Deck",
    birthCard: "Geburtskarte",
    birthCardDesc: "Deine Karte, berechnet aus deinem Geburtsdatum.",
    dayCard: "Tageskarte",
    dayCardDesc: "Ziehung vom {d}: den ganzen Tag dieselbe Karte.",
    note: "Tarot ist eine symbolische Tradition: Seine Karten laden zum Nachdenken ein, sie sagen die Zukunft nicht voraus.",
    decks: { marseille: "Tarot de Marseille", ws: "Waite-Smith" },
    cards: {
      fool: {
        name: "Der Narr",
        keywords: ["Freiheit", "Spontaneität", "Neuanfang"],
        text: "Schwung und Vertrauen ins Unbekannte: Ein Abenteuer beginnt – leicht leben, ohne den Halt zu verlieren."
      },
      magician: {
        name: "Der Magier",
        keywords: ["Initiative", "Geschick", "Anfang"],
        text: "Alle Werkzeuge liegen auf dem Tisch: Zeit, etwas zu wagen und die eigenen Talente einzusetzen."
      },
      priestess: {
        name: "Die Hohepriesterin",
        keywords: ["Intuition", "Verborgenes Wissen", "Stille"],
        text: "Innere Weisheit: auf die Intuition hören, beobachten, reifen lassen, bevor man handelt."
      },
      empress: {
        name: "Die Herrscherin",
        keywords: ["Kreativität", "Fülle", "Ausdruck"],
        text: "Fruchtbare Ideen und Projekte: Schönheit, Großzügigkeit und Ausdruck tragen Früchte."
      },
      emperor: {
        name: "Der Herrscher",
        keywords: ["Autorität", "Struktur", "Stabilität"],
        text: "Die Macht, die ordnet und schützt: einen Rahmen setzen, Verantwortung übernehmen, solide bauen."
      },
      hierophant: {
        name: "Der Hierophant",
        keywords: ["Weitergabe", "Tradition", "Rat"],
        text: "Weitergegebene Weisheit: ein Lehrer, eine Lehre oder gemeinsame Werte erhellen den Weg."
      },
      lovers: {
        name: "Die Liebenden",
        keywords: ["Wahl", "Verbindung", "Herz"],
        text: "Eine Herzensentscheidung: nach den eigenen Werten wählen, sich auf eine Beziehung oder einen Weg einlassen."
      },
      chariot: {
        name: "Der Wagen",
        keywords: ["Wille", "Sieg", "Bewegung"],
        text: "Meisterschaft in Bewegung: entschlossen vorangehen, Kurs halten und Hindernisse überwinden."
      },
      strength: {
        name: "Die Kraft",
        keywords: ["Mut", "Selbstbeherrschung", "Sanftheit"],
        text: "Stille Stärke: die eigenen Triebe mit Geduld und Sanftheit zähmen statt mit Zwang."
      },
      hermit: {
        name: "Der Eremit",
        keywords: ["Selbstbesinnung", "Weisheit", "Suche"],
        text: "Die Laterne, die Schritt für Schritt leuchtet: Abstand nehmen, die eigene Wahrheit suchen, im eigenen Tempo gehen."
      },
      wheel: {
        name: "Das Rad des Schicksals",
        keywords: ["Zyklus", "Wandel", "Schicksal"],
        text: "Alles dreht sich: Ein Kapitel endet, die Umstände ändern sich – sich der Bewegung des Lebens anpassen."
      },
      justice: {
        name: "Die Gerechtigkeit",
        keywords: ["Gleichgewicht", "Wahrheit", "Verantwortung"],
        text: "Zeit zu wägen und zu entscheiden: Klarheit, Ehrlichkeit und gerechte Folgen des eigenen Handelns."
      },
      hangedman: {
        name: "Der Gehängte",
        keywords: ["Pause", "Loslassen", "Neuer Blick"],
        text: "Das Handeln aussetzen, um anders zu sehen: Das Warten wird fruchtbar, wenn man loslässt."
      },
      death: {
        name: "Der Tod",
        keywords: ["Wandlung", "Ende", "Erneuerung"],
        text: "Ein notwendiges Ende ebnet den Weg zur Erneuerung: Platz schaffen, damit sich das Leben wandeln kann."
      },
      temperance: {
        name: "Die Mäßigkeit",
        keywords: ["Harmonie", "Geduld", "Ruhe"],
        text: "Die Kunst der richtigen Mischung: Maß, friedlicher Austausch und Rückkehr ins Gleichgewicht."
      },
      devil: {
        name: "Der Teufel",
        keywords: ["Begierde", "Bindungen", "Leidenschaft"],
        text: "Die Kräfte der Begierde und der Bindungen, die festhalten: die eigenen Abhängigkeiten erkennen, um sich zu befreien oder sie anzunehmen."
      },
      tower: {
        name: "Der Turm",
        keywords: ["Umbruch", "Offenbarung", "Befreiung"],
        text: "Ein Blitz stürzt, was nicht stabil war: ein heilsamer Schock, der befreit und enthüllt."
      },
      star: {
        name: "Der Stern",
        keywords: ["Hoffnung", "Inspiration", "Gelassenheit"],
        text: "Licht nach der Prüfung: neues Vertrauen, Inspiration und Glaube an die Zukunft."
      },
      moon: {
        name: "Der Mond",
        keywords: ["Träume", "Zweifel", "Fantasie"],
        text: "Das Reich der Intuition und der Illusionen: durch die Ängste gehen, auf Träume hören, ohne sich zu verlieren."
      },
      sun: {
        name: "Die Sonne",
        keywords: ["Freude", "Erfolg", "Klarheit"],
        text: "Strahlkraft und Lebensfreude: Erfolg, herzliche Verbindungen und geteiltes Glück im vollen Licht."
      },
      judgement: {
        name: "Das Gericht",
        keywords: ["Erwachen", "Ruf", "Wiedergeburt"],
        text: "Ein Ruf zum Erwachen: Bilanz, Vergebung und Neubeginn, wie eine Wiedergeburt."
      },
      world: {
        name: "Die Welt",
        keywords: ["Vollendung", "Erfüllung", "Einheit"],
        text: "Der Zyklus schließt sich schön: voller Erfolg, Harmonie und Offenheit für die Welt."
      }
    },
    marseilleNames: {
      fool: "Der Narr",
      magician: "Der Gaukler",
      priestess: "Die Päpstin",
      hierophant: "Der Papst",
      lovers: "Der Liebende",
      wheel: "Das Glücksrad",
      death: "Das Arkanum ohne Namen",
      tower: "Das Haus Gottes"
    },
    spreadTitle: "Legung mit drei Karten",
    spreadIntro: "Nimm dir einen Moment, um die Frage zu formulieren, die dir heute wichtig ist, und ziehe dann die Karten.",
    spreadDraw: "Karten ziehen",
    spreadAgain: "Neue Frage",
    spreadPast: "Vergangenheit",
    spreadPresent: "Gegenwart",
    spreadFuture: "Zukunft",
    spreadNote: "Nur eine Legung pro Tag, sie bleibt bis morgen erhalten. Die Zukunft zeigt eine Tendenz, kein Schicksal.",
    spreadQuestionLabel: "Deine Frage",
    spreadQuestionHint: "Zum Beispiel: „Was soll ich an dieser Situation verstehen?“",
    spreadFlip: "Tippe auf jede Karte, um sie umzudrehen.",
    spreadFlipAria: "Karte umdrehen: {pos}",
    spreadTomorrow: "Deine Legung für heute ist gemacht. Nächste Legung: morgen.",
    artCredit: "Kartenillustrationen mit Gemini (Google) erstellt.",
    reversedToggle: "Umgekehrte Karten",
    reversedBadge: "Umgekehrt",
    reversed: {
      fool: {
        keywords: ["Leichtsinn", "Zögern", "Zerstreuung"],
        text: "Der Schwung stößt auf Leichtsinn oder die Angst vor dem Sprung: Nimm dir Zeit, um zu sehen, wohin du trittst."
      },
      magician: {
        keywords: ["Selbstzweifel", "Manipulation", "Ungenutzte Talente"],
        text: "Die Werkzeuge sind da, aber schlecht eingesetzt: Zweifel, Zerstreuung oder die Versuchung zu täuschen; kehre zu einer klaren Absicht zurück."
      },
      priestess: {
        keywords: ["Geheimnisse", "Überhörte Intuition", "Rückzug"],
        text: "Die Intuition wird erstickt oder die Wahrheit bleibt verborgen: Hör auf das, was du in dir nicht hören willst."
      },
      empress: {
        keywords: ["Kreative Blockade", "Abhängigkeit", "Übermaß"],
        text: "Das Schaffen stockt oder du vergisst dich vor lauter Geben: Bring die Fürsorge für andere und für dich ins Gleichgewicht."
      },
      emperor: {
        keywords: ["Starrheit", "Herrschsucht", "Unordnung"],
        text: "Der Rahmen wird zum Käfig oder entgleitet: Such die richtige Festigkeit, weder zu viel noch zu wenig."
      },
      hierophant: {
        keywords: ["Infragestellung", "Dogmatismus", "Freiheit"],
        text: "Die geltenden Regeln lasten schwer oder werden hinterfragt: Finde deinen eigenen Weg, ohne alle überlieferte Weisheit zu verwerfen."
      },
      lovers: {
        keywords: ["Uneinigkeit", "Unentschlossenheit", "Ungleichgewicht"],
        text: "Eine schwierige Wahl oder eine wackelige Beziehung: Bring Herz und Werte in Einklang, bevor du dich bindest."
      },
      chariot: {
        keywords: ["Richtungslosigkeit", "Zerstreuung", "Hindernisse"],
        text: "Die Kräfte ziehen in entgegengesetzte Richtungen: Nimm die Zügel wieder in die Hand, bevor du weitergehst."
      },
      strength: {
        keywords: ["Selbstzweifel", "Ungeduld", "Wut"],
        text: "Das Vertrauen wankt oder die Impulsivität siegt: Finde zu Sanftheit und Geduld mit dir selbst zurück."
      },
      hermit: {
        keywords: ["Isolation", "Übermäßiger Rückzug", "Ratschläge ablehnen"],
        text: "Aus Alleinsein wird Isolation: Es ist Zeit, dein Licht zu teilen und das der anderen anzunehmen."
      },
      wheel: {
        keywords: ["Rückschläge", "Widerstand gegen Wandel", "Wiederholung"],
        text: "Der Zyklus scheint festzustecken oder gegen dich zu laufen: Geh mit dem Wandel, statt gegen den Strom zu kämpfen."
      },
      justice: {
        keywords: ["Voreingenommenheit", "Ungleichgewicht", "Verleugnung"],
        text: "Eine verzerrte Entscheidung oder ein Ungleichgewicht: Sieh ehrlich auf deinen Teil der Verantwortung."
      },
      hangedman: {
        keywords: ["Stillstand", "Unnötiges Opfer", "Widerstand"],
        text: "Aus Warten wird Stillstand: Lass wirklich los oder entschließ dich endlich, dich zu bewegen."
      },
      death: {
        keywords: ["Widerstand", "Angst vor dem Loslassen", "Langsamkeit"],
        text: "Ein Ende wird aus Angst vor dem Loslassen hinausgezögert: Die Erneuerung wartet darauf, dass du die Seite umblätterst."
      },
      temperance: {
        keywords: ["Übermaß", "Ungleichgewicht", "Hast"],
        text: "Das rechte Maß ist verloren: Übermaß, Hast oder Spannungen; kehre zur Mäßigung zurück."
      },
      devil: {
        keywords: ["Befreiung", "Erkenntnis", "Loslösung"],
        text: "Die Fesseln lockern sich: ein Moment der Erkenntnis und die Chance, dich von dem zu befreien, was dich festhielt."
      },
      tower: {
        keywords: ["Innere Krise", "Aufgeschobener Wandel", "Angst vor dem Umbruch"],
        text: "Der Umbruch wird hinausgezögert oder innerlich erlebt: Besser den Wandel begleiten, als ihn zu erleiden."
      },
      star: {
        keywords: ["Entmutigung", "Zweifel", "Verschleierte Hoffnung"],
        text: "Die Hoffnung verblasst für eine Weile: Das Licht ist noch da, gib ihm Raum."
      },
      moon: {
        keywords: ["Klärung", "Weichende Ängste", "Enthüllte Wahrheit"],
        text: "Die Illusionen lösen sich allmählich auf: Was verworren war, beginnt sich zu klären."
      },
      sun: {
        keywords: ["Getrübte Freude", "Verzögerter Erfolg", "Übermut"],
        text: "Das Licht ist verschleiert oder lässt auf sich warten: Erfolg bleibt möglich, mit etwas Geduld und Klarheit."
      },
      judgement: {
        keywords: ["Zögern", "Strenges Urteil", "Überhörter Ruf"],
        text: "Du zögerst, dem Ruf zu folgen, oder urteilst zu hart über dich: Vergib dir, um weiterzugehen."
      },
      world: {
        keywords: ["Unvollendetes", "Verzögerung", "Letzter Schritt"],
        text: "Der Zyklus schließt sich nur mühsam: Eine letzte Sache bleibt noch zu vollenden."
      }
    }
  },
  tabs: {
    sky: "Der Himmel jetzt",
    skySub: "Horoskop, Himmelskarte, Nacht",
    compat: "Kompatibilität",
    compatSub: "Mit einer anderen Person",
    numTarot: "Numerologie & Tarot",
    numTarotSub: "Zahlen und Arkana"
  },
  me: {
    set: "Das bin ich",
    is: "Mein Profil",
    saved: "Dieses Profil öffnet sich bei jedem Besuch direkt.",
    removed: "Dieses Profil öffnet sich nicht mehr automatisch."
  },
  privacyLine: "Deine Angaben bleiben auf deinem Gerät: Nichts wird online gesendet oder gespeichert.",
  privacyTitle: "Datenschutz",
  version: { label: "Version {v}", available: "Eine neue Version der App ist verfügbar.", reload: "Neu laden" },
  placeCoordsHint: "Ort nicht gefunden? Füge seine GPS-Koordinaten ein (zum Beispiel 48.8566, 2.3522) oder einen Kartenlink.",
  placeNear: "nahe {city}",
  placeTz: "Zeitzone",
  placeTzFrom: "nach {city}, {km} km entfernt",
  cal: {
    title: "Himmelskalender",
    intro: "Die Himmelstermine der nächsten 30 Tage, täglich aktualisiert. Füge die dieser Woche deinem Kalender hinzu.",
    period: "Zeitraum",
    months: "{n} Monate",
    catMoon: "Neu- und Vollmonde",
    catEclipses: "Finsternisse",
    catRetro: "Rückläufigkeiten",
    catIngress: "Zeichenwechsel",
    catTransits: "Transite auf dein Horoskop",
    button: "Kalender herunterladen",
    count: "{n} Ereignisse",
    note: "Die Datei wird auf deinem Gerät erstellt: Nichts wird online gesendet, außer den Ereignissen, die du selbst zu Google Kalender hinzufügst.",
    direct: "direktläufig",
    calName: "Himmelskalender — {name}",
    thisWeek: "Diese Woche",
    nextWeek: "Nächste Woche",
    later: "Später",
    none: "Keine Himmelstermine in den nächsten 30 Tagen.",
    addWeek: "Die nächsten 7 Tage hinzufügen zu:",
    toolGoogle: "Google Kalender",
    toolApple: "Apple",
    toolOutlook: "Outlook",
    toolOther: "Andere (.ics)",
    hintApple: "Öffne die heruntergeladene Datei: Dein iPhone, iPad oder Mac bietet an, alle Ereignisse hinzuzufügen.",
    hintOutlook: "Öffne die heruntergeladene Datei: Outlook fügt die Ereignisse deinem Kalender hinzu.",
    hintOther: "Öffne die heruntergeladene Datei oder importiere sie in deinen Kalender (Samsung Kalender, Thunderbird …).",
    hintGoogle: "Tippe auf ＋, um ein Ereignis zu Google Kalender hinzuzufügen: Es wird dann auf deinen Wunsch an Google gesendet.",
    googleImport: "Am Computer die ganze Woche auf einmal importieren",
    addOne: "Zu Google Kalender hinzufügen",
    weekEmpty: "Keine Himmelstermine in den nächsten 7 Tagen: Schau nächste Woche wieder vorbei!",
    reminder: "📅 Himmelskalender: Füge die nächste Woche hinzu",
    reminderDesc: "Öffne Zodiak & Dekane, um die Himmelstermine der nächsten Woche hinzuzufügen."
  }
});
