/* Zodiaque & Décans — ajout de textes dans les 14 fichiers de langue (zodiac-i18n-xx.js).
   Usage, depuis la racine du dépôt : node tools/regen_i18n.js textes.json
   textes.json : { "fr": { ...clés à ajouter ou remplacer... }, "en": { ... }, ... } (fusion profonde ; les tableaux sont remplacés).
   Les fichiers de langue sont réécrits proprement (en-tête conservé). Ne pas modifier ces fichiers à la main. */
const fs = require('fs'), vm = require('vm');
const path = require('path');
const DIR = path.join(__dirname, '..') + path.sep;   // racine du dépôt
const add = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const merge = (dst, src) => { for (const k in src) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k] && typeof dst[k] === 'object' && !Array.isArray(dst[k])) merge(dst[k], src[k]); else dst[k] = src[k]; } };
const LANGS = ['fr', ...fs.readdirSync(DIR).map(f => (f.match(/^zodiac-i18n-(\w+)\.js$/) || [])[1]).filter(l => l && l !== 'fr').sort()];
const ctx = { console }; vm.createContext(ctx);
vm.runInContext(['zodiac-i18n.js', ...LANGS.map(l => `zodiac-i18n-${l}.js`)].map(f => fs.readFileSync(DIR + f, 'utf8')).join('\n') + ';globalThis.__I=I18N;', ctx);
const key = k => /^[A-Za-z_$][\w$]*$|^\d+$/.test(k) ? k : JSON.stringify(k);
const isPrim = x => x === null || typeof x !== 'object';
function fmt(v, ind){
  const pad = '  '.repeat(ind), pad1 = '  '.repeat(ind + 1);
  if (Array.isArray(v)) {
    if (v.every(x => isPrim(x) || (Array.isArray(x) && x.every(isPrim)))) return JSON.stringify(v).replace(/","/g, '", "').replace(/\],"/g, '], "');
    return '[\n' + v.map(x => pad1 + fmt(x, ind + 1)).join(',\n') + '\n' + pad + ']';
  }
  if (v && typeof v === 'object') {
    const ks = Object.keys(v);
    const one = '{ ' + ks.map(k => key(k) + ': ' + fmt(v[k], 0)).join(', ') + ' }';
    if (one.length <= 100 && !one.includes('\n')) return one;
    return '{\n' + ks.map(k => pad1 + key(k) + ': ' + fmt(v[k], ind + 1)).join(',\n') + '\n' + pad + '}';
  }
  return JSON.stringify(v);
}
for (const l of LANGS) {
  const obj = JSON.parse(JSON.stringify(ctx.__I[l]));
  merge(obj, add[l]);
  const file = DIR + `zodiac-i18n-${l}.js`;
  const old = fs.readFileSync(file, 'utf8');
  const banner = old.slice(0, old.indexOf('I18N.'));
  const body = fmt(obj, 0);
  fs.writeFileSync(file, banner + (l === 'fr' ? `I18N.fr = ${body};\n` : `I18N.${l} = deepMerge(I18N.fr, ${body});\n`));
}
console.log(LANGS.length + ' fichiers de langue régénérés');
