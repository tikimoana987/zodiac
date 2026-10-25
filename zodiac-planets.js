/* ============================================================
   Zodiaque & Décans — planètes
   Positions de la Lune et des planètes, phases, rétrogradations, transits.
   Fonctions pures, sans DOM. Dépend de zodiac-data.js et zodiac-astro.js (sunLongitude).
   ============================================================ */

/* Corps suivis, du plus rapide au plus lent */
const BODIES = ["sun","moon","mercury","venus","mars","jupiter","saturn","uranus","neptune","pluto"];
const SLOW_BODIES = ["jupiter","saturn","uranus","neptune","pluto"];   // « grandes tendances »

/* Éléments orbitaux héliocentriques (écliptique et équinoxe J2000) et leurs variations par siècle.
   Source : JPL, E. M. Standish, « Approximate Positions of the Planets », table 1 (1800-2050).
   Ordre : a (ua), e, I, L, ϖ (longitude du périhélie), Ω (longitude du nœud), angles en degrés. */
const ORBITS = {
  mercury: [[0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593],
            [0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081]],
  venus:   [[0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255],
            [0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418]],
  earth:   [[1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0],
            [0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0]],
  mars:    [[1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891],
            [0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343]],
  jupiter: [[5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909],
            [-0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106]],
  saturn:  [[9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448],
            [-0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794]],
  uranus:  [[19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.95427630, 74.01692503],
            [-0.00196176, -0.00004397, -0.00242939, 428.48202785, 0.40805281, 0.04240589]],
  neptune: [[30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574],
            [0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664]],
  pluto:   [[39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684],
            [-0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.04062942, -0.01183482]]
};

/* Perturbations mutuelles Jupiter-Saturne, absentes d'une orbite képlérienne simple.
   Correction de longitude héliocentrique (degrés) : somme de termes sinus/cosinus sur les arguments classiques
   (2Mj−5Ms, 2Mj−2Ms, 3Mj−5Ms, Mj−2Ms, Mj−Ms, 2Mj−3Ms, Mj−5Ms, 2Mj−4Ms, 2Mj−6Ms, Mj−3Ms), plus constante et pente.
   Coefficients ajustés sur 1500 positions de référence astropy (1900-2100) ; validés sur 800 autres dates :
   écart max ramené de 0,17° à 0,04° (Jupiter) et de 0,35° à 0,03° (Saturne). */
const JS_ARGS = [[2,-5],[2,-2],[3,-5],[1,-2],[1,-1],[2,-3],[1,-5],[2,-4],[2,-6],[1,-3]];
const JS_CORRECTION = {
  jupiter: [-0.09252, 0.21004, -0.05304, -0.02066, 0.00481, 0.00010, -0.03779, 0.00200, -0.01036, 0.05059, 0.01238, 0.02151, 0.00169, -0.00540, 0.00060, 0.00418, -0.00007, -0.00126, 0.00227, 0.00192, -0.02816, 0.12093],
  saturn:  [0.10315, -0.16532, 0.00927, 0.00359, -0.00202, -0.00064, 0.11962, 0.00287, 0.01366, -0.02781, -0.00290, 0.00429, 0.00183, 0.00042, -0.05808, -0.01430, 0.04101, -0.01914, 0.01586, 0.00802, 0.07547, 0.00827]
};
function meanAnomaly(body, T){ const [b, r] = ORBITS[body]; return ((b[3] + r[3] * T) - (b[4] + r[4] * T)) * DEG; }
function perturbation(body, T){
  const k = JS_CORRECTION[body];
  if (!k) return 0;
  const Mj = meanAnomaly('jupiter', T), Ms = meanAnomaly('saturn', T);
  let s = k[20] + k[21] * T;
  JS_ARGS.forEach(([j, n], i) => { const g = j * Mj + n * Ms; s += k[2 * i] * Math.sin(g) + k[2 * i + 1] * Math.cos(g); });
  return s;
}

function julianCenturies(ms){ return (ms / 86400000 + 2440587.5 - 2451545.0) / 36525; }

