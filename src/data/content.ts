import es from '../i18n/es.json';
import en from '../i18n/en.json';

export type Lang = 'es' | 'en';

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  npm?: string;
  featured?: boolean;
  company?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  initials: string;
  url?: string;
}

export interface ChallengeItem {
  name: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export interface SiteContent {
  nav: {
    home: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    kicker: string;
    name: string;
    title: string;
    bio: string;
  };
  experience: {
    heading: string;
    items: ExperienceItem[];
  };
  projects: {
    heading: string;
    subheading: string;
    items: ProjectItem[];
  };
  challenges: {
    heading: string;
    description: string;
    items: ChallengeItem[];
  };
  contact: {
    heading: string;
    description: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
}

export const content: Record<Lang, SiteContent> = { es, en } as Record<Lang, SiteContent>;
