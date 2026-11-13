// tgfmalimusavirlik.com → gokaygul.com taşınma eşlemesi (tek doğruluk kaynağı).
// Her sayfa dosyası hedefini buradan okur; eşlemesi olmayan adres derlemeyi durdurur.
// GitHub Pages sunucu tarafı 301 veremediği için her adres statik bir "taşındı"
// sayfası olarak üretilir (canonical + anlık meta refresh) — bkz. src/layouts/Moved.astro.

export const TARGET_ORIGIN = 'https://gokaygul.com';

export type Lang = 'tr' | 'en';

// Anahtar: bu sitedeki adres (trailing slash ile). Değer: gokaygul.com'daki yol.
const map: Record<string, string> = {
  // ── TR ───────────────────────────────────────────────────────────────
  '/': '/tr/mali-musavir/',
  // gokaygul.com/tr/hakkimda/ 12 Kas 2026'dan beri bağımsız yazar sayfası (200, indekslenebilir).
  '/hakkimizda/': '/tr/hakkimda/',
  '/iletisim/': '/tr/iletisim/',
  '/cerez-ve-gizlilik/': '/tr/gizlilik/',

  '/hizmetler/': '/tr/hizmetler/',
  '/hizmetler/sirket-kurulusu/': '/tr/hizmetler/sirket-kurulus/',
  '/hizmetler/muhasebe-bordro/': '/tr/hizmetler/muhasebe-defter/',
  '/hizmetler/beyanname-vergi/': '/tr/hizmetler/vergi-danismanligi/',
  // Hedefte ayrı teşvik/KOSGEB sayfası yok; teşvik kapsamı vergi danışmanlığı sayfasında.
  '/hizmetler/tesvik-kosgeb/': '/tr/hizmetler/vergi-danismanligi/',
  '/hizmetler/teknopark/': '/tr/hizmetler/teknopark/',
  // Değerleme + birleşme/devir + uluslararası vergi hedefte üç ayrı sayfa; liste sayfası.
  '/hizmetler/danismanlik/': '/tr/hizmetler/',

  '/rehber/': '/tr/rehber/',
  '/rehber/mali-musavir-degistirme/': '/tr/blog/mali-musavir-degistirme-2026/',
  '/rehber/e-tebligat-kacirmayin/': '/tr/blog/e-tebligat-kontrolu-2026/',
  '/rehber/sahis-mi-limited-mi/': '/tr/blog/sahis-mi-limited-mi-yeni-girisimci-2026/',
  '/rehber/serbest-meslekte-gecici-vergi/': '/tr/blog/serbest-meslek-gecici-vergi-rehberi-2026/',
  '/rehber/sirketten-para-cekmenin-dogru-yolu/': '/tr/blog/huzur-hakki-ortak-para-cekme-2026/',
  '/rehber/teknoparka-girmeli-misiniz/': '/tr/rehber/teknopark-arge/',
  '/rehber/kobi-vergi-beyanname-takvimi/': '/tr/rehber/kobi-vergi/',
  '/rehber/sisli-sirket-kurulusu-rehberi/': '/tr/hizmetler/sirket-kurulus/',
  // Yatırım teşvik belgesine özel yazı yok; üretim kazancı + md. 32/A yatırım teşvik
  // indirimini işleyen en yakın yazı.
  '/rehber/uretim-yatirim-tesvik-belgesi/': '/tr/blog/indirimli-kurumlar-vergisi-oranlari-2026/',

  // ── EN (hedefler gokaygul.com sitemap'indeki hreflang eşlerinden) ────
  '/en/': '/en/',
  '/en/about/': '/en/hakkimda/',
  '/en/contact/': '/en/iletisim/',
  '/en/cookie-and-privacy/': '/en/gizlilik/',

  '/en/services/': '/en/hizmetler/',
  '/en/services/company-formation/': '/en/hizmetler/sirket-kurulus/',
  '/en/services/accounting-payroll/': '/en/hizmetler/muhasebe-defter/',
  '/en/services/tax-returns/': '/en/hizmetler/vergi-danismanligi/',
  '/en/services/incentives-kosgeb/': '/en/hizmetler/vergi-danismanligi/',
  '/en/services/technopark-rd/': '/en/hizmetler/teknopark/',
  '/en/services/advisory/': '/en/hizmetler/',

  '/en/guide/': '/en/guide/',
  '/en/guide/changing-your-accountant/': '/en/blog/changing-your-accountant-turkey-2026/',
  '/en/guide/e-notification-dont-miss-it/': '/en/blog/e-notification-5-day-rule-2026/',
  '/en/guide/sole-proprietorship-vs-limited/': '/en/blog/sole-proprietorship-vs-limited-company-turkey-2026/',
  '/en/guide/provisional-tax-self-employed/': '/en/blog/self-employment-provisional-tax-turkey-2026/',
  '/en/guide/withdrawing-money-from-your-company/': '/en/blog/directors-fee-partner-withdrawal-turkey-2026/',
  '/en/guide/should-you-enter-a-technopark/': '/en/guide/teknopark-arge/',
  '/en/guide/sme-tax-return-calendar/': '/en/guide/kobi-vergi/',
  '/en/guide/sisli-company-formation-guide/': '/en/hizmetler/sirket-kurulus/',
  '/en/guide/investment-incentive-certificate/': '/en/blog/reduced-corporate-tax-rates-turkey-2026-2027/',
};

// Eşlemede olmayan (404) adresler için dil ana sayfaları.
export const notFoundTarget: Record<Lang, string> = {
  tr: `${TARGET_ORIGIN}/tr/`,
  en: `${TARGET_ORIGIN}/en/`,
};

export const redirects: { from: string; to: string; lang: Lang }[] = Object.entries(map).map(
  ([from, to]) => ({
    from,
    to: TARGET_ORIGIN + to,
    lang: from.startsWith('/en/') ? 'en' : 'tr',
  })
);

/** Bu sitedeki bir adresin tam hedef URL'si; eşleme yoksa derlemeyi durdurur. */
export function targetFor(path: string): string {
  const to = map[path];
  if (!to) throw new Error(`[redirects] "${path}" için hedef tanımlı değil — src/data/redirects.ts dosyasına ekleyin.`);
  return TARGET_ORIGIN + to;
}