/* Position héliocentrique (ua) dans l'écliptique J2000, par résolution de l'équation de Kepler */
function heliocentric(body, T){
  const [base, rate] = ORBITS[body];
  const [a, e, I, L, peri, node] = base.map((v, i) => v + rate[i] * T);
  const w = (peri - node) * DEG, O = node * DEG, inc = I * DEG;
  const M = (((L - peri) % 360) + 540) % 360 - 180;   // anomalie moyenne ramenée dans [-180, 180]
  let E = M * DEG + e * Math.sin(M * DEG);
  for (let k = 0; k < 8; k++) E -= (E - e * Math.sin(E) - M * DEG) / (1 - e * Math.cos(E));
  const x = a * (Math.cos(E) - e), y = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), ci = Math.cos(inc), si = Math.sin(inc);
  const X = (cw * cO - sw * sO * ci) * x + (-sw * cO - cw * sO * ci) * y;
  const Y = (cw * sO + sw * cO * ci) * x + (-sw * sO + cw * cO * ci) * y;
  const Z = (sw * si) * x + (cw * si) * y;
  const p = perturbation(body, T) * DEG;   // rotation en longitude (Jupiter et Saturne seulement)
  return [X * Math.cos(p) - Y * Math.sin(p), X * Math.sin(p) + Y * Math.cos(p), Z];
}

/* Longitude écliptique de la Lune (degrés, équinoxe de la date).
   J. Meeus, « Astronomical Algorithms », chap. 47 : principaux termes de la table 47.A. */
const MOON_TERMS = [ // [D, M, M', F, coefficient en millionièmes de degré]
  [0,0,1,0,6288774],[2,0,-1,0,1274027],[2,0,0,0,658314],[0,0,2,0,213618],[0,1,0,0,-185116],[0,0,0,2,-114332],
  [2,0,-2,0,58793],[2,-1,-1,0,57066],[2,0,1,0,53322],[2,-1,0,0,45758],[0,1,-1,0,-40923],[1,0,0,0,-34720],
  [0,1,1,0,-30383],[2,0,0,-2,15327],[0,0,1,2,-12528],[0,0,1,-2,10980],[4,0,-1,0,10675],[0,0,3,0,10034],
  [4,0,-2,0,8548],[2,1,-1,0,-7888],[2,1,0,0,-6766],[1,0,-1,0,-5163],[1,1,0,0,4987],[2,-1,1,0,4036],
  [2,0,2,0,3994],[4,0,0,0,3861],[2,0,-3,0,3665],[0,1,-2,0,-2689],[2,0,-1,2,-2602],[2,-1,-2,0,2390],
  [1,0,1,0,-2348],[2,-2,0,0,2236],[0,1,2,0,-2120],[0,2,0,0,-2069]
];
function moonLongitude(ms){
  const T = julianCenturies(ms);
  const Lp = 218.3164477 + 481267.88123421 * T;
  const D  = (297.8501921 + 445267.1114034 * T) * DEG;
  const M  = (357.5291092 + 35999.0502909 * T) * DEG;
  const Mp = (134.9633964 + 477198.8675055 * T) * DEG;
  const F  = (93.2720950 + 483202.0175233 * T) * DEG;
  const E  = 1 - 0.002516 * T - 0.0000074 * T * T;          // excentricité de l'orbite terrestre
  let sum = 0;
  for (const [d, m, mp, f, c] of MOON_TERMS) sum += c * Math.pow(E, Math.abs(m)) * Math.sin(d * D + m * M + mp * Mp + f * F);
  const A1 = (119.75 + 131.849 * T) * DEG, A2 = (53.09 + 479264.290 * T) * DEG;
  sum += 3958 * Math.sin(A1) + 1962 * Math.sin(Lp * DEG - F) + 318 * Math.sin(A2);
  return norm360(Lp + sum / 1e6 + seriesSum(MOON_LON_FIX, MOON_LON_FIX0, T, 1e7));   // + corrections fines
}

/* ---------- Précision accrue de la Lune (éclipses vues d'un lieu, levers et couchers) ----------
   Corrections ajoutées à la série de Meeus ci-dessus, et distance Terre-Lune : termes obtenus par moindres carrés
   sur 20 000 positions de référence (astropy, éphéméride intégrée) de 1895 à 2105, aux fréquences de la théorie
   lunaire (D, M, M', F) et de la nutation. Écart résiduel : longitude 4,9″ rms, latitude 0,7″, distance 1,7 km.
   Ligne : [D, M, M', F, Ω, 2L☉/2, 2L☾/2 (multiples), cosinus ?, amplitude]. Longitude/latitude en 1e-7 degré, distance en mètres.
   Générées par l'ajustement (fit_moon.py) : ne pas modifier à la main. */
