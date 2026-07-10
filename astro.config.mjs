import { defineConfig } from 'astro/config';

// TGF Mali Müşavirlik — tgfmalimusavirlik.com
// Sade, Türkçe, yerel (Şişli/İstanbul) KOBİ mali müşavirlik firma sitesi.
// Statik çıktı (blog yok, form ileride harici handler'a bağlanacak).
// trailingSlash 'always' → canonical + sitemap tutarlılığı (gokaygul.com ile aynı çizgi).
//
// NOT: @astrojs/sitemap kaldırıldı — 3.7.x, Astro 5'in `astro:build:done` API'sini
// bekliyor (routes), Astro 4.16 ile uyumsuz ('reduce' of undefined). gokaygul.com da
// aynı nedenle manuel sitemap kullanıyor. Bizim manuel endpoint: src/pages/sitemap.xml.ts
export default defineConfig({
  site: 'https://tgfmalimusavirlik.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
