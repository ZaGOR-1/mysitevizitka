# Roadmap покращень сайту-візитки

## 0. Мета документа

Цей файл фіксує подальші покращення сайту по фазах і пріоритетах.

Головна ідея: розвивати сайт обережно, без перетворення його на важкий landing page або dashboard. Усі покращення мають зберігати стиль **Editorial Tech Portfolio + Terminal accents**, статичність, легкість і відсутність фреймворків.

## 1. Пріоритети

### P1 — зробити першим

Це найкорисніші зміни з малим ризиком і високою практичною цінністю.

- Додати кнопку копіювання email.
- Доробити terminal CLI командами `contact` і `github`.
- Додати SEO-файли `robots.txt`, `sitemap.xml` і JSON-LD `Person`.
- Переробити GitHub-блок у більш корисний technical snapshot.
- Зробити Skills компактнішими й менш схожими на набір карток.

### P2 — зробити після P1

Це зміни для кращого контенту, UX і візуального балансу.

- Додати компактний блок "Що я зараз вчу / роблю".
- Додати осмислений availability/status block.
- Підсилити editorial-відчуття через списки, лінії й таблиці замість зайвих карток.
- Додати active nav link при скролі.
- Дополірувати light theme.

### P3 — опціонально

Це корисно, але не критично для першої якісної версії.

- Додати `site.webmanifest`.
- Додати production hygiene templates: `nginx.conf.example` або `.htaccess`.
- Додати `docs/checklist.md` для локального аудиту перед деплоєм.
- Переглянути вагу JS після всіх інтерактивних змін.

## 2. Фаза 1: Контент і чесне позиціонування

### Пріоритет

P2

### Ціль

Додати більше живого контексту про поточний розвиток без створення окремої секції з проєкт-картками.

### Задачі

1. Додати компактний блок "Що я зараз вчу / роблю".
2. Не робити його великим окремим landing-секцією.
3. Подати його як 3-4 короткі рядки або compact list.

### Приклад контенту

```text
Laravel basics
Linux deploy
Telegram bots
SQL practice
```

### Варіант UA

```text
Зараз вчу / практикую
Laravel basics
Linux deploy
Telegram bots
SQL practice
```

### Варіант EN

```text
Currently learning / practicing
Laravel basics
Linux deploy
Telegram bots
SQL practice
```

### Де реалізовувати

- `index.html` — HTML-блок.
- `script.js` — переклади UA/EN.
- `styles.css` — компактний editorial-style layout.

### Критерії готовності

- Блок не виглядає як секція проєктів.
- Текст звучить чесно й без перебільшення.
- На мобільному не створює зайвий візуальний шум.

### Статус

Виконано. Блок "Зараз вчу / практикую" додано в секцію `Фокус` як компактний editorial list без створення окремої секції з проєктами.

## 3. Фаза 2: Availability / Status block

### Пріоритет

P2

### Ціль

Зробити відкритість до практики й навчальних проєктів більш зрозумілою для відвідувача.

### Задачі

1. Додати компактний status block біля contact або в hero quick facts.
2. Показати, до чого саме є відкритість.
3. Не перетворювати блок на HR-резюме.

### Приклад контенту

```text
open to: practice / internship / learning projects
location: Ukraine
format: remote / part-time learning collaboration
```

### Варіант UA

```text
відкритий до: практики / стажування / навчальних проєктів
локація: Україна
формат: remote / part-time learning collaboration
```

### Варіант EN

```text
open to: practice / internship / learning projects
location: Ukraine
format: remote / part-time learning collaboration
```

### Де реалізовувати

- `index.html` — у contact або hero.
- `script.js` — переклади.
- `styles.css` — оформлення як compact rows або definition list.

### Критерії готовності

- Відвідувач швидко розуміє, як і з чим можна звертатися.
- Блок не дублює повністю contact text.
- У UA-версії технічні слова можуть залишатися англійською там, де це природно.

### Статус

Виконано. Availability/status block додано в секцію `Контакти` як компактний definition list з рядками `відкритий до`, `локація`, `формат`.

## 4. Фаза 3: GitHub-блок як technical snapshot

### Пріоритет

P1

### Ціль

Зробити GitHub-блок більш чесним, корисним і менш декоративним.

### Поточна проблема

Декоративний activity calendar виглядає цікаво, але може забирати увагу з головного CTA. Якщо він виглядає як справжня статистика, це створює ризик недовіри.

