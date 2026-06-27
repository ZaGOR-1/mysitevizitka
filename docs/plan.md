> Архівний документ.
>
> Це початковий пофазовий план і журнал реалізації. Він залишений для історії, але не є поточною специфікацією сайту. Поточний стан структури, запуску, деплою, локалізації, service worker і roadmap описані в `README.md`, `AGENTS.md`, `docs/checklist.md` і `docs/improvement-roadmap.md`.

# План реалізації проєкту: статичний сайт-візитка програміста

## 0. Мета проєкту

Створити легкий, повністю статичний односторінковий сайт-візитку / міні-портфоліо програміста на чистих HTML5, CSS3 і Vanilla JavaScript без npm-залежностей, фреймворків і важких бібліотек.

Основний стиль: **Editorial Tech Portfolio + Terminal accents**.

Сайт має виглядати мінімалістично, сучасно, технічно й професійно, без типового AI-generated landing page вигляду, без агресивного неону, зайвих анімацій і шаблонної секції з картками проєктів.

---

## 1. Очікувана структура файлів

Після реалізації проєкт має мати таку структуру:

```text
portfolio/
├── index.html
├── styles.css
├── assets/
│   ├── js/
│   │   └── *.js
│   └── README.md
└── README.md
```

У поточному репозиторії ці файли можна створити без вкладеної папки `portfolio`, якщо сам репозиторій уже є коренем сайту.

---

## 2. Фаза 1: Уточнення контенту та змінних даних

### Ціль

Підготувати весь персональний контент, який буде вставлений у сайт, і відокремити реальні дані від плейсхолдерів.

### Завдання

1. Визначити основні персональні дані:
   - ім'я: `Denis` або повне ім'я, якщо потрібно;
   - роль: `Software Engineering Student`;
   - короткий опис: студент 2 курсу спеціальності 121 "Інженерія програмного забезпечення";
   - позиціонування: початківець backend/frontend developer.

2. Підготувати плейсхолдери для посилань:
   - GitHub: `https://github.com/ZaGOR-1`;
   - Telegram: `https://t.me/Denis_Zagor`;
   - LinkedIn: `https://www.linkedin.com/in/denis-zagorovskiy-a23b05410`;
   - Email: `mailto:ran31276@gmail.com`.

3. Підготувати короткий текст для секції About:
   - хто я;
   - що вивчаю;
   - чим цікавлюся;
   - без шаблонних фраз на кшталт "passionate developer creating amazing experiences".

4. Підготувати список навичок:
   - HTML;
   - CSS;
   - JavaScript;
   - PHP;
   - Laravel;
   - Symfony;
   - Python;
   - MySQL;
   - SQLite;
   - Git;
   - GitHub;
   - Linux;
   - Ubuntu;
   - VPS;
   - Nginx / Apache;
   - Telegram bots.

### Результат фази

Є готовий набір текстів, посилань і технологій, який можна вставляти в `index.html`.

### Критерії готовності

- Контент звучить природно українською.
- У текстах немає перебільшено рекламних або шаблонних формулювань.
- Усі посилання легко знайти й замінити вручну.

### Статус фази

**Виконано.** Нижче зафіксовано контент і змінні дані, які потрібно використовувати під час реалізації HTML.

### Підготовлений контент для сайту

#### Основні персональні дані

```text
Ім'я: Denis
Роль: Software Engineering Student
Напрям: початківець backend/frontend developer
Освіта: студент 2 курсу спеціальності 121 "Інженерія програмного забезпечення" у Житомирській політехніці
Статус: available for learning projects
```

#### Hero

Основний заголовок:

```text
Denis
```

Короткий опис:

```text
Студент Software Engineering, який вивчає веброзробку, backend, Linux і автоматизацію.
```

Слоган:

```text
Пишу простий код, розбираюся в серверах і поступово збираю власний шлях у розробці.
```

CTA-кнопки:

```text
GitHub
Зв'язатися
```

Terminal/code-блок:

```js
const developer = {
  name: "Denis",
  role: "Software Engineering Student",
  focus: ["Web", "Backend", "Linux", "Automation"]
};
```

#### About / Про мене

Готовий текст:

```text
Я студент 2 курсу спеціальності 121 "Інженерія програмного забезпечення" у Житомирській політехніці. Зараз розвиваюся у веброзробці, вивчаю backend-підхід, роботу з базами даних, Linux-середовищем і розгортанням сайтів на VPS.

Мені цікаві практичні речі: сервери, автоматизація, Telegram-боти, оптимізація Windows, Minecraft-сервери й невеликі вебзастосунки, які можна реально запустити, перевірити й покращувати.
```

Короткі technical labels:

```text
frontend
backend
linux
automation
vps
telegram bots
```

#### Skills / Навички

Повний список навичок для відображення:

```text
HTML
CSS
JavaScript
PHP
Laravel
Symfony
Python
MySQL
SQLite
Git
GitHub
Linux
Ubuntu
VPS
Nginx / Apache
Telegram bots
```

Варіант для command/tag бейджів:

```text
#html
#css
#javascript
#php
#laravel
#symfony
#python
#mysql
#sqlite
#git
#github
#linux
#ubuntu
#vps
#nginx
#apache
#telegram-bots
```

#### GitHub / Мої роботи

Готовий текст:

```text
Навчальні, особисті та експериментальні проєкти я збираю на GitHub. Там можна знайти вебзастосунки, невеликі backend-експерименти, Telegram-боти, автоматизацію та інші речі, які я поступово доробляю й покращую.
```

CTA:

```text
Перейти на GitHub
```

Плейсхолдер посилання:

```text
https://github.com/ZaGOR-1
```

#### Social Links / Соцмережі

Плейсхолдери:

```text
GitHub:   https://github.com/ZaGOR-1
Telegram: https://t.me/Denis_Zagor
LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410
Email:    ran31276@gmail.com
```

#### Contact / Контакти

Готовий текст:

```text
Відкритий до навчальних проєктів, практики, стажування або невеликої співпраці, де можна попрацювати з реальними задачами й вирости як розробник.
```

Email-плейсхолдер:

```text
ran31276@gmail.com
```

CTA:

```text
Написати мені
```

Mailto:

```text
mailto:ran31276@gmail.com
```

#### Footer

Текст:

```text
© 2026 Denis
built with html/css/js · hosted on vps
```

Рік у фінальній реалізації бажано підставляти через JavaScript, щоб footer не потрібно було оновлювати вручну.

#### SEO та Open Graph чернетка

Title:

```text
Denis — Software Engineering Student
```

Meta description:

```text
Персональний сайт-візитка Denis: студент Software Engineering, початківець backend/frontend developer, який вивчає веброзробку, Linux, сервери й автоматизацію.
```

Open Graph title:

```text
Denis — Software Engineering Student
```

Open Graph description:

```text
Мінімалістичне портфоліо студента Software Engineering з фокусом на Web, Backend, Linux і Automation.
```

