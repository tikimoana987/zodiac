/* ============================================================
   Zodiaque & Décans — articles « En savoir plus »
   Chaque bulle (i) d'une méthode garde son texte court et se termine par « En savoir plus », qui ouvre
   l'article correspondant dans un panneau de lecture (titre, 4 rubriques, sources). L'Oracle a son propre
   bouton dans sa fenêtre. Textes : data/articles/articles-xx.json → zodiac-articles-data.js (ARTICLES_I18N,
   tools/regen_articles.js). Rien n'est chargé ni envoyé : tout est déjà dans la page.
   Dépend de zodiac-app.js (currentLang, I18N, closeInfo, infoOpenBtn). Cahier : docs/cahier-articles.md
   ============================================================ */

/* Bulle (i) → article. Les bulles absentes (prénom, heure, lieu, confidentialité) n'ont pas d'article. */
const ARTICLE_OF_INFO = Object.freeze({
  sunPosition: 'signs', decan: 'signs', signVsConstellation: 'signs', modality: 'signs', ruler: 'signs', affinities: 'signs',
  cnYear: 'chinese', yearElement: 'chinese', polarity: 'chinese', fixedElement: 'chinese', hourAnimal: 'chinese', cnAffinities: 'chinese',
  natalChart: 'natal', ascendant: 'natal', midheaven: 'natal', houses: 'natal', aspects: 'natal',
  horoscope: 'sky', skymap: 'sky', night: 'sky', retrograde: 'sky', solarEclipse: 'sky', calendar: 'sky', natalTransits: 'sky',
  compat: 'compat', compatRelations: 'compat', compatLifePath: 'compat', synastry: 'compat',
  numerology: 'numerology', personalYear: 'numerology',
  square: 'square', squareLines: 'square',
  portrait: 'portrait', portraitDecan: 'portrait',
  tarot: 'tarot', reversed: 'tarot', tarotMinors: 'tarot', spread: 'tarot'
});
const ARTICLE_SECTIONS = ['history', 'principle', 'zodiac', 'notThis'];

/* Textes de la langue affichée (repli sur le français, comme le reste de l'appli) */
function articleTexts(lang = currentLang){ return ARTICLES_I18N[lang] || ARTICLES_I18N.fr; }
function articleForInfo(key){ return (key && ARTICLE_OF_INFO[key]) || null; }

const articleState = { opener: null, id: null };

/* Contenu du panneau : rubriques (paragraphes séparés par une ligne vide), puis sources s'il y en a */
function renderArticle(id, lang = currentLang){
  const T = articleTexts(lang), a = T.articles[id];
  const body = document.getElementById('articleBody');
  document.getElementById('articleTitle').textContent = a.title;
  body.innerHTML = '';
  for (const key of ARTICLE_SECTIONS) {
    const sec = document.createElement('section'), h = document.createElement('h3');
    sec.className = 'article-section';
    h.textContent = T.labels[key];
    sec.appendChild(h);
    for (const para of a[key].split(/\n\s*\n/)) {
      const p = document.createElement('p');
      p.textContent = para.trim();
      sec.appendChild(p);
    }
    body.appendChild(sec);
  }
  if (a.sources.length) {
    const sec = document.createElement('section'), h = document.createElement('h3'), ul = document.createElement('ul');
    sec.className = 'article-section article-sources';
    h.textContent = T.labels.sources;
    for (const s of a.sources) { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); }
    sec.append(h, ul);
    body.appendChild(sec);
  }
}

function openArticle(id, opener){
  if (!ARTICLES_I18N.fr.articles[id]) return;
  const ov = document.getElementById('article'), t = I18N[currentLang];
  articleState.opener = opener || document.activeElement;
  articleState.id = id;
  renderArticle(id);
  document.getElementById('articleClose').setAttribute('aria-label', t.close);
  document.getElementById('articleDone').textContent = t.close;
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden', 'false');
  ov.querySelector('.article-card').scrollTop = 0;
  document.getElementById('articleTitle').focus();   // lecture depuis le titre ; les flèches font défiler le panneau
}

function closeArticle(){
  const ov = document.getElementById('article');
  if (ov.classList.contains('hidden')) return;
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden', 'true');
  const back = articleState.opener;
  articleState.opener = articleState.id = null;
  if (back && document.contains(back)) back.focus();
}

/* « En savoir plus » d'une bulle : la bulle se ferme, le focus reviendra sur son bouton (i) */
function openArticleFromInfo(btn){
  const anchor = infoOpenBtn;
  closeInfo(false);
  openArticle(btn.dataset.article, anchor && document.contains(anchor) ? anchor : null);
}

/* Libellés des boutons fixes (Oracle) : appelés à l'ouverture de la fenêtre concernée */
function articleButtonLabels(){
  const more = articleTexts().labels.more;
  document.querySelectorAll('[data-article-open]').forEach(b => { b.textContent = more; });
}

/* Branchements */
document.addEventListener('click', e => {
  const more = e.target.closest && e.target.closest('.info-more');
  if (more) { e.preventDefault(); openArticleFromInfo(more); return; }
  const fixed = e.target.closest && e.target.closest('[data-article-open]');
  if (fixed) { e.preventDefault(); openArticle(fixed.dataset.articleOpen, fixed); }
});
document.getElementById('articleClose').addEventListener('click', closeArticle);
document.getElementById('articleDone').addEventListener('click', closeArticle);
document.getElementById('article').addEventListener('click', e => { if (e.target.id === 'article') closeArticle(); });

/* Clavier, phase de capture : le panneau passe avant l'Oracle qu'il peut recouvrir (Échap ne ferme que lui) */
document.addEventListener('keydown', e => {
  const ov = document.getElementById('article');
  if (ov.classList.contains('hidden')) {
    // Bulle ouverte au clavier : Tab mène du bouton (i) à « En savoir plus », Maj+Tab y revient,
    // Tab depuis « En savoir plus » ferme la bulle et poursuit après le bouton (i)
    if (e.key !== 'Tab' || !infoOpenBtn) return;
    const more = document.querySelector('#infoPop:not([hidden]) .info-pop-more:not([hidden]) .info-more');
    if (!more) return;
    if (!e.shiftKey && document.activeElement === infoOpenBtn) { e.preventDefault(); more.focus(); }
    else if (document.activeElement === more) {
      const anchor = infoOpenBtn;
      if (e.shiftKey) { e.preventDefault(); anchor.focus(); }
      else { closeInfo(false); anchor.focus(); }   // pas de preventDefault : Tab continue depuis le bouton (i)
    }
    return;
  }
  if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeArticle(); }
  else if (e.key === 'Tab') {   // focus gardé dans le panneau : titre, fermeture en haut, fermeture en bas
    e.preventDefault(); e.stopPropagation();
    const items = [document.getElementById('articleClose'), document.getElementById('articleDone')];
    const i = items.indexOf(document.activeElement);
    const next = i < 0 ? (e.shiftKey ? items.length - 1 : 0) : (i + (e.shiftKey ? items.length - 1 : 1)) % items.length;
    items[next].focus();
  }
}, true);
