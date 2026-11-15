# Mariot Kitchen Equipment — mariot-group.com (React)

Multi-page animated company site. Vite + React 19, React Router, Framer Motion, Lenis smooth scroll, Lucide icons.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```
Upload the contents of `dist/` to `public_html` on Hostinger. `public/.htaccess` is included so page URLs such as `/about` work on refresh.

## Pages (22 routes)
Home · About · How We Work · Sectors + 12 sector pages · Projects + project pages · Design Your Project · Fabrication ·
Maintenance · Business Hub · Business Account · Consultation · Restaurant Opening · Urgent Request · Brands + 98 brand pages ·
Branches · Blog · Contact · Quote · 404

## Where things are
- `src/data.js` — ALL content: texts, stats, sectors, projects, brands, branches, plans, image IDs. Edit here.
- `src/pages/Home.jsx` — home page sections (hero, sector scroller, budget calculator, ...)
- `src/pages/Company.jsx` — About, How We Work, Sectors, Projects, Brands, Branches, Blog, 404
- `src/pages/Services.jsx` — Design, Fabrication, Maintenance, Business Hub pages, Contact, Quote
- `src/components/blocks.jsx` — shared animated building blocks (PageHero, PhotoCard, FeatureCard, EnquiryForm, CTA, ...)
- `src/components/Layout.jsx` — preloader, navbar + mega menu, footer, page-transition curtain, cursor
- `src/index.css`, `src/pages.css` — styles

## Before going live
1. **Brand logos** — copy the existing `assets/brands/` folder from the current site into `public/assets/brands/`.
   Until then logos load from the live mariot-group.com, and fall back to the brand name as text.
2. **Projects** — `PROJECTS` in `src/data.js` is a sample portfolio. Replace with real projects and photos.
3. **Photos** — royalty-free Unsplash / Pexels images are loaded from their CDNs. To self-host, download them into `public/` and change the URLs in `data.js`.
4. **Forms** — every form opens WhatsApp (+971 4 288 2777) with the details pre-filled, so no server is needed. Swap `onSubmit` in `EnquiryForm` (blocks.jsx) for an API or n8n webhook if you want submissions stored.
5. **Arabic** — the current site has an Arabic toggle; this build is English only.
