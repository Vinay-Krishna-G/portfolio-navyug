# NavYug Portfolio Asset Guidelines

This directory contains master screenshot libraries and branding assets for showcase projects.

## Directory Structure

```text
public/portfolio/
├── [project-id]/
│   ├── screenshots/
│   │   ├── 01-home.webp
│   │   ├── 02-services.webp
│   │   ├── 03-gallery.webp
│   │   └── 04-contact.webp
│   ├── thumbnail.webp
│   └── logo.webp
```

## Image Specifications

- **Aspect Ratio:** 16:10 desktop ratio (e.g., 1600 × 1000 px or 1920 × 1200 px).
- **File Format:** Optimized `.webp` (Quality: 85%).
- **Maximum File Size:** ≤ 250 KB per screenshot.
- **Naming Convention:** Numbered prefixes (`01-home.webp`, `02-features.webp`, `03-contact.webp`) for deterministic ordering.

## Scalability

Adding a new project requires:
1. Creating a project folder (`/public/portfolio/[id]/screenshots/`).
2. Adding WebP screenshots.
3. Creating a metadata file (`data/portfolio/[id].ts`).
4. Registering it in `data/projects.ts`.

Zero React component code modifications required!
