# TODO - NUOVA FORZA

## 🔴 Alta prioridad

- [ ] **Mejorar Largest Contentful Paint (LCP)** — actualmente 5.8s
  - Precargar el video hero o reemplazarlo con imagen estática para LCP
  - Añadir `<link rel="preload">` para el recurso LCP
  - Considerar poster image en el `<video>` para que el LCP ocurra antes

- [ ] **Implementar caché eficiente (Cache-Control headers)**
  - Est. savings: 5,977 KiB
  - Configurar el servidor para servir assets estáticos con `Cache-Control: max-age=31536000, immutable`
  - Aplica a: imágenes, fonts, CSS, JS, video

## 🟡 Media prioridad

- [ ] **Reducir render-blocking resources**
- [ ] **Mejorar Time to Interactive (TTI)**
- [ ] **Añadir Service Worker / PWA básica para caché offline**

## ✅ Completado

- [x] Optimización de entrega de imágenes (−8 MB savings)
- [x] Generación de thumbnails para galería (30 imágenes a 400px)
- [x] Conversión video hero HEVC → H.264 (compatible todos los navegadores)
- [x] Añadir `width`/`height` en todas las imágenes (evita CLS)
- [x] Responsive galería mejorado (6→4→3→2→1 columnas)
- [x] FCP: 0.8s ✅
