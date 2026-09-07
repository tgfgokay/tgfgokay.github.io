import assert from 'node:assert/strict';
import {
  buildAcquisition,
  classifyContactChannel,
  classifyLandingGroup,
  serviceInterestFromPath,
  topicFromIndex,
} from '../src/scripts/lead-measurement.mjs';

assert.deepEqual(
  buildAcquisition({
    queryString: '?utm_source=google&utm_medium=organic&utm_campaign=sisli-kobi',
    referrer: 'https://www.google.com/search?q=mali+musavir',
    landingPath: '/hizmetler/sirket-kurulusu/',
  }),
  {
    source: 'google',
    medium: 'organic',
    campaign: 'sisli-kobi',
    referrer_domain: 'google.com',
    landing_path: '/hizmetler/sirket-kurulusu/',
    landing_group: 'company_formation',
  },
);

assert.deepEqual(
  buildAcquisition({ queryString: '', referrer: '', landingPath: '/' }),
  {
    source: 'direct',
    medium: 'none',
    campaign: 'not_set',
    referrer_domain: 'direct',
    landing_path: '/',
    landing_group: 'home',
  },
);

assert.deepEqual(
  buildAcquisition({
    queryString: '?utm_source=ad.soyad%40example.com&utm_medium=905551112233&utm_campaign=Kurulus',
    referrer: '',
    landingPath: '/en/services/company-formation/?ignored=yes',
  }),
  {
    source: 'direct',
    medium: 'none',
    campaign: 'kurulus',
    referrer_domain: 'direct',
    landing_path: '/en/services/company-formation/',
    landing_group: 'company_formation',
  },
);

assert.equal(classifyContactChannel('tel:+902120000000'), 'phone');
assert.equal(classifyContactChannel('mailto:ornek@example.com'), 'email');
assert.equal(classifyContactChannel('https://wa.me/900000000000'), 'whatsapp');
assert.equal(classifyContactChannel('/iletisim/'), null);
assert.equal(topicFromIndex(0), 'company_formation');
assert.equal(topicFromIndex(6), 'other');
assert.equal(topicFromIndex(99), 'unknown');
assert.equal(serviceInterestFromPath('/hizmetler/teknopark/'), 'technopark_rd');
assert.equal(serviceInterestFromPath('/en/services/tax-returns/'), 'tax_returns');
assert.equal(serviceInterestFromPath('/iletisim/'), 'unknown');
assert.equal(classifyLandingGroup('/rehber/sahis-mi-limited-mi/'), 'guide');
assert.equal(classifyLandingGroup('/en/contact/'), 'contact');
assert.equal(classifyLandingGroup('/bilinmeyen/'), 'other');

console.log('MEASUREMENT: edinim, kanal ve hizmet sınıflandırma testleri geçti.');
