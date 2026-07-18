// TGF dist/ statik SEO+GEO denetimi — HTTP'siz, dosya tabanlı
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = process.argv[2] ?? new URL('../dist', import.meta.url).pathname;
const htmlFiles = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && htmlFiles.push(p);
  }
})(DIST);

const issues = [];
const stats = { pages: 0, internalLinks: 0, brokenInternal: 0, imgs: 0, imgsNoAlt: 0, imgsNoDim: 0 };
const dec = (s) => s == null ? s : s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n)).replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const get = (html, re) => { const m = html.match(re); return m ? dec(m[1]) : null; };
const getAll = (html, re) => [...html.matchAll(re)].map(m => m[1]);

const resolveInternal = (href) => {
  let p = href.split('#')[0].split('?')[0];
  if (!p) return true;
  if (p.startsWith('/')) p = p.slice(1);
  const c = [join(DIST, p), join(DIST, p, 'index.html'), join(DIST, p.replace(/\/$/, '') + '.html')];
  return c.some(existsSync);
};

for (const file of htmlFiles) {
  stats.pages++;
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(DIST, '');

  const title = get(html, /<title>([^<]*)<\/title>/);
  const desc = get(html, /<meta name="description" content="([^"]*)"/);
  const canonical = get(html, /<link rel="canonical" href="([^"]*)"/);
  const h1s = getAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g);

  if (!title) issues.push(`${rel}: TITLE YOK`);
  else if (title.length > 65) issues.push(`${rel}: title uzun (${title.length}): ${title.slice(0,60)}…`);
  if (!desc) issues.push(`${rel}: META DESCRIPTION YOK`);
  else if (desc.length > 165) issues.push(`${rel}: description uzun (${desc.length})`);
  else if (desc.length < 70) issues.push(`${rel}: description kısa (${desc.length})`);
  if (!canonical) issues.push(`${rel}: CANONICAL YOK`);
  if (h1s.length !== 1 && !rel.includes('404')) issues.push(`${rel}: h1 sayısı ${h1s.length}`);

  const hreflangs = getAll(html, /hreflang="([^"]*)"/g);
  if (!rel.includes('404') && hreflangs.length < 3) issues.push(`${rel}: hreflang eksik (${hreflangs.join(',')})`);

  for (const block of getAll(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block); } catch { issues.push(`${rel}: BOZUK JSON-LD`); }
  }

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    stats.imgs++;
    if (!/alt="/.test(img[0])) { stats.imgsNoAlt++; issues.push(`${rel}: alt'sız img: ${img[0].slice(0,80)}`); }
    if (!/width=/.test(img[0]) || !/height=/.test(img[0])) stats.imgsNoDim++;
  }

  for (const href of getAll(html, /href="(\/[^"]*)"/g)) {
    stats.internalLinks++;
    if (!resolveInternal(href)) { stats.brokenInternal++; issues.push(`${rel}: KIRIK İÇ LİNK → ${href}`); }
  }

  if (!get(html, /property="og:image" content="([^"]*)"/)) issues.push(`${rel}: og:image yok`);
}

const sm = join(DIST, 'sitemap.xml');
if (existsSync(sm)) {
  const urls = getAll(readFileSync(sm, 'utf8'), /<loc>([^<]*)<\/loc>/g);
  console.log(`SITEMAP: ${urls.length} URL`);
  for (const u of urls) {
    const p = u.replace('https://tgfmalimusavirlik.com', '');
    if (!resolveInternal(p)) console.log(`  SITEMAP'te var, dist'te YOK: ${p}`);
  }
} else console.log('SITEMAP YOK!');
console.log('llms.txt:', existsSync(join(DIST, 'llms.txt')) ? 'VAR' : 'YOK');

console.log('\n== İSTATİSTİK ==', JSON.stringify(stats));
console.log(`\n== SORUNLAR (${issues.length}) ==`);
issues.forEach(i => console.log(' -', i));
