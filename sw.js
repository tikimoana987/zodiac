/* Zodiaque & Décans — service worker de l'application installable (site en ligne uniquement).
   Garde l'outil en mémoire sur l'appareil pour qu'il fonctionne hors ligne, et à chaque nouvelle version
   ne télécharge que ce qui a changé :
   - la page (index.html, quelques Ko) : réseau d'abord (pour recevoir les mises à jour), mémoire si hors ligne ;
     gardée à l'installation, après vérification qu'elle est bien celle de cette version ;
   - les modules (scripts, styles) : un fichier par module, nommé d'après son contenu (zodiac-app.1a2b3c4d5e.js).
     Un nom ne change jamais de contenu : un module déjà en mémoire est gardé d'une version à l'autre,
     seul un module modifié (donc renommé) est téléchargé ; ceux qui ne servent plus sont effacés ;
   - le manifeste et les icônes : gardés tant qu'ils ne changent pas.
   Le numéro de version, celui des icônes et la liste des modules sont écrits ici par build-standalone.py :
   chaque nouvelle version change ce fichier, ce qui déclenche l'installation de la nouvelle version. */
const VERSION = '__VERSION__';
const ASSETS = __ASSETS__;
const PAGE = 'zodiac-page-' + VERSION;           // la page de cette version
const SHELL = 'zodiac-shell-__SHELL__';           // manifeste et icônes
const FILES = 'zodiac-files';                     // modules, gardés d'une version à l'autre
const SHELL_FILES = ['./manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const PUBLISHED = /\.[0-9a-f]{10}\.(js|css)$/;    // nom d'un module publié

const absolute = url => new URL(url, self.location).href;

/* Met dans la mémoire « name » les adresses qui n'y sont pas encore : rien n'est retéléchargé sinon */
async function fill(name, urls){
  const cache = await caches.open(name);
  const have = new Set((await cache.keys()).map(r => r.url));
  await cache.addAll(urls.filter(u => !have.has(absolute(u))));
}

/* La page de cette version, demandée au serveur (pas à la mémoire du navigateur) et vérifiée :
   l'appli ne garde jamais une page qui ne correspondrait pas à ses modules */
async function storePage(){
  const response = await fetch('./index.html', { cache: 'reload' });
  if (!response.ok || !(await response.clone().text()).includes(`<meta name="zodiac-version" content="${VERSION}">`)) {
    throw new Error('page de cette version pas encore disponible');   // installation reprise plus tard
  }
  await (await caches.open(PAGE)).put('./index.html', response);
}

self.addEventListener('install', event => {
  event.waitUntil(Promise.all([fill(FILES, ASSETS), fill(SHELL, SHELL_FILES), storePage()]).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = [PAGE, SHELL, FILES];
    for (const key of await caches.keys()) {
      if (key.startsWith('zodiac-') && !keep.includes(key)) await caches.delete(key);   // anciennes versions
    }
    const cache = await caches.open(FILES), wanted = new Set(ASSETS.map(absolute));
    for (const request of await cache.keys()) {
      if (!wanted.has(request.url)) await cache.delete(request);   // modules qui ne servent plus
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // La page, quelle que soit l'adresse (?date=…&lang=…) : version en ligne si possible, sinon la copie gardée.
    // « no-cache » : toujours revalider auprès du serveur (sinon le navigateur peut resservir sa copie de la page
    // jusqu'à 10 minutes après une mise à jour du site).
    // Sans la partie « ?… » de l'adresse : les données d'un ancien lien (?date=…) ne partent jamais vers le serveur.
    event.respondWith(
      fetch((u => { u.search = ''; return u.href; })(new URL(request.url)), { cache: 'no-cache', credentials: 'same-origin' })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Modules, icônes : mémoire d'abord. Un module publié reçu du réseau est gardé tout de suite : la version
  // suivante, en s'installant, ne le retéléchargera pas.
  event.respondWith(caches.match(request).then(hit => hit || fetch(request).then(response => {
    if (response.ok && PUBLISHED.test(url.pathname)) {
      const copy = response.clone();
      caches.open(FILES).then(cache => cache.put(request, copy));
    }
    return response;
  })));
});
