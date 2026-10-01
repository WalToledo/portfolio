# SPECS — Portfolio de Walter Toledo

Documento fuente de verdad del proyecto: qué se construye, con qué contenido y cómo se valida.
Todo lo marcado con `PENDIENTE` lo completa Walter antes de trabajar el hito correspondiente.
**Nunca inventar contenido ni usar placeholders** (nada de "Lorem ipsum" ni "Proyecto 1").

---

## 1. Contexto

- Trabajo práctico de la facultad: portfolio personal.
- Entrega: link al repo público de GitHub + link al sitio deployado.
- El repo debe tener **commits progresivos** (uno por hito, ver sección 6).

## 2. Stack y decisiones técnicas

| Tema | Decisión |
|---|---|
| Framework | Astro (última versión estable), salida estática |
| Estilos | Tailwind CSS (integración oficial vía `npx astro add tailwind`) |
| Lenguaje | TypeScript en datos y scripts |
| JavaScript en cliente | Solo scripts chicos e inline: menú mobile, tema, animaciones, validación del form |
| Imágenes | Componente `<Image>` de `astro:assets` (WebP, tamaños definidos) |
| Deploy | Vercel (plan gratuito). Sitio estático, no requiere adapter |
| Formulario | Servicio externo gratuito (Web3Forms o Formspree), ya que Vercel no procesa formularios sin backend. `PENDIENTE: elegir uno` |
| Idioma del sitio | Español (`<html lang="es">`) |

## 3. Contenido

### 3.1 Datos personales

- **Nombre:** Walter Toledo
- **Rol:** Desarrollador de Software Fullstack
- **Título:** Analista en Sistemas Informáticos
- **Frase de presentación:** `PENDIENTE` (una línea corta)
- **Avatar:** `PENDIENTE` → `src/assets/avatar.(jpg|png)`, con `alt` descriptivo

### 3.2 Sobre mí

- **Bio (2 a 4 oraciones, escrita por Walter):** `PENDIENTE`
- **Habilidades por categoría:**
  - Frontend: `PENDIENTE`
  - Backend: `PENDIENTE`
  - Herramientas: `PENDIENTE` (Git, Docker, Linux, etc.)

Los datos viven en `src/data/skills.ts`.

### 3.3 Proyectos (mínimo 3)

Cada proyecto: título, descripción breve (1–2 oraciones), tecnologías, link a repo y/o demo.
Los datos viven en `src/data/projects.ts`.

Candidatos (`PENDIENTE: confirmar cuáles, completar datos y links`):

1. **CineTracker** — descripción, stack, links: `PENDIENTE`
2. **Plataforma de entrenadores personales** (marketplace de suscripciones, proyecto para cliente) — `PENDIENTE`
3. **Tienda de ropa online "Berlín"** (ecommerce, proyecto para cliente) — `PENDIENTE`
4. **Este portfolio** — Astro + Tailwind, link al repo y al deploy

> Proyectos de clientes: confirmar permiso para mostrarlos. Si el repo es privado, linkear la demo o presentarlo sin repo.

### 3.4 Contacto

- **Email:** toledowalter836@gmail.com
- **GitHub:** https://github.com/WalToledo
- **LinkedIn:** https://www.linkedin.com/in/walter-ariel-toledo
- **Formulario:** nombre, email, mensaje. Validación obligatoria (ver 4.4)

### 3.5 CV

- `PENDIENTE` → `public/cv-walter-toledo.pdf`, botón "Descargar CV" en Hero o Sobre mí

## 4. Requisitos por sección

### 4.1 Navbar (`<header>` + `<nav>`)

- Links a: Inicio, Sobre mí, Proyectos, Contacto (anclas `#`).
- Fija arriba, con scroll suave (desactivado bajo `prefers-reduced-motion`).
- Mobile: menú hamburguesa con `aria-expanded`, `aria-controls`, cierre con Escape y al elegir un link.
- Link "Saltar al contenido" visible al recibir foco.
- Toggle de tema claro/oscuro.

### 4.2 Hero (`<section id="inicio">`)

