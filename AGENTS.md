# AGENTS.md

## Project context

This repository is a lightweight, fully static one-page developer portfolio / personal site.

Primary source documents:

- `docs/promt.md` — main product/design prompt and final requirements.
- `docs/plan.md` — implementation plan and checklist.

Before making changes, read both files and follow them unless the user explicitly gives newer instructions.

## Non-negotiable requirements

- Use only HTML5, CSS3, and Vanilla JavaScript.
- Do not add React, Next.js, Vue, Angular, Bootstrap, Tailwind, build tools, bundlers, or npm runtime/build dependencies.
- The site must run by opening `index.html` directly or by serving the folder as static files.
- Do not add a backend, database, API server, CMS, analytics script, or external tracking.
- Do not create a separate project-cards section. Projects should be represented only through the GitHub block and social links.
- Keep the site suitable for a minimal VPS: 1 CPU core, 1 GB RAM, Nginx or Apache.

## Design direction

Target style: **Editorial Tech Portfolio + Terminal accents**.

The design should feel:

- minimalistic;
- modern;
- technical;
- calm;
- personal;
- not like a generic AI-generated landing page.

Use subtle developer details such as section numbering, thin dividers, command/tag-like skill badges, a compact terminal/code block, and restrained accent colors.

Avoid:

- aggressive neon/cyberpunk styling;
- excessive gradients;
- excessive glassmorphism;
- generic creative-agency landing-page layout;
- random emoji-heavy sections;
- stock-photo aesthetics;
- large decorative animations;
- repeated identical cards for every section.

## Typography and assets

- Prefer system font stacks or at most two carefully chosen web font families.
- If external fonts are used, load only the exact needed weights and use `font-display: swap`.
- Avoid heavy assets. Do not add large images unless the user explicitly asks.
- Icons should be inline SVG, small SVG files, or simple text labels.
- Keep favicon lightweight, preferably SVG.

## File expectations

Expected final structure:

```text
index.html
styles.css
sw.js
assets/
  js/
    i18n.en.js
    i18n.uk.js
    i18n.js
    theme.js
    cli.js
    nav.js
    main.js
  README.md
README.md
```

Optional lightweight assets are allowed only when useful:

```text
assets/favicon.svg
assets/og-image.svg
```

Do not introduce extra folders or tooling unless the user asks.

## HTML rules

- Use semantic HTML.
- Keep exactly one main `h1`.
- Use logical heading hierarchy.
- Add meaningful `id` attributes for navigation anchors.
- Include SEO meta tags and Open Graph tags.
- External links should be clear and safe; use `rel="noopener noreferrer"` with `target="_blank"` where appropriate.
- Place all personal links as easy-to-find placeholders.

## CSS rules

- Use CSS custom properties in `:root` for colors, typography, spacing, radius, borders, and layout values.
- Dark theme is the default.
- Light theme must be intentionally designed, not a naive inversion.
- Use responsive CSS without frameworks.
- Prevent horizontal scrolling on mobile.
- Use visible `:focus-visible` states.
- Respect `prefers-reduced-motion`.
- Keep animations subtle.

## JavaScript rules

Use JavaScript only for minimal progressive enhancement:

- theme switcher with `localStorage`;
- mobile menu, if the navigation needs it;
- accessible `aria-expanded` and `aria-label` updates;
- optional reveal animation through `IntersectionObserver` with a safe fallback;
- dynamic footer year.

The page content must remain readable if JavaScript fails.

## Accessibility checklist

Before finishing, verify:

- all buttons and links are keyboard-accessible;
- focus states are visible;
- theme toggle has an accessible label;
- mobile menu can close via Escape if present;
- color contrast is acceptable in dark and light themes;
- text does not overlap or overflow on mobile;
- code/terminal block does not create horizontal page scroll.

## Manual test checklist

Check at least these viewport widths:

- 360px mobile;
- 414px mobile;
- 768px tablet;
- 1366px laptop;
- 1440px desktop.

Also verify:

- no console errors;
- no broken internal navigation;
- no missing required files;
- no npm install is needed;
- the site can be served as static files.

Recommended local static server commands:

```bash
python3 -m http.server 8000
```

On Windows:

```powershell
py -m http.server 8000
```

## Documentation requirements

Update `README.md` when changing structure, deployment steps, or customization points.

README should explain:

- local launch;
- editing personal text and links;
- changing colors and fonts;
- deploying to Nginx;
- updating through Git;
- enabling HTTPS with Let's Encrypt.

## Working style

- Prefer small, clear changes.
- Keep the code easy for a beginner to edit manually.
- Do not over-engineer.
- Do not add dependencies to solve problems that plain HTML/CSS/JS can solve.
- When uncertain, preserve the requirements from `docs/promt.md` and `docs/plan.md`.
