// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // "site" es lo que hace que Astro.site exista: sin esto no se pueden armar las
  // URLs absolutas que exigen el canonical y og:image. Es el dominio por defecto
  // que asigna Vercel (usuario + repo); se ajusta acá si cambia al deployar.
  site: 'https://portfolio-walter-toledo.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});