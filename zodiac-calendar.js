/* ============================================================
   Zodiaque & Décans — calendrier du ciel (fichier .ics à importer dans un agenda)
   Événements d'une période : nouvelles et pleines lunes, éclipses, débuts et fins de rétrogradation, changements de signe,
   dates exactes des transits des planètes lentes sur le thème natal. Instants affinés à la minute.
   Fichier iCalendar (RFC 5545) : heures en temps universel, transits en journée entière. Créé sur l'appareil, rien n'est envoyé.
   Dépend de zodiac-astro.js, zodiac-planets.js, zodiac-skymap.js (nextEclipses) et zodiac-transits.js (aspectGap, TRANSIT_ASPECTS).
   ============================================================ */

const CAL_STATION_BODIES = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
const CAL_INGRESS_BODIES = ['sun', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
const CAL_TRANSIT_BODIES = ['jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
const CAL_DAY = 864e5;

/* Instant où f change de valeur entre a et b (f(a) ≠ f(b)), à la minute près */
function calRefine(f, a, b){
  const fa = f(a);
  while (b - a > 60e3) { const m = (a + b) / 2; if (f(m) === fa) a = m; else b = m; }
  return Math.round((a + b) / 2);
}
/* Événements de la période [startMs, endMs[ ; cats : { moon, eclipses, retro, ingress, transits } ; points : points du thème natal */
function calendarEvents(startMs, endMs, cats, points){
  const out = [];
  if (cats.moon) for (const e of lunarEvents(startMs, endMs))
    if (e.type === 'new' || e.type === 'full') out.push({ kind: 'moon', ms: Math.round(e.ms), phase: e.type, sign: signFromLongitude(moonLongitude(e.ms)) });
  if (cats.eclipses) for (const e of nextEclipses(startMs, 12)) if (e.ms < endMs) out.push({ kind: 'eclipse', ms: e.ms, type: e.type, solar: e.solar });
  if (cats.retro) for (const body of CAL_STATION_BODIES) {
    let prev = isRetrograde(body, startMs);
    for (let t = startMs; t < endMs; t += CAL_DAY) {
      const next = isRetrograde(body, t + CAL_DAY);
      if (next !== prev) {
        const ms = calRefine(x => isRetrograde(body, x), t, t + CAL_DAY);
        if (ms >= startMs && ms < endMs) out.push({ kind: 'station', ms, body, retro: next, sign: signFromLongitude(bodyLongitude(body, ms)) });
        prev = next;
      }
    }
  }
  if (cats.ingress) for (const body of CAL_INGRESS_BODIES) {
    const sign = ms => signFromLongitude(bodyLongitude(body, ms));
    let prev = sign(startMs);
    for (let t = startMs; t < endMs; t += CAL_DAY) {
      const next = sign(t + CAL_DAY);
      if (next !== prev) {
        const ms = calRefine(sign, t, t + CAL_DAY);
        if (ms >= startMs && ms < endMs) out.push({ kind: 'ingress', ms, body, sign: sign(ms + 60e3) });
        prev = next;
      }
    }
  }
  if (cats.transits && points && points.length) out.push(...calTransits(points, startMs, endMs));
  return out.sort((a, b) => a.ms - b.ms);
}
/* Transits exacts des planètes lentes sur les points du thème (minimum de l'écart à l'aspect, < 0,05°) */
function calTransits(points, startMs, endMs){
  const out = [], n = Math.ceil((endMs - startMs) / CAL_DAY) + 2, t0 = startMs - CAL_DAY;
  for (const body of CAL_TRANSIT_BODIES) {
    const lons = Array.from({ length: n + 1 }, (_, i) => bodyLongitude(body, t0 + i * CAL_DAY));   // une position par jour
    for (const p of points) for (const [type, angle] of TRANSIT_ASPECTS) {
      const g = lons.map(l => aspectGap(l, p.lon, angle));
      for (let i = 1; i < n; i++) {
        if (!(g[i] <= g[i - 1] && g[i] < g[i + 1] && g[i] < 1)) continue;
        const f = ms => aspectGap(bodyLongitude(body, ms), p.lon, angle);
        let a = t0 + (i - 1) * CAL_DAY, b = a + 2 * CAL_DAY;
        for (let k = 0; k < 40; k++) { const m1 = a + (b - a) / 3, m2 = b - (b - a) / 3; if (f(m1) < f(m2)) b = m2; else a = m1; }
        const ms = Math.round((a + b) / 2);
        if (f(ms) < 0.05 && ms >= startMs && ms < endMs) out.push({ kind: 'transit', ms, body, point: p.point, type });
      }
    }
  }
  return out;
}

/* ---------- Fichier iCalendar ---------- */
function icsEscape(s){ return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
/* Lignes de 75 octets au plus (UTF-8), suite sur la ligne suivante après une espace */
function icsFold(line){
  const enc = new TextEncoder();
  let out = '', cur = '', bytes = 0;
  for (const ch of line) {
    const b = enc.encode(ch).length;
    if (bytes + b > 75) { out += cur + '\r\n '; cur = ''; bytes = 1; }
    cur += ch; bytes += b;
  }
  return out + cur;
}
const icsStamp = ms => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const icsDay = ms => { const d = new Date(ms); return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`; };
/* events : [{ uid, ms, allDay, title, description }] */
function buildIcs(calName, events, nowMs = Date.now()){
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Zodiaque et Decans//Calendrier du ciel//FR', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
             `X-WR-CALNAME:${icsEscape(calName)}`];
  for (const e of events) {
    L.push('BEGIN:VEVENT', `UID:${e.uid}@zodiaque-decans`, `DTSTAMP:${icsStamp(nowMs)}`);
    if (e.allDay) L.push(`DTSTART;VALUE=DATE:${icsDay(e.ms)}`, `DTEND;VALUE=DATE:${icsDay(e.ms + CAL_DAY)}`);
    else L.push(`DTSTART:${icsStamp(e.ms)}`, `DTEND:${icsStamp(e.ms + 30 * 60e3)}`);
    L.push(`SUMMARY:${icsEscape(e.title)}`);
    if (e.description) L.push(`DESCRIPTION:${icsEscape(e.description)}`);
    L.push('TRANSP:TRANSPARENT', 'END:VEVENT');
  }
  L.push('END:VCALENDAR');
  return L.map(icsFold).join('\r\n') + '\r\n';
}
