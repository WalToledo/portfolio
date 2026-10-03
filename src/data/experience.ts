export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  // Opcional: solo las entradas que necesitan explicar de qué se trata el
  // puesto la llevan. Sin descripción, la tarjeta queda igual que antes.
  description?: string;
}

// Orden cronológico inverso: la más reciente primero.
export const experience: ExperienceEntry[] = [
  {
    role: 'Desarrollador de Software Fullstack Junior',
    company: 'Jusmet',
    period: '2026–actualidad',
  },
  {
    role: 'Desarrollador full stack',
    company: 'Freelance',
    period: '2026–actualidad',
    description:
      'Sitios y sistemas a medida para estudios, agencias y comercios: arquitectura, frontend, APIs, CRMs propios y deploy en Vercel.',
  },
];
