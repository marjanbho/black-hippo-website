# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests in this project.

## Architecture

This is the marketing website for **Black Hippo**, a Belgian software consulting company. It is a **Next.js 13 (Pages Router)** app with TypeScript and Tailwind CSS.

### Pages

- `src/pages/index.tsx` — Single-page website with anchor sections: `#heading`, `#expertise`, `#aanpak`, `#cases`, `#reviews`, `#companies`, `#contact`
- `src/pages/contact/verstuurd.tsx` — Thank-you page after form submission
- `src/pages/privacyverklaring.tsx` — Privacy policy
- `src/pages/email-disclaimer.tsx` — Email disclaimer

### Layout

All pages are wrapped in `Layout` (via `_app.tsx`), which renders `<Header>`, `<main>{children}</main>`, and `<Footer>`. The Inter font is applied at the layout level.

### Shared UI components (`src/components/`)

Primitive components are barrel-exported from `src/components/index.ts`:

- `Container` — centers content with horizontal padding
- `Title` — styled `<h2>`
- `Text` — styled `<p>`
- `Divider` — section label with decorative line
- `Header` / `Footer` — site-wide navigation and footer

Import from `@/components` (the barrel), not from individual files.

### Styling

- **Tailwind CSS** with three custom colors defined in `tailwind.config.js`:
  - `primary`: `#61B0BC` (teal)
  - `secondary`: `#2d3960` (dark blue)
  - `text`: `#5d4343` (brown)
- Global CSS in `src/styles/globals.css` only overrides Swiper carousel styles — all other styling is done via Tailwind classes.
- Background decorations are large `.webp` images positioned absolutely with negative offsets and `-z-10`.

### Carousels

Swiper is used for three carousels on the homepage: cases, reviews, and companies (logo strip with autoplay). Swiper navigation/pagination styles are customized in `globals.css` using `theme()` references to Tailwind colors.

### Contact form

The contact form uses **Netlify Forms** (`data-netlify="true"`). It posts to `/contact/verstuurd`. No API routes are involved.

### Responsive breakpoints

The cases carousel uses `useWindowDimensions` hook (in `src/hooks/usewindowdimensions.ts`) to dynamically set `slidesPerView` based on window width (breakpoints at 920px and 1200px). This uses `globalThis` instead of `window` for SSR safety.
