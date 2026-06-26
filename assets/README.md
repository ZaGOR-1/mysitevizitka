# Assets

Папка `assets` призначена для легких статичних ресурсів сайту.

Зараз тут є:

```text
favicon.svg
og-image.svg
og-image.png
fonts/
  fonts.css
  *.woff2
```

## Що можна додавати

- `favicon.svg` або інші favicon-файли;
- Open Graph image, наприклад `og-image.png` або `og-image.svg`;
- локальні шрифти у форматі `.woff2`;
- невеликі іконки або зображення, якщо вони реально потрібні дизайну.

## Рекомендації

- Не додавай важкі зображення без потреби.
- Оптимізуй PNG/JPG/WebP перед завантаженням у репозиторій.
- Для favicon краще залишити SVG.
- Якщо додаєш Open Graph image, онови `og:image` в `index.html`.
- Не використовуй stock-photo style, якщо зображення не допомагає персональному сайту.

## Локальні шрифти

Локальні шрифти лежать у `assets/fonts/`:

```text
assets/fonts/fonts.css
assets/fonts/*.woff2
```

Файл `fonts.css` містить `@font-face` для `Manrope` і `JetBrains Mono`, а `styles.css` підключає його локальним `@import`.

Приклад:

```css
@font-face {
  font-family: "Custom Font";
  src: url("custom-font.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Не підключай багато нових ваг і стилів без потреби. Якщо змінюєш файли шрифтів, онови список assets у `sw.js`.
