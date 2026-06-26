const CACHE_NAME = "portfolio-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./site.webmanifest",
  "./assets/favicon.svg",
  "./assets/og-image.png",
  "./assets/og-image.svg"
];

// Install Event - cache core assets
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// Activate Event - clean old caches
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Fetch Event - Network first with cache fallback for HTML, Cache first for assets
self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  // For HTML files, try network first, fallback to cache
  if (event.request.mode === "navigate" || (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html"))) {
    event.respondWith(
      fetch(event.request)
        .then(function (response) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(function () {
          return caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
              return cachedResponse;
            }
            return caches.match("./index.html");
          });
        })
    );
    return;
  }

  // Cache first for static assets and cross-origin fonts
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(function (response) {
        // Cache Google Fonts or same-origin static assets on the fly
        if (
          response.status === 200 &&
          (requestUrl.origin === self.location.origin ||
            event.request.url.includes("fonts.googleapis.com") ||
            event.request.url.includes("fonts.gstatic.com"))
        ) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      });
    })
  );
});
