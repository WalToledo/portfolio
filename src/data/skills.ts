export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Prisma (ORM)', 'C', 'C#', '.NET', 'Diseño y consumo de APIs REST'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Bases de datos (SQL, NoSQL)', 'Docker'],
  },
];

export const languages: string[] = ['Inglés', 'Español'];
