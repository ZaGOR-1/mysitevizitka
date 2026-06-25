# Review: prompt and implementation plan

## Verdict

The prompt and plan are generally well structured and suitable for generating a lightweight static portfolio site. The core idea is consistent: HTML/CSS/Vanilla JS, no backend, no npm dependency, no separate project cards, GitHub as the central work hub, minimal modern developer design.

## Strong points

- Clear technical scope: static frontend only.
- Good design direction: Editorial Tech Portfolio + Terminal accents.
- Good anti-pattern list: no generic AI landing page, no neon/cyberpunk overload, no excessive glassmorphism.
- Strong accessibility requirements: focus states, aria labels, keyboard navigation, reduced motion.
- Good deployment documentation: Nginx, Git update, HTTPS via Let's Encrypt.
- Good final checklist.

## Recommended improvements

1. Clarify fonts and CDN policy.

   Current text says to avoid CDN where possible, but also allows Google Fonts. Better rule: prefer system fonts; if external fonts are used, load only 1–2 families, 2–3 weights, and use `font-display: swap`.

2. Clarify Open Graph image handling.

   The prompt asks for Open Graph tags but the file structure does not include an OG image. Either make `og:image` optional or add an optional lightweight `assets/og-image.svg` / `assets/og-image.png` requirement.

3. Keep JavaScript optional and minimal.

   Smooth scroll can be handled by CSS. Reveal animation should be optional and must respect `prefers-reduced-motion`.

4. Add `AGENTS.md` to the repository root.

   For Codex, the useful default is `AGENTS.md`, not `Codex.md`. Use `Codex.md` only if you configure Codex fallback filenames manually.

5. Fill `.gitignore`.

   The current `.gitignore` is empty. Add OS/editor/temp files and accidental build artifacts.

6. Avoid shipping `.git` in archives.

   Your uploaded ZIP contains a `.git` directory. For sharing with AI or another person, it is usually cleaner to export only the working files unless Git history is needed.

## Recommended repository files

```text
promt.md
plan.md
AGENTS.md
.gitignore
index.html
styles.css
script.js
assets/
  README.md
README.md
```

## Should you add Codex.md?

No, not as the primary file. Add `AGENTS.md` in the repository root. Codex is designed to read `AGENTS.md` automatically. `Codex.md` is not the default project instruction filename unless configured as a fallback in Codex settings.
