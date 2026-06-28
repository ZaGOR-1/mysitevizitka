/**
 * English dictionary.
 *
 * EN is the only language stored in full here. The Ukrainian copy lives in the
 * page markup (index.html) and is captured from the DOM at runtime by i18n.js,
 * so UA text is maintained in exactly one place. See i18n.uk.js for the handful
 * of UA strings that have no DOM counterpart (CLI, alternate button labels).
 */
(function () {
  window.App = window.App || {};
  App.dict = App.dict || {};

  App.dict.en = {
    meta: {
      title: "Denys Zahorovskyi — Software Engineering Student, Web & Backend",
      description: "Denys Zahorovskyi is a Software Engineering student learning web development, backend, Linux, VPS deployment and automation.",
      ogTitle: "Denys Zahorovskyi — Software Engineering Student",
      ogDescription: "Software Engineering student focused on web development, backend, Linux, VPS deployment and automation.",
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
      answerSummary: "Short profile answers",
      quickProfile: "Quick profile",
      learningNow: "What I am learning and practicing now",
      focusGrid: "Current growth directions",
      skills: "Skills by category",
      githubList: "What you can find on GitHub",
      githubSnapshot: "GitHub technical snapshot",
      availabilityStatus: "Availability and collaboration format",
      copyEmail: "Copy email",
      githubProfile: "Denys Zahorovskyi GitHub profile",
      telegramProfile: "Telegram bot for contacting Denys Zahorovskyi",
      linkedinProfile: "Denys Zahorovskyi LinkedIn profile",
      socialLinks: "Social links and contact",
      projectCards: "Project cards"
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
      code: '<span class="code-keyword">const</span> <span class="code-def">developer</span> = {\n  <span class="code-key">name</span>: <span class="code-string">"Denys Zahorovskyi"</span>,\n  <span class="code-key">role</span>: <span class="code-string">"Software Engineering Student"</span>,\n  <span class="code-key">focus</span>: [<span class="code-string">"Backend"</span>, <span class="code-string">"Web"</span>, <span class="code-string">"Linux"</span>, <span class="code-string">"Automation"</span>],\n  <span class="code-key">learning</span>: [<span class="code-string">"Laravel"</span>, <span class="code-string">"Symfony"</span>, <span class="code-string">"VPS Deploy"</span>]\n};'
    },
    about: {
      number: "01 / About",
      title: "About me",
      p1: 'I am a 2nd year student of specialty 121 "Software Engineering" at Zhytomyr Polytechnic. I am growing in web development, learning backend fundamentals, databases, Linux environments and VPS deployment.',
      p2: "I am interested in practical things: servers, automation, Telegram bots, Windows optimization, Minecraft servers and small web applications that can be launched, tested and improved.",
      answerTitle: "Quick answers",
      answerWhoLabel: "Who am I?",
      answerWhoValue: "A Software Engineering student gradually growing in web development.",
      answerLearningLabel: "What am I learning?",
      answerLearningValue: "Backend, frontend basics, Linux, VPS deployment, SQL and automation.",
      answerHelpLabel: "What can I help with?",
      answerHelpValue: "Learning projects, simple web applications, Telegram bots and automation scripts.",
      answerContactLabel: "How to contact me?",
      answerContactValue: "By email or Telegram bot in the contact section.",
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
      practicingTitle: "Practicing",
      practicingText: "HTML, CSS, JavaScript, PHP, Linux",
      learningTitle: "Learning",
      learningText: "Laravel, Symfony, VPS deploy, SQL",
      familiarTitle: "Familiar with",
      familiarText: "Python, C, C#, Apache, MySQL, SQLite"
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
      snapshotFocusLabel: "latest focus",
      snapshotFocusValue: "backend / linux / automation",
      projectMovieType: "Telegram bot",
      projectMovieTitle: "Movie Finder Telegram Bot",
      projectMovieText: "A bot for finding movies by description or title with external API integration, caching, logs and admin commands.",
      projectTweakerType: "Windows utility",
      projectTweakerTitle: "Windows Tweaker",
      projectTweakerText: "An experimental Windows tool for system settings, optimization, registry changes, services and reversible tweaks.",
      projectPortfolioType: "Portfolio website",
      projectPortfolioTitle: "Personal Portfolio Website",
      projectPortfolioText: "A personal portfolio site with static HTML/CSS/JS architecture, bilingual UI, JSON-LD markup, sitemap and SEO optimization.",
      projectGalleryType: "PHP web app",
      projectGalleryTitle: "PHP Photo Gallery",
      projectGalleryText: "A learning photo gallery with albums, image uploads, EXIF data, database usage and basic admin logic.",
      projectBankType: "Backend CRUD",
      projectBankTitle: "Laravel / Symfony Bank CRUD",
      projectBankText: "A learning CRUD project for bank-related entities, API requests, MySQL, migrations and Postman collections.",
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
      contactTelegram: "Telegram bot: https://t.me/contactinbox_bot",
      contactLinkedIn: "LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410",
      githubHeader: "=== GITHUB ===",
      githubProfile: "GitHub: https://github.com/ZaGOR-1",
      githubFocus: "Focus: learning projects, bots, scripts, server notes",
      unknown: "Command not found: {cmd}. Type 'help' for help.",
      suggestions: "Possible commands: {commands}"
    }
  };
})();
