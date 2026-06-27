/**
 * Navigation module: mobile menu, smooth in-page scrolling, active-link
 * tracking, the scroll-progress bar, and reveal-on-scroll animations.
 */
(function () {
  window.App = window.App || {};

  const root = document.documentElement;
  const body = document.body;
  const siteNav = document.querySelector(".site-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopQuery = window.matchMedia("(min-width: 761px)");

  function updateMenuButton(isOpen) {
    if (!menuToggle) return;
    const key = isOpen ? "menu.closeLabel" : "menu.openLabel";
    const label = App.i18n.getValue(key, App.i18n.getActiveLanguage());
    menuToggle.setAttribute("aria-label", label || "");
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
    updateMenuButton(isOpen);
  }

  function setActiveNavLink(hash) {
    navLinks.forEach(function (link) {
      const isActive = Boolean(hash) && link.getAttribute("href") === hash;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function isNavHash(hash) {
    return navLinks.some(function (link) {
      return link.getAttribute("href") === hash;
    });
  }

  function initMenu() {
    if (!menuToggle || !siteNav) return;

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

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        setMenuOpen(false);
        if (isNavHash(href)) {
          setActiveNavLink(href);
        }

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
  }

  function observeActiveNav() {
    const navSections = navLinks
      .map(function (link) {
        const href = link.getAttribute("href");
        return href ? document.querySelector(href) : null;
      })
      .filter(Boolean);

    if (!navSections.length) return;

    if (!("IntersectionObserver" in window)) {
      const hash = window.location.hash;
      setActiveNavLink(hash && isNavHash(hash) ? hash : "");
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveNavLink("#" + entry.target.id);
          }
        });
      },
      {
        rootMargin: "-32% 0px -54% 0px",
        threshold: 0
      }
    );

    navSections.forEach(function (section) {
      observer.observe(section);
    });
  }

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

  function initScrollProgress() {
    const scrollBar = document.querySelector(".scroll-progress");
    if (!scrollBar) return;

    let ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      window.requestAnimationFrame(function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollBar.style.width = progress + "%";
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  function init() {
    initMenu();
    initSmoothScroll();
    observeActiveNav();
    revealSections();
    initScrollProgress();

    // Re-label the menu button when the language switches.
    document.addEventListener("app:languagechange", function () {
      updateMenuButton(Boolean(menuToggle) && menuToggle.getAttribute("aria-expanded") === "true");
    });
  }

  App.nav = { init: init };
})();