const MOON_LON_FIX = [[0, -2, -1, 0, 0, 0, 0, 0, 1614], [0, -2, 0, 0, 0, 0, 0, 0, 1340], [0, -2, 0, 0, 0, 0, 0, 1, -1534], [0, -2, 1, 0, 0, 0, 0, 0, 3563], [0, 0, -4, 0, 0, 0, 0, 0, -2719], [0, 0, -2, -2, 0, 0, 0, 0, 5532], [0, 0, -2, 2, 0, 0, 0, 0, 1945], [0, 0, -1, 0, 0, 0, 0, 1, 6187], [0, 0, 1, 0, 0, 0, 0, 1, 6187], [0, 0, 2, -2, 0, 0, 0, 0, -1945], [0, 0, 2, 2, 0, 0, 0, 0, -5532], [0, 0, 4, 0, 0, 0, 0, 0, 2719], [0, 2, -1, 0, 0, 0, 0, 0, -3563], [0, 2, 0, 0, 0, 0, 0, 0, -1340], [0, 2, 0, 0, 0, 0, 0, 1, -1534], [0, 2, 1, 0, 0, 0, 0, 0, -1614], [1, 0, -2, 0, 0, 0, 0, 0, -4816], [1, 1, -1, 0, 0, 0, 0, 0, 2509], [1, 1, 1, 0, 0, 0, 0, 0, 3284], [2, -2, -1, 0, 0, 0, 0, 0, 20702], [2, -1, 0, -2, 0, 0, 0, 0, 5899], [2, -1, 2, 0, 0, 0, 0, 0, 3298], [2, 0, 0, 0, 0, 0, 0, 1, 1840], [2, 0, 0, 2, 0, 0, 0, 0, -15722], [2, 0, 1, -2, 0, 0, 0, 0, -17841], [2, 0, 3, 0, 0, 0, 0, 0, 3027], [2, 1, -2, 0, 0, 0, 0, 0, 6720], [2, 1, 0, -2, 0, 0, 0, 0, -3810], [2, 1, 1, 0, 0, 0, 0, 0, -8142], [2, 2, -1, 0, 0, 0, 0, 0, -7013], [2, 2, 0, -2, 0, 0, 0, 0, 20319], [2, 2, 0, -2, 0, 0, 0, 1, 253], [3, 0, -2, 0, 0, 0, 0, 0, -3457], [3, 0, -1, 0, 0, 0, 0, 0, -8894], [4, -1, -2, 0, 0, 0, 0, 0, 7477], [4, -1, -1, 0, 0, 0, 0, 0, 12095], [4, -1, 0, 0, 0, 0, 0, 0, 5214], [4, 0, -3, 0, 0, 0, 0, 0, 3320], [4, 0, 1, 0, 0, 0, 0, 0, 5588], [0, 0, 0, 0, 1, 0, 0, 0, -47126], [0, 0, 0, 0, 1, 0, 0, 1, -919], [0, 0, 0, 0, 2, 0, 0, 0, 19154], [0, 0, 0, 0, 2, 0, 0, 1, -8492], [0, 0, 0, 0, 0, 2, 0, 0, -7417], [0, 0, 0, 0, 0, 2, 0, 1, -1630]], MOON_LON_FIX0 = [75930, 38341];
const MOON_LAT_FIX = [[0, -1, -2, -1, 0, 0, 0, 0, 885], [0, -1, 2, 1, 0, 0, 0, 0, 1088], [0, 0, -3, 1, 0, 0, 0, 0, -2213], [0, 0, -1, -3, 0, 0, 0, 0, 1401], [0, 0, -1, 3, 0, 0, 0, 0, -3876], [0, 0, 0, -1, 0, 0, 0, 1, 2962], [0, 0, 0, 1, 0, 0, 0, 1, 2962], [0, 0, 1, -3, 0, 0, 0, 0, 3876], [0, 0, 1, 3, 0, 0, 0, 0, -1401], [0, 0, 3, -1, 0, 0, 0, 0, 2213], [0, 1, -2, -1, 0, 0, 0, 0, -1088], [0, 1, 2, 1, 0, 0, 0, 0, -885], [1, 0, -1, -1, 0, 0, 0, 0, -1179], [1, 0, 1, -1, 0, 0, 0, 0, -1609], [1, 0, 1, 1, 0, 0, 0, 0, -1819], [1, 1, 0, -1, 0, 0, 0, 0, 3578], [1, 1, 0, -1, 0, 0, 0, 1, 2131], [1, 1, 0, 1, 0, 0, 0, 0, 2228], [2, -2, 0, -1, 0, 0, 0, 0, 3005], [2, -2, 0, 1, 0, 0, 0, 0, 1073], [2, -1, -2, -1, 0, 0, 0, 0, 1810], [2, -1, 1, -1, 0, 0, 0, 0, 4927], [2, -1, 1, 1, 0, 0, 0, 0, 3140], [2, 0, -3, -1, 0, 0, 0, 0, 4209], [2, 0, -2, 1, 0, 0, 0, 0, -4526], [2, 0, 0, -3, 0, 0, 0, 0, 6054], [2, 0, 2, -1, 0, 0, 0, 0, 5950], [2, 0, 2, 1, 0, 0, 0, 0, 4251], [2, 1, -1, -1, 0, 0, 0, 0, -2196], [2, 1, -1, 1, 0, 0, 0, 0, -3635], [2, 1, 0, 1, 0, 0, 0, 0, -3486], [2, 1, 1, -1, 0, 0, 0, 0, -2314], [4, -1, -1, -1, 0, 0, 0, 0, 1660], [4, -1, 0, -1, 0, 0, 0, 0, 1180], [4, 0, -2, -1, 0, 0, 0, 0, 1757], [4, 0, -2, 1, 0, 0, 0, 0, 6724], [4, 0, 0, 1, 0, 0, 0, 0, 3338], [4, 0, 1, -1, 0, 0, 0, 0, 1318], [0, 0, 0, 0, 1, 0, 0, 0, 1749], [0, 0, 0, 0, 1, 0, 0, 1, -1776]], MOON_LAT_FIX0 = [10, -21];
const MOON_DIST = [[0, -2, 1, 0, 0, 0, 0, 1, -1056], [0, -1, -2, 0, 0, 0, 0, 1, 2867], [0, -1, -1, 0, 0, 0, 0, 1, 52384], [0, -1, 0, 0, 0, 0, 0, 1, 24431], [0, -1, 1, 0, 0, 0, 0, 1, -64838], [0, -1, 2, 0, 0, 0, 0, 1, -3483], [0, 0, -3, 0, 0, 0, 0, 1, -11604], [0, 0, -2, 0, 0, 0, 0, 1, -284960], [0, 0, -2, 2, 0, 0, 0, 1, -2204], [0, 0, -1, 0, 0, 0, 0, 0, -2031], [0, 0, -1, 0, 0, 0, 0, 1, -10452669], [0, 0, -1, 2, 0, 0, 0, 1, 39822], [0, 0, 0, -2, 0, 0, 0, 1, -1579], [0, 0, 0, 2, 0, 0, 0, 1, -1579], [0, 0, 1, -2, 0, 0, 0, 1, 39822], [0, 0, 1, 0, 0, 0, 0, 0, 2031], [0, 0, 1, 0, 0, 0, 0, 1, -10452669], [0, 0, 2, -2, 0, 0, 0, 1, -2204], [0, 0, 2, 0, 0, 0, 0, 1, -284960], [0, 0, 3, 0, 0, 0, 0, 1, -11604], [0, 1, -2, 0, 0, 0, 0, 1, -3483], [0, 1, -1, 0, 0, 0, 0, 1, -64838], [0, 1, 0, 0, 0, 0, 0, 1, 24431], [0, 1, 1, 0, 0, 0, 0, 1, 52384], [0, 1, 2, 0, 0, 0, 0, 1, 2867], [0, 2, -1, 0, 0, 0, 0, 1, -1056], [1, 0, -2, 0, 0, 0, 0, 1, -1749], [1, 0, -1, 0, 0, 0, 0, 0, -2542], [1, 0, -1, 0, 0, 0, 0, 1, -8410], [1, 0, 0, 0, 0, 0, 0, 0, 38360], [1, 0, 0, 0, 0, 0, 0, 1, 108711], [1, 0, 1, 0, 0, 0, 0, 0, 1049], [1, 0, 1, 0, 0, 0, 0, 1, 6332], [1, 1, 0, 0, 0, 0, 0, 1, -16689], [2, -2, -1, 0, 0, 0, 0, 1, -4976], [2, -2, 0, 0, 0, 0, 0, 1, -9876], [2, -1, -2, 0, 0, 0, 0, 1, 10035], [2, -1, -1, 0, 0, 0, 0, 1, -152163], [2, -1, 0, 0, 0, 0, 0, 1, -204591], [2, -1, 1, 0, 0, 0, 0, 1, -12851], [2, 0, -3, 0, 0, 0, 0, 1, 14406], [2, 0, -2, 0, 0, 0, 0, 1, 246166], [2, 0, -1, -2, 0, 0, 0, 1, 8778], [2, 0, -1, 0, 0, 0, 0, 1, -3699091], [2, 0, 0, -2, 0, 0, 0, 1, 10312], [2, 0, 0, 0, 0, 0, 0, 1, -2955990], [2, 0, 1, -2, 0, 0, 0, 1, 4151], [2, 0, 1, 0, 0, 0, 0, 1, -170741], [2, 0, 2, 0, 0, 0, 0, 1, -10460], [2, 1, -1, 0, 0, 0, 0, 1, 24219], [2, 1, 0, 0, 0, 0, 0, 1, 30815], [2, 1, 1, 0, 0, 0, 0, 1, 2640], [2, 2, -1, 0, 0, 0, 0, 1, 2342], [3, 0, -1, 0, 0, 0, 0, 1, 3259], [4, -1, -2, 0, 0, 0, 0, 1, -1949], [4, -1, -1, 0, 0, 0, 0, 1, -3949], [4, -1, 0, 0, 0, 0, 0, 1, -1547], [4, 0, -2, 0, 0, 0, 0, 1, -21606], [4, 0, -1, 0, 0, 0, 0, 1, -34778], [4, 0, 0, 0, 0, 0, 0, 1, -11682], [4, 0, 1, 0, 0, 0, 0, 1, -1433]], MOON_DIST0 = [9, 13];
function moonArgs(T){
  return [(297.8501921 + 445267.1114034 * T) * DEG, (357.5291092 + 35999.0502909 * T) * DEG, (134.9633964 + 477198.8675055 * T) * DEG,
          (93.2720950 + 483202.0175233 * T) * DEG, (125.04452 - 1934.136261 * T) * DEG, (280.4665 + 36000.7698 * T) * DEG, (218.3165 + 481267.8813 * T) * DEG];
}
function seriesSum(rows, base, T, scale){
  const a = moonArgs(T), E = 1 - 0.002516 * T - 0.0000074 * T * T;
  let s = base[0] + base[1] * T;
  for (const r of rows) {
    const arg = r[0] * a[0] + r[1] * a[1] + r[2] * a[2] + r[3] * a[3] + r[4] * a[4] + r[5] * a[5] + r[6] * a[6];
    s += r[8] * Math.pow(E, Math.abs(r[1])) * (r[7] ? Math.cos(arg) : Math.sin(arg));
  }
  return s / scale;
}
/* Distance Terre-Lune (km), centre à centre */
function moonDistance(ms){ return 385000.56 + seriesSum(MOON_DIST, MOON_DIST0, julianCenturies(ms), 1e3); }

