export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
}

// Orden cronológico inverso: la más reciente primero.
export const experience: ExperienceEntry[] = [
  {
    role: 'Desarrollador de Software Fullstack Junior',
    company: 'Jusmet',
    period: '2026–actualidad',
  },
];
