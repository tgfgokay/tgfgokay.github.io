import assert from 'node:assert/strict';
import {
  CONSENT_DENIED,
  CONSENT_GRANTED,
  analyticsMayLoad,
  buildPageContext,
  sanitizeAnalyticsEvent,
} from '../src/scripts/analytics-consent.mjs';

assert.equal(analyticsMayLoad(null), false);
assert.equal(analyticsMayLoad(CONSENT_DENIED), false);
assert.equal(analyticsMayLoad(CONSENT_GRANTED), true);

assert.deepEqual(
  buildPageContext({
    href: 'https://tgfmalimusavirlik.com/iletisim/?email=test@example.com&utm_source=x#form',
    referrer: 'https://example.com/path?person=test@example.com',
    title: 'İletişim',
  }),
  {
    page_location: 'https://tgfmalimusavirlik.com/iletisim/',
    page_path: '/iletisim/',
    page_referrer: 'https://example.com',
    page_title: 'İletişim',
  },
);

assert.deepEqual(
  sanitizeAnalyticsEvent({
    event: 'contact_intent',
    page_path: '/iletisim/?person=test@example.com',
    contact_channel: 'whatsapp',
    service_interest: 'company_formation',
    full_name: 'Kişisel veri',
    phone: '+905551112233',
    message: 'Serbest metin',
  }),
  {
    eventName: 'contact_intent',
    parameters: {
      page_path: '/iletisim/',
      contact_channel: 'whatsapp',
      service_interest: 'company_formation',
    },
  },
);

assert.equal(sanitizeAnalyticsEvent({ event: 'unknown_event', email: 'test@example.com' }), null);

console.log('CONSENT: ret halinde yükleme yok; izinli olaylar PII ve sorgu parametrelerinden arındırılıyor.');
