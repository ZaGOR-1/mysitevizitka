# Денис Загоровський / Denys Zahorovskyi Portfolio

Легкий статичний сайт-візитка / міні-портфоліо програміста у стилі **Editorial Tech Portfolio + Terminal accents**.

Проєкт зроблений без фреймворків, збірників і npm-залежностей. Його можна відкрити напряму як HTML-файл або розмістити на звичайному VPS з Nginx чи Apache.

## Структура файлів

```text
.
├── .gitignore
├── AGENTS.md
├── index.html
├── styles.css
├── sw.js
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── assets/
│   ├── js/
│   │   ├── i18n.en.js
│   │   ├── i18n.uk.js
│   │   ├── i18n.js
│   │   ├── theme.js
│   │   ├── cli.js
│   │   ├── nav.js
│   │   └── main.js
│   ├── fonts/
│   │   ├── fonts.css
│   │   └── *.woff2
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── og-image.png
│   └── README.md
├── docs/
│   ├── improvement-roadmap.md
│   ├── checklist.md
│   ├── nginx.conf.example
│   ├── PROMPT_PLAN_REVIEW.md
│   ├── plan.md
│   └── promt.md
└── README.md
```

Актуальні робочі документи: цей `README.md`, `AGENTS.md`, `docs/checklist.md`, `docs/improvement-roadmap.md` і `assets/README.md`. Файли `docs/promt.md`, `docs/plan.md` і `docs/PROMPT_PLAN_REVIEW.md` залишені як архів початкового задуму та етапів реалізації.

## Як відкрити локально

Найпростіший варіант:

1. Відкрий файл `index.html` у браузері.
2. Сайт працюватиме як звичайна статична сторінка.

JS розбитий на класичні скрипти (`assets/js/*.js`), тому відкриття через `file://` теж працює. Але service worker реєструється лише по `http(s)`, тож для повноцінної перевірки (offline-cache, мережеві запити) краще запустити локальний static server:

```powershell
py -m http.server 8000
```

Після цього відкрий:

```text
http://localhost:8000
```

На Linux/macOS можна використати:

```bash
python3 -m http.server 8000
```

## Як змінити персональні дані

Українські тексти живуть в одному місці — у розмітці `index.html` (елементи з `data-i18n`). JS на старті зчитує їх із DOM, тому окремо дублювати UA не треба. Англійський переклад лежить у `assets/js/i18n.en.js` (`App.dict.en`). Невелика добірка UA-рядків, яких немає в DOM (CLI-термінал, alt-стани кнопок, фідбек копіювання email), — у `assets/js/i18n.uk.js`.

### Ім'я

Ім'я перемикається залежно від мови:

- UA: `Денис Загоровський`;
- EN: `Denys Zahorovskyi`.

UA-значення редагуються прямо в `index.html` (елементи з `data-i18n="site.name"` і `data-i18n="hero.name"`). EN-значення — у `assets/js/i18n.en.js` (`App.dict.en.site.name`, `App.dict.en.hero.name`).

- у `<title>`;
- у meta tags;
- у header brand;
- у hero `h1`;
- у terminal code block;
- у footer.

### Опис у hero

У `index.html` зміни блок:

```html
<p class="hero-lead">
  Студент Software Engineering, який вивчає веброзробку, backend, Linux і автоматизацію.
</p>
```

Слоган нижче змінюється тут:

```html
<p class="hero-note">
  Пишу простий код, розбираюся в серверах і поступово збираю власний шлях у розробці.
</p>
```

### About

Секція About починається з:

```html
<section class="section" id="about" aria-labelledby="about-title">
```

Там можна змінити текст про себе, навчання, інтереси та блок `Quick profile`.

### Focus

Секція Focus починається з:

```html
<section class="section" id="focus" aria-labelledby="focus-title">
```

Там описані поточні напрями розвитку:

- Backend basics;
- Linux & VPS;
- Automation.

Це не секція проєктів, а короткий блок про те, що зараз вивчається й практикується.

