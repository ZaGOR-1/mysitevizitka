/**
 * Theme module: dark default, optional light, persisted choice.
 *
 * Until the visitor makes an explicit choice the theme follows the system
 * preference (prefers-color-scheme). The inline script in <head> applies the
 * preference before first paint to avoid a flash; this module keeps everything
 * in sync afterwards and reacts to language changes to relabel its button.
 */
(function () {
  window.App = window.App || {};

  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const lightThemeQuery = window.matchMedia("(prefers-color-scheme: light)");
  const themeStorageKey = "portfolio-theme";

  function currentTheme() {
    return root.dataset.theme === "light" ? "light" : "dark";
  }

  function getPreferredTheme() {
    const saved = App.storage.read(themeStorageKey);
    if (saved === "light" || saved === "dark") return saved;
    return lightThemeQuery.matches ? "light" : "dark";
  }

  function updateThemeMeta(theme) {
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute("content", theme === "light" ? "#f6f8f6" : "#0d0f12");
  }

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    const key = theme === "light" ? "theme.darkLabel" : "theme.lightLabel";
    const label = App.i18n.getValue(key, App.i18n.getActiveLanguage());
    themeToggle.setAttribute("aria-label", label || "");
  }

  function applyTheme(theme) {
    if (theme === "light") {
      root.dataset.theme = "light";
    } else {
      root.removeAttribute("data-theme");
      theme = "dark";
    }

    updateThemeMeta(theme);
    updateThemeButton(theme);
  }

  function init() {
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        const nextTheme = currentTheme() === "light" ? "dark" : "light";
        applyTheme(nextTheme);
        App.storage.write(themeStorageKey, nextTheme);
      });
    }

    // Follow the system theme until the visitor makes an explicit choice.
    lightThemeQuery.addEventListener("change", function (event) {
      if (App.storage.read(themeStorageKey)) return;
      applyTheme(event.matches ? "light" : "dark");
    });

    // Re-label the button when the language switches.
    document.addEventListener("app:languagechange", function () {
      updateThemeButton(currentTheme());
    });
  }

  App.theme = {
    init: init,
    apply: applyTheme,
    getPreferred: getPreferredTheme,
    current: currentTheme
  };
})();
