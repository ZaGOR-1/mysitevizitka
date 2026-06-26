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
        name: "Денис Загоровський",
        shortName: "Денис"
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
        terminalTabs: "Перемикач термінального блоку",
        terminalInput: "Ввід команди в терміналі",
        interests: "Напрями інтересу",
        quickProfile: "Короткий профіль",
        learningNow: "Що зараз вчу та практикую",
        focusGrid: "Поточні напрями розвитку",
        skills: "Навички за категоріями",
        githubList: "Що можна знайти на GitHub",
        githubSnapshot: "GitHub technical snapshot",
        availabilityStatus: "Доступність і формат співпраці",
        copyEmail: "Скопіювати email",
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
        status: "відкритий до навчальних проєктів",
        role: "студент інженерії ПЗ / backend & frontend basics",
        name: "Денис Загоровський",
        title: "Студент Software Engineering, який вивчає веброзробку, backend, Linux і автоматизацію.",
        description: "Пишу простий код, розбираюся в серверах і поступово збираю власний шлях у розробці.",
        factYear: "2 курс Software Engineering",
        factWeb: "Web / Backend",
        factLinux: "Linux & VPS",
        factOpen: "відкритий до навчальних проєктів",
        githubButton: "GitHub",
        contactButton: "Зв'язатися",
        code: '<span class="code-keyword">const</span> <span class="code-def">developer</span> = {\n  name: <span class="code-string">"Денис Загоровський"</span>,\n  role: <span class="code-string">"Software Engineering Student"</span>,\n  focus: [<span class="code-string">"Backend"</span>, <span class="code-string">"Web"</span>, <span class="code-string">"Linux"</span>, <span class="code-string">"Automation"</span>],\n  learning: [<span class="code-string">"Laravel"</span>, <span class="code-string">"Symfony"</span>, <span class="code-string">"VPS Deploy"</span>]\n};'
      },
      about: {
        number: "01 / Про мене",
        title: "Про мене",
        p1: 'Я студент 2 курсу спеціальності 121 "Інженерія програмного забезпечення" у Житомирській політехніці. Зараз розвиваюся у веброзробці, вивчаю backend-підхід, роботу з базами даних, Linux-середовищем і розгортанням сайтів на VPS.',
        p2: "Мені цікаві практичні речі: сервери, автоматизація, Telegram-боти, оптимізація Windows, Minecraft-сервери й невеликі вебзастосунки, які можна реально запустити, перевірити й покращувати.",
        profileEducationLabel: "Освіта",
        profileEducationValue: "Software Engineering, 2 курс",
        profileUniversityLabel: "Університет",
        profileUniversityValue: "Житомирська політехніка",
        profileFocusLabel: "Фокус",
        profileFocusValue: "Web, Backend, Linux",
        profileGoalLabel: "Ціль",
        profileGoalValue: "вирости в практичного розробника"
      },
      focus: {
        number: "02 / Фокус",
        title: "Зараз у фокусі",
        intro: "Найбільше уваги зараз йде в практику: backend-основи, серверне середовище й маленькі інструменти, які можна довести до робочого стану.",
        learningTitle: "Зараз вчу / практикую",
        learningLaravel: "Laravel basics",
        learningLinux: "Linux deploy",
        learningBots: "Telegram bots",
        learningSql: "SQL practice",
        backendLabel: "Backend-основи",
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
        number: "03 / Навички",
        title: "Навички",
        frontendTitle: "Frontend",
        frontendText: "HTML, CSS, JavaScript",
        backendTitle: "Backend",
        backendText: "PHP, Laravel, Symfony, Python, C, C#",
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
        itemStudent: "навчальні проєкти",
        itemWeb: "вебзастосунки",
        itemBackend: "backend-експерименти",
        itemBots: "Telegram bots",
        itemAutomation: "скрипти автоматизації",
        itemNotes: "Linux/VPS нотатки",
        snapshotProfileLabel: "profile",
        snapshotContentLabel: "content",
        snapshotContentValue: "навчальні проєкти · bots · scripts · server notes",
        snapshotFocusLabel: "останній фокус",
        snapshotFocusValue: "web/backend/linux",
        button: "Перейти на GitHub"
      },
      contact: {
        number: "05 / Контакти",
        title: "Контакти / Посилання",
        status: "статус: навчаюсь / відкритий до практики",
        text: "Відкритий до навчальних проєктів, практики, стажування або невеликої співпраці, де можна попрацювати з реальними задачами й вирости як розробник.",
        openToLabel: "відкритий до",
        openToValue: "практики / стажування / навчальних проєктів",
        locationLabel: "локація",
        locationValue: "Україна",
        formatLabel: "формат",
        formatValue: "remote / part-time learning collaboration",
        copyEmail: "копіювати",
        copiedEmail: "скопійовано",
        copyEmailError: "не вдалося скопіювати",
        button: "Написати мені"
      },
      footer: {
        note: "зроблено на html/css/js · розміщено на vps"
      },
      cli: {
        help: "Доступні команди:\n  neofetch  - інформація про систему\n  skills    - список моїх навичок\n  about     - інформація про мене\n  contact   - контакти для зв'язку\n  github    - GitHub і фокус репозиторіїв\n  clear     - очистити термінал\n  help      - показати цю довідку",
        welcome: "Введіть 'help' для списку команд.",
        skillsHeader: "=== МОЇ НАВИЧКИ ===",
        skillsGroupFrontend: "Frontend: HTML, CSS, JavaScript",
        skillsGroupBackend: "Backend: PHP, Laravel, Symfony, Python, C, C#",
        skillsGroupDB: "Databases: MySQL, SQLite",
        skillsGroupTools: "Tools: Git, GitHub, Linux, Ubuntu, VPS, Nginx, Apache",
        skillsGroupAuto: "Automation: Telegram bots, scripts",
        aboutText: "Я студент 2 курсу спеціальності 121 \"Інженерія програмного забезпечення\" у Житомирській політехніці.\nВивчаю backend, роботу з базами даних, Linux-середовище й автоматизацію.",
        contactHeader: "=== КОНТАКТИ ===",
        contactEmail: "Email: ran31276@gmail.com",
        contactTelegram: "Telegram: https://t.me/Denis_Zagor",
        contactLinkedIn: "LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410",
        githubHeader: "=== GITHUB ===",
        githubProfile: "GitHub: https://github.com/ZaGOR-1",
        githubFocus: "Focus: learning projects, bots, scripts, server notes",
        unknown: "Команда не знайдена: {cmd}. Введіть 'help' для довідки."
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
        name: "Denys Zahorovskyi",
        shortName: "Denys"
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
        terminalTabs: "Terminal block switcher",
        terminalInput: "Terminal command input",
        interests: "Areas of interest",
        quickProfile: "Quick profile",
        learningNow: "What I am learning and practicing now",
        focusGrid: "Current growth directions",
        skills: "Skills by category",
        githubList: "What you can find on GitHub",
        githubSnapshot: "GitHub technical snapshot",
        availabilityStatus: "Availability and collaboration format",
        copyEmail: "Copy email",
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
        code: '<span class="code-keyword">const</span> <span class="code-def">developer</span> = {\n  name: <span class="code-string">"Denys Zahorovskyi"</span>,\n  role: <span class="code-string">"Software Engineering Student"</span>,\n  focus: [<span class="code-string">"Backend"</span>, <span class="code-string">"Web"</span>, <span class="code-string">"Linux"</span>, <span class="code-string">"Automation"</span>],\n  learning: [<span class="code-string">"Laravel"</span>, <span class="code-string">"Symfony"</span>, <span class="code-string">"VPS Deploy"</span>]\n};'
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
        learningTitle: "Currently learning / practicing",
        learningLaravel: "Laravel basics",
        learningLinux: "Linux deploy",
        learningBots: "Telegram bots",
        learningSql: "SQL practice",
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
        backendText: "PHP, Laravel, Symfony, Python, C, C#",
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
        snapshotProfileLabel: "profile",
        snapshotContentLabel: "content",
        snapshotContentValue: "learning projects · bots · scripts · server notes",
        snapshotFocusLabel: "last focus",
        snapshotFocusValue: "web/backend/linux",
        button: "Go to GitHub"
      },
      contact: {
        number: "05 / Contact",
        title: "Contact / Links",
        status: "status: learning / open to practice",
        text: "I am open to learning projects, practice, internships or small collaboration where I can work with real tasks and grow as a developer.",
        openToLabel: "open to",
        openToValue: "practice / internship / learning projects",
        locationLabel: "location",
        locationValue: "Ukraine",
        formatLabel: "format",
        formatValue: "remote / part-time learning collaboration",
        copyEmail: "copy",
        copiedEmail: "copied",
        copyEmailError: "could not copy",
        button: "Write to me"
      },
      footer: {
        note: "built with html/css/js · hosted on vps"
      },
      cli: {
        help: "Available commands:\n  neofetch  - system information\n  skills    - list of my skills\n  about     - information about me\n  contact   - contact links\n  github    - GitHub and repository focus\n  clear     - clear terminal\n  help      - show this help message",
        welcome: "Type 'help' to see available commands.",
        skillsHeader: "=== MY SKILLS ===",
        skillsGroupFrontend: "Frontend: HTML, CSS, JavaScript",
        skillsGroupBackend: "Backend: PHP, Laravel, Symfony, Python, C, C#",
        skillsGroupDB: "Databases: MySQL, SQLite",
        skillsGroupTools: "Tools: Git, GitHub, Linux, Ubuntu, VPS, Nginx, Apache",
        skillsGroupAuto: "Automation: Telegram bots, scripts",
        aboutText: "I am a 2nd year Software Engineering student at Zhytomyr Polytechnic.\nLearning backend, databases, Linux environments and automation.",
        contactHeader: "=== CONTACT ===",
        contactEmail: "Email: ran31276@gmail.com",
        contactTelegram: "Telegram: https://t.me/Denis_Zagor",
        contactLinkedIn: "LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410",
        githubHeader: "=== GITHUB ===",
        githubProfile: "GitHub: https://github.com/ZaGOR-1",
        githubFocus: "Focus: learning projects, bots, scripts, server notes",
        unknown: "Command not found: {cmd}. Type 'help' for help."
      }
    }
  };

  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const languageButtons = document.querySelectorAll("[data-language]");
  const copyEmailButton = document.querySelector("[data-copy-email]");
  const copyEmailStatus = document.querySelector(".copy-email-status");
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
  let copyEmailTimer;

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
        if (element.tagName === "CODE" || element.classList.contains("html-content")) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
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

  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.insetBlockStart = "-999px";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();

    let didCopy = false;
    try {
      didCopy = document.execCommand("copy");
    } catch (error) {
      didCopy = false;
    }

    textArea.remove();
    return didCopy;
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    return fallbackCopyText(text);
  }

  function updateCopyEmailFeedback(key) {
    const message = getValue(key, activeLanguage) || "";
    if (copyEmailButton) {
      copyEmailButton.textContent = message;
    }
    if (copyEmailStatus) {
      copyEmailStatus.textContent = message;
    }

    clearTimeout(copyEmailTimer);
    copyEmailTimer = window.setTimeout(function () {
      const resetLabel = getValue("contact.copyEmail", activeLanguage) || "";
      if (copyEmailButton) {
        copyEmailButton.textContent = resetLabel;
      }
      if (copyEmailStatus) {
        copyEmailStatus.textContent = "";
      }
    }, 2200);
  }

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async function () {
      const email = copyEmailButton.dataset.copyEmail;
      if (!email) return;

      try {
        const didCopy = await copyText(email);
        updateCopyEmailFeedback(didCopy ? "contact.copiedEmail" : "contact.copyEmailError");
      } catch (error) {
        updateCopyEmailFeedback("contact.copyEmailError");
      }
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

  // Dynamic Uptime and Clock
  const startTime = Date.now();
  const statusClock = document.getElementById("status-clock");
  const statusCenter = document.querySelector(".status-center");

  function updateClock() {
    if (!statusClock) return;
    const now = new Date();
    const pad = (num) => String(num).padStart(2, "0");
    statusClock.textContent = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
  }

  function getUptimeString() {
    const elapsedMs = Date.now() - startTime;
    const totalSecs = Math.floor(elapsedMs / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    
    let parts = [];
    if (hours > 0) parts.push(hours + "h");
    if (minutes > 0 || hours > 0) parts.push(minutes + "m");
    parts.push(seconds + "s");
    return parts.join(" ");
  }

  // CLI Engine
  const cliOutput = document.querySelector(".cli-output");
  const cliInput = document.querySelector(".cli-input");
  const terminalCli = document.getElementById("terminal-sh");

  const commandHistory = [];
  let historyIndex = 0;
  let temporaryInput = "";
  const availableCommands = ["help", "neofetch", "skills", "contact", "github", "clear", "about"];

  function appendCliLine(html, isCommand = false) {
    if (!cliOutput) return;
    const div = document.createElement("div");
    if (isCommand) {
      div.className = "cli-prompt-line";
      div.innerHTML = `<span class="cli-prompt">visitor@zagor-vps:~$</span> ${html}`;
    } else {
      div.className = "cli-output-line";
      div.innerHTML = html;
    }
    cliOutput.appendChild(div);
    
    // Auto scroll to bottom
    const parent = cliOutput.closest(".terminal-code") || cliOutput.closest(".terminal-cli");
    if (parent) {
      parent.scrollTop = parent.scrollHeight;
    }
  }

  if (cliInput) {
    // Show welcome message
    setTimeout(() => {
      const welcome = getValue("cli.welcome", activeLanguage);
      appendCliLine(`<span class="code-comment" data-i18n="cli.welcome">${escapeHtml(welcome)}</span>`);
    }, 100);

    cliInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const command = cliInput.value.trim();
        cliInput.value = "";
        if (!command) {
          appendCliLine("", true);
          return;
        }

        // Echo command
        appendCliLine(escapeHtml(command), true);

        // Add to history
        if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command) {
          commandHistory.push(command);
        }
        historyIndex = commandHistory.length;
        temporaryInput = "";

        const parts = command.toLowerCase().split(" ");
        const cmd = parts[0];

        if (cmd === "clear") {
          cliOutput.innerHTML = "";
        } else if (cmd === "help") {
          const helpText = getValue("cli.help", activeLanguage);
          appendCliLine(escapeHtml(helpText).replace(/\n/g, "<br>"));
        } else if (cmd === "about") {
          const aboutText = getValue("cli.aboutText", activeLanguage);
          appendCliLine(escapeHtml(aboutText).replace(/\n/g, "<br>"));
        } else if (cmd === "skills") {
          const header = getValue("cli.skillsHeader", activeLanguage);
          const frontend = getValue("cli.skillsGroupFrontend", activeLanguage);
          const backend = getValue("cli.skillsGroupBackend", activeLanguage);
          const db = getValue("cli.skillsGroupDB", activeLanguage);
          const tools = getValue("cli.skillsGroupTools", activeLanguage);
          const auto = getValue("cli.skillsGroupAuto", activeLanguage);
          
          let out = `<span class="code-keyword">${escapeHtml(header)}</span><br>` +
                    `  * ${escapeHtml(frontend)}<br>` +
                    `  * ${escapeHtml(backend)}<br>` +
                    `  * ${escapeHtml(db)}<br>` +
                    `  * ${escapeHtml(tools)}<br>` +
                    `  * ${escapeHtml(auto)}`;
          appendCliLine(out);
        } else if (cmd === "contact") {
          const header = getValue("cli.contactHeader", activeLanguage);
          const email = getValue("cli.contactEmail", activeLanguage);
          const telegram = getValue("cli.contactTelegram", activeLanguage);
          const linkedIn = getValue("cli.contactLinkedIn", activeLanguage);

          const out = `<span class="code-keyword">${escapeHtml(header)}</span><br>` +
                      `  * ${formatCliLink(email, "mailto:ran31276@gmail.com")}<br>` +
                      `  * ${formatCliLink(telegram, "https://t.me/Denis_Zagor")}<br>` +
                      `  * ${formatCliLink(linkedIn, "https://www.linkedin.com/in/denis-zagorovskiy-a23b05410")}`;
          appendCliLine(out);
        } else if (cmd === "github") {
          const header = getValue("cli.githubHeader", activeLanguage);
          const profile = getValue("cli.githubProfile", activeLanguage);
          const focus = getValue("cli.githubFocus", activeLanguage);

          const out = `<span class="code-keyword">${escapeHtml(header)}</span><br>` +
                      `  * ${formatCliLink(profile, "https://github.com/ZaGOR-1")}<br>` +
                      `  * ${escapeHtml(focus)}`;
          appendCliLine(out);
        } else if (cmd === "neofetch") {
          const uptime = getUptimeString();
          const status = getValue("hero.status", activeLanguage);
          
          const ascii = 
            `   <span class="code-keyword">_____</span> <span class="code-def">_____</span>  <span class="code-string">_   _</span>    visitor@zagor-vps<br>` +
            `  <span class="code-keyword">|__  /</span><span class="code-def">|  __ \\</span><span class="code-string">| | | |</span>   -----------------<br>` +
            `    <span class="code-keyword">/ /</span> <span class="code-def">| |__) |</span><span class="code-string">| | | |</span>   OS: Ubuntu 24.04 LTS<br>` +
            `   <span class="code-keyword">/ /_</span> <span class="code-def">|  ___/</span><span class="code-string">| |_| |</span>   Host: KVM VPS (1 CPU / 1GB)<br>` +
            `  <span class="code-keyword">/____|</span><span class="code-def">|_|</span>     <span class="code-string">\\___/</span>    Kernel: Linux 6.8.0-generic<br>` +
            `                         Uptime: ${uptime}<br>` +
            `                         Shell: bash (custom js-sandbox)<br>` +
            `                         Status: ${status}`;
          appendCliLine(ascii);
        } else {
          const errorText = getValue("cli.unknown", activeLanguage).replace("{cmd}", `<strong>${escapeHtml(command)}</strong>`);
          appendCliLine(`<span class="code-error">${errorText}</span>`);
        }
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (commandHistory.length === 0) return;
        if (historyIndex === commandHistory.length) {
          temporaryInput = cliInput.value;
        }
        if (historyIndex > 0) {
          historyIndex--;
          cliInput.value = commandHistory[historyIndex];
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (commandHistory.length === 0) return;
        if (historyIndex < commandHistory.length) {
          historyIndex++;
          if (historyIndex === commandHistory.length) {
            cliInput.value = temporaryInput;
          } else {
            cliInput.value = commandHistory[historyIndex];
          }
        }
      } else if (event.key === "Tab") {
        event.preventDefault();
        const currentInput = cliInput.value.trim().toLowerCase();
        if (!currentInput) return;

        const matches = availableCommands.filter(function (cmd) {
          return cmd.startsWith(currentInput);
        });

        if (matches.length === 1) {
          cliInput.value = matches[0];
        }
      }
    });


    // Keep focus when clicking inside terminal CLI area
    if (terminalCli) {
      terminalCli.addEventListener("click", function () {
        cliInput.focus();
      });
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function formatCliLink(label, href) {
    return `<a class="cli-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
  }

  // Tab switching
  const tabs = document.querySelectorAll(".terminal-tab");
  const panelJson = document.getElementById("terminal-json");
  const panelSh = document.getElementById("terminal-sh");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(t => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const target = tab.dataset.tab;
      if (target === "json") {
        if (panelJson) panelJson.hidden = false;
        if (panelSh) panelSh.hidden = true;
        if (statusCenter) statusCenter.textContent = "profile.json [UTF-8]";
      } else {
        if (panelJson) panelJson.hidden = true;
        if (panelSh) panelSh.hidden = false;
        if (statusCenter) statusCenter.textContent = "terminal.sh [BASH]";
        if (cliInput) setTimeout(() => cliInput.focus(), 50);
      }

      tabs.forEach(function (button) {
        button.setAttribute("aria-selected", String(button === tab));
      });
    });
  });

  function observeActiveNav() {
    const navSections = navLinks
      .map(function (link) {
        const href = link.getAttribute("href");
        return href ? document.querySelector(href) : null;
      })
      .filter(Boolean);

    if (!navSections.length) return;

    if (!("IntersectionObserver" in window)) {
      setActiveNavLink(window.location.hash && isNavHash(window.location.hash) ? window.location.hash : "");
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

  // Clock tick
  setInterval(updateClock, 1000);
  updateClock();

  // Scroll progress indicator
  var scrollBar = document.querySelector(".scroll-progress");
  if (scrollBar) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrollTop = window.scrollY || document.documentElement.scrollTop;
          var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          scrollBar.style.width = progress + "%";
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  observeActiveNav();
  revealSections();

  // Register Service Worker for offline access
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").then(
        function (registration) {
          console.log("ServiceWorker registration successful with scope: ", registration.scope);
        },
        function (error) {
          console.log("ServiceWorker registration failed: ", error);
        }
      );
    });
  }
})();
