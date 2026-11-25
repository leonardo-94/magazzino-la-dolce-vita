// Service worker minimo: serve solo a rendere l'app installabile. Non salva dati del magazzino.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