#### Дані, які користувач зможе легко замінити

```text
Ім'я: Denis
GitHub акаунт: ZaGOR-1
Telegram акаунт: Denis_Zagor
LinkedIn profile: denis-zagorovskiy-a23b05410
Email: ran31276@gmail.com
Домен для деплою: about.me.hotzagor.tech
```

### Перевірка Фази 1

- [x] Підготовлено ім'я, роль, напрям і статус.
- [x] Підготовлено hero-тексти.
- [x] Підготовлено About без шаблонного AI-копірайтингу.
- [x] Підготовлено список навичок.
- [x] Підготовлено command/tag варіант навичок.
- [x] Підготовлено GitHub-блок без окремих карток проєктів.
- [x] Підготовлено плейсхолдери соцмереж.
- [x] Підготовлено contact-текст.
- [x] Підготовлено footer-текст.
- [x] Підготовлено SEO/Open Graph чернетку.

---

## 3. Фаза 2: Проєктування структури сторінки

### Ціль

Спроєктувати логіку односторінкового сайту так, щоб він не виглядав як типовий шаблон "hero -> cards -> footer".

### Основні секції

1. `Header / Navigation`
   - логотип або текстовий знак;
   - мінімалістична навігація;
   - перемикач теми;
   - mobile menu для малих екранів.

2. `Hero`
   - ім'я;
   - роль;
   - короткий опис;
   - слоган у стилі програміста;
   - кнопки `GitHub` і `Зв'язатися`;
   - статус `available for learning projects`;
   - компактний terminal/code-блок.

3. `01 / About`
   - короткий живий текст про себе;
   - інтереси: веброзробка, backend, Linux, сервери, автоматизація, Telegram-боти, оптимізація Windows, Minecraft-сервери.

4. `02 / Skills`
   - список технологій у вигляді мінімалістичних command/tag бейджів;
   - бажаний стиль бейджів: `#php`, `#linux`, `#backend`, `#automation`.

5. `03 / GitHub`
   - головний call-to-action;
   - короткий опис GitHub як місця для навчальних, особистих і експериментальних проєктів;
   - велика акуратна кнопка `Перейти на GitHub`;
   - без окремих карток проєктів.

6. `Social Links`
   - GitHub;
   - Telegram;
   - LinkedIn;
   - Email.

7. `04 / Contact`
   - короткий текст про відкритість до навчальних проєктів, практики, стажування або співпраці;
   - email;
   - кнопка `Написати мені`.

8. `Footer`
   - copyright;
   - поточний рік;
   - ім'я;
   - текст `built with html/css/js · hosted on vps`.

### Композиційний підхід

1. Використати компактний hero як профіль розробника.
2. Додати numbering секцій: `01 / About`, `02 / Skills`, `03 / GitHub`, `04 / Contact`.
3. Розділити секції тонкими border-лініями.
4. Побудувати desktop layout на легкій сітці з асиметрією.
5. На мобільних екранах зробити просту вертикальну структуру.
6. GitHub-блок зробити найпомітнішим CTA, але без агресивного рекламного вигляду.

### Результат фази

Є чітка структура `index.html` і зрозумілий порядок секцій.

### Критерії готовності

- Є всі обов'язкові секції.
- Немає окремої секції з картками проєктів.
- GitHub є головним місцем для робіт.
- Сайт читається як персональна сторінка розробника, а не як рекламний landing page.

### Статус фази

**Виконано.** Нижче зафіксовано структуру сторінки, навігацію, композицію та майбутню DOM-логіку для `index.html`.

### Затверджена інформаційна архітектура

Сторінка будується як один документ із чіткою вертикальною логікою:

```text
Skip link
Header / Navigation
Main
  Hero
  01 / About
  02 / Skills
  03 / GitHub
  Social Links
  04 / Contact
Footer
```

Секція `Social Links` залишається окремим компактним блоком між GitHub і Contact, але не отримує власний номер, щоб не розмивати основну систему `01-04`.

### Anchor id та навігація

Основні id для секцій:

```text
#home
#about
#skills
#github
#contact
```

Навігаційні посилання в header:

```text
Про мене -> #about
Навички  -> #skills
GitHub   -> #github
Контакти -> #contact
```

Кнопки в hero:

```text
GitHub      -> #github або зовнішній GitHub URL
Зв'язатися -> #contact
```

У фінальній реалізації головну hero-кнопку краще вести на зовнішній GitHub URL, а другу кнопку залишити внутрішнім переходом до Contact. У GitHub-секції має бути окрема велика кнопка `Перейти на GitHub`.

### DOM-карта майбутнього `index.html`

Орієнтовна HTML-структура:

```html
<body>
  <a class="skip-link" href="#main">Перейти до контенту</a>

  <header class="site-header">
    <div class="container header-layout">
      <a class="brand" href="#home" aria-label="На початок сторінки">Denis</a>

      <nav class="site-nav" aria-label="Основна навігація">
        <a href="#about">Про мене</a>
        <a href="#skills">Навички</a>
        <a href="#github">GitHub</a>
        <a href="#contact">Контакти</a>
      </nav>

      <button class="theme-toggle" type="button" aria-label="Увімкнути світлу тему"></button>
      <button class="menu-toggle" type="button" aria-label="Відкрити меню" aria-expanded="false"></button>
    </div>
  </header>

  <main id="main">
    <section id="home" class="hero section">
      <div class="container hero-layout">
        <div class="hero-content"></div>
        <aside class="terminal-card" aria-label="Короткий профіль у форматі коду"></aside>
      </div>
    </section>

    <section id="about" class="section section-grid"></section>
    <section id="skills" class="section section-grid"></section>
    <section id="github" class="section github-section"></section>
    <section class="section social-section" aria-labelledby="social-title"></section>
    <section id="contact" class="section section-grid"></section>
  </main>

  <footer class="site-footer"></footer>

  <script src="assets/js/main.js"></script>
</body>
```

Це не фінальний HTML-код, а затверджена структурна схема для Фази 4.

### Header / Navigation

Структура:

- ліворуч текстовий бренд `Denis`;
- по центру або праворуч компактна навігація;
- поруч theme toggle;
- mobile menu button тільки для малих екранів.

Поведінка:

- header має залишатися легким і не забирати багато вертикального місця;
- навігація веде тільки до ключових секцій;
- на мобільному меню відкривається поверх потоку сторінки або як компактний dropdown;
- theme toggle завжди доступний.

### Hero

Композиція desktop:

```text
+-----------------------------------------------+
| Left: profile text        Right: terminal card |
| - status                  - code object        |
| - name                    - tiny labels        |
| - role/description                              |
| - GitHub / Contact CTA                         |
+-----------------------------------------------+
```

Композиція mobile:

```text
Hero text
CTA buttons
Terminal card
```

Обов'язкові елементи:

- status `available for learning projects`;
- `h1` з ім'ям `Denis`;
- короткий опис;
- слоган;
- кнопки `GitHub` і `Зв'язатися`;
- terminal-like блок з JavaScript-об'єктом.

