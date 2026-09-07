import { readFileSync } from 'node:fs';

const ledgerUrl = new URL('./leads.jsonl', import.meta.url);
const lines = readFileSync(ledgerUrl, 'utf8').split(/\r?\n/).filter(Boolean);
const expectedKeys = [
  'lead_id',
  'reported_date',
  'signal_origin',
  'source',
  'entry_channel',
  'landing_group',
  'service_interest',
  'geography_fit',
  'business_stage',
  'lead_status',
  'qualification',
  'first_response_bucket',
  'appointment_outcome',
  'commercial_outcome',
  'loss_reason',
];

const allowed = {
  signal_origin: ['user_reported', 'site_event', 'referral_reported', 'aggregate_import'],
  source: ['organic_search', 'google_business_profile', 'referral', 'direct', 'paid', 'social', 'email', 'unknown'],
  entry_channel: ['whatsapp', 'phone', 'email', 'website_form', 'unknown'],
  landing_group: ['home', 'company_formation', 'accounting_payroll', 'tax_returns', 'incentives', 'technopark_rd', 'advisory', 'guide', 'unknown'],
  service_interest: ['company_formation', 'accounting_payroll', 'tax_returns', 'incentives', 'technopark_rd', 'advisory', 'other', 'unknown'],
  geography_fit: ['istanbul', 'turkey_remote', 'outside_scope', 'unknown'],
  business_stage: ['pre_formation', 'existing_business', 'switching_accountant', 'growth_project', 'unknown'],
  lead_status: ['new', 'contacted', 'meeting_scheduled', 'qualified', 'proposal_sent', 'won', 'lost'],
  qualification: ['qualified', 'unqualified', 'unknown'],
  first_response_bucket: ['under_1h', '1_4h', 'same_day', 'next_business_day', 'over_1_business_day', 'unknown'],
  appointment_outcome: ['not_scheduled', 'scheduled', 'completed', 'no_show', 'unknown'],
  commercial_outcome: ['open', 'won', 'lost', 'unknown'],
  loss_reason: ['none', 'price', 'no_response', 'not_fit', 'timing', 'chose_other', 'unknown'],
};

const errors = [];
const ids = new Set();
for (const [index, line] of lines.entries()) {
  let row;
  try {
    row = JSON.parse(line);
  } catch {
    errors.push(`Satır ${index + 1}: geçersiz JSON`);
    continue;
  }

  const keys = Object.keys(row).sort();
  if (keys.join('|') !== [...expectedKeys].sort().join('|')) {
    errors.push(`Satır ${index + 1}: alan kümesi sözleşmeyle eşleşmiyor`);
  }
  if (!/^TGF-\d{8}-\d{3}$/.test(row.lead_id ?? '')) errors.push(`Satır ${index + 1}: lead_id biçimi geçersiz`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(row.reported_date ?? '')) errors.push(`Satır ${index + 1}: tarih biçimi geçersiz`);
  if (ids.has(row.lead_id)) errors.push(`Satır ${index + 1}: mükerrer lead_id`);
  ids.add(row.lead_id);

  for (const [field, values] of Object.entries(allowed)) {
    if (!values.includes(row[field])) errors.push(`Satır ${index + 1}: ${field} değeri geçersiz`);
  }

  // Serbest metin ve doğrudan kişisel veri alanı tasarım gereği yoktur.
  for (const [field, value] of Object.entries(row)) {
    if (field === 'lead_id' || field === 'reported_date') continue;
    if (typeof value !== 'string' || value.length > 32 || /@|\+?\d[\d\s()-]{8,}/.test(value)) {
      errors.push(`Satır ${index + 1}: ${field} anonim sözleşmeyi ihlal ediyor`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`GROWTH: ${lines.length} anonim lead kaydı doğrulandı; serbest metin/PII alanı yok.`);
