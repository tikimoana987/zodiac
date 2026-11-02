#!/usr/bin/env node
/* Génération locale, déterministe et sans réseau des articles « En savoir plus »
   à partir des JSON validés (data/articles/articles-xx.json). Exécution : node tools/regen_articles.js
   Toute anomalie arrête la génération : clé manquante ou en trop, texte vide, accolade, nombre de sources
   différent du français, apostrophe courbe (langues en alphabet latin), deux-points ou point final en thaï,
   article sans le nom ZODIAC dans « Comment ZODIAC l'applique ». Cahier : docs/cahier-articles.md */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const langs = ['fr','en','es','pt','it','de','tr','ru','ar','hi','th','zh','ja','ko'];
const LATIN = ['fr','en','es','pt','it','de','tr'];
const ARTICLES = ['signs','chinese','natal','sky','compat','numerology','square','portrait','tarot','oracle'];
const SECTIONS = ['history','principle','zodiac','notThis'];
const LABELS = ['more','history','principle','zodiac','notThis','sources'];
const fail = msg => { throw new Error(msg); };
const sameKeys = (obj, keys, where) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) fail(`${where} : objet requis`);
  const got = Object.keys(obj), missing = keys.filter(k => !got.includes(k)), extra = got.filter(k => !keys.includes(k));
  if (missing.length || extra.length) fail(`${where} : clés manquantes [${missing}] ou en trop [${extra}]`);
};
function text(s, lang, where){
  if (typeof s !== 'string' || !s.trim()) fail(`${where} : texte vide ou absent`);
  if (s !== s.trim() || / {2}/.test(s)) fail(`${where} : espaces en trop`);
  if (/[{}<>]/.test(s)) fail(`${where} : accolade ou chevron interdit`);
  if (LATIN.includes(lang) && /[‘’]/.test(s)) fail(`${where} : apostrophe courbe`);
  if (lang === 'th' && (/[:：]/.test(s) || /\.$/.test(s))) fail(`${where} : deux-points ou point final en thaï`);
  return 1;
}
const all = {}, missing = [];
let sourcesFr = null;
for (const lang of langs) {
  const file = path.join(root, 'data', 'articles', `articles-${lang}.json`);
  if (!fs.existsSync(file)) { missing.push(lang); continue; }
  const obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  sameKeys(obj, ['lang','labels','articles'], lang);
  if (obj.lang !== lang) fail(`${lang} : code langue`);
  sameKeys(obj.labels, LABELS, `${lang}.labels`);
  let n = LABELS.reduce((s, k) => s + text(obj.labels[k], lang, `${lang}.labels.${k}`), 0);
  sameKeys(obj.articles, ARTICLES, `${lang}.articles`);
  for (const id of ARTICLES) {
    const a = obj.articles[id], where = `${lang}.articles.${id}`;
    sameKeys(a, ['title', ...SECTIONS, 'sources'], where);
    n += text(a.title, lang, `${where}.title`);
    for (const s of SECTIONS) n += text(a[s], lang, `${where}.${s}`);
    if (!a.zodiac.includes('ZODIAC')) fail(`${where}.zodiac : nom ZODIAC absent`);
    if (!Array.isArray(a.sources)) fail(`${where}.sources : liste requise`);
    a.sources.forEach((s, i) => { n += text(s, lang, `${where}.sources[${i}]`); });
  }
  const counts = ARTICLES.map(id => obj.articles[id].sources.length).join(',');
  if (lang === 'fr') sourcesFr = counts;
  else if (counts !== sourcesFr) fail(`${lang} : nombre de sources différent du français (${counts} / ${sourcesFr})`);
  all[lang] = obj;
  console.log(`${lang} : ${n} textes vérifiés`);
}
if (!all.fr) fail('fr : fichier de référence absent');
const data = JSON.stringify(all).replace(/</g, '\\u003c');
fs.writeFileSync(path.join(root, 'zodiac-articles-data.js'),
  '/* Généré par tools/regen_articles.js — NE PAS ÉDITER. Sources : data/articles/articles-xx.json. */\n' +
  'const ARTICLES_I18N = Object.freeze(' + data + ');\n', 'utf8');
console.log(`zodiac-articles-data.js régénéré (${Object.keys(all).length} langue(s))` + (missing.length ? ` — en attente : ${missing.join(', ')}` : ''));
