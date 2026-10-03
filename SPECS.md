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
| Deploy | Vercel (plan gratuito). Sitio estático, no requiere adapter. URL: `https://portfolio-waltoledo.vercel.app` (declarada como `site` en `astro.config.mjs`; si al deployar cambia, se actualiza ahí) |
| Formulario | Servicio externo gratuito (Web3Forms o Formspree), ya que Vercel no procesa formularios sin backend. `PENDIENTE: elegir uno` |
| Idioma del sitio | Español (`<html lang="es">`) |

## 3. Contenido

### 3.1 Datos personales

- **Nombre:** Walter Toledo
- **Rol:** Desarrollador de Software Fullstack
- **Título:** Analista en Sistemas Informáticos
- **Frase de presentación:** Construyo productos web de punta a punta, del diseño al deploy.
- **Avatar:** `src/assets/avatar.jpeg`, con `alt` descriptivo

### 3.2 Sobre mí

- **Bio (2 a 4 oraciones, escrita por Walter):** Soy Walter Toledo, desarrollador fullstack de Rosario, Argentina. Trabajo con React, Node.js y TypeScript, cubriendo todo el ciclo de un proyecto: modelado de datos, backend, interfaz y deploy. Además, incorporo agentes de IA en mi flujo de desarrollo para trabajar más rápido sin perder calidad.

Como freelance desarrollé soluciones para clientes, como plataformas de suscripción, e-commerce y paneles de gestión. Soy Analista en Sistemas Informáticos, estudio Ingeniería en Sistemas y me estoy formando en infraestructura: cómo se despliegan, escalan y mantienen las aplicaciones en producción.
- **Habilidades por categoría:**
  - Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS
  - Backend: Node.js, Next.js, Prisma (ORM), C, C#/.NET, APIs REST
  - Bases de Datos: PostgreSQL, MySQL, SQL Server, NoSQL
  - Herramientas: Git, GitHub, Docker
  - Idiomas: Inglés, Español

Los datos viven en `src/data/skills.ts`.

### 3.3 Experiencia laboral

- **Puesto actual:** Jusmet, Desarrollador de Software Fullstack Junior (2026–actualidad)
- Si hay experiencia previa relevante para mostrar, se agrega como entrada adicional (empresa, rol, período).

Los datos viven en `src/data/experience.ts` (nuevo archivo, mismo patrón que `projects.ts` y `skills.ts`).

### 3.4 Proyectos (mínimo 3)

Cada proyecto: título, descripción breve (1–2 oraciones), tecnologías, link a repo y/o demo.
Los datos viven en `src/data/projects.ts`.

Proyectos confirmados:

1. **CineTracker**
Descripcion: aplicación web diseñada para que los amantes del cine puedan descubrir nuevos títulos, gestionar su propia lista de visualización y dar reseñas de cada lanzamiento.

Stack: Arquitectura: Monorepositorio (workspaces de npm / carpeta raíz con frontend y backend).
Frontend: React (construido con Vite), TypeScript, Tailwind CSS.
Backend: Node.js, Express, TypeScript.
Base de Datos & ORM: MySQL, Prisma.
Testing: Vitest (runner global), Supertest (API del backend), React Testing Library (componentes del frontend).
IA: Integración con Context7 MCP.

Repositorio: https://github.com/WalToledo/cine-tracker

2. **SmartCloth Logistics**
Descripcion: PLATAFORMA E-COMMERCE Y GESTIÓN LOGÍSTICA. Solución integral para automatizar la distribución de indumentaria, conectando una tienda online con un sistema de logística de precisión.

Stack: rquitectura N-Capas utilizando React y Next.js para el frontend y
Node.js para la lógica de negocio.
Integración de servicios SaaS, incluyendo Stripe para pagos, Clerk para
autenticación y Resend para notificaciones.
Gestión de persistencia utilizando Sanity (Content Lake) con consultas GROQ, y  
Prisma ORM con MySQL para modelar el esquema del módulo de auditoría.

Repositorio: https://github.com/fassardi245/SmartCloth


3. **Grito de Gol** 
Descripcion: Dashboard interactivo para la visualización dinámica de información sobre ligas, equipos, partidos y estadísticas de fútbol.

Stack: Construcción de la interfaz y lógica del cliente con Next.js, TypeScript y Tailwind
CSS, implementando navegación drill down y paneles interactivos de posiciones
con semaforización de resultados.
Diseño de la arquitectura de base de datos relacional con MySQL, integrada
mediante Prisma ORM.

Repositorio: https://github.com/WalToledo/GritoDeGol

> Proyectos de clientes/grupales: permiso para mostrarlos confirmado por Walter.

### 3.5 Contacto

- **Email:** toledowalter836@gmail.com
- **GitHub:** https://github.com/WalToledo
- **LinkedIn:** https://www.linkedin.com/in/walter-ariel-toledo
- **Formulario:** nombre, email, mensaje. Validación obligatoria (ver 4.6)
- **Título de la sección:** "Tu mensaje" (el link del navbar sigue diciendo "Contacto")

### 3.6 CV

- Link "Descargar CV" en el Hero (fila de links, junto a GitHub y LinkedIn), apuntando a
  `/cv-walter-toledo.pdf` con el atributo `download`.
- `PENDIENTE`: dejar el archivo en `public/cv-walter-toledo.pdf`. El link ya está en su lugar;
  hasta que el PDF exista responde 404.

## 4. Requisitos por sección

### 4.1 Navbar (`<header>` + `<nav>`)

