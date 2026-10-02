# CLAUDE.md

Portfolio personal de Walter Toledo, hecho con Astro + Tailwind y deployado en Vercel.

## Antes de cualquier tarea

1. Leé `SPECS.md`: es la fuente de verdad del contenido, los requisitos y los hitos.
2. Trabajá **un hito por vez**, solo el que se pida. No adelantes trabajo de otros hitos.
3. Si un dato figura como `PENDIENTE` en SPECS.md, **no lo inventes**: preguntá o dejalo fuera y avisá.
4. Al terminar un hito, verificá los ítems de la checklist de SPECS.md que apliquen y listá qué quedó cubierto.
5. No hagas commits: Walter revisa y commitea cada hito.

## Contexto

Es el primer proyecto de Walter con Astro. Al introducir algo propio de Astro (props, `astro:assets`, scripts en componentes, etc.) explicalo en una o dos líneas.

## Comandos

```bash
npm install        # dependencias
npm run dev        # servidor local en http://localhost:4321
npm run build      # build de producción en dist/
npm run preview    # servir el build localmente
```

## Convenciones

- Componentes en `src/components/`, uno por sección (`Navbar.astro`, `Hero.astro`, etc.).
- Contenido en `src/data/` (`projects.ts`, `skills.ts`), nunca hardcodeado en los componentes.
- Estilos con clases de Tailwind; CSS propio solo si Tailwind no alcanza.
- JavaScript de cliente mínimo, en `<script>` dentro del componente que lo usa. Sin frameworks de UI.
- HTML semántico y accesible: un solo `h1`, labels en los inputs, foco visible, `alt` descriptivos.
- Todo texto visible en español.
- Nombres de archivos y componentes en inglés; contenido y comentarios en español.

   ## Memoria
   - Para memoria persistente usá Engram, no MEMORY.md.