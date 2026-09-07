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
    qualified: rows.filter((row) => row.qualification === 'qualified').length,
    meeting_reached: rows.filter((row) =>
      ['scheduled', 'completed'].includes(row.appointment_outcome),
    ).length,
    won: rows.filter((row) => row.commercial_outcome === 'won').length,
    open: rows.filter((row) => row.commercial_outcome === 'open').length,
    interpretation: 'Yalnız sayım; hacim ve zaman serisi oluşmadan trend veya oran yorumu yapılmaz.',
  };
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
  `Nitelikli: ${summary.qualified}`,
  `Görüşmeye ulaşan: ${summary.meeting_reached}`,
  `Kazanılan: ${summary.won}`,
  `Açık: ${summary.open}`,
  `Not: ${summary.interpretation}`,
].join('\n');

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  console.log(formatSummary(summarizeLeads(loadLeadRows())));
}
