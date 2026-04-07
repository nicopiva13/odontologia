# Landing Page - Centro Odontológico

Template de landing page para clínicas odontológicas, construido con React 18 + Vite. Diseñado para ser rápido de personalizar: toda la información de la clínica se configura desde dos archivos JSON, sin tocar código.

---

## Personalización

### 1. Datos de la clínica (`src/data/clinic.json`)

Este archivo contiene toda la información del negocio. Editalo con los datos reales:

| Campo | Descripción | Ejemplo |
|---|---|---|
| `name` | Nombre de la clínica | `"Docta Innova"` |
| `tagline` | Frase corta debajo del nombre | `"Tecnología y cuidado profesional"` |
| `phone` | Teléfono visible en la página | `"0353 562-1468"` |
| `whatsapp` | Número para WhatsApp (solo dígitos, con código de país) | `"543535621468"` |
| `whatsappLink` | URL completa de WhatsApp | `"https://wa.me/543535621468"` |
| `address` | Dirección completa | `"Calle Falsa 123, Villa María, Córdoba"` |
| `instagram` | Usuario de Instagram (con @) | `"@miodontologia"` |
| `youtube` | Canal de YouTube (con @) | `"@miodontologia"` |
| `email` | Email de contacto | `"contacto@miodontologia.com"` |
| `colors` | Paleta de colores (CSS) | Ver sección de colores abajo |

**Colores (`colors`):** Cambiá los valores hexadecimales para adaptar la identidad visual:
- `primary`: color principal (verde, azul, etc.)
- `accent`: color de acento para botones y destacados
- `bg`: color de fondo general
- `dark`: color oscuro para textos o fondos
- `text`: color del texto principal

**Hero:** Editá `hero.headline`, `hero.subheadline`, `hero.ctaText` para personalizar el banner principal.

**Servicios (`services`):** Cada objeto en el array es una tarjeta de servicio. Podés agregar, quitar o editar los que necesites.

**Horarios (`schedule`):** Editá los rangos horarios según la disponibilidad real.

### 2. Contenido adicional (`src/data/content.json`)

Contiene textos de secciones secundarias (testimonios, sección "nosotros", etc.). Editá los textos según el mensaje que quieras transmitir.

### 3. SEO (`index.html`)

Actualizá las siguientes etiquetas con los datos reales de la clínica:
- `<title>`: nombre de la clínica
- `<meta name="description">`: descripción breve (150-160 caracteres)
- `<link rel="canonical">`: URL real del sitio
- Etiquetas `og:*` y `twitter:*`: URL, título, descripción e imagen
- El bloque `application/ld+json`: datos estructurados para Google (nombre, dirección, teléfono, horarios, redes)

### 4. Imágenes

Reemplazá los archivos en `public/images/`:
- `hero.png`: imagen principal del banner
- `service-lab.png`, `service-ortho.png`, etc.: imágenes de cada servicio
- `og-image.jpg`: imagen para redes sociales al compartir el link (1200x630px recomendado)

---

## Correr localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev
```

---

## Build para producción

```bash
# Generar archivos optimizados en /dist
npm run build

# Previsualizar el build antes de subir
npm run preview
```

Los archivos listos para deployar quedan en la carpeta `dist/`.

---

## Stack tecnológico

- **React 18** — librería de UI
- **Vite 4** — bundler y servidor de desarrollo
- **JSX** — sin TypeScript, para mayor simplicidad
- **CSS Variables puras** — sin frameworks de CSS, estilos controlados desde `clinic.json`
- **JSON como CMS** — toda la configuración en `src/data/`
