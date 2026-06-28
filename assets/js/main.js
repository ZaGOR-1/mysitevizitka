/**
 * Bootstrap: wires the modules together in a deterministic order.
 *
 * Order matters:
 *   1. mark <html> as JS-enabled (CSS uses .js to hide reveal targets);
 *   2. capture the original UA copy from the DOM before any language is applied;
 *   3. init language controls, theme, nav and cli so they subscribe to events;
 *   4. apply the saved/visible language — this fires the first languagechange,
 *      which lets every module render its initial labels and the CLI welcome;
 *   5. apply the preferred theme; wire small page actions; stamp the year;
 *      register the service worker.
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

  function translated(path) {
    return App.i18n.getValue(path, App.i18n.getActiveLanguage()) || "";
  }

  function loadFontStylesheet() {
    if (document.querySelector('link[href="assets/fonts/fonts.css"][rel="stylesheet"]')) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "assets/fonts/fonts.css";
    document.head.appendChild(link);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.inset = "0 auto auto 0";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      try {
        if (document.execCommand("copy")) {
          resolve();
        } else {
          reject(new Error("Copy command failed"));
        }
      } catch (error) {
        reject(error);
      } finally {
        textarea.remove();
      }
    });
  }

  function initCopyEmail() {
    const button = document.querySelector(".copy-email-button");
    const status = document.querySelector(".copy-email-status");
    if (!button) return;

    let resetTimer = 0;

    function setStatus(message) {
      if (!status) return;
      status.textContent = message;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(function () {
        status.textContent = "";
      }, 2200);
    }

    button.addEventListener("click", function () {
      const email = button.dataset.copyEmail || "";
      if (!email) return;

      copyText(email)
        .then(function () {
          setStatus(translated("contact.copiedEmail"));
        })
        .catch(function () {
          setStatus(translated("contact.copyEmailError"));
        });
    });

    document.addEventListener("app:languagechange", function () {
      if (status) status.textContent = "";
    });
  }

  try {
    if (!hasRequiredModules()) {
      showStaticFallback();
      return;
    }

    App.i18n.captureUkFromDom();
    root.classList.add("js");

    App.i18n.init();
    App.theme.init();
    App.nav.init();
    App.cli.init();

    App.i18n.setLanguage(App.i18n.getSavedLanguage(), false);
    App.theme.apply(App.theme.getPreferred());
    loadFontStylesheet();
    initCopyEmail();
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
