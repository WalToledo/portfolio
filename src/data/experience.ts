import type { Localized } from './i18n';

export interface ExperienceEntry {
  role: Localized;
  company: string;
  period: Localized;
  // Opcional: solo las entradas que necesitan explicar de qué se trata el
  // puesto la llevan. Sin descripción, la tarjeta queda igual que antes.
  description?: Localized;
}

// Orden cronológico inverso: la más reciente primero.
export const experience: ExperienceEntry[] = [
  {
    role: { es: 'Desarrollador de Software Fullstack Junior', en: 'Junior Fullstack Software Developer' },
    company: 'Jusmet',
    period: { es: '2026–actualidad', en: '2026–present' },
  },
  {
    role: { es: 'Desarrollador full stack', en: 'Full-stack Developer' },
    company: 'Freelance',
    period: { es: '2026–actualidad', en: '2026–present' },
    description: {
      es: 'Sitios y sistemas a medida para estudios, agencias y comercios: arquitectura, frontend, APIs, CRMs propios y deploy en Vercel.',
      en: 'Custom sites and systems for studios, agencies, and businesses: architecture, frontend, APIs, custom CRMs, and deployment on Vercel.',
    },
  },
];
