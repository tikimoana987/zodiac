/* ============================================================
   Zodiaque & Décans — transits sur le thème natal
   Planètes du moment (Soleil à Pluton) comparées aux points du thème natal : aspect, écart, période d'influence,
   jour où l'aspect est exact. Fonctions pures, sans DOM. Dépend de zodiac-planets.js (bodyLongitude, SLOW_BODIES).
   ============================================================ */

const TRANSIT_BODIES = ['sun', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];   // la Lune passe trop vite
const TRANSIT_ORB = { sun: 1, mercury: 1, venus: 1, mars: 1, jupiter: 1.5, saturn: 1.5, uranus: 1.5, neptune: 1.5, pluto: 1.5 };
const TRANSIT_ASPECTS = [['conjunction', 0], ['sextile', 60], ['square', 90], ['trine', 120], ['opposition', 180]];
const PERSONAL_POINTS = ['sun', 'moon', 'asc', 'mc'];

function arcDistance(a, b){ const d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; }
function aspectGap(lonTransit, lonNatal, angle){ return Math.abs(arcDistance(lonTransit, lonNatal) - angle); }

/* Points du thème natal utilisés : Soleil à Saturne (les planètes lentes natales marquent une génération),
   Lune seulement si l'heure est connue (sinon jusqu'à 6° d'erreur), ascendant et milieu du ciel si heure et lieu le sont. */
function natalPoints(chart, timeKnown){
  const keep = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'].filter(b => b !== 'moon' || timeKnown);
  const pts = chart.bodies.filter(b => keep.includes(b.body)).map(b => ({ point: b.body, lon: b.lon }));
  if (chart.exact) pts.push({ point: 'asc', lon: chart.asc }, { point: 'mc', lon: chart.mc });
  return pts;
}

/* Période où l'aspect reste dans l'orbe autour de ms0, et instant où il est exact (s'il l'est dans cette période) */
function transitWindow(body, natalLon, angle, ms0){
  const orb = TRANSIT_ORB[body], slow = SLOW_BODIES.includes(body);
  const step = slow ? 86400e3 : 6 * 3600e3, limit = slow ? 800 * 86400e3 : 60 * 86400e3;
  const gap = ms => aspectGap(bodyLongitude(body, ms), natalLon, angle);
  let start = ms0, end = ms0;
  while (gap(start - step) <= orb && ms0 - start < limit) start -= step;
  while (gap(end + step) <= orb && end - ms0 < limit) end += step;
  let best = { ms: ms0, gap: gap(ms0) };
  for (let ms = start; ms <= end; ms += step) { const g = gap(ms); if (g < best.gap) best = { ms, gap: g }; }
  // Affinage autour du minimum (à l'heure près)
  for (let ms = best.ms - step; ms <= best.ms + step; ms += 3600e3) { const g = gap(ms); if (g < best.gap) best = { ms, gap: g }; }
  return { start, end, exact: best.gap < 0.05 ? best.ms : null };
}

/* Transits actifs pendant la période (un ou sept midis) : [{ body, point, type, gap, slow, start, end, exact }]
   triés : planètes lentes d'abord, puis points personnels (Soleil, Lune, ascendant, milieu du ciel), puis écart. */
function natalTransits(points, noons){
  const out = [];
  for (const body of TRANSIT_BODIES) {
    const lons = noons.map(ms => bodyLongitude(body, ms));
    for (const n of points) {
      for (const [type, angle] of TRANSIT_ASPECTS) {
        const gaps = lons.map(l => aspectGap(l, n.lon, angle)), g = Math.min(...gaps);
        if (g <= TRANSIT_ORB[body]) {
          const ms0 = noons[gaps.indexOf(g)];
          out.push({ body, point: n.point, type, gap: g, slow: SLOW_BODIES.includes(body), ...transitWindow(body, n.lon, angle, ms0) });
          break;
        }
      }
    }
  }
  const rank = x => (x.slow ? 0 : 2) + (PERSONAL_POINTS.includes(x.point) ? 0 : 1);
  return out.sort((a, b) => rank(a) - rank(b) || a.gap - b.gap);
}

/* ---------- Synastrie : aspects entre les planètes de deux thèmes natals ----------
   Points : ceux de natalPoints (Soleil à Saturne, Lune si l'heure est connue, ascendant si heure et lieu le sont),
   sans le milieu du ciel. Trigone et sextile : harmonie ; carré et opposition : tension ; conjonction : harmonie,
   sauf avec Saturne, ou avec Mars hors Vénus (Vénus–Mars : l'attirance). Tri : importance des points, puis écart. */
const SYN_ORB = { conjunction: 6, opposition: 6, trine: 5, square: 5, sextile: 4 };
const SYN_WEIGHT = { sun: 3, moon: 3, venus: 3, mars: 2, asc: 2, mercury: 1, jupiter: 1, saturn: 1 };
function synastryTone(type, a, b){
  if (type === 'trine' || type === 'sextile') return 'harmony';
  if (type === 'square' || type === 'opposition') return 'tension';
  if (a === 'saturn' || b === 'saturn') return 'tension';
  if ((a === 'mars' || b === 'mars') && a !== 'venus' && b !== 'venus') return 'tension';
  return 'harmony';
}
function synastry(pointsA, pointsB){
  const out = [];
  for (const pa of pointsA.filter(p => p.point !== 'mc')) for (const pb of pointsB.filter(p => p.point !== 'mc')) {
    for (const [type, angle] of TRANSIT_ASPECTS) {
      const gap = aspectGap(pa.lon, pb.lon, angle);
      if (gap <= SYN_ORB[type]) { out.push({ a: pa.point, b: pb.point, type, gap, tone: synastryTone(type, pa.point, pb.point), weight: SYN_WEIGHT[pa.point] + SYN_WEIGHT[pb.point] }); break; }
    }
  }
  out.sort((x, y) => y.weight - x.weight || x.gap - y.gap);
  return { harmony: out.filter(x => x.tone === 'harmony'), tension: out.filter(x => x.tone === 'tension') };
}
