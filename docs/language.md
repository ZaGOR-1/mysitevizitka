Проаналізуй поточний статичний сайт-візитку в цьому репозиторії та додай підтримку двох мов: української та англійської.

## Контекст

Сайт уже існує і має мінімалістичний developer / terminal / editorial tech дизайн. Не потрібно робити редизайн з нуля.

Поточний стек:

* HTML
* CSS
* Vanilla JavaScript
* без backend
* без npm
* без React/Vue/Next
* без важких бібліотек

Потрібно реалізувати перемикач мови `UA / EN`, щоб користувач міг перемикати весь текст сайту між українською та англійською.

## Головна вимога

Реалізуй мультимовність максимально просто і легко, без сторонніх бібліотек.

Не додавай:

* i18next
* React
* npm-залежності
* backend
* JSON-файли, які треба окремо завантажувати через fetch, якщо це не потрібно
* складну систему роутингу

Найкращий варіант: зберігати переклади в `script.js` у звичайному об’єкті `translations`.

## Як має працювати

1. За замовчуванням сайт відкривається українською мовою.
2. У header поруч із перемикачем теми або біля навігації має бути компактний перемикач мови:

   * `UA`
   * `EN`
3. При натисканні на кнопку мови:

   * весь текст сайту змінюється;
   * активна мова візуально підсвічується;
   * значення зберігається в `localStorage`;
   * при оновленні сторінки вибрана мова зберігається.
4. Оновлюється атрибут:

   * `<html lang="uk">` для української
   * `<html lang="en">` для англійської
5. Оновлюється `document.title`.
6. Оновлюється meta description.
7. За можливості оновлюються Open Graph meta:

   * `og:title`
   * `og:description`
   * `twitter:title`
   * `twitter:description`

## HTML-структура

У `index.html` додай `data-i18n` атрибути для всіх текстових елементів, які треба перекладати.

Приклад:

```html
<h1 data-i18n="hero.name">Denis</h1>
<p data-i18n="hero.subtitle">Студент Software Engineering...</p>
<a href="#contact" data-i18n="hero.contactButton">Зв'язатися</a>
```

Для елементів, де потрібно перекладати `aria-label`, `title`, `placeholder` або інші атрибути, використовуй окремий механізм.

Наприклад:

```html
<button 
  class="theme-toggle" 
  data-i18n-aria-label="theme.toggleLabel"
  aria-label="Перемкнути тему">
</button>
```

## JavaScript-логіка

У `script.js` створи об’єкт перекладів приблизно такої структури:

```js
const translations = {
  uk: {
    meta: {
      title: "Denis — сайт-візитка програміста",
      description: "Персональний сайт студента Software Engineering..."
    },
    nav: {
      about: "Про мене",
      focus: "Фокус",
      skills: "Навички",
      github: "GitHub",
      contact: "Контакти"
    },
    hero: {
      status: "available for learning projects",
      role: "software engineering student / backend & frontend basics",
      name: "Denis",
      title: "Студент Software Engineering, який вивчає веброзробку, backend, Linux і автоматизацію.",
      description: "Пишу простий код, розбираюся в серверах і поступово збираю власний шлях у розробці.",
      githubButton: "GitHub",
      contactButton: "Зв'язатися"
    }
  },
  en: {
    meta: {
      title: "Denis — developer portfolio",
      description: "Personal website of a Software Engineering student..."
    },
    nav: {
      about: "About",
      focus: "Focus",
      skills: "Skills",
      github: "GitHub",
      contact: "Contact"
    },
    hero: {
      status: "available for learning projects",
      role: "software engineering student / backend & frontend basics",
      name: "Denis",
      title: "Software Engineering student learning web development, backend, Linux and automation.",
      description: "I write simple code, explore servers and gradually build my own path in software development.",
      githubButton: "GitHub",
      contactButton: "Contact me"
    }
  }
};
```

Структуру можеш адаптувати під реальний HTML сайту.

Потрібно реалізувати функції:

```js
function getSavedLanguage() {}
function setLanguage(lang) {}
function updateTextContent(lang) {}
function updateMetaTags(lang) {}
function updateLanguageButtons(lang) {}
```

