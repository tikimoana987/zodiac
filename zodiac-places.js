/* ============================================================
   Zodiaque & Décans — villes de naissance
   Lecture de la base GeoNames (zodiac-places-data.js), recherche par les premières lettres, identifiants stables.
   Fonctions pures, sans DOM. Dépend de zodiac-places-data.js (PLACE_TZ, PLACE_DATA) et zodiac-sky-data.js (CITIES).
   ============================================================ */

/* Forme de comparaison : sans accents ni casse, ponctuation remplacée par des espaces, « St » = « Saint » */
function normPlace(s){
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/ß/g, 'ss').replace(/[’'`\-‐.,()]/g, ' ').replace(/\s+/g, ' ').trim()
    .replace(/\bste\b/g, 'sainte').replace(/\bst\b/g, 'saint')
    // Écriture arabe : sans voyelles brèves, variantes de lettres unifiées (y compris graphies persanes et ourdoues),
    // article « ال » ignoré en début de mot — « القاهرة » trouve « قاهره »
    .replace(/[\u064b-\u065f\u0670]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/[ةۃہھ]/g, 'ه').replace(/[ىی]/g, 'ي').replace(/ک/g, 'ك')
    .replace(/(^|\s)ال(?=\S{2,})/g, '$1');
}

/* Base décodée à la première utilisation (≈ 34 000 villes, triées par pays puis de la plus peuplée à la moins peuplée) */
let PLACES = null;
function loadPlaces(){
  if (PLACES) return PLACES;
  const list = [];
  let cc = '';
  for (const line of PLACE_DATA.split('\n')) {
    if (!line) continue;
    if (line[0] === '=') { cc = line.slice(1); continue; }
    const [name, code, alts] = line.split(';');
    list.push({
      name, country: cc,
      lat: parseInt(code.slice(0, 3), 36) / 100 - 90,
      lon: parseInt(code.slice(3, 6), 36) / 100 - 180,
      tz: PLACE_TZ[parseInt(code.slice(6, 8), 36)],
      pop: parseInt(code[8], 36),
      alts: alts ? alts.split('|') : []
    });
  }
  // Identifiant : « nom|PAYS », complété des coordonnées quand le nom existe deux fois dans le même pays
  const count = {};
  for (const p of list) { const k = `${p.name}|${p.country}`; count[k] = (count[k] || 0) + 1; }
  for (const p of list) {
    const k = `${p.name}|${p.country}`;
    p.key = count[k] > 1 ? `${k}|${p.lat.toFixed(2)}|${p.lon.toFixed(2)}` : k;
    p.norm = normPlace(p.name);
    p.normAlts = p.alts.map(normPlace);
  }
  PLACES = list;
  return list;
}

/* Recherche : nom complet (4), début du nom (3), début d'un mot du nom (2) ; un nom dans une autre langue compte
   un demi-point de moins que le nom principal ; à score égal, la ville la plus peuplée d'abord. Un article en tête (« Le Caire », « La Havane ») est ignoré. */
const PLACE_ARTICLES = /^(le|la|les|l|el|al|the|il|lo|o|a|os|as|der|die|das)\s+(?=\S)/;
function searchPlaces(query, limit = 8){
  const q0 = normPlace(query);
  if (!q0) return [];
  const qs = [...new Set([q0, q0.replace(PLACE_ARTICLES, '')])];
  const found = [];
  for (const p of loadPlaces()) {
    let score = 0;
    [p.norm, ...p.normAlts].forEach((n, k) => {
      if (score === 4) return;
      for (const q of qs) {
        let s = n === q ? 4 : n.startsWith(q) ? 3 : (' ' + n).includes(' ' + q) ? 2 : 0;
        if (s && k) s -= 0.5;          // trouvé par un nom dans une autre langue
        if (s > score) score = s;
      }
    });
    if (score) found.push([score, p]);
  }
  found.sort((a, b) => b[0] - a[0] || b[1].pop - a[1].pop || a[1].name.localeCompare(b[1].name));
  return found.slice(0, limit).map(f => f[1]);
}

/* Ville à partir de son identifiant (adresse, historique, appareil).
   Accepte aussi l'ancien format : nom d'une des 123 villes de CITIES (« Paris », « 東京 Tokyo »),
   rattaché à la ville la plus proche de la base dans le même pays. Renvoie null si inconnu. */
function birthPlace(key){
  if (!key) return null;
  if (String(key)[0] === '@') {   // coordonnées saisies : « @lat,lon,fuseau »
    const [la, lo, ...tz] = String(key).slice(1).split(',');
    const c = parseCoords(`${la}, ${lo}`);
    return c ? coordsPlace(c.lat, c.lon, tz.join(',')) : null;
  }
  const parts = String(key).split('|');
  if (parts.length >= 2 && /^[A-Z]{2}$/.test(parts[1])) {
    const [name, cc, la, lo] = parts;
    const same = loadPlaces().filter(p => p.name === name && p.country === cc);
    if (!same.length) return null;
    if (la === undefined) return same[0];
    return same.reduce((a, b) => Math.hypot(b.lat - la, b.lon - lo) < Math.hypot(a.lat - la, a.lon - lo) ? b : a);
  }
  const c = CITIES.find(x => x[0] === key);
  if (!c) return null;
  // Villes proches dans le même pays ; on préfère celle du même nom (« 東京 Tokyo » → Tokyo), sinon la plus proche
  const words = normPlace(c[0]).split(' ');
  const near = loadPlaces().filter(p => p.country === c[1])
    .map(p => [Math.hypot(p.lat - c[2], (p.lon - c[3]) * Math.cos(c[2] * Math.PI / 180)), p])
    .filter(([d]) => d < 0.35).sort((a, b) => a[0] - b[0]);
  const same = near.find(([, p]) => words.includes(p.norm) || normPlace(c[0]) === p.norm || p.normAlts.some(a => words.includes(a)));
  const best = same || near[0];
  return best ? best[1] : { name: c[0], country: c[1], lat: c[2], lon: c[3], tz: c[4], key: c[0], alts: [] };
}

/* Nom affiché dans l'écriture de la langue choisie, seulement là où le choix est fiable (grandes villes) :
   la base indique l'écriture d'un nom, pas sa langue. Le cyrillique, l'alphabet arabe ou le devanagari servent à
   plusieurs langues (« Лондан » est biélorusse) et le coréen mêle noms anciens et actuels (경성 / 서울) :
   ces langues gardent le nom de la base, avec le pays traduit. La recherche accepte, elle, toutes les écritures.
   Japonais : katakana pour les villes étrangères (パリ), idéogrammes japonais pour le Japon et le monde chinois (東京, 北京) ;
   les transcriptions en hiragana (おおさかし) sont écartées. */
const KATAKANA = /^[\u30a0-\u30ff\u30fc・ ]+$/, HAN = /[\u4e00-\u9fff]/, HAN_FIRST = ['JP', 'CN', 'TW', 'HK', 'MO'];
const PLACE_SCRIPTS = { ja: [KATAKANA, HAN], zh: [HAN], th: [/[\u0e00-\u0e7f]/] };
/* Caractères propres au chinois simplifié, et propres aux formes traditionnelle ou japonaise, fréquents dans les noms
   de villes : ils permettent de choisir 東京 (japonais) plutôt que 东京 (chinois simplifié), et inversement. */
const HAN_SIMPLIFIED = /[东马尔伦罗亚兰华纽约维贝开乌库汉广门达来莱卢苏杰诺圣萨济汤乔迈兹赛滨岛冈泽关长县宁庆阳连鲁齐庄际郑纳顿仑仓腊坚]/;
const HAN_NOT_SIMPLIFIED = /[東馬爾倫羅亞蘭華紐約維貝開烏庫漢廣門達來萊盧蘇傑諾聖薩濟湯喬邁茲賽濱島岡澤關長縣寧慶陽連魯齊莊際鄭納頓崙倉臘堅広沢関県浜]/;
function placeName(p, lang){
  let scripts = PLACE_SCRIPTS[lang] || [];
  if (lang === 'ja' && HAN_FIRST.includes(p.country)) scripts = [HAN, KATAKANA];
  for (const rx of scripts) {
    const cand = p.alts.filter(x => rx.test(x));
    const han = rx.test('京');
    const ok = han && lang === 'ja' ? cand.filter(x => !HAN_SIMPLIFIED.test(x))
             : han && lang === 'zh' ? cand.filter(x => !HAN_NOT_SIMPLIFIED.test(x)).concat(cand) : cand;
    if (ok.length) return ok[0];
  }
  return p.name;
}

/* ---------- Coordonnées GPS saisies (lieu absent de la base) ----------
   Formats lus : décimal « 48.8566, 2.3522 », « 48,8566 ; 2,3522 », « -33.87 151.21 », avec lettres « 40.71° N, 74.01° W »
   (O = ouest), degrés-minutes-secondes « 48°51'24"N 2°21'08"E », liens Google Maps (!3d…!4d…, @lat,lon, q=lat,lon),
   OpenStreetMap (mlat/mlon, #map=z/lat/lon) et Apple Plans (ll=lat,lon). Retour : { lat, lon } ou null. */
function parseCoords(text){
  const s0 = String(text || '').trim();
  if (!s0) return null;
  const ok = (la, lo) => Number.isFinite(la) && Number.isFinite(lo) && Math.abs(la) <= 90 && Math.abs(lo) <= 180 && !(la === 0 && lo === 0)
    ? { lat: Math.round(la * 1e4) / 1e4, lon: Math.round(lo * 1e4) / 1e4 } : null;
  // Liens de cartes
  if (/^https?:\/\/|maps\.|openstreetmap|goo\.gl/i.test(s0)) {
    const pats = [/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/, /[?&]mlat=(-?\d+(?:\.\d+)?)&mlon=(-?\d+(?:\.\d+)?)/,
      /#map=\d+(?:\.\d+)?\/(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)/, /[?&](?:q|query|ll|sll|daddr|center|destination)=(-?\d+(?:\.\d+)?)(?:,|%2C)\s*(-?\d+(?:\.\d+)?)/i,
      /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/];
    for (const p of pats) { const m = s0.match(p); if (m) return ok(parseFloat(m[1]), parseFloat(m[2])); }
    return null;
  }
  // Texte : symboles unifiés, espaces superflus retirés autour des symboles et des lettres d'hémisphère
  let s = s0.replace(/[′’‘`´]/g, "'").replace(/[″”“]|''/g, '"').replace(/º/g, '°')
            .replace(/\s+([°'"])/g, '$1')                          // pas d'espace avant un symbole
            .replace(/°\s+(?=\d+(?:[.,]\d+)?')/g, '°')              // « 48° 51' » : minutes rattachées aux degrés
            .replace(/'\s+(?=\d+(?:[.,]\d+)?")/g, "'");             // « 51' 24" » : secondes rattachées aux minutes
  s = /^[NSEWO]\s*[-+]?\d/i.test(s)
    ? s.replace(/([NSEWO])\s+(?=[-+]?\d)/gi, '$1')                 // lettre devant : « N 48°… E 2°… »
    : s.replace(/([\d°'"])\s+([NSEWO])\b/gi, '$1$2');              // lettre derrière : « 48.85 N, 2.35 E »
  const one = part => {
    const m = part.trim().match(/^([NSEWO])?([-+]?\d+(?:[.,]\d+)?)(?:°(?:(\d+(?:[.,]\d+)?)')?(?:(\d+(?:[.,]\d+)?)")?)?([NSEWO])?$/i);
    if (!m || (m[1] && m[5])) return null;
    const num = x => x ? parseFloat(x.replace(',', '.')) : 0;
    let v = Math.abs(num(m[2])) + num(m[3]) / 60 + num(m[4]) / 3600;
    const hemi = (m[1] || m[5] || '').toUpperCase();
    if (m[2].startsWith('-') || 'SWO'.includes(hemi) && hemi) v = -v;
    return { v, axis: hemi ? ('NS'.includes(hemi) ? 'lat' : 'lon') : '' };
  };
  const splits = [/\s*;\s*/, /,\s+/, /\s*,\s*/, /\s+/];
  for (const rx of splits) {
    const parts = s.split(rx).filter(Boolean);
    if (parts.length !== 2) continue;
    const a = one(parts[0]), b = one(parts[1]);
    if (!a || !b) continue;
    if (a.axis && a.axis === b.axis) return null;
    const [la, lo] = a.axis === 'lon' || b.axis === 'lat' ? [b.v, a.v] : [a.v, b.v];
    return ok(la, lo);
  }
  return null;
}
/* Villes les plus proches d'un point (distance en km, approximation équirectangulaire suffisante à cette échelle) */
function nearestPlaces(lat, lon, n = 12){
  const k = Math.PI / 180, out = [];
  for (const p of loadPlaces()) {
    const dx = (p.lon - lon) * Math.cos((p.lat + lat) / 2 * k), dy = p.lat - lat;
    out.push([Math.hypot(dx > 180 ? 360 - dx : dx < -180 ? 360 + dx : dx, dy) * 111.2, p]);
  }
  return out.sort((a, b) => a[0] - b[0]).slice(0, n).map(([km, p]) => ({ km, p }));
}
/* Lieu défini par ses coordonnées : fuseau donné, sinon celui de la ville la plus proche ; fuseaux des environs proposés */
function coordsPlace(lat, lon, tz){
  const near = nearestPlaces(lat, lon, 12), ref = near[0];
  const choices = [...new Set(near.map(x => x.p.tz))];
  const zone = tz && PLACE_TZ.includes(tz) ? tz : ref.p.tz;
  if (!choices.includes(zone)) choices.unshift(zone);
  const fmt = (v, pos, neg) => `${Math.abs(v).toFixed(4)}°${v >= 0 ? pos : neg}`;
  return { name: `${fmt(lat, 'N', 'S')} ${fmt(lon, 'E', 'W')}`, country: ref.p.country, lat, lon, tz: zone, key: `@${lat},${lon},${zone}`,
           coords: true, ref: ref.p, refKm: ref.km, tzChoices: choices, alts: [], norm: '', normAlts: [] };
}
