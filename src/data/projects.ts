import type { Localized } from './i18n';

export interface ProjectEntry {
  title: string;
  description: Localized;
  stack: string[];
  repoUrl: string;
}

export const projects: ProjectEntry[] = [
  {
    title: 'CineTracker',
    description: {
      es: 'Aplicación web para descubrir películas, gestionar una lista de visualización propia y dejar reseñas de cada lanzamiento.',
      en: 'A web app for discovering movies, managing a personal watchlist, and leaving reviews for each release.',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/WalToledo/cine-tracker',
  },
  {
    title: 'SmartCloth Logistics',
    description: {
      es: 'Plataforma de e-commerce y gestión logística que automatiza la distribución de indumentaria, conectando una tienda online con un sistema de logística de precisión.',
      en: 'An e-commerce and logistics management platform that automates apparel distribution, connecting an online store with a precision logistics system.',
    },
    stack: ['React', 'Next.js', 'Node.js', 'Stripe', 'Clerk', 'Resend', 'Sanity', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/fassardi245/SmartCloth',
  },
  {
    title: 'Grito de Gol',
    description: {
      es: 'Dashboard interactivo para visualizar información de ligas, equipos, partidos y estadísticas de fútbol, con navegación drill down y tablas de posiciones.',
      en: 'An interactive dashboard for visualizing leagues, teams, matches, and soccer stats, with drill-down navigation and standings tables.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Prisma'],
    repoUrl: 'https://github.com/WalToledo/GritoDeGol',
  },
];