- **Único `h1` del sitio:** el nombre.
- Rol, título y frase de presentación.
- Botones: "Ver proyectos" → `#proyectos`, "Contactarme" → `#contacto`.
- Avatar optimizado.

### 4.3 Sobre mí (`<section id="sobre-mi">`) y Proyectos (`<section id="proyectos">`)

- Sobre mí: bio + skills agrupadas en tres bloques con títulos `h3`.
- Proyectos: grilla de tarjetas (`<article>`), 1 columna en mobile, 2 en tablet, 3 en desktop.
- Tecnologías como chips con `flex-wrap` (evitar overflow a 360px).
- Links externos con `target="_blank" rel="noopener noreferrer"` y texto accesible (ej. "Ver repositorio de CineTracker").

### 4.4 Contacto (`<section id="contacto">`)

- Email, GitHub y LinkedIn con íconos + texto o `aria-label`.
- Formulario:
  - `<label>` asociado a cada campo.
  - Validación nativa (`required`, `type="email"`, `minlength`) + mensajes propios en español.
  - Errores anunciados con `aria-live="polite"` y `aria-describedby` en cada campo.
  - Estado de envío (enviando / enviado / error) sin recargar la página.

### 4.5 Footer (`<footer>`)

- Nombre, año y links sociales.

## 5. Requisitos transversales

- **Responsive:** correcto en 360px, 768px y 1280px, sin scroll horizontal.
- **Semántica:** `header`, `nav`, `main`, `section`, `footer`; un solo `h1`; jerarquía de headings sin saltos.
- **Accesibilidad:** `alt` en todas las imágenes, contraste AA en ambos temas, foco visible, todo navegable con teclado.
- **Tema:** claro/oscuro con Tailwind (`dark:` por clase). Script inline en `<head>` que aplique el tema antes del render (preferencia guardada o `prefers-color-scheme`) para evitar flash.
- **Animaciones:** sutiles (fade/slide al entrar en viewport con IntersectionObserver), solo dentro de `prefers-reduced-motion: no-preference`.
- **Performance:** objetivo Lighthouse ≥ 90 en Performance y Accessibility (mobile). Sin librerías JS innecesarias; fuentes con `font-display: swap` o del sistema.
- **SEO básico:** `<title>`, meta description, Open Graph, favicon.

## 6. Hitos (un commit por hito)

1. Setup: proyecto Astro + Tailwind, `.gitignore`, README base. [DONE]
2. Layout base (`Base.astro`) + Navbar + Footer + skip link. [DONE]
3. Hero.
4. Sobre mí + skills.
5. Proyectos + tarjetas.
6. Contacto + formulario con validación.
7. Pasada de responsive y accesibilidad.
8. Modo oscuro / claro.
9. Animaciones con `prefers-reduced-motion`.
10. CV descargable + SEO/meta.
11. Deploy en Vercel + auditoría Lighthouse y correcciones.
12. README final (stack, cómo correrlo, link al deploy).

## 7. Checklist de aceptación

### Obligatorios
- [ ] Hero con nombre, rol, frase y botón que lleva a su sección
- [ ] Sobre mí con bio de 2–4 oraciones y skills por categoría
- [ ] Al menos 3 proyectos con título, descripción, tecnologías y link
- [ ] Contacto con email, GitHub y LinkedIn
- [ ] Navbar que llega a todas las secciones
- [ ] Sin scroll horizontal en 360 / 768 / 1280 px
- [ ] `header`, `nav`, `main`, `section`, `footer` y un solo `h1`
- [ ] `alt` en todas las imágenes, contraste legible, navegable con teclado
- [ ] Cero contenido de relleno
- [ ] Commits progresivos en GitHub
- [ ] README con stack y cómo correrlo localmente
- [ ] Deploy público en Vercel

### Opcionales
- [ ] Formulario con validación
- [ ] Modo oscuro y claro
- [ ] Animaciones que respetan `prefers-reduced-motion`
- [ ] CV descargable en PDF
- [ ] Lighthouse ≥ 90 en Performance y Accessibility
