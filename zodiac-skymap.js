/* ============================================================
   Zodiaque & Décans — carte du ciel
   Coordonnées équatoriales, temps sidéral, hauteur et azimut, projection, étoiles filantes, éclipses.
   Fonctions pures, sans DOM. Dépend de zodiac-sky-data.js, zodiac-astro.js et zodiac-planets.js.
   ============================================================ */

/* Obliquité moyenne de l'écliptique (degrés) */
function obliquity(T){ return 23.4392911 - 0.0130042 * T; }

/* Écliptique (λ, β) → équatorial (α, δ), en degrés, pour l'obliquité eps */
function eclToEq(lon, lat, eps){
  const l = lon * DEG, b = lat * DEG, e = eps * DEG;
  const ra = Math.atan2(Math.sin(l) * Math.cos(e) - Math.tan(b) * Math.sin(e), Math.cos(l)) / DEG;
  const dec = Math.asin(Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(l)) / DEG;
  return [norm360(ra), dec];
}
/* Équatorial → écliptique */
function eqToEcl(ra, dec, eps){
  const a = ra * DEG, d = dec * DEG, e = eps * DEG;
  const lon = Math.atan2(Math.sin(a) * Math.cos(e) + Math.tan(d) * Math.sin(e), Math.cos(a)) / DEG;
  const lat = Math.asin(Math.sin(d) * Math.cos(e) - Math.cos(d) * Math.sin(e) * Math.sin(a)) / DEG;
  return [norm360(lon), lat];
}
/* Coordonnées J2000 d'une étoile → équinoxe de la date (précession en longitude écliptique) */
function precessFromJ2000(ra, dec, T){
  const [lon, lat] = eqToEcl(ra, dec, obliquity(0));
  return eclToEq(lon + 1.396971 * T + 0.0003086 * T * T, lat, obliquity(T));
}
/* Position équatoriale d'un astre à la date (degrés) */
function bodyEquatorial(body, ms){
  return eclToEq(bodyLongitude(body, ms), bodyLatitude(body, ms), obliquity(julianCenturies(ms)));
}

/* Temps sidéral moyen de Greenwich (degrés) — Meeus, éq. 12.4 */
function gmst(ms){
  const jd = ms / 86400000 + 2440587.5, T = (jd - 2451545.0) / 36525;
  return norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000);
}
/* Hauteur et azimut (degrés ; azimut compté depuis le nord vers l'est), sans réfraction */
function altAz(ra, dec, lat, lon, ms){
  const H = (gmst(ms) + lon - ra) * DEG, d = dec * DEG, p = lat * DEG;
  const alt = Math.asin(Math.sin(p) * Math.sin(d) + Math.cos(p) * Math.cos(d) * Math.cos(H)) / DEG;
  const az = Math.atan2(-Math.cos(d) * Math.sin(H), Math.sin(d) * Math.cos(p) - Math.cos(d) * Math.sin(p) * Math.cos(H)) / DEG;
  return { alt, az: norm360(az) };
}
/* Hauteur et azimut d'un astre ; pour la Lune, correction de parallaxe (vue depuis la surface, pas du centre de la Terre) */
function bodyAltAz(body, lat, lon, ms){
  const [ra, dec] = bodyEquatorial(body, ms);
  const h = altAz(ra, dec, lat, lon, ms);
  if (body === 'moon') h.alt -= 0.9507 * Math.cos(h.alt * DEG);
  return h;
}

/* Projection stéréographique centrée sur le zénith : horizon = cercle de rayon R, nord en haut,
   est à gauche (comme en regardant le ciel au-dessus de soi) */
function projectSky(alt, az, R){
  const r = R * Math.tan((90 - alt) * DEG / 2);
  return [-r * Math.sin(az * DEG), -r * Math.cos(az * DEG)];
}
/* Direction cardinale (0 = N, 1 = NE … 7 = NO) */
function compassIndex(az){ return Math.round(norm360(az) / 45) % 8; }

/* ---------- Étoiles filantes ---------- */
const md = (m, d) => m * 100 + d;   // mois-jour comparable
/* Pluies actives à une date (gère celles qui chevauchent le 1er janvier, comme les Quadrantides) */
function activeShowers(date){
  const x = md(date.m, date.d);
  return Object.keys(METEOR_SHOWERS).filter(k => {
    const s = METEOR_SHOWERS[k], a = md(...s.start), b = md(...s.end);
    return a <= b ? (x >= a && x <= b) : (x >= a || x <= b);
  });
}
/* Prochain pic à partir d'une date (le jour même compris) : {key, date:{y,m,d}} */
function nextShowerPeak(date){
  const x = md(date.m, date.d);
  let best = null;
  for (const k of Object.keys(METEOR_SHOWERS)) {
    const [m, d] = METEOR_SHOWERS[k].peak, y = md(m, d) >= x ? date.y : date.y + 1;
    const key = y * 10000 + md(m, d);
    if (!best || key < best.sortKey) best = { key: k, date: { y, m, d }, sortKey: key };
  }
  return best;
}

/* ---------- Éclipses ---------- */
const SOLAR_ECLIPSES = 'TAHP';
/* Prochaines éclipses à partir d'un instant (ms UTC) */
function nextEclipses(ms, count){
  const minutes = ms / 60000;
  return ECLIPSES.filter(e => e[0] >= minutes).slice(0, count).map(([m, type]) => ({ ms: m * 60000, type, solar: SOLAR_ECLIPSES.includes(type) }));
}
/* Une éclipse de Lune est visible si la Lune est au-dessus de l'horizon au maximum */
function lunarEclipseVisible(ms, lat, lon){ return bodyAltAz('moon', lat, lon, ms).alt > 0; }
