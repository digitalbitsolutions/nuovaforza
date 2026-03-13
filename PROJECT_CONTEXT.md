# Project Context - NUOVA FORZA

Last update: 2026-03-13

## Scope completed
- Replaced demo website copy with production content in Spanish for NUOVA FORZA (Chiclayo, Peru).
- Updated hero, about/concept, training philosophy, facilities, equipment gallery, schedule, social media, CTA, contact and map sections.
- Replaced training card icons with custom red-line SVG icons.
- Updated social section to "Síguenos en las RRSS" with Facebook and Instagram links.
- Updated contact numbers:
  - WhatsApp: +51 901 900 300
  - Landline: +51 74 688 040
- Added Open Graph/Twitter share metadata and set share logo image to:
  - https://nuovaforzagym.com/assets/images/logo-trans.webp

## Recent updates (2026-03-13)
- Added 34 years of experience to HERO section
- Updated machine count to "más de 65 máquinas"
- Removed all references to "entrenamiento funcional"
- Replaced Instructors section with Equipment gallery (5x6 grid, 30 images)
- Created CSS-only lightbox for gallery images
- Updated cards layout to 2x2 grid
- Replaced HERO background image with optimized video (videohero.mp4)
- Converted video hero from HEVC/H.265 → H.264 (cross-browser compatible)

## Performance optimizations (2026-03-13)
- Generated 30 WebP thumbnails (400px) for gallery grid — est. savings ~8 MB
- Compressed original gallery images with ffmpeg (q:v 60)
- Added `width`/`height` to all `<img>` tags to prevent CLS
- Optimized responsive gallery grid: 6→4→3→2→1 columns
- Lighthouse FCP: **0.8s** ✅

## Pending performance tasks
- LCP: currently **5.8s** — needs improvement (see tasks.md)
- Cache-Control headers: est. savings 5,977 KiB (see tasks.md)
- Preload fonts in `<head>`

## Key links
- Facebook: https://www.facebook.com/GYM.NUOVAFORZA
- Instagram: https://www.instagram.com/gimnasionuovaforza/
- WhatsApp: https://wa.me/51901900300

## Technical details
- Video: H.264, 1920x1080, 24fps, ~5MB
- Gallery: 30 images, CSS-only lightbox, responsive grid, thumbnails in /thumbnails/
- Layout: 2x2 cards for programs, 6-col gallery for equipment
- No JavaScript used for lightbox functionality

## Notes
- Local repository was initialized in `web/` on 2026-03-04.
- Current branch: `master`.
- Remote: https://github.com/digitalbitsolutions/nuovaforza.git
- All multimedia assets included in repository

