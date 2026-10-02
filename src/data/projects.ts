export interface ProjectEntry {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
}

export const projects: ProjectEntry[] = [
  {
    title: 'CineTracker',
    description:
      'Aplicación web para descubrir películas, gestionar una lista de visualización propia y dejar reseñas de cada lanzamiento.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/WalToledo/cine-tracker',
  },
  {
    title: 'SmartCloth Logistics',
    description:
      'Plataforma de e-commerce y gestión logística que automatiza la distribución de indumentaria, conectando una tienda online con un sistema de logística de precisión.',
    stack: ['React', 'Next.js', 'Node.js', 'Stripe', 'Clerk', 'Resend', 'Sanity', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/fassardi245/SmartCloth',
  },
  {
    title: 'Grito de Gol',
    description:
      'Dashboard interactivo para visualizar información de ligas, equipos, partidos y estadísticas de fútbol, con navegación drill down y tablas de posiciones.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/WalToledo/GritoDeGol',
  },
];
