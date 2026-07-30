
# Michael Castillo — Portafolio

Portafolio personal de una sola página para Michael Steven Castillo Saldarriaga, desarrollador Frontend y fundador de **Bekuro**.

🔗 Sitio: agrega aquí la URL una vez publicado.

## Contenido

- `index.html` — sitio completo (HTML + CSS + JS en un solo archivo, sin dependencias de build).
- `Hoja-de-vida-Michael-Castillo.pdf` — currículum descargable, enlazado desde el botón "Descargar currículum".

> Importante: ambos archivos deben estar en la **misma carpeta**. El botón de descarga apunta a `./Hoja-de-vida-Michael-Castillo.pdf` de forma relativa.

## Secciones

- **Hero** — presentación y accesos rápidos (Ver proyectos / Contactar / Descargar currículum).
- **Proyectos** — apps de Bekuro (Fluu, Kuento, Gymbo) y trabajo freelance (sitio web Óptica).
- **Experiencia** — Almaexperiencia Latam y Fundación CINDE.
- **Habilidades** — stack de frontend, backend, datos y herramientas.
- **Educación** — Politécnico Grancolombiano y SENA.
- **Contacto** — correo y teléfono.

## Stack

Solo HTML, CSS y JavaScript vanilla. Tipografías desde Google Fonts (Space Grotesk, JetBrains Mono, Inter). No requiere `npm install` ni build step.

## Cómo actualizar el contenido

Todo el texto está directamente en `index.html`, organizado por secciones con comentarios de estructura clara (`<section id="...">`). Para actualizar:

- **Proyectos**: busca `id="proyectos"` y edita las tarjetas `.card`.
- **Experiencia**: busca `id="experiencia"` y edita `.tl-item`.
- **Habilidades**: busca `id="habilidades"` y edita `.skill-col`.
- **Currículum**: reemplaza `Hoja-de-vida-Michael-Castillo.pdf` por la versión actualizada, manteniendo el mismo nombre de archivo (o actualiza el `href` del botón si cambias el nombre).

## Cómo publicarlo (elige una opción)

### Opción 1 — GitHub Pages (gratis)

1. Crea un repositorio en GitHub y sube `index.html` y el PDF.
2. Ve a **Settings → Pages**, selecciona la rama `main` y carpeta raíz.
3. GitHub te da una URL tipo `https://tuusuario.github.io/repo`.

### Opción 2 — Netlify / Vercel (gratis, más rápido)

1. Arrastra la carpeta con ambos archivos a [app.netlify.com/drop](https://app.netlify.com/drop) (o conecta el repo en Vercel).
2. Listo, te da una URL al instante. Puedes conectar un dominio propio después.

### Opción 3 — Subdominio de bekuro.com

Sube ambos archivos a una carpeta como `michael.bekuro.com` o `bekuro.com/cv` en tu hosting actual, vía FTP o el panel de tu proveedor.

## Notas

- El sitio respeta `prefers-reduced-motion` para quienes desactivan animaciones.
- Es responsive: probado en desktop (1280px) y mobile (390px).
- Colores y tipografía reutilizan la identidad de marca de Bekuro (`#22c55e` sobre fondo oscuro `#0a0e17`).
