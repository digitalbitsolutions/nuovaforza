# Tasks - NUOVA FORZA

## Sprint actual — Performance & SEO

### ⏳ Pendiente

#### Task 1: Mejorar LCP (Largest Contentful Paint)
- **Prioridad:** Alta
- **Estado:** Pendiente
- **Contexto:** LCP actual = 5.8s. El elemento LCP es probablemente el video hero o la imagen de fondo.
- **Acciones:**
  1. Identificar el elemento LCP exacto con DevTools → Performance → LCP
  2. Añadir atributo `poster` al `<video>` con una imagen estática optimizada (WebP, ~50-80KB)
  3. Añadir `<link rel="preload" as="image" href="poster.webp">` en el `<head>`
  4. Evaluar si el video debe ser reemplazado por imagen estática en móvil con `<picture>` + CSS

#### Task 2: Implementar Cache-Control en servidor
- **Prioridad:** Alta
- **Estado:** Pendiente
- **Contexto:** Lighthouse detecta cache lifetime corto para assets. Est. savings: 5,977 KiB
- **Acciones:**
  1. Identificar el servidor / hosting utilizado (Apache, Nginx, Cloudflare...)
  2. Configurar headers:
     ```
     Cache-Control: public, max-age=31536000, immutable
     ```
     Para: `*.webp`, `*.mp4`, `*.woff2`, `*.ttf`, `*.css`, `*.js`, `*.svg`
  3. Si se usa Cloudflare: activar "Browser Cache TTL" = 1 año

#### Task 3: Preload de fuentes
- **Prioridad:** Media
- **Estado:** Pendiente
- **Acciones:**
  1. Añadir `<link rel="preload" as="font">` para Teko y Montserrat en `<head>`

---

### ✅ Completadas

| Fecha | Tarea |
|-------|-------|
| 2026-03-13 | Generar 30 thumbnails para galería (400px, WebP) |
| 2026-03-13 | Comprimir imágenes originales de galería con ffmpeg |
| 2026-03-13 | Convertir video hero de HEVC a H.264 (compatibilidad cross-browser) |
| 2026-03-13 | Añadir `width`/`height` a todas las `<img>` (eliminar CLS) |
| 2026-03-13 | Mejorar responsive galería (breakpoints 768px, 500px, 360px) |
| 2026-03-13 | FCP = 0.8s ✅ |
