/* ============================================================
   Zodiaque & Décans — traduction : turc
   Fusionnée sur le français : une clé manquante s'affiche en français.
   ============================================================ */
I18N.tr = deepMerge(I18N.fr, {
  appTitle: "Burçlar ve Dekanlar",
  labelName: "Ad ve soyad",
  labelBirthDate: "Doğum tarihi",
  labelBirthTime: "Doğum saati",
  optional: "(isteğe bağlı)",
  btnReveal: "Burcumu göster",
  btnReset: "Yeni arama",
  btnExport: "Görsel olarak kaydet",
  btnShare: "Paylaş",
  shareCopied: "Bağlantı kopyalandı!",
  exported: "Görsel kaydedildi ✓",
  errorNoDate: "Lütfen bir tarih seçin.",
  errorInvalid: "Geçersiz tarih.",
  exportError: "Görsel kaydedilemedi.",
  close: "Kapat",
  langSelector: "Dil seçimi",
  cuspSign: "Güneş bu gün burç değiştiriyor: kesin sonuç için doğum saatinizi girin.",
  cuspDecan: "Güneş bu gün dekan değiştiriyor: kesin sonuç için doğum saatinizi girin.",
  searching: "Gökyüzünde aranıyor…",
  found: "Takımyıldız bulundu",
  decanLabel: ["Birinci dekan", "İkinci dekan", "Üçüncü dekan"],
  sections: {
    profile: "Profil",
    strengthWeak: "Güçlü ve zayıf yönler",
    loveCareer: "Aşk ve kariyer",
    decan: "Dekan",
    affinities: "Uyum",
    affinityHint: "Ayrıntılar için bir burca tıklayın",
    quickInfo: "Bilgiler",
    western: "Batı astrolojisi",
    chinese: "Çin burcu",
    yearElement: "Yılın elementi"
  },
  labels: {
    dateRange: "Olağan dönem",
    sunPosition: "Güneş'in konumu",
    modality: "Nitelik",
    ruler: "Yönetici gezegen",
    luckyNumbers: "Sayılar",
    colors: "Renkler",
    stone: "Taş",
    day: "Gün",
    strengths: "Güçlü yönler",
    weaknesses: "Zayıf yönler",
    love: "Aşk",
    career: "Kariyer",
    natalMoon: "Doğum Ay'ı",
    moonSign: "Ay burcu"
  },
  signNames: {
    aries: "Koç",
    taurus: "Boğa",
    gemini: "İkizler",
    cancer: "Yengeç",
    leo: "Aslan",
    virgo: "Başak",
    libra: "Terazi",
    scorpio: "Akrep",
    sagittarius: "Yay",
    capricorn: "Oğlak",
    aquarius: "Kova",
    pisces: "Balık"
  },
  summaries: {
    aries: "Mars'ın yönettiği bir ateş burcu. Enerjik, cesur ve öncü olan Koç, hedeflerine tutkuyla koşar.",
    taurus: "Venüs'ün yönettiği bir toprak burcu. Sadık, sabırlı ve duyusal olan Boğa, istikrarı ve basit zevkleri arar.",
    gemini: "Merkür'ün yönettiği bir hava burcu. Meraklı, uyumlu ve esprili olan İkizler, öğrenmeyi ve iletişim kurmayı sever.",
    cancer: "Ay'ın yönettiği bir su burcu. Duyarlı, koruyucu ve sezgili olan Yengeç, köklerine derinden bağlıdır.",
    leo: "Güneş'in yönettiği bir ateş burcu. Karizmatik, cömert ve yaratıcı olan Aslan, parlamayı ve ilham vermeyi sever.",
    virgo: "Merkür'ün yönettiği bir toprak burcu. Analitik, titiz ve yardımsever olan Başak, mükemmelliği arar.",
    libra: "Venüs'ün yönettiği bir hava burcu. Diplomatik, estetik ve sosyal olan Terazi, uyumu ve adaleti arar.",
    scorpio: "Plüton'un yönettiği bir su burcu. Yoğun, tutkulu ve gizemli olan Akrep, her şeyi sonuna kadar yaşar.",
    sagittarius: "Jüpiter'in yönettiği bir ateş burcu. Maceracı, iyimser ve filozof ruhlu olan Yay, özgürlüğe susamıştır.",
    capricorn: "Satürn'ün yönettiği bir toprak burcu. Hırslı, disiplinli ve sorumlu olan Oğlak, kalıcı olanı inşa eder.",
    aquarius: "Uranüs'ün yönettiği bir hava burcu. Özgün, insancıl ve bağımsız olan Kova, farklı düşünür.",
    pisces: "Neptün'ün yönettiği bir su burcu. Hayalperest, empatik ve sanatçı ruhlu olan Balık, görünmeyenle bağ kurar."
  },
  strengths: {
    aries: ["Cesaret", "Kararlılık", "Coşku"],
    taurus: ["Sadakat", "Sabır", "Güvenilirlik"],
    gemini: ["Merak", "Uyum sağlama", "Zekâ"],
    cancer: ["Empati", "Sadakat", "Sezgi"],
    leo: ["Karizma", "Cömertlik", "Yaratıcılık"],
    virgo: ["Titizlik", "Analiz", "Güvenilirlik"],
    libra: ["Diplomasi", "Çekicilik", "Adalet duygusu"],
    scorpio: ["Yoğunluk", "Sadakat", "Çekim gücü"],
    sagittarius: ["İyimserlik", "Macera ruhu", "Dürüstlük"],
    capricorn: ["Hırs", "Disiplin", "Sorumluluk"],
    aquarius: ["Özgünlük", "İnsancıllık", "Bağımsızlık"],
    pisces: ["Empati", "Hayal gücü", "Yumuşaklık"]
  },
  weaknesses: {
    aries: ["Sabırsızlık", "Fevrilik", "İnatçılık"],
    taurus: ["İnatçılık", "Sahiplenicilik", "Katılık"],
    gemini: ["Kararsızlık", "Yüzeysellik", "Gerginlik"],
    cancer: ["Aşırı hassasiyet", "Sahiplenicilik", "Duygu dalgalanmaları"],
    leo: ["Kibir", "Kendini beğenmişlik", "Otoriterlik"],
    virgo: ["Mükemmeliyetçilik", "Kaygı", "Eleştirellik"],
    libra: ["Kararsızlık", "Herkesi memnun etme isteği", "Bağımlılık"],
    scorpio: ["Kıskançlık", "Sahiplenicilik", "Kin"],
    sagittarius: ["Pervasızlık", "Kararsızlık", "Aşırı açık sözlülük"],
    capricorn: ["Katılık", "Kötümserlik", "Soğukluk"],
    aquarius: ["Mesafelilik", "Asilik", "Uzlaşmazlık"],
    pisces: ["Saflık", "Gerçeklerden kaçış", "Aşırı hassasiyet"]
  },
  love: {
    aries: "Tutkulu ve dolaysız; kazanmayı sever, sıkılmaktan nefret eder.",
    taurus: "Sadık ve romantik; güven ve şefkat arar.",
    gemini: "Çekici ve oyunbaz; zihinsel uyarana ihtiyaç duyar.",
    cancer: "Şefkatli ve koruyucu; huzurlu bir yuva arar.",
    leo: "Tutkulu ve romantik; beğenilmeyi ve şımartılmayı sever.",
    virgo: "İlgili ve fedakâr; duygularını çekingen bir şekilde ifade eder.",
    libra: "Romantik ve uyumlu; dengeleyici bir partner arar.",
    scorpio: "Tutkulu ve bütünleşmeyi seven; derin ve tek bir kişiye adanmış bir sevgiyle sever.",
    sagittarius: "Özgür ve coşkulu; alana ve maceraya ihtiyaç duyar.",
    capricorn: "Sadık ve ölçülü; uzun soluklu ilişkiler kurar.",
    aquarius: "Alışılmışın dışında ve özgür; zihinsel bir bağ arar.",
    pisces: "Romantik ve bütünleşmeyi seven; mutlak bir aşkın hayalini kurar."
  },
  career: {
    aries: "Liderlik, girişimcilik ve eylem gerektiren işlerde öne çıkar.",
    taurus: "Finans, zanaat ve gastronomide kendini gerçekleştirir.",
    gemini: "Gazetecilik, pazarlama ve öğretmenlikte parlar.",
    cancer: "Bakım, eğitim ve gayrimenkul alanında kendini gerçekleştirir.",
    leo: "Sanat, gösteri dünyası ve yöneticilikte parlar.",
    virgo: "Sağlık, araştırma ve analizde öne çıkar.",
    libra: "Hukuk, moda ve tasarımda kendini gerçekleştirir.",
    scorpio: "Psikoloji, araştırmacılık ve finansta öne çıkar.",
    sagittarius: "Seyahat, öğretmenlik ve uluslararası işlerde parlar.",
    capricorn: "Yönetim, siyaset ve mimarlıkta kendini gerçekleştirir.",
    aquarius: "Teknoloji, bilim ve sivil toplum kuruluşlarında parlar.",
    pisces: "Sanat, müzik ve maneviyat alanında kendini gerçekleştirir."
  },
  rulers: {
    mars: "Mars",
    venus: "Venüs",
    mercury: "Merkür",
    moon: "Ay",
    sun: "Güneş",
    pluto: "Plüton",
    jupiter: "Jüpiter",
    saturn: "Satürn",
    uranus: "Uranüs",
    neptune: "Neptün"
  },
  colors: {
    red: "Kırmızı",
    white: "Beyaz",
    green: "Yeşil",
    brown: "Kahverengi",
    yellow: "Sarı",
    silver: "Gümüş",
    gold: "Altın",
    orange: "Turuncu",
    pink: "Pembe",
    blue: "Mavi",
    black: "Siyah",
    purple: "Mor",
    seaGreen: "Deniz yeşili"
  },
  stones: {
    diamond: "Elmas",
    emerald: "Zümrüt",
    pearl: "İnci",
    moonstone: "Ay taşı",
    ruby: "Yakut",
    sapphire: "Safir",
    opal: "Opal",
    topaz: "Topaz",
    turquoise: "Turkuaz",
    garnet: "Lal taşı",
    amethyst: "Ametist",
    aquamarine: "Akuamarin"
  },
  modalities: { cardinal: "Öncü", fixed: "Sabit", mutable: "Değişken" },
  elements: { fire: "Ateş", earth: "Toprak", air: "Hava", water: "Su" },
  decanTraits: {
    aries: [
      [["Öncü", "Coşkulu", "Fatih"], "Mars etkisindeki bu dekan, Koç'u en saf hâliyle yansıtır: öncü, coşkulu ve fetheden."],
      [["Karizmatik", "Gururlu", "Cömert"], "Güneş etkisindeki bu dekan, Koç'u yumuşatır: daha karizmatik, gururlu ve cömert."],
      [["Maceracı", "İyimser", "Geniş ufuklu"], "Jüpiter etkisindeki bu dekan, Koç'un ufkunu genişletir: daha iyimser, maceracı ve geniş ufuklu."]
    ],
    taurus: [
      [["Duyusal", "Sadık", "Estet"], "Venüs etkisindeki bu dekan, Boğa'yı en saf hâliyle yansıtır: duyusal, sadık ve güzele âşık."],
      [["Pratik", "Meraklı", "Becerikli"], "Merkür etkisindeki bu dekan, Boğa'yı daha meraklı, pratik ve becerikli kılar."],
      [["Azimli", "Hırslı", "Titiz"], "Satürn etkisindeki bu dekan, Boğa'yı daha titiz, azimli ve hırslı kılar."]
    ],
    gemini: [
      [["Çevik", "Meraklı", "İletişimci"], "Merkür etkisindeki bu dekan, İkizler'i en saf hâliyle yansıtır: çevik, meraklı ve konuşkan."],
      [["Çekici", "Sosyal", "Estet"], "Venüs etkisindeki bu dekan, İkizler'i güzelleştirir: daha çekici, sosyal ve estetik duygusu güçlü."],
      [["Özgün", "Yenilikçi", "Bağımsız"], "Uranüs etkisindeki bu dekan, İkizler'i keskinleştirir: daha özgün, yenilikçi ve bağımsız."]
    ],
    cancer: [
      [["Duygusal", "Koruyucu", "Sadık"], "Ay etkisindeki bu dekan, Yengeç'i en saf hâliyle yansıtır: duygusal, koruyucu ve sadık."],
      [["Yoğun", "Kararlı", "Dirençli"], "Plüton etkisindeki bu dekan, Yengeç'i daha yoğun, kararlı ve dirençli kılar."],
      [["Sezgili", "Sanatçı", "Hayalperest"], "Neptün etkisindeki bu dekan, Yengeç'i daha hayalperest, sezgili ve sanatçı ruhlu kılar."]
    ],
    leo: [
      [["Karizmatik", "Cömert", "Yaratıcı"], "Güneş etkisindeki bu dekan, Aslan'ı en saf hâliyle yansıtır: ışıl ışıl, cömert ve yaratıcı."],
      [["Cesur", "Maceracı", "Geniş ufuklu"], "Jüpiter etkisindeki bu dekan, Aslan'ı daha maceracı, cesur ve geniş ufuklu kılar."],
      [["Savaşçı", "İradeli", "Lider"], "Mars etkisindeki bu dekan, Aslan'ı daha savaşçı, iradeli ve lider kılar."]
    ],
    virgo: [
      [["Analitik", "Titiz", "Pratik"], "Merkür etkisindeki bu dekan, Başak'ı en saf hâliyle yansıtır: analitik, titiz ve pratik."],
      [["Azimli", "Güvenilir", "Düzenli"], "Satürn etkisindeki bu dekan, Başak'ı daha düzenli, güvenilir ve azimli kılar."],
      [["Duyarlı", "Yaratıcı", "Estet"], "Venüs etkisindeki bu dekan, Başak'ı yumuşatır: daha duyarlı, yaratıcı ve estetik duygusu güçlü."]
    ],
    libra: [
      [["Diplomat", "Sosyal", "Estet"], "Venüs etkisindeki bu dekan, Terazi'yi en saf hâliyle yansıtır: diplomat, sosyal ve estetik duygusu güçlü."],
      [["Vizyoner", "Bağımsız", "Özgün"], "Uranüs etkisindeki bu dekan, Terazi'yi daha özgün, bağımsız ve vizyoner kılar."],
      [["Meraklı", "Entelektüel", "Belagatli"], "Merkür etkisindeki bu dekan, Terazi'yi daha entelektüel, meraklı ve belagatli kılar."]
    ],
    scorpio: [
      [["Yoğun", "Tutkulu", "Manyetik"], "Plüton etkisindeki bu dekan, Akrep'i en saf hâliyle yansıtır: yoğun, tutkulu ve manyetik."],
      [["Sezgili", "Mistik", "Empatik"], "Neptün etkisindeki bu dekan, Akrep'i daha mistik, sezgili ve empatik kılar."],
      [["Duygusal", "Koruyucu", "Bütünleşmeyi seven"], "Ay etkisindeki bu dekan, Akrep'i daha duygusal, koruyucu ve bütünleşmeyi seven biri yapar."]
    ],
    sagittarius: [
      [["Maceracı", "İyimser", "Filozof"], "Jüpiter etkisindeki bu dekan, Yay'ı en saf hâliyle yansıtır: maceracı, iyimser ve filozof."],
      [["Tutkulu", "Cesur", "Fatih"], "Mars etkisindeki bu dekan, Yay'ı daha tutkulu, cesur ve fetheden biri yapar."],
      [["Işıltılı", "Yaratıcı", "Cömert"], "Güneş etkisindeki bu dekan, Yay'ı daha ışıltılı, yaratıcı ve cömert kılar."]
    ],
    capricorn: [
      [["Hırslı", "Disiplinli", "Sorumlu"], "Satürn etkisindeki bu dekan, Oğlak'ı en saf hâliyle yansıtır: hırslı, disiplinli ve sorumlu."],
      [["Sabırlı", "Duyarlı", "Estet"], "Venüs etkisindeki bu dekan, Oğlak'ı yumuşatır: daha sabırlı, duyarlı ve estetik duygusu güçlü."],
      [["Yöntemli", "Analitik", "Pragmatik"], "Merkür etkisindeki bu dekan, Oğlak'ı daha yöntemli, analitik ve pragmatik kılar."]
    ],
    aquarius: [
      [["Özgün", "İnsancıl", "Vizyoner"], "Uranüs etkisindeki bu dekan, Kova'yı en saf hâliyle yansıtır: özgün, insancıl ve vizyoner."],
      [["Meraklı", "Sosyal", "Yaratıcı"], "Merkür etkisindeki bu dekan, Kova'yı daha meraklı, sosyal ve buluşçu kılar."],
      [["Uyumlu", "Sıcak", "İdealist"], "Venüs etkisindeki bu dekan, Kova'yı daha uyumlu, sıcak ve idealist kılar."]
    ],
    pisces: [
      [["Hayalperest", "Empatik", "Sanatçı"], "Neptün etkisindeki bu dekan, Balık'ı en saf hâliyle yansıtır: hayalperest, empatik ve sanatçı ruhlu."],
      [["Sezgili", "Duygusal", "Şefkatli"], "Ay etkisindeki bu dekan, Balık'ı daha sezgili, duygusal ve şefkatli kılar."],
      [["Yoğun", "Dirençli", "Dönüştürücü"], "Plüton etkisindeki bu dekan, Balık'ı daha yoğun, dirençli ve dönüştürücü kılar."]
    ]
  },
  compat: {
    levels: {
      1: "Gergin bir ilişki: çekim olabilir ama sürtüşmeler sık yaşanır.",
      2: "Heyecan verici ama zorlu bir ilişki.",
      3: "Orta düzeyde uyum: karşılıklı çabayla ilişki mümkündür.",
      4: "Çok uyumlu: birkaç küçük ayarla akıcı bir anlaşma.",
      5: "Ruh eşleri: doğal ve derin bir yakınlık."
    },
    pairs: {
      fire_fire: "Birlikte alevlenen iki ateş: yoğun tutku, ama yanma riski de var.",
      fire_air: "Hava alevi körükler: zihinsel yakınlık ve paylaşılan coşku.",
      fire_earth: "Toprak ateşi boğar: sabır ve uyum çabası gerekir.",
      fire_water: "Su ateşi söndürür: zıt elementler, ama güçlü bir çekim.",
      earth_earth: "İki toprak: istikrar ve güven, ama rutine düşme riski.",
      earth_air: "Toprak ve hava: uyumlanması gereken iki farklı ritim.",
      earth_water: "Su toprağı besler: büyüme, karşılıklı destek ve bereket.",
      air_air: "İki hava: zihinsel yakınlık, yüzeysellik riski.",
      air_water: "Hava suyu dalgalandırır: akıl derinliklerle buluşur.",
      water_water: "İki su: duygusal bütünleşme, yoğunluk ve sözsüz anlayış."
    }
  },
  cn: {
    names: {
      rat: "Fare",
      ox: "Öküz",
      tiger: "Kaplan",
      rabbit: "Tavşan",
      dragon: "Ejderha",
      snake: "Yılan",
      horse: "At",
      goat: "Keçi",
      monkey: "Maymun",
      rooster: "Horoz",
      dog: "Köpek",
      pig: "Domuz"
    },
    summaries: {
      rat: "Çevik, becerikli ve çekici olan Fare her fırsatı değerlendirir ve asla çaresiz kalmaz.",
      ox: "Sabırlı, çalışkan ve güvenilir olan Öküz istikrarla ilerler ve sağlam temeller üzerine inşa eder.",
      tiger: "Cesur, tutkulu ve bağımsız olan Kaplan maceraya atılır ve inançlarını savunur.",
      rabbit: "Nazik, zarif ve diplomat olan Tavşan uyum arar ve yaşama sanatını özenle sürdürür.",
      dragon: "Güçlü, hırslı ve ışıltılı olan Ejderha başkalarına ilham verir ve her şeyi büyük düşünür.",
      snake: "Bilge, sezgili ve zarif olan Yılan harekete geçmeden önce düşünür ve sırları çözer.",
      horse: "Özgür, enerjik ve coşkulu olan At hareketi ve geniş alanları sever.",
      goat: "Yumuşak, sanatçı ruhlu ve şefkatli olan Keçi çevresinde huzur ve güzellik arar.",
      monkey: "Kurnaz, meraklı ve espri dolu olan Maymun her şeye bir çözüm bulur.",
      rooster: "Açık sözlü, düzenli ve çalışkan olan Horoz kesinliği ve iyi yapılmış işi sever.",
      dog: "Sadık, adil ve koruyucu olan Köpek sevdiklerini ve haklı davaları savunur.",
      pig: "Cömert, içten ve hayattan keyif alan Domuz paylaşılan basit zevkleri sever."
    },
    strengths: {
      rat: ["Beceriklilik", "Çekicilik", "Uyum sağlama"],
      ox: ["Azim", "Güvenilirlik", "Dürüstlük"],
      tiger: ["Cesaret", "Cömertlik", "Karizma"],
      rabbit: ["İncelik", "Diplomasi", "Temkin"],
      dragon: ["Enerji", "Hırs", "Özgüven"],
      snake: ["Bilgelik", "Sezgi", "Zarafet"],
      horse: ["Coşku", "Bağımsızlık", "Sosyallik"],
      goat: ["Yaratıcılık", "Naziklik", "Empati"],
      monkey: ["Zekâ", "Mizah", "Çok yönlülük"],
      rooster: ["Titizlik", "Açık sözlülük", "Cesaret"],
      dog: ["Sadakat", "Dürüstlük", "Adalet duygusu"],
      pig: ["Cömertlik", "İçtenlik", "Hoşgörü"]
    },
    weaknesses: {
      rat: ["Fırsatçılık", "Açgözlülük", "Gerginlik"],
      ox: ["İnatçılık", "Katılık", "Kin"],
      tiger: ["Fevrilik", "Asilik", "Sabırsızlık"],
      rabbit: ["Kararsızlık", "Çatışmadan kaçma", "Alınganlık"],
      dragon: ["Kibir", "Hoşgörüsüzlük", "Sabırsızlık"],
      snake: ["Güvensizlik", "Kıskançlık", "Gizlilik merakı"],
      horse: ["Sabırsızlık", "Kararsızlık", "Bencillik"],
      goat: ["Kaygı", "Kötümserlik", "Bağımlılık"],
      monkey: ["Kurnazlık", "Kendini beğenmişlik", "Dengesizlik"],
      rooster: ["Eleştirellik", "Böbürlenme", "Mükemmeliyetçilik"],
      dog: ["Kaygı", "Kötümserlik", "Güvensizlik"],
      pig: ["Saflık", "Aşırılık", "Tembellik"]
    },
    love: {
      rat: "İlgili ve duygusal; güvenini kazananlara sadık kalır.",
      ox: "Ölçülü ve sadık; uzun süre sever ve yakınlarını korur.",
      tiger: "Ateşli ve bütün kalbiyle; yoğun tutkular yaşar ve özgürlüğe ihtiyaç duyar.",
      rabbit: "Şefkatli ve ilgili; huzurlu ve güven veren bir yuva arar.",
      dragon: "Tutkulu ve çekici; çok kişiyi etkiler ama kendini yalnızca hak edene tamamen verir.",
      snake: "Baştan çıkarıcı ve sahiplenici; yoğun ama çekingen bir şekilde sever.",
      horse: "Romantik ve ateşli; çabuk âşık olur ama bağımsızlığına düşkündür.",
      goat: "Şefkatli ve fedakâr; duygusal güvene ve ilgiye ihtiyaç duyar.",
      monkey: "Oyunbaz ve çekici; kendisini canlandıran bir partnere ihtiyaç duyar.",
      rooster: "Sadık ve koruyucu; sevgisini somut davranışlarla gösterir.",
      dog: "Sadık ve içten; güvendiğinde ömür boyu bağlanır.",
      pig: "Sıcak ve fedakâr; hesapsız ve büyük bir şefkatle sever."
    },
    career: {
      rat: "Ticaret, yazarlık ve strateji gerektiren işlerde parlar.",
      ox: "Tarım, sanayi, finans ve zanaatte kendini gerçekleştirir.",
      tiger: "Komuta, girişimcilik ve riskli mesleklerde öne çıkar.",
      rabbit: "Sanat, diplomasi, danışmanlık ve dekorasyonda kendini gerçekleştirir.",
      dragon: "Yöneticilik, siyaset, gösteri dünyası ve yenilikçilikte parlar.",
      snake: "Araştırma, psikoloji, finans ve felsefede öne çıkar.",
      horse: "Seyahat, satış, iletişim ve sporda parlar.",
      goat: "Sanat, bakım, tasarım ve öğretmenlikte kendini gerçekleştirir.",
      monkey: "Bilim, mühendislik, ticaret ve eğlence sektöründe öne çıkar.",
      rooster: "Yönetim, tıp, ordu ve gazetecilikte parlar.",
      dog: "Hukuk, sosyal hizmet, sağlık ve güvenlikte kendini gerçekleştirir.",
      pig: "Yeme içme, eğlence, sosyal hizmet ve gayrimenkulde kendini gerçekleştirir."
    },
    elements: { wood: "Ağaç", fire: "Ateş", earth: "Toprak", metal: "Metal", water: "Su" },
    elementTraits: {
      wood: [["Cömert", "Yaratıcı", "İdealist"], "Ağaç yılı: büyüme ve cömertlik. Ağaç, hayvanı daha yaratıcı, iş birliğine açık ve başkalarına dönük kılar."],
      fire: [["Tutkulu", "Dinamik", "Cesur"], "Ateş yılı: enerji ve tutku. Ateş, hayvanı daha dinamik, ifadeli ve cesur kılar."],
      earth: [["İstikrarlı", "Sabırlı", "Güvenilir"], "Toprak yılı: istikrar ve sabır. Toprak, hayvanı daha pragmatik, güvenilir ve sakin kılar."],
      metal: [["Kararlı", "Titiz", "Hırslı"], "Metal yılı: güç ve titizlik. Metal, hayvanı daha kararlı, talepkâr ve hırslı kılar."],
      water: [["Sezgili", "Esnek", "Diplomat"], "Su yılı: sezgi ve esneklik. Su, hayvanı daha sezgili, uyumlu ve diplomat kılar."]
    },
    yin: "Yin",
    yang: "Yang",
    polarityDesc: { yin: "Yin: alıcı, içe dönük enerji.", yang: "Yang: etkin, dışa dönük enerji." },
    labels: {
      year: "Çin yılı",
      yearElement: "Yılın elementi",
      polarity: "Kutupluluk",
      fixedElement: "Sabit element",
      hourAnimal: "Saatin hayvanı"
    },
    hourNote: "Doğum saatinizle belirlenen “Çin yükseleniniz”.",
    noHour: "Saatin hayvanını öğrenmek için doğum saatinizi girin.",
    outOfRange: "Çin burcu 1900–2100 yılları arasındaki doğumlar için kullanılabilir.",
    relationNames: {
      harmony: "Altı uyum (六合)",
      triad: "Üçlü uyum (三合)",
      clash: "Karşıtlık (六冲)",
      harm: "Zarar (六害)",
      punishment: "Ceza (相刑)",
      selfPunish: "Aynı burç (自刑)",
      same: "Aynı burç",
      neutral: "Nötr ilişki"
    },
    relations: {
      harmony: "Gizli bir ittifak: bu iki burç birbirini doğal olarak tamamlar ve uzun süre destekler.",
      triad: "Aynı üçlünün üyeleri: aynı değerler ve aynı enerji, akıcı ve kendiliğinden bir anlaşma.",
      clash: "Döngüde karşı karşıya duran burçlar: çekim olabilir ama gerginlik ve mizaç çatışmaları sıktır.",
      harm: "Yıpratan bir ilişki: dikkat edilmezse yanlış anlamalar ve küçük kırgınlıklar birikir.",
      punishment: "Zorlayıcı bir dinamik: herkesin kusurları ortaya çıkar, ilişki çok çaba ister.",
      selfPunish: "Kusurlarını büyüten iki aynı doğa: gerçek bir yakınlık, ama aşırılık riski.",
      same: "İki aynı doğa: anında anlaşma, ama az tamamlayıcılık.",
      neutral: "Gelenekte özel bir bağ yok: her şey kişilere ve her birinin çabasına bağlı."
    },
    yearOf: {
      rat: "{el} Faresi Yılı",
      ox: "{el} Öküzü Yılı",
      tiger: "{el} Kaplanı Yılı",
      rabbit: "{el} Tavşanı Yılı",
      dragon: "{el} Ejderhası Yılı",
      snake: "{el} Yılanı Yılı",
      horse: "{el} Atı Yılı",
      goat: "{el} Keçisi Yılı",
      monkey: "{el} Maymunu Yılı",
      rooster: "{el} Horozu Yılı",
      dog: "{el} Köpeği Yılı",
      pig: "{el} Domuzu Yılı"
    },
    yearElementOf: { wood: "Ağaç", fire: "Ateş", earth: "Toprak", metal: "Metal", water: "Su" }
  },
  horo: {
    title: "Burç yorumu",
    day: "Gün",
    week: "Hafta",
    date: "Okuma tarihi",
    weekOf: "{start} – {end} haftası",
    groups: {
      major: "Büyük eğilimler",
      moment: "Anın havası",
      retro: "Retrolar",
      positions: "Gezegenlerin konumları",
      moon: "Haftanın Ay'ı",
      natal: "Doğum haritanız üzerinde"
    },
    aspects: { conj: "burcunuzda", trine: "üçgen açıda", square: "kare açıda", opp: "karşıt açıda" },
    when: { from: "{d} itibarıyla", until: "{d} tarihine kadar", range: "{a} – {b}" },
    none: "Burcunuz için belirgin bir transit yok: sakin bir gökyüzü, tadını çıkarın.",
    note: "Konumlar yerel saatle öğlen için hesaplanmıştır. Yorumlar astroloji geleneğine dayanan sembolik yorumlardır.",
    retrograde: "retro",
    phases: ["Yeni Ay", "Hilal", "İlk dördün", "Büyüyen şişkin Ay", "Dolunay", "Küçülen şişkin Ay", "Son dördün", "Son hilal"],
    texts: {
      sun: {
        conj: "Sizin mevsiminiz: canlılık ve özgüven zirvede, projelerinizi ortaya koyma zamanı.",
        trine: "Akıcı enerji ve iyi bir ruh hâli: girişimleriniz iyi karşılanıyor.",
        square: "Hafif bir enerji düşüşü: gücünüzü koruyun, gereksiz güç savaşlarından kaçının.",
        opp: "Sahne başkalarının: egodan çok iş birliğine yönelin."
      },
      moon: {
        conj: "Duygular yüzeyde: sezgilerinizi dinleyin, bugün doğruyu görüyorlar.",
        trine: "Huzurlu bir iç dünya: paylaşılan anlara uygun bir gün.",
        square: "Değişken ruh hâli: tepki vermeden önce bir adım geri çekilin.",
        opp: "Başkalarının beklentilerine duyarlılık: vermek ile almak arasında denge kurun."
      },
      mercury: {
        conj: "Keskin bir zihin ve rahat bir dil: pazarlık, yazı ya da ikna için ideal.",
        trine: "Akıcı iletişim: işlemler, sözleşmeler ve yolculuklar için iyi bir zaman.",
        square: "Yanlış anlama riski: mesajlarınızı yeniden okuyun ve ayrıntıları kontrol edin.",
        opp: "Çevrenizle hararetli tartışmalar: konuştuğunuz kadar dinleyin."
      },
      venus: {
        conj: "Çekicilik zirvede: tanışmalar, barışmalar ve keyifler destekleniyor.",
        trine: "İlişkilerde yumuşaklık: aşk ve para için elverişli bir hava.",
        square: "Küçük duygusal hayal kırıklıkları: dürtüsel harcamalardan kaçının.",
        opp: "Karşınızdakiyle ilişki her şeyin merkezinde: aşkta uzlaşma zamanı."
      },
      mars: {
        conj: "Enerji katlanıyor: atılın, ama sabırsızlığa ve sürtüşmelere dikkat.",
        trine: "İyi yönlendirilmiş dinamizm: çabalarınız meyvesini veriyor.",
        square: "Gerginlik ve sinirlilik: enerjinizi spora ya da eyleme yönlendirin.",
        opp: "Güç çekişmeleri olabilir: mücadelelerinizi dikkatle seçin."
      },
      jupiter: {
        conj: "Genişleme dönemi: şans size gülüyor, daha büyük düşünmeye cesaret edin.",
        trine: "Ufukta fırsatlar: bir destek ya da iyi bir haber durumu değiştirebilir.",
        square: "Aşırı iyimserlik: tutamayacağınız sözler vermeyin.",
        opp: "Başkaları size kapılar açıyor: taahhütlerinizde gerçekçi kalın."
      },
      saturn: {
        conj: "İnşa dönemi: çaba ve disiplin kalıcı temeller atıyor.",
        trine: "İstikrar ve ciddiyet: uzun vadeli projeleriniz emin adımlarla ilerliyor.",
        square: "Engeller ve gecikmeler: sabır, her zorluk sizi büyütür.",
        opp: "Başkalarına karşı sorumluluklar: sözlerinizi tutun, karşılığını alacaksınız."
      },
      uranus: {
        conj: "Değişim rüzgârı: beklenmedik olaylar alışkanlıklarınızı sarsıyor, esnek kalın.",
        trine: "Yeni fikirler ve özgürleşme: özgün olmaya cesaret edin.",
        square: "Sürprizler ve belirsizlik: elinizde bir B planı bulunsun.",
        opp: "Yakınlarınız sizi şaşırtıyor: konfor alanınızdan çıkmayı kabul edin."
      },
      neptune: {
        conj: "Hayal gücü ve sezgi katlanıyor: hayal kurun, ama ayaklarınız yere bassın.",
        trine: "İlham ve sanatsal duyarlılık: yaratıcılığa elverişli bir hava.",
        square: "Belirsizlik ve yanılsamalar: bir şeye girişmeden önce gerçekleri kontrol edin.",
        opp: "Fazla güzel vaatlere karşı dikkatli olun: belirsiz durumları netleştirin."
      },
      pluto: {
        conj: "Derin dönüşüm: bir sayfa kapanıyor, yeniliğe yer açılıyor.",
        trine: "Güçlenen kişisel güç: durumları lehinize çevirmeyi biliyorsunuz.",
        square: "Yoğun sorgulamalar: artık size uymayanı bırakın.",
        opp: "İlişkilerde güç dengeleri: şeffaflığa önem verin."
      }
    },
    retroTexts: {
      mercury: "Sözleşmeler, mesajlar ve cihazlara dikkat; yeniden okumak ve gözden geçirmek için ideal.",
      venus: "Geçmiş aşklara dönüş; aceleci duygusal kararlardan kaçının.",
      mars: "Enerji içe dönüyor; yeni şeylere başlamak yerine yarım kalanları ele alın.",
      jupiter: "Genişlemek yerine kazanımlarınızı sağlamlaştırma zamanı.",
      saturn: "Temel yapılarınızı ve köklü taahhütlerinizi gözden geçirin.",
      uranus: "Değişimler perde arkasında olgunlaşıyor.",
      neptune: "Yanılsamalar dağılıyor, berraklık geri geliyor.",
      pluto: "İç çalışma ve sessiz dönüşümler."
    },
    natalExact: "tam açı: {d}",
    natalNone: "Şu anda doğum haritanızda belirgin bir transit yok."
  },
  map: {
    title: "Gökyüzü haritası",
    place: "Gözlem yeri",
    myPosition: "📍 Konumum",
    locate: "Konumumu bul",
    locating: "Konum bulunuyor…",
    geoError: "Konum alınamadı: listeden bir şehir seçin.",
    time: "Gözlem saati",
    visibleNow: "Bu saatte görünenler",
    noneVisible: "Ufkun üstünde gezegen yok.",
    daylight: "Bu saatte hava aydınlık: yıldızlar görünmüyor.",
    meteors: "Meteor yağmurları",
    meteorActive: "etkin · zirve {d} · saatte {zhr} adede kadar",
    meteorNext: "Sonraki zirve: {name}, {d}",
    eclipses: "Yaklaşan tutulmalar",
    visibleHere: "buradan görülür",
    notVisibleHere: "buradan görülmez",
    solarWhere: "Dünya'nın bir bölümünden görülür",
    note: "Gökyüzü, seçilen yerin yerel saatine göre hesaplanmıştır (“Konumum” için cihaz saati); atmosferik kırılma hesaba katılmamıştır. Yıldızlar: d3-celestial (O. Frohn, BSD lisansı), Hipparcos kataloğu.",
    directions: ["K", "KD", "D", "GD", "G", "GB", "B", "KB"],
    eclipseTypes: {
      T: "Tam Güneş tutulması",
      A: "Halkalı Güneş tutulması",
      H: "Hibrit Güneş tutulması",
      P: "Parçalı Güneş tutulması",
      t: "Tam Ay tutulması",
      p: "Parçalı Ay tutulması",
      n: "Yarıgölge Ay tutulması"
    },
    showers: {
      quadrantids: "Kuadrantidler",
      lyrids: "Liridler",
      etaAquariids: "Eta Akuaridler",
      deltaAquariids: "Güney Delta Akuaridler",
      perseids: "Perseidler",
      draconids: "Drakonidler",
      orionids: "Orionidler",
      leonids: "Leonidler",
      geminids: "Geminidler",
      ursids: "Ursidler"
    },
    constellations: {
      Ori: "Avcı",
      UMa: "Büyükayı",
      UMi: "Küçükayı",
      Cas: "Kraliçe",
      Cyg: "Kuğu",
      Cru: "Güney Haçı",
      Lyr: "Çalgı",
      Aql: "Kartal",
      CMa: "Büyükköpek"
    },
    aboveHorizon: "Ufkun üstünde",
    eclPartial: "buradan parçalı: Güneş'in {pct} kadarı örtülü, {a} – {b} (en yüksek {m})",
    eclTotal: "buradan tam: {m} civarında {dur} tam tutulma ({a} – {b})",
    eclAnnular: "buradan halkalı: {m} civarında {dur} halka ({a} – {b})",
    eclRises: "Güneş tutulmuş olarak doğuyor",
    eclSets: "Güneş hâlâ tutulmuş olarak batıyor",
    eclSafety: "⚠️ Güneş'e asla ISO 12312-2 standardına uygun tutulma gözlüğü olmadan bakmayın."
  },
  pair: {
    title: "İki kişilik uyum",
    partnerName: "Diğer kişinin adı",
    partnerDate: "Doğum tarihi",
    partnerTime: "Doğum saati",
    compare: "Karşılaştır",
    you: "Siz",
    other: "Diğer kişi",
    global: "Genel uyum",
    western: "Burçlar",
    chinese: "Çin burçları",
    moon: "Ay burçları · duygusal uyum",
    moonUnknown: "Ay burçlarını karşılaştırmak için doğum saatlerini girin: doğum günlerinden birinde Ay burç değiştiriyor.",
    invalid: "Geçersiz doğum tarihi.",
    noDate: "Diğer kişinin doğum tarihini girin.",
    note: "Batı ve Çin astroloji geleneklerine dayanan sembolik bir uyumdur. Genel uyum, mevcut eksenlerin ortalamasıdır.",
    partnerPlace: "Onun doğum yeri",
    synTitle: "Ayrıntılı analiz (sinastri)",
    synHarmony: "Uyum noktaları",
    synTension: "Gerilim noktaları",
    synNone: "Belirgin bir açı yok.",
    synBalance: "{h} uyum noktası · {t} gerilim noktası",
    synNote: "Doğum saatleri olmadan Ay ve yükselen karşılaştırılmaz."
  },
  theme: { light: "Açık mod" },
  wheel: { title: "Burç çarkı", today: "Bugün", birth: "Doğumda" },
  history: { title: "Son aramalar", clear: "Geçmişi temizle" },
  offline: {
    button: "Çevrimdışı sürüm",
    hint: "Aracın tamamını tek bir HTML dosyası olarak indirin: internetsiz kullanılabilir ve kolayca paylaşılır.",
    opened: "Bağımsız sürüm yeni bir sekmede açılıyor: kaydetmek için oradaki “Çevrimdışı sürüm” düğmesine tıklayın.",
    soon: "yakında"
  },
  labelBirthPlace: "Doğum yeri",
  placeNone: "— belirtilmedi —",
  natal: {
    title: "Doğum haritası",
    tabSigns: "Burç ve Çin burcu",
    tabNatal: "Doğum haritası",
    tabsLabel: "Sonuç görünümü",
    ascendant: "Yükselen",
    midheaven: "Tepe Noktası (MC)",
    positions: "Doğumdaki konumlar",
    house: "Ev",
    reading: "Haritanın yorumu",
    aspects: "Açılar",
    noAspects: "Önemli bir açı yok.",
    needBoth: "Yükselen, Tepe Noktası ve evler için doğum saatini ve doğum yerini ekleyin.",
    needTime: "Yükselen, Tepe Noktası ve evler için doğum saatini ekleyin.",
    needPlace: "Yükselen, Tepe Noktası ve evler için doğum yerini ekleyin.",
    noonMoon: "Doğum saati olmadan konumlar öğlen için hesaplanır: Ay'ın konumu birkaç derece kayabilir.",
    placidus: "Placidus ev sistemi.",
    equal: "Eşit evler: kutup dairesinin ötesinde Placidus yöntemi uygulanamaz.",
    tzNote: "Doğum yerinin yerel saati, saat değişiklikleri dahil.",
    mcText: "Tepe Noktası meslek ve toplumdaki imajla ilişkilidir.",
    legend: "Gezegen neyi, burç nasıl olduğunu, ev nerede olduğunu söyler.",
    domains: {
      sun: "kimlik, irade",
      moon: "duygular, içsel ihtiyaçlar",
      mercury: "düşünce, iletişim",
      venus: "aşk, zevkler, uyum",
      mars: "enerji, eylem, arzu",
      jupiter: "şans, büyüme, güven",
      saturn: "kurallar, olgunluk, sınavlar",
      uranus: "özgünlük, değişim (kuşak izi)",
      neptune: "hayal, sezgi (kuşak izi)",
      pluto: "dönüşüm, güç (kuşak izi)"
    },
    styles: {
      aries: "atılımla, açık sözlülükle ve sabırsızlıkla",
      taurus: "istikrarla, duyusallıkla ve temkinle",
      gemini: "merakla, hafiflikle ve canlılıkla",
      cancer: "duyarlılıkla, korumacılıkla ve bağlılıkla",
      leo: "ışıltıyla, cömertlikle ve gururla",
      virgo: "kesinlikle, yöntemle ve ölçülülükle",
      libra: "çekicilikle, diplomasiyle ve denge duygusuyla",
      scorpio: "yoğunlukla, tutkuyla ve derinlikle",
      sagittarius: "coşkuyla, açıklıkla ve özgürlük sevgisiyle",
      capricorn: "hırsla, disiplinle ve sabırla",
      aquarius: "özgünlükle, bağımsızlıkla ve topluluk ruhuyla",
      pisces: "duyarlılıkla, hayal gücüyle ve şefkatle"
    },
    houses: ["kişilik, dış görünüş", "para, mülkler", "iletişim, yakın çevre", "ev, aile", "aşk, keyifler, yaratıcılık", "günlük iş, sağlık", "eş, ortaklar", "dönüşümler, mahremiyet", "yolculuklar, eğitim, felsefe", "kariyer, itibar", "arkadaşlar, projeler", "iç dünya"],
    asc: {
      aries: "Koç yükselen: dolaysız ve enerjik bir duruş. Girişken, hemen harekete geçen ve beklemeyi sevmeyen biri olarak algılanırsınız.",
      taurus: "Boğa yükselen: sakin ve güven veren bir duruş. İstikrarlı, sabırlı ve konforuna düşkün biri olarak algılanırsınız.",
      gemini: "İkizler yükselen: canlı ve konuşkan bir duruş. Meraklı, esprili ve hep hareket hâlinde biri olarak algılanırsınız.",
      cancer: "Yengeç yükselen: yumuşak ve koruyucu bir duruş. Duyarlı, ilgili ve sevdiklerine yakın biri olarak algılanırsınız.",
      leo: "Aslan yükselen: parlak ve sıcak bir duruş. Cömert, kendinden emin ve parlamayı seven biri olarak algılanırsınız.",
      virgo: "Başak yükselen: ölçülü ve özenli bir duruş. Titiz, yardımsever ve ayrıntılara dikkat eden biri olarak algılanırsınız.",
      libra: "Terazi yükselen: sevimli ve zarif bir duruş. Diplomat, sosyal ve uyum arayan biri olarak algılanırsınız.",
      scorpio: "Akrep yükselen: yoğun ve manyetik bir duruş. Gizemli, sezgisi güçlü ve kararlı biri olarak algılanırsınız.",
      sagittarius: "Yay yükselen: coşkulu ve açık bir duruş. İyimser, açık sözlü ve keşfe susamış biri olarak algılanırsınız.",
      capricorn: "Oğlak yükselen: ciddi ve ağırbaşlı bir duruş. Güvenilir, hırslı ve kendine hâkim biri olarak algılanırsınız.",
      aquarius: "Kova yükselen: özgün ve bağımsız bir duruş. Yaratıcı, özgür ve biraz farklı biri olarak algılanırsınız.",
      pisces: "Balık yükselen: yumuşak ve hülyalı bir duruş. Sezgili, empatik ve kolay kavranamayan biri olarak algılanırsınız."
    },
    aspectNames: {
      conjunction: "kavuşum",
      sextile: "altmışlık",
      square: "kare",
      trine: "üçgen",
      opposition: "karşıt"
    },
    aspectMeanings: {
      conjunction: "kaynaşma: iki enerji birlikte işler",
      sextile: "fırsat: kolayca yakalanacak bir iş birliği",
      square: "gerilim: harekete geçiren bir zorluk",
      trine: "uyum: doğal bir yetenek",
      opposition: "kutupluluk: iki güç arasında bulunacak bir denge"
    },
    tabSignsSub: "Kısa portre",
    tabNatalSub: "Ayrıntılı portre",
    completeFields: "Saati ve yeri ekle",
    wheelHint: "Açıklamasını okumak için bir gezegene, burca, eve ya da açıya dokunun."
  },
  infoLabel: "Daha fazla bilgi",
  timePlaceHint: "Bilgileriniz ne kadar eksiksiz ve doğru olursa portreniz o kadar kesin ve geleneklere sadık olur.",
  info: {
    sunPosition: "Doğum anında Güneş'in zodyaktaki tam konumu; burç içindeki derece olarak (0–30°) gösterilir. Burcu ve dekanı belirleyen budur: sabit tarihlere göre değil, astronomik olarak hesaplanır.",
    natalMoon: "Doğum anında Ay'ın bulunduğu burç; astrolojide duygusal yaşamı temsil eder. Ay yaklaşık iki buçuk günde bir burç değiştirir: doğum saati olmadan bazen iki burç mümkündür.",
    modality: "Burçlar üç niteliğe ayrılır: öncü (başlatan, her mevsimin başında), sabit (dengeleyen, mevsimin ortasında) ve değişken (uyum sağlayan, mevsimin sonunda).",
    ruler: "Geleneksel olarak burçla ilişkilendirilen ve onun karakterini renklendirdiği düşünülen gök cismi. Modern astroloji Uranüs, Neptün ve Plüton'u Kova, Balık ve Akrep'e verir.",
    decan: "Her burç zodyağın 30°'sini kaplar ve 10°'lik üç dekana ayrılır. Güneş'in derecesine göre dekan, burca ikinci bir gök cisminin etkisini ekler: aynı elementten bir burcun yöneticisi.",
    affinities: "Burçlar arasındaki geleneksel uyum, 1'den 5'e kadar yıldızla; çoğunlukla elementlere dayanır: Ateş ve Hava birbirini canlandırır, Toprak ve Su birbirini tamamlar, zıt elementler birbirini çeker ama çatışır.",
    cnAffinities: "Çin burçları arasındaki geleneksel uyum: altı uyum ve üçlü uyumlar olumludur; karşıtlıklar, zararlar ve cezalar zordur.",
    cnYear: "Çin yılı, 21 Ocak ile 20 Şubat arasındaki Ay Yeni Yılı'nda başlar. Bu tarihten önce doğanlar bir önceki yılın hayvanına aittir.",
    yearElement: "Yıllar beş elementten (Ağaç, Ateş, Toprak, Metal, Su) oluşan bir döngüyü izler; her biri iki yıl sürer. 12 hayvanla birleşince 60 yıllık büyük bir döngü oluşur.",
    polarity: "Yıllar yang ile yin arasında değişir: çift yıllar yang (etkin, dışa dönük enerji), tek yıllar yin (alıcı, içe dönük enerji).",
    fixedElement: "Her hayvanın yıldan yıla değişmeyen kendine özgü bir elementi de vardır (örneğin Fare her zaman Su ile ilişkilidir). Bu element yılın elementiyle birleşir.",
    hourAnimal: "Gün, her biri bir hayvanla ilişkilendirilen ikişer saatlik 12 dilime ayrılır (Fare 23.00–01.00, Öküz 01.00–03.00 vb.). Doğum saatinin hayvanı portreyi tamamlar.",
    natalChart: "Doğum haritası, doğum anında ve doğum yerindeki gökyüzünün eksiksiz haritasıdır: her gök cisminin burçlardaki ve evlerdeki konumu ile aralarında oluşturdukları açılar.",
    ascendant: "Doğum anında doğu ufkunda yükselen burç. Yaklaşık iki saatte bir değiştiği için kesin doğum saati ve yeri gerekir. Başkalarına nasıl göründüğünüzü yansıttığı kabul edilir.",
    midheaven: "Doğum anında gökyüzünde en yüksekte bulunan zodyak noktası. Gelenek onu meslekle, kariyerle ve toplumdaki imajla ilişkilendirir.",
    houses: "Doğum gökyüzü yükselenden başlayarak 12 eve ayrılır; her biri yaşamın bir alanına (para, ilişki, kariyer…) karşılık gelir. Bir gök cisminin evi, enerjisinin nerede ifade bulduğunu gösterir. Hesaplama yöntemi: Placidus.",
    aspects: "Zodyak boyunca ölçülen iki gök cismi arasındaki özel açılar: kavuşum (0°), altmışlık (60°), kare (90°), üçgen (120°) ve karşıt (180°); orb adı verilen bir toleransla. Orb ne kadar küçükse açı o kadar güçlüdür.",
    retrograde: "Dünya'dan bakıldığında bir gezegen bazen birkaç hafta boyunca zodyakta geri gidiyormuş gibi görünür: bu, gezegenlerin birbirine göre hareketinden kaynaklanan bir yanılsamadır. Astrolojide bu dönem, gezegenin alanını yeniden gözden geçirmeye davet eder.",
    horoscope: "Burç yorumu, gök cisimlerinin şu anki konumlarını burcunuzla karşılaştırır: burcunuzdan geçen ya da onunla açı yapan bir gök cismi (transit) dönemi renklendirir. Yavaş gezegenler büyük eğilimleri, hızlı olanlar anın havasını verir.",
    skymap: "Seçilen şehirden başınızı kaldırdığınızda gördüğünüz gökyüzü: diskin kenarı ufuk, merkezi tam tepenizdeki noktadır. Gökyüzüne baktığınız için kuzey yukarıda, doğu soldadır.",
    compat: "Genel uyum, mevcut eksenlerin ortalamasıdır: burçlar, Çin burçları ve doğum saatleri biliniyorsa Ay burçları. Bu sembolik bir yorumdur, bir kehanet değildir.",
    signVsConstellation: "Astrolojik burçlar, ilkbahar ekinoksundan itibaren sayılan 30°'lik 12 eşit dilimdir: burada kullanılan tropikal zodyak budur. Aynı adı taşıyan takımyıldızlar ise farklı büyüklükteki yıldız gruplarıdır. Dünya ekseninin yavaş salınımı (presesyon) nedeniyle burçlar ile takımyıldızlar Antik Çağ'dan bu yana yaklaşık bir burç kaymıştır: Güneş Koç burcundayken aslında Balık takımyıldızının önünde olabilir.",
    night: "Tam karanlık, Güneş ufkun 18°'den fazla altına indiğinde (astronomik alacakaranlığın sonu) başlar ve şafakta biter. Ay gökyüzünü aydınlatır ve sönük yıldızları gizler: en iyi zaman, tam karanlık ile Ay'ın batmış olduğu andır. Bir gezegen, Güneş ufkun 6°'den fazla altındayken 10°'den yüksekte ise iyi görünür sayılır.",
    solarEclipse: "Bu yer için yarım dakika hassasiyetle hesaplanmıştır. Yüzde, Güneş yüzeyinin Ay tarafından örtülen kısmıdır; saatler iki diskin ilk temasından son temasına kadardır ve Güneş'in ufkun üstünde olduğu süreyle sınırlıdır. Tam veya halkalı tutulma ancak dar bir şeritte böyle görülür; başka yerlerde parçalıdır.",
    natalTransits: "Transitler, gezegenlerin bugünkü konumunu doğumunuzdaki konumlarla karşılaştırır: haritanızdaki bir noktayla kavuşum, altmışlık, kare, üçgen ya da karşıt açı yapan bir gezegen o alanı renklendirir. Hızlı gezegenler için 1°, yavaşlar için 1,5° orb kullanılır; tarihler etki dönemini ve açının tam olduğu günü gösterir. Doğum Ay'ı yalnızca doğum saati biliniyorsa, yükselen ve tepe noktası yalnızca saat ve yer biliniyorsa kullanılır.",
    synastry: "Sinastri iki doğum haritasını karşılaştırır: birinin her gezegeni diğerinin her gezegeniyle ele alınır. Üçgen ve altmışlık açılar uyum, kare ve karşıt açılar gerilim noktalarıdır; kavuşum uyumludur, ancak Satürn ile ya da (Venüs dışında) Mars ile değildir (Venüs–Mars çekimi simgeler). Orblar: kavuşum ve karşıt için 6°, kare ve üçgen için 5°, altmışlık için 4°. Güneş, Ay, Venüs, Mars ve yükselen arasındaki bağlar önce gelir. Bu, geleneksel ve sembolik bir yorumdur, kehanet değildir.",
    numerology: "Numeroloji, tarihleri ve adları rakamlarını toplayarak 1 ile 9 arasında bir sayıya indirger; yalnızca 11, 22 ve 33 usta sayıları olduğu gibi korunur. Yaşam yolu: doğum günü, ayı ve yılı ayrı ayrı indirgenip toplanır. Adın sayıları: her harfin bir değeri vardır (A = 1, B = 2… I = 9, sonra J = 1…); tüm harfler ifade sayısını, ünlüler ruh sayısını, ünsüzler kişilik sayısını verir. Arapçada ebced değerleri (ا = 1… غ = 1000), Rusçada eşdeğer Kiril tablosu kullanılır.",
    personalYear: "Kişisel yıl, doğum gününüzü ve ayınızı içinde bulunulan yıla ekler; 9 yıllık bir döngü izler. Kişisel ay buna içinde bulunulan ayı, kişisel gün ayın gününü ekler. Döngüler burç yorumunun okuma tarihine göre hesaplanır.",
    tarot: "Doğum kartı: doğum günü, ayı ve yılı toplanır, ardından 22 ya da daha küçük bir sayı elde edilene kadar rakamlar toplanarak indirgenir; 22, Deli kartına karşılık gelir. Günün kartı: her kişiye ve her tarihe özgü, bütün gün aynı kalan bir çekiliş. Marsilya Tarotu ile Waite-Smith aynı 22 büyük arkanayı paylaşır; ancak bazı adlar farklıdır ve Güç ile Adalet numaralarını değiştirir (Marsilya'da XI ve VIII, Waite-Smith'te VIII ve XI): aynı hesap desteye göre birini ya da ötekini verebilir.",
    spread: "Üç kartlık açılım bir soruyu aydınlatır: geçmiş (ona neyin yol açtığı), şimdi (neyin söz konusu olduğu) ve gelecek (hiçbir şey değişmezse eğilim). İyice düşünülmüş bir soru için günde yalnızca bir açılım yapılır: ertesi güne kadar ekranda kalır. Kartlar 22 büyük arkana arasından, tekrar olmadan rastgele çekilir. Sorunuz cihazınızda kalır ve dışa aktarılan görselde yer almaz. Gelenek, yalnızca bir kez sorulan açık ve içten bir soru ister: belirsiz bir soru ya da başka bir cevap almak için yeniden sorulan bir soru açılımı anlamsız kılar.",
    fieldName: "Adınız uygulamayı kişiselleştirir. Geleneksel numeroloji, doğumdaki tam adınıza dayanır: nüfus kaydındaki gibi tüm adlarınız ve soyadınız. Yalnızca adınızla, adın sayıları adınızın sadece bir bölümünü yansıtır.",
    fieldTime: "Yükseleninizi ve evlerinizi hesaplamayı, iki buçuk günde bir burç değiştiren Ay'ın konumunu kesinleştirmeyi ve Çin astrolojisinde doğum saatinizin hayvanını bulmayı sağlar. Saat olmadan bu öğeler eksik kalır ya da yanlış olabilir ve portreniz eksik kalır. Genellikle doğum belgesinde yazar; yaklaşık bile olsa işe yarar.",
    fieldPlace: "Doğumunuzun yaz saati dahil tam saat dilimini ve koordinatlarını verir. Yer olmadan yükselen ve evler hesaplanamaz. En yakın şehir yeterlidir. Yer bulunamadı mı? GPS koordinatlarını ya da bir harita bağlantısını (Google Maps, OpenStreetMap, Apple Haritalar) yapıştırın: saat dilimi en yakın şehirden alınır ve değiştirebilirsiniz.",
    privacy: "Girdiğiniz her şey (ad, tarih, saat, yer, geçmiş, tarot sorusu) yalnızca bu cihazdaki tarayıcınızın belleğinde saklanır. Hiçbir veri bir sunucuya gönderilmez ve uygulamada istatistik ya da izleme aracı yoktur. Tarayıcınızda bu sitenin verilerini silmek her şeyi siler. Yalnızca «Paylaş» düğmesi doğum tarihinizi içeren bir bağlantı oluşturur; onu siz gönderirsiniz.",
    reversed: "Gerçek bir destede bazı kartlar ters çıkar: gelenek onlara, kartın enerjisinin engellendiği, geciktiği, içe döndüğü ya da aşırıya kaçtığı nüanslı bir anlam verir. Bu seçenek varsayılan olarak kapalıdır; açıldığında günün açılımındaki her kartın ters çıkma olasılığı ikide birdir. Bir sonraki açılım için geçerlidir: daha önce yapılmış bir açılım değişmez.",
    calendar: "Liste, her gün yeniden hesaplanan önümüzdeki 30 günün gökyüzü buluşmalarını gösterir: yeni ay ve dolunaylar, tutulmalar (gökyüzü haritasının konumundan görünürlükleriyle), retroların başlangıç ve bitişleri, burç değişimleri ve yavaş gezegenlerin (Jüpiter'den Plüton'a) doğum haritanızdaki transitlerinin tam tarihleri. Önümüzdeki 7 günün buluşmalarını ajandanıza ekleyebilirsiniz: Apple, Outlook ve çoğu ajanda bir .ics dosyası alır; Google Takvim olayları tek tek alır (uygulaması .ics dosyalarını açamaz). Hafta sonundaki bir hatırlatma, sonraki haftayı eklemek için geri gelmenizi önerir.",
    tarotMinors: "56 küçük arkana kartı, gündelik deneyimleri dört takım üzerinden simgesel olarak ele alır. Değnekler Ateş ve yaratıcılıkla, Kupalar Su ve duygularla ilişkilidir. Kılıçlar Hava ve düşünceyi, Paralar ya da Tılsımlar ise Toprak ve somut yaşamı temsil eder. Günlük açılımda tam desteyi seçerek bu kartları 78 kartlık açılıma katabilirsiniz."
  },
  placePlaceholder: "Bir şehir adı yazın…",
  placeNoMatch: "Şehir bulunamadı. En yakın şehri deneyin.",
  placeUnknown: "Doğum yeri tanınmadı: önerilen listeden bir şehir seçin (en yakını da olur).",
  placeClear: "Yeri temizle",
  placesCredit: "Şehirler: GeoNames (www.geonames.org), CC BY 4.0 lisansı.",
  rangeWarning: "Hesaplamalar 1900–2100 arası doğumlar için doğrulanmıştır: bu dönemin dışında gezegen konumları ve saat dilimleri daha az kesindir.",
  night: {
    title: "Bu gece gökyüzünü gözlemlemek",
    sunset: "Gün batımı",
    sunrise: "Gün doğumu",
    dark: "Tam karanlık",
    moon: "Ay",
    moonLit: "{pct} aydınlık",
    moonrise: "doğuş {t}",
    moonset: "batış {t}",
    moonAllNight: "bütün gece ufkun üstünde",
    moonNone: "bütün gece ufkun altında",
    best: "Gözlem için en iyi zaman",
    bestNone: "Bu gece Ay'sız tam karanlık yok.",
    planets: "Görünen gezegenler",
    noPlanets: "Bu gece iyi görünen gezegen yok.",
    polarDay: "Güneş batmıyor: kutup gündüzü.",
    polarNight: "Güneş doğmuyor: kutup gecesi.",
    noAstroNight: "Bu mevsimde tam karanlık yok: Güneş ufka fazla yakın kalıyor.",
    note: "Seçilen yerin yerel saatleri, açık bir ufuk için. Hava durumu ve ışık kirliliği hesaba katılmaz."
  },
  num: {
    tab: "Numeroloji",
    tabSub: "Hayatınızın sayıları",
    dateCard: "Doğum tarihi",
    cyclesCard: "Kişisel döngüler",
    nameCard: "Ad",
    lifePath: "Yaşam yolu",
    lifePathDesc: "Yolunuz ve hayatınızın büyük dersleri.",
    expression: "İfade sayısı",
    expressionDesc: "Yetenekleriniz ve davranış biçiminiz (adın tüm harfleri).",
    soul: "Ruh sayısı",
    soulDesc: "Derin özlemleriniz (adın ünlü harfleri).",
    personality: "Kişilik sayısı",
    personalityDesc: "Dışarıya yansıttığınız imaj (adın ünsüz harfleri).",
    personalYear: "Kişisel yıl",
    personalMonth: "Kişisel ay",
    personalDay: "Kişisel gün",
    master: "Usta sayı",
    nameMissing: "Adın sayılarını hesaplamak için formda adınızı girin (tercihen doğumdaki tam adınızı).",
    nameScript: "Adın sayıları Latin, Arap (ebced) veya Kiril harfleriyle hesaplanır: adınızı bu yazılardan biriyle girin.",
    abjad: "Ebced değeri: {v}",
    note: "Numeroloji, bilimsel temeli olmayan sembolik bir gelenektir: sayıları düşünmeye bir davettir.",
    numbers: {
      1: {
        keywords: ["Bağımsızlık", "Girişim", "Liderlik"],
        text: "1 yolu açar: başlangıç enerjisi, kendi başına hareket etme ve farkını ortaya koyma isteği."
      },
      2: {
        keywords: ["İş birliği", "Duyarlılık", "Diplomasi"],
        text: "2 birleştirir: dinleme, sabır ve uyuma hizmet eden ortaklık duygusu."
      },
      3: {
        keywords: ["İfade", "Yaratıcılık", "Neşe"],
        text: "3 iletişim kurar: hayal gücü, insanlarla rahatlık, yaratma ve paylaşma ihtiyacı."
      },
      4: {
        keywords: ["İstikrar", "Çalışma", "Yöntem"],
        text: "4 inşa eder: titizlik, azim ve sağlam temellere duyulan sevgi."
      },
      5: {
        keywords: ["Özgürlük", "Değişim", "Merak"],
        text: "5 keşfeder: hareket, uyum yeteneği ve yeni deneyimlere susamışlık."
      },
      6: {
        keywords: ["Sorumluluk", "Sevgi", "Uyum"],
        text: "6 özen gösterir: yuva, görev ve ilişkilerin güzelliği duygusu."
      },
      7: {
        keywords: ["Tefekkür", "Sezgi", "Bilgelik"],
        text: "7 arar: iç gözlem, analiz ve görünenin ötesinde anlam arayışı."
      },
      8: {
        keywords: ["Hırs", "Otorite", "Başarı"],
        text: "8 gerçekleştirir: iş zekâsı, otorite ve hayata geçirme yeteneği."
      },
      9: {
        keywords: ["Özgecilik", "İdeal", "Tamamlanma"],
        text: "9 bir araya getirir: cömertlik, dünyaya açıklık ve tamamlama duygusu."
      },
      11: {
        keywords: ["İlham", "Sezgi", "İdeal"],
        text: "Usta sayı 11: güçlenmiş bir 2; keskin sezgi, ilham ve haberci rolü."
      },
      22: {
        keywords: ["Kurucu", "Vizyon", "Somutlaştırma"],
        text: "Usta sayı 22: güçlenmiş bir 4; büyük ve kalıcı projeler kurma yeteneği."
      },
      33: {
        keywords: ["Merhamet", "Şifa", "Adanmışlık"],
        text: "Usta sayı 33: güçlenmiş bir 6; adanmışlık, iyilikseverlik ve hizmet ruhu."
      }
    },
    years: ["Yeni başlangıçlar yılı: ekmek, cesaret etmek, projeler başlatmak.", "Sabır ve iş birliği yılı: bağlar kurmak, olgunlaşmasını beklemek.", "İfade ve yaratıcılık yılı: iletişim kurmak, kendini göstermek, keyif almak.", "Çalışma ve temel atma yılı: düzenlemek, sağlamlaştırmak, sebat etmek.", "Değişim ve özgürlük yılı: hareket etmek, uyum sağlamak, keşfetmek.", "Sorumluluklar ve gönül yılı: yuva, aile, bağlılıklar.", "Geri çekilme ve iç gözlem yılı: öğrenmek, düşünmek, dinlenmek.", "Başarı yılı: hedefler, para, takdir.", "Muhasebe ve kapanış yılı: bitirmek, ayıklamak, yeni döngüye hazırlanmak."]
  },
  tarot: {
    tab: "Tarot",
    tabSub: "Büyük arkanalar",
    deck: "Deste",
    birthCard: "Doğum kartı",
    birthCardDesc: "Doğum tarihinizden hesaplanan arkananız.",
    dayCard: "Günün kartı",
    dayCardDesc: "{d} çekilişi: bütün gün aynı kart.",
    note: "Tarot sembolik bir gelenektir: kartları düşünmeye davet eder, geleceği öngörmez.",
    decks: { marseille: "Marsilya Tarotu", ws: "Waite-Smith" },
    cards: {
      fool: {
        name: "Deli",
        keywords: ["Özgürlük", "Kendiliğindenlik", "Yeni başlangıç"],
        text: "Coşku ve bilinmeyene güven: bir macera başlıyor; hafiflikle ama ayakları yere basarak yaşanmalı."
      },
      magician: {
        name: "Büyücü",
        keywords: ["Girişim", "Beceri", "Başlangıç"],
        text: "Bütün araçlar masada: cesaret etme ve yeteneklerini ortaya koyma zamanı."
      },
      priestess: {
        name: "Başrahibe",
        keywords: ["Sezgi", "Gizli bilgi", "Sessizlik"],
        text: "İçsel bilgelik: sezgini dinle, gözlemle, harekete geçmeden önce olgunlaşmasını bekle."
      },
      empress: {
        name: "İmparatoriçe",
        keywords: ["Yaratıcılık", "Bolluk", "İfade"],
        text: "Fikirlerin ve projelerin bereketi: güzellik, cömertlik ve ifade meyvesini veriyor."
      },
      emperor: {
        name: "İmparator",
        keywords: ["Otorite", "Yapı", "İstikrar"],
        text: "Düzenleyen ve koruyan güç: bir çerçeve koymak, sorumluluk almak, sağlam inşa etmek."
      },
      hierophant: {
        name: "Başrahip",
        keywords: ["Aktarım", "Gelenek", "Öğüt"],
        text: "Aktarılan bilgelik: bir rehber, bir öğreti ya da paylaşılan değerler yolu aydınlatır."
      },
      lovers: {
        name: "Âşıklar",
        keywords: ["Seçim", "Birliktelik", "Gönül"],
        text: "Gönülden bir karar: değerlerine göre seçmek, bir ilişkiye ya da bir yola bağlanmak."
      },
      chariot: {
        name: "Savaş Arabası",
        keywords: ["İrade", "Zafer", "Hareket"],
        text: "Yürüyen ustalık: kararlılıkla ilerlemek, rotayı korumak ve engelleri aşmak."
      },
      strength: {
        name: "Güç",
        keywords: ["Cesaret", "Öz denetim", "Yumuşaklık"],
        text: "Sakin güç: dürtüleri baskıyla değil, sabır ve yumuşaklıkla evcilleştirmek."
      },
      hermit: {
        name: "Ermiş",
        keywords: ["İç gözlem", "Bilgelik", "Arayış"],
        text: "Adım adım aydınlatan fener: geri çekilmek, kendi gerçeğini aramak, kendi temponda ilerlemek."
      },
      wheel: {
        name: "Kader Çarkı",
        keywords: ["Döngü", "Değişim", "Kader"],
        text: "Her şey döner: bir sayfa kapanır, koşullar değişir; hayatın akışına uyum sağlamak."
      },
      justice: {
        name: "Adalet",
        keywords: ["Denge", "Hakikat", "Sorumluluk"],
        text: "Tartma ve karar verme zamanı: açıklık, dürüstlük ve eylemlerin adil sonuçları."
      },
      hangedman: {
        name: "Asılan Adam",
        keywords: ["Duraklama", "Bırakmak", "Farklı bakış"],
        text: "Olaylara başka türlü bakmak için eylemi askıya almak: bırakmayı kabul edince bekleyiş verimli olur."
      },
      death: {
        name: "Ölüm",
        keywords: ["Dönüşüm", "Son", "Yenilenme"],
        text: "Gerekli bir son, yenilenmenin yolunu açar: hayatın dönüşebilmesi için yer açmak."
      },
      temperance: {
        name: "Denge",
        keywords: ["Uyum", "Sabır", "Dinginlik"],
        text: "Doğru karışımın sanatı: ölçülülük, sakin alışverişler ve dengeye dönüş."
      },
      devil: {
        name: "Şeytan",
        keywords: ["Arzu", "Bağlar", "Tutku"],
        text: "Arzunun ve insanı tutan bağların gücü: bağlılıklarını tanıyıp onlardan kurtulmak ya da onları üstlenmek."
      },
      tower: {
        name: "Kule",
        keywords: ["Altüst oluş", "Açığa çıkış", "Kurtuluş"],
        text: "Bir şimşek sağlam olmayanı yıkar: özgürleştiren ve gerçeği gösteren hayırlı bir sarsıntı."
      },
      star: {
        name: "Yıldız",
        keywords: ["Umut", "İlham", "Huzur"],
        text: "Sınavdan sonra gelen ışık: yeniden bulunan güven, ilham ve geleceğe inanç."
      },
      moon: {
        name: "Ay",
        keywords: ["Düşler", "Kuşkular", "Hayal gücü"],
        text: "Sezgilerin ve yanılsamaların dünyası: korkuların içinden geçmek, düşleri dinleyip onlarda kaybolmamak."
      },
      sun: {
        name: "Güneş",
        keywords: ["Neşe", "Başarı", "Açıklık"],
        text: "Parıltı ve canlılık: başarı, sıcak bağlar ve gün ışığında paylaşılan mutluluk."
      },
      judgement: {
        name: "Yargı",
        keywords: ["Uyanış", "Çağrı", "Yeniden doğuş"],
        text: "Uyanmaya bir çağrı: muhasebe, bağışlama ve bir yeniden doğuş gibi yeni bir başlangıç."
      },
      world: {
        name: "Dünya",
        keywords: ["Tamamlanma", "Doluluk", "Bütünlük"],
        text: "Döngü güzellikle kapanır: tam başarı, uyum ve dünyaya açılış."
      }
    },
    marseilleNames: {
      fool: "Deli",
      magician: "Hokkabaz",
      priestess: "Kadın Papa",
      hierophant: "Papa",
      lovers: "Âşık",
      wheel: "Talih Çarkı",
      death: "İsimsiz Arkana",
      tower: "Tanrı'nın Evi"
    },
    spreadTitle: "Üç kartlık açılım",
    spreadIntro: "Bugün sizin için önemli olan soruyu düşünüp ifade etmek için bir an ayırın, sonra kartları çekin.",
    spreadDraw: "Kartları çek",
    spreadAgain: "Yeni soru",
    spreadPast: "Geçmiş",
    spreadPresent: "Şimdi",
    spreadFuture: "Gelecek",
    spreadNote: "Günde tek bir açılım; yarına kadar saklanır. Gelecek bir eğilimi gösterir, bir kaderi değil.",
    spreadQuestionLabel: "Sorunuz",
    spreadQuestionHint: "Örneğin: «Bu durumdan ne anlamam gerekiyor?»",
    spreadFlip: "Çevirmek için her karta dokunun.",
    spreadFlipAria: "Kartı çevir: {pos}",
    spreadTomorrow: "Bugünkü açılımınız yapıldı. Sonraki açılım: yarın.",
    artCredit: "Kart çizimleri Gemini (Google) ve ChatGPT (OpenAI) ile üretilmiştir.",
    reversedToggle: "Ters kartlar",
    reversedBadge: "Ters",
    reversed: {
      fool: {
        keywords: ["Pervasızlık", "Tereddüt", "Dağınıklık"],
        text: "Coşku, pervasızlığa ya da atlama korkusuna çarpıyor: adımını nereye attığına bakmak için zaman ayır."
      },
      magician: {
        keywords: ["Kendinden şüphe", "Manipülasyon", "Kullanılmayan yetenekler"],
        text: "Araçlar orada ama yanlış kullanılıyor: şüphe, dağınıklık ya da aldatma isteği; doğru bir niyete geri dön."
      },
      priestess: {
        keywords: ["Sırlar", "Duyulmayan sezgi", "İçe kapanma"],
        text: "Sezgi bastırılıyor ya da gerçek gizli kalıyor: içinde duymak istemediğin şeyi dinle."
      },
      empress: {
        keywords: ["Yaratıcı tıkanıklık", "Bağımlılık", "Aşırılık"],
        text: "Yaratım duraksıyor ya da fazla vererek kendini unutuyorsun: başkalarına ve kendine gösterdiğin özeni dengele."
      },
      emperor: {
        keywords: ["Katılık", "Baskıcılık", "Düzensizlik"],
        text: "Çerçeve kafese dönüşüyor ya da elden kayıyor: ne fazla ne az, doğru kararlılığı ara."
      },
      hierophant: {
        keywords: ["Sorgulama", "Dogmatizm", "Özgürlük"],
        text: "Yerleşik kurallar ağır geliyor ya da sorgulanıyor: aktarılan tüm bilgeliği reddetmeden kendi yolunu bul."
      },
      lovers: {
        keywords: ["Anlaşmazlık", "Kararsızlık", "Dengesizlik"],
        text: "Zor bir seçim ya da sallantılı bir ilişki: bağlanmadan önce kalbini ve değerlerini uyumlu hale getir."
      },
      chariot: {
        keywords: ["Yön kaybı", "Dağınıklık", "Engeller"],
        text: "Güçler zıt yönlere çekiyor: ilerlemeden önce dizginleri yeniden ele al."
      },
      strength: {
        keywords: ["Kendinden şüphe", "Sabırsızlık", "Öfke"],
        text: "Güven sarsılıyor ya da dürtüsellik ağır basıyor: kendine karşı yumuşaklık ve sabırla yeniden bağ kur."
      },
      hermit: {
        keywords: ["Yalnızlaşma", "Aşırı içe kapanma", "Öğüt reddi"],
        text: "Yalnızlık tecride dönüşüyor: ışığını paylaşma ve başkalarınınkini kabul etme zamanı."
      },
      wheel: {
        keywords: ["Aksilikler", "Değişime direnç", "Tekrar"],
        text: "Döngü takılmış ya da ters işliyor gibi: akıntıya karşı savaşmak yerine değişime eşlik et."
      },
      justice: {
        keywords: ["Taraflılık", "Dengesizlik", "İnkâr"],
        text: "Çarpık bir karar ya da bir dengesizlik: sorumluluktaki payına dürüstçe bak."
      },
      hangedman: {
        keywords: ["Durgunluk", "Gereksiz fedakârlık", "Direnç"],
        text: "Bekleyiş hareketsizliğe dönüşüyor: gerçekten bırak ya da sonunda harekete geçmeye karar ver."
      },
      death: {
        keywords: ["Direnç", "Bırakma korkusu", "Yavaşlık"],
        text: "Bir son, bırakma korkusuyla erteleniyor: yenilenme, sayfayı çevirmeni bekliyor."
      },
      temperance: {
        keywords: ["Aşırılık", "Dengesizlik", "Acele"],
        text: "Orta yol kaybolmuş: aşırılık, acele ya da gerginlik; ölçülülüğe geri dön."
      },
      devil: {
        keywords: ["Kurtuluş", "Farkındalık", "Kopuş"],
        text: "Bağlar gevşiyor: bir farkındalık anı ve seni tutan şeyden kurtulma fırsatı."
      },
      tower: {
        keywords: ["İç kriz", "Ertelenen değişim", "Sarsıntı korkusu"],
        text: "Altüst oluş erteleniyor ya da içeride yaşanıyor: değişime katlanmaktansa ona eşlik etmek daha iyi."
      },
      star: {
        keywords: ["Cesaretsizlik", "Kuşku", "Örtülü umut"],
        text: "Umut bir süre soluyor: ışık hâlâ orada, ona yer aç."
      },
      moon: {
        keywords: ["Netleşme", "Dağılan korkular", "Açığa çıkan gerçek"],
        text: "Yanılsamalar yavaş yavaş dağılıyor: karışık olan netleşmeye başlıyor."
      },
      sun: {
        keywords: ["Örtülü neşe", "Gecikmiş başarı", "Aşırı iyimserlik"],
        text: "Işık örtülü ya da gecikiyor: biraz sabır ve açık görüşle başarı hâlâ mümkün."
      },
      judgement: {
        keywords: ["Tereddüt", "Sert yargı", "Duyulmayan çağrı"],
        text: "Çağrıya yanıt vermekte tereddüt ediyor ya da kendini çok sert yargılıyorsun: ilerlemek için kendini bağışla."
      },
      world: {
        keywords: ["Yarım kalan", "Gecikme", "Son adım"],
        text: "Döngü kapanmakta zorlanıyor: tamamlanmadan önce bitirilecek son bir şey kaldı."
      }
    },
    minors: {
      fullDeck: "Tam deste (78 kart)",
      badge: "Küçük arkana",
      suits: {
        wands: { marseille: "Değnekler", ws: "Değnekler", element: "Ateş" },
        cups: { marseille: "Kupalar", ws: "Kupalar", element: "Su" },
        swords: { marseille: "Kılıçlar", ws: "Kılıçlar", element: "Hava" },
        pentacles: { marseille: "Paralar", ws: "Tılsımlar", element: "Toprak" }
      },
      cards: {
        wands_ace: {
          name: { marseille: "Değnek Ası", ws: "Değnek Ası" },
          keywords: ["Atılım", "İlham", "Girişim"],
          text: "Yaratıcı bir kıvılcım beliriyor: Bu dürtüyü kabul edin ve harekete geçme isteğinize küçük bir biçim verin."
        },
        wands_2: {
          name: { marseille: "Değnek İkilisi", ws: "Değnek İkilisi" },
          keywords: ["Öngörü", "Planlama", "Seçim"],
          text: "Ufukta iki yol beliriyor: Kendi arzularınızı gözden kaçırmadan bir yön seçmeye cesaret edin."
        },
        wands_3: {
          name: { marseille: "Değnek Üçlüsü", ws: "Değnek Üçlüsü" },
          keywords: ["Genişleme", "Yeni ufuk", "Ortak heyecan"],
          text: "Bakışınız ilk adımların ötesine uzanıyor: Projenize yeni bir boyut katabilecek paylaşımlara açık olun."
        },
        wands_4: {
          name: { marseille: "Değnek Dörtlüsü", ws: "Değnek Dörtlüsü" },
          keywords: ["Kutlama", "Güvenli alan", "Uyum"],
          text: "Davetkâr bir alan şekilleniyor: Katettiğiniz yolu ve birlikte olmanın verdiği sevinci takdir edin."
        },
        wands_5: {
          name: { marseille: "Değnek Beşlisi", ws: "Değnek Beşlisi" },
          keywords: ["Yüzleşme", "Rekabet", "Çeşitlilik"],
          text: "Farklı istekler karşı karşıya geliyor: Rekabeti bir ego savaşına değil, canlı bir fikir alışverişine dönüştürün."
        },
        wands_6: {
          name: { marseille: "Değnek Altılısı", ws: "Değnek Altılısı" },
          keywords: ["Takdir", "Özgüven", "Başarı"],
          text: "Emekleriniz karşılık buluyor: Başkalarının beğenisini kendi pusulanız hâline getirmeden teşvikleri kabul edin."
        },
        wands_7: {
          name: { marseille: "Değnek Yedilisi", ws: "Değnek Yedilisi" },
          keywords: ["Cesaret", "Duruş", "Sebat"],
          text: "Yeriniz için kararlı durmanız gerekiyor: Başkalarına kapanmadan sınırlarınızı sakinlikle savunun."
        },
        wands_8: {
          name: { marseille: "Değnek Sekizlisi", ws: "Değnek Sekizlisi" },
          keywords: ["Hareket", "Akıcılık", "Haber"],
          text: "Olaylar havada uçan oklar gibi hızlanıyor: Açık bir yön duygusunu koruyarak bu ivmeden yararlanın."
        },
        wands_9: {
          name: { marseille: "Değnek Dokuzlusu", ws: "Değnek Dokuzlusu" },
          keywords: ["Dayanıklılık", "Dikkat", "Direnç"],
          text: "Son bir aşama kararlılığınızı sınayabilir: Kuşkunun her yanı kaplamasına izin vermeden gücünüzü koruyun."
        },
        wands_10: {
          name: { marseille: "Değnek Onlusu", ws: "Değnek Onlusu" },
          keywords: ["Sorumluluk", "Yük", "Bağlılık"],
          text: "Değnekler bir yük hâline geliyor: Görevleri paylaşın ve kendi sorumluluklarınızı başkalarının beklentilerinden ayırın."
        },
        wands_page: {
          name: { marseille: "Değnek Valesi", ws: "Değnek Uşağı" },
          keywords: ["Merak", "Keşif", "Atılganlık"],
          text: "Meraklı bir haberci yeni bir fikri araştırıyor: Her şeyi öğrenmeyi beklemeden denemeye cesaret edin."
        },
        wands_knight: {
          name: { marseille: "Değnek Şövalyesi", ws: "Değnek Şövalyesi" },
          keywords: ["Heyecan", "Hareket", "Atılganlık"],
          text: "Bir şövalye coşkusuyla ilerliyor: Sizi harekete geçiren şeyin peşinden giderken sonuçlarını da düşünün."
        },
        wands_queen: {
          name: { marseille: "Değnek Kraliçesi", ws: "Değnek Kraliçesi" },
          keywords: ["Işıltı", "Özgüven", "Yaratıcılık"],
          text: "Sıcak bir varlık çevresine ilham veriyor: Yaratıcılığınıza güvenin ve içinizdeki heyecanı paylaşın."
        },
        wands_king: {
          name: { marseille: "Değnek Kralı", ws: "Değnek Kralı" },
          keywords: ["Önderlik", "Vizyon", "Girişim"],
          text: "Açık bir irade yön gösteriyor: Başkalarına da alan bırakarak girişimlerinizi cesaretle yönlendirin."
        },
        cups_ace: {
          name: { marseille: "Kupa Ası", ws: "Kupa Ası" },
          keywords: ["Kalp açıklığı", "Duyarlılık", "Yeni duygu"],
          text: "Bir kupa taze suyla dolup taşıyor: Beliren duyguları sıkıca tutmaya çalışmadan karşılayın."
        },
        cups_2: {
          name: { marseille: "Kupa İkilisi", ws: "Kupa İkilisi" },
          keywords: ["Karşılaşma", "Karşılıklılık", "Uzlaşma"],
          text: "İki kupa birbirine karşılık veriyor: Her iki kişinin de duyulduğu ve değer gördüğü bir bağı besleyin."
        },
        cups_3: {
          name: { marseille: "Kupa Üçlüsü", ws: "Kupa Üçlüsü" },
          keywords: ["Dostluk", "Paylaşım", "Ortak sevinç"],
          text: "Kupalar birlikte havaya kalkıyor: Paylaşıldıkça büyüyen sevinci ve dostluk bağlarını kutlayın."
        },
        cups_4: {
          name: { marseille: "Kupa Dörtlüsü", ws: "Kupa Dörtlüsü" },
          keywords: ["İçe bakış", "Bezginlik", "Geri durma"],
          text: "Bir kupa hâlâ gözünüzün önünde duruyor: İçten içe sizi neyin etkilediğini hissetmek için zaman ayırın."
        },
        cups_5: {
          name: { marseille: "Kupa Beşlisi", ws: "Kupa Beşlisi" },
          keywords: ["Hayal kırıklığı", "Pişmanlık", "Kabullenme"],
          text: "Kaybedilen şey dikkatinizi çekiyor: Kalan bağları unutmadan üzüntünüze de yer açın."
        },
        cups_6: {
          name: { marseille: "Kupa Altılısı", ws: "Kupa Altılısı" },
          keywords: ["Anılar", "Şefkat", "Cömertlik"],
          text: "Tatlı bir anı tanıdık bir koku gibi dönüyor: Geçmişten güç alın ama orada sıkışıp kalmayın."
        },
        cups_7: {
          name: { marseille: "Kupa Yedilisi", ws: "Kupa Yedilisi" },
          keywords: ["Olasılıklar", "Hayal gücü", "Ayırt etme"],
          text: "Yedi kupa arzunun farklı yüzlerini gösteriyor: Derin isteklerinizi çekici yanılsamalardan ayırın."
        },
        cups_8: {
          name: { marseille: "Kupa Sekizlisi", ws: "Kupa Sekizlisi" },
          keywords: ["Bağı bırakma", "Anlam arayışı", "Bilinçli ayrılış"],
          text: "Bolluğun içinde bile bir eksiklik hissediliyor: Alışkanlıklardan uzaklaşmaya çağıran anlam arayışını dinleyin."
        },
        cups_9: {
          name: { marseille: "Kupa Dokuzlusu", ws: "Kupa Dokuzlusu" },
          keywords: ["Memnuniyet", "Şükran", "Haz"],
          text: "Yan yana kupalar dingin bir sevinci çağrıştırıyor: Rahatlığı tam bir doyumla karıştırmadan kazanımlarınızı tadın."
        },
        cups_10: {
          name: { marseille: "Kupa Onlusu", ws: "Kupa Onlusu" },
          keywords: ["Uyum", "Aidiyet", "Paylaşılan mutluluk"],
          text: "Güven dolu bir çevre ortak sevinci simgeliyor: Herkesin kendisi olabildiği ilişkileri özenle koruyun."
        },
        cups_page: {
          name: { marseille: "Kupa Valesi", ws: "Kupa Uşağı" },
          keywords: ["Sezgi", "Duyarlılık", "Hayranlık"],
          text: "Kupanın içinden beklenmedik bir sürpriz beliriyor: Duygularınıza ve aklınıza gelen yeni fikirlere dikkat edin."
        },
        cups_knight: {
          name: { marseille: "Kupa Şövalyesi", ws: "Kupa Şövalyesi" },
          keywords: ["Romantizm", "Kalbin çağrısı", "Teklif"],
          text: "Bir şövalye kupasını taşıyarak ilerliyor: Karşınızdakinin gerçekliğini unutmadan duygularınıza kulak verin."
        },
        cups_queen: {
          name: { marseille: "Kupa Kraliçesi", ws: "Kupa Kraliçesi" },
          keywords: ["Empati", "Sezgi", "Şefkat"],
          text: "Değerli bir kupa dinlemeye davet ediyor: Herkesin yükünü üstlenmeden duygulara alan açın."
        },
        cups_king: {
          name: { marseille: "Kupa Kralı", ws: "Kupa Kralı" },
          keywords: ["Duygusal olgunluk", "Denge", "İyilikseverlik"],
          text: "Taht dalgaların yanında sarsılmadan duruyor: Duygularınızı yaşayın ama yönetimi bütünüyle onlara bırakmayın."
        },
        swords_ace: {
          name: { marseille: "Kılıç Ası", ws: "Kılıç Ası" },
          keywords: ["Berraklık", "Sağduyu", "Gerçek"],
          text: "Bir kılıç düşüncelerin sisini yarıyor: Bir tavır almadan önce gerçekleri açıkça adlandırın."
        },
        swords_2: {
          name: { marseille: "Kılıç İkilisi", ws: "Kılıç İkilisi" },
          keywords: ["İkilem", "Duraklama", "Denge"],
          text: "Çapraz iki kılıç kararı bekletiyor: Kararsızlığı uzatmadan her iki tarafı da dinleyin."
        },
        swords_3: {
          name: { marseille: "Kılıç Üçlüsü", ws: "Kılıç Üçlüsü" },
          keywords: ["Üzüntü", "Düş kırıklığı", "Hassas gerçek"],
          text: "Acı veren bir gerçek kalbe dokunuyor: Sahip olduğunuz gücü unutmadan üzüntünüze yer açın."
        },
        swords_4: {
          name: { marseille: "Kılıç Dörtlüsü", ws: "Kılıç Dörtlüsü" },
          keywords: ["Dinlenme", "Geri çekilme", "Toparlanma"],
          text: "Kılıçların çevresindeki sessizlik dinlenmeye çağırıyor: Yeniden başlamadan önce düşüncelerinizin durulmasını bekleyin."
        },
        swords_5: {
          name: { marseille: "Kılıç Beşlisi", ws: "Kılıç Beşlisi" },
          keywords: ["Anlaşmazlık", "Güç çekişmesi", "Farkındalık"],
          text: "Bir zafer geride burukluk bırakabilir: Haklı çıkmaya çalışmadan önce tartışmanın bedelini düşünün."
        },
        swords_6: {
          name: { marseille: "Kılıç Altılısı", ws: "Kılıç Altılısı" },
          keywords: ["Geçiş", "Uzaklaşma", "Sakinleşme"],
          text: "İçsel bir kıyıdan ötekine geçmek zaman alıyor: İlerlemenizi kolaylaştıran desteklere açık olun."
        },
        swords_7: {
          name: { marseille: "Kılıç Yedilisi", ws: "Kılıç Yedilisi" },
          keywords: ["Strateji", "Gizlilik", "Bağımsızlık"],
          text: "Dolambaçlı yol açık konuşmaktan kolay görünebilir: Dürüstlükten uzaklaşmadan düşünülmüş bir yol seçin."
        },
        swords_8: {
          name: { marseille: "Kılıç Sekizlisi", ws: "Kılıç Sekizlisi" },
          keywords: ["Algılanan sınırlar", "Şüphe", "Bakış açısı"],
          text: "Düşünceler görünmez engeller çiziyor: Çıkışsız görünen sınırları yeniden sorgulayın."
        },
        swords_9: {
          name: { marseille: "Kılıç Dokuzlusu", ws: "Kılıç Dokuzlusu" },
          keywords: ["Kaygı", "Tekrarlanan düşünceler", "Kırılganlık"],
          text: "Endişeler eski senaryoları canlandırıyor: Kaygılarınızı büyütmek yerine güvendiğiniz biriyle paylaşın."
        },
        swords_10: {
          name: { marseille: "Kılıç Onlusu", ws: "Kılıç Onlusu" },
          keywords: ["Döngünün sonu", "Tükenmişlik", "Bırakabilme"],
          text: "Bir dönemin gücü tükenmiş görünüyor: Artık aynı biçimde süremeyecek olanı kabul edin."
        },
        swords_page: {
          name: { marseille: "Kılıç Valesi", ws: "Kılıç Uşağı" },
          keywords: ["Zihinsel merak", "Gözlem", "Açıklık"],
          text: "Genç bir figür fikirlerin rüzgârını izliyor: Sorular sorun ve eleştirel düşüncenizi geliştirin."
        },
        swords_knight: {
          name: { marseille: "Kılıç Şövalyesi", ws: "Kılıç Şövalyesi" },
          keywords: ["Kararlılık", "Açık sözlülük", "Azim"],
          text: "Bir şövalye rüzgârı yarıp ilerliyor: Berrak düşüncenizi ölçülü bir eylemin hizmetine verin."
        },
        swords_queen: {
          name: { marseille: "Kılıç Kraliçesi", ws: "Kılıç Kraliçesi" },
          keywords: ["Ayırt etme", "Bağımsızlık", "Net sınırlar"],
          text: "Bir kraliçe kılıcını güvenle tutuyor: Gerçeğinizi kararlılıkla ama başkalarına açık kalarak dile getirin."
        },
        swords_king: {
          name: { marseille: "Kılıç Kralı", ws: "Kılıç Kralı" },
          keywords: ["İçsel adalet", "Akıl", "Sorumluluk"],
          text: "Bir kral karar vermeden önce gerçekleri değerlendiriyor: Seçimlerinizi anlık ruh hâline değil, düşünceye dayandırın."
        },
        pentacles_ace: {
          name: { marseille: "Para Ası", ws: "Tılsım Ası" },
          keywords: ["Somut fırsat", "Kaynaklar", "Sağlam temel"],
          text: "Açık bir avuçta para duruyor: Umut veren bir fikre küçük ve somut bir başlangıç kazandırın."
        },
        pentacles_2: {
          name: { marseille: "Para İkilisi", ws: "Tılsım İkilisi" },
          keywords: ["Esneklik", "Denge", "Uyum sağlama"],
          text: "İki para sürekli hareket ediyor: Günlük yaşamın talepleri arasında kendi ritminizi ayarlayın."
        },
        pentacles_3: {
          name: { marseille: "Para Üçlüsü", ws: "Tılsım Üçlüsü" },
          keywords: ["İş birliği", "Beceri", "İnşa"],
          text: "Bir eser birçok elin katkısıyla şekilleniyor: Herkesin projeye kattığı beceriyi takdir edin."
        },
        pentacles_4: {
          name: { marseille: "Para Dörtlüsü", ws: "Tılsım Dörtlüsü" },
          keywords: ["Güvenlik", "Koruma", "Kontrol"],
          text: "Dört para özenle saklanıyor: Kazanımlarınızı korurken paylaşma özgürlüğünü unutmayın."
        },
        pentacles_5: {
          name: { marseille: "Para Beşlisi", ws: "Tılsım Beşlisi" },
          keywords: ["Eksiklik hissi", "Yalnızlık", "Dayanışma"],
          text: "Eksiklik duygusu insanı yalnızlaştırabiliyor: Destek istemenin hâlâ mümkün olduğunu hatırlayın."
        },
        pentacles_6: {
          name: { marseille: "Para Altılısı", ws: "Tılsım Altılısı" },
          keywords: ["Cömertlik", "Paylaşım", "Hakkaniyet"],
          text: "Bir el verirken diğeri alıyor: Herkesin ihtiyaçlarına saygılı bir paylaşım gözetin."
        },
        pentacles_7: {
          name: { marseille: "Para Yedilisi", ws: "Tılsım Yedilisi" },
          keywords: ["Sabır", "Değerlendirme", "Olgunlaşma"],
          text: "Hasat henüz yavaşça büyüyor: Sonuçları yargılamadan önce geçtiğiniz yolu değerlendirin."
        },
        pentacles_8: {
          name: { marseille: "Para Sekizlisi", ws: "Tılsım Sekizlisi" },
          keywords: ["Özen", "Öğrenme", "Ustalık"],
          text: "İşlenen her para eli biraz daha ustalaştırıyor: Becerinizi sabır ve merakla geliştirin."
        },
        pentacles_9: {
          name: { marseille: "Para Dokuzlusu", ws: "Tılsım Dokuzlusu" },
          keywords: ["Bağımsızlık", "Ölçülü bolluk", "Huzur"],
          text: "Sabırlı emek rahatlık duygusunu besliyor: Bağımsızlığınızı ve yaşamın küçük zevklerini takdir edin."
        },
        pentacles_10: {
          name: { marseille: "Para Onlusu", ws: "Tılsım Onlusu" },
          keywords: ["Miras", "Sağlamlık", "Süreklilik"],
          text: "Bir miras kuşaklar boyunca taşınıyor: Eşyaların ötesinde aktarılabilen değerlere özen gösterin."
        },
        pentacles_page: {
          name: { marseille: "Para Valesi", ws: "Tılsım Uşağı" },
          keywords: ["Öğrenim", "Pratiklik", "Potansiyel"],
          text: "Genç bir figür elindeki paraya bakıyor: Yeni bir beceriye zaman ve yöntem ayırarak yaklaşın."
        },
        pentacles_knight: {
          name: { marseille: "Para Şövalyesi", ws: "Tılsım Şövalyesi" },
          keywords: ["Güvenilirlik", "İstikrar", "Yöntem"],
          text: "Bir şövalye toprağın ritmiyle ilerliyor: İyi düşünülmüş küçük ve düzenli adımlara güvenin."
        },
        pentacles_queen: {
          name: { marseille: "Para Kraliçesi", ws: "Tılsım Kraliçesi" },
          keywords: ["Günlük özen", "Cömertlik", "Pratiklik"],
          text: "Bir kraliçe verimli bir bahçeye bakıyor: Kaynaklarınıza ve yaşam alanınıza dikkatle özen gösterin."
        },
        pentacles_king: {
          name: { marseille: "Para Kralı", ws: "Tılsım Kralı" },
          keywords: ["İstikrar", "Sorumluluk", "Akıllı yönetim"],
          text: "Bir kral kalıcı bir esere bakıyor: Kaynaklarınızı ölçülü ve paylaşmaya açık bir anlayışla kullanın."
        }
      },
      reversed: {
        wands_ace: {
          keywords: ["Engellenen heves", "Tereddüt", "Dağınıklık"],
          text: "Alev henüz güçlenmiyor: Enerjinizi gerçekten neye ayırmak istediğinizi anlamak için kendinize zaman tanıyın."
        },
        wands_2: {
          keywords: ["Daralan bakış", "Bekleyiş", "Seçim korkusu"],
          text: "Ufuk biraz daralmış görünüyor: Yola çıkmadan önce önceliklerinizi belirlemek tereddüdünüzü hafifletebilir."
        },
        wands_3: {
          keywords: ["Gecikme", "Sabırsızlık", "Belirsiz ufuk"],
          text: "Sonuçlar henüz görünmüyor: İlerlemenizi zorlamak yerine beklentilerinizi yeniden gözden geçirin."
        },
        wands_4: {
          keywords: ["Ertelenen kutlama", "Kırılgan destek", "Anlaşmazlık"],
          text: "Kutlamada bir eksiklik hissediliyor: Her şeyi kutlamadan önce ilişkilerinize ve ortak zemine özen gösterin."
        },
        wands_5: {
          keywords: ["Gizli gerilim", "Kısır çekişme", "Kaçınma"],
          text: "Tartışma uzuyor ya da suskunluğa dönüşüyor: Farklılıkları dile getirin ve rekabetin sizi tüketmesine izin vermeyin."
        },
        wands_6: {
          keywords: ["Onay arayışı", "Şüphe", "Sessiz başarı"],
          text: "Takdir ya eksik kalıyor ya da fazla önem kazanıyor: Yolunuzu alkışlarla değil, değerlerinizle ölçün."
        },
        wands_7: {
          keywords: ["Yorgunluk", "Aşırı savunma", "İçe çekilme"],
          text: "Sürekli tetikte olmak yorucu hâle geliyor: Gücünüzü hak eden konuları seçin ve gerisini bırakın."
        },
        wands_8: {
          keywords: ["Aksama", "Acelecilik", "Karmaşa"],
          text: "İşaretler karışıyor ve ritim bozuluyor: Biraz yavaşlamak adımlarınızı daha yerinde kılabilir."
        },
        wands_9: {
          keywords: ["Birikmiş yorgunluk", "Katı savunma", "Gevşeme"],
          text: "Nöbet tutmak ağırlaşıyor: Yorgunluğunuzu kabul etmek daha sağlıklı bir mesafe kurmanıza yardımcı olabilir."
        },
        wands_10: {
          keywords: ["Aşırı yük", "Görev paylaşımı", "Rahatlama"],
          text: "Yükümlülükler ağırlaşıyor: Her beklentiyi tek başınıza taşımak yerine paylaşılabilecek yükleri hafifletin."
        },
        wands_page: {
          keywords: ["Dağınık heyecan", "Geciken başlangıç", "Tutarsızlık"],
          text: "Keşfetme isteğiniz farklı yönlere dağılıyor: Merakınızın gelişebileceği somut bir alan belirleyin."
        },
        wands_knight: {
          keywords: ["Dürtüsellik", "İstikrarsızlık", "Hayal kırıklığı"],
          text: "Coşku aceleciliğe dönüşüyor: Bu hızın sizi sürüklemesine izin vermeden kısa bir ara verin."
        },
        wands_queen: {
          keywords: ["Kıyaslama", "Bastırılmış enerji", "Alınganlık"],
          text: "İçinizdeki ışık başkalarının bakışıyla dalgalanıyor: Özgüveninizi karşılaştırmaların dışında besleyin."
        },
        wands_king: {
          keywords: ["Katı otorite", "Sabırsızlık", "Denetim"],
          text: "Yönetme arzusu fazla yer kaplıyor: Başkalarını dinlemek gerçek etkinizi güçlendirebilir."
        },
        cups_ace: {
          keywords: ["Bastırılmış duygular", "Geri çekilme", "Kırılganlık"],
          text: "Kupa kapalı görünüyor: Duygularınıza ifade bulabilecekleri güvenli bir alan ve zaman tanıyın."
        },
        cups_2: {
          keywords: ["Dengesizlik", "Kırılgan diyalog", "Mesafe"],
          text: "İki kupanın yansıması bulanıklaşıyor: Kendi ihtiyaçlarınızdan vazgeçmeden diyaloğu yeniden kurun."
        },
        cups_3: {
          keywords: ["Dağınıklık", "Yalnızlaşma", "Aşırılık"],
          text: "Grubun uyumu zayıflamış görünüyor: Ne pahasına olursa olsun eğlenmek yerine içten sohbetleri arayın."
        },
        cups_4: {
          keywords: ["Kapanma", "Hoşnutsuzluk", "İçsel uyanış"],
          text: "İçe kapanma sürüyor ya da çözülüyor: Bir teklife farklı bakmak isteğinizi yeniden canlandırabilir."
        },
        cups_5: {
          keywords: ["Hafifleme", "Yeni bakış", "Barışma"],
          text: "Bakışınız yavaşça eksik olandan uzaklaşıyor: Onarılabilecek şeyler için yeni bir alan açılabilir."
        },
        cups_6: {
          keywords: ["Ağır nostalji", "İdealleştirme", "Unutulan bugün"],
          text: "Anılar fazla yer kaplıyor: Onların sıcaklığını korurken bugünün sunduklarını da karşılayın."
        },
        cups_7: {
          keywords: ["Yanılsama", "Kararsızlık", "Aşırı düş kurma"],
          text: "Çekici görüntüler seçiminizi bulandırıyor: Basit ihtiyaçlarınıza dönmek gerçeği görmenizi kolaylaştırabilir."
        },
        cups_8: {
          keywords: ["Bağlılık", "Ertelenen ayrılık", "Tereddüt"],
          text: "Yolda atılacak adım askıda kalıyor: Yeni bir sayfa açmadan önce sizi neyin tuttuğunu araştırın."
        },
        cups_9: {
          keywords: ["Hoşnutsuzluk", "Aşırılık", "Yüzeysel sevinç"],
          text: "Kupaların ardındaki gülümseme zorlama görünüyor: Görünüşlerin ötesinde sizi neyin beslediğini düşünün."
        },
        cups_10: {
          keywords: ["Mükemmellik beklentisi", "Aile gerilimi", "Onarım ihtiyacı"],
          text: "Kusursuz mutluluk görüntüsü çatlıyor: Görünürdeki uyum yerine samimi ilişkileri önemseyin."
        },
        cups_page: {
          keywords: ["Çekingenlik", "Hayalcilik", "Saklanan duygular"],
          text: "Kalbin mesajı yarım kalıyor: Basit bir duyguyu dile getirmek tereddütlerinizi yumuşatabilir."
        },
        cups_knight: {
          keywords: ["İdealleştirme", "Belirsiz vaatler", "Düş kırıklığı"],
          text: "Hayal bütün alanı kaplıyor: Beklentilerinizi davranışlar ve gerçeklerle nazikçe karşılaştırın."
        },
        cups_queen: {
          keywords: ["Aşırı hassasiyet", "Belirsiz sınırlar", "Duygusal kapanma"],
          text: "Duyarlılık taşıyor ya da içe çekiliyor: Yumuşak sınırlar koyarak açıklığınızı koruyun."
        },
        cups_king: {
          keywords: ["Gizlenen duygular", "Mesafe", "Duygu denetimi"],
          text: "Sakinlik katı bir maskeye dönüşüyor: Bir duyguyu adlandırmak yakınlığı güçlendirebilir."
        },
        swords_ace: {
          keywords: ["Karmaşa", "Acele yargı", "Gizlenen gerçek"],
          text: "Düşünceler dağılabiliyor ya da sertleşebiliyor: Sonuca varmadan önce inançlarınızı yeniden gözden geçirin."
        },
        swords_2: {
          keywords: ["Kararsızlık", "Kaçınma", "İç gerilim"],
          text: "Ertelenen seçim zihninizde büyüyor: Sizi korkutan şeyi tanımak kararı aydınlatabilir."
        },
        swords_3: {
          keywords: ["İçsel iyileşme", "Hafifleme", "Azalan keder"],
          text: "Bulutlar yavaşça dağılmaya başlıyor: Kendinizi aceleye getirmeden gelen huzura izin verin."
        },
        swords_4: {
          keywords: ["Huzursuzluk", "Ertelenen dinlenme", "Bunalmışlık"],
          text: "Zihin bir türlü dinlenemiyor: Küçük sakin anlar düşüncelerinize yeniden alan açabilir."
        },
        swords_5: {
          keywords: ["Uzayan çatışma", "Kırgınlık", "Gerilimi azaltma"],
          text: "Haklı çıkma isteği ilişkiyi tüketiyor: Geriye atılan bir adım daha sakin bir yol açabilir."
        },
        swords_6: {
          keywords: ["Değişime direnç", "Bağlılık", "Yavaş geçiş"],
          text: "Yolculuk durmuş gibi görünüyor: Hemen kesinlik aramadan kendi hızınızda ilerleyin."
        },
        swords_7: {
          keywords: ["Dolambaçlı yollar", "Güvensizlik", "Gerçeğe dönüş"],
          text: "Söylenmeyenler yolu zorlaştırıyor: Daha fazla açıklık çözülmemiş konuları hafifletebilir."
        },
        swords_8: {
          keywords: ["Engellerin çözülmesi", "Tazelenen güven", "Geniş bakış"],
          text: "Bağlar yavaşça gevşiyor: Duruma başka açıdan bakmak hareket alanınızı genişletebilir."
        },
        swords_9: {
          keywords: ["Yavaş hafifleme", "Mesafe", "Sakinleşen düşünceler"],
          text: "Düşüncelerin yükü azalmaya başlıyor: Gerçekleri sizi korkutan varsayımlardan ayırın."
        },
        swords_10: {
          keywords: ["Yeniden kurma", "Rahatlama", "Yeni bakış"],
          text: "Zorlu bir sürecin ardından ufuk aydınlanıyor: Kendinizi hızlanmaya zorlamadan ilerleyin."
        },
        swords_page: {
          keywords: ["Kuşku", "Acele sözler", "Gerginlik"],
          text: "Merak kuşkuya dönüşüyor: Yanıt vermeden ya da yorum yapmadan önce sonuna kadar dinleyin."
        },
        swords_knight: {
          keywords: ["Acelecilik", "Katılık", "Sert sözler"],
          text: "Düşünceler dinlemenin önüne geçiyor: Kesin kanaatler diyaloğu kapatmadan biraz yavaşlayın."
        },
        swords_queen: {
          keywords: ["Soğukluk", "Aşırı beklenti", "Mesafe"],
          text: "Sağduyu keskin bir tavra dönüşüyor: Çizdiğiniz sınırlarda nezakete de yer bırakın."
        },
        swords_king: {
          keywords: ["Dogmatizm", "Zihinsel denetim", "Katı yargı"],
          text: "İlkeler tartışılmaz doğrulara dönüşüyor: Kararınızı başka görüşlerle yumuşatmayı deneyin."
        },
        pentacles_ace: {
          keywords: ["Ertelenen fırsat", "Durağanlık", "Belirsiz öncelikler"],
          text: "Olasılık henüz tasarı olarak duruyor: İmkânlarınızı gözden geçirip uygulanabilir bir adım seçin."
        },
        pentacles_2: {
          keywords: ["Dağınıklık", "Dengesizlik", "Aşırı yük"],
          text: "İşler hareket eden paralar gibi birbirine karışıyor: Önceliklerinizi sadeleştirip biraz nefes alın."
        },
        pentacles_3: {
          keywords: ["Uyum sorunu", "Yalnız çaba", "Yanlış anlama"],
          text: "Ortak çalışma uyumunu kaybediyor: Rolleri netleştirin ve her katkıya hak ettiği yeri verin."
        },
        pentacles_4: {
          keywords: ["Sıkı tutunma", "Yoksunluk korkusu", "Bırakabilme"],
          text: "Güvenlik bir zırha dönüşüyor: Elinizde tutmaya çalıştığınız şeylere biraz daha esnek yaklaşın."
        },
        pentacles_5: {
          keywords: ["Yeniden destek", "Açılma", "Toparlanma"],
          text: "Önceden görünmeyen bir kapı erişilebilir görünüyor: Yardımı kabul etmek yolu hafifletebilir."
        },
        pentacles_6: {
          keywords: ["Dengesizlik", "Manevi borç", "Koşullu yardım"],
          text: "Verme ve alma söylenmeyen beklentilerle ağırlaşıyor: Özgürce neyin verilip alınabileceğini yeniden belirleyin."
        },
        pentacles_7: {
          keywords: ["Sabırsızlık", "Sorgulanan emek", "Yeniden değerlendirme"],
          text: "Meyvelerin olgunlaşması zaman alıyor: Önceki emeğinizi küçümsemeden yönteminizi yeniden gözden geçirin."
        },
        pentacles_8: {
          keywords: ["Mükemmeliyetçilik", "Tekdüzelik", "Azalan istek"],
          text: "Tekrarlanan iş anlamını yitiriyor: Kusursuzluk aramadan öğrenmenin keyfini yeniden bulun."
        },
        pentacles_9: {
          keywords: ["Seçilen yalnızlık", "Konfora bağımlılık", "Hoşnutsuzluk"],
          text: "Rahatlık artık sevinç vermeye yetmiyor: İlişkilerinize hayatınızda ne kadar yer ayırdığınızı düşünün."
        },
        pentacles_10: {
          keywords: ["Ağır miras", "Aile beklentileri", "Kırılgan düzen"],
          text: "Miras kalan alışkanlıklar daraltıcı olabiliyor: Neyi koruyup neyi değiştirmek istediğinizi seçin."
        },
        pentacles_page: {
          keywords: ["Yöntem eksikliği", "Dikkat dağılması", "Bekleyen proje"],
          text: "Öğrenme isteği dağılıyor: Küçük bir hedef emeklerinize yeniden yön verebilir."
        },
        pentacles_knight: {
          keywords: ["Durağanlık", "Katılık", "Tekrarlı iş"],
          text: "Tedbir her adımı yavaşlatıyor: Özeninizi kaybetmeden biraz esneklik katın."
        },
        pentacles_queen: {
          keywords: ["Aşırı yüklenme", "Kendini unutma", "Maddi kaygı"],
          text: "Her şeyle ilgilenmek ağırlaşıyor: Kendi ihtiyaçlarınıza da ilgi göstermeyi unutmayın."
        },
        pentacles_king: {
          keywords: ["Sahiplenme", "Katılık", "Maddi bağlılık"],
          text: "Güvenlik arayışı kendini sınırlıyor: Değişime ve cömertliğe de yer açın."
        }
      }
    }
  },
  tabs: {
    sky: "Şu anki gökyüzü",
    skySub: "Burç yorumu, gökyüzü haritası, gece",
    compat: "Uyum",
    compatSub: "Bir başka kişiyle",
    numTarot: "Numeroloji ve tarot",
    numTarotSub: "Sayılar ve arkanalar"
  },
  me: {
    set: "Bu benim profilim",
    is: "Profilim",
    saved: "Bu profil her ziyarette doğrudan açılacak.",
    removed: "Bu profil artık otomatik olarak açılmayacak."
  },
  privacyLine: "Bilgileriniz cihazınızda kalır: hiçbir şey çevrim içi gönderilmez veya kaydedilmez.",
  privacyTitle: "Gizlilik",
  version: { label: "Sürüm {v}", available: "Uygulamanın yeni bir sürümü var.", reload: "Yeniden yükle" },
  placeCoordsHint: "Yer bulunamadı mı? GPS koordinatlarını (örneğin 48.8566, 2.3522) ya da bir harita bağlantısını yapıştırın.",
  placeNear: "{city} yakınında",
  placeTz: "Saat dilimi",
  placeTzFrom: "{city} esas alındı, {km} km uzakta",
  cal: {
    title: "Gökyüzü takvimi",
    intro: "Önümüzdeki 30 günün gökyüzü buluşmaları, her gün güncellenir. Bu haftanınkileri ajandanıza ekleyin.",
    period: "Dönem",
    months: "{n} ay",
    catMoon: "Yeni ay ve dolunaylar",
    catEclipses: "Tutulmalar",
    catRetro: "Retrolar",
    catIngress: "Burç değişimleri",
    catTransits: "Haritanızdaki transitler",
    button: "Takvimi indir",
    count: "{n} olay",
    note: "Dosya cihazınızda oluşturulur: Google Takvim'e kendiniz eklediğiniz olaylar dışında hiçbir şey çevrim içi gönderilmez.",
    direct: "düz",
    calName: "Gökyüzü takvimi — {name}",
    thisWeek: "Bu hafta",
    nextWeek: "Gelecek hafta",
    later: "Daha sonra",
    none: "Önümüzdeki 30 günde gökyüzü buluşması yok.",
    addWeek: "Önümüzdeki 7 günü şuraya ekle:",
    toolGoogle: "Google Takvim",
    toolApple: "Apple",
    toolOutlook: "Outlook",
    toolOther: "Diğer (.ics)",
    hintApple: "İndirilen dosyayı açın: iPhone, iPad veya Mac'iniz tüm olayları eklemeyi önerir.",
    hintOutlook: "İndirilen dosyayı açın: Outlook olayları ajandanıza ekler.",
    hintOther: "İndirilen dosyayı açın ya da ajandanıza aktarın (Samsung Takvim, Thunderbird…).",
    hintGoogle: "Bir olayı Google Takvim'e eklemek için ＋'ya dokunun: olay o zaman isteğiniz üzerine Google'a gönderilir.",
    googleImport: "Bilgisayarda tüm haftayı tek seferde içe aktar",
    addOne: "Google Takvim'e ekle",
    weekEmpty: "Önümüzdeki 7 günde gökyüzü buluşması yok: gelecek hafta tekrar gelin!",
    reminder: "📅 Gökyüzü takvimi: sonraki haftayı ekleyin",
    reminderDesc: "Sonraki haftanın gökyüzü buluşmalarını eklemek için Zodyak ve Dekanlar'ı açın."
  },
  print: {
    button: "Yazdır veya PDF olarak kaydet",
    hint: "Bir dosya elde etmek için yazdırma penceresinde «PDF olarak kaydet»i seçin.",
    title: "Doğum haritası — {name}",
    footer: "Bu sayfa {date} tarihinde Zodyak ve Dekanlar ile oluşturuldu. Konumlar efemeritlere göre hesaplanmıştır; yorumlar astroloji geleneğinden gelen sembolik yorumlardır."
  },
  oracle: {
    open: "Evet / Hayır Falı",
    title: "Evet / Hayır Falı",
    hint: "Sorunuzu düşünün, sonra ortaya dokunun",
    ask: "Falı başlat",
    again: "Başka bir soru için ortaya dokunun",
    note: "Eğlence için bir oyun, kehanet değil",
    answers: { yes: "Evet", no: "Hayır", maybe: "Belki", soon: "Yakında" }
  },
  support: {
    open: "Projeyi destekleyin",
    line: "Uygulamayı beğendiniz mi?",
    intro: "Uygulama ücretsizdir ve gizliliğinize saygı duyar. Beğendiyseniz geliştirilmesine destek olabilirsiniz.",
    share: "Uygulamayı paylaşın",
    note: "Bağış, seçtiğiniz platformda yeni bir sekmede yapılır. Uygulama hiçbir şey iletmez."
  }
});
