import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { redirects } from '../data/redirects';

// Manuel sitemap. Site gokaygul.com'a taşındı; eski adresler burada listelenmeye
// devam eder ki arama motorları her birini yeniden tarayıp yönlendirmeyi görsün.
// Liste src/data/redirects.ts ile birebir aynıdır.

const today = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const urls = redirects.map(
    (r) => `  <url>
    <loc>${site.url}${r.from}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
