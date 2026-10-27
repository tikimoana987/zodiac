/* ============================================================
   Zodiaque & Décans — tarot (arcanes majeurs)
   Deux jeux : tarot de Marseille (par défaut) et Waite-Smith. Mêmes 22 arcanes ; noms en partie différents,
   Force et Justice échangent leurs numéros (XI et VIII à Marseille, VIII et XI chez Waite-Smith),
   Le Mat n'a pas de numéro à Marseille (0 chez Waite-Smith), l'arcane XIII n'y porte pas de nom.
   Illustrations : zodiac-tarot-art.js (générées avec Gemini), habillées différemment selon le jeu. Fonctions pures, sans DOM.
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

/* ---------- Cartes (120 × 216) ----------
   Illustration (zodiac-tarot-art.js) encadrée par le numéro en haut et le nom en bas, habillage selon le jeu
   (Marseille : parchemin et bandeaux jaunes ; Waite-Smith : ivoire et cadre fin). Arcane XIII sans nom à Marseille. */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
function tarotCardSvg(key, deck, name, reversed = false){
  const numeral = tarotNumeral(key, deck), banner = deck === 'marseille' && key === 'death' ? '' : name;
  // Taille du nom adaptée à sa longueur (0,56 em par caractère, 100 unités) ; compression seulement en dernier recours
  const fs = Math.min(9.5, 100 / (Math.max(banner.length, 1) * 0.56));
  const fit = fs < 6.5 ? ` style="font-size:6.5px" textLength="100" lengthAdjust="spacingAndGlyphs"` : fs < 9.5 ? ` style="font-size:${fs.toFixed(1)}px"` : '';
  const art = typeof TAROT_ART_IMG !== 'undefined' ? TAROT_ART_IMG[key] : '';
  return `<svg class="tarot-card deck-${deck}${reversed ? ' is-reversed' : ''}" viewBox="0 0 120 216" role="img" aria-label="${esc(name)}">
    <rect class="t-face" x="2" y="2" width="116" height="212" rx="8"/>
    <image href="${art}" x="8" y="26" width="104" height="166" preserveAspectRatio="xMidYMid slice"/>
    <rect class="t-art-frame" x="8" y="26" width="104" height="166"/>
    <rect class="t-band" x="7" y="6" width="106" height="19" rx="4"/><text class="t-num" x="60" y="20">${numeral}</text>
    <rect class="t-band" x="7" y="193" width="106" height="17" rx="4"/><text class="t-name" x="60" y="205"${fit}>${esc(banner)}</text></svg>`;
}
/* Dos de carte : mandala pour Marseille, étoile pour Waite-Smith */
function tarotBackSvg(deck, label){
  const art = typeof TAROT_ART_IMG !== 'undefined' ? TAROT_ART_IMG['back_' + deck] : '';
  return `<svg class="tarot-card tarot-back deck-${deck}" viewBox="0 0 120 216" role="img" aria-label="${esc(label)}">
    <rect class="t-back-face" x="2" y="2" width="116" height="212" rx="8"/>
    <image href="${art}" x="6" y="6" width="108" height="204" preserveAspectRatio="xMidYMid meet"/></svg>`;
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
