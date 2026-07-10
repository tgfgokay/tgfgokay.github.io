// scripts/generate-covers.mjs
//
// Rehber yazıları için marka-odaklı kapak görseli üretir (Stil A — Blurple gradyan).
// Çıktı: public/rehber-covers/{slug}.png — 1200×630 (OG + sayfa içi kapak).
// Her build öncesi `npm run covers` ile çalıştırılır.
//
// TR karakter notu: satori latin-ext woff ister; yüklenmezse İŞĞıüçö "□" basar.

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// İşlenecek koleksiyonlar: TR rehber + EN guide. Her biri kendi kicker'ı ve
// çıktı dizini ile üretilir; başlık dışında şablon aynı.
const COLLECTIONS = [
  { dir: join(ROOT, 'src', 'content', 'rehber'), out: join(ROOT, 'public', 'rehber-covers'), kicker: 'REHBER' },
  { dir: join(ROOT, 'src', 'content', 'guide'), out: join(ROOT, 'public', 'guide-covers'), kicker: 'GUIDE' },
];

const FONTS = join(ROOT, 'node_modules', '@fontsource', 'sora', 'files');
// latin = temel A-Z, latin-ext = TR uzatılmış (Ş,İ,ğ,ı,ç...). İKİSİ de gerekli;
// tek subset verilirse eksik glyph "□" basar.
const font = (w) => readFileSync(join(FONTS, `sora-latin-${w}-normal.woff`));
const fontExt = (w) => readFileSync(join(FONTS, `sora-latin-ext-${w}-normal.woff`));

const C = {
  violet: '#8A7BFF',
  blurple: '#635BFF',
  indigo: '#4B45C6',
  white: '#FFFFFF',
};

const W = 1200;
const H = 630;

// Beyaz amblem (translucent squircle + beyaz TGF glyph) — data URI img olarak.
const EMBLEM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="76" height="76"><path d="M29 3 L71 3 Q97 3 97 29 L97 71 Q97 97 71 97 L29 97 Q3 97 3 71 L3 29 Q3 3 29 3 Z" fill="#ffffff" opacity="0.16"/><g transform="translate(24.9870,59.5160) scale(0.026,-0.026)" fill="#ffffff"><path d="M220 0V588H406V0ZM20 568V730H606V568Z"/><path transform="translate(587.54,0)" d="M427 -20Q324 -20 250.0 14.5Q176 49 129.0 105.0Q82 161 60.0 227.0Q38 293 38 356V378Q38 446 61.0 512.5Q84 579 130.5 633.0Q177 687 247.0 719.5Q317 752 411 752Q512 752 589.5 715.0Q667 678 714.0 612.5Q761 547 769 461H583Q577 494 554.0 520.5Q531 547 494.5 562.5Q458 578 411 578Q366 578 331.5 562.5Q297 547 273.5 518.5Q250 490 238.0 451.0Q226 412 226 366Q226 320 239.0 280.5Q252 241 277.0 211.5Q302 182 340.0 166.0Q378 150 427 150Q489 150 534.0 176.0Q579 202 597 245L583 135V294H753V144Q707 65 622.5 22.5Q538 -20 427 -20ZM407 258V388H813V258Z"/><path transform="translate(1382.08,0)" d="M74 0V730H260V0ZM240 283V435H511V283ZM240 578V730H522V578Z"/></g></svg>`;
const EMBLEM_URI = `data:image/svg+xml;base64,${Buffer.from(EMBLEM).toString('base64')}`;

// Frontmatter'dan title çek (basit parser — quoted title).
function parseFrontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    out[kv[1]] = v;
  }
  return out;
}

function el(type, style, children) {
  return { type, props: { style, children } };
}

function img(src, w, h) {
  return { type: 'img', props: { src, width: w, height: h, style: { width: w, height: h } } };
}

function cover(title, kicker) {
  return el(
    'div',
    {
      width: W,
      height: H,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '80px 88px',
      backgroundImage: `linear-gradient(135deg, ${C.violet} 0%, ${C.blurple} 50%, ${C.indigo} 100%)`,
      // Sora = temel latin; SoraExt = TR uzatılmış glyph fallback'i (satori aynı
      // isimli fontları teklediği için ext ayrı aile adıyla veriliyor).
      fontFamily: 'Sora, SoraExt',
      color: C.white,
    },
    [
      // Üst: amblem + marka
      el('div', { display: 'flex', alignItems: 'center' }, [
        img(EMBLEM_URI, 76, 76),
        el('div', { display: 'flex', flexDirection: 'column', marginLeft: 20 }, [
          el('div', { fontSize: 24, fontWeight: 600, letterSpacing: 0.5 }, 'TGF Mali Müşavirlik'),
          el('div', { fontSize: 14, fontWeight: 400, letterSpacing: 3, opacity: 0.85, marginTop: 2 }, 'ŞİŞLİ · İSTANBUL'),
        ]),
      ]),
      // Orta: kicker + başlık
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', { fontSize: 20, fontWeight: 600, letterSpacing: 4, opacity: 0.85, marginBottom: 22 }, kicker),
        el('div', { fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 900 }, title),
      ]),
      // Alt: imza + URL
      el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 19, opacity: 0.9 }, [
        el('div', { fontWeight: 600 }, 'Gökay Gül · SMMM'),
        el('div', { fontWeight: 400 }, 'tgfmalimusavirlik.com'),
      ]),
    ]
  );
}

async function main() {
  const fonts = [400, 500, 600, 800].flatMap((w) => [
    { name: 'Sora', data: font(w), weight: w, style: 'normal' },
    { name: 'SoraExt', data: fontExt(w), weight: w, style: 'normal' },
  ]);

  let total = 0;
  for (const { dir, out, kicker } of COLLECTIONS) {
    mkdirSync(out, { recursive: true });
    const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const fm = parseFrontmatter(readFileSync(join(dir, file), 'utf8'));
      if (!fm.title) {
        console.warn(`⚠ ${file}: title yok, atlandı`);
        continue;
      }
      const svg = await satori(cover(fm.title, kicker), { width: W, height: H, fonts });
      const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
      writeFileSync(join(out, `${slug}.png`), png);
      console.log(`✓ ${kicker}/${slug}.png`);
      total++;
    }
  }
  console.log(`\n${total} kapak üretildi → public/{rehber,guide}-covers/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
