/* ============================================================
   Zodiaque & Décans — thème natal
   Heure locale du lieu de naissance → temps universel, ascendant, Milieu du Ciel, maisons (Placidus),
   maison de chaque astre, aspects. Fonctions pures, sans DOM.
   Dépend de zodiac-data.js, zodiac-places.js (birthPlace), zodiac-astro.js, zodiac-planets.js, zodiac-skymap.js.
   ============================================================ */

/* ---------- Fuseau horaire du lieu de naissance ----------
   Le navigateur contient l'historique mondial des changements d'heure (base IANA) : à partir du fuseau
   officiel d'une ville (« Europe/Paris »), on retrouve le décalage exact à n'importe quelle date
   (heure d'été, changements de fuseau, heure locale d'avant 1911…). */
const tzFormatters = {};
function tzParts(ms, tz){
  const f = tzFormatters[tz] || (tzFormatters[tz] = new Intl.DateTimeFormat('en-US', {
    timeZone: usableTimeZone(tz), hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', era: 'short'
  }));
  const p = {};
  for (const { type, value } of f.formatToParts(new Date(ms))) p[type] = value;
  const year = p.era === 'BC' || p.era === 'B' ? 1 - +p.year : +p.year;
  return { y: year, m: +p.month, d: +p.day, h: +p.hour, min: +p.minute, s: +p.second };
}
/* Décalage du fuseau (ms) à un instant donné : heure locale − temps universel */
function tzOffset(ms, tz){
  const p = tzParts(ms, tz);
  const asUtc = new Date(0);
  asUtc.setUTCFullYear(p.y, p.m - 1, p.d);
  asUtc.setUTCHours(p.h, p.min, p.s, 0);
  return asUtc.getTime() - Math.floor(ms / 1000) * 1000;
}
/* Heure locale d'un lieu → instant UTC (ms). Heure inexistante (passage à l'heure d'été) : décalée d'autant ;
   heure ambiguë (retour à l'heure d'hiver) : première occurrence. */
function zonedInstant(date, h, min, tz){
  const wall = new Date(0);
  wall.setUTCFullYear(date.y, date.m - 1, date.d);
  wall.setUTCHours(h, min, 0, 0);
  const w = wall.getTime();
  // Décalages possibles autour de cette date ; on garde ceux qui redonnent bien l'heure locale demandée
  const offsets = new Set([tzOffset(w - 86400e3, tz), tzOffset(w, tz), tzOffset(w + 86400e3, tz)]);
  const valid = [...offsets].map(o => w - o).filter(t => tzOffset(t, tz) === w - t).sort((a, b) => a - b);
  if (valid.length) return valid[0];                  // heure ambiguë : première occurrence
  return w - tzOffset(w - 86400e3, tz);               // heure inexistante : décalage d'avant le changement
}

/* ---------- Angles et maisons ---------- */
/* Temps sidéral local (degrés) = ascension droite du Milieu du Ciel */
function ramcAt(ms, lon){ return norm360(gmst(ms) + lon); }
/* Milieu du Ciel : point de l'écliptique au méridien */
function midheaven(ramc, eps){
  return norm360(Math.atan2(Math.sin(ramc * DEG), Math.cos(ramc * DEG) * Math.cos(eps * DEG)) / DEG);
}
/* Ascendant : point de l'écliptique qui se lève à l'horizon est */
function ascendant(ramc, eps, lat){
  const r = ramc * DEG, e = eps * DEG, p = lat * DEG;
  return norm360(Math.atan2(Math.cos(r), -(Math.sin(r) * Math.cos(e) + Math.tan(p) * Math.sin(e))) / DEG);
}
/* Point de l'écliptique d'ascension droite donnée */
function eclipticFromRA(ra, eps){ return norm360(Math.atan2(Math.sin(ra * DEG), Math.cos(ra * DEG) * Math.cos(eps * DEG)) / DEG); }

/* Maisons Placidus : chaque pointe intermédiaire est le point de l'écliptique dont l'angle horaire vaut
   1/3 ou 2/3 de son demi-arc (diurne au-dessus de l'horizon, nocturne en dessous). Résolu par itération.
   Renvoie null si la méthode est impossible (cercle polaire : certains points ne se lèvent ni ne se couchent). */
