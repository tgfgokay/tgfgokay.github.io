import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distRoot = join(projectRoot, 'dist');
const assetRoot = join(distRoot, '_astro');

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });

const scriptFiles = readdirSync(assetRoot)
  .filter((name) => name.endsWith('.js'))
  .map((name) => join(assetRoot, name));

const measurementBundles = scriptFiles.filter((path) =>
  readFileSync(path, 'utf8').includes('contact_intent'),
);

assert.equal(
  measurementBundles.length,
  1,
  'Derlenmiş çıktıda tam bir ölçüm paketi bulunmalı.',
);

const measurementBundle = measurementBundles[0];
const bundleText = readFileSync(measurementBundle, 'utf8');
for (const marker of [
  'contact_intent',
  'lead_form_submit',
  'landing_group',
  'service_interest',
  'tgf:measurement',
  'tgfMeasurementQueue',
]) {
  assert.ok(bundleText.includes(marker), `Derlenmiş ölçüm paketinde ${marker} bulunamadı.`);
}

const htmlFiles = walk(distRoot).filter((path) => path.endsWith('.html'));
const measurementBundleName = basename(measurementBundle);
const consentBundles = scriptFiles.filter((path) =>
  readFileSync(path, 'utf8').includes('tgf_analytics_consent_v1'),
);
assert.equal(consentBundles.length, 1, 'Derlenmiş çıktıda tek bir analitik onay paketi bulunmalı.');
const consentBundle = consentBundles[0];
const consentBundleName = basename(consentBundle);
const consentText = readFileSync(consentBundle, 'utf8');
for (const marker of [
  'googletagmanager.com/gtag/js',
  'analytics_storage',
  'ad_personalization',
  'tgf_analytics_consent_v1',
  'tgfmalimusavirlik.com',
]) {
  assert.ok(consentText.includes(marker), `Analitik onay paketinde ${marker} bulunamadı.`);
}
const importsByBundle = new Map(
  scriptFiles.map((path) => {
    const imports = Array.from(readFileSync(path, 'utf8').matchAll(/["']\.\/([^"']+\.js)["']/g))
      .map((match) => match[1]);
    return [basename(path), imports];
  }),
);

const reachesBundle = (entryBundles, targetBundle) => {
  const queue = [...entryBundles];
  const visited = new Set();
  while (queue.length) {
    const bundle = queue.shift();
    if (!bundle || visited.has(bundle)) continue;
    if (bundle === targetBundle) return true;
    visited.add(bundle);
    queue.push(...(importsByBundle.get(bundle) ?? []));
  }
  return false;
};

const reachesMeasurementBundle = (entryBundles) => reachesBundle(entryBundles, measurementBundleName);

const missingBundle = htmlFiles.filter((path) => {
  const html = readFileSync(path, 'utf8');
  const entryBundles = Array.from(html.matchAll(/src="\/_astro\/([^"]+\.js)"/g))
    .map((match) => match[1]);
  return !reachesMeasurementBundle(entryBundles);
});

const missingConsentBundle = htmlFiles.filter((path) => {
  const html = readFileSync(path, 'utf8');
  const entryBundles = Array.from(html.matchAll(/src="\/_astro\/([^"]+\.js)"/g))
    .map((match) => match[1]);
  return !reachesMeasurementBundle(entryBundles)
    || !(entryBundles.includes(consentBundleName)
      || reachesBundle(entryBundles, consentBundleName));
});

const directGoogleTag = htmlFiles.filter((path) =>
  /<script[^>]+src="https:\/\/www\.googletagmanager\.com\/gtag\/js/.test(readFileSync(path, 'utf8')),
);

const missingMeasurementId = htmlFiles.filter((path) =>
  !readFileSync(path, 'utf8').includes('data-measurement-id="G-MRYJDNND4N"'),
);

assert.deepEqual(
  missingBundle,
  [],
  'Bazı HTML sayfaları anonim ölçüm paketini yüklemiyor.',
);

assert.deepEqual(missingConsentBundle, [], 'Bazı HTML sayfaları analitik onay paketini yüklemiyor.');
assert.deepEqual(directGoogleTag, [], 'Google etiketi kullanıcı onayından önce doğrudan HTML içinde yüklenmemeli.');
assert.deepEqual(missingMeasurementId, [], 'Bazı HTML sayfalarında onay yükleyicisinin ölçüm kimliği eksik.');

console.log(`BUILD-MEASUREMENT: ${htmlFiles.length} HTML sayfası PII'siz ölçümü ve temel onay yükleyicisini içeriyor; Google etiketi HTML'de doğrudan yüklenmiyor.`);
