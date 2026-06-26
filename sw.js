const CACHE_VERSION = "v2-2026-06-26";
const CACHE_NAME = "portfolio-cache-" + CACHE_VERSION;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./site.webmanifest",
  "./assets/favicon.svg",
  "./assets/og-image.png",
  "./assets/og-image.svg",
  "./assets/fonts/fonts.css",
  "./assets/fonts/jetbrains-mono-400-01.woff2",
  "./assets/fonts/jetbrains-mono-400-02.woff2",
  "./assets/fonts/jetbrains-mono-400-03.woff2",
  "./assets/fonts/jetbrains-mono-400-04.woff2",
  "./assets/fonts/jetbrains-mono-400-05.woff2",
  "./assets/fonts/jetbrains-mono-400-06.woff2",
  "./assets/fonts/jetbrains-mono-500-07.woff2",
  "./assets/fonts/jetbrains-mono-500-08.woff2",
  "./assets/fonts/jetbrains-mono-500-09.woff2",
  "./assets/fonts/jetbrains-mono-500-10.woff2",
  "./assets/fonts/jetbrains-mono-500-11.woff2",
  "./assets/fonts/jetbrains-mono-500-12.woff2",
  "./assets/fonts/jetbrains-mono-600-13.woff2",
  "./assets/fonts/jetbrains-mono-600-14.woff2",
  "./assets/fonts/jetbrains-mono-600-15.woff2",
  "./assets/fonts/jetbrains-mono-600-16.woff2",
  "./assets/fonts/jetbrains-mono-600-17.woff2",
  "./assets/fonts/jetbrains-mono-600-18.woff2",
  "./assets/fonts/manrope-400-19.woff2",
  "./assets/fonts/manrope-400-20.woff2",
  "./assets/fonts/manrope-400-21.woff2",
  "./assets/fonts/manrope-400-22.woff2",
  "./assets/fonts/manrope-400-23.woff2",
  "./assets/fonts/manrope-400-24.woff2",
  "./assets/fonts/manrope-500-25.woff2",
  "./assets/fonts/manrope-500-26.woff2",
  "./assets/fonts/manrope-500-27.woff2",
  "./assets/fonts/manrope-500-28.woff2",
  "./assets/fonts/manrope-500-29.woff2",
  "./assets/fonts/manrope-500-30.woff2",
  "./assets/fonts/manrope-600-31.woff2",
  "./assets/fonts/manrope-600-32.woff2",
  "./assets/fonts/manrope-600-33.woff2",
  "./assets/fonts/manrope-600-34.woff2",
  "./assets/fonts/manrope-600-35.woff2",
  "./assets/fonts/manrope-600-36.woff2",
  "./assets/fonts/manrope-700-37.woff2",
  "./assets/fonts/manrope-700-38.woff2",
  "./assets/fonts/manrope-700-39.woff2",
  "./assets/fonts/manrope-700-40.woff2",
  "./assets/fonts/manrope-700-41.woff2",
  "./assets/fonts/manrope-700-42.woff2"
];

function cacheResponse(request, response) {
  if (!response || response.status !== 200) return response;

  const responseClone = response.clone();
  caches.open(CACHE_NAME).then(function (cache) {
    cache.put(request, responseClone);
  });

  return response;
}

function networkFirst(request, fallbackUrl) {
  return fetch(request)
    .then(function (response) {
      return cacheResponse(request, response);
    })
    .catch(function () {
      return caches.match(request).then(function (cachedResponse) {
        return cachedResponse || (fallbackUrl ? caches.match(fallbackUrl) : undefined);
      });
    });
}

function cacheFirst(request) {
  return caches.match(request).then(function (cachedResponse) {
    if (cachedResponse) return cachedResponse;

    return fetch(request).then(function (response) {
      return cacheResponse(request, response);
    });
  });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

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

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  if (!isSameOrigin) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(networkFirst(event.request, "./index.html"));
    return;
  }

  if (["style", "script", "worker", "manifest"].includes(event.request.destination)) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  if (["font", "image"].includes(event.request.destination)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  event.respondWith(networkFirst(event.request));
});
