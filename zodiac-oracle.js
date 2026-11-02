/* ============================================================
   Zodiaque & Décans — Oracle Oui / Non
   Un petit jeu : la personne pense à sa question (rien n'est écrit ni enregistré), touche le centre,
   une flèche lumineuse tourne, ralentit et s'arrête sur Oui, Non, Peut-être ou Bientôt.
   Chaque réponse a exactement une chance sur quatre (hasard du navigateur, secureRandom de zodiac-tarot.js).
   Dépend de zodiac-app.js (currentLang, prefersReducedMotion) et de zodiac-tarot.js (secureRandom).
   ============================================================ */
const ORACLE_ANSWERS = ['yes', 'maybe', 'no', 'soon'];   // en haut, à droite, en bas, à gauche (sens des aiguilles d'une montre)
const ORACLE_SPIN_MS = 3200;                             // durée de la rotation, ralentissement compris

/* Réponse tirée au hasard : indice 0 à 3, chances égales */
function oraclePick(rnd = secureRandom){
  return Math.min(ORACLE_ANSWERS.length - 1, Math.floor(rnd() * ORACLE_ANSWERS.length));
}
/* Angle d'arrêt de la flèche (degrés, cumulés) : au moins trois tours complets depuis l'angle actuel,
   puis arrêt face à la réponse, à 18° au plus de son axe (un léger écart rend l'arrêt plus naturel) */
function oracleStopAngle(current, index, rnd = secureRandom){
  return (Math.floor(current / 360) + 4) * 360 + index * 90 + (rnd() - 0.5) * 36;
}
/* Réponse désignée par un angle (vérification : la flèche montre bien la réponse tirée) */
function oracleAnswerAt(angle){
  return ORACLE_ANSWERS[Math.round((((angle % 360) + 360) % 360) / 90) % 4];
}

const oracle = { angle: 0, busy: false, timer: null, opener: null };

/* Boule de cristal dessinée en code (aucune image extérieure) : verre, brume qui tourne, étincelles, reflet, socle doré.
   id : suffixe unique par emplacement (les dégradés d'un SVG masqué ne doivent pas servir aux autres). */
