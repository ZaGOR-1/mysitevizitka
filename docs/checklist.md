# Local audit checklist

Короткий чеклист перед деплоєм або великим оновленням сайту.

## 1. Статичні перевірки

```powershell
Get-ChildItem .\assets\js\*.js | ForEach-Object { node --check $_.FullName }
node --check .\sw.js
```

Перевірити, що:

- команди завершилися без помилок;
- у production-файлах немає старих placeholder-ів для GitHub, email або домену;
- у `sw.js` оновлено `CACHE_VERSION`, якщо змінювали cache strategy або core assets;
- усі файли з `CORE_ASSETS` реально існують.

## 2. Локальний запуск

```powershell
py -m http.server 8000
```

Відкрити:

```text
http://localhost:8000
```

Перевірити у браузері:

- немає console errors;
- сайт відкривається без npm install;
- `index.html`, `styles.css`, `assets/js/*.js`, `sw.js`, `robots.txt`, `sitemap.xml`, `site.webmanifest` доступні.

## 3. Основні сценарії

Перевірити:

- перемикання UA / EN;
- dark / light theme;
- mobile menu;
- Escape закриває mobile menu;
- copy email button;
- terminal tabs `profile.json` / `terminal.sh`;
- terminal commands: `help`, `about`, `skills`, `contact`, `github`, `clear`;
- terminal history через ArrowUp / ArrowDown;
- autocomplete через Tab, включно з кількома збігами;
- active nav link при скролі;
- внутрішні посилання `#about`, `#focus`, `#skills`, `#github`, `#contact`;
- зовнішні посилання GitHub / Telegram / LinkedIn;
- кнопка `Написати мені`.

## 4. Viewports

Перевірити вручну:

- `360px` mobile;
- `414px` mobile;
- `768px` tablet;
- `1366px` laptop;
- `1440px` desktop.

На кожному viewport перевірити:

- немає horizontal scroll;
- header не перекриває текст;
- hero не ламається;
- terminal block не виходить за контейнер;
- email і довгі посилання переносяться нормально;
- кнопки й links мають видимий focus state.

## 5. SEO і assets

Перевірити:

- є рівно один `h1`;
- `title` і `meta description` актуальні;
- Open Graph image веде на реальний файл;
- `robots.txt` містить актуальний sitemap URL;
- `sitemap.xml` містить актуальний домен;
- `site.webmanifest` валідний JSON;
- JSON-LD `WebSite`, `ProfilePage` і `Person` містять актуальні ім'я, сайт і social links;
- Search Console property додана й підтверджена;
- `sitemap.xml` відправлений у Search Console;
- головна сторінка перевірена через URL Inspection;
- structured data перевірена через Rich Results Test;
- PageSpeed Insights не показує критичних проблем.

Опційно для кращого multilingual SEO:

- зробити окремі URL для мовних версій, наприклад `/` або `/uk/` і `/en/`;
- додати `hreflang` тільки після появи окремих URL;
- додати обидві мовні сторінки в sitemap.

## 6. VPS sanity

Після деплою перевірити:

```bash
curl -I https://about.me.hotzagor.tech
curl -I https://about.me.hotzagor.tech/sw.js
curl -I https://about.me.hotzagor.tech/docs/plan.md
curl -I https://about.me.hotzagor.tech/.git/config
curl -I https://about.me.hotzagor.tech/README.md
```

Очікувано:

- головна сторінка повертає `200`;
- HTTP редіректить на HTTPS;
- `docs/`, `.git/`, `README.md`, `AGENTS.md` не віддаються як `200`;
- CSS/JS/HTML мають короткий або `no-cache` cache policy;
- images/fonts можуть кешуватися довше.

Перевірити security headers:

```bash
curl -I https://about.me.hotzagor.tech
```

Бажані заголовки:

- `Content-Security-Policy`;
- `Strict-Transport-Security`;
- `Cross-Origin-Opener-Policy`;
- `X-Frame-Options` або CSP `frame-ancestors`;
- `X-Content-Type-Options`;
- `Referrer-Policy`.

Trusted Types (`require-trusted-types-for 'script'`) не вмикати без окремого JS-рефакторингу, бо поточний terminal/i18n код контрольовано використовує `innerHTML`.
