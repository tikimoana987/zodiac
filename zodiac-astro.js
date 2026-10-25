/* ============================================================
   Zodiaque & Décans — calculs
   Position du Soleil, signe, décan, dates. Fonctions pures, sans DOM. Dépend de zodiac-data.js.
   ============================================================ */

/* ---------- Position du Soleil ----------
   Le signe et le décan dépendent de la longitude écliptique du Soleil, pas d'un calendrier fixe :
   l'entrée dans un signe varie d'un jour selon les années (Bélier le 20 ou le 21 mars).
   Algorithme : J. Meeus, « Astronomical Algorithms », chap. 25. Écart max mesuré contre astropy
   sur 1900-2100 : 0,009°, soit environ 13 minutes sur l'heure d'entrée dans un signe. */
const DEG = Math.PI / 180;
function norm360(x){ return ((x % 360) + 360) % 360; }

/* Longitude écliptique apparente du Soleil, en degrés (0° = point vernal), à un instant en ms UTC */
/* ---------- Précision accrue du Soleil (éclipses vues d'un lieu) ----------
   Corrections de la longitude apparente et distance Terre-Soleil : moindres carrés sur 20 000 positions de référence
   (astropy) de 1895 à 2105 — anomalie moyenne, perturbations de Vénus, Mars, Jupiter et Saturne, mouvement autour du
   barycentre Terre-Lune, nutation. Écart résiduel : 2,1″ rms (5,4″ au plus) ; distance à 600 km près.
   Ligne : [M, L⊕, L♀, L♂, L♃, L♄, D, Ω, L☉ (multiples), cosinus ?, ×T ?, amplitude] ; 1e-7 degré, 1e-9 UA.
   Générées par l'ajustement (fit_sun.py) : ne pas modifier à la main. */
const SUN_LON_FIX = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, -1409], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26322], [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, -45538], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2793], [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1579], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 18058], [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 706], [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 105], [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, -52465], [0, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 13448], [0, -3, 2, 0, 0, 0, 0, 0, 0, 1, 0, 6644], [0, -2, 2, 0, 0, 0, 0, 0, 0, 0, 0, -15341], [0, -5, 3, 0, 0, 0, 0, 0, 0, 0, 0, -2253], [0, -4, 3, 0, 0, 0, 0, 0, 0, 1, 0, 4107], [0, -3, 3, 0, 0, 0, 0, 0, 0, 0, 0, -1824], [0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 895], [0, -2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 5620], [0, -1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4076], [0, -1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 2892], [0, -2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1005], [0, -2, 0, 3, 0, 0, 0, 0, 0, 1, 0, 506], [0, -2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 494], [0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 20073], [0, -1, 0, 0, 1, 0, 0, 0, 0, 1, 0, -499], [0, -2, 0, 0, 2, 0, 0, 0, 0, 0, 0, -7654], [0, -1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2656], [0, -1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 3623], [0, -3, 0, 0, 3, 0, 0, 0, 0, 0, 0, -460], [0, -2, 0, 0, 3, 0, 0, 0, 0, 0, 0, -1433], [0, -1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1248]], SUN_LON_FIX0 = [-14051, -5518];
const SUN_DIST_FIX = [[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -87597], [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 20366], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 42111], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1285], [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, -4558], [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 30890], [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, -69691], [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 57059], [0, -1, 1, 0, 0, 0, 0, 0, 0, 1, 0, -5492], [0, -3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2105], [0, -2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 15755], [0, -4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3374], [0, -3, 3, 0, 0, 0, 0, 0, 0, 1, 0, 2366], [0, -2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 4670], [0, -1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 16307], [0, -2, 0, 0, 2, 0, 0, 0, 0, 1, 0, -9233], [0, -1, 0, 0, 2, 0, 0, 0, 0, 0, 0, -2598]], SUN_DIST_FIX0 = [-97, -717];
function sunSeries(rows, base, T, scale){
  const a = [357.52911 + 35999.05029 * T, 100.46457 + 35999.37245 * T, 181.97910 + 58517.81539 * T, 355.44700 + 19140.30268 * T,
             34.39644 + 3034.74613 * T, 49.95424 + 1222.49362 * T, 297.8501921 + 445267.1114034 * T, 125.04452 - 1934.136261 * T,
             280.4665 + 36000.7698 * T].map(x => x * Math.PI / 180);
  let s = base[0] + base[1] * T;
  for (const r of rows) {
    let arg = 0; for (let k = 0; k < 9; k++) arg += r[k] * a[k];
    s += r[11] * (r[10] ? T : 1) * (r[9] ? Math.cos(arg) : Math.sin(arg));
  }
  return s / scale;
}
/* Distance Terre-Soleil (unités astronomiques) */
function sunDistance(ms){
  const T = julianCenturies(ms), M = (357.52911 + 35999.05029 * T) * Math.PI / 180;
  return 1.000140 - 0.016708 * Math.cos(M) - 0.000139 * Math.cos(2 * M) + sunSeries(SUN_DIST_FIX, SUN_DIST_FIX0, T, 1e9);
}

