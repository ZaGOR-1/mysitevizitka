# Roadmap майбутніх покращень сайту-візитки

Цей документ фіксує актуальний план розвитку сайту після останнього аудиту.

Головна мета: зберегти сайт легким, статичним і придатним для мінімального VPS, але довести production-якість, документацію, кешування й UX до стабільного стану.

## 1. Поточний стан

Сайт уже має:

- повністю статичну структуру на HTML/CSS/Vanilla JS;
- UA/EN локалізацію;
- dark/light theme з `localStorage`;
- mobile menu;
- terminal block з CLI;
- copy email button;
- active nav link при скролі;
- scroll progress indicator;
- compact Skills layout;
- модульний Vanilla JS у `assets/js/`;
- GitHub technical snapshot без фейкової статистики;
- `robots.txt`;
- `sitemap.xml`;
- `site.webmanifest`;
- JSON-LD `Person`;
- `sw.js` для offline/cache;
- print CSS;
- `docs/nginx.conf.example`;
- self-hosted fonts у `assets/fonts/`.

## 2. Виконано під час останнього production-polish

### Service Worker cache strategy

Виконано.

Було: CSS/JS могли залипати в cache-first режимі.

Зроблено:

- додано явний `CACHE_VERSION`;
- HTML/CSS/JS/manifest/worker переведено на network-first strategy;
- fonts/images залишено cache-first;
- прибрано кешування Google Fonts;
- у core cache залишено тільки критичні файли;
- `.woff2` шрифти кешуються on demand, щоб install service worker не ламався через один відсутній font-файл.

### Self-host fonts

Виконано.

Зроблено:

- додано `assets/fonts/fonts.css`;
- додано локальні `.woff2` для `Manrope` і `JetBrains Mono`;
- прибрано `fonts.googleapis.com` і `fonts.gstatic.com` з `index.html`;
- CSP оновлено до `font-src 'self'`;
- `assets/fonts/fonts.css` підключено напряму в `index.html` перед `styles.css`.

### JSON-LD identity

Виконано.

Зроблено:

- `alternateName` узгоджено з EN-версією сайту: `Denys Zahorovskyi`.

### README / docs sync

Виконано.

Зроблено:

- README оновлено під реальну структуру;
- прибрано застарілий опис `.skill-group`;
- додано `sw.js`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `assets/fonts/`;
- описано service worker і cache versioning;
- оновлено секцію шрифтів;
- оновлено Nginx cache/CSP рекомендації.

## 3. Виконані фази з roadmap

### Фаза 1: Local audit checklist

Статус: виконано.

Пріоритет: P1

Ціль: мати короткий чек-лист перед кожним деплоєм.

Задачі:

1. Створено `docs/checklist.md`.
2. Додати перевірки:
   - `node --check` для кожного файлу в `assets/js/`;
   - `node --check .\sw.js`;
   - 360px, 414px, 768px, 1366px, 1440px;
   - mobile menu;
   - UA/EN;
   - dark/light theme;
   - copy email;
   - terminal commands;
   - active nav;
   - console errors;
   - `robots.txt`, `sitemap.xml`, `site.webmanifest`;
   - service worker update/cache sanity.

Критерії готовності:

- checklist короткий;
- його реально пройти перед `git push`;
- він не дублює весь README.

### Фаза 2: CLI autocomplete multiple matches

Статус: виконано.

Пріоритет: P2

Ціль: зробити terminal CLI трохи ближчим до справжнього shell.

Поточний стан:

- `Tab` уже доповнює команду, якщо збіг один.
- якщо збігів кілька, CLI показує список можливих команд.

Задачі:

1. При `c` + `Tab` показувати можливі збіги, наприклад `clear   contact`.
2. Не змінювати input, доки збіг не стане однозначним.
3. Локалізувати output для UA/EN.
4. Не ламати keyboard navigation.

Критерії готовності:

- один збіг доповнює команду;
- кілька збігів виводять підказку;
- input не змінюється при неоднозначному збігу.

## 4. Наступні фази

### Фаза 3: Terminal email command

Пріоритет: P3

Ціль: опціонально додати команду `email`, яка формує `mailto:` link.

Коментар:

Це приємна фіча, але не критична. Її варто робити тільки якщо terminal CLI хочеться розвивати далі.

### Фаза 4: Custom scrollbar

Пріоритет: P3

Ціль: легкий scrollbar polish для сторінки й `.terminal-cli`.

Важливо:

- не робити scrollbar надто декоративним;
- поважати системну поведінку;
- не погіршити доступність.

### Фаза 5: Developer keyboard shortcuts

Пріоритет: P3

Ціль: додати швидкі клавіші для технічного настрою сайту.

Можливі shortcuts:

- `g` + `h` -> GitHub;
- `g` + `c` -> Contact;
- `t` -> theme toggle;
- `l` -> language toggle.

Важливо:

- не перехоплювати клавіші, коли активний terminal input;
- не ламати стандартну навігацію браузера;
- можна відкласти, бо це не must-have.

## 5. Дизайн-напрям

Поточний дизайн уже відповідає концепції **Editorial Tech Portfolio + Terminal accents**.

Далі не треба:

- додавати великі hero-ілюстрації;
- додавати project cards;
- нарощувати декоративні анімації;
- перетворювати сайт на dashboard.

Що можна обережно покращити:

- зробити `github.com/ZaGOR-1` у technical snapshot клікабельним;
- розділити Skills на `практикую` / `знайомий з`, якщо треба чесніше показати рівень;
- додати дуже легкий scrollbar polish;
- перевірити light theme після кожних великих CSS змін.

## 6. Definition of Done для наступних змін

Перед завершенням кожної фази перевірити:

- `node --check` для кожного файлу в `assets/js/`;
- `node --check .\sw.js`;
- відсутність console errors у браузері;
- відсутність horizontal scroll на 360px;
- роботу UA/EN;
- роботу dark/light theme;
- роботу mobile menu;
- роботу terminal tabs і CLI;
- роботу copy email;
- актуальність README, якщо змінилася структура;
- відповідність стилю Editorial Tech Portfolio + Terminal accents.
