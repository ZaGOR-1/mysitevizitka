Проаналізуй поточний статичний сайт-візитку у цьому репозиторії та покращи його дизайн без зміни основної ідеї.

## Головна мета

Поточний сайт виглядає непогано, але занадто порожньо: багато вільного місця, мало інформаційної щільності, секції розтягнуті, grid-фон надто помітний. Потрібно зробити сайт більш завершеним, сучасним і змістовним, але не перевантаженим.

Залишити стиль:

* мінімалістичний
* сучасний
* developer / terminal / editorial tech vibe
* темна тема за замовчуванням
* без React, без фреймворків, без npm
* тільки HTML, CSS, Vanilla JS
* легкий сайт для VPS

## Що не можна робити

Не додавати окрему секцію з картками проєктів.

Проєкти мають залишатися представлені через GitHub-блок, бо всі роботи будуть на GitHub.

Не робити:

* neon cyberpunk
* надмірний glassmorphism
* великі glow-ефекти
* шаблонний landing page
* купу випадкових декоративних елементів
* важкі бібліотеки
* CDN-бібліотеки без потреби

## Що потрібно покращити

### 1. Зменшити пустоту

Зменшити вертикальні відступи секцій приблизно на 20–30%, щоб сайт не здавався порожнім.

Переглянути CSS-змінні:

* `--section-padding`
* `.hero`
* `.github-section`
* `.social-section`

Зробити spacing більш компактним, але не тісним.

### 2. Послабити grid-фон

Поточний grid-фон занадто помітний, особливо коли контенту мало.

Зробити його більш делікатним:

* зменшити opacity/border color
* можна зробити grid тільки як background-layer через `body::before`
* додати слабкий radial-gradient у hero
* фон має підтримувати дизайн, а не домінувати

### 3. Покращити Hero

Hero має виглядати більш завершено.

Додати компактний блок quick facts / profile facts:

* `2nd year SE student`
* `Web / Backend`
* `Linux & VPS`
* `Open to learning projects`

Ці елементи мають бути маленькими, акуратними, не як великі картки.

Terminal-блок зробити більш змістовним. Наприклад:

```js
const developer = {
  name: "Denis",
  role: "Software Engineering Student",
  focus: ["Backend", "Web", "Linux", "Automation"],
  currentlyLearning: ["Laravel", "Symfony", "VPS Deployment"]
};
```

Стежити, щоб terminal-блок не створював горизонтальний скрол на звичайному екрані. Якщо треба — скоротити рядки або дозволити нормальне перенесення.

### 4. Покращити About

Поточний текст нормальний, але секція виглядає порожньо.

Додати поруч або під текстом компактний блок “Quick profile”:

* `Education: Software Engineering, 2nd year`
* `University: Zhytomyr Polytechnic`
* `Focus: Web, Backend, Linux`
* `Goal: grow into a practical developer`

Це має виглядати як акуратний technical profile, а не як резюме-таблиця.

### 5. Додати секцію Now / Focus

Додати невелику секцію після About:

Назва: `02 / Now` або `02 / Focus`

Зміст:

* що я зараз вивчаю
* над чим практикуюся
* які напрямки мене цікавлять

Приклад блоків:

* `Backend basics` — PHP, Laravel, Symfony, APIs
* `Linux & VPS` — Ubuntu, Nginx/Apache, deployment
* `Automation` — scripts, Telegram bots, small tools

Це не секція проєктів. Це секція про напрямки розвитку.

### 6. Переробити Skills

Не показувати навички одним довгим списком тегів.

Зробити skills by category:

* Frontend: HTML, CSS, JavaScript
* Backend: PHP, Laravel, Symfony, Python
* Databases: MySQL, SQLite
* Tools & Server: Git, GitHub, Linux, Ubuntu, VPS, Nginx, Apache
* Automation: Telegram bots, scripts

Кожна категорія має бути маленькою soft-card або compact row. Дизайн має залишатися мінімалістичним.

### 7. Покращити GitHub-блок

GitHub-блок має бути не просто великою карткою з одним посиланням.

Додати в нього короткий список, що можна знайти на GitHub:

* student projects
* web applications
* backend experiments
* Telegram bots
* automation scripts
* Linux/VPS notes

Не створювати окремі картки проєктів.

GitHub-блок має бути головним CTA після навичок.

### 8. Об’єднати Social і Contact або зробити їх компактнішими

Зараз соцмережі та контакти займають багато простору.

Можна зробити одну секцію:

`Contact / Links`

У ній:

* короткий текст
* email
* кнопка “Написати мені”
* компактні links: GitHub, Telegram, LinkedIn, Email

Це зменшить пустоту внизу сторінки.

### 9. Покращити візуальну ієрархію

Додати більше дрібної структури:

* section numbering
* маленькі labels
* тонкі dividers
* compact meta rows
* command-like акценти типу `~/portfolio`, `status: learning`, `focus: backend`

Але не перевантажувати.

### 10. Перевірити адаптивність

Після змін перевірити:

* desktop
* tablet
* mobile
* чи немає горизонтального скролу
* чи terminal-блок нормально виглядає
* чи теги/картки не ламаються
* чи theme switcher працює
* чи навігація працює

## Очікуваний результат

Сайт має виглядати:

* менш порожнім
* більш завершеним
* більш змістовним
* все ще мінімалістичним
* не шаблонним
* як персональна сторінка junior developer / software engineering student
* легким і швидким

Не змінюй стек. Не додавай backend. Не додавай npm. Не додавай фреймворки.
