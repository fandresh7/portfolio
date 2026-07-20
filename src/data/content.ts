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

const github = 'https://github.com/fandresh7';
const linkedin = 'https://www.linkedin.com/';

export const content: Record<Lang, SiteContent> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Ingeniero de software',
      name: 'Andrés Hortúa',
      title: 'Desarrollador Frontend',
      bio: 'Construyo aplicaciones web movido por la curiosidad y las ganas de crear cosas realmente útiles. Trato de ayudar en lo que más pueda — dentro y fuera del código.',
    },
    experience: {
      heading: 'Experiencia',
      items: [
        {
          company: 'Superlikers',
          role: 'Desarrollador Frontend Senior',
          period: '2020 — Presente',
          initials: 'SL',
        },
        {
          company: 'Smart4',
          role: 'Desarrollador Frontend',
          period: '2018 — 2019',
          initials: 'S4',
        },
      ],
    },
    projects: {
      heading: 'Proyectos',
      subheading: 'Algunas cosas en las que he trabajado, dentro y fuera del horario laboral.',
      items: [
        {
          name: 'Programas de gamificación',
          description:
            'Frontend de varias plataformas de gamificación para grandes marcas de consumo masivo, además del dashboard general de la empresa. Construidos en Angular, con foco en formularios complejos e integraciones con múltiples microsites.',
          tags: ['Angular', 'TypeScript', 'RxJS'],
          featured: true,
          company: 'Superlikers',
        },
        {
          name: 'Digitalización de facturas con IA',
          description:
            'Sistema donde el usuario sube la foto de una factura; usando la API de Veryfi Lens se extraen los productos y se registran automáticamente como compras a través de la API de Superlikers. Backend en NestJS, frontend en Vite.',
          tags: ['NestJS', 'Vite', 'Veryfi API'],
          featured: true,
          company: 'Superlikers',
        },
        {
          name: 'fin',
          description:
            'Aplicación personal para el manejo de mis finanzas. Nació de una necesidad propia y la sigo usando a diario.',
          tags: ['TypeScript'],
          github: `${github}/fin`,
        },
        {
          name: 'Spotify App',
          description: 'Cliente web que consume la API de Spotify para explorar artistas, álbumes y playlists.',
          tags: ['TypeScript', 'API REST'],
          github: `${github}/spotify-app`,
          demo: 'https://spotify-app-teal-psi.vercel.app',
        },
      ],
    },
    challenges: {
      heading: 'Retos de código',
      description:
        'Ejercicios de Frontend Mentor para practicar fundamentos: maquetación, accesibilidad y estado en distintos frameworks.',
      items: [
        { name: 'Kanban board', github: `${github}/frontendmentor-kanban-app`, demo: 'https://fm-kanban-app.netlify.app/' },
        { name: 'Finance app', github: `${github}/frontendmentor-finance-app` },
        { name: 'Todo app', github: `${github}/frontendmentor-todo-app`, demo: 'https://fm-todo-app-ssr.netlify.app/' },
        { name: 'Countries app', github: `${github}/frontendmentor-countries-app`, demo: 'https://fm-countries-app.netlify.app/' },
        { name: 'Invoice app', github: `${github}/frontendmentor-invoice-app` },
      ],
    },
    contact: {
      heading: '¿Trabajamos juntos?',
      description: 'Siempre trato de ayudar en lo que más pueda. Si tienes algo en mente, escríbeme.',
      cta: 'Escríbeme en LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    social: { github, linkedin },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Software engineer',
      name: 'Andrés Hortúa',
      title: 'Frontend Developer',
      bio: 'Building web applications driven by curiosity and the need to create things that are genuinely useful. I try to help whenever I can — in code and outside of it.',
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          company: 'Superlikers',
          role: 'Senior Frontend Developer',
          period: '2020 — Present',
          initials: 'SL',
        },
        {
          company: 'Smart4',
          role: 'Frontend Developer',
          period: '2018 — 2019',
          initials: 'S4',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      subheading: "Things I've worked on, both in and out of working hours.",
      items: [
        {
          name: 'Gamification programs',
          description:
            'Frontend for several gamification platforms for large consumer brands, plus the company-wide dashboard. Built with Angular, focused on complex forms and integrations across multiple microsites.',
          tags: ['Angular', 'TypeScript', 'RxJS'],
          featured: true,
          company: 'Superlikers',
        },
        {
          name: 'AI-powered invoice digitization',
          description:
            'A system where users upload a photo of a receipt; the Veryfi Lens API extracts the line items, which are then automatically logged as purchases through the Superlikers API. NestJS backend, Vite frontend.',
          tags: ['NestJS', 'Vite', 'Veryfi API'],
          featured: true,
          company: 'Superlikers',
        },
        {
          name: 'fin',
          description:
            'A personal app for managing my own finances. It came out of a real need and I still use it every day.',
          tags: ['TypeScript'],
          github: `${github}/fin`,
        },
        {
          name: 'Spotify App',
          description: 'A web client consuming the Spotify API to explore artists, albums and playlists.',
          tags: ['TypeScript', 'REST API'],
          github: `${github}/spotify-app`,
          demo: 'https://spotify-app-teal-psi.vercel.app',
        },
      ],
    },
    challenges: {
      heading: 'Code challenges',
      description:
        'Frontend Mentor exercises to practice fundamentals: layout, accessibility and state across different frameworks.',
      items: [
        { name: 'Kanban board', github: `${github}/frontendmentor-kanban-app`, demo: 'https://fm-kanban-app.netlify.app/' },
        { name: 'Finance app', github: `${github}/frontendmentor-finance-app` },
        { name: 'Todo app', github: `${github}/frontendmentor-todo-app`, demo: 'https://fm-todo-app-ssr.netlify.app/' },
        { name: 'Countries app', github: `${github}/frontendmentor-countries-app`, demo: 'https://fm-countries-app.netlify.app/' },
        { name: 'Invoice app', github: `${github}/frontendmentor-invoice-app` },
      ],
    },
    contact: {
      heading: "Let's work together",
      description: "I always try to help however I can. If you have something in mind, reach out.",
      cta: 'Message me on LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    social: { github, linkedin },
  },
};