### 01 / About

Композиція desktop:

```text
Left column:  01 / About
Right column: текст + technical labels
```

Композиція mobile:

```text
01 / About
текст
labels
```

Рішення:

- секція має бути текстовою, без карток;
- technical labels додаються як невеликі inline tags;
- текст має залишатися спокійним і персональним.

### 02 / Skills

Композиція:

```text
Section header
Responsive tag cloud / badges
```

Рішення:

- бейджі виглядають як command/tag елементи;
- використовувати список `ul`;
- не групувати навички у великі картки;
- hover робити через border/accent, без великих тіней.

### 03 / GitHub

Композиція desktop:

```text
+-----------------------------------------------+
| 03 / GitHub                                   |
| Text about works on GitHub                    |
| github.com/ZaGOR-1                           |
| [Перейти на GitHub]                           |
+-----------------------------------------------+
```

Рішення:

- це головний CTA-блок сторінки;
- він може мати трохи сильніший surface/border;
- не створювати картки окремих проєктів;
- текст прямо пояснює, що роботи лежать на GitHub.

### Social Links

Композиція:

```text
GitHub / Telegram / LinkedIn / Email
```

Рішення:

- компактний блок після GitHub;
- зовнішні посилання оформити як текстові link rows або маленькі action links;
- не робити цю секцію головнішою за GitHub CTA;
- додати `aria-labelledby="social-title"`.

### 04 / Contact

Композиція desktop:

```text
Left column:  04 / Contact
Right column: текст + email + кнопка
```

Композиція mobile:

```text
04 / Contact
текст
email
кнопка
```

Рішення:

- contact має завершувати основний сценарій сторінки;
- кнопка `Написати мені` веде на `mailto:ran31276@gmail.com`;
- email має бути видимим текстом, щоб його можна було скопіювати.

### Footer

Композиція:

```text
© [year] Denis
built with html/css/js · hosted on vps
```

Рішення:

- footer стриманий;
- border top;
- технічний підпис моноширинним шрифтом;
- рік у фінальній реалізації підставляється через JS.

### Desktop layout принцип

Для desktop використовується editorial-сітка:

```text
container max-width
├── section label / number column
└── content column
```

Рекомендоване співвідношення:

```text
section-grid: minmax(140px, 0.35fr) minmax(0, 1fr)
hero-grid:    minmax(0, 1.1fr) minmax(280px, 0.75fr)
```

Секції розділяються тонкими border-лініями, а не окремими великими картками.

### Mobile layout принцип

Для mobile:

- усі секції переходять в одну колонку;
- section number стоїть над заголовком або поруч із ним;
- навігація ховається в mobile menu;
- terminal block і skills не створюють горизонтальний scroll сторінки;
- CTA кнопки можуть переноситися в колонку, якщо бракує ширини.

### Класи для майбутньої реалізації

Базові класи:

```text
.container
.section
.section-grid
.section-kicker
.section-number
.section-title
.site-header
.header-layout
.site-nav
.brand
.theme-toggle
.menu-toggle
.hero
.hero-layout
.hero-content
.status-pill
.button
.button-primary
.button-secondary
.terminal-card
.terminal-header
.terminal-code
.tag-list
.tag
.github-panel
.social-section
.social-links
.contact-actions
.site-footer
.reveal
```

### Перевірка Фази 2

- [x] Визначено повний порядок секцій.
- [x] Визначено anchor id для навігації.
- [x] Визначено header/navigation структуру.
- [x] Визначено hero-композицію.
- [x] Визначено структуру About.
- [x] Визначено структуру Skills.
- [x] Визначено GitHub як головний CTA без карток проєктів.
- [x] Визначено Social Links як компактний блок.
- [x] Визначено Contact і Footer.
- [x] Визначено desktop і mobile layout принципи.
- [x] Підготовлено DOM-карту для Фази 4.

---

## 4. Фаза 3: Дизайн-система та CSS-змінні

### Ціль

Створити основу стилів через CSS variables, щоб сайт було легко редагувати вручну.

### CSS-змінні

У `:root` потрібно винести:

1. Кольори:
   - `--color-bg`;
   - `--color-surface`;
   - `--color-surface-soft`;
   - `--color-text`;
   - `--color-muted`;
   - `--color-accent`;
   - `--color-accent-soft`;
   - `--color-border`;
   - `--color-code`;
   - `--color-focus`.

2. Типографіку:
   - `--font-sans`;
   - `--font-mono`;
   - `--font-size-base`;
   - `--line-height-base`;
   - `--letter-spacing-label`.

3. Відступи:
   - `--space-xs`;
   - `--space-sm`;
   - `--space-md`;
   - `--space-lg`;
   - `--space-xl`;
   - `--space-2xl`.

4. Радіуси:
   - `--radius-sm`;
   - `--radius-md`;
   - `--radius-lg`.

5. Layout:
   - `--container-width`;
   - `--section-padding`;
   - `--header-height`.

### Темна тема

Темна тема має бути дефолтною:

- фон майже чорний, але не `#000`;
- surface темно-сірий / slate;
- текст м'який білий;
- muted text сірий;
- accent дозований: cold blue, muted violet або emerald;
- border напівпрозорий.

### Світла тема

Світла тема має бути окремо продумана:

- не проста інверсія кольорів;
- м'який світлий фон;
- достатній контраст;
- акуратні border-лінії;
- той самий accent color, але адаптований до світлого фону.

### Шрифти

Рекомендований підхід:

1. Без CDN, якщо дизайн виглядає якісно на системних шрифтах.
2. Основний sans-serif:
   - `Space Grotesk`, `Inter`, `Manrope`, або системний fallback.
3. Моноширинний:
   - `JetBrains Mono`, `IBM Plex Mono`, `Fira Code`, або системний fallback.
4. Використати максимум 2 font-family.
5. Використати максимум 2-3 font-weight.

### Результат фази

Є базова дизайн-система в `styles.css`, яка підтримує dark/light theme.

### Критерії готовності

- Усі ключові кольори й відступи винесені в CSS variables.
- Сайт не виглядає однотонним або перенасиченим одним кольором.
- Accent використовується дозовано.
- Тема перемикається через атрибут або клас на `html`.

### Статус фази

**Виконано.** Створено файл `styles.css` із базовою дизайн-системою, CSS-змінними, dark theme за замовчуванням і light theme через `html[data-theme="light"]`.

### Реалізовані рішення у `styles.css`

#### Темізація

Темна тема задана в `:root` і є дефолтною:

```css
:root {
  color-scheme: dark;
  --color-bg: #0d0f12;
  --color-surface: #151a20;
  --color-text: #f3f7fb;
  --color-muted: #98a4b3;
  --color-accent: #7dd3c7;
}
```

Світла тема реалізована через атрибут на `html`:

```css
html[data-theme="light"] {
  color-scheme: light;
  --color-bg: #f7f5ef;
  --color-surface: #ffffff;
  --color-text: #15181d;
  --color-muted: #5f6874;
  --color-accent: #08756e;
}
```

Це дає готову основу для майбутнього theme switcher у `assets/js/`.

#### Палітра

Затверджена палітра:

```text
Dark background: #0d0f12
Dark surface:    #151a20
Dark text:       #f3f7fb
Dark muted:      #98a4b3
Accent:          #7dd3c7

Light background: #f7f5ef
Light surface:    #ffffff
Light text:       #15181d
Light muted:      #5f6874
Light accent:     #08756e
```

Accent використовується точково: для numbered labels, focus states, hover states і майбутніх CTA.

#### Типографіка

Використано легкий підхід без CDN і без завантаження зовнішніх шрифтів:

```css
--font-sans: "Space Grotesk", "Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Якщо локально або в системі користувача є Space Grotesk / JetBrains Mono, браузер їх використає. Якщо ні, сайт працюватиме на системних fallback-шрифтах без зайвого мережевого запиту.

#### Spacing, radius і layout

Додано змінні:

```text
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl
--space-3xl

--radius-sm
--radius-md
--radius-lg

--container-width
--container-padding
--section-padding
--header-height
```

Також додано базові layout-класи:

```text
.container
.section
.section-grid
.section-kicker
.section-number
.section-title
.muted
.surface
```

#### Базові правила доступності

У `styles.css` додано:

- `box-sizing: border-box`;
- базову типографіку;
- `:focus-visible`;
- підтримку `prefers-reduced-motion`;
- `pre { overflow-x: auto; }` для майбутнього terminal/code block;
- responsive зміну `section-grid` на одну колонку для мобільних.

### Перевірка Фази 3

- [x] Створено `styles.css`.
- [x] Додано dark theme за замовчуванням.
- [x] Додано light theme через `html[data-theme="light"]`.
- [x] Кольори винесено в CSS variables.
- [x] Шрифти винесено в CSS variables.
- [x] Відступи винесено в CSS variables.
- [x] Radius і border винесено в CSS variables.
- [x] Layout-значення винесено в CSS variables.
- [x] Додано базові класи `.container`, `.section`, `.section-grid`.
- [x] Додано видимий `:focus-visible`.
- [x] Додано підтримку `prefers-reduced-motion`.
- [x] Не додано CDN, npm-залежності або CSS-фреймворки.

---

## 5. Фаза 4: Реалізація HTML-структури

### Ціль

Створити семантичний, SEO-friendly файл `index.html`.

### Завдання

1. Додати базову HTML5-структуру:
   - `<!doctype html>`;
   - `html lang="uk"`;
   - `head`;
   - `body`.

2. Додати SEO meta tags:
   - `title`;
   - `description`;
   - `viewport`;
   - `theme-color`;
   - `robots`;
   - `author`.

3. Додати Open Graph meta tags:
   - `og:title`;
   - `og:description`;
   - `og:type`;
   - `og:url`;
   - `og:image` або коректний плейсхолдер.

4. Додати favicon:
   - простий SVG favicon;
   - без важких зображень.

5. Побудувати header:
   - skip link;
   - текстовий бренд;
   - навігація по anchor links;
   - theme toggle з `aria-label`;
   - mobile menu button.

6. Побудувати main:
   - hero;
   - about;
   - skills;
   - github;
   - social links;
   - contact.

7. Побудувати footer:
   - рік;
   - ім'я;
   - технічний підпис.

8. Додати доступність:
   - логічні heading levels;
   - `aria-label` для кнопок і зовнішніх посилань;
   - `rel="noopener noreferrer"` для зовнішніх посилань;
   - зрозумілі link texts;
   - keyboard-friendly порядок фокусу.

### Результат фази

Файл `index.html` містить повну структуру сторінки без стилів, які прив'язані до JS-фреймворків.

### Критерії готовності

- HTML валідний і семантичний.
- Усі секції мають id для навігації.
- Усі обов'язкові блоки з промпту присутні.
- Немає залежностей від React, Vue, Angular, Bootstrap або Tailwind.

### Статус фази

**Виконано.** Створено `index.html` із повною семантичною структурою сторінки та `assets/favicon.svg` як легкий SVG favicon.

### Реалізовані рішення в `index.html`

#### Базова структура

Додано:

- `<!doctype html>`;
- `html lang="uk"`;
- `head` з SEO/Open Graph даними;
- `body`;
- skip link;
- header;
- `main id="main"`;
- footer;
- підключення `styles.css`;
- підключення майбутнього `assets/js/`.

#### SEO meta tags

Додано:

```text
title
description
viewport
theme-color
robots
author
```

#### Open Graph tags

Додано:

```text
og:title
og:description
og:type
og:url
og:image
og:locale
```

`og:image` поки вказує на плейсхолдер `https://about.me.hotzagor.tech/assets/og-image.png`, який можна буде замінити після створення реального OG-зображення або домену.

#### Header / Navigation

Реалізовано:

- текстовий бренд `Denis`;
- навігацію по `#about`, `#skills`, `#github`, `#contact`;
- theme toggle з `aria-label`;
- mobile menu button з `aria-controls` і `aria-expanded`;
- `nav aria-label="Основна навігація"`.

#### Main sections

Реалізовано всі основні секції:

```text
#home
#about
#skills
#github
Social Links
#contact
```

Секція `Social Links` залишена без власного номера в основній системі `01-04`, як було затверджено у Фазі 2.

#### Hero

Додано:

- status `available for learning projects`;
- єдиний `h1` з ім'ям `Denis`;
- короткий опис;
- слоган;
- кнопки `GitHub` і `Зв'язатися`;
- terminal/code block із JavaScript-об'єктом.

#### About

Додано:

- текст про навчання в Житомирській політехніці;
- згадку інтересів: веброзробка, backend, Linux, сервери, автоматизація, Telegram-боти, оптимізація Windows, Minecraft-сервери;
- technical labels.

#### Skills

Додано список навичок у форматі command/tag:

```text
#html
#css
#javascript
#php
#laravel
#symfony
#python
#mysql
#sqlite
#git
#github
#linux
#ubuntu
#vps
#nginx
#apache
#telegram-bots
```

#### GitHub

Додано GitHub-блок як головний CTA:

- текст про навчальні, особисті та експериментальні проєкти;
- плейсхолдер `github.com/ZaGOR-1`;
- кнопка `Перейти на GitHub`;
- немає окремих карток проєктів.

#### Social Links

Додано плейсхолдери:

```text
GitHub
Telegram
LinkedIn
Email
```

Зовнішні посилання мають `target="_blank"` і `rel="noopener noreferrer"`.

#### Contact

Додано:

- текст про відкритість до навчальних проєктів, практики, стажування або співпраці;
- видимий email-плейсхолдер;
- кнопку `Написати мені`.

#### Footer

Додано:

```text
© 2026 Denis
built with html/css/js · hosted on vps
```

Рік розміщено в `<span data-current-year>2026</span>`, щоб у Фазі 6 його можна було автоматично оновлювати через JavaScript.

#### Доступність

Додано:

- skip link;
- один `h1`;
- логічну heading hierarchy;
- `aria-label` для навігації, кнопок і важливих зовнішніх посилань;
- `aria-controls` та `aria-expanded` для mobile menu;
- `aria-labelledby` для секцій;
- видимий email для копіювання;
- зрозумілі link texts.

### Перевірка Фази 4

- [x] Створено `index.html`.
- [x] Створено `assets/favicon.svg`.
- [x] Додано HTML5-структуру.
- [x] Додано `html lang="uk"`.
- [x] Додано SEO meta tags.
- [x] Додано Open Graph tags.
- [x] Додано favicon.
- [x] Додано header/navigation.
- [x] Додано skip link.
- [x] Додано theme toggle.
- [x] Додано mobile menu button.
- [x] Додано hero.
- [x] Додано About.
- [x] Додано Skills.
- [x] Додано GitHub як головний CTA.
- [x] Додано Social Links.
- [x] Додано Contact.
- [x] Додано Footer.
- [x] Є тільки один `h1`.
- [x] Немає секції з окремими картками проєктів.
- [x] Немає React, Next.js, Vue, Angular, Bootstrap або Tailwind.

---

## 6. Фаза 5: Реалізація CSS і адаптивного дизайну

### Ціль

Створити повноцінний мінімалістичний дизайн у `styles.css`.

### Базові стилі

1. Reset / normalize мінімальними власними правилами.
2. Глобальні стилі:
   - `box-sizing: border-box`;
   - базова типографіка;
   - плавний scroll behavior;
   - нормальні стилі для посилань, кнопок, списків.

3. Layout:
   - `.container`;
   - `.section`;
   - `.section-header`;
   - `.section-number`;
   - `.section-title`.

4. Header:
   - sticky або static мінімалістичний header;
   - blur можна використовувати обережно;
   - видимі focus states.

5. Hero:
   - асиметрична сітка на desktop;
   - текстова частина;
   - status pill;
   - terminal/code block;
   - CTA кнопки.

6. About:
   - читабельний текст;
   - маленькі labels для напрямів інтересу.

7. Skills:
   - бейджі;
   - hover через border/accent;
   - без великих тіней.

8. GitHub:
   - візуально сильніший CTA-блок;
   - велика, але стримана кнопка;
   - місце для GitHub URL.

9. Social Links:
   - компактна сітка посилань;
   - hover/focus states.

10. Contact:
   - короткий текст;
   - email;
   - CTA button.

11. Footer:
   - тонкий border top;
   - технічний monospace підпис.

### Декоративні деталі

Додати 3-5 малих деталей:

1. Статус у hero: `available for learning projects`.
2. Terminal-like code block.
3. Numbering секцій.
4. Дуже слабкий grid-background або radial-gradient.
5. Command/tag бейджі навичок.

### Адаптивність

Breakpoints:

1. Mobile: до `640px`;
2. Tablet: `641px - 900px`;
3. Desktop: від `901px`.

На мобільних:

- hero переходить в одну колонку;
- навігація стає compact/mobile menu;
- кнопки не виходять за межі контейнера;
- terminal-block не ламає layout;
- бейджі переносяться на нові рядки.

### Результат фази

`styles.css` повністю оформлює сайт у стилі Editorial Tech Portfolio + Terminal accents.

### Критерії готовності

- Дизайн не схожий на типовий Tailwind/Dribbble landing page.
- Немає перенасичення градієнтами, neon або glassmorphism.
- Текст не накладається на інші елементи.
- Сайт нормально виглядає на телефоні, планшеті й ПК.
- Hover/focus states є для всіх інтерактивних елементів.

### Статус фази

**Виконано.** `styles.css` розширено з базової дизайн-системи до повного оформлення сторінки: header, hero, terminal card, секції, badges, GitHub CTA, social links, contact, footer і responsive layout.

### Реалізовані рішення у `styles.css`

#### Загальний дизайн

Реалізовано мінімалістичний tech/editorial стиль:

- темна тема за замовчуванням;
- світла тема через `html[data-theme="light"]`;
- тонкі border-лінії;
- стриманий surface-дизайн;
- делікатний grid-background замість важких декоративних елементів;
- accent використано точково;
- без neon/cyberpunk і надмірного glassmorphism.

#### Header

Додано стилі для:

- sticky header;
- текстового бренду `Denis`;
- мінімалістичної навігації;
- theme toggle;
- mobile menu button;
- hover/focus states.

Для мобільного меню підготовлено селектори:

```css
.site-nav.is-open
body.menu-open .site-nav
html[data-menu-open="true"] .site-nav
```

Їх використає `assets/js/` у Фазі 6.

#### Hero

Додано:

- асиметричний desktop layout;
- одноколонковий mobile layout;
- status pill;
- typography для `h1`, lead text і note;
- CTA кнопки;
- terminal-like card;
- code block з `overflow-x: auto`.

#### About

Додано:

- editorial section grid;
- section number;
- читабельний текстовий блок;
- inline technical labels.

#### Skills

Додано:

- command/tag badges;
- responsive wrapping;
- hover через border/accent;
- без великих тіней і декоративних карток.

#### GitHub

Додано:

- візуально сильніший `github-panel`;
- стриманий surface/border стиль;
- accent-line зліва;
- GitHub URL у моноширинному стилі;
- основну CTA-кнопку `Перейти на GitHub`;
- без окремих карток проєктів.

#### Social Links

Додано:

- compact link grid;
- desktop layout на 4 колонки;
- tablet layout на 2 колонки;
- mobile layout на 1 колонку;
- hover/focus через border/accent.

#### Contact

Додано:

- читабельний текстовий layout;
- видимий email;
- CTA button;
- responsive button layout.

#### Footer

Додано:

- border top;
- двоколонковий desktop layout;
- одноколонковий mobile layout;
- моноширинний технічний підпис.

#### Адаптивність

Реалізовано breakpoints:

```css
@media (max-width: 900px)
@media (max-width: 760px)
@media (max-width: 520px)
```

Поведінка:

- hero переходить в одну колонку на tablet/mobile;
- section grid переходить в одну колонку на mobile;
- mobile menu приховується/відкривається через клас або data-атрибут;
- кнопки на вузьких екранах стають full-width;
- social links переходять з 4 колонок у 2, потім в 1;
- terminal code block не має ламати сторінку.

### Перевірка Фази 5

- [x] Header оформлено.
- [x] Hero оформлено.
- [x] Terminal-like block оформлено.
- [x] About оформлено.
- [x] Skills badges оформлено.
- [x] GitHub CTA оформлено.
- [x] Social links оформлено.
- [x] Contact оформлено.
- [x] Footer оформлено.
- [x] Є hover/focus states.
- [x] Є responsive breakpoints.
- [x] Є mobile menu CSS-стани для майбутнього JS.
- [x] Є `prefers-reduced-motion`.
- [x] Немає CSS-фреймворків.
- [x] Немає CDN або npm-залежностей.