/* Longitude géocentrique d'un corps (degrés, équinoxe de la date) */
function bodyLongitude(body, ms){
  if (body === 'sun') return sunLongitude(ms);
  if (body === 'moon') return moonLongitude(ms);
  const T = julianCenturies(ms);
  const p = heliocentric(body, T), e = heliocentric('earth', T);
  const lonJ2000 = Math.atan2(p[1] - e[1], p[0] - e[0]) / DEG;
  return norm360(lonJ2000 + 1.396971 * T + 0.0003086 * T * T);   // précession J2000 → date
}

/* Latitude écliptique géocentrique (degrés) : nulle pour le Soleil, série de Meeus (table 47.B) pour la Lune */
const MOON_LAT_TERMS = [ // [D, M, M', F, coefficient en millionièmes de degré]
  [0,0,0,1,5128122],[0,0,1,1,280602],[0,0,1,-1,277693],[2,0,0,-1,173237],[2,0,-1,1,55413],[2,0,-1,-1,46271],
  [2,0,0,1,32573],[0,0,2,1,17198],[2,0,1,-1,9266],[0,0,2,-1,8822],[2,-1,0,-1,8216],[2,0,-2,-1,4324],
  [2,0,1,1,4200],[2,1,0,-1,-3359],[2,-1,-1,1,2463],[2,-1,0,1,2211],[2,-1,-1,-1,2065],[0,1,-1,-1,-1870],
  [4,0,-1,-1,1828],[0,1,0,1,-1794],[0,0,0,3,-1749],[0,1,-1,1,-1565],[1,0,0,1,-1491],[0,1,1,1,-1475],
  [0,1,1,-1,-1410],[0,1,0,-1,-1344],[1,0,0,-1,-1335],[0,0,3,1,1107],[4,0,0,-1,1021],[4,0,-1,1,833]
];
function bodyLatitude(body, ms){
  const T = julianCenturies(ms);
  if (body === 'sun') return 0;
  if (body === 'moon') {
    const Lp = 218.3164477 + 481267.88123421 * T;
    const D  = (297.8501921 + 445267.1114034 * T) * DEG, M = (357.5291092 + 35999.0502909 * T) * DEG;
    const Mp = (134.9633964 + 477198.8675055 * T) * DEG, F = (93.2720950 + 483202.0175233 * T) * DEG;
    const E = 1 - 0.002516 * T - 0.0000074 * T * T;
    let sum = 0;
    for (const [d, m, mp, f, c] of MOON_LAT_TERMS) sum += c * Math.pow(E, Math.abs(m)) * Math.sin(d * D + m * M + mp * Mp + f * F);
    const A1 = (119.75 + 131.849 * T) * DEG, A3 = (313.45 + 481266.484 * T) * DEG;
    sum += -2235 * Math.sin(Lp * DEG) + 382 * Math.sin(A3) + 175 * Math.sin(A1 - F) + 175 * Math.sin(A1 + F)
         + 127 * Math.sin(Lp * DEG - Mp) - 115 * Math.sin(Lp * DEG + Mp);
    return sum / 1e6 + seriesSum(MOON_LAT_FIX, MOON_LAT_FIX0, T, 1e7);   // + corrections fines
  }
  const p = heliocentric(body, T), e = heliocentric('earth', T);
  const x = p[0] - e[0], y = p[1] - e[1], z = p[2] - e[2];
  return Math.atan2(z, Math.hypot(x, y)) / DEG;
}

