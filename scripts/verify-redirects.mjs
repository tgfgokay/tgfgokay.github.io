// Taşınma doğrulaması: dist/ içindeki her sayfanın canonical + meta refresh hedefi
// src/data/redirects.ts ile aynı mı ve hedef gokaygul.com'da canlı mı?
// Kullanım: npx astro build && NODE_USE_ENV_PROXY=1 node scripts/verify-redirects.mjs
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const ORIGIN = 'https://gokaygul.com';

// Eşlemeyi kaynak dosyadan oku (derleme çıktısından bağımsız ikinci göz).
const src = readFileSync(join(ROOT, 'src/data/redirects.ts'), 'utf8');
const map = new Map([...src.matchAll(/^\s*'(\/[^']*)':\s*'(\/[^']*)',/gm)].map((m) => [m[1], ORIGIN + m[2]]));
const special = new Map([['/404.html', `${ORIGIN}/tr/`], ['/en/404/', `${ORIGIN}/en/`]]);

const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && files.push(p);
  }
})(DIST);

const sitemapXml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
const live = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

const problems = [];
const seen = new Set();
const targets = new Set();
let ok = 0;
for (const file of files.sort()) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/');
  const path = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
  const html = readFileSync(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const refresh = html.match(/<meta http-equiv="refresh" content="0; url=([^"]*)"/)?.[1];
  const expected = map.get(path) ?? special.get(path);
  const errs = [];
  if (!expected) errs.push('eşlemede yok');
  if (canonical !== expected) errs.push(`canonical=${canonical}`);
  if (refresh !== expected) errs.push(`refresh=${refresh}`);
  if (expected && !live.has(expected)) errs.push('hedef gokaygul.com sitemap\'inde yok');
  if (!html.includes(`<a href="${expected}">`)) errs.push('görünür bağlantı yok');
  if (/noindex/i.test(html)) errs.push('noindex var');
  if (/<script|<form|ld\+json/i.test(html)) errs.push('script/form/JSON-LD var');
  if (!/<title>(Taşındı|Moved) — gokaygul\.com<\/title>/.test(html)) errs.push('başlık farklı');
  seen.add(path);
  if (expected) targets.add(expected);
  errs.length ? problems.push(`${path} → ${errs.join('; ')}`) : ok++;
}
for (const from of map.keys()) if (!seen.has(from)) problems.push(`${from} → eşlemede var, dist/ içinde sayfası yok`);

// Hedefler gerçekten yanıt veriyor mu, kendisi yönlenmiyor/noindex değil mi?
let liveOk = 0;
for (const t of targets) {
  const res = await fetch(t, { redirect: 'manual' });
  const body = res.status === 200 ? await res.text() : '';
  const canon = body.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (res.status !== 200) problems.push(`${t} → HTTP ${res.status}`);
  else if (/<meta name="robots" content="[^"]*noindex/i.test(body)) problems.push(`${t} → hedef noindex`);
  else if (canon !== t) problems.push(`${t} → hedefin canonical'ı farklı: ${canon}`);
  else liveOk++;
}

console.log(`Toplam sayfa: ${files.length} (eşleme: ${map.size} adres + 2 adet 404)`);
console.log(`Eşleşen: ${ok}`);
console.log(`Benzersiz hedef: ${targets.size}, canlı doğrulanan (200 + self-canonical + indexlenebilir): ${liveOk}`);
console.log(`Sorunlu: ${problems.length}`);
for (const p of problems) console.log('  ✗ ' + p);
process.exit(problems.length ? 1 : 0);
