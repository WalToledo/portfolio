import type { Localized } from './i18n';

export interface SkillCategory {
  category: Localized;
  /** Nombre del ícono en SkillIcon.astro (cada categoría lleva el suyo). */
  icon: 'frontend' | 'backend' | 'database' | 'tools';
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: { es: 'Frontend', en: 'Frontend' },
    icon: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: { es: 'Backend', en: 'Backend' },
    icon: 'backend',
    items: ['Node.js', 'Next.js', 'Prisma (ORM)', 'C', 'C#/.NET', 'APIs REST'],
  },
  {
    category: { es: 'Bases de Datos', en: 'Databases' },
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'NoSQL'],
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    icon: 'tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

export const languages: Record<'es' | 'en', string[]> = {
  es: ['Inglés', 'Español'],
  en: ['English', 'Spanish'],
};