- Links a: Inicio, Sobre mí, Experiencia, Proyectos, Contacto (anclas `#`).
- Fija arriba, con scroll suave (desactivado bajo `prefers-reduced-motion`).
- Mobile: menú hamburguesa con `aria-expanded`, `aria-controls`, cierre con Escape y al elegir un link.
- Link "Saltar al contenido" visible al recibir foco.
- Toggle de tema claro/oscuro.

### 4.2 Hero (`<section id="inicio">`)

- **Único `h1` del sitio:** el nombre.
- Rol, título y frase de presentación.
- Botones: "Ver proyectos" → `#proyectos`, "Contactarme" → `#contacto`.
- Avatar optimizado.

### 4.3 Sobre mí (`<section id="sobre-mi">`)

- Bio + skills agrupadas en tres bloques con títulos `h3`.

### 4.4 Experiencia laboral (`<section id="experiencia">`)

- Listado de experiencia (al menos el puesto actual) como timeline o tarjetas (`<article>`).
- Cada entrada: puesto, empresa y período.
- Orden cronológico inverso (más reciente primero).

### 4.5 Proyectos (`<section id="proyectos">`)

- Grilla de tarjetas (`<article>`), 1 columna en mobile, 2 en tablet, 3 en desktop.
- Tecnologías como chips con `flex-wrap` (evitar overflow a 360px).
- Links externos con `target="_blank" rel="noopener noreferrer"` y texto accesible (ej. "Ver repositorio de CineTracker").

### 4.6 Contacto (`<section id="contacto">`)

- Email, GitHub y LinkedIn con íconos + texto o `aria-label`.
- Formulario:
  - `<label>` asociado a cada campo.
  - Validación nativa (`required`, `type="email"`, `minlength`, `maxlength`) + mensajes propios en español.
  - El mensaje debe tener entre 10 y 2000 caracteres, dicho en el formulario y con contador en vivo.
  - Placeholders: "Tu nombre", "nombre@ejemplo.com", "¿Sobre qué te gustaría conversar?" (no reemplazan al `<label>`).
  - Errores anunciados con `aria-live="polite"` y `aria-describedby` en cada campo.
  - Estado de envío (enviando / enviado / error) sin recargar la página.

### 4.7 Footer (`<footer>`)

- Nombre, año y links sociales.

## 5. Requisitos transversales

- **Responsive:** correcto en 360px, 768px y 1280px, sin scroll horizontal.
- **Semántica:** `header`, `nav`, `main`, `section`, `footer`; un solo `h1`; jerarquía de headings sin saltos.
- **Accesibilidad:** `alt` en todas las imágenes, contraste AA en ambos temas, foco visible, todo navegable con teclado.
- **Tema:** claro/oscuro con Tailwind (`dark:` por clase). Script inline en `<head>` que aplique el tema antes del render (preferencia guardada o `prefers-color-scheme`) para evitar flash.
- **Animaciones:** sutiles (fade/slide al entrar en viewport con IntersectionObserver), solo dentro de `prefers-reduced-motion: no-preference`.
- **Performance:** objetivo Lighthouse ≥ 90 en Performance y Accessibility (mobile). Sin librerías JS innecesarias; fuentes con `font-display: swap` o del sistema.
- **SEO básico:** `<title>`, meta description, URL canónica, Open Graph + Twitter Card
  (con tarjeta propia de 1200×630 en `public/og.png`), `theme-color` por tema y favicon.
  Todo centralizado en `Base.astro`; `og:url` y `og:image` se arman absolutas con `Astro.site`.

## 6. Hitos (un commit por hito)

1. Setup: proyecto Astro + Tailwind, `.gitignore`, README base. [DONE]
2. Layout base (`Base.astro`) + Navbar + Footer + skip link. [DONE]
3. Hero. [DONE]
4. Sobre mí + skills. [DONE]
5. Experiencia laboral. [DONE]
6. Proyectos + tarjetas. [DONE]
7. Contacto + formulario con validación. [DONE]
8. Pasada de responsive y accesibilidad. [DONE]
9. Modo oscuro / claro. [DONE]
10. Animaciones con `prefers-reduced-motion`. [DONE]
11. CV descargable + SEO/meta. [DONE]
12. Deploy en Vercel + auditoría Lighthouse y correcciones.
13. README final (stack, cómo correrlo, link al deploy).

## 7. Checklist de aceptación

### Obligatorios
- [x] Hero con nombre, rol, frase y botón que lleva a su sección
- [x] Sobre mí con bio de 2–4 oraciones y skills por categoría
- [x] Experiencia laboral con al menos el puesto actual (empresa, rol, período)
- [x] Al menos 3 proyectos con título, descripción, tecnologías y link
- [x] Contacto con email, GitHub y LinkedIn
- [x] Navbar que llega a todas las secciones
- [x] Sin scroll horizontal en 360 / 768 / 1280 px
- [x] `header`, `nav`, `main`, `section`, `footer` y un solo `h1`
- [x] `alt` en todas las imágenes, contraste legible, navegable con teclado
- [x] Cero contenido de relleno
- [ ] Commits progresivos en GitHub
- [ ] README con stack y cómo correrlo localmente
- [ ] Deploy público en Vercel

### Opcionales
- [x] Formulario con validación
- [x] Modo oscuro y claro
- [x] Animaciones que respetan `prefers-reduced-motion`
- [ ] CV descargable en PDF
- [ ] Lighthouse ≥ 90 en Performance y Accessibility
