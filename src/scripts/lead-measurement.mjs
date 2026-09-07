const TOPICS = [
  'company_formation',
  'accounting_payroll',
  'tax_returns',
  'incentives',
  'technopark_rd',
  'advisory',
  'other',
];

const cleanToken = (value, fallback) => {
  const raw = (value ?? '').trim();
  if (!raw || raw.includes('@') || /\+?\d[\d\s()-]{7,}/.test(raw)) return fallback;
  const cleaned = raw
    .toLocaleLowerCase('tr-TR')
    .slice(0, 48)
    .replace(/[^a-zA-Z0-9._-]/g, '_');
  return cleaned || fallback;
};

const domainFromReferrer = (referrer) => {
  if (!referrer) return 'direct';
  try {
    return new URL(referrer).hostname.replace(/^www\./, '') || 'direct';
  } catch {
    return 'unknown';
  }
};

const SERVICE_PATHS = [
  [/^\/(?:hizmetler\/sirket-kurulusu|en\/services\/company-formation)\/?$/, 'company_formation'],
  [/^\/(?:hizmetler\/muhasebe-bordro|en\/services\/accounting-payroll)\/?$/, 'accounting_payroll'],
  [/^\/(?:hizmetler\/beyanname-vergi|en\/services\/tax-returns)\/?$/, 'tax_returns'],
  [/^\/(?:hizmetler\/tesvik-kosgeb|en\/services\/incentives-kosgeb)\/?$/, 'incentives'],
  [/^\/(?:hizmetler\/teknopark|en\/services\/technopark-rd)\/?$/, 'technopark_rd'],
  [/^\/(?:hizmetler\/danismanlik|en\/services\/advisory)\/?$/, 'advisory'],
];

export const serviceInterestFromPath = (path = '/') =>
  SERVICE_PATHS.find(([pattern]) => pattern.test(path))?.[1] ?? 'unknown';

export const classifyLandingGroup = (path = '/') => {
  if (path === '/' || path === '/en' || path === '/en/') return 'home';
  const service = serviceInterestFromPath(path);
  if (service !== 'unknown') return service;
  if (/^\/(?:rehber|en\/guide)(?:\/|$)/.test(path)) return 'guide';
  if (/^\/(?:iletisim|en\/contact)\/?$/.test(path)) return 'contact';
  if (/^\/(?:hakkimizda|en\/about)\/?$/.test(path)) return 'about';
  if (/^\/(?:hizmetler|en\/services)\/?$/.test(path)) return 'services';
  return 'other';
};

export const buildAcquisition = ({ queryString = '', referrer = '', landingPath = '/' }) => {
  const query = new URLSearchParams(queryString);
  const referrerDomain = domainFromReferrer(referrer);
  const cleanLandingPath = landingPath.startsWith('/') ? landingPath.split(/[?#]/, 1)[0].slice(0, 120) : '/';
  return {
    source: cleanToken(query.get('utm_source'), referrerDomain),
    medium: cleanToken(query.get('utm_medium'), referrerDomain === 'direct' ? 'none' : 'referral'),
    campaign: cleanToken(query.get('utm_campaign'), 'not_set'),
    referrer_domain: referrerDomain,
    landing_path: cleanLandingPath,
    landing_group: classifyLandingGroup(cleanLandingPath),
  };
};

export const classifyContactChannel = (href = '') => {
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp';
  return null;
};

export const topicFromIndex = (index) => TOPICS[index] ?? 'unknown';