### Задачі

1. Зменшити візуальну вагу activity block.
2. Зробити головними: текст, GitHub URL і CTA.
3. Додати technical snapshot без API й без фейкових метрик.

### Приклад блоку

```text
github.com/ZaGOR-1
learning projects · bots · scripts · server notes
last focus: web/backend/linux
```

### Варіант UA

```text
github.com/ZaGOR-1
навчальні проєкти · bots · scripts · server notes
останній фокус: web/backend/linux
```

### Варіант EN

```text
github.com/ZaGOR-1
learning projects · bots · scripts · server notes
last focus: web/backend/linux
```

### Де реалізовувати

- `index.html` — замінити або спростити поточний GitHub activity block.
- `script.js` — переклади.
- `styles.css` — зробити snapshot менш важким за CTA.

### Критерії готовності

- GitHub CTA залишається головним.
- Немає фейкових чисел, дат або статистики.
- Блок виглядає технічно, але спокійно.

### Статус

Виконано. Декоративний activity calendar замінено на компактний GitHub technical snapshot з рядками `profile`, `content`, `останній фокус`. JS-генератор календаря та пов'язані CSS-стилі прибрано.

## 5. Фаза 4: Terminal CLI як корисна мікрофіча

### Пріоритет

P1

### Ціль

Зробити terminal CLI не тільки декоративним, а й корисним способом швидко отримати контакт або GitHub.

### Команди

```text
help
about
skills
contact
github
clear
```

### Задачі

1. Додати команду `contact`.
2. Додати команду `github`.
3. Оновити `help`, щоб показував усі доступні команди.
4. Перекласти output для UA/EN.
5. Переконатися, що CLI не ламає доступність і не створює horizontal scroll.

### Очікувана поведінка

Команда `contact` показує:

```text
Email: ran31276@gmail.com
Telegram: https://t.me/Denis_Zagor
LinkedIn: https://www.linkedin.com/in/denis-zagorovskiy-a23b05410
```

Команда `github` показує:

```text
GitHub: https://github.com/ZaGOR-1
Focus: learning projects, bots, scripts, server notes
```

### Де реалізовувати

- `script.js` — CLI engine і переклади.
- `index.html` — за потреби aria-label або helper text.
- `styles.css` — за потреби стилі output.

### Критерії готовності

- `help`, `about`, `skills`, `contact`, `github`, `clear` працюють.
- Немає console errors.
- Усі тексти локалізовані.
- Сайт залишається читабельним без JavaScript.

### Статус

Виконано. У terminal CLI додано команди `contact` і `github`, оновлено `help` для UA/EN, а contact/GitHub output виводиться як акуратні terminal links.

## 6. Фаза 5: Copy email button

### Пріоритет

P1

### Ціль

Додати маленьку, практичну дію поруч з email.

### Задачі

1. Додати кнопку біля email.
2. По кліку копіювати email у clipboard.
3. Показувати короткий feedback: `copied` / `скопійовано`.
4. Додати fallback, якщо Clipboard API недоступний.
5. Додати `aria-live` для повідомлення.

### Приклад UI

```text
ran31276@gmail.com  [copy]
```

Після кліку:

```text
copied
```

### Варіант UA

```text
копіювати
скопійовано
```

### Варіант EN

```text
copy
copied
```

### Де реалізовувати

- `index.html` — кнопка й `aria-live` feedback.
- `script.js` — clipboard logic і переклади.
- `styles.css` — компактний button style.

### Критерії готовності

- Кнопка доступна з клавіатури.
- Feedback видимий і зрозумілий.
- Немає помилки, якщо clipboard заблокований.

### Статус

Виконано. Біля email у секції `Контакти` додано кнопку `копіювати` / `copy`, `aria-live` feedback і fallback для копіювання, якщо Clipboard API недоступний.

## 7. Фаза 6: Компактніший Skills layout

### Пріоритет

P1

### Ціль

Зробити Skills дорослішими, менш схожими на dashboard cards і більш editorial.

### Поточна ідея

Замість великих skill cards використати compact table / rows.

### Приклад layout

```text
Frontend   HTML · CSS · JavaScript
Backend    PHP · Laravel · Symfony · Python
Server     Linux · Ubuntu · VPS · Nginx
Database   MySQL · SQLite
```

### Задачі

1. Переробити `.skill-groups` у compact rows.
2. Зменшити кількість framed/card-like блоків.
3. Зберегти читабельність на мобільному.
4. Не додавати іконки або важкі assets.

