/* ============================================================
   Zodiaque & Décans — Carré de Pythagore (cahier docs/cahier-carre-pythagore.md, V0.2)
   Méthode d'Alexandrov avant 2000, variante moderne « + 19 » depuis 2000 ; zéros ignorés.
   Neuf cases (chiffres 1 à 9) et huit lignes ; niveaux des lignes calibrés pour chaque siècle.
   Calcul local à partir de la date ; rien n'est envoyé ni enregistré.
   ============================================================ */
const SQUARE_LINES = [['r147', [1, 4, 7]], ['r258', [2, 5, 8]], ['r369', [3, 6, 9]], ['c123', [1, 2, 3]],
  ['c456', [4, 5, 6]], ['c789', [7, 8, 9]], ['d159', [1, 5, 9]], ['d357', [3, 5, 7]]];
/* Seuils des lignes : [niveau discret jusqu'à, niveau marqué à partir de], calibrés sur les naissances de 1900-1999 et de 2000-2026 */
const SQUARE_THRESHOLDS = {
  19: { r147: [3, 6], r258: [2, 5], r369: [3, 6], c123: [5, 8], c456: [1, 3], c789: [2, 4], d159: [4, 7], d357: [2, 5] },
  20: { r147: [3, 6], r258: [3, 5], r369: [2, 4], c123: [5, 8], c456: [1, 4], c789: [1, 4], d159: [3, 6], d357: [2, 4] }
};
const sqSum = n => String(Math.abs(n)).split('').reduce((a, c) => a + +c, 0);

/* Carré d'une date { y, m, d } : nombres de travail, chiffres par case, niveau de chaque ligne */
function pythagorasSquare(date){
  const s = String(date.d).padStart(2, '0') + String(date.m).padStart(2, '0') + String(date.y).padStart(4, '0');
  const a1 = sqSum(+s), a2 = sqSum(a1);
  const first = s[0] !== '0' ? +s[0] : +s[1];   // premier chiffre non nul du jour
  const a3 = date.y >= 2000 ? a1 + 19 : a1 - 2 * first;
  const a4 = sqSum(a3);
  const all = s + a1 + a2 + Math.abs(a3) + a4;
  const counts = {};
  for (let k = 1; k <= 9; k++) counts[k] = all.split('').filter(c => c === String(k)).length;
  const th = SQUARE_THRESHOLDS[date.y >= 2000 ? 20 : 19], lines = {};
  for (const [key, cells] of SQUARE_LINES) {
    const sum = cells.reduce((a, k) => a + counts[k], 0), [lo, hi] = th[key];
    lines[key] = { sum, level: sum <= lo ? 'low' : sum >= hi ? 'high' : 'mid' };
  }
  return { working: [a1, a2, a3, a4], counts, lines };
}
/* Niveau du texte d'une case : 0 à 3 (case 1 : un ou moins, deux, trois, quatre ou plus) */
function squareCellLevel(k, n){ return k === 1 ? (n <= 1 ? 0 : Math.min(n - 1, 3)) : Math.min(n, 3); }
function squareTexts(t){ return t.num.square || I18N.fr.num.square; }

let squareSel = 'c1', squareOpen = false, squareFor = '';

function squareHtml(t, date){
  const sq = squareTexts(t), r = pythagorasSquare(date), key = `${date.y}-${date.m}-${date.d}`;
  if (key !== squareFor) { squareFor = key; squareSel = 'c1'; squareOpen = false; }
  const digits = k => String(k).repeat(r.counts[k]);
  const cellText = k => sq.cells['c' + k]['l' + squareCellLevel(k, r.counts[k])];
  const lineLabel = key => `${sq.lines[key].name} — ${sq.levels[r.lines[key].level]}`;
  const cells = Array.from({ length: 9 }, (_, i) => {
    const k = i + 1, d = digits(k);
    return `<button type="button" class="sq-cell" data-key="c${k}" aria-pressed="${squareSel === 'c' + k}"
      aria-label="${escapeHtml(`${sq.cell} ${k}, ${sq.cells['c' + k].name} : ${d || sq.empty}`)}"><span class="sq-digits" aria-hidden="true">${d || '—'}</span><span class="sq-name" aria-hidden="true">${escapeHtml(sq.cells['c' + k].name)}</span></button>`;
  }).join('');
  const lines = SQUARE_LINES.map(([key]) => `<button type="button" class="sq-line" data-key="${key}" aria-pressed="${squareSel === key}">${escapeHtml(lineLabel(key))}</button>`).join('');
  const sel = squareSel.startsWith('c') && squareSel.length === 2
    ? `<h4>${escapeHtml(sq.cells[squareSel].name)} <span class="sq-meta" dir="ltr">${digits(+squareSel[1]) || '—'}</span></h4><p>${escapeHtml(cellText(+squareSel[1]))}</p>`
    : `<h4>${escapeHtml(lineLabel(squareSel))}</h4><p>${escapeHtml(sq.lines[squareSel][r.lines[squareSel].level])}</p>`;
  const full = Array.from({ length: 9 }, (_, i) => `<div class="sq-full-item"><h5>${escapeHtml(sq.cells['c' + (i + 1)].name)} <span class="sq-meta" dir="ltr">${digits(i + 1) || '—'}</span></h5><p>${escapeHtml(cellText(i + 1))}</p></div>`).join('')
    + SQUARE_LINES.map(([key]) => `<div class="sq-full-item"><h5>${escapeHtml(lineLabel(key))}</h5><p>${escapeHtml(sq.lines[key][r.lines[key].level])}</p></div>`).join('');
  return `<div class="card num-card square-card" id="squareCard"><h3>${escapeHtml(sq.title)}${infoBtn('square', sq.title)}</h3>
    <p class="sky-sub">${escapeHtml(sq.working)} : <span dir="ltr">${r.working.map(n => Math.abs(n)).join(' · ')}</span></p>
    <div class="square-grid" dir="ltr" role="group" aria-label="${escapeHtml(sq.title)}">${cells}</div>
    <div class="square-lines-head"><span>${escapeHtml(sq.linesTitle)}</span>${infoBtn('squareLines', sq.linesTitle)}</div>
    <div class="square-lines" role="group" aria-label="${escapeHtml(sq.linesTitle)}">${lines}</div>
    <div class="square-detail" aria-live="polite">${sel}</div>
    <p class="square-toggle-row"><button type="button" class="btn-secondary square-toggle" aria-expanded="${squareOpen}" aria-controls="squareFull">${escapeHtml(squareOpen ? sq.less : sq.more)} ${squareOpen ? '▴' : '▾'}</button></p>
    <div class="square-full" id="squareFull"${squareOpen ? '' : ' hidden'}>${full}</div></div>`;
}
/* Réaffiche la carte seule (focus gardé sur l'élément touché) */
function refreshSquare(focusSel){
  const card = document.getElementById('squareCard'), date = parseISODate(currentDate);
  if (!card || !date) return;
  card.outerHTML = squareHtml(I18N[currentLang], date);
  if (focusSel) { const f = document.querySelector(focusSel); if (f) f.focus(); }
}
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.sq-cell, .sq-line, .square-toggle');
  if (!b || !b.closest('#squareCard')) return;
  if (b.classList.contains('square-toggle')) { squareOpen = !squareOpen; refreshSquare('.square-toggle'); return; }
  squareSel = b.dataset.key; refreshSquare(`[data-key="${squareSel}"]`);
});
