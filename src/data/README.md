# Guía rápida de edición — Sambrizzi Producción

Toda la información editable de la web vive en esta carpeta (`src/data/`).
**No necesitas tocar componentes** para cambiar textos, agregar eventos,
modificar la galería o el calendario. Modificá el archivo correspondiente,
guardá, y la web se actualiza sola.

---

## 📂 Archivos y qué edita cada uno

| Archivo | Qué controla | Aparece en |
|---|---|---|
| `productions.ts` | Eventos / desfiles (con modal de detalle) | `/` y `/producciones` |
| `services.ts` | Servicios "Lo que creamos" (con modal) | `/` y `/producciones` |
| `calendar.ts` | Calendario Oficial 2026 | `/` y `/internacional` |
| `audiences.ts` | "Para quién es Sambrizzi" (4 bloques) | `/` |
| `alliances.ts` | Marquee de alianzas internacionales | `/` y `/internacional` |
| `gallery.ts` | Galería inmersiva | `/` |
| `press.ts` | Cover Story Madrid + tira de prensa | `/` |
| `hero.ts` | Texto y CTAs del hero principal | `/` |
| `impact.ts` | Estadísticas + ciudades del mapa | `/` y `/internacional` |
| `site.ts` | Contacto, redes sociales, navegación | global |

---

## ✏️ Tareas comunes

### Agregar un evento nuevo a Producciones
1. Abrí `productions.ts`.
2. Copiá un bloque completo (entre `{` y `},`).
3. Pegalo al final del array y modificá los valores.
4. Para imágenes: subí los `.jpg` a `src/assets/` y agregá un `import` arriba.

### Agregar/quitar una parada del Calendario 2026
- Editá el array en `calendar.ts`. Cada línea es `{ city, country, event }`.

### Cambiar una alianza del marquee
- Editá el array de strings en `alliances.ts`.

### Cambiar texto del hero o subtítulos
- Editá `hero.ts` (textos, secuencia de palabras animadas, stats del subtítulo).

### Cambiar email, Instagram, Facebook, YouTube
- Editá `site.ts` → sección `social` y `contact`.

### Sumar/quitar imágenes de la Galería Inmersiva
- En `gallery.ts`: agregá un `import` y sumalo al array `gallery`.

### Cambiar las 4 estadísticas del mapa internacional
- Editá `impact.ts` → array `stats`.

### Agregar una ciudad al mapa
- Editá `impact.ts` → array `cities`. Coordenadas `x` e `y` van de 0 a 100.

---

## 🌐 Cambiar el dominio para previews al compartir

Editá `src/lib/seo.ts` → constante `SITE_URL`.

## 🎨 Cambiar colores o tipografía
Editá `src/styles.css` (variables `--gold`, `--ink`, `--background`, etc).
