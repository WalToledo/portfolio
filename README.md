# Portfolio — Walter Toledo

Portfolio personal de Walter Toledo, Desarrollador de Software Fullstack. Trabajo práctico de la facultad (Desarrollo Web 2).

**Sitio en producción:** https://portfolio-walter-toledo.vercel.app/

## Stack

- **Framework:** [Astro](https://astro.build) (salida estática)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com)
- **Lenguaje:** TypeScript (datos y scripts)
- **JavaScript en cliente:** scripts chicos e inline, sin frameworks de UI (menú mobile, tema, idioma, animaciones, validación del formulario)
- **Imágenes:** componente `<Image>` de `astro:assets` (WebP optimizado)
- **Formulario de contacto:** [Web3Forms](https://web3forms.com)
- **Deploy:** [Vercel](https://vercel.com), importado desde GitHub con auto-deploy en cada push

## Requisitos

- Node.js 22.12 o superior

## Cómo correrlo localmente

```bash
npm install        # instala las dependencias
npm run dev         # servidor local en http://localhost:4321
npm run build       # build de producción en dist/
npm run preview     # sirve el build localmente
```

## Estructura del proyecto

```
src/
  components/   # un componente por sección (Navbar, Hero, AboutMe, Experience, Projects, Contact, Footer)
  data/         # contenido: projects.ts, skills.ts, experience.ts, i18n.ts
  layouts/      # Base.astro (head, SEO, script de tema)
  pages/        # index.astro
  styles/       # global.css
public/         # estáticos (og.png, favicon, fuentes)
```

## Características

- Responsive (360px / 768px / 1280px), sin scroll horizontal
- Modo claro/oscuro sin flash (aplicado antes del render)
- Toggle de idioma ES/EN que traduce todo el contenido sin recargar la página
- Accesible: HTML semántico, un solo `h1`, foco visible, navegable por teclado
- Animaciones sutiles que respetan `prefers-reduced-motion`
- SEO: meta description, canonical, Open Graph y Twitter Card
- Lighthouse 100 en Performance, Accessibility, Best Practices y SEO (mobile)
