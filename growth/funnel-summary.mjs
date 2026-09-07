import { readFileSync } from 'node:fs';

export const summarizeLeads = (rows) => {
  const attributed = rows.filter((row) =>
    ['source', 'entry_channel', 'landing_group', 'service_interest']
      .every((field) => row[field] !== 'unknown'),
  ).length;

  return {
    as_of: rows.map((row) => row.reported_date).sort().at(-1) ?? null,
    leads_total: rows.length,
    attribution_complete: attributed,
    source_known: rows.filter((row) => row.source !== 'unknown').length,
    channel_known: rows.filter((row) => row.entry_channel !== 'unknown').length,
    service_known: rows.filter((row) => row.service_interest !== 'unknown').length,
    response_known: rows.filter((row) => row.first_response_bucket !== 'unknown').length,
    qualified: rows.filter((row) => row.qualification === 'qualified').length,
    qualification_unknown: rows.filter((row) => row.qualification === 'unknown').length,
    meeting_reached: rows.filter((row) =>
      ['scheduled', 'completed'].includes(row.appointment_outcome),
    ).length,
    appointment_unknown: rows.filter((row) => row.appointment_outcome === 'unknown').length,
    won: rows.filter((row) => row.commercial_outcome === 'won').length,
    open: rows.filter((row) => row.commercial_outcome === 'open').length,
    outcome_unknown: rows.filter((row) => row.commercial_outcome === 'unknown').length,
    interpretation: 'Yalnız sayım; hacim ve zaman serisi oluşmadan trend veya oran yorumu yapılmaz.',
  };
};

export const deriveNextActions = (summary) => {
  const actions = [];

  if (summary.source_known < summary.leads_total
      || summary.channel_known < summary.leads_total
      || summary.service_known < summary.leads_total) {
    actions.push('Bir sonraki olağan ticari temasta kaynak, kanal ve hizmet ilgisini yalnız kontrollü kategori olarak tamamla.');
  }

  if (summary.qualification_unknown > 0
      || summary.response_known < summary.leads_total
      || summary.appointment_unknown > 0
      || summary.open > 0
      || summary.outcome_unknown > 0) {
    actions.push('Açık lead için nitelik, ilk yanıt kovası, görüşme ve ticari sonuç kategorilerini güncelle; kişi veya mesaj içeriği ekleme.');
  }

  if (summary.leads_total < 5) {
    actions.push('En az 5 teyitli lead ve 14 günlük gözlem oluşana kadar dönüşüm oranı hedefi koyma; yeni sinyalleri sayım olarak izle.');
  }

  return actions.slice(0, 3);
};

export const loadLeadRows = () =>
  readFileSync(new URL('./leads.jsonl', import.meta.url), 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line));

export const formatSummary = (summary) => [
  `TGF ANONİM HUNİ ÖZETİ — ${summary.as_of ?? 'veri yok'}`,
  `Toplam teyitli sinyal: ${summary.leads_total}`,
  `Atfı tamamlanan: ${summary.attribution_complete}`,
  `Kaynağı bilinen: ${summary.source_known}`,
  `Kanalı bilinen: ${summary.channel_known}`,
  `Hizmet ilgisi bilinen: ${summary.service_known}`,
  `İlk yanıt kovası bilinen: ${summary.response_known}`,
  `Nitelikli: ${summary.qualified}`,
  `Görüşmeye ulaşan: ${summary.meeting_reached}`,
  `Kazanılan: ${summary.won}`,
  `Açık: ${summary.open}`,
  `Not: ${summary.interpretation}`,
  'Bugünkü ilk işler:',
  ...deriveNextActions(summary).map((action, index) => `${index + 1}. ${action}`),
].join('\n');

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  console.log(formatSummary(summarizeLeads(loadLeadRows())));
}
