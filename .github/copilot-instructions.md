<!-- Copilot / AI agent instructions for the Sonnet static frontend -->
# Sonnet — Copilot Instructions

This repository is a small static marketing site (single-page) using plain HTML/CSS/JS and a few CDN-hosted libraries. The goal of these instructions is to help an AI coding agent be immediately productive when making changes or suggestions.

- **Big picture:** Single-page static frontend. Entry: `index.html`. Behavior in `index.js`. Styling and theme in `style.css`. Static assets live in `Images/`.

- **Major components & responsibilities:**
  - `index.html`: page structure and anchor IDs (`#hero`, `#about`, `#services`, `#contact`) used by navigation and smooth scroll.
  - `index.js`: UI behavior (AOS init, mobile menu toggle, header scroll class, smooth anchor scrolling, simple form submit handling).
  - `style.css`: design system — CSS variables at `:root` control colors, typography and spacing (notably `--header-height`, `--container-width`). Glassmorphism + neon theme.
  - `Images/`: icons, logo, hero imagery and `favicon_neon.png` referenced by `index.html`.

- **External integrations & CDN dependencies:**
  - Google Fonts (`Outfit`, `Space Grotesk`) — update `index.html` when changing fonts.
  - Font Awesome (icons) — loaded via CDN link in `index.html`.
  - AOS (Animate On Scroll) — CSS + JS loaded from CDN; `index.js` calls `AOS.init()`.
  - Contact form uses Formspree: default `form` action is `https://formspree.io/f/xeolvneo` (see `index.html`). `index.js` intentionally lets the browser submit if an `action` attribute exists.

- **Local dev / build / run:**
  - There is no build system. Serve the folder as static files. Example commands (PowerShell):

```
npx http-server . -p 8080
# or
npx live-server .
# or (if Python available)
python -m http.server 8000
```

  - Open `http://localhost:8080` (or the chosen port) and use browser DevTools for debugging.

- **Common patterns & project-specific conventions:**
  - Smooth scroll anchors account for the fixed header height: `index.js` subtracts `.header` height when scrolling.
  - Mobile menu toggling uses `.mobile-menu-toggle` and `.nav` `.active` class; body overflow is toggled to prevent background scroll.
  - Visual theme driven by CSS variables in `style.css` — prefer adjusting variables over hard-coded values.
  - AOS attributes are applied inline in `index.html` (e.g., `data-aos="fade-up"`). Keep them when moving elements.

- **Where to make common edits:**
  - Change nav sections / content: edit `index.html` and preserve ID names used by CSS/JS.
  - Adjust spacing/header height: modify `--header-height` in `style.css` and verify `index.js` scroll math still aligns.
  - Replace images/icons: put files in `Images/` and update `src` paths in `index.html`.
  - Change form behavior: if you remove the `action` attribute from `.contact-form`, implement custom submit logic in `index.js` where a placeholder exists.

- **Safety notes for automated edits:**
  - Preserve external CDN links unless explicitly replacing them with documented alternatives. Removing the AOS or Font Awesome scripts will change rendering and may break JS assumptions.
  - Do not change anchor ID names without updating all references in `index.html`, `index.js` and any CSS that targets those sections.

- **Examples to reference when making edits:**
  - Smooth scroll logic: `index.js` — uses `document.querySelectorAll('a[href^="#"]')` and subtracts header height.
  - Form behavior: `index.html` `form.contact-form` with `action="https://formspree.io/f/xeolvneo"` and `index.js` checking `contactForm.getAttribute('action')`.
  - Visual tokens: `style.css` `:root` block — change `--gradient-main`, `--primary`, or `--header-height` to update theme/responsive spacing.

- **When to ask the human:**
  - If a change requires backend integration (there isn't one here) or replacing Formspree with a new endpoint — confirm credentials and acceptance criteria.
  - For visual redesigns that change the layout or remove AOS/FontAwesome — ask before bulk replacing CDN usage.

If anything here is unclear or you'd like me to expand specific sections (local dev, swapping Formspree, or adding a simple task runner), tell me which part to expand. 
