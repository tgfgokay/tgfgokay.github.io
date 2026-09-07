import { readFileSync } from 'node:fs';

const sourceFiles = [
  '../src/data/site.ts',
  '../src/data/service-details.ts',
  '../src/i18n/ui.ts',
  '../src/i18n/en.ts',
  '../src/pages/index.astro',
  '../src/pages/en/index.astro',
  '../src/pages/hakkimizda.astro',
  '../src/pages/hizmetler/[slug].astro',
  '../src/pages/rehber/index.astro',
  '../src/content/rehber/sisli-sirket-kurulusu-rehberi.md',
  '../src/content/rehber/sahis-mi-limited-mi.md',
  '../src/content/rehber/mali-musavir-degistirme.md',
  '../src/content/guide/sisli-company-formation-guide.md',
  '../src/content/guide/sole-proprietorship-vs-limited.md',
  '../src/content/guide/changing-your-accountant.md',
];

const riskyPhrases = [
  'ücretsiz ön görüşme',
  'ilk görüşme her zaman ücretsiz',
  'bir muhasebeciden fazlası',
  'cezayla, gecikmeyle uğraşmayın',
  'ceza yemeden önce',
  'hakkınız olan destekleri alın',
  'destek şansınızı artır',
  'avantajları eksiksiz',
  'kapsamı hatasız',
  'free initial call',
  'first call is always free',
  'more than a bookkeeper',
  'no penalties, no delays',
  'claim the support you’re entitled to',
  'boost your chances of support',
  'uses every advantage in full',
  'without error',
  'never deal with a surprise penalty',
  'there are no delays or related penalties',
  'prevent any potential penalties',
];

const findings = [];
for (const relativePath of sourceFiles) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const text = readFileSync(fileUrl, 'utf8').toLocaleLowerCase('tr-TR');
  for (const phrase of riskyPhrases) {
    if (text.includes(phrase.toLocaleLowerCase('tr-TR'))) {
      findings.push(`${relativePath}: "${phrase}"`);
    }
  }
}

if (findings.length) {
  console.error(`COPY: nötrleştirilmemiş tanıtım ifadeleri bulundu:\n${findings.join('\n')}`);
  process.exit(1);
}

console.log(`COPY: ${sourceFiles.length} tanıtım kaynağında ${riskyPhrases.length} riskli ifade bulunmadı.`);
