# IDinsight Website Mockup

A Next.js rebuild of the [IDinsight.org](https://www.idinsight.org) landing page, deployed via GitHub Pages.

## Tech Stack

- **Next.js 16** with static export
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Project Structure

```
idinsight-landing/        # Next.js app
  src/
    app/
      layout.tsx          # Root layout
      page.tsx            # Landing page
      globals.css         # Global styles
    components/
      Header.tsx          # Navigation header
      Hero.tsx            # Hero banner
      CapabilitiesGrid.tsx
      SectorGrid.tsx
      FeaturedStories.tsx
      TeamSection.tsx
      PartnersSection.tsx
      CallToAction.tsx
      Newsletter.tsx
      Footer.tsx
```

## How This Compares to idinsight.org

The live IDinsight website runs on **WordPress** with a custom theme (`idi`), server-rendered PHP, and a stack of plugins (LearnDash, WPML, Breeze caching, MailerLite). Content is managed through the WordPress admin and pages are assembled from Gutenberg blocks and custom templates.

This mockup takes a different approach:

| | idinsight.org | This mockup |
|---|---|---|
| **Platform** | WordPress (PHP) | Next.js (React) |
| **Rendering** | Server-rendered per request | Static export (pre-built HTML) |
| **Styling** | Custom theme CSS + Gutenberg blocks | Tailwind CSS utility classes |
| **Content** | WordPress CMS / database | Hardcoded in components |
| **Hosting** | WordPress hosting | GitHub Pages (static files) |
| **Interactivity** | jQuery + plugin scripts | React components |

The trade-off is straightforward: WordPress gives IDinsight a CMS for non-technical editors and a plugin ecosystem (LMS, multilingual, email). This mockup trades all of that for a faster, lighter static site with a modern component architecture — useful as a design prototype, but not a drop-in replacement for the full site.

## Getting Started

```bash
cd idinsight-landing
npm install
npm run dev
```

## Building for GitHub Pages

```bash
cd idinsight-landing
npm run build
```

The static export is output to the root of the repo for GitHub Pages deployment. A `.nojekyll` file is included to ensure the `_next` directory is served correctly.
