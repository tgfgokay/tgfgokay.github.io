import assert from 'node:assert/strict';
import { deriveNextActions, loadLeadRows, summarizeLeads } from './funnel-summary.mjs';

const summary = summarizeLeads(loadLeadRows());

assert.deepEqual(summary, {
  as_of: '2026-09-07',
  leads_total: 1,
  attribution_complete: 0,
  source_known: 0,
  channel_known: 0,
  service_known: 0,
  response_known: 0,
  qualified: 0,
  qualification_unknown: 1,
  meeting_reached: 0,
  appointment_unknown: 1,
  won: 0,
  open: 1,
  outcome_unknown: 0,
  interpretation: 'Yalnız sayım; hacim ve zaman serisi oluşmadan trend veya oran yorumu yapılmaz.',
});

assert.deepEqual(deriveNextActions(summary), [
  'Bir sonraki olağan ticari temasta kaynak, kanal ve hizmet ilgisini yalnız kontrollü kategori olarak tamamla.',
  'Açık lead için nitelik, ilk yanıt kovası, görüşme ve ticari sonuç kategorilerini güncelle; kişi veya mesaj içeriği ekleme.',
  'En az 5 teyitli lead ve 14 günlük gözlem oluşana kadar dönüşüm oranı hedefi koyma; yeni sinyalleri sayım olarak izle.',
]);

console.log('FUNNEL: anonim huni özeti beklenen başlangıç değerlerini üretti.');
