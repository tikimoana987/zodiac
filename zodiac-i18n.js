/* ============================================================
   Zodiaque & Décans — traductions (noyau)
   Objet I18N et fusion récursive. À charger avant les fichiers zodiac-i18n-xx.js.
   ============================================================ */

const I18N = {};

/* Fusion récursive sur la base FR : une clé absente (à n'importe quelle profondeur) retombe sur le
   français au lieu de provoquer une erreur. Les tableaux sont remplacés en entier. */
function isPlainObject(v){ return v !== null && typeof v === 'object' && !Array.isArray(v); }
function deepMerge(base, over){
  if (!isPlainObject(base) || !isPlainObject(over)) return over === undefined ? JSON.parse(JSON.stringify(base)) : over;
  const out = {};
  for (const k in base) out[k] = deepMerge(base[k], over[k]);
  for (const k in over) if (!(k in base)) out[k] = over[k];
  return out;
}

/* Langues de l'appli : code, nom dans sa propre langue. Le menu n'affiche que celles dont le fichier est chargé.
   Ordre : langues européennes, puis Moyen-Orient, Inde, Asie. */
const LANGS = [
  ['fr', 'Français'], ['en', 'English'], ['es', 'Español'], ['pt', 'Português (Brasil)'], ['it', 'Italiano'], ['de', 'Deutsch'],
  ['tr', 'Türkçe'], ['ru', 'Русский'], ['ar', 'العربية'], ['hi', 'हिन्दी'], ['th', 'ไทย'], ['zh', '中文'], ['ja', '日本語'], ['ko', '한국어']
];
const RTL_LANGS = ['ar'];   // écriture de droite à gauche
/* Formats de date et de nombre : portugais du Brésil ; arabe avec chiffres occidentaux, cohérents avec les degrés
   et les heures affichés ailleurs. Le thaï garde le calendrier bouddhiste (2525 pour 1982), comme en Thaïlande. */
const INTL_LOCALE = { pt: 'pt-BR', ar: 'ar-u-nu-latn' };
const loc = lang => INTL_LOCALE[lang] || lang;