### Навички

Секція Skills починається з:

```html
<section class="section" id="skills" aria-labelledby="skills-title">
```

Навички згруповані за категоріями:

```html
<dl class="skill-table">
  <div class="skill-row">
    <dt>Backend</dt>
    <dd>PHP, Laravel, Symfony, Python, C, C#</dd>
  </div>
</dl>
```

Можна змінювати назви категорій, список технологій або додавати нові `.skill-row`.

### GitHub

Заміни всі входження:

```text
https://github.com/ZaGOR-1
github.com/ZaGOR-1
```

на своє посилання.

### Telegram

Заміни:

```text
https://t.me/Denis_Zagor
```

### LinkedIn

Заміни:

```text
https://www.linkedin.com/in/denis-zagorovskiy-a23b05410
```

### Email

Заміни:

```text
ran31276@gmail.com
mailto:ran31276@gmail.com
```

на свій email.

### Contact / Links

Контакти й соцмережі об'єднані в одну компактну секцію:

```html
<section class="section" id="contact" aria-labelledby="contact-title">
```

Там змінюються email, кнопка `Написати мені` та посилання на GitHub, Telegram і LinkedIn.

## Як змінити дизайн

Основний дизайн знаходиться у `styles.css`.

### Кольори

Темна тема задана в `:root`:

```css
:root {
  --color-bg: #0d0f12;
  --color-surface: #151a20;
  --color-text: #f3f7fb;
  --color-muted: #98a4b3;
  --color-accent: #7dd3c7;
}
```

Світла тема задана тут:

```css
html[data-theme="light"] {
  --color-bg: #f5f7f4;
  --color-surface: #fafcf9;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-accent: #0f766e;
}
```

### Accent color

Головний акцент сайту:

```css
--color-accent: #7dd3c7;
```

Він використовується для кнопок, hover/focus states, section numbers і технічних деталей.

### Шрифти

Шрифти підключені локально з `assets/fonts/`:

- `Manrope` з вагами `400`, `500`, `600`, `700`;
- `JetBrains Mono` з вагами `400`, `500`, `600`;
- `font-display: swap`, щоб текст швидко показувався fallback-шрифтом під час завантаження.

Локальний файл шрифтів підключено в `<head>` файлу `index.html` перед основними стилями:

```html
<link rel="stylesheet" href="assets/fonts/fonts.css">
<link rel="stylesheet" href="styles.css">
```

Далі шрифти задані через CSS-змінні:

```css
--font-sans: "Manrope", "Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Fallback-шрифти залишені на випадок, якщо локальний файл шрифту не завантажиться.

### Відступи та radius

Головні змінні:

```css
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2.25rem;
--section-padding: clamp(3rem, 6.5vw, 5rem);

--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
```

## JavaScript

JS розбитий на класичні скрипти у `assets/js/`, які підключаються по порядку і працюють через спільний namespace `window.App` (без бандлера, без ES-модулів — тому `file://` і `node --check` працюють):

- `i18n.en.js` / `i18n.uk.js` — словники (EN повний; UA лише те, чого немає в DOM);
- `i18n.js` — двигун мов: зчитує UA з DOM, перемикає мову, шле подію `app:languagechange`;
- `theme.js` — dark/light theme + збереження в `localStorage` + `prefers-color-scheme`;
- `cli.js` — terminal: вкладки, годинник, CLI з реєстром команд;
- `nav.js` — mobile menu, smooth scroll, active nav link, scroll progress, reveal animation;
- `main.js` — bootstrap: порядок ініціалізації, рік у footer, реєстрація service worker.

Модулі спілкуються через подію `app:languagechange` на `document`, тому слабко зв'язані між собою.

Сайт залишається читабельним навіть якщо JavaScript не завантажиться.

## Service Worker і cache

