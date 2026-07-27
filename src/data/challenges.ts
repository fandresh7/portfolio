import { social } from './social';

export interface ChallengeEntry {
  id: string;
  name: string;
  tags: string[];
  github?: string;
  images?: string[];
  imagesMobile?: string[];
}

// Fully language-agnostic: these apps' names and tech stacks don't change
// between locales, so there's nothing to keep in src/i18n/*.json for them.
export const challenges: ChallengeEntry[] = [
  {
    id: 'kanban',
    name: 'Kanban board',
    tags: ['Angular', 'NestJS'],
    github: `${social.github}/frontendmentor-kanban-app`,
  },
  {
    id: 'finance',
    name: 'Finance app',
    tags: ['Angular'],
    github: `${social.github}/frontendmentor-finance-app`,
    images: [
      '/finance/finances1.png',
      '/finance/finance2.png',
      '/finance/finance3.png',
      '/finance/finance4.png',
      '/finance/finance5.png',
      '/finance/finance6.png',
      '/finance/finance7.png',
    ],
  },
  {
    id: 'todo',
    name: 'Todo app',
    tags: ['Angular'],
    github: `${social.github}/frontendmentor-todo-app`,
  },
  {
    id: 'countries',
    name: 'Countries app',
    tags: ['Angular'],
    github: `${social.github}/frontendmentor-countries-app`,
  },
  {
    id: 'invoice',
    name: 'Invoice app',
    tags: ['Angular'],
    github: `${social.github}/frontendmentor-invoice-app`,
  },
];
