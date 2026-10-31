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

function oracleTexts(){
  const t = I18N[currentLang], o = t.oracle;
  document.getElementById('oracleTitle').textContent = o.title;
  document.getElementById('oracleHint').textContent = oracle.answered ? o.again : o.hint;
  document.getElementById('oracleNote').textContent = o.note;
  document.getElementById('oracleSpin').setAttribute('aria-label', o.ask);
  document.getElementById('oracleClose').textContent = t.close;
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
  arrow.style.transition = `transform ${ORACLE_SPIN_MS}ms cubic-bezier(.12,.72,.18,1)`;
  arrow.style.transform = `rotate(${oracle.angle}deg)`;
  oracle.timer = setTimeout(reveal, ORACLE_SPIN_MS + 80);
}

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
  else if (e.key === 'Tab') {   // focus gardé dans l'oracle : le centre et « Fermer »
    e.preventDefault();
    const spin = document.getElementById('oracleSpin'), close = document.getElementById('oracleClose');
    (document.activeElement === spin ? close : spin).focus();
  }
});
