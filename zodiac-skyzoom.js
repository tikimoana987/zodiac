/* ============================================================
   Zodiaque & Décans — carte du ciel agrandie (V10.14, idée de Joann, 9 novembre 2026)
   Un clic sur la carte du ciel (ou le bouton « Agrandir ») l'ouvre en plein écran : zoom à la molette, au
   pincement, avec + et − ou le clavier (+, −, 0) ; déplacement en glissant ou avec les flèches ; « Recentrer ».
   La carte agrandie est une copie exacte de celle affichée (même lieu, date et heure) ; les noms et les étoiles
   gardent une taille lisible à tous les zooms (les traits restent fins : vector-effect, zodiac.css).
   Dépend de zodiac-app.js (I18N, currentLang).
   ============================================================ */
const SKYZ = { s: 1, cx: 0, cy: 0, svg: null, opener: null, pointers: new Map(), pinch: null, drag: null, raf: 0 };
const SKYZ_HALF = 112, SKYZ_MAX = 8;

function skyZoomTexts(){ const m = I18N[currentLang].map; return m.zoom || I18N.fr.map.zoom; }

function openSkyZoom(opener){
  const src = document.getElementById('skySvg'), ov = document.getElementById('skyZoom'), view = document.getElementById('skyZoomView');
  if (!src || !ov) return;
  const z = skyZoomTexts(), t = I18N[currentLang];
  SKYZ.opener = opener || document.activeElement;
  Object.assign(SKYZ, { s: 1, cx: 0, cy: 0, pinch: null, drag: null });
  SKYZ.pointers.clear();
  const svg = src.cloneNode(true);
  svg.removeAttribute('id');
  svg.classList.add('sky-zoom-svg');
  svg.querySelectorAll('circle').forEach(c => { if (c.hasAttribute('r') && !c.classList.contains('sky-bg') && !c.classList.contains('alt-ring')) c.dataset.r = c.getAttribute('r'); });
  view.innerHTML = '';
  view.appendChild(svg);
  SKYZ.svg = svg;
  document.getElementById('skyZoomTitle').textContent = t.map.title;
  document.getElementById('skyZoomIn').setAttribute('aria-label', z.zoomIn);
  document.getElementById('skyZoomOut').setAttribute('aria-label', z.zoomOut);
  document.getElementById('skyZoomReset').textContent = z.reset;
  document.getElementById('skyZoomClose').setAttribute('aria-label', t.close);
  document.getElementById('skyZoomHint').textContent = z.hint;
  view.setAttribute('aria-label', t.map.title);
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden', 'false');
  skyZoomApply();
  view.focus();
}
function closeSkyZoom(){
  const ov = document.getElementById('skyZoom');
  if (!ov || ov.classList.contains('hidden')) return;
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden', 'true');
  document.getElementById('skyZoomView').innerHTML = '';
  SKYZ.svg = null;
  const back = SKYZ.opener;
  SKYZ.opener = null;
  if (back && document.contains(back)) back.focus();
}

/* Vue : zoom s (1 à 8) autour du centre (cx, cy), sans sortir du disque de la carte */
function skyZoomApply(){
  if (!SKYZ.svg) return;
  SKYZ.s = Math.min(SKYZ_MAX, Math.max(1, SKYZ.s));
  const half = SKYZ_HALF / SKYZ.s, lim = SKYZ_HALF - half;
  SKYZ.cx = Math.min(lim, Math.max(-lim, SKYZ.cx));
  SKYZ.cy = Math.min(lim, Math.max(-lim, SKYZ.cy));
  SKYZ.svg.setAttribute('viewBox', `${(SKYZ.cx - half).toFixed(3)} ${(SKYZ.cy - half).toFixed(3)} ${(2 * half).toFixed(3)} ${(2 * half).toFixed(3)}`);
  SKYZ.svg.style.setProperty('--zf', Math.pow(SKYZ.s, .8).toFixed(3));   // noms : taille presque constante à l'écran
  cancelAnimationFrame(SKYZ.raf);
  SKYZ.raf = requestAnimationFrame(() => {                               // étoiles et planètes : grossissent à peine
    if (!SKYZ.svg) return;
    const k = Math.pow(SKYZ.s, .65);
    SKYZ.svg.querySelectorAll('circle[data-r]').forEach(c => c.setAttribute('r', (c.dataset.r / k).toFixed(3)));
  });
  document.getElementById('skyZoomOut').disabled = SKYZ.s <= 1.001;
  document.getElementById('skyZoomIn').disabled = SKYZ.s >= SKYZ_MAX - .001;
}
/* Zoom d'un facteur autour d'un point de la carte (le point reste sous le curseur ou les doigts) */
function skyZoomBy(factor, px = SKYZ.cx, py = SKYZ.cy){
  const s2 = Math.min(SKYZ_MAX, Math.max(1, SKYZ.s * factor)), r = SKYZ.s / s2;
  SKYZ.cx = px - (px - SKYZ.cx) * r;
  SKYZ.cy = py - (py - SKYZ.cy) * r;
  SKYZ.s = s2;
  skyZoomApply();
}
function skyZoomPoint(clientX, clientY){
  const r = SKYZ.svg.getBoundingClientRect(), half = SKYZ_HALF / SKYZ.s;
  return [SKYZ.cx - half + (clientX - r.left) / r.width * 2 * half, SKYZ.cy - half + (clientY - r.top) / r.height * 2 * half];
}

