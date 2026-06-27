/**
 * Bootstrap: wires the modules together in a deterministic order.
 *
 * Order matters:
 *   1. mark <html> as JS-enabled (CSS uses .js to hide reveal targets);
 *   2. capture the original UA copy from the DOM before any language is applied;
 *   3. init theme / nav / cli so they subscribe to "app:languagechange";
 *   4. apply the saved/visible language — this fires the first languagechange,
 *      which lets every module render its initial labels and the CLI welcome;
 *   5. apply the preferred theme; stamp the year; register the service worker.
 */
(function () {
  window.App = window.App || {};

  const root = document.documentElement;

  function showStaticFallback() {
    root.classList.remove("js");
    document.querySelectorAll(".reveal").forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  function hasRequiredModules() {
    return App.i18n && App.theme && App.nav && App.cli;
  }

  try {
    if (!hasRequiredModules()) {
      showStaticFallback();
      return;
    }

    App.i18n.captureUkFromDom();
    root.classList.add("js");

    App.theme.init();
    App.nav.init();
    App.cli.init();

    App.i18n.setLanguage(App.i18n.getSavedLanguage(), false);
    App.theme.apply(App.theme.getPreferred());
  } catch (error) {
    showStaticFallback();
    return;
  }

  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  // Register the service worker for offline access (optional enhancement).
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {
        // Offline cache is optional; the site stays fully usable without it.
      });
    });
  }
})();