### Де реалізовувати

- `index.html` — структура skills.
- `script.js` — переклади, якщо зміниться текст.
- `styles.css` — compact row/table styling.

### Критерії готовності

- Skills читаються швидше.
- Вигляд ближчий до editorial tech portfolio.
- Немає горизонтального scroll на 360px.

### Статус

Виконано. Секцію `Навички` перероблено з card-like `.skill-groups` у компактний `dl.skill-table` з editorial rows: категорія зліва, технології справа.

## 8. Фаза 7: Editorial design polish

### Пріоритет

P2

### Ціль

Підсилити editorial-відчуття й зменшити враження dashboard/card UI.

### Задачі

1. Переглянути кількість bordered cards.
2. Частину блоків замінити на:
   - тонкі dividers;
   - compact rows;
   - definition lists;
   - text-led sections.
3. Зменшити тіні там, де вони не несуть змісту.
4. Зробити GitHub activity другорядним.

### Що не робити

- Не додавати великі hero-ілюстрації.
- Не додавати heavy animation.
- Не робити neon/cyberpunk.
- Не створювати секцію з project cards.

### Критерії готовності

- Сайт виглядає спокійніше й дорожче.
- Основні CTA не губляться.
- Візуальні акценти не сперечаються між собою.

### Статус

Виконано. `profile-panel` перероблено у definition rows, `focus-item` став текстовим блоком із тонкою верхньою лінією без тіней, GitHub CTA отримав легший surface без важкої тіні, а contact block оформлено як editorial band замість окремої картки.

## 9. Фаза 8: Мікроінтеракції

### Пріоритет

P2

### Ціль

Додати дрібні взаємодії, які допомагають користувачу, але не перевантажують сайт.

### Задачі

1. Active nav link при скролі.
2. Легкий hover/focus для terminal tabs.
3. Copy email feedback.
4. Плавне оновлення theme/language без layout shift.

### Де реалізовувати

- `script.js` — IntersectionObserver для active nav link.
- `styles.css` — active state і transitions.
- `index.html` — `aria-current="page"` або `aria-current="true"` для активного anchor.

### Критерії готовності

- Активний пункт nav відповідає поточній секції.
- У `prefers-reduced-motion: reduce` немає зайвих анімацій.
- Фокус-стани залишаються видимими.

### Статус

Виконано. Додано active nav link зі встановленням `aria-current="true"` через `IntersectionObserver`, м'який hover/focus/active state для terminal tabs, а copy email feedback і стабільні розміри theme/language controls збережено без layout shift.

## 10. Фаза 9: Light theme polish

### Пріоритет

P2

### Ціль

Зробити світлу тему такою ж продуманою, як dark theme.

### Поточна проблема

Dark theme виглядає сильніше. Light theme може відчуватися більш generic через чистіші surface-блоки й контрастну панельність.

### Задачі

1. Зробити light background м'якшим.
2. Зменшити відчуття білих карток.
3. Перевірити border opacity.
4. Перевірити accent contrast.
5. Пройти 360px, 414px, 768px, 1366px, 1440px.

### Можливий напрям палітри

```css
--color-bg: #f7f8f6;
--color-bg-soft: #eef2ef;
--color-surface: #fbfcfa;
--color-surface-soft: #f2f5f2;
```

Це лише напрям, не обов'язкова фінальна палітра.

### Критерії готовності

- Light theme не виглядає як naive inversion.
- Контраст достатній.
- Блоки не здаються надто яскравими або пластиковими.

## 11. Фаза 10: SEO і structured data

### Пріоритет

P1

### Ціль

Додати базові SEO-файли й structured data без сервера, backend або analytics.

### Задачі

1. Додати `robots.txt`.
2. Додати `sitemap.xml`.
3. Додати JSON-LD `Person` в `index.html`.
4. Перевірити домен `https://about.me.hotzagor.tech`.
5. Оновити README, якщо структура файлів зміниться.

