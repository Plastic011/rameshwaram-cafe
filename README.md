# Rameshwaram Café — React (Vite)

React + Vite rebuild of the Rameshwaram Café one-page site, componentized.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── main.jsx              # entry point
├── App.jsx                # assembles all sections
├── App.css                 # full theme + layout (all styling lives here)
├── index.css               # page reset
├── data.js                  # content: dishes, testimonials, locations, nav links
└── components/
    ├── Logo.jsx
    ├── Header.jsx           # sticky nav with mobile hamburger toggle
    ├── Hero.jsx
    ├── SignatureItems.jsx
    ├── PopularDishes.jsx
    ├── Tradition.jsx
    ├── Gallery.jsx
    ├── Testimonials.jsx
    ├── Locations.jsx
    └── Footer.jsx
```

## Notes

- Same color palette as the reference: cream `#FAF6EA`, gold `#C89B3C`, terracotta `#C0533B`, dark brown `#2B1B12`.
- Food/gallery photography is represented with original CSS/SVG placeholders (the source images are copyrighted stock photos). Swap the `.food-img` / `.dish-img` / `.gallery-img` divs for `<img>` tags to drop in your own licensed photos.
- All copy (dish names, prices, testimonials, locations) lives in `src/data.js` — edit there to update content without touching components.
