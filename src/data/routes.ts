import type { Lang, SiteContent } from './content';

export const sectionIds = ['inicio', 'experiencia', 'proyectos', 'contacto'] as const;
export type SectionId = (typeof sectionIds)[number];

// URLs are always in English, regardless of the page language.
const slugs: Record<SectionId, string> = {
  inicio: 'home',
  experiencia: 'experience',
  proyectos: 'projects',
  contacto: 'contact',
};

const prefix: Record<Lang, string> = { es: '', en: '/en' };

export function sectionPath(lang: Lang, id: SectionId): string {
  return `${prefix[lang]}/${slugs[id]}`;
}

export interface NavItem {
  id: SectionId;
  label: string;
  href: string;
}

export function navItems(content: SiteContent, lang: Lang): NavItem[] {
  return [
    { id: 'inicio', label: content.nav.home, href: sectionPath(lang, 'inicio') },
    { id: 'experiencia', label: content.nav.experience, href: sectionPath(lang, 'experiencia') },
    { id: 'proyectos', label: content.nav.projects, href: sectionPath(lang, 'proyectos') },
    { id: 'contacto', label: content.nav.contact, href: sectionPath(lang, 'contacto') },
  ];
}