Або іншу чисту й зрозумілу структуру, але код має бути простим.

## Що саме треба перекласти

Переклади весь видимий текст сайту:

* navigation
* hero
* status badges
* terminal/code block
* About
* Quick profile cards
* Focus section
* Skills section headings/categories, якщо вони мають текст
* GitHub section
* Contact / Links
* Footer
* buttons
* aria-labels
* meta title
* meta description
* Open Graph / Twitter descriptions

## Важливо щодо terminal/code block

Якщо на сайті є terminal або code card, зроби так, щоб його текст теж адаптувався під мову.

Наприклад для української:

```js
const developer = {
  name: "Denis",
  role: "Software Engineering Student",
  focus: ["Backend", "Web", "Linux"],
  learning: ["Laravel", "Symfony", "VPS Deploy"]
};
```

Для англійської можна залишити майже так само, бо це code-style блок.

Головне — не ламати layout і не створювати горизонтальний скрол.

## Дизайн перемикача мови

Перемикач мови має бути мінімалістичним і відповідати поточному дизайну.

Варіанти:

```text
UA / EN
```

або дві маленькі кнопки:

```text
UA  EN
```

Вимоги:

* compact
* keyboard accessible
* має focus state
* active state для поточної мови
* не має ламати header на мобільних
* має добре виглядати і в dark theme, і в light theme

## localStorage

Зберігай мову так:

```js
localStorage.setItem("site-language", lang);
```

При завантаженні сторінки:

1. перевір `localStorage`;
2. якщо там є `uk` або `en` — використовуй її;
3. якщо немає — використовуй `uk` як дефолт.

Не треба автоматично визначати мову браузера, якщо це ускладнює код. Дефолт — українська.

## Accessibility

Перемикач мови має бути доступним:

* використовуй `<button>`, а не просто `<div>`;
* додай `aria-label`;
* додай `aria-pressed` або інший зрозумілий active-state;
* зроби нормальний focus-visible стиль;
* переклади aria-label для кнопки теми, меню і language switcher.

## SEO

Оскільки це одна сторінка без окремих URL для мов, просто оновлюй:

* `<html lang="">`
* `<title>`
* `<meta name="description">`
* Open Graph title/description
* Twitter title/description

Не додавай складний роутинг типу `/en` і `/uk`, якщо це сильно ускладнить сайт.

## README.md

Онови README.md і додай секцію:

```md
## Мультимовність

Сайт підтримує українську та англійську мови.  
Переклади знаходяться в `script.js` в об’єкті `translations`.

Щоб змінити текст:
1. знайди потрібний ключ у `translations.uk` або `translations.en`;
2. зміни значення;
3. перевір перемикач мови на сайті.
```

Також додай коротку інструкцію, як додати третю мову в майбутньому.

## Заборони

Не змінюй дизайн повністю.

Не додавай:

* React
* Vue
* Angular
* Next.js
* Vite
* npm
* i18next
* Bootstrap
* Tailwind
* важкі бібліотеки
* backend

Не додавай окрему секцію проєктів.

Не ламай:

* перемикач теми
* мобільну навігацію
* reveal-анімації
* responsive layout
* accessibility
* SEO meta tags

## Фінальна перевірка

Після реалізації перевір:

1. Сайт відкривається українською за замовчуванням.
2. Кнопка `EN` перемикає весь текст на англійську.
3. Кнопка `UA` повертає українську.
4. Вибір мови зберігається після перезавантаження сторінки.
5. `<html lang>` змінюється правильно.
6. `document.title` змінюється.
7. Meta description змінюється.
8. Перемикач теми продовжує працювати.
9. Мобільне меню не зламалось.
10. Немає горизонтального скролу.
11. Весь текст виглядає нормально на desktop і mobile.
12. README оновлений.

## Очікуваний результат

Після змін сайт має мати просту, легку й акуратну підтримку української та англійської мов без ускладнення архітектури.

Змінюй тільки потрібні файли:

* `index.html`
* `styles.css`
* `script.js`
* `README.md`

Після завершення коротко поясни, що саме було змінено.
