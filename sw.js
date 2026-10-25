/* Zodiaque & Décans — service worker de l'application installable (site en ligne uniquement).
   Garde l'outil en mémoire sur l'appareil pour qu'il fonctionne hors ligne.
   Page : réseau d'abord (pour recevoir les mises à jour), mémoire si hors ligne.
   Autres fichiers (icônes, manifeste) : mémoire d'abord.
   c857500e8ea3 est remplacé par build-standalone.py : chaque nouvelle version change ce fichier,
   ce qui déclenche l'installation de la nouvelle copie et l'effacement de l'ancienne. */
const CACHE = 'zodiac-c857500e8ea3';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('zodiac-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // La page, quelle que soit l'adresse (?date=…&lang=…) : version en ligne si possible, sinon la copie gardée
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put('./index.html', copy)); }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(caches.match(request).then(hit => hit || fetch(request)));
});
