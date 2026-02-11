const CACHE_NAME = "estudos-v1";
const FILES = [
  "index.html",
  "manifest.json",
  "portugues/links.html",
  "matematica/links.html",
  "especificos/links.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});