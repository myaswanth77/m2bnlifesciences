# M2BN Life Sciences – static site

Plain HTML/CSS/ES modules + JSON. No build step.

## Run locally

`python -m http.server 8000` (or `npx serve`) then open http://localhost:8000. Opening index.html via file:// will not work because fetch() of JSON is blocked.

## Edit content

Everything lives in `data/*.json`: `site.json` (contact, stats, hero, about, trust, footer text, WhatsApp number/message), `categories`, `brands`, `industries`, `services`, `process`, `testimonials`, `news`, `navigation`. Add an item = add an object to the array.
**Address conflict:** screenshots show Hyderabad (contact bar) and an Ahmedabad address (footer). `site.json` uses Hyderabad; confirm and edit `location` / `address`.

## Quote form email delivery

1. Create a form at formspree.io and set its notification address to sales@m2bnlifesciences.com (verify it).
2. Put the form URL in `data/config.json` → `quoteSubmission.endpoint`.
   `recipient` in config is informational only; it does not send email. Until the endpoint is set, the form shows a clear "not connected" error (nothing is faked). Set `provider` to `"api"` to POST JSON to `/api/quotes` later. No secrets belong in this repo.

## GitHub Pages

Push, then Settings → Pages → deploy from branch root. All paths are relative, so project sub-paths work. Custom domain: add a `CNAME` file and DNS records, update `websiteUrl` in `data/site.json`, and use the same domain in the static `robots.txt` and `sitemap.xml`.

## Swap JSON for an API

Change `dataSource.baseUrl`/`suffix` in config.json, or edit `js/services/dataService.js`; the UI only calls `getCategories()`, `getNews()` etc.

## Known gaps in this first version

- No photographs: image areas use emoji/gradient tiles. Add real WebP images (hero, categories, news, about) and logos (iPhase, Elabscience, BLD Pharm – use official assets) and point `<div role="img">` blocks / JSON at them.
- Icons are emoji; replace with an SVG line-icon set.
- Brand cards show names as text, not logos. News/Privacy/Terms links are placeholders.

---

# Update: categories, category pages, MedChemExpress, new CTA

## What changed

- **Brand:** MedChemExpress added to `data/brands.json` (logo `assets/logos/medchemexpress.webp`, trimmed from the supplied file; replace with the official SVG if you have one). Brands grid: 3 columns on desktop, 2 on tablet, 1 on mobile, equal-height cards.
- **Categories:** 17 in `data/categories.json` (10 existing + ELISA Kits, Antibodies, Recombinant Antibodies / Proteins, Cell Biology, Molecular Biology, Immunoassay / Detection, Protein Research). Rendered everywhere from this one file: homepage grid, Products mega-menu, footer, search, quote form suggestions.
- **Category pages:** one reusable `product-category.html`. URL: `product-category.html?category=<slug>`; optional `&product=<product-slug>` (highlights that product) and `#<subcategory-slug>`.
- **Enquire:** each product's Enquire button opens the single existing quote modal and pre-fills Product / Category (e.g. "Human Liver Microsomes — ADME & DMPK Products"); the field stays editable.
- **Removed from the homepage:** testimonials, Key Highlights, small "Need help" CTA, Latest News. `news.json`, `testimonials.json` and their `dataService` getters are kept but unused.
- **CTA:** "Looking for the Right Product?" is now a full-width banner (`assets/images/cta/cta-banner.webp`, a crop of the molecular-biology image; swap in a researcher-at-microscope photo, 1600×667, if you prefer).
- **Code layout:** `js/shell.js` (nav, footer, quote modal, search), `js/app.js` (homepage), `js/category.js` (category page).

## Data schema (`data/categories.json`)

```json
{
  "slug": "adme-dmpk-products",
  "name": "ADME & DMPK Products",
  "shortDescription": "...",
  "description": "...",
  "image": "assets/images/categories/adme-dmpk.webp",
  "imageAlt": "...",
  "e": "🫀",
  "c": "#f6d9d3",
  "subcategories": [
    {
      "name": "Liver Microsomes",
      "products": ["Human Liver Microsomes", "Rat Liver Microsomes"]
    }
  ]
}
```

Product and subcategory slugs are derived from names at runtime (`slug()` in `shell.js`), so there is nothing else to maintain. No SKUs, prices or specs are stored or shown.

## Adding things

- **Category:** add an object to `categories.json` (unique `slug`), plus images (below).
- **Subcategory / product:** add to `subcategories` / `products`. Empty `subcategories` shows a "coming soon + Request a Quote" panel (used by Laboratory Chemicals and Consumables).
- **Brand:** add to `brands.json` (`name, text, url, logo, lw, lh`).

## Images

Card image `name.webp` 800×600 (4:3, about 130 KB max) plus `name-400.webp` 400×300 for `srcset`. Keep the subject central; CSS uses `object-fit:cover`. Export with Pillow (`quality` 70–82, `method=6`) or `cwebp -q 78`. The category page reuses the 800×600 image in its hero.

## Future API

`dataService.js` is the only data access point. `getCategories()` → `GET /api/categories`, `getCategoryBySlug(slug)` → `GET /api/categories/:slug`, `getBrands()` → `GET /api/brands`; keep the JSON shape and the UI needs no changes.

## Notes

- All paths are relative, so GitHub Pages project sites work. Test locally with `python -m http.server 8000`.
- The Laboratory Equipment image shows third-party brand names; regenerate it without logos before launch.
