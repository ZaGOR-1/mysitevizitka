Проаналізуй поточний статичний сайт-візитку і зроби фінальне покращення типографіки та продакшн-підготовки.

## Контекст

Сайт уже має хороший мінімалістичний developer / terminal / editorial tech дизайн. Не потрібно робити редизайн з нуля.

Зараз у `index.html` підключені Google Fonts:

* Space Grotesk
* JetBrains Mono

Але сайт переважно українською мовою, тому потрібно перевірити кирилицю. Якщо Space Grotesk не дає стабільної гарної кириличної типографіки, заміни його на шрифт, який добре підходить для українського тексту.

## Що потрібно зробити

### 1. Замінити основний шрифт

Використай таку пару шрифтів:

* `Manrope` — основний sans-serif для body, заголовків, кнопок і українського тексту
* `JetBrains Mono` — для terminal-блоку, code, badges, labels, section numbers, small tech accents

Підключи Google Fonts акуратно:

* `preconnect` до `fonts.googleapis.com`
* `preconnect` до `fonts.gstatic.com` з `crossorigin`
* один Google Fonts link
* обов’язково `display=swap`

Підключи тільки потрібні ваги:

* Manrope: `400`, `500`, `600`, `700`
* JetBrains Mono: `400`, `500`, `600`

Не підключай зайві шрифти і зайві ваги.

### 2. Оновити CSS-змінні

У `styles.css` онови змінні шрифтів приблизно так:

```css
:root {
  --font-sans: "Manrope", "Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}
```

Перевір, щоб:

* український текст виглядав цілісно;
* заголовки не стали занадто “звичайними”;
* terminal/code/badges залишилися в моноширинному стилі;
* сайт не втратив developer vibe.

### 3. Не змінювати дизайн повністю

Не переробляй:

* структуру секцій;
* кольори радикально;
* layout;
* hero;
* Focus;
* Skills;
* GitHub-блок;
* Contact-блок.

Це точкова правка типографіки, а не редизайн.

### 4. Перевірити Open Graph

Зараз `og:image` веде на SVG. Для кращої сумісності підготуй варіант `assets/og-image.png` розміром `1200x630`, якщо це можливо в межах проєкту.

Якщо PNG не генеруєш, хоча б залиш у README примітку, що для продакшну бажано мати PNG Open Graph image.

### 5. Перевірити продакшн-безпеку

У репозиторії можуть бути файли:

* `.git/`
* `promt.md`
* `plan.md`
* `fonts.md`
* `update.md`
* `PROMPT_PLAN_REVIEW.md`
* `AGENTS.md`

Вони нормальні для репозиторію, але не обов’язково мають бути доступні публічно на сайті.

Додай у README рекомендацію для деплою:

Публічно на сервер краще викладати тільки:

```text
index.html
styles.css
script.js
assets/
```

Або закрити службові файли через Nginx:

```nginx
location ~ /\.(?!well-known) {
    deny all;
}

location ~* \.(md|zip|log|env)$ {
    deny all;
}
```

### 6. Перевірити посилання

Перевір, що у `index.html` і `README.md` немає старих placeholder-значень:

* `username`
* `your.email@example.com`
* `example.com`

Якщо є — заміни або винеси в README як приклад.

### 7. Перевірити мобільну версію

Після змін перевір:

* 360px
* 390px
* 414px
* 768px
* desktop

Особливо перевір:

* hero;
* terminal-блок;
* navigation menu;
* Contact / Links;
* GitHub-блок;
* чи немає горизонтального скролу.

## Заборони

Не додавай:

* React
* Vite
* Tailwind
* Bootstrap
* npm-залежності
* іконкові бібліотеки
* зайвий JavaScript
* нові великі секції
* секцію окремих проєктів

## Очікуваний результат

Сайт має залишитися легким, мінімалістичним і сучасним, але типографіка має краще працювати з українською мовою.

Після змін коротко напиши:

* які файли змінено;
* який шрифт став основним;
* чи залишився JetBrains Mono для code/terminal;
* чи немає проблем із мобільною версією.