/* Rétrograde : la longitude décroît sur ±12 h (jamais pour le Soleil et la Lune) */
function isRetrograde(body, ms){
  if (body === 'sun' || body === 'moon') return false;
  const d = norm360(bodyLongitude(body, ms + 432e5) - bodyLongitude(body, ms - 432e5) + 180) - 180;
  return d < 0;
}

/* Phase de la Lune : élongation (0 = nouvelle, 180 = pleine), 8 phases de 45°, fraction éclairée */
const MOON_PHASE_EMOJI = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];
function moonPhase(ms){
  const elong = norm360(moonLongitude(ms) - sunLongitude(ms));
  return { elong, index: Math.floor(((elong + 22.5) % 360) / 45), illumination: (1 - Math.cos(elong * DEG)) / 2 };
}

/* Positions de tous les corps à un instant */
function skyAt(ms){
  return BODIES.map(body => {
    const lon = bodyLongitude(body, ms);
    return { body, lon, sign: signFromLongitude(lon), retro: isRetrograde(body, ms) };
  });
}

/* Aspect « signe entier » entre le signe où se trouve un corps et le signe de la personne,
   comme dans les horoscopes de presse : même signe, trigone (4 ou 8 signes), carré (3 ou 9), opposition (6). */
const ASPECT_BY_DISTANCE = { 0:'conj', 3:'square', 4:'trine', 6:'opp', 8:'trine', 9:'square' };
function wholeSignAspect(bodySign, personSign){
  const d = (SIGN_ORDER.indexOf(bodySign) - SIGN_ORDER.indexOf(personSign) + 12) % 12;
  return ASPECT_BY_DISTANCE[d] || null;
}

