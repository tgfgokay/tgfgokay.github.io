import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, services } from '../data/site';
import { servicesEn, rehberToGuideSlug } from '../i18n/en';

// Manuel sitemap — @astrojs/sitemap Astro 4 ile uyumsuz olduğu için.
// trailingSlash 'always' formuna sabit. Her sayfa TR ↔ EN hreflang eşi ile yazılır.

type Pair = { tr: string; en: string };

const staticPairs: Pair[] = [
  { tr: '/', en: '/en/' },
  { tr: '/hizmetler/', en: '/en/services/' },
  { tr: '/rehber/', en: '/en/guide/' },
  { tr: '/hakkimizda/', en: '/en/about/' },
  { tr: '/iletisim/', en: '/en/contact/' },
];

const trToEn = Object.fromEntries(servicesEn.map((s) => [s.trSlug, s.slug]));
const servicePairs: Pair[] = services.map((s) => ({
  tr: `/hizmetler/${s.slug}/`,
  en: `/en/services/${trToEn[s.slug]}/`,
}));

const posts = await getCollection('rehber', ({ data }) => !data.draft);
const guidePairs: Pair[] = posts
  .filter((p) => rehberToGuideSlug[p.slug])
  .map((p) => ({ tr: `/rehber/${p.slug}/`, en: `/en/guide/${rehberToGuideSlug[p.slug]}/` }));

const allPairs = [...staticPairs, ...servicePairs, ...guidePairs];

const today = new Date().toISOString().split('T')[0];

const priorityFor = (p: string) => {
  if (p === '/' || p === '/en/') return '1.0';
  if (/^\/(en\/services|hizmetler)\/[^/]+\/$/.test(p)) return '0.8';
  return '0.7';
};

export const GET: APIRoute = () => {
  const urls: string[] = [];
  for (const pair of allPairs) {
    for (const loc of [pair.tr, pair.en]) {
      urls.push(`  <url>
    <loc>${site.url}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="tr" href="${site.url}${pair.tr}" />
    <xhtml:link rel="alternate" hreflang="en" href="${site.url}${pair.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${pair.tr}" />
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityFor(loc)}</priority>
  </url>`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
