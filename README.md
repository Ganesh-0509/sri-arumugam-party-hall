# Sri Arumugam Party Hall

Marketing website for **Sri Arumugam Mini Party Hall**, an A/C banquet hall in Ponniammanmedu,
Chennai, built and maintained by [Fresh Frame](https://github.com/Ganesh-0509).

**Live site:** https://ganesh-0509.github.io/sri-arumugam-party-hall/

## What this is

A single-page marketing site covering the venue, its event types (weddings, receptions,
birthdays, engagements, family celebrations, special occasions), an interactive event planner,
a photo gallery, and a date-enquiry form — all real photography from the venue's own opening
ceremony, no stock/placeholder imagery. Every enquiry path (sticky mobile bar, event planner,
"Ask us" links, the enquiry form) hands off to WhatsApp with a pre-filled message so leads land
directly in the owner's phone.

## Tech stack

- **React 19 + TypeScript**, built with **Vite**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animation (hero Ken-Burns drift, section transitions, gallery lightbox)
- **lucide-react** for icons
- Deployed as a static build to **GitHub Pages** (`gh-pages` branch)

## Project structure

```
src/
  components/   One component per page section (Hero, EventPlanner, Gallery, DateEnquiry, ...)
  data/         Static content: event types, gallery captions, venue facts, planner copy
  lib/          WhatsApp deep-link builder, tel/maps link helpers
  assets/       Real venue photography (src/assets/stock/) + Instagram profile photo
public/         Static files served as-is: favicon/logo, robots.txt, sitemap.xml, .nojekyll
```

All venue-specific facts (name, phone, WhatsApp number, Instagram, guest capacity, hall style,
flooring, etc.) live in `src/data/venue.ts` — that's the one file to touch to update contact
details or claims.

## Local development

```bash
npm install
npm run dev       # starts Vite dev server with HMR
```

## Build & preview

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serves the production build locally, at the /sri-arumugam-party-hall/ base path
```

## Linting

```bash
npm run lint       # oxlint
```

## Deploying

The production build is pushed to the `gh-pages` branch of this repo, which GitHub Pages serves
directly. `public/.nojekyll` is included in every build so GitHub Pages doesn't run its default
Jekyll processing over the `assets/` folder.

## Known gaps (tracked, not blocking)

- No custom domain yet — live on the default `github.io` URL. `robots.txt`/`sitemap.xml`
  reference a placeholder domain to update once one is purchased.
- No real client testimonials yet — that section currently shows an honest "Your celebration
  could be next" CTA instead of fabricated quotes.
- A dining-area photo and a photo from an in-progress birthday/family function would round out
  the gallery (current set is all from one opening-ceremony album).

Full build history and decisions are in `../DETAILS.md`.