/* Lune natale : phase, et signe(s) possibles (deux si elle change de signe ce jour-là et que l'heure manque) */
function natalMoon(date, time, tz){
  const at = time ? localInstant(date, time.h, time.min, tz) : localInstant(date, 12, 0, tz);
  const signs = time ? [signFromLongitude(moonLongitude(at))]
    : [...new Set([0, 12, 23.99].map(h => signFromLongitude(moonLongitude(localInstant(date, Math.floor(h), Math.round((h % 1) * 60), tz)))))];
  return { phase: moonPhase(at), signs };
}

/* Transits sur une période : chaque jour à midi (heure locale) de date sur `days` jours.
   Renvoie, par corps, les plages consécutives de même aspect et de rétrogradation.
   La Lune n'est suivie qu'en mode jour (elle change de signe tous les 2 jours et demi). */
function transits(personSign, date, days){
  const noons = Array.from({ length: days }, (_, i) => localInstant({ y: date.y, m: date.m, d: date.d + i }, 12, 0));
  const skies = noons.map(skyAt);
  const result = { aspects: [], retro: [], noons };
  for (const body of BODIES) {
    if (body === 'moon' && days > 1) continue;
    const idx = BODIES.indexOf(body);
    const aspectOf = i => wholeSignAspect(skies[i][idx].sign, personSign);
    const retroOf = i => skies[i][idx].retro;
    group(days, aspectOf).forEach(r => result.aspects.push({ body, aspect: r.value, from: r.from, to: r.to, sign: skies[r.from][idx].sign }));
    group(days, i => retroOf(i) || null).forEach(r => result.retro.push({ body, from: r.from, to: r.to }));
  }
  return result;
}
/* Regroupe les jours consécutifs de même valeur non nulle : [{value, from, to}] */
function group(days, valueOf){
  const out = [];
  for (let i = 0; i < days; i++) {
    const v = valueOf(i);
    if (!v) continue;
    const last = out[out.length - 1];
    if (last && last.value === v && last.to === i - 1) last.to = i; else out.push({ value: v, from: i, to: i });
  }
  return out;
}

