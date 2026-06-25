(function () {
  const translations = {
    uk: {
      meta: {
        title: "Денис Загоровський — сайт-візитка програміста",
        description: "Персональний сайт Дениса Загоровського: студент Software Engineering, початківець backend/frontend developer, який вивчає веброзробку, Linux, сервери й автоматизацію.",
        ogTitle: "Денис Загоровський — Software Engineering Student",
        ogDescription: "Мінімалістичне портфоліо студента Software Engineering з фокусом на Web, Backend, Linux і Automation.",
        locale: "uk_UA"
      },
      skip: {
        toContent: "Перейти до контенту"
      },
      site: {
        name: "Денис Загоровський"
      },
      language: {
        ukLabel: "Перемкнути мову на українську",
        enLabel: "Switch language to English"
      },
      theme: {
        lightLabel: "Увімкнути світлу тему",
        darkLabel: "Увімкнути темну тему"
      },
      menu: {
        openLabel: "Відкрити меню",
        closeLabel: "Закрити меню"
      },
      aria: {
        home: "На початок сторінки",
        mainNav: "Основна навігація",
        languageSwitch: "Перемикач мови",
        quickFacts: "Короткі факти профілю",
        primaryActions: "Основні дії",
        terminal: "Короткий профіль у форматі коду",
        interests: "Напрями інтересу",
        quickProfile: "Quick profile",
        focusGrid: "Поточні напрями розвитку",
        skills: "Навички за категоріями",
        githubList: "Що можна знайти на GitHub",
        githubProfile: "GitHub профіль Дениса Загоровського",
        telegramProfile: "Telegram профіль Дениса Загоровського",
        linkedinProfile: "LinkedIn профіль Дениса Загоровського",
        socialLinks: "Соцмережі та контакти"
      },
      nav: {
        about: "Про мене",
        focus: "Фокус",
        skills: "Навички",
        github: "GitHub",
        contact: "Контакти"
      },
      hero: {
        status: "available for learning projects",
        role: "software engineering student / backend & frontend basics",
        name: "Денис Загоровський",
        title: "Студент Software Engineering, який вивчає веброзробку, backend, Linux і автоматизацію.",
        description: "Пишу простий код, розбираюся в серверах і поступово збираю власний шлях у розробці.",
        factYear: "2nd year SE student",
        factWeb: "Web / Backend",
        factLinux: "Linux & VPS",
        factOpen: "Open to learning projects",
        githubButton: "GitHub",
        contactButton: "Зв'язатися",
        code: 'const developer = {\n  name: "Денис Загоровський",\n  role: "Software Engineering Student",\n  focus: ["Backend", "Web", "Linux", "Automation"],\n  learning: ["Laravel", "Symfony", "VPS Deploy"]\n};'
      },
      about: {
        number: "01 / About",
        title: "Про мене",
        p1: 'Я студент 2 курсу спеціальності 121 "Інженерія програмного забезпечення" у Житомирській політехніці. Зараз розвиваюся у веброзробці, вивчаю backend-підхід, роботу з базами даних, Linux-середовищем і розгортанням сайтів на VPS.',
        p2: "Мені цікаві практичні речі: сервери, автоматизація, Telegram-боти, оптимізація Windows, Minecraft-сервери й невеликі вебзастосунки, які можна реально запустити, перевірити й покращувати.",
        profileEducationLabel: "Education",
        profileEducationValue: "Software Engineering, 2nd year",
        profileUniversityLabel: "University",
        profileUniversityValue: "Zhytomyr Polytechnic",
        profileFocusLabel: "Focus",
        profileFocusValue: "Web, Backend, Linux",
        profileGoalLabel: "Goal",
        profileGoalValue: "grow into a practical developer"
      },
      focus: {
        number: "02 / Focus",
        title: "Зараз у фокусі",
        intro: "Найбільше уваги зараз йде в практику: backend-основи, серверне середовище й маленькі інструменти, які можна довести до робочого стану.",
        backendLabel: "Backend basics",
        backendTitle: "PHP, Laravel, Symfony, APIs",
        backendText: "Розбираюся з логікою застосунків, маршрутами, базами даних і простими API.",
        linuxLabel: "Linux & VPS",
        linuxTitle: "Ubuntu, Nginx / Apache, deployment",
        linuxText: "Практикую розгортання статичних сайтів і базову роботу з серверним середовищем.",
        automationLabel: "Automation",
        automationTitle: "Scripts, Telegram bots, small tools",
        automationText: "Пробую автоматизувати повторювані задачі й збирати невеликі корисні інструменти."
      },
      skills: {
        number: "03 / Skills",
        title: "Навички",
        frontendTitle: "Frontend",
        frontendText: "HTML, CSS, JavaScript",
        backendTitle: "Backend",
        backendText: "PHP, Laravel, Symfony, Python",
        databasesTitle: "Databases",
        databasesText: "MySQL, SQLite",
        toolsTitle: "Tools & Server",
        toolsText: "Git, GitHub, Linux, Ubuntu, VPS, Nginx, Apache",
        automationTitle: "Automation",
        automationText: "Telegram bots, scripts, small tools"
      },
      github: {
        number: "04 / GitHub",
        title: "Мої роботи",
        text: "Навчальні, особисті та експериментальні проєкти я збираю на GitHub. Там можна знайти вебзастосунки, невеликі backend-експерименти, Telegram-боти, автоматизацію та інші речі, які я поступово доробляю й покращую.",
        itemStudent: "student projects",
        itemWeb: "web applications",
        itemBackend: "backend experiments",
        itemBots: "Telegram bots",
        itemAutomation: "automation scripts",
        itemNotes: "Linux/VPS notes",
        button: "Перейти на GitHub"
      },
      contact: {
        number: "05 / Contact",
        title: "Contact / Links",
        status: "status: learning / open to practice",
        text: "Відкритий до навчальних проєктів, практики, стажування або невеликої співпраці, де можна попрацювати з реальними задачами й вирости як розробник.",
        button: "Написати мені"
      },
      footer: {
        note: "built with html/css/js · hosted on vps"
      }
    },
    en: {
      meta: {
        title: "Denys Zahorovskyi — developer portfolio",
        description: "Personal website of Denys Zahorovskyi, a Software Engineering student learning web development, backend, Linux, servers and automation.",
        ogTitle: "Denys Zahorovskyi — developer portfolio",
        ogDescription: "Minimal developer portfolio of a Software Engineering student focused on Web, Backend, Linux and Automation.",
        locale: "en_US"
      },
      skip: {
        toContent: "Skip to content"
      },
      site: {
        name: "Denys Zahorovskyi"
      },
      language: {
        ukLabel: "Switch language to Ukrainian",
        enLabel: "Switch language to English"
      },
      theme: {
        lightLabel: "Enable light theme",
        darkLabel: "Enable dark theme"
      },
      menu: {
        openLabel: "Open menu",
        closeLabel: "Close menu"
      },
      aria: {
        home: "Back to the top of the page",
        mainNav: "Main navigation",
        languageSwitch: "Language switcher",
        quickFacts: "Profile quick facts",
        primaryActions: "Primary actions",
        terminal: "Short profile in code format",
        interests: "Areas of interest",
        quickProfile: "Quick profile",
        focusGrid: "Current growth directions",
        skills: "Skills by category",
        githubList: "What you can find on GitHub",
        githubProfile: "Denys Zahorovskyi GitHub profile",
        telegramProfile: "Denys Zahorovskyi Telegram profile",
        linkedinProfile: "Denys Zahorovskyi LinkedIn profile",
        socialLinks: "Social links and contact"
      },
      nav: {
        about: "About",
        focus: "Focus",
        skills: "Skills",
        github: "GitHub",
        contact: "Contact"
      },
      hero: {
        status: "available for learning projects",
        role: "software engineering student / backend & frontend basics",
        name: "Denys Zahorovskyi",
        title: "Software Engineering student learning web development, backend, Linux and automation.",
        description: "I write simple code, explore servers and gradually build my own path in software development.",
        factYear: "2nd year SE student",
        factWeb: "Web / Backend",
        factLinux: "Linux & VPS",
        factOpen: "Open to learning projects",
        githubButton: "GitHub",
        contactButton: "Contact me",
        code: 'const developer = {\n  name: "Denys Zahorovskyi",\n  role: "Software Engineering Student",\n  focus: ["Backend", "Web", "Linux", "Automation"],\n  learning: ["Laravel", "Symfony", "VPS Deploy"]\n};'
      },
      about: {
        number: "01 / About",
        title: "About me",
        p1: 'I am a 2nd year student of specialty 121 "Software Engineering" at Zhytomyr Polytechnic. I am growing in web development, learning backend fundamentals, databases, Linux environments and VPS deployment.',
        p2: "I am interested in practical things: servers, automation, Telegram bots, Windows optimization, Minecraft servers and small web applications that can be launched, tested and improved.",
        profileEducationLabel: "Education",
        profileEducationValue: "Software Engineering, 2nd year",
        profileUniversityLabel: "University",
        profileUniversityValue: "Zhytomyr Polytechnic",
        profileFocusLabel: "Focus",
        profileFocusValue: "Web, Backend, Linux",
        profileGoalLabel: "Goal",
        profileGoalValue: "grow into a practical developer"
      },
      focus: {
        number: "02 / Focus",
        title: "Current focus",
        intro: "Most of my attention goes into practice: backend basics, server environments and small tools that can be brought to a working state.",
        backendLabel: "Backend basics",
        backendTitle: "PHP, Laravel, Symfony, APIs",
        backendText: "Learning application logic, routes, databases and simple APIs.",
        linuxLabel: "Linux & VPS",
        linuxTitle: "Ubuntu, Nginx / Apache, deployment",
        linuxText: "Practicing static site deployment and basic work with server environments.",
        automationLabel: "Automation",
        automationTitle: "Scripts, Telegram bots, small tools",
        automationText: "Trying to automate repetitive tasks and build small useful tools."
      },
      skills: {
        number: "03 / Skills",
        title: "Skills",
        frontendTitle: "Frontend",
        frontendText: "HTML, CSS, JavaScript",
        backendTitle: "Backend",
        backendText: "PHP, Laravel, Symfony, Python",
        databasesTitle: "Databases",
        databasesText: "MySQL, SQLite",
        toolsTitle: "Tools & Server",
        toolsText: "Git, GitHub, Linux, Ubuntu, VPS, Nginx, Apache",
        automationTitle: "Automation",
        automationText: "Telegram bots, scripts, small tools"
      },
      github: {
        number: "04 / GitHub",
        title: "My work",
        text: "I collect my learning, personal and experimental projects on GitHub. There you can find web applications, small backend experiments, Telegram bots, automation and other things I gradually refine and improve.",
        itemStudent: "student projects",
        itemWeb: "web applications",
        itemBackend: "backend experiments",
        itemBots: "Telegram bots",
        itemAutomation: "automation scripts",
        itemNotes: "Linux/VPS notes",
        button: "Go to GitHub"
      },
      contact: {
        number: "05 / Contact",
        title: "Contact / Links",
        status: "status: learning / open to practice",
        text: "I am open to learning projects, practice, internships or small collaboration where I can work with real tasks and grow as a developer.",
        button: "Write to me"
      },
      footer: {
        note: "built with html/css/js · hosted on vps"
      }
    }
  };

  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const languageButtons = document.querySelectorAll("[data-language]");
  const yearNode = document.querySelector("[data-current-year]");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopQuery = window.matchMedia("(min-width: 761px)");
  const themeStorageKey = "portfolio-theme";
  const languageStorageKey = "site-language";
  let activeLanguage = "uk";

  root.classList.add("js");

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // The current visit still works if storage is unavailable.
    }
  }

  function getValue(path, lang) {
    return path.split(".").reduce(function (value, key) {
      return value && Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined;
    }, translations[lang]);
  }

  function getSavedLanguage() {
    const savedLanguage = readStorage(languageStorageKey);
    return savedLanguage === "en" || savedLanguage === "uk" ? savedLanguage : "uk";
  }

  function currentTheme() {
    return root.dataset.theme === "light" ? "light" : "dark";
  }

  function updateMetaTags(lang) {
    const meta = translations[lang].meta;
    document.title = meta.title;
    if (descriptionMeta) descriptionMeta.setAttribute("content", meta.description);
    if (ogTitleMeta) ogTitleMeta.setAttribute("content", meta.ogTitle);
    if (ogDescriptionMeta) ogDescriptionMeta.setAttribute("content", meta.ogDescription);
    if (ogLocaleMeta) ogLocaleMeta.setAttribute("content", meta.locale);
    if (twitterTitleMeta) twitterTitleMeta.setAttribute("content", meta.ogTitle);
    if (twitterDescriptionMeta) twitterDescriptionMeta.setAttribute("content", meta.ogDescription);
  }

  function updateTextContent(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const value = getValue(element.dataset.i18n, lang);
      if (typeof value === "string") {
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

  function updateLanguageButtons(lang) {
    languageButtons.forEach(function (button) {
      const isActive = button.dataset.language === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    const key = theme === "light" ? "theme.darkLabel" : "theme.lightLabel";
    const label = getValue(key, activeLanguage);
    themeToggle.setAttribute("aria-label", label || "");
  }

  function updateMenuButton(isOpen) {
    if (!menuToggle) return;
    const key = isOpen ? "menu.closeLabel" : "menu.openLabel";
    const label = getValue(key, activeLanguage);
    menuToggle.setAttribute("aria-label", label || "");
  }

  function setLanguage(lang, shouldSave) {
    activeLanguage = lang === "en" ? "en" : "uk";
    root.setAttribute("lang", activeLanguage);
    updateTextContent(activeLanguage);
    updateMetaTags(activeLanguage);
    updateLanguageButtons(activeLanguage);
    updateThemeButton(currentTheme());
    updateMenuButton(menuToggle ? menuToggle.getAttribute("aria-expanded") === "true" : false);

    if (shouldSave) {
      writeStorage(languageStorageKey, activeLanguage);
    }
  }

  function updateThemeMeta(theme) {
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute("content", theme === "light" ? "#f6f8fb" : "#0d0f12");
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

  setLanguage(getSavedLanguage(), false);
  applyTheme(readStorage(themeStorageKey) === "light" ? "light" : "dark");

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.language, true);
    });
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextTheme = currentTheme() === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      writeStorage(themeStorageKey, nextTheme);
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
    updateMenuButton(isOpen);
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
