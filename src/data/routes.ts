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

// Maps each section to its key in SiteContent['nav'], used to look up translations client-side.
const navKeys: Record<SectionId, keyof SiteContent['nav']> = {
  inicio: 'home',
  experiencia: 'experience',
  proyectos: 'projects',
  contacto: 'contact',
};

const prefix: Record<Lang, string> = { es: '/es', en: '' };
const langs: Lang[] = ['es', 'en'];

export function sectionPath(lang: Lang, id: SectionId): string {
  return `${prefix[lang]}/${slugs[id]}`;
}

export interface NavItem {
  id: SectionId;
  key: keyof SiteContent['nav'];
  label: string;
  href: string;
  // Precomputed href for every language, so the client-side language switch
  // can update links without re-deriving routing logic in JS.
  hrefs: Record<Lang, string>;
}

export function navItems(content: SiteContent, lang: Lang): NavItem[] {
  return sectionIds.map((id) => ({
    id,
    key: navKeys[id],
    label: content.nav[navKeys[id]],
    href: sectionPath(lang, id),
    hrefs: Object.fromEntries(langs.map((l) => [l, sectionPath(l, id)])) as Record<Lang, string>,
  }));
}