function placidusCusps(ramc, eps, lat){
  const asc = ascendant(ramc, eps, lat), mc = midheaven(ramc, eps);
  const tp = Math.tan(lat * DEG), se = Math.sin(eps * DEG);
  const cusp = (fraction, below) => {
    let lon = below ? norm360(mc + 180 - 90 * fraction) : norm360(mc + 90 * fraction);   // première estimation
    for (let k = 0; k < 50; k++) {
      const dec = Math.asin(se * Math.sin(lon * DEG));
      const x = -tp * Math.tan(dec);
      if (Math.abs(x) > 1) return null;
      const dsa = Math.acos(x) / DEG;                 // demi-arc diurne
      const ra = below ? ramc + 180 - fraction * (180 - dsa) : ramc + fraction * dsa;
      const next = eclipticFromRA(norm360(ra), eps);
      if (Math.abs(((next - lon + 540) % 360) - 180) < 1e-9) { lon = next; break; }
      lon = next;
    }
    return lon;
  };
  // 11 et 12 au-dessus de l'horizon (du MC vers l'ascendant) ; 2 et 3 en dessous (de l'ascendant vers le fond du ciel)
  const c11 = cusp(1 / 3, false), c12 = cusp(2 / 3, false), c2 = cusp(2 / 3, true), c3 = cusp(1 / 3, true);
  if ([c11, c12, c2, c3].some(v => v === null)) return null;
  // Maisons 5 à 9 : opposées à 11, 12, 1, 2, 3
  return [asc, c2, c3, norm360(mc + 180), norm360(c11 + 180), norm360(c12 + 180), norm360(asc + 180), norm360(c2 + 180), norm360(c3 + 180), mc, c11, c12];
}
/* Maisons égales : 30° chacune à partir de l'ascendant (repli au-delà du cercle polaire) */
function equalCusps(asc){ return Array.from({ length: 12 }, (_, i) => norm360(asc + 30 * i)); }
/* Maison (1 à 12) d'une longitude, d'après les 12 pointes */
function houseOf(lon, cusps){
  for (let i = 0; i < 12; i++) {
    const a = cusps[i], b = cusps[(i + 1) % 12];
    const span = norm360(b - a), off = norm360(lon - a);
    if (off < span) return i + 1;
  }
  return 12;
}

/* ---------- Aspects ---------- */
const ASPECTS = [ // [nom, angle, orbe en degrés]
  ['conjunction', 0, 8], ['sextile', 60, 5], ['square', 90, 7], ['trine', 120, 7], ['opposition', 180, 8]
];
function aspectsBetween(positions){
  const out = [];
  for (let i = 0; i < positions.length; i++) for (let j = i + 1; j < positions.length; j++) {
    let d = Math.abs(positions[i].lon - positions[j].lon) % 360;
    if (d > 180) d = 360 - d;
    for (const [type, angle, orb] of ASPECTS) {
      if (Math.abs(d - angle) <= orb) { out.push({ a: positions[i].body, b: positions[j].body, type, orb: Math.abs(d - angle) }); break; }
    }
  }
  return out.sort((x, y) => x.orb - y.orb);
}

/* ---------- Thème natal complet ----------
   date {y,m,d} ; time {h,min} ou null ; place (birthPlace) ou null.
   Sans heure : positions à midi, ni ascendant ni maisons (la Lune peut alors être imprécise).
   Sans lieu : heure interprétée dans le fuseau de l'appareil, ni ascendant ni maisons. */
function natalChart(date, time, place){
  const exact = !!(time && place);
  const ms = place ? zonedInstant(date, time ? time.h : 12, time ? time.min : 0, place.tz)
                   : localInstant(date, time ? time.h : 12, time ? time.min : 0);
  const bodies = BODIES.map(body => {
    const lon = bodyLongitude(body, ms);
    return { body, lon, sign: signFromLongitude(lon), retro: isRetrograde(body, ms) };
  });
  const chart = { ms, exact, bodies, asc: null, mc: null, cusps: null, system: null, aspects: aspectsBetween(bodies) };
  if (exact) {
    const eps = obliquity(julianCenturies(ms)), ramc = ramcAt(ms, place.lon);
    chart.asc = ascendant(ramc, eps, place.lat);
    chart.mc = midheaven(ramc, eps);
    const pl = Math.abs(place.lat) < 66 ? placidusCusps(ramc, eps, place.lat) : null;
    chart.cusps = pl || equalCusps(chart.asc);
    chart.system = pl ? 'placidus' : 'equal';
    for (const b of bodies) b.house = houseOf(b.lon, chart.cusps);
  }
  return chart;
}
