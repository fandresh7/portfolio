import es from '../i18n/es.json';
import en from '../i18n/en.json';
import { experience, type ExperienceEntry } from './experience';
import { projects, type ProjectEntry } from './projects';
import { challenges, type ChallengeEntry } from './challenges';
import { social } from './social';

export type Lang = 'es' | 'en';

export interface ExperienceItem extends ExperienceEntry {
  role: string;
  period: string;
}

export interface ProjectItem extends ProjectEntry {
  name: string;
  description: string;
}

export type ChallengeItem = ChallengeEntry;

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
    viewGallery: string;
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

type Translations = typeof es;

function buildContent(t: Translations): SiteContent {
  return {
    nav: t.nav,
    hero: t.hero,
    experience: {
      heading: t.experience.heading,
      items: experience.map((entry) => ({
        ...entry,
        ...(t.experience.items as Record<string, { role: string; period: string }>)[entry.id],
      })),
    },
    projects: {
      heading: t.projects.heading,
      subheading: t.projects.subheading,
      items: projects.map((entry) => ({
        ...entry,
        ...(t.projects.items as Record<string, { name: string; description: string }>)[entry.id],
      })),
    },
    challenges: {
      heading: t.challenges.heading,
      description: t.challenges.description,
      viewGallery: t.challenges.viewGallery,
      items: challenges,
    },
    contact: t.contact,
    footer: t.footer,
    social,
  };
}

export const content: Record<Lang, SiteContent> = {
  es: buildContent(es),
  en: buildContent(en),
};
