/* ============================================================
   Zodiaque & Décans — tarot (arcanes majeurs)
   Deux jeux : tarot de Marseille (par défaut) et Waite-Smith. Mêmes 22 arcanes ; noms en partie différents,
   Force et Justice échangent leurs numéros (XI et VIII à Marseille, VIII et XI chez Waite-Smith),
   Le Mat n'a pas de numéro à Marseille (0 chez Waite-Smith), l'arcane XIII n'y porte pas de nom.
   Illustrations : dessins originaux (symboles), habillés différemment selon le jeu. Fonctions pures, sans DOM.
   Dépend de zodiac-numerology.js (digitSum).
   ============================================================ */

const TAROT_KEYS = ['fool', 'magician', 'priestess', 'empress', 'emperor', 'hierophant', 'lovers', 'chariot', 'strength', 'hermit', 'wheel',
  'justice', 'hangedman', 'death', 'temperance', 'devil', 'tower', 'star', 'moon', 'sun', 'judgement', 'world'];   // ordre Waite-Smith, 0 à 21
const TAROT_DECKS = ['marseille', 'ws'];

/* Numéro d'un arcane dans un jeu (0 pour Le Fou) */
function tarotNumber(key, deck){
  if (deck === 'marseille' && key === 'strength') return 11;
  if (deck === 'marseille' && key === 'justice') return 8;
  return TAROT_KEYS.indexOf(key);
}
/* Arcane portant un numéro dans un jeu (22 et 0 : Le Fou) */
function tarotByNumber(n, deck){
  if (n === 0 || n === 22) return 'fool';
  if (deck === 'marseille' && n === 8) return 'justice';
  if (deck === 'marseille' && n === 11) return 'strength';
  return TAROT_KEYS[n];
}
function romanNumeral(n){
  const table = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let out = '';
  for (const [v, s] of table) while (n >= v) { out += s; n -= v; }
  return out;
}
/* Numéro inscrit sur la carte : rien pour Le Mat à Marseille, « 0 » pour Le Fou chez Waite-Smith */
function tarotNumeral(key, deck){
  const n = tarotNumber(key, deck);
  return n === 0 ? (deck === 'marseille' ? '' : '0') : romanNumeral(n);
}
/* Carte de naissance : jour + mois + année, réduits par somme des chiffres jusqu'à 22 ou moins (22 : Le Fou) */
function birthCardNumber(date){
  let s = date.d + date.m + date.y;
  while (s > 22) s = digitSum(s);
  return s;
}
/* Carte du jour : tirage figé pour une personne et une date (empreinte FNV-1a), identique dans les deux jeux */
function dayCardKey(birthISO, dayISO){
  let h = 2166136261;
  for (const c of `${birthISO}|${dayISO}|tarot`) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
  return TAROT_KEYS[h % 22];
}

/* ---------- Illustrations (repère 100 × 100) ----------
   Classes : ta / tb / tc = couleurs 1, 2, 3 du jeu ; tf = encre pleine ; ti = trait d'encre ; tw = trait épais */