function sunLongitude(ms){
  const T = (ms / 86400000 + 2440587.5 - 2451545.0) / 36525;   // siècles juliens depuis J2000
  const L0 = 280.46646 + 36000.76983*T + 0.0003032*T*T;        // longitude moyenne
  const M  = (357.52911 + 35999.05029*T - 0.0001537*T*T) * DEG; // anomalie moyenne
  const C  = (1.914602 - 0.004817*T - 0.000014*T*T) * Math.sin(M)
           + (0.019993 - 0.000101*T) * Math.sin(2*M)
           + 0.000289 * Math.sin(3*M);                          // équation du centre
  const omega = (125.04 - 1934.136*T) * DEG;                    // nutation + aberration
  return norm360(L0 + C - 0.00569 - 0.00478*Math.sin(omega) + sunSeries(SUN_LON_FIX, SUN_LON_FIX0, T, 1e7));   // + corrections fines
}
function signFromLongitude(lon){ return SIGN_ORDER[Math.floor(lon / 30) % 12]; }
function decanFromLongitude(lon){ return Math.floor((lon % 30) / 10); }

/* "HH:MM" (ou "HH:MM:SS") → {h, min}, ou null si vide / invalide */
function parseTime(str){
  const r = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(str || '');   // HH:MM ou HH:MM:SS (champ avec secondes), rien d'autre
  if (!r) return null;
  const h = +r[1], min = +r[2], sec = r[3] === undefined ? 0 : +r[3];
  return (h < 24 && min < 60 && sec < 60) ? { h, min } : null;
}

/* Instant local → ms UTC. Avec tz (fuseau IANA du lieu de naissance, ex. « Europe/Paris ») : heure du lieu,
   changements d'heure compris (zonedInstant, zodiac-natal.js) ; sans tz : fuseau de l'appareil.
   Sans heure, les appelants prennent midi, soit ±0,5° de Soleil au pire. */
function localInstant(date, h, min, tz){
  if (tz) return zonedInstant(date, h, min, tz);
  const dt = new Date(2000, 0, 1, 12, 0, 0, 0);
  dt.setFullYear(date.y, date.m - 1, date.d);   // setFullYear : correct aussi pour les années < 100
  dt.setHours(h, min, 0, 0);
  return dt.getTime();
}

/* Ciel de naissance : longitude, signe, décan, et alerte si le Soleil change de signe ou de décan
   ce jour-là alors qu'aucune heure n'a été fournie. */
function computeSky(date, time, tz){
  const lon = sunLongitude(time ? localInstant(date, time.h, time.min, tz) : localInstant(date, 12, 0, tz));
  let cusp = null;
  if (!time) {
    const a = sunLongitude(localInstant(date, 0, 0, tz));
    const b = sunLongitude(localInstant(date, 23, 59, tz));
    if (signFromLongitude(a) !== signFromLongitude(b)) cusp = 'sign';
    else if (decanFromLongitude(a) !== decanFromLongitude(b)) cusp = 'decan';
  }
  return { lon, sign: signFromLongitude(lon), decan: decanFromLongitude(lon), cusp, hasTime: !!time };
}

/* "24°37′ ♈" avec heure, "≈ 24° ♈" sans heure (la minute d'arc serait une fausse précision) */
function formatSunPosition(sky){
  const inSign = sky.lon % 30;
  const deg = Math.floor(inSign), min = Math.floor((inSign - deg) * 60);
  const sym = `<span aria-hidden="true">${SIGN_META[sky.sign].sym}</span>`;
  return sky.hasTime ? `${deg}°${String(min).padStart(2,'0')}′ ${sym}` : `≈ ${deg}° ${sym}`;
}

/* Sous-gouvernant d'un décan — système des triplicités :
   décan 1 = maître du signe, décan 2 = maître du signe suivant du même élément (+4 signes),
   décan 3 = maître du troisième signe de cet élément (+8). Ex. Bélier : Mars, Soleil (Lion), Jupiter (Sagittaire). */