/* Nouvelle Lune, premier quartier, pleine Lune, dernier quartier entre deux instants (ms UTC) */
const LUNAR_EVENTS = [[0, 'new'], [90, 'firstQuarter'], [180, 'full'], [270, 'lastQuarter']];
function lunarEvents(startMs, endMs){
  const out = [], step = 6 * 3600e3;
  const elong = ms => norm360(moonLongitude(ms) - sunLongitude(ms));
  for (const [target, type] of LUNAR_EVENTS) {
    const off = ms => norm360(elong(ms) - target + 180) - 180;   // passe de négatif à positif à l'événement
    for (let t = startMs; t < endMs; t += step) {
      let a = t, b = Math.min(t + step, endMs);
      if (off(a) < 0 && off(b) >= 0 && off(b) - off(a) < 90) {
        for (let k = 0; k < 30; k++) { const m = (a + b) / 2; if (off(m) < 0) a = m; else b = m; }
        out.push({ type, ms: (a + b) / 2 });
      }
    }
  }
  return out.sort((x, y) => x.ms - y.ms);
}

/* ---------- Compatibilité à deux ----------
   Personne = { date: {y, m, d}, time: {h, min} | null }. Trois axes, notés de 1 à 5 :
   signes solaires (matrice AFF), animaux chinois (relations traditionnelles), Lunes (matrice AFF sur les
   signes lunaires, seulement si les deux sont certains). L'entente globale est la moyenne des axes disponibles. */
function personChart(date, time, tz){
  return { sign: computeSky(date, time, tz).sign, cn: chineseYearInfo(date), moon: natalMoon(date, time, tz) };
}
function compatibility(p1, p2){
  const a = personChart(p1.date, p1.time, p1.tz), b = personChart(p2.date, p2.time, p2.tz);
  const west = { a: a.sign, b: b.sign, score: AFF[a.sign][b.sign] };
  const cn = a.cn && b.cn
    ? { a: a.cn.animal, b: b.cn.animal, rel: cnRelation(a.cn.animal, b.cn.animal), score: cnScore(a.cn.animal, b.cn.animal) }
    : null;
  const moonKnown = a.moon.signs.length === 1 && b.moon.signs.length === 1;
  const moon = moonKnown ? { a: a.moon.signs[0], b: b.moon.signs[0], score: AFF[a.moon.signs[0]][b.moon.signs[0]] } : null;
  const scores = [west, cn, moon].filter(Boolean).map(x => x.score);
  return { west, cn, moon, moonUnknown: !moonKnown, avg: scores.reduce((s, x) => s + x, 0) / scores.length };
}
