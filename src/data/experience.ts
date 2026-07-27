export interface ExperienceEntry {
  id: string;
  company: string;
  initials: string;
  url?: string;
}

// Language-agnostic facts about each role. Translatable text (role title, period)
// lives in src/i18n/*.json, keyed by the same id.
export const experience: ExperienceEntry[] = [
  { id: 'superlikers', company: 'Superlikers', initials: 'SL' },
  { id: 'smart4', company: 'Smart4', initials: 'S4' },
];