### `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://about.me.hotzagor.tech/sitemap.xml
```

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://about.me.hotzagor.tech/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### JSON-LD Person

Поля:

- `@type: Person`;
- `name`;
- `alternateName`;
- `url`;
- `email`;
- `sameAs`;
- `jobTitle`;
- `knowsAbout`;
- `alumniOf` або `affiliation`, якщо формулювання доречне.

### Критерії готовності

- `robots.txt` відкривається з кореня сайту.
- `sitemap.xml` відкривається з кореня сайту.
- JSON-LD валідний.
- Немає приватної або зайвої інформації.

## 12. Фаза 11: `site.webmanifest`

### Пріоритет

P3

### Ціль

Додати мінімальний manifest для акуратнішого mobile/browser preview.

### Задачі

1. Додати `site.webmanifest`.
2. Підключити його в `index.html`.
3. Перевірити `name`, `short_name`, `theme_color`, `background_color`.
4. Не додавати важкі icons без потреби.

### Приклад

```json
{
  "name": "Денис Загоровський Portfolio",
  "short_name": "Denys",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0d0f12",
  "theme_color": "#0d0f12"
}
```

### Критерії готовності

- Manifest валідний JSON.
- Не збільшує сайт важкими assets.
- README оновлений, якщо файл додається до структури.

## 13. Фаза 12: Production hygiene

### Пріоритет

P3

### Ціль

Підготувати сайт до акуратного деплою на VPS, щоб службові файли не віддавалися публічно.

### Задачі

1. Додати `docs/nginx.conf.example` або оновити README з готовим production config.
2. Опціонально додати `.htaccess.example` для Apache.
3. Зафіксувати список файлів, які не бажано віддавати з webroot:
   - `.git/`;
   - `README.md`;
   - `AGENTS.md`;
   - `docs/`;
   - `*.zip`;
   - `*.log`;
   - `.env`.

### Критерії готовності

- Є готовий приклад Nginx або Apache-захисту.
- У README є команди перевірки через `curl -I`.
- Немає вимоги додавати backend або build step.

## 14. Фаза 13: Local audit checklist

### Пріоритет

P3

### Ціль

Додати простий checklist перед деплоєм, щоб швидко перевіряти сайт після змін.

### Файл

```text
docs/checklist.md
```

### Що включити

- перевірка 360px;
- перевірка 414px;
- перевірка 768px;
- перевірка 1366px;
- перевірка 1440px;
- `node --check .\script.js`;
- перевірка console errors;
- перевірка links;
- перевірка theme switcher;
- перевірка language switcher;
- перевірка copy email;
- перевірка terminal commands;
- перевірка `robots.txt`;
- перевірка `sitemap.xml`.

### Критерії готовності

- Checklist короткий і практичний.
- Його реально можна пройти перед `git push`.
- Він не дублює весь README.

## 15. Рекомендований порядок реалізації

1. **P1 / Фаза 5:** copy email button.
2. **P1 / Фаза 4:** terminal CLI команди `contact` і `github`.
3. **P1 / Фаза 10:** `robots.txt`, `sitemap.xml`, JSON-LD `Person`.
4. **P1 / Фаза 6:** компактніший Skills layout.
5. **P1 / Фаза 3:** редизайн GitHub-блоку в technical snapshot.
6. **P2 / Фаза 1:** блок "Що я зараз вчу / роблю".
7. **P2 / Фаза 2:** availability/status block.
8. **P2 / Фаза 7:** editorial design polish.
9. **P2 / Фаза 8:** active nav link і micro-interactions.
10. **P2 / Фаза 9:** light theme polish.
11. **P3 / Фаза 11:** `site.webmanifest`.
12. **P3 / Фаза 12:** production hygiene templates.
13. **P3 / Фаза 13:** local audit checklist.

## 16. Загальні обмеження для всіх фаз

- Не додавати React, Vue, Angular, Next.js або інші фреймворки.
- Не додавати Tailwind, Bootstrap або CDN UI libraries.
- Не додавати npm-залежності.
- Не додавати backend, database, CMS, analytics або tracking.
- Не створювати секцію з окремими project cards.
- Не додавати важкі assets.
- Усі зміни мають працювати як статичний сайт.
- Контент має залишатися чесним і без перебільшення.
- Дизайн має залишатися мінімалістичним, технічним і спокійним.

## 17. Definition of Done для кожної фази

Перед завершенням кожної фази перевірити:

- `node --check .\script.js`;
- відсутність console errors у браузері;
- відсутність horizontal scroll на 360px;
- роботу UA/EN перемикача;
- роботу dark/light theme;
- видимі focus states;
- відсутність зламаних internal anchors;
- оновлення README, якщо змінилася структура або інструкції;
- відповідність стилю Editorial Tech Portfolio + Terminal accents.
