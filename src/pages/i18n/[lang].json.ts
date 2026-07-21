import type { APIRoute } from 'astro';
import { content, type Lang } from '../../data/content';

export function getStaticPaths() {
  return (Object.keys(content) as Lang[]).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Lang;

  return new Response(JSON.stringify(content[lang]), {
    headers: { 'Content-Type': 'application/json' },
  });
};
