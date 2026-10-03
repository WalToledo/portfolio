export interface SkillCategory {
  category: string;
  /** Nombre del ícono en SkillIcon.astro (cada categoría lleva el suyo). */
  icon: 'frontend' | 'backend' | 'database' | 'tools';
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'Next.js', 'Prisma (ORM)', 'C', 'C#/.NET', 'APIs REST'],
  },
  {
    category: 'Bases de Datos',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'NoSQL'],
  },
  {
    category: 'Herramientas',
    icon: 'tools',
    items: ['Git', 'GitHub', 'Docker'],
  },
];

export const languages: string[] = ['Inglés', 'Español'];
