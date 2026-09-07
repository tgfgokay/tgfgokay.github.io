import assert from 'node:assert/strict';
import { loadLeadRows, summarizeLeads } from './funnel-summary.mjs';

const summary = summarizeLeads(loadLeadRows());

assert.deepEqual(summary, {
  as_of: '2026-09-07',
  leads_total: 1,
  attribution_complete: 0,
  source_known: 0,
  channel_known: 0,
  service_known: 0,
  qualified: 0,
  meeting_reached: 0,
  won: 0,
  open: 1,
  interpretation: 'Yalnız sayım; hacim ve zaman serisi oluşmadan trend veya oran yorumu yapılmaz.',
});

console.log('FUNNEL: anonim huni özeti beklenen başlangıç değerlerini üretti.');
