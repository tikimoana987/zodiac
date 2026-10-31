/* ============================================================
   Zodiaque & Décans — « Soutenir le projet »
   Une fenêtre qui regroupe les pages de dons (une par plateforme) et une contribution sans argent :
   partager l'appli. De simples liens, ouverts dans un nouvel onglet : la fenêtre ne charge rien d'extérieur,
   et une plateforme n'est contactée que si quelqu'un clique sur son lien.
   Dépend de zodiac-app.js (currentLang, showToast).
   ============================================================ */

/* ▼▼▼ À RENSEIGNER : l'adresse de chaque page de dons, entre les apostrophes, commençant par https://
   Une plateforme sans adresse n'est pas affichée. Tant qu'aucune adresse n'est renseignée,
   le bouton « Soutenir le projet » reste caché. On peut changer l'ordre des lignes. ▼▼▼ */
const SUPPORT_LINKS = [
  { name: 'Ko-fi',           icon: '☕', url: '' },
  { name: 'PayPal',          icon: '💳', url: '' },
  { name: 'Liberapay',       icon: '🔁', url: '' },
  { name: 'GitHub Sponsors', icon: '💜', url: '' }
];
/* ▲▲▲ Fin des réglages ▲▲▲ */

const APP_URL = 'https://tikimoana987.github.io/zodiac/';   // adresse partagée : jamais celle du profil affiché

/* Plateformes affichables : adresse https valide seulement */
function supportLinks(){
  return SUPPORT_LINKS.filter(l => {
    try { return new URL(l.url).protocol === 'https:'; } catch (e) { return false; }
  });
}
function supportReady(){ return supportLinks().length > 0; }

/* Boutons « Soutenir le projet » (pied de page, fin des résultats) : visibles seulement si un lien existe */
function refreshSupport(){
  const ready = supportReady(), t = I18N[currentLang];
  document.querySelectorAll('[data-support-open]').forEach(b => { b.hidden = !ready; });
  document.querySelectorAll('[data-support-line]').forEach(p => { p.hidden = !ready; });
  const label = document.getElementById('supportOpenLabel');
  if (label) label.textContent = t.support.open;
}

const support = { opener: null };

function openSupport(opener){
  const t = I18N[currentLang], s = t.support, ov = document.getElementById('support');
  support.opener = opener || document.activeElement;
  document.getElementById('supportTitle').textContent = s.open;
  document.getElementById('supportIntro').textContent = s.intro;
  document.getElementById('supportNote').textContent = s.note;
  document.getElementById('supportShareLabel').textContent = s.share;
  document.getElementById('supportClose').textContent = t.close;
  const list = document.getElementById('supportList');
  list.innerHTML = '';
  for (const l of supportLinks()) {
    const li = document.createElement('li'), a = document.createElement('a');
    a.href = l.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'support-platform';
    const icon = document.createElement('span'); icon.setAttribute('aria-hidden', 'true'); icon.textContent = l.icon;
    a.append(icon, ' ' + l.name);
    li.appendChild(a); list.appendChild(li);
  }
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden', 'false');
  const first = list.querySelector('a');
  (first || document.getElementById('supportClose')).focus();
}

function closeSupport(){
  const ov = document.getElementById('support');
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden', 'true');
  if (support.opener && document.contains(support.opener)) support.opener.focus();
  support.opener = null;
}

/* Partager l'appli : feuille de partage du téléphone si elle existe, sinon lien copié.
   Toujours l'adresse publique du site, jamais l'adresse de la page (qui contient la date de naissance). */
async function shareApp(){
  const t = I18N[currentLang];
  if (navigator.share) {
    try { await navigator.share({ title: t.appTitle, url: APP_URL }); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }   // partage annulé par la personne
  }
  try {
    if (!navigator.clipboard) throw new Error('clipboard unavailable');
    await navigator.clipboard.writeText(APP_URL);
    showToast(t.shareCopied);
  } catch (e) {
    window.prompt(t.support.share, APP_URL);   // repli : copie à la main
  }
}

/* Branchements */
document.addEventListener('click', e => {
  const opener = e.target.closest && e.target.closest('[data-support-open]');
  if (opener) openSupport(opener);
});
document.getElementById('supportShare').addEventListener('click', shareApp);
document.getElementById('supportClose').addEventListener('click', closeSupport);
document.getElementById('support').addEventListener('click', e => { if (e.target.id === 'support') closeSupport(); });
document.addEventListener('keydown', e => {
  const ov = document.getElementById('support');
  if (ov.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeSupport();
  else if (e.key === 'Tab') {   // focus gardé dans la fenêtre
    const items = [...ov.querySelectorAll('a, button')].filter(x => !x.hidden);
    const i = items.indexOf(document.activeElement);
    e.preventDefault();
    items[(i + (e.shiftKey ? items.length - 1 : 1)) % items.length].focus();
  }
});
document.addEventListener('DOMContentLoaded', refreshSupport);