Файл `sw.js` додає базову offline-підтримку. HTML, CSS, JS, manifest і сам service worker використовують network-first strategy, щоб після деплою користувачі швидше отримували актуальні `styles.css` і модулі з `assets/js/`. Список core-assets у `CORE_ASSETS` має містити всі `assets/js/*.js` — після додавання/перейменування модуля онови його.

Шрифти й зображення кешуються cache-first під час першого реального запиту. Самі `.woff2` файли не лежать у core install-cache, щоб service worker не ламався через один випадково відсутній font-файл.

Після зміни cache strategy або списку core assets онови:

```js
const CACHE_VERSION = "v6-2026-06-27";
```

Це змусить браузер прибрати старий cache під час `activate`.

Перед деплоєм можна пройти короткий чеклист:

```text
docs/checklist.md
```

## Мультимовність

Сайт підтримує українську та англійську мови. За замовчуванням відкривається українська, а вибір `UA / EN` зберігається в `localStorage` за ключем `site-language`.

UA-тексти живуть у розмітці `index.html` і зчитуються з DOM; EN-тексти — у `assets/js/i18n.en.js` (`App.dict.en`). CLI-рядки обох мов — у словниках `cli` (EN у `i18n.en.js`, UA у `i18n.uk.js`).

Щоб змінити текст:

1. UA — зміни значення прямо в `index.html` (елемент з потрібним `data-i18n`).
2. EN — знайди той самий ключ у `App.dict.en` в `assets/js/i18n.en.js`.
3. Відкрий сайт і перевір перемикач мови.

HTML-елементи, які перекладаються, мають атрибути:

```html
data-i18n="hero.title"
data-i18n-aria-label="aria.githubProfile"
```

Скрипт також оновлює:

- `<html lang="uk">` / `<html lang="en">`;
- `document.title`;
- meta description;
- Open Graph title/description;
- Twitter title/description;
- aria-label для theme toggle, mobile menu і language switcher.

Щоб додати третю мову:

1. Створи новий словник, наприклад `assets/js/i18n.pl.js` з `App.dict.pl = { ... }` (повна структура, як `App.dict.en`), і підключи його в `index.html` перед `i18n.js`.
2. Скопіюй структуру з `App.dict.en` і переклади всі значення.
3. Додай кнопку в `.language-switch`:

```html
<button class="language-button" type="button" data-language="pl" aria-pressed="false">PL</button>
```

4. Додай перевірку нової мови в `getSavedLanguage()` / `setLanguage()` у `assets/js/i18n.js`.

## Деплой на VPS через Nginx

Поточний продакшн-домен:

```text
about.me.hotzagor.tech
```

Поточна папка сайту на VPS:

```text
/var/www/mysitevizitka
```

### 1. Встановити Nginx і базові утиліти

```bash
sudo apt update
sudo apt install nginx git unzip rsync -y
```

### 2. Перевірити файли сайту

У публічній папці мають бути основні файли сайту:

```bash
ls -la /var/www/mysitevizitka
```

Мінімально для роботи сайту потрібні:

```text
index.html
styles.css
sw.js
robots.txt
sitemap.xml
site.webmanifest
assets/
```

Файли на кшталт `README.md`, `AGENTS.md`, `docs/`, `promt.md`, `plan.md`, `.git/`, `*.zip` корисні для розробки, але їх краще не викладати у публічний webroot або закривати через Nginx.

### 3. Налаштувати права

```bash
sudo chown -R zagor:www-data /var/www/mysitevizitka
sudo find /var/www/mysitevizitka -type d -exec chmod 755 {} \;
sudo find /var/www/mysitevizitka -type f -exec chmod 644 {} \;
```

### 4. Створити Nginx-конфіг

```bash
sudo nano /etc/nginx/sites-available/mysitevizitka
```

