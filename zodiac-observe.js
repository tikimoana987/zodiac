/* ============================================================
   Zodiaque & Décans — observation depuis un lieu
   Éclipses de Soleil vues d'un lieu (contacts, part du Soleil cachée), levers et couchers, crépuscules,
   programme de la nuit (Lune, nuit noire, planètes visibles). Fonctions pures, sans DOM.
   Dépend de zodiac-astro.js (sunLongitude, sunDistance), zodiac-planets.js (Lune, planètes) et zodiac-skymap.js.
   ============================================================ */

const EARTH_RADIUS_KM = 6378.137, MOON_RADIUS_KM = 1737.4, AU_KM = 149597870.7;
const SUN_SEMIDIAMETER_1AU = 959.63 / 3600;     // degrés, à 1 UA
const HORIZON = -0.833;                          // bord supérieur à l'horizon, réfraction comprise (Soleil et Lune)

/* Coordonnées géocentriques de l'observateur (aplatissement terrestre, Meeus chap. 11), au niveau de la mer */
function observerFactors(lat){
  const u = Math.atan(0.99664719 * Math.tan(lat * DEG));
  return { rs: 0.99664719 * Math.sin(u), rc: Math.cos(u) };
}
/* Position vue depuis la surface (parallaxe), à partir de la position géocentrique (Meeus chap. 40, forme rigoureuse).
   dist en rayons terrestres ; renvoie ascension droite, déclinaison (degrés) et distance (rayons terrestres). */
function topocentric(ra, dec, dist, lat, lon, ms){
  const { rs, rc } = observerFactors(lat), lst = gmst(ms) + lon;
  const H = (lst - ra) * DEG, d = dec * DEG;
  const A = Math.cos(d) * Math.sin(H) * dist, B = Math.cos(d) * Math.cos(H) * dist - rc, C = Math.sin(d) * dist - rs;
  const q = Math.hypot(A, B, C);
  return { ra: norm360(lst - Math.atan2(A, B) / DEG), dec: Math.asin(C / q) / DEG, dist: q };
}
/* Soleil et Lune vus du lieu : positions, rayons apparents (degrés), séparation des centres (degrés) */
function sunMoonFrom(lat, lon, ms){
  const eps = obliquity(julianCenturies(ms));
  const [sra, sdec] = eclToEq(sunLongitude(ms), 0, eps), sunAu = sunDistance(ms);
  const [mra, mdec] = eclToEq(moonLongitude(ms), bodyLatitude('moon', ms), eps);
  const sun = topocentric(sra, sdec, sunAu * AU_KM / EARTH_RADIUS_KM, lat, lon, ms);
  const moon = topocentric(mra, mdec, moonDistance(ms) / EARTH_RADIUS_KM, lat, lon, ms);
  const cosSep = Math.sin(sun.dec * DEG) * Math.sin(moon.dec * DEG) + Math.cos(sun.dec * DEG) * Math.cos(moon.dec * DEG) * Math.cos((sun.ra - moon.ra) * DEG);
  return {
    sun, moon, sep: Math.acos(Math.min(1, cosSep)) / DEG,
    rs: SUN_SEMIDIAMETER_1AU / (sun.dist * EARTH_RADIUS_KM / AU_KM),
    rm: Math.asin(MOON_RADIUS_KM / (moon.dist * EARTH_RADIUS_KM)) / DEG,
    sunAlt: altAz(sun.ra, sun.dec, lat, lon, ms).alt
  };
}
/* Part de la surface du Soleil cachée par la Lune (0 à 1) : aire de l'intersection de deux disques */
function obscuration(rs, rm, s){
  if (s >= rs + rm) return 0;
  if (s <= Math.abs(rs - rm)) return rm >= rs ? 1 : (rm * rm) / (rs * rs);
  const a = Math.acos((s * s + rs * rs - rm * rm) / (2 * s * rs)), b = Math.acos((s * s + rm * rm - rs * rs) / (2 * s * rm));
  const k = Math.sqrt((-s + rs + rm) * (s + rs - rm) * (s - rs + rm) * (s + rs + rm));
  return (rs * rs * a + rm * rm * b - k / 2) / (Math.PI * rs * rs);
}
/* Instant où f change de signe entre a et b (bissection, à la seconde) */
function bisect(f, a, b){
  let fa = f(a);
  for (let k = 0; k < 40 && b - a > 1000; k++) {
    const m = (a + b) / 2, fm = f(m);
    if ((fm < 0) === (fa < 0)) { a = m; fa = fm; } else b = m;
  }
  return Math.round((a + b) / 2);
}

