const CACHE_VERSION = "v8-2026-06-28";
const CACHE_NAME = "portfolio-cache-" + CACHE_VERSION;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./assets/js/i18n.en.js",
  "./assets/js/i18n.uk.js",
  "./assets/js/i18n.js",
  "./assets/js/theme.js",
  "./assets/js/cli.js",
  "./assets/js/nav.js",
  "./assets/js/main.js",
  "./site.webmanifest",
  "./assets/favicon.svg",
  "./assets/og-image.png",
  "./assets/og-image.svg",
  "./assets/fonts/fonts.css"
];

function cacheResponse(request, response) {
  if (!response || response.status !== 200) return response;

  const responseClone = response.clone();
  caches.open(CACHE_NAME).then(function (cache) {
    cache.put(request, responseClone);
  });

  return response;
}

function offlineResponse(request) {
  if (request.destination === "image") {
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"></svg>',
      {
        status: 200,
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "no-store"
        }
      }
    );
  }

  return new Response("", {
    status: 503,
    statusText: "Offline",
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function networkFirst(request, fallbackUrl) {
  return fetch(request)
    .then(function (response) {
      return cacheResponse(request, response);
    })
    .catch(function () {
      return caches.match(request).then(function (cachedResponse) {
        if (cachedResponse) return cachedResponse;

        if (fallbackUrl) {
          return caches.match(fallbackUrl).then(function (fallbackResponse) {
            return fallbackResponse || offlineResponse(request);
          });
        }

        return offlineResponse(request);
      });
    });
}

function cacheFirst(request) {
  return caches.match(request).then(function (cachedResponse) {
    if (cachedResponse) return cachedResponse;

    return fetch(request).then(function (response) {
      return cacheResponse(request, response);
    }).catch(function () {
      return offlineResponse(request);
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
