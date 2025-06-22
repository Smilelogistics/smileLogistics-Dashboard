const CACHE_NAME = 'pwa-cache-v1';
const OFFLINE_URL = '/offline.html';

const assetsToCache = [
  '/',
  '/offline.html',
  './assets/images/icons/icon-192x192.png',
  './assets/images/icons/icon-512x512.png',
  '.assets/css/style.css',
  '.assets/js/index.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then(response => {
        return response || caches.match(OFFLINE_URL);
      });
    })
  );
});






















// const CACHE_NAME = 'smiles-cache-v1';
// const urlsToCache = [
//   '/',
//   '/offline.html',
//   './assets/css/app.css',
//   './assets/js/app.js',
//   './assets/images/icons/icon-192x192.png'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     fetch(event.request).catch(() =>
//       caches.match(event.request).then(response =>
//         response || caches.match('/offline.html')
//       )
//     )
//   );
// });
