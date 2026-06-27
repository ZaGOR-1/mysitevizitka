/**
 * i18n engine.
 *
 * Exposes:
 *   App.storage.read(key) / App.storage.write(key, value)  — safe localStorage
 *   App.i18n.captureUkFromDom()   — snapshot UA text/aria/meta from the markup
 *   App.i18n.getValue(path, lang) — resolve a dotted key for a language
 *   App.i18n.setLanguage(lang, save)
 *   App.i18n.getActiveLanguage()
 *   App.i18n.getSavedLanguage()
 *
 * On every setLanguage() the engine dispatches an "app:languagechange" event on
 * document so other modules (theme, cli, nav) can refresh their own labels
 * without a hard dependency on i18n internals.
 */
(function () {
  window.App = window.App || {};
  App.dict = App.dict || {};

  const root = document.documentElement;
  const languageStorageKey = "site-language";
  let activeLanguage = "uk";

  // ---- safe storage (shared with theme.js) --------------------------------
  const storage = {
    read: function (key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },
    write: function (key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        // The current visit still works if storage is unavailable.
      }
    }
  };
  App.storage = storage;

  // ---- dotted-path helpers -------------------------------------------------
  function getByPath(object, path) {
    return path.split(".").reduce(function (value, key) {
      return value && Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined;
    }, object);
  }

  function setByPath(object, path, value) {
    const keys = path.split(".");
    const lastKey = keys.pop();
    const target = keys.reduce(function (node, key) {
      if (typeof node[key] !== "object" || node[key] === null) {
        node[key] = {};
      }
      return node[key];
    }, object);
    target[lastKey] = value;
  }

  function isHtmlElement(element) {
    return element.tagName === "CODE" || element.classList.contains("html-content");
  }

  // ---- capture UA straight from the rendered markup ------------------------
  // Must run before any language is applied, while the DOM still holds the
  // original Ukrainian copy. DOM values are layered on top of the residual UA
  // dictionary (i18n.uk.js); the two key sets are disjoint by design.
  function captureUkFromDom() {
    const uk = App.dict.uk = App.dict.uk || {};

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.dataset.i18n;
      const value = isHtmlElement(element) ? element.innerHTML : element.textContent.trim();
      setByPath(uk, key, value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      const key = element.dataset.i18nAriaLabel;
      const value = element.getAttribute("aria-label");
      if (value !== null) setByPath(uk, key, value.trim());
    });

    const metaPairs = [
      ["meta.title", document.title],
      ["meta.description", metaContent('meta[name="description"]')],
      ["meta.ogTitle", metaContent('meta[property="og:title"]')],
      ["meta.ogDescription", metaContent('meta[property="og:description"]')],
      ["meta.locale", metaContent('meta[property="og:locale"]')]
    ];
    metaPairs.forEach(function (pair) {
      if (typeof pair[1] === "string") setByPath(uk, pair[0], pair[1]);
    });
  }

  function metaContent(selector) {
    const node = document.querySelector(selector);
    return node ? node.getAttribute("content") : undefined;
  }

  // ---- resolution ----------------------------------------------------------
  function getValue(path, lang) {
    return getByPath(App.dict[lang], path);
  }

  // ---- DOM application -----------------------------------------------------
  function updateTextContent(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const value = getValue(element.dataset.i18n, lang);
      if (typeof value !== "string") return;
      if (isHtmlElement(element)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      const value = getValue(element.dataset.i18nAriaLabel, lang);
      if (typeof value === "string") {
        element.setAttribute("aria-label", value);
      }
    });
  }

  function updateMetaTags(lang) {
    const meta = App.dict[lang] && App.dict[lang].meta;
    if (!meta) return;

    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.ogTitle);
    setMeta('meta[property="og:description"]', meta.ogDescription);
    setMeta('meta[property="og:locale"]', meta.locale);
    setMeta('meta[name="twitter:title"]', meta.ogTitle);
    setMeta('meta[name="twitter:description"]', meta.ogDescription);
  }

  function setMeta(selector, content) {
    if (typeof content !== "string") return;
    const node = document.querySelector(selector);
    if (node) node.setAttribute("content", content);
  }

  function updateLanguageButtons(lang) {
    document.querySelectorAll("[data-language]").forEach(function (button) {
      const isActive = button.dataset.language === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLanguage(lang, shouldSave) {
    activeLanguage = lang === "en" ? "en" : "uk";
    root.setAttribute("lang", activeLanguage);
    updateTextContent(activeLanguage);
    updateMetaTags(activeLanguage);
    updateLanguageButtons(activeLanguage);

    if (shouldSave) {
      storage.write(languageStorageKey, activeLanguage);
    }

    document.dispatchEvent(new CustomEvent("app:languagechange", {
      detail: { lang: activeLanguage }
    }));
  }

  function getActiveLanguage() {
    return activeLanguage;
  }

  function getSavedLanguage() {
    const saved = storage.read(languageStorageKey);
    return saved === "en" || saved === "uk" ? saved : "uk";
  }

  App.i18n = {
    captureUkFromDom: captureUkFromDom,
    getValue: getValue,
    setLanguage: setLanguage,
    getActiveLanguage: getActiveLanguage,
    getSavedLanguage: getSavedLanguage
  };
})();
