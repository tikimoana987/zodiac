/* ============================================================
   Zodiaque & Décans — numérologie
   Chemin de vie, cycles personnels (année, mois, jour), nombres du nom : expression (toutes les lettres),
   nombre intime (voyelles), personnalité (consonnes). Trois écritures : latine (méthode pythagoricienne),
   arabe (valeurs abjad) et cyrillique (table russe). Fonctions pures, sans DOM.
   ============================================================ */

const MASTER_NUMBERS = [11, 22, 33];
function digitSum(n){ let s = 0; for (const c of String(n)) s += +c; return s; }
/* Réduction à un chiffre de 1 à 9 ; les nombres maîtres 11, 22, 33 sont gardés si masters est vrai */
function reduceNumber(n, masters = true){
  while (n > 9 && !(masters && MASTER_NUMBERS.includes(n))) n = digitSum(n);
  return n;
}
/* Chemin de vie : jour, mois et année réduits séparément (nombres maîtres gardés), puis additionnés et réduits */
function lifePath(date){
  return reduceNumber(reduceNumber(date.d) + reduceNumber(date.m) + reduceNumber(digitSum(date.y)));
}
/* Cycles personnels pour une date de lecture : année (cycle de 9 ans), mois, jour — de 1 à 9 */
function personalCycles(birth, on){
  const year = reduceNumber(reduceNumber(birth.d, false) + reduceNumber(birth.m, false) + reduceNumber(on.y, false), false);
  const month = reduceNumber(year + on.m, false);
  return { year, month, day: reduceNumber(month + on.d, false) };
}

/* ---------- Nombres du nom ---------- */
const CYRILLIC_ORDER = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const ABJAD = { 'ا': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9, 'ي': 10, 'ك': 20, 'ل': 30, 'م': 40, 'ن': 50,
  'س': 60, 'ع': 70, 'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000 };

/* Lettres latines de base (accents retirés, ligatures et lettres particulières ramenées à l'alphabet de 26 lettres) */
function latinLetters(name){
  const special = { 'ß': 'ss', 'æ': 'ae', 'œ': 'oe', 'ø': 'o', 'ł': 'l', 'đ': 'd', 'ı': 'i', 'þ': 'th', 'ð': 'd' };
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[ßæœøłđıþð]/g, c => special[c]).replace(/[^a-z]/g, '');
}
function cyrillicLetters(name){
  const uk = { 'і': 'и', 'ї': 'и', 'є': 'е', 'ґ': 'г', 'ў': 'у' };   // lettres ukrainiennes et biélorusses ramenées au russe
  return name.toLowerCase().replace(/[іїєґў]/g, c => uk[c]).replace(/й/g, 'й').split('').filter(c => CYRILLIC_ORDER.includes(c)).join('');
}
function arabicLetters(name){
  return name.normalize('NFC').replace(/[\u064b-\u065f\u0670\u0640]/g, '')   // voyelles brèves, tatweel
    .replace(/[أإآٱء]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
    .split('').filter(c => ABJAD[c]).join('');
}
/* Y voyelle s'il n'est pas à côté d'une autre voyelle (Yvette, Sylvie) ; consonne sinon (Maya, Yann) */
function latinVowelMask(letters){
  const v = c => c !== undefined && c.length === 1 && 'aeiou'.includes(c);   // attention : 'aeiou'.includes('') vaut true
  return letters.split('').map((c, i) => v(c) || (c === 'y' && !v(letters[i - 1]) && !v(letters[i + 1])));
}
/* Nombres du nom, dans l'écriture majoritaire du nom ; null si aucune lettre utilisable.
   { system: 'latin' | 'cyrillic' | 'abjad', expression, soul, personality, abjadTotal } (soul et personality : null en abjad) */
function nameNumbers(name){
  if (!name) return null;
  const words = name.trim().split(/\s+/);
  const lat = words.map(latinLetters), cyr = words.map(cyrillicLetters), ara = words.map(arabicLetters);
  const len = arr => arr.join('').length, counts = { latin: len(lat), cyrillic: len(cyr), abjad: len(ara) };
  const system = Object.keys(counts).reduce((a, b) => (counts[b] > counts[a] ? b : a));
  if (!counts[system]) return null;
  if (system === 'abjad') {
    const total = ara.join('').split('').reduce((s, c) => s + ABJAD[c], 0);
    return { system, expression: reduceNumber(total), soul: null, personality: null, abjadTotal: total };
  }
  let all = 0, vow = 0, cons = 0;
  for (const w of (system === 'latin' ? lat : cyr)) {
    const mask = system === 'latin' ? latinVowelMask(w) : w.split('').map(c => 'аеёиоуыэюя'.includes(c));
    w.split('').forEach((c, i) => {
      const value = system === 'latin' ? (c.charCodeAt(0) - 97) % 9 + 1 : CYRILLIC_ORDER.indexOf(c) % 9 + 1;
      all += value; if (mask[i]) vow += value; else cons += value;
    });
  }
  return { system, expression: reduceNumber(all), soul: vow ? reduceNumber(vow) : null, personality: cons ? reduceNumber(cons) : null, abjadTotal: null };
}
