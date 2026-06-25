# Assets

Папка `assets` призначена для легких статичних ресурсів сайту.

Зараз тут є:

```text
favicon.svg
og-image.svg
```

## Що можна додавати

- `favicon.svg` або інші favicon-файли;
- Open Graph image, наприклад `og-image.svg` або `og-image.png`;
- локальні шрифти, якщо вирішиш не використовувати системні fallback;
- невеликі іконки або зображення, якщо вони реально потрібні дизайну.

## Рекомендації

- Не додавай важкі зображення без потреби.
- Оптимізуй PNG/JPG/WebP перед завантаженням у репозиторій.
- Для favicon краще залишити SVG.
- Якщо додаєш Open Graph image, онови `og:image` в `index.html`.
- Не використовуй stock-photo style, якщо зображення не допомагає персональному сайту.

## Локальні шрифти

Якщо додаєш локальні шрифти, поклади файли сюди й підключи їх у `styles.css` через `@font-face`.

Приклад:

```css
@font-face {
  font-family: "Custom Font";
  src: url("assets/custom-font.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Не підключай багато ваг і стилів. Для цього сайту достатньо 2-3 font-weight.