function crystalBallSvg(id){
  const g = `cb-${id}`;
  return `<svg class="crystal-ball" viewBox="0 0 120 132" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="${g}-halo" cx="50%" cy="45%" r="50%"><stop offset="55%" stop-color="#9b7ee6" stop-opacity=".45"/><stop offset="100%" stop-color="#9b7ee6" stop-opacity="0"/></radialGradient>
      <radialGradient id="${g}-glass" cx="38%" cy="32%" r="72%"><stop offset="0%" stop-color="#f3eeff"/><stop offset="28%" stop-color="#a996f5"/><stop offset="62%" stop-color="#4a33a8"/><stop offset="100%" stop-color="#170f42"/></radialGradient>
      <linearGradient id="${g}-gold" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f7dc8a"/><stop offset="100%" stop-color="#a8761f"/></linearGradient>
      <clipPath id="${g}-clip"><circle cx="60" cy="56" r="42"/></clipPath>
      <filter id="${g}-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
    </defs>
    <circle class="cb-halo" cx="60" cy="56" r="58" fill="url(#${g}-halo)"/>
    <path d="M30 110 Q60 98 90 110 L98 124 Q60 132 22 124 Z" fill="url(#${g}-gold)"/>
    <ellipse cx="60" cy="110" rx="30" ry="6" fill="#5e3f0e" opacity=".55"/>
    <circle cx="60" cy="56" r="42" fill="url(#${g}-glass)"/>
    <g clip-path="url(#${g}-clip)"><g class="cb-mist" filter="url(#${g}-blur)">
      <ellipse cx="48" cy="60" rx="30" ry="12" fill="#e6dcff" opacity=".45"/>
      <ellipse cx="74" cy="48" rx="22" ry="9" fill="#ffd6f4" opacity=".35"/>
      <ellipse cx="62" cy="76" rx="26" ry="8" fill="#b9e2ff" opacity=".3"/>
    </g></g>
    <g class="cb-sparks" fill="#fff">
      <circle class="cb-spark" cx="44" cy="44" r="1.6"/><circle class="cb-spark s2" cx="76" cy="62" r="1.3"/>
      <circle class="cb-spark s3" cx="58" cy="78" r="1.1"/><circle class="cb-spark s4" cx="70" cy="38" r="1"/>
    </g>
    <ellipse cx="44" cy="36" rx="12" ry="7" fill="#fff" opacity=".55" transform="rotate(-28 44 36)"/>
    <circle cx="60" cy="56" r="42" fill="none" stroke="#d9cdfa" stroke-opacity=".5" stroke-width="1.2"/>
  </svg>`;
}
/* Étoiles en orbite autour d'un élément (trois étoiles par défaut) */
function orbitStarsHtml(n = 3){
  return `<span class="cb-orbit" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<span class="cb-star" style="--a:${Math.round(i * 360 / n)}deg">✦</span>`).join('')}</span>`;
}

function oracleTexts(){
  const t = I18N[currentLang], o = t.oracle;
  document.getElementById('oracleTitle').textContent = o.title;
  document.getElementById('oracleHint').textContent = oracle.answered ? o.again : o.hint;
  document.getElementById('oracleNote').textContent = o.note;
  document.getElementById('oracleSpin').setAttribute('aria-label', o.ask);
  document.getElementById('oracleClose').textContent = t.close;
  articleButtonLabels();   // « En savoir plus » : article de l'Oracle (zodiac-articles.js)
  ORACLE_ANSWERS.forEach(k => { document.querySelector(`.oracle-ans[data-answer="${k}"]`).textContent = o.answers[k]; });
}

function openOracle(opener){
  const ov = document.getElementById('oracle');
  oracle.opener = opener || document.activeElement;
  oracle.answered = false;
  document.getElementById('oracleResult').textContent = '';
  document.querySelectorAll('.oracle-ans').forEach(a => a.classList.remove('on'));
  oracleTexts();
  ov.classList.remove('hidden');
  ov.setAttribute('aria-hidden', 'false');
  document.getElementById('oracleSpin').focus();
}

function closeOracle(){
  const ov = document.getElementById('oracle');
  clearTimeout(oracle.timer);
  oracle.busy = false;
  document.getElementById('oracleArrow').classList.remove('spinning');
  ov.classList.remove('is-spinning');
  ov.classList.add('hidden');
  ov.setAttribute('aria-hidden', 'true');
  if (oracle.opener && document.contains(oracle.opener)) oracle.opener.focus();
  oracle.opener = null;
}

function spinOracle(){
  if (oracle.busy) return;
  const arrow = document.getElementById('oracleArrow'), result = document.getElementById('oracleResult');
  const index = oraclePick();
  oracle.angle = oracleStopAngle(oracle.angle, index);
  document.querySelectorAll('.oracle-ans').forEach(a => a.classList.remove('on'));
  result.textContent = '';
  const reveal = () => {
    const key = ORACLE_ANSWERS[index];
    arrow.classList.remove('spinning');
    document.getElementById('oracle').classList.remove('is-spinning');
    document.querySelector(`.oracle-ans[data-answer="${key}"]`).classList.add('on');
    result.textContent = I18N[currentLang].oracle.answers[key];   // annoncé par les lecteurs d'écran (aria-live)
    oracle.answered = true;
    document.getElementById('oracleHint').textContent = I18N[currentLang].oracle.again;
    oracle.busy = false;
  };
  if (prefersReducedMotion()) {   // animations réduites : pas de rotation, la réponse apparaît en fondu
    arrow.style.transition = 'none';
    arrow.style.transform = `rotate(${oracle.angle}deg)`;
    reveal();
    return;
  }
  oracle.busy = true;
  arrow.classList.add('spinning');
  document.getElementById('oracle').classList.add('is-spinning');   // la boule s'illumine pendant la rotation
  arrow.style.transition = `transform ${ORACLE_SPIN_MS}ms cubic-bezier(.12,.72,.18,1)`;
  arrow.style.transform = `rotate(${oracle.angle}deg)`;
  oracle.timer = setTimeout(reveal, ORACLE_SPIN_MS + 80);
}

/* Boules de cristal des emplacements fixes de la page (accueil, centre du cercle) */
document.querySelectorAll('[data-crystal]').forEach(el => { el.innerHTML = crystalBallSvg(el.dataset.crystal) + (el.dataset.orbit ? orbitStarsHtml(+el.dataset.orbit) : ''); });

/* Branchements : boutons [data-oracle-open] (accueil, section tarot), centre, Fermer, clavier */
document.addEventListener('click', e => {
  const opener = e.target.closest && e.target.closest('[data-oracle-open]');
  if (opener) openOracle(opener);
});
document.getElementById('oracleSpin').addEventListener('click', spinOracle);
document.getElementById('oracleClose').addEventListener('click', closeOracle);
document.addEventListener('keydown', e => {
  if (document.getElementById('oracle').classList.contains('hidden')) return;
  if (e.key === 'Escape') closeOracle();
  else if (e.key === 'Tab') {   // focus gardé dans l'oracle : le centre, « En savoir plus », « Fermer »
    e.preventDefault();
    const items = ['oracleSpin', 'oracleArticle', 'oracleClose'].map(id => document.getElementById(id));
    const i = items.indexOf(document.activeElement);
    items[i < 0 ? 0 : (i + (e.shiftKey ? items.length - 1 : 1)) % items.length].focus();
  }
});