---

## 7. Фаза 6: Реалізація JavaScript

### Ціль

Додати мінімальний JS у `assets/js/` тільки для потрібної інтерактивності.

### Функції

1. Theme switcher:
   - dark theme за замовчуванням;
   - light theme через `data-theme="light"` або class;
   - збереження вибору в `localStorage`;
   - коректне оновлення `aria-label`;
   - доступність з клавіатури.

2. Mobile menu:
   - відкриття/закриття меню;
   - оновлення `aria-expanded`;
   - закриття меню після кліку по navigation link;
   - закриття через `Escape`.

3. Smooth scroll:
   - для anchor links;
   - без ламання поведінки браузера;
   - з урахуванням fixed/sticky header, якщо він використовується.

4. Reveal animation:
   - легкий fade/slide для секцій;
   - через `IntersectionObserver`;
   - fallback без помилок, якщо API недоступний;
   - повага до `prefers-reduced-motion`.

5. Dynamic year:
   - автоматично вставити поточний рік у footer.

### Обмеження

- Не додавати зайвий JavaScript.
- Не використовувати зовнішні бібліотеки.
- Не створювати складну animation system.
- Не покладатися на JS для базового читання контенту.

### Результат фази

`assets/js/` містить короткий, зрозумілий і легко редагований код.

### Критерії готовності

- Перемикач теми працює після перезавантаження сторінки.
- Mobile menu працює мишею і клавіатурою.
- Анімації не програються при `prefers-reduced-motion: reduce`.
- У консолі браузера немає JavaScript-помилок.

### Статус фази

**Виконано.** Створено `assets/js/` із мінімальною прогресивною інтерактивністю: theme switcher, mobile menu, smooth scroll, reveal animation і dynamic footer year.

### Реалізовані рішення у `assets/js/`

#### Theme switcher

Реалізовано:

- dark theme за замовчуванням;
- light theme через `html[data-theme="light"]`;
- збереження вибору в `localStorage` за ключем `portfolio-theme`;
- fallback без помилки, якщо `localStorage` недоступний;
- оновлення `aria-label` кнопки;
- оновлення `<meta name="theme-color">`.

Логіка:

```text
stored theme = light -> html[data-theme="light"]
stored theme = dark або немає значення -> dark theme без data-theme
```

#### Mobile menu

Реалізовано:

- відкриття/закриття через `.menu-toggle`;
- оновлення `aria-expanded`;
- оновлення `aria-label`;
- клас `.is-open` на `.site-nav`;
- клас `.menu-open` на `body`;
- `data-menu-open="true"` на `html`;
- закриття меню після кліку по navigation link;
- закриття меню через `Escape`;
- автоматичне закриття при переході на desktop breakpoint.

#### Smooth scroll

Реалізовано для внутрішніх anchor links:

- `#about`;
- `#skills`;
- `#github`;
- `#contact`;
- `#main`;
- `#home`.

Поведінка:

- використовує `scrollIntoView`;
- враховує `prefers-reduced-motion`;
- оновлює URL hash через `history.pushState`;
- переносить focus на цільову секцію для keyboard/accessibility сценаріїв.

#### Reveal animation

Реалізовано:

- через `IntersectionObserver`;
- fallback: якщо `IntersectionObserver` недоступний, елементи одразу видимі;
- якщо `prefers-reduced-motion: reduce`, елементи одразу видимі;
- CSS приховує `.reveal` тільки якщо `html` має клас `.js`, тому без JavaScript контент залишається видимим.

Для цього у `styles.css` додано:

```css
.js .reveal {
  opacity: 0;
  transform: translateY(14px);
}

.js .reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Dynamic year

Реалізовано автоматичне оновлення:

```html
<span data-current-year>2026</span>
```

на поточний рік через:

```js
new Date().getFullYear()
```

### Перевірка Фази 6

- [x] Створено `assets/js/`.
- [x] Theme switcher використовує `localStorage`.
- [x] Theme switcher оновлює `aria-label`.
- [x] Theme switcher оновлює `meta[name="theme-color"]`.
- [x] Dark theme залишається дефолтною.
- [x] Light theme вмикається через `html[data-theme="light"]`.
- [x] Mobile menu оновлює `aria-expanded`.
- [x] Mobile menu закривається після кліку по navigation link.
- [x] Mobile menu закривається через `Escape`.
- [x] Smooth scroll працює для внутрішніх anchor links.
- [x] Smooth scroll враховує `prefers-reduced-motion`.
- [x] Reveal animation використовує `IntersectionObserver`.
- [x] Reveal animation має fallback.
- [x] Контент залишається видимим без JavaScript.
- [x] Footer year оновлюється автоматично.
- [x] Не додано зовнішніх JS-бібліотек.
- [x] Не додано npm-залежностей.

---

## 8. Фаза 7: README та документація

### Ціль

Створити зрозумілий `README.md` для новачка й окремий `assets/README.md`.

### README.md має містити

1. Короткий опис проєкту.
2. Структуру файлів.
3. Як відкрити сайт локально:
   - просто відкрити `index.html`;
   - або запустити простий static server, якщо потрібно.

4. Як змінити персональні дані:
   - ім'я;
   - опис;
   - hero-текст;
   - About;
   - skills;
   - GitHub;
   - Telegram;
   - LinkedIn;
   - Email.

5. Як змінити дизайн:
   - кольори в `:root`;
   - light/dark theme variables;
   - шрифти;
   - accent color;
   - відступи й radius.

6. Як захостити на VPS через Nginx:

```bash
sudo apt update
sudo apt install nginx git -y

