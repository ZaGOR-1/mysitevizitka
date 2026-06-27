/**
 * Terminal module: profile.json / terminal.sh tabs, status clock, and a tiny
 * shell-like CLI driven by a command registry.
 *
 * The registry is the single source of truth: autocomplete derives its list
 * from Object.keys(commands), so there is no separate list to keep in sync.
 */
(function () {
  window.App = window.App || {};

  function t(key) {
    return App.i18n.getValue(key, App.i18n.getActiveLanguage());
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatCliLink(label, href) {
    return '<a class="cli-link" href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(label) + "</a>";
  }

  function init() {
    const cliOutput = document.querySelector(".cli-output");
    const cliInput = document.querySelector(".cli-input");
    const terminalCli = document.getElementById("terminal-sh");

    // Status bar clock + uptime.
    const startTime = Date.now();
    const statusClock = document.getElementById("status-clock");
    const statusCenter = document.querySelector(".status-center");

    function updateClock() {
      if (!statusClock) return;
      const now = new Date();
      const pad = function (num) { return String(num).padStart(2, "0"); };
      statusClock.textContent = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
    }

    function getUptimeString() {
      const totalSecs = Math.floor((Date.now() - startTime) / 1000);
      const hours = Math.floor(totalSecs / 3600);
      const minutes = Math.floor((totalSecs % 3600) / 60);
      const seconds = totalSecs % 60;

      const parts = [];
      if (hours > 0) parts.push(hours + "h");
      if (minutes > 0 || hours > 0) parts.push(minutes + "m");
      parts.push(seconds + "s");
      return parts.join(" ");
    }

    setInterval(updateClock, 1000);
    updateClock();

    // ---- CLI output -------------------------------------------------------
    function appendCliLine(html, isCommand) {
      if (!cliOutput) return;
      const div = document.createElement("div");
      if (isCommand) {
        div.className = "cli-prompt-line";
        div.innerHTML = '<span class="cli-prompt">visitor@zagor-vps:~$</span> ' + html;
      } else {
        div.className = "cli-output-line";
        div.innerHTML = html;
      }
      cliOutput.appendChild(div);

      const parent = cliOutput.closest(".terminal-code") || cliOutput.closest(".terminal-cli");
      if (parent) {
        parent.scrollTop = parent.scrollHeight;
      }
    }

    function printCliWelcome() {
      if (!cliOutput) return;
      appendCliLine('<span class="code-comment">' + escapeHtml(t("cli.welcome")) + "</span>");
    }

    // ---- command registry --------------------------------------------------
    const commands = {
      help: function () {
        let text = t("cli.help");
        let lines = text.split("\n").map(function (line) {
          let match = line.match(/^(\s{2})([a-z]+)(\s+-\s+.*)$/);
          if (match) {
            return match[1] + '<span class="code-keyword">' + escapeHtml(match[2]) + '</span>' + escapeHtml(match[3]);
          }
          return escapeHtml(line);
        });
        appendCliLine(lines.join("<br>"));
      },
      neofetch: function () {
        const uptime = getUptimeString();
        const status = t("hero.status");
        const palette = '<span style="color:#f472b6">██</span> ' +
                        '<span style="color:#60a5fa">██</span> ' +
                        '<span style="color:#34d399">██</span> ' +
                        '<span style="color:#7dd3c7">██</span> ' +
                        '<span style="color:#98a4b3">██</span>';
        const ascii =
          '   <span class="code-keyword">_____</span> <span class="code-def">_____</span>  <span class="code-string">_   _</span>    visitor@zagor-vps<br>' +
          '  <span class="code-keyword">|__  /</span><span class="code-def">|  __ \\</span><span class="code-string">| | | |</span>   -----------------<br>' +
          '    <span class="code-keyword">/ /</span> <span class="code-def">| |__) |</span><span class="code-string">| | | |</span>   OS: Ubuntu 24.04 LTS<br>' +
          '   <span class="code-keyword">/ /_</span> <span class="code-def">|  ___/</span><span class="code-string">| |_| |</span>   Host: KVM VPS (1 CPU / 1GB)<br>' +
          '  <span class="code-keyword">/____|</span><span class="code-def">|_|</span>     <span class="code-string">\\___/</span>    Kernel: Linux 6.8.0-generic<br>' +
          "                         Uptime: " + uptime + "<br>" +
          "                         Shell: bash (custom js-sandbox)<br>" +
          "                         Status: " + escapeHtml(status) + "<br>" +
          "                         Palette: " + palette;
        appendCliLine(ascii);
      },
      skills: function () {
        const out =
          '<span class="code-keyword">' + escapeHtml(t("cli.skillsHeader")) + "</span><br>" +
          "  * " + escapeHtml(t("cli.skillsGroupFrontend")) + "<br>" +
          "  * " + escapeHtml(t("cli.skillsGroupBackend")) + "<br>" +
          "  * " + escapeHtml(t("cli.skillsGroupDB")) + "<br>" +
          "  * " + escapeHtml(t("cli.skillsGroupTools")) + "<br>" +
          "  * " + escapeHtml(t("cli.skillsGroupAuto"));
        appendCliLine(out);
      },
      about: function () {
        appendCliLine(escapeHtml(t("cli.aboutText")).replace(/\n/g, "<br>"));
      },
      contact: function () {
        const out =
          '<span class="code-keyword">' + escapeHtml(t("cli.contactHeader")) + "</span><br>" +
          "  * " + formatCliLink(t("cli.contactEmail"), "mailto:ran31276@gmail.com") + "<br>" +
          "  * " + formatCliLink(t("cli.contactTelegram"), "https://t.me/Denis_Zagor") + "<br>" +
          "  * " + formatCliLink(t("cli.contactLinkedIn"), "https://www.linkedin.com/in/denis-zagorovskiy-a23b05410");
        appendCliLine(out);
      },
      github: function () {
        const out =
          '<span class="code-keyword">' + escapeHtml(t("cli.githubHeader")) + "</span><br>" +
          "  * " + formatCliLink(t("cli.githubProfile"), "https://github.com/ZaGOR-1") + "<br>" +
          "  * " + escapeHtml(t("cli.githubFocus"));
        appendCliLine(out);
      },
      clear: function () {
        if (cliOutput) cliOutput.innerHTML = "";
      }
    };

    const availableCommands = Object.keys(commands);

    function runCommand(rawCommand) {
      const cmd = rawCommand.toLowerCase().split(" ")[0];
      const handler = commands[cmd];
      if (handler) {
        handler();
      } else {
        const errorText = t("cli.unknown").replace("{cmd}", "<strong>" + escapeHtml(rawCommand) + "</strong>");
        appendCliLine('<span class="code-error">' + errorText + "</span>");
      }
    }

    // ---- input handling ----------------------------------------------------
    const commandHistory = [];
    let historyIndex = 0;
    let temporaryInput = "";

    if (cliInput) {
      cliInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          const command = cliInput.value.trim();
          cliInput.value = "";
          if (!command) {
            appendCliLine("", true);
            return;
          }

          appendCliLine(escapeHtml(command), true);

          if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command) {
            commandHistory.push(command);
          }
          historyIndex = commandHistory.length;
          temporaryInput = "";

          runCommand(command);
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
            cliInput.value = historyIndex === commandHistory.length ? temporaryInput : commandHistory[historyIndex];
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
          } else if (matches.length > 1) {
            const template = t("cli.suggestions") || "Possible commands: {commands}";
            appendCliLine(escapeHtml(template.replace("{commands}", matches.join("   "))));
          }
        }
      });

      // Keep focus when clicking inside the terminal CLI area.
      if (terminalCli) {
        terminalCli.addEventListener("click", function () {
          cliInput.focus();
        });
      }
    }

    // ---- tab switching (profile.json / terminal.sh) ------------------------
    const tabs = document.querySelectorAll(".terminal-tab");
    const panelJson = document.getElementById("terminal-json");
    const panelSh = document.getElementById("terminal-sh");

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("is-active"); });
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
          if (cliInput) setTimeout(function () { cliInput.focus(); }, 50);
        }

        tabs.forEach(function (button) {
          const isActive = button === tab;
          button.setAttribute("aria-selected", String(isActive));
          button.setAttribute("tabindex", isActive ? "0" : "-1");
        });
      });

      // WAI-ARIA tab pattern: arrow / Home / End move between tabs.
      tab.addEventListener("keydown", function (event) {
        let nextIndex = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex === null) return;
        event.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      });
    });

    // Reprint the terminal in the active language instead of mixing locales.
    document.addEventListener("app:languagechange", function () {
      if (!cliOutput) return;
      cliOutput.innerHTML = "";
      printCliWelcome();
    });
  }

  App.cli = { init: init };
})();