/* ---------- Éclipse de Soleil vue d'un lieu ----------
   t0 : instant de l'éclipse (table ECLIPSES). Renvoie null si la Lune ne touche pas le Soleil vu de ce lieu,
   sinon { visible, kind ('partial' | 'total' | 'annular'), start, end, max (ms), central: {start, end} | null,
   obscuration (part de la surface cachée, 0 à 1), magnitude (part du diamètre couverte), sunAlt (au maximum),
   risesEclipsed, setsEclipsed (le Soleil se lève ou se couche éclipsé) }. Les heures sont limitées à la période
   où le Soleil est au-dessus de l'horizon ; visible = false si l'éclipse a lieu Soleil couché. */
function solarEclipseLocal(t0, lat, lon){
  const at = ms => sunMoonFrom(lat, lon, ms);
  const contact = ms => { const p = at(ms); return p.sep - (p.rs + p.rm); };
  // Recherche du rapprochement maximal sur ±4 h (pas de 2 min), puis affinage à la seconde
  let best = null;
  for (let ms = t0 - 4 * 3600e3; ms <= t0 + 4 * 3600e3; ms += 120e3) { const p = at(ms); if (!best || p.sep - p.rs - p.rm < best.v) best = { ms, v: p.sep - p.rs - p.rm }; }
  if (best.v >= 0) return null;
  let lo = best.ms - 120e3, hi = best.ms + 120e3;
  for (let k = 0; k < 40 && hi - lo > 500; k++) {                        // section dorée sur la séparation
    const m1 = lo + (hi - lo) * 0.382, m2 = lo + (hi - lo) * 0.618;
    if (contact(m1) < contact(m2)) hi = m2; else lo = m1;
  }
  const tMax = Math.round((lo + hi) / 2);
  let start = tMax, end = tMax;
  while (contact(start - 300e3) < 0) start -= 300e3;
  while (contact(end + 300e3) < 0) end += 300e3;
  start = bisect(contact, start - 300e3, start); end = bisect(contact, end, end + 300e3);
  // Phase centrale (totale ou annulaire) : séparation inférieure à la différence des rayons
  const central = ms => { const p = at(ms); return p.sep - Math.abs(p.rs - p.rm); };
  let centralSpan = null;
  if (central(tMax) < 0) {
    let a = tMax, b = tMax;
    while (central(a - 30e3) < 0) a -= 30e3;
    while (central(b + 30e3) < 0) b += 30e3;
    centralSpan = { start: bisect(central, a - 30e3, a), end: bisect(central, b, b + 30e3) };
  }
  const pMax = at(tMax);
  const kind = centralSpan ? (pMax.rm >= pMax.rs ? 'total' : 'annular') : 'partial';
  // Partie visible : Soleil au-dessus de l'horizon (pas de 2 min, puis affinage)
  const up = ms => at(ms).sunAlt - HORIZON;
  // Échantillons de 2 min du premier au dernier contact, le dernier contact compris
  const samples = [];
  for (let ms = start; ms < end; ms += 120e3) samples.push(ms);
  samples.push(end);
  const above = samples.map(t => up(t) > 0);
  const iFirst = above.indexOf(true), iLast = above.lastIndexOf(true);
  if (iFirst < 0) return { visible: false, kind, start, end, max: tMax, central: centralSpan, obscuration: obscuration(pMax.rs, pMax.rm, pMax.sep), magnitude: (pMax.rs + pMax.rm - pMax.sep) / (2 * pMax.rs), sunAlt: pMax.sunAlt };
  const vs = iFirst === 0 ? start : bisect(up, samples[iFirst - 1], samples[iFirst]);            // le Soleil se lève éclipsé
  const ve = iLast === samples.length - 1 ? end : bisect(up, samples[iLast], samples[iLast + 1]);  // le Soleil se couche éclipsé
  const tVis = Math.min(Math.max(tMax, vs), ve), p = at(tVis);
  const visibleCentral = centralSpan && centralSpan.end > vs && centralSpan.start < ve
    ? { start: Math.max(centralSpan.start, vs), end: Math.min(centralSpan.end, ve) } : null;
  return {
    visible: true, kind: visibleCentral ? kind : 'partial', start: vs, end: ve, max: tVis, central: visibleCentral,
    obscuration: obscuration(p.rs, p.rm, p.sep), magnitude: (p.rs + p.rm - p.sep) / (2 * p.rs), sunAlt: p.sunAlt,
    risesEclipsed: vs > start, setsEclipsed: ve < end
  };
}

