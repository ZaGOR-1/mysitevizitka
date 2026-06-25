# Denis Portfolio

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

Шукай `Denis` у `index.html`:

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

Там можна змінити текст про себе, навчання й інтереси.

### Навички

Секція Skills починається з:

```html
<section class="section" id="skills" aria-labelledby="skills-title">
```

Навички оформлені як список:

```html
<li class="tag">#php</li>
<li class="tag">#linux</li>
```

Можна додавати, видаляти або перейменовувати `li`.

### GitHub

Заміни всі входження:

```text
https://github.com/username
github.com/username
```

на своє посилання.

### Telegram

Заміни:

```text
https://t.me/username
```

### LinkedIn

Заміни:

```text
https://linkedin.com/in/username
```

### Email

Заміни:

```text
your.email@example.com
mailto:your.email@example.com
```

на свій email.

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

Шрифти задані без CDN, через системні fallback:

```css
--font-sans: "Space Grotesk", "Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "IBM Plex Mono", "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
```

Якщо потрібні локальні шрифти, поклади їх в `assets/` і підключи через `@font-face`.

### Відступи та radius

Головні змінні:

```css
--space-sm: 0.75rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2.25rem;
--section-padding: clamp(4rem, 9vw, 7rem);

--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
```

## JavaScript

Файл `script.js` відповідає тільки за легку інтерактивність:

- перемикач dark/light theme;
- збереження теми в `localStorage`;
- mobile menu;
- smooth scroll;
- reveal animation;
- автоматичний рік у footer.

Сайт залишається читабельним навіть якщо JavaScript не завантажиться.

## Деплой на VPS через Nginx

Приклад для Ubuntu/Debian VPS:

```bash
sudo apt update
sudo apt install nginx git -y

cd /var/www
sudo git clone https://github.com/username/portfolio.git portfolio
sudo chown -R www-data:www-data /var/www/portfolio
```

Створи конфіг:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Приклад Nginx-конфігу:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Активуй конфіг:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Після цього сайт має відкриватися за доменом, який вказаний у `server_name`.

## HTTPS через Let's Encrypt

Встанови Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Отримай сертифікат:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

Перевір автоматичне оновлення:

```bash
sudo certbot renew --dry-run
```

## Як оновлювати сайт через Git

На VPS:

```bash
cd /var/www/portfolio
sudo git pull
sudo systemctl reload nginx
```

Якщо змінювали права доступу або власника:

```bash
sudo chown -R www-data:www-data /var/www/portfolio
```

## Що замінити перед публікацією

- `https://github.com/username`
- `github.com/username`
- `https://t.me/username`
- `https://linkedin.com/in/username`
- `your.email@example.com`
- `https://example.com`
- `example.com`
- `assets/og-image.svg`, якщо зміниш Open Graph image

## Технічні нотатки

- Немає React, Next.js, Vue, Angular.
- Немає Bootstrap або Tailwind.
- Немає npm install.
- Немає backend і бази даних.
- Підходить для мінімального VPS: 1 CPU, 1 GB RAM, Nginx або Apache.