function decanRuler(signKey, decanIdx){
  const i = SIGN_ORDER.indexOf(signKey);
  return SIGN_META[SIGN_ORDER[(i + 4*decanIdx) % 12]].ruler;
}
/* Clé d'une paire d'éléments dans l'ordre de ELEMENT_ORDER (Feu+Air et Air+Feu → "fire_air") */
function compatKey(el1, el2){
  return [el1, el2].sort((a,b) => ELEMENT_ORDER.indexOf(a) - ELEMENT_ORDER.indexOf(b)).join('_');
}
/* "AAAA-MM-JJ" → {y, m, d}, ou null si le format est faux ou la date inexistante (ex. 2023-02-29) */
function parseISODate(str){
  const r = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str || '');
  if (!r) return null;
  const y = +r[1], m = +r[2], d = +r[3];
  const dt = new Date(2000, 0, 1);
  dt.setFullYear(y, m-1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m-1 || dt.getDate() !== d) return null;
  return { y, m, d };
}
function formatDateRange(signKey, lang){
  const s = SIGN_META[signKey];
  const fmt = new Intl.DateTimeFormat(loc(lang), { day:'numeric', month:'long' });
  const start = fmt.format(new Date(2024, s.start[0]-1, s.start[1]));
  const end = fmt.format(new Date(2024, s.end[0]-1, s.end[1]));
  return start + ' – ' + end;
}
/* Date du jour pour l'en-tête : « Dimanche 25 octobre 2026 » (première lettre en capitale) */
function formatToday(lang, now = new Date()){
  const s = new Intl.DateTimeFormat(loc(lang), { weekday:'long', day:'numeric', month:'long', year:'numeric' }).format(now);
  return s.charAt(0).toLocaleUpperCase(lang) + s.slice(1);
}
/* Ligne de naissance du profil : « 15 avril 1990 · 10:30 » (heure seulement si connue) */
function formatBirth(dateStr, timeStr, lang){
  const d = parseISODate(dateStr);
  if (!d) return '';
  const dt = new Date(2000, 0, 1, 12, 0);
  dt.setFullYear(d.y, d.m - 1, d.d);
  const day = new Intl.DateTimeFormat(loc(lang), { day:'numeric', month:'long', year:'numeric' }).format(dt);
  const t = parseTime(timeStr);
  if (!t) return day;
  dt.setHours(t.h, t.min);
  return day + ' · ' + new Intl.DateTimeFormat(loc(lang), { hour:'2-digit', minute:'2-digit' }).format(dt);
}
function formatDay(dayKey, lang){
  const map = { sunday:0, monday:1, tuesday:2, wednesday:3, thursday:4, friday:5, saturday:6 };
  return new Intl.DateTimeFormat(loc(lang),{weekday:'long'}).format(new Date(2024,0,7+map[dayKey]));
}

/* ============================================================
   Zodiaque chinois
   ============================================================ */
/* Date du Nouvel An chinois de l'année y → {y, m, d}, ou null hors de la table */
function lunarNewYear(y){
  const v = LNY_DATES[y - LNY_FIRST_YEAR];
  return v ? { y, m: Math.floor(v / 100), d: v % 100 } : null;
}
/* Année chinoise d'une date de naissance. Avant le Nouvel An, on appartient encore à l'année précédente.
   Tronc céleste (élément + yin/yang) : (année − 4) mod 10 ; branche terrestre (animal) : (année − 4) mod 12. */
function chineseYearInfo(date){
  const lny = lunarNewYear(date.y);
  if (!lny) return null;
  const beforeNewYear = date.m < lny.m || (date.m === lny.m && date.d < lny.d);
  const year = beforeNewYear ? date.y - 1 : date.y;
  const start = lunarNewYear(year), next = lunarNewYear(year + 1);
  if (!start || !next) return null;
  const stem = ((year - 4) % 10 + 10) % 10, branch = ((year - 4) % 12 + 12) % 12;
  return { year, animal: CN_ORDER[branch], element: CN_ELEMENTS[Math.floor(stem / 2)], yang: stem % 2 === 0, start, next };
}
/* Animal de l'heure (« ascendant chinois ») : tranches de 2 h, le Rat couvre 23:00–00:59 */
function chineseHourAnimal(time){
  return time ? CN_ORDER[Math.floor(((time.h + 1) % 24) / 2)] : null;
}
function cnHourRange(animal){
  const start = (CN_ORDER.indexOf(animal) * 2 + 23) % 24, pad = n => String(n).padStart(2, '0');
  return `${pad(start)}:00–${pad((start + 1) % 24)}:59`;
}
/* Relation traditionnelle entre deux animaux, puis score 1-5 */
function cnRelation(a, b){
  const pair = list => list.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  if (a === b) return CN_SELF_PUNISH.includes(a) ? 'selfPunish' : 'same';
  if (pair(CN_CLASH)) return 'clash';
  if (pair(CN_HARMONY)) return 'harmony';
  if (CN_TRIADS.some(t => t.includes(a) && t.includes(b))) return 'triad';
  if (pair(CN_HARM)) return 'harm';
  if (pair(CN_PUNISH)) return 'punishment';
  return 'neutral';
}
function cnScore(a, b){ return CN_RELATION_SCORE[cnRelation(a, b)]; }
/* « Année du Cheval de Feu ». Le russe accorde l'adjectif : ses modèles contiennent {el.m} ou {el.f}. */
function cnYearName(t, animal, element){
  return t.cn.yearOf[animal].replace(/\{el(?:\.(m|f))?\}/, (_, g) => g ? t.cn.yearElementAdj[g][element] : t.cn.yearElementOf[element]);
}
/* Durée de l'année chinoise : « 27 janv. 1990 – 14 févr. 1991 » */
function formatCnSpan(info, lang){
  const fmt = new Intl.DateTimeFormat(loc(lang), { day:'numeric', month:'short', year:'numeric' });
  const at = (p, shift) => { const d = new Date(2000, 0, 1, 12); d.setFullYear(p.y, p.m - 1, p.d + shift); return fmt.format(d); };
  return `${at(info.start, 0)} – ${at(info.next, -1)}`;
}
