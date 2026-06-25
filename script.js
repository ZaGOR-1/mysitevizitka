(function () {
  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const yearNode = document.querySelector("[data-current-year]");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopQuery = window.matchMedia("(min-width: 761px)");
  const themeStorageKey = "portfolio-theme";

  root.classList.add("js");

  function readStoredTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      // Theme still works for this visit if storage is unavailable.
    }
  }

  function currentTheme() {
    return root.dataset.theme === "light" ? "light" : "dark";
  }

  function updateThemeMeta(theme) {
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute("content", theme === "light" ? "#f6f8fb" : "#0d0f12");
  }

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    const nextTheme = theme === "light" ? "темну" : "світлу";
    themeToggle.setAttribute("aria-label", `Увімкнути ${nextTheme} тему`);
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

  applyTheme(readStoredTheme() === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = currentTheme() === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  }

  function setMenuOpen(isOpen) {
    if (!menuToggle || !siteNav) return;

    siteNav.classList.toggle("is-open", isOpen);
    body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
      root.dataset.menuOpen = "true";
    } else {
      root.removeAttribute("data-menu-open");
    }

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });

    desktopQuery.addEventListener("change", function (event) {
      if (event.matches) {
        setMenuOpen(false);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      setMenuOpen(false);

      target.scrollIntoView({
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
        block: "start"
      });

      if (history.pushState) {
        history.pushState(null, "", href);
      }

      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }

      target.focus({ preventScroll: true });
    });
  });

  function revealSections() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) return;

    if (reduceMotionQuery.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14
      }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  revealSections();
})();