Встав конфіг:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name about.me.hotzagor.tech;

    root /var/www/mysitevizitka;
    index index.html;

    charset utf-8;

    location / {
        try_files $uri $uri/ =404;
    }

    # Закрити .git, .env та інші приховані файли
    location ~ /\.(?!well-known) {
        deny all;
    }

    # Закрити службові файли репозиторію
    location ~* \.(md|zip|log|env|bak|old)$ {
        deny all;
    }

    # HTML, CSS, JS і Service Worker мають швидко оновлюватися після деплою
    location ~* \.(html|css|js|webmanifest)$ {
        expires -1;
        add_header Cache-Control "no-cache";
        try_files $uri =404;
    }

    # Кеш для рідко змінюваних статичних assets
    location ~* \.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public";
        try_files $uri =404;
    }
}
```

Активуй сайт:

```bash
sudo ln -sf /etc/nginx/sites-available/mysitevizitka /etc/nginx/sites-enabled/mysitevizitka
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Перевірити HTTP

```bash
curl -I http://localhost -H "Host: about.me.hotzagor.tech"
curl -I http://about.me.hotzagor.tech
```

Очікувано до встановлення HTTPS:

```text
HTTP/1.1 200 OK
```

## HTTPS через Let's Encrypt

### 1. Встановити Certbot через snap

```bash
sudo apt install snapd -y
sudo snap install core
sudo snap refresh core
sudo apt remove certbot python3-certbot-nginx -y
sudo snap install --classic certbot
sudo ln -sf /snap/bin/certbot /usr/local/bin/certbot
certbot --version
```

### 2. Отримати сертифікат

```bash
sudo certbot --nginx -d about.me.hotzagor.tech
```

Якщо Certbot запропонує redirect HTTP → HTTPS, обери redirect.

### 3. Перевірити HTTPS і редірект

```bash
curl -I http://about.me.hotzagor.tech
curl -I https://about.me.hotzagor.tech
```

Нормальний результат:

```text
http://about.me.hotzagor.tech   -> 301 Moved Permanently на HTTPS
https://about.me.hotzagor.tech  -> 200 OK
```

### 4. Перевірити автопоновлення сертифіката

```bash
sudo certbot renew --dry-run
```

## Перевірка безпеки після деплою

Перевір, що службові файли не віддаються з сайту:

```bash
curl -I https://about.me.hotzagor.tech/.git/config
curl -I https://about.me.hotzagor.tech/README.md
curl -I https://about.me.hotzagor.tech/AGENTS.md
curl -I https://about.me.hotzagor.tech/docs/plan.md
```

Нормально, якщо відповідь:

```text
403 Forbidden
```

або:

```text
404 Not Found
```

Погано, якщо:

```text
200 OK
```

## Як оновлювати сайт через Git

На локальному ПК:

```bash
git add .
git commit -m "Update portfolio"
git push
```

На VPS:

```bash
cd /var/www/mysitevizitka
git pull
```

Після зміни HTML/CSS/JS перезавантажувати Nginx не обов'язково. Але можна виконати:

```bash
sudo systemctl reload nginx
```

Якщо змінювали права доступу або власника:

```bash
sudo chown -R zagor:www-data /var/www/mysitevizitka
sudo find /var/www/mysitevizitka -type d -exec chmod 755 {} \;
sudo find /var/www/mysitevizitka -type f -exec chmod 644 {} \;
```

## Поточні контактні значення

- `https://github.com/ZaGOR-1`
- `github.com/ZaGOR-1`
- `https://t.me/Denis_Zagor`
- `https://www.linkedin.com/in/denis-zagorovskiy-a23b05410`
- `ran31276@gmail.com`
- `https://about.me.hotzagor.tech`
- `about.me.hotzagor.tech`
- `assets/og-image.png`, якщо зміниш Open Graph image
- `assets/fonts/`, якщо змінюєш шрифти
- `CACHE_VERSION` у `sw.js`, якщо змінюєш cache strategy або core assets

## Технічні нотатки

- Немає React, Next.js, Vue, Angular.
- Немає Bootstrap або Tailwind.
- Немає npm install.
- Немає backend і бази даних.
- Підходить для мінімального VPS: 1 CPU, 1 GB RAM, Nginx або Apache.
