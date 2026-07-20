export interface TechIcon {
  label: string;
  bg: string;
  fg: string;
}

export const techIcons: Record<string, TechIcon> = {
  Angular: { label: 'A', bg: '#dd0031', fg: '#ffffff' },
  TypeScript: { label: 'TS', bg: '#3178c6', fg: '#ffffff' },
  JavaScript: { label: 'JS', bg: '#f7df1e', fg: '#111111' },
  RxJS: { label: 'Rx', bg: '#b7178c', fg: '#ffffff' },
  NestJS: { label: 'N', bg: '#e0234e', fg: '#ffffff' },
  Vite: { label: 'V', bg: '#646cff', fg: '#ffffff' },
};