/* Branchements */
document.addEventListener('click', e => {
  const opener = e.target.closest && e.target.closest('#skySvg, #skyZoomOpen');
  if (opener) openSkyZoom(document.getElementById('skyZoomOpen') || opener);
});
document.getElementById('skyZoomIn').addEventListener('click', () => skyZoomBy(1.5));
document.getElementById('skyZoomOut').addEventListener('click', () => skyZoomBy(1 / 1.5));
document.getElementById('skyZoomReset').addEventListener('click', () => { Object.assign(SKYZ, { s: 1, cx: 0, cy: 0 }); skyZoomApply(); });
document.getElementById('skyZoomClose').addEventListener('click', closeSkyZoom);
document.getElementById('skyZoom').addEventListener('click', e => { if (e.target.id === 'skyZoom') closeSkyZoom(); });
const skyView = document.getElementById('skyZoomView');
skyView.addEventListener('wheel', e => {
  if (!SKYZ.svg) return;
  e.preventDefault();
  const [px, py] = skyZoomPoint(e.clientX, e.clientY);
  skyZoomBy(Math.exp(-e.deltaY * (e.deltaMode === 1 ? .05 : .0018)), px, py);
}, { passive: false });
skyView.addEventListener('pointerdown', e => {
  if (!SKYZ.svg) return;
  skyView.setPointerCapture(e.pointerId);
  SKYZ.pointers.set(e.pointerId, [e.clientX, e.clientY]);
  if (SKYZ.pointers.size === 2) {
    const [a, b] = [...SKYZ.pointers.values()];
    SKYZ.pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) };
  }
});
skyView.addEventListener('pointermove', e => {
  if (!SKYZ.svg || !SKYZ.pointers.has(e.pointerId)) return;
  const prev = SKYZ.pointers.get(e.pointerId);
  SKYZ.pointers.set(e.pointerId, [e.clientX, e.clientY]);
  if (SKYZ.pointers.size === 2 && SKYZ.pinch) {   // pincement : zoom autour du milieu des deux doigts
    const [a, b] = [...SKYZ.pointers.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    const [px, py] = skyZoomPoint((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
    if (SKYZ.pinch.d > 0) skyZoomBy(d / SKYZ.pinch.d, px, py);
    SKYZ.pinch.d = d;
  } else if (SKYZ.pointers.size === 1) {          // glisser : déplacement
    const r = SKYZ.svg.getBoundingClientRect(), unit = 2 * SKYZ_HALF / SKYZ.s / r.width;
    SKYZ.cx -= (e.clientX - prev[0]) * unit;
    SKYZ.cy -= (e.clientY - prev[1]) * unit;
    skyZoomApply();
  }
});
['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => skyView.addEventListener(type, e => {
  SKYZ.pointers.delete(e.pointerId);
  if (SKYZ.pointers.size < 2) SKYZ.pinch = null;
}));
/* Clavier (phase de capture : la fenêtre passe avant le reste) : +, −, 0, flèches, Échap, focus gardé */
document.addEventListener('keydown', e => {
  const ov = document.getElementById('skyZoom');
  if (!ov || ov.classList.contains('hidden')) return;
  const onView = document.activeElement === skyView, step = .15 * 2 * SKYZ_HALF / SKYZ.s;
  const keys = { '+': () => skyZoomBy(1.5), '=': () => skyZoomBy(1.5), '-': () => skyZoomBy(1 / 1.5), '0': () => { Object.assign(SKYZ, { s: 1, cx: 0, cy: 0 }); skyZoomApply(); },
    ArrowLeft: () => { SKYZ.cx -= step; skyZoomApply(); }, ArrowRight: () => { SKYZ.cx += step; skyZoomApply(); },
    ArrowUp: () => { SKYZ.cy -= step; skyZoomApply(); }, ArrowDown: () => { SKYZ.cy += step; skyZoomApply(); } };
  if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeSkyZoom(); return; }
  if (onView && keys[e.key]) { e.preventDefault(); e.stopPropagation(); keys[e.key](); return; }
  if (e.key === 'Tab') {
    e.preventDefault(); e.stopPropagation();
    const items = [skyView, ...ov.querySelectorAll('.sky-zoom-tools button:not(:disabled)')];
    const i = items.indexOf(document.activeElement);
    items[(i + (e.shiftKey ? items.length - 1 : 1) + items.length) % items.length].focus();
  }
}, true);
