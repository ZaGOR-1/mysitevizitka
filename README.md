# Денис Загоровський / Denys Zahorovskyi Portfolio

Легкий статичний сайт-візитка / міні-портфоліо програміста у стилі **Editorial Tech Portfolio + Terminal accents**.

Проєкт зроблений без фреймворків, збірників і npm-залежностей. Його можна відкрити напряму як HTML-файл або розмістити на звичайному VPS з Nginx чи Apache.

## Структура файлів

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── og-image.png
│   └── README.md
└── README.md
```

## Як відкрити локально

Найпростіший варіант:

1. Відкрий файл `index.html` у браузері.
2. Сайт працюватиме як звичайна статична сторінка.

Якщо хочеш запустити локальний static server:

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

Усі основні тексти знаходяться в `index.html`.

### Ім'я

Ім'я перемикається залежно від мови:

- UA: `Денис Загоровський`;
- EN: `Denys Zahorovskyi`.

Основні значення лежать у `script.js` в `translations.uk.site.name`, `translations.en.site.name` і `hero.name`.

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
<section class="skill-group" aria-labelledby="skill-backend">
  <h3 id="skill-backend">Backend</h3>
  <p>PHP, Laravel, Symfony, Python</p>
</section>
```

Можна змінювати назви категорій, список технологій або додавати нові `.skill-group`.

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
  --color-bg: #f6f8fb;
  --color-surface: #ffffff;
  --color-text: #15181d;
  --color-muted: #5f6874;
  --color-accent: #08756e;
}
```

### Accent color

Головний акцент сайту:

```css
--color-accent: #7dd3c7;
```

Він використовується для кнопок, hover/focus states, section numbers і технічних деталей.

### Шрифти

Шрифти підключені через Google Fonts у `index.html`:

- `Manrope` з вагами `400`, `500`, `600`, `700`;
- `JetBrains Mono` з вагами `400`, `500`, `600`;
- `display=swap`, щоб текст швидко показувався fallback-шрифтом під час завантаження.

У `styles.css` вони задані через CSS-змінні:

```css
--font-sans: "Manrope", "Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Fallback-шрифти залишені на випадок, якщо Google Fonts не завантажаться.

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

Файл `script.js` відповідає тільки за легку інтерактивність:

- перемикач dark/light theme;
- збереження теми в `localStorage`;
- перемикач мови UA / EN;
- mobile menu;
- smooth scroll;
- reveal animation;
- автоматичний рік у footer.

Сайт залишається читабельним навіть якщо JavaScript не завантажиться.

## Мультимовність

Сайт підтримує українську та англійську мови. За замовчуванням відкривається українська, а вибір `UA / EN` зберігається в `localStorage` за ключем `site-language`.

Переклади знаходяться в `script.js` в об'єкті `translations`.

Щоб змінити текст:

1. Знайди потрібний ключ у `translations.uk` або `translations.en`.
2. Зміни значення.
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

1. Додай нову гілку в `translations`, наприклад `pl`.
2. Скопіюй структуру з `translations.uk`.
3. Переклади всі значення.
4. Додай кнопку в `.language-switch`:

```html
<button class="language-button" type="button" data-language="pl" aria-pressed="false">PL</button>
```

5. Додай перевірку нової мови в `getSavedLanguage()` / `setLanguage()`.

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
script.js
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

    # Кеш для статичних assets
    location ~* \.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public";
        try_files $uri =404;
    }

    # CSS/JS кешувати коротше, бо вони можуть часто оновлюватися
    location ~* \.(css|js)$ {
        expires 1h;
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

## Технічні нотатки

- Немає React, Next.js, Vue, Angular.
- Немає Bootstrap або Tailwind.
- Немає npm install.
- Немає backend і бази даних.
- Підходить для мінімального VPS: 1 CPU, 1 GB RAM, Nginx або Apache.