cd /var/www
sudo git clone https://github.com/ZaGOR-1/mysitevizitka.git portfolio
sudo chown -R www-data:www-data /var/www/portfolio
```

7. Приклад Nginx-конфігу:

```nginx
server {
    listen 80;
    server_name about.me.hotzagor.tech;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

8. Команди для активації конфігу:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

9. HTTPS через Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d about.me.hotzagor.tech
```

10. Як оновлювати сайт через Git:

```bash
cd /var/www/portfolio
sudo git pull
sudo systemctl reload nginx
```

### assets/README.md має містити

1. Для чого потрібна папка `assets`.
2. Які файли можна туди додавати:
   - favicon;
   - og-image;
   - локальні шрифти;
   - додаткові зображення, якщо вони знадобляться.

3. Рекомендації:
   - не додавати важкі файли;
   - оптимізувати зображення;
   - не використовувати stock-photo style без потреби.

### Результат фази

Є документація, достатня для локального запуску, редагування й деплою на VPS.

### Критерії готовності

- README зрозумілий для новачка.
- Є приклади Nginx, Git update і HTTPS.
- Чітко пояснено, де змінювати ім'я, посилання, кольори та шрифти.

### Статус фази

**Виконано.** Створено `README.md` і `assets/README.md` з інструкціями для локального запуску, редагування, деплою на VPS, Nginx, Git update і HTTPS через Let's Encrypt.

### Реалізовані рішення у `README.md`

Додано:

- короткий опис проєкту;
- структуру файлів;
- інструкцію локального відкриття через `index.html`;
- інструкцію запуску static server через Python;
- пояснення, де змінювати ім'я;
- пояснення, де змінювати hero-текст;
- пояснення, де змінювати About;
- пояснення, де змінювати Skills;
- пояснення, де змінювати GitHub, Telegram, LinkedIn і Email;
- пояснення, де змінювати кольори;
- пояснення, де змінювати accent color;
- пояснення, де змінювати шрифти;
- пояснення, де змінювати spacing і radius;
- короткий опис ролі `assets/js/`;
- приклад деплою на VPS через Nginx;
- приклад Nginx config;
- команди активації Nginx config;
- інструкцію HTTPS через Let's Encrypt;
- інструкцію оновлення сайту через Git;
- список плейсхолдерів, які треба замінити перед публікацією;
- технічні нотатки про відсутність React, Vue, Angular, Bootstrap, Tailwind, npm, backend і бази даних.

### Реалізовані рішення у `assets/README.md`

Додано:

- пояснення призначення папки `assets`;
- перелік файлів, які можна додавати;
- рекомендації щодо легких ресурсів;
- нотатку про оновлення `og:image`;
- приклад підключення локального шрифту через `@font-face`;
- рекомендацію не додавати багато font weights.

### Перевірка Фази 7

- [x] Створено `README.md`.
- [x] Створено `assets/README.md`.
- [x] README пояснює локальний запуск.
- [x] README пояснює редагування персонального контенту.
- [x] README пояснює редагування посилань.
- [x] README пояснює редагування кольорів.
- [x] README пояснює редагування шрифтів.
- [x] README містить приклад деплою на VPS.
- [x] README містить Nginx config.
- [x] README містить команди активації Nginx config.
- [x] README містить HTTPS через Let's Encrypt.
- [x] README містить оновлення через Git.
- [x] `assets/README.md` пояснює призначення папки.
- [x] `assets/README.md` пояснює рекомендації для favicon, og-image і локальних шрифтів.

---

## 9. Фаза 8: Перевірка доступності, SEO і продуктивності

### Ціль

Переконатися, що сайт легкий, доступний, швидкий і придатний для VPS з мінімальними ресурсами.

### Перевірка доступності

1. Усі інтерактивні елементи доступні з клавіатури.
2. Видимий `:focus-visible`.
3. Theme toggle має `aria-label`.
4. Mobile menu button має `aria-expanded`.
5. Зовнішні посилання мають зрозумілі назви.
6. Контраст тексту достатній у dark і light theme.
7. Немає тексту, який перекривається іншими елементами.

### Перевірка SEO

1. Є один основний `h1`.
2. Heading hierarchy логічна.
3. Є `title` і `meta description`.
4. Є Open Graph tags.
5. Є favicon.
6. Секції мають зрозумілі id.

### Перевірка продуктивності

1. Немає npm-залежностей.
2. Немає важких JS-бібліотек.
3. Немає великих зображень.
4. CSS і JS компактні.
5. Сайт відкривається напряму як статичні файли.
6. Підходить для Nginx/Apache на VPS 1 CPU / 1 GB RAM.

### Результат фази

Сайт готовий до локального використання й деплою.

### Критерії готовності

- Lighthouse або ручна перевірка не показує критичних проблем.
- У браузерній консолі немає помилок.
- Сторінка швидко завантажується.

### Статус фази

**Виконано.** Проведено статичний аудит доступності, SEO і продуктивності. Також додано легкий `assets/og-image.svg`, щоб `og:image` вказував на реальний файл, а не лише на плейсхолдер.

### Виправлення під час Фази 8

#### Open Graph image

Було:

```html
<meta property="og:image" content="https://about.me.hotzagor.tech/assets/og-image.png">
```

Файлу `assets/og-image.png` не існувало.

Зроблено:

```html
<meta property="og:image" content="https://about.me.hotzagor.tech/assets/og-image.svg">
```

Додано файл:

```text
assets/og-image.svg
```

Також оновлено `README.md` і `assets/README.md`.

#### Light theme contrast

Під час перевірки contrast ratio було знайдено, що light accent `#0f8f84` давав лише `3.74:1` на світлому фоні, що слабко для маленьких technical labels.

Змінено:

```css
--color-accent: #08756e;
--color-accent-strong: #075f59;
--color-accent-soft: rgba(8, 117, 110, 0.11);
--color-focus: #08756e;
```

Після зміни light accent має `5.22:1` на світлому фоні.

### Результати перевірки доступності

Статично перевірено:

- один `h1`;
- skip link є;
- theme toggle має `aria-label`;
- mobile menu button має `aria-controls` і `aria-expanded`;
- секції мають `aria-labelledby` або зрозумілу label-структуру;
- зовнішні посилання мають `rel="noopener noreferrer"`;
- internal anchor links мають відповідні targets;
- `:focus-visible` є в CSS;
- `prefers-reduced-motion` є в CSS і JS;
- контент залишається видимим без JavaScript, бо `.reveal` приховується тільки після додавання класу `.js`.

Перевірка anchor targets:

```text
MissingAnchorTargets: none
```

Перевірка зовнішніх посилань:

```text
ExternalLinksMissingRel: 0
```

### Результати contrast-перевірки

```text
dark text on bg              17.83
dark muted on bg              7.58
dark accent on bg            10.98
dark button text on accent   10.98
light text on bg             16.72
light muted on bg             5.31
light accent on bg            5.22
light button text on accent   5.22
```

Найнижча перевірена пара: `5.22:1`, що проходить базовий WCAG-рівень для звичайного тексту.

### Результати SEO-перевірки

Перевірено:

```text
H1Count: 1
Title: true
MetaDescription: true
OpenGraphTitle: true
OpenGraphDescription: true
OpenGraphImage: true
Favicon: true
OgImageFileExists: true
FaviconFileExists: true
```

Секції з id:

```text
#main
#home
#about
#skills
#github
#contact
```

### Результати продуктивності

Production-файли без планів/промптів мають приблизний сумарний розмір:

```text
42,794 bytes
```

Основні файли:

```text
index.html       10,402 bytes
styles.css       17,495 bytes
assets/js/       modular vanilla JS files
favicon.svg         375 bytes
og-image.svg        939 bytes
```

Перевірено:

- немає npm-залежностей;
- немає React, Next.js, Vue, Angular;
- немає Bootstrap або Tailwind;
- немає jQuery;
- немає CDN-посилань;
- немає analytics/tracking скриптів;
- `node --check` для всіх JS-модулів у `assets/js/` проходить без синтаксичних помилок;
- сайт залишається повністю статичним.

### Обмеження перевірки

Lighthouse / Playwright browser audit не було виконано, бо попередня спроба запуску Playwright у цьому середовищі завершилась sandbox-помилкою `EPERM` на `AppData`. Фаза 8 виконана як статичний і ручний кодовий аудит.

### Перевірка Фази 8

- [x] Перевірено наявність одного `h1`.
- [x] Перевірено SEO meta tags.
- [x] Перевірено Open Graph tags.
- [x] Додано реальний `assets/og-image.svg`.
- [x] Перевірено favicon.
- [x] Перевірено internal anchor targets.
- [x] Перевірено `aria-label` для theme toggle.
- [x] Перевірено `aria-expanded` для mobile menu.
- [x] Перевірено `rel="noopener noreferrer"` для зовнішніх посилань.
- [x] Перевірено contrast ratio для основних color pairs.
- [x] Виправлено light theme accent contrast.
- [x] Перевірено `prefers-reduced-motion`.
- [x] Перевірено JS-синтаксис через `node --check`.
- [x] Перевірено відсутність великих assets.
- [x] Перевірено відсутність фреймворків, CDN і npm-залежностей.

---

## 10. Фаза 9: Ручне тестування адаптивності

### Ціль

Перевірити, що сайт коректно виглядає на різних екранах.

### Viewports для перевірки

1. Mobile small: `360x740`.
2. Mobile large: `414x896`.
3. Tablet: `768x1024`.
4. Laptop: `1366x768`.
5. Desktop: `1440x900` або більше.

### Що перевірити

1. Header:
   - навігація не ламається;
   - mobile menu відкривається й закривається;
   - theme toggle доступний.

2. Hero:
   - ім'я й опис не обрізаються;
   - кнопки не виходять за контейнер;
   - terminal block читається і не створює горизонтальний scroll.

3. About:
   - текст легко читати;
   - відступи не надто великі й не надто малі.

4. Skills:
   - бейджі переносяться акуратно;
   - hover/focus не змінює layout.

5. GitHub:
   - CTA помітний, але не агресивний;
   - посилання легко замінити.

6. Contact:
   - email і кнопка працюють;
   - на мобільному все в одну колонку.

7. Footer:
   - рік відображається;
   - текст не переноситься некрасиво.

### Результат фази

Сайт адаптований для телефону, планшета й ПК.

### Критерії готовності

- Немає горизонтального scroll на мобільних.
- Немає накладання тексту.
- Усі кнопки та посилання зручні для натискання.

---

## 11. Фаза 10: Фінальна перевірка відповідності промпту

### Ціль

Перевірити, що реалізація точно відповідає вимогам.

### Checklist

- [ ] Є `index.html`.
- [ ] Є `styles.css`.
- [ ] Є `assets/js/`.
- [ ] Є `README.md`.
- [ ] Є `assets/README.md`.
- [ ] Сайт повністю статичний.
- [ ] Немає React, Next.js, Vue, Angular.
- [ ] Немає Bootstrap.
- [ ] Немає Tailwind через CDN.
- [ ] Немає npm-залежностей для запуску.
- [ ] Немає важких JS-бібліотек.
- [ ] Темна тема за замовчуванням.
- [ ] Є акуратна світла тема.
- [ ] Theme switcher зберігає стан у `localStorage`.
- [ ] Theme switcher має `aria-label`.
- [ ] Є hero-секція з ім'ям, роллю, описом, CTA і статусом.
- [ ] Є terminal/code block у hero.
- [ ] Є About.
- [ ] Є Skills.
- [ ] Є GitHub-блок як основний CTA.
- [ ] Немає окремих карток проєктів.
- [ ] Є Social Links.
- [ ] Є Contact.
- [ ] Є Footer з текстом `built with html/css/js · hosted on vps`.
- [ ] Є numbering секцій.
- [ ] Є тонкі розділювачі.
- [ ] Є мінімалістичний tech/dev настрій.
- [ ] Немає надмірного neon/cyberpunk.
- [ ] Немає надмірного glassmorphism.
- [ ] Немає шаблонного AI-copywriting.
- [ ] Є SEO meta tags.
- [ ] Є Open Graph tags.
- [ ] Є favicon.
- [ ] Є hover/focus states.
- [ ] Є підтримка `prefers-reduced-motion`.
- [ ] README пояснює локальний запуск.
- [ ] README пояснює редагування контенту.
- [ ] README пояснює зміну кольорів і шрифтів.
- [ ] README пояснює деплой на VPS через Nginx.
- [ ] README містить приклад HTTPS через Let's Encrypt.

### Результат фази

Проєкт готовий до передачі користувачу або до безпосереднього деплою.

---

## 12. Рекомендований порядок реалізації

1. Створити файлову структуру.
2. Написати HTML-скелет усіх секцій.
3. Додати реальний текст і плейсхолдери посилань.
4. Додати CSS variables і базові стилі.
5. Оформити dark theme.
6. Оформити light theme.
7. Зробити адаптивний layout.
8. Додати hover/focus states.
9. Написати мінімальний `assets/js/`.
10. Додати README і `assets/README.md`.
11. Провести ручну перевірку на різних ширинах екрана.
12. Перевірити фінальний checklist.

---

## 13. Ризики та як їх уникнути

### Ризик 1: сайт виглядатиме як шаблонний landing page

Як уникнути:

- не робити надмірно великий hero;
- не створювати однакові картки для кожної секції;
- використовувати editorial layout, numbering і тонкі розділювачі;
- GitHub-блок зробити стриманим, а не рекламним.

### Ризик 2: дизайн стане надто темним або однотонним

Як уникнути:

- використовувати не чистий чорний, а м'який dark background;
- додати surface-відтінки;
- accent color застосовувати точково;
- перевірити контраст muted-тексту.

### Ризик 3: terminal-стиль стане надто cyberpunk

Як уникнути:

- не використовувати кислотний зелений;
- не додавати багато neon glow;
- terminal block зробити компактним і спокійним;
- використовувати border/accent замість великих світінь.

### Ризик 4: мобільна версія зламається через code block

Як уникнути:

- додати `overflow-x: auto` для code block;
- зменшити font-size на мобільних;
- не задавати фіксовану ширину terminal block;
- перевірити viewport `360px`.

### Ризик 5: JS стане зайвим і важким

Як уникнути:

- залишити тільки theme switcher, mobile menu, smooth scroll, reveal animation і dynamic year;
- не додавати бібліотеки;
- не прив'язувати критичний контент до JS.

---

## 14. Фінальний результат

Після виконання плану має бути готовий статичний сайт-візитка програміста, який:

- швидко відкривається;
- не потребує збірки;
- не потребує npm install;
- легко редагується вручну;
- має dark/light theme;
- має професійний мінімалістичний вигляд;
- відповідає стилю Editorial Tech Portfolio + Terminal accents;
- готовий до розміщення на VPS через Nginx або Apache.