function tStar(cx, cy, r, n, inner = 0.45){
  let d = '';
  for (let i = 0; i < 2 * n; i++) {
    const a = Math.PI * i / n - Math.PI / 2, rr = i % 2 ? r * inner : r;
    d += `${i ? 'L' : 'M'}${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }
  return `<path class="tc" d="${d}Z"/>`;
}
function tRays(cx, cy, r1, r2, n){
  let d = '';
  for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n; d += `M${(cx + r1 * Math.cos(a)).toFixed(1)} ${(cy + r1 * Math.sin(a)).toFixed(1)}L${(cx + r2 * Math.cos(a)).toFixed(1)} ${(cy + r2 * Math.sin(a)).toFixed(1)}`; }
  return `<path class="ti" d="${d}"/>`;
}
const T_INFINITY = (x, y, w) => `<path class="tw" d="M${x} ${y}c0-${w / 3} ${w / 2.2}-${w / 3} ${w / 2} 0s${w / 2} ${w / 3} ${w / 2} 0-${w / 2.2}-${w / 3}-${w / 2} 0-${w / 2} ${w / 3}-${w / 2} 0z"/>`;
const T_WAVES = y => `<path class="tb-l" d="M8 ${y}q7-5 14 0t14 0 14 0 14 0 14 0 14 0 14 0"/><path class="tb-l" d="M8 ${y + 7}q7-5 14 0t14 0 14 0 14 0 14 0 14 0 14 0"/>`;
const TAROT_ART = {
  fool: `<path class="ti" d="M6 92H58V80H94"/><path class="tw" d="M28 90 54 30"/><circle class="tb" cx="56" cy="27" r="7"/><circle class="ta" cx="20" cy="85" r="3"/>${tStar(80, 22, 9, 8)}`,
  magician: `${T_INFINITY(32, 18, 36)}<rect class="ta" x="12" y="62" width="76" height="8" rx="2"/><path class="ti" d="M18 70V92M82 70V92"/>
    <path class="tb" d="M20 50h12l-3 10h-6z"/><circle class="tc" cx="44" cy="55" r="6"/><path class="tw" d="M58 40 62 61"/><path class="tw" d="M76 36V61M71 52h10"/>`,
  priestess: `<rect class="tf" x="10" y="18" width="12" height="76"/><rect class="ti" x="78" y="18" width="12" height="76"/>
    <path class="tc" d="M44 10a14 14 0 1 0 14 22 11 11 0 1 1-14-22z"/><rect class="tb" x="36" y="50" width="28" height="34" rx="4"/><path class="ti" d="M42 60h16M42 68h16M42 76h10"/>`,
  empress: `<circle class="tc" cx="50" cy="38" r="17"/><circle class="ti" cx="50" cy="38" r="17"/><path class="tw" d="M50 55V92M36 74h28"/>
    <path class="ta" d="M16 92c-2-18 2-34 8-44 4 12 3 30-8 44z"/><path class="ta" d="M84 92c2-18-2-34-8-44-4 12-3 30 8 44z"/>`,
  emperor: `<rect class="tb" x="24" y="46" width="44" height="44"/><path class="tc" d="M24 46l6-12 8 8 8-12 8 12 8-8 6 12z"/><path class="tw" d="M82 26V92"/><circle class="tc" cx="82" cy="20" r="7"/><circle class="ti" cx="82" cy="20" r="7"/>`,
  hierophant: `<path class="tw" d="M50 8V92M42 20h16M36 32h28M30 44h40"/><g class="tkeys"><path class="tw" d="M24 92 46 66M76 92 54 66"/><circle class="tc" cx="22" cy="94" r="5"/><circle class="tc" cx="78" cy="94" r="5"/></g>`,
  lovers: `<circle class="ti ta-s" cx="38" cy="64" r="18"/><circle class="ti tb-s" cx="62" cy="64" r="18"/><path class="tw" d="M86 8 56 40"/><path class="tc" d="M52 44l2-12 10 8z"/>${tRays(86, 8, 6, 12, 8)}`,
  chariot: `<path class="tb" d="M14 40Q50 12 86 40z"/><circle class="tc" cx="36" cy="30" r="2"/><circle class="tc" cx="50" cy="25" r="2"/><circle class="tc" cx="64" cy="30" r="2"/>
    <rect class="ta" x="22" y="44" width="56" height="30" rx="3"/><circle class="ti" cx="24" cy="80" r="12"/><circle class="ti" cx="76" cy="80" r="12"/>${tRays(24, 80, 0, 12, 6)}${tRays(76, 80, 0, 12, 6)}`,
  strength: `${T_INFINITY(36, 14, 28)}<circle class="tc" cx="50" cy="62" r="26"/><circle class="ti tdash" cx="50" cy="62" r="30"/><circle class="tf" cx="42" cy="58" r="3"/><circle class="tf" cx="58" cy="58" r="3"/><path class="ti" d="M43 72q7 6 14 0"/>`,
  hermit: `<path class="tw" d="M72 12V94"/><path class="ti" d="M30 30h24M42 30v6"/><path class="tb" d="M28 36h28l4 10-4 28H28l-4-28z"/>${tStar(42, 55, 11, 6, 0.55)}`,
  wheel: `<circle class="tw" cx="50" cy="52" r="34"/><circle class="tc" cx="50" cy="52" r="9"/>${tRays(50, 52, 9, 34, 8)}<circle class="ta" cx="50" cy="18" r="5"/><circle class="tb" cx="84" cy="52" r="5"/><circle class="ta" cx="50" cy="86" r="5"/><circle class="tb" cx="16" cy="52" r="5"/>`,
  justice: `<path class="tw" d="M50 8V70M40 22h20"/><path class="tw" d="M18 40H82"/><path class="ti" d="M24 40 16 62M24 40 32 62M76 40 68 62M76 40 84 62"/>
    <path class="tc" d="M12 62h24a12 8 0 0 1-24 0z"/><path class="tc" d="M64 62h24a12 8 0 0 1-24 0z"/><rect class="ta" x="36" y="80" width="28" height="12" rx="2"/>`,
  hangedman: `<path class="tw" d="M14 12H86M22 12V94M78 12V94"/><path class="ti" d="M50 12V30"/><path class="tb" d="M44 30h12l-2 26H46z"/><path class="ti" d="M50 30l12 10"/>
    <circle class="tc" cx="50" cy="70" r="13"/><circle class="ta" cx="50" cy="66" r="7"/>`,
  death: `<path class="tw" d="M28 94 62 10"/><path class="ta" d="M62 10q26 4 30 26-12-16-32-14z"/><path class="tb" d="M70 92c0-10 4-16 10-18-1 8-4 14-10 18z"/><path class="tb" d="M70 92c0-8-4-13-10-14 1 7 4 11 10 14z"/>
    <path class="tc" d="M4 94a18 18 0 0 1 36 0z"/>`,
  temperance: `<path class="ta" d="M16 22h22l-4 18H20z"/><path class="tb" d="M62 66h22l-4 18H66z"/><path class="tb-l tthick" d="M34 38Q50 44 62 70"/>${tStar(50, 12, 7, 5)}<path class="ti" d="M10 94H90"/>`,
  devil: `<path class="ta" d="M30 34C18 26 16 12 22 4c2 12 10 18 18 22zM70 34c12-8 14-22 8-30-2 12-10 18-18 22z"/><path class="tc" d="M30 34h40L50 66z"/><circle class="tf" cx="43" cy="42" r="3"/><circle class="tf" cx="57" cy="42" r="3"/>
    <ellipse class="ti" cx="38" cy="82" rx="10" ry="6"/><ellipse class="ti" cx="54" cy="82" rx="10" ry="6"/><ellipse class="ti" cx="70" cy="82" rx="10" ry="6"/>`,
  tower: `<rect class="tb" x="36" y="34" width="28" height="60"/><path class="ti" d="M36 50h28M36 66h28M36 82h28M50 34v16M44 50v16M56 66v16"/><path class="ta" d="M34 30l4-10 6 6 6-8 6 8 6-6 4 10z" transform="rotate(-18 50 24)"/>
    <path class="tc" d="M92 2 70 20h10L62 38l26-22H78z"/><rect class="ta" x="16" y="56" width="6" height="6" transform="rotate(20 19 59)"/><rect class="ta" x="76" y="70" width="6" height="6" transform="rotate(-25 79 73)"/>`,
  star: `${tStar(50, 34, 24, 8, 0.4)}${[[18, 14], [82, 14], [14, 44], [86, 44], [24, 66], [76, 66], [50, 70]].map(([x, y]) => `<circle class="tc" cx="${x}" cy="${y}" r="3"/>`).join('')}${T_WAVES(84)}`,
  moon: `<path class="tc" d="M44 6a22 22 0 1 0 22 30 18 18 0 1 1-22-30z"/><rect class="ti" x="8" y="48" width="14" height="34"/><rect class="ti" x="78" y="48" width="14" height="34"/>
    <circle class="tc" cx="34" cy="50" r="2"/><circle class="tc" cx="50" cy="56" r="2"/><circle class="tc" cx="66" cy="50" r="2"/><path class="ti" d="M50 94C46 84 54 76 50 66"/>${T_WAVES(86)}`,
  sun: `${tRays(50, 38, 20, 34, 16)}<circle class="tc" cx="50" cy="38" r="18"/><circle class="ti" cx="50" cy="38" r="18"/><rect class="ta" x="8" y="76" width="84" height="16"/><path class="ti" d="M8 84h84M22 76v8M40 84v8M58 76v8M76 84v8"/>`,
  judgement: `<ellipse class="tb" cx="62" cy="16" rx="30" ry="10"/><path class="tc" d="M16 30 58 22l4 10-42 10z"/><path class="tc" d="M14 26a8 8 0 0 1 0 20z"/><rect class="ta" x="34" y="34" width="16" height="16"/>
    <path class="ti" d="M42 37v10M37 42h10"/>${tRays(24, 92, 8, 18, 10)}<path class="ti" d="M10 94H90"/>`,
  world: `<ellipse class="tb-l tthick tdash" cx="50" cy="52" rx="26" ry="36"/>${tStar(50, 52, 10, 5)}<circle class="ta" cx="12" cy="12" r="6"/><circle class="tb" cx="88" cy="12" r="6"/><circle class="tc" cx="12" cy="92" r="6"/><circle class="tf" cx="88" cy="92" r="6"/>`
};
/* Carte complète (120 × 200) : numéro en haut, symbole, nom en bas (vide pour l'arcane XIII à Marseille) */
function tarotCardSvg(key, deck, name){
  const numeral = tarotNumeral(key, deck), banner = deck === 'marseille' && key === 'death' ? '' : name;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  // Taille du nom adaptée à sa longueur (largeur estimée à 0,56 em par caractère, 100 unités disponibles) ;
  // compression seulement en dernier recours, pour ne jamais agrandir un nom court
  const fs = Math.min(9.5, 100 / (Math.max(banner.length, 1) * 0.56));
  const fit = fs < 6.5 ? ` style="font-size:6.5px" textLength="100" lengthAdjust="spacingAndGlyphs"` : fs < 9.5 ? ` style="font-size:${fs.toFixed(1)}px"` : '';
  return `<svg class="tarot-card deck-${deck}" viewBox="0 0 120 200" role="img" aria-label="${esc(name)}">
    <rect class="t-face" x="2" y="2" width="116" height="196" rx="8"/><rect class="t-inner" x="7" y="7" width="106" height="186" rx="5"/>
    <rect class="t-band" x="7" y="7" width="106" height="24" rx="5"/><text class="t-num" x="60" y="24">${numeral}</text>
    <g transform="translate(10 40)">${TAROT_ART[key]}</g>
    <rect class="t-band" x="7" y="160" width="106" height="33" rx="5"/><text class="t-name" x="60" y="181"${fit}>${esc(banner)}</text></svg>`;
}

/* ---------- Tirage à trois cartes (passé, présent, avenir) ----------
   Hasard du navigateur réservé aux usages cryptographiques (repli sur Math.random) ; n arcanes distincts. */
function secureRandom(){
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296;
  return Math.random();
}
function drawCards(n, rnd = secureRandom){
  const deck = TAROT_KEYS.slice();
  for (let i = 0; i < n; i++) { const j = i + Math.floor(rnd() * (deck.length - i)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
  return deck.slice(0, n);
}
