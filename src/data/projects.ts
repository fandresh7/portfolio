import { social } from './social';

export interface ProjectEntry {
  id: string;
  tags: string[];
  github?: string;
  demo?: string;
  npm?: string;
  featured?: boolean;
  company?: string;
}

// Language-agnostic facts about each project. Translatable text (name, description)
// lives in src/i18n/*.json, keyed by the same id.
export const projects: ProjectEntry[] = [
  {
    id: 'gamification',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    featured: true,
    company: 'Superlikers',
  },
  {
    id: 'invoice-ai',
    tags: ['NestJS', 'Vite', 'Veryfi API'],
    featured: true,
    company: 'Superlikers',
  },
  {
    id: 'fin',
    tags: ['TypeScript'],
    github: `${social.github}/fin`,
  },
  {
    id: 'spotify',
    tags: ['TypeScript', 'REST API'],
    github: `${social.github}/spotify-app`,
    demo: 'https://spotify-app-teal-psi.vercel.app',
  },
];