/* ---------- Levers, couchers, crépuscules ---------- */
/* Hauteur du centre du Soleil et de la Lune vue du lieu (degrés, sans réfraction) */
function sunAltitude(lat, lon, ms){
  const [ra, dec] = eclToEq(sunLongitude(ms), 0, obliquity(julianCenturies(ms)));
  return altAz(ra, dec, lat, lon, ms).alt;
}
function moonAltitude(lat, lon, ms){
  const eps = obliquity(julianCenturies(ms));
  const [ra, dec] = eclToEq(moonLongitude(ms), bodyLatitude('moon', ms), eps);
  const m = topocentric(ra, dec, moonDistance(ms) / EARTH_RADIUS_KM, lat, lon, ms);
  return altAz(m.ra, m.dec, lat, lon, ms).alt;
}
/* Passages d'une hauteur h0 entre deux instants : [{ ms, rising }] (pas de 10 min, affinage à la seconde) */
function crossings(altFn, from, to, h0){
  const out = [], step = 600e3;
  let prev = altFn(from) - h0;
  for (let ms = from + step; ms <= to; ms += step) {
    const cur = altFn(ms) - h0;
    if ((prev < 0) !== (cur < 0)) out.push({ ms: bisect(t => altFn(t) - h0, ms - step, ms), rising: cur > 0 });
    prev = cur;
  }
  return out;
}
/* Intervalles où une condition est vraie, échantillonnée toutes les 5 min */
function intervals(test, from, to){
  const out = [];
  let open = null;
  for (let ms = from; ms <= to; ms += 300e3) {
    if (test(ms)) { if (open === null) open = ms; }
    else if (open !== null) { out.push([open, ms]); open = null; }
  }
  if (open !== null) out.push([open, to]);
  return out;
}

/* ---------- Programme de la nuit ----------
   from : midi local du jour choisi (ms), to : midi du lendemain. Renvoie les heures du Soleil (coucher, fin des
   crépuscules, aube, lever), de la Lune (lever, coucher, éclairement), la fenêtre de nuit noire sans Lune,
   et les planètes visibles à l'œil nu (plus de 10° de haut, Soleil à plus de 6° sous l'horizon). */
const NAKED_EYE_PLANETS = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
function nightPlan(lat, lon, from){
  const to = from + 86400e3, sunAlt = ms => sunAltitude(lat, lon, ms), moonAlt = ms => moonAltitude(lat, lon, ms);
  const first = (list, rising) => (list.find(c => c.rising === rising) || {}).ms || null;
  const sun = {};
  for (const [name, h] of [['horizon', HORIZON], ['civil', -6], ['nautical', -12], ['astro', -18]]) {
    const c = crossings(sunAlt, from, to, h);
    sun[name] = { down: first(c, false), up: first(c, true) };
  }
  const noonAlt = sunAlt(from), midnightAlt = sunAlt(from + 43200e3);
  const moonC = crossings(moonAlt, from, to, HORIZON);
  const phase = moonPhase(from + 43200e3);
  const dark = intervals(ms => sunAlt(ms) < -18 && moonAlt(ms) < HORIZON, from, to);
  const planets = [];
  for (const body of NAKED_EYE_PLANETS) {
    const win = intervals(ms => sunAlt(ms) < -6 && bodyAltAz(body, lat, lon, ms).alt > 10, from, to);
    if (win.length) {
      const [a, b] = win.reduce((x, y) => (y[1] - y[0] > x[1] - x[0] ? y : x));
      planets.push({ body, start: a, end: b, az: bodyAltAz(body, lat, lon, (a + b) / 2).az, sign: signFromLongitude(bodyLongitude(body, (a + b) / 2)) });
    }
  }
  return {
    sunset: sun.horizon.down, sunrise: sun.horizon.up, civilDusk: sun.civil.down, civilDawn: sun.civil.up,
    nauticalDusk: sun.nautical.down, nauticalDawn: sun.nautical.up, astroDusk: sun.astro.down, astroDawn: sun.astro.up,
    polarDay: sun.horizon.down === null && midnightAlt > HORIZON, polarNight: sun.horizon.up === null && noonAlt < HORIZON,
    noAstroNight: sun.astro.down === null && midnightAlt > -18,
    moonrise: first(moonC, true), moonset: first(moonC, false), moonUp: moonAlt(from + 43200e3) > HORIZON, moonPhase: phase,
    dark, planets
  };
}
