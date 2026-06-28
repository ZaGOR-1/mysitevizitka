/**
 * Residual Ukrainian dictionary.
 *
 * UA is sourced from the page markup (index.html) and captured from the DOM at
 * runtime by i18n.js. This file holds ONLY the UA strings that have no place in
 * the rendered DOM, so there is nothing to capture for them:
 *   - alternate button states (shown only after a toggle);
 *   - copy-email feedback (shown only after a click);
 *   - the whole terminal CLI output.
 *
 * Keep this list minimal — anything visible in the static HTML must NOT be
 * duplicated here.
 */
(function () {
  window.App = window.App || {};
  App.dict = App.dict || {};

  App.dict.uk = {
    theme: {
      darkLabel: "Увімкнути темну тему"
    },
    menu: {
      closeLabel: "Закрити меню"
    },
    contact: {
      copiedEmail: "скопійовано",
      copyEmailError: "не вдалося скопіювати"
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
      contactTelegram: "Telegram-бот: https://t.me/contactinbox_bot",
      contactLinkedIn: "LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410",
      githubHeader: "=== GITHUB ===",
      githubProfile: "GitHub: https://github.com/ZaGOR-1",
      githubFocus: "Focus: learning projects, bots, scripts, server notes",
      unknown: "Команда не знайдена: {cmd}. Введіть 'help' для довідки.",
      suggestions: "Можливі команди: {commands}"
    }
  };
})();
