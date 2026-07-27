import type { APIRoute } from 'astro';
import es from '../../i18n/es.json';
import en from '../../i18n/en.json';
import type { Lang } from '../../data/content';

const translations: Record<Lang, unknown> = { es, en };

export function getStaticPaths() {
  return (Object.keys(translations) as Lang[]).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Lang;

  return new Response(JSON.stringify(translations[lang]), {
    headers: { 'Content-Type': 'application/json' },
  });
};
