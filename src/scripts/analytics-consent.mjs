export const CONSENT_KEY = 'tgf_analytics_consent_v1';
export const CONSENT_GRANTED = 'granted';
export const CONSENT_DENIED = 'denied';

const ALLOWED_EVENTS = new Set(['contact_intent', 'lead_form_submit']);
const ALLOWED_PARAMETERS = [
  'page_path',
  'page_language',
  'source',
  'medium',
  'campaign',
  'referrer_domain',
  'landing_path',
  'landing_group',
  'contact_channel',
  'cta_location',
  'service_interest',
];

const cleanPath = (value) => {
  if (typeof value !== 'string' || !value.startsWith('/')) return '/';
  return value.split(/[?#]/, 1)[0].slice(0, 160);
};

const cleanToken = (value) => {
  if (typeof value !== 'string') return undefined;
  const token = value.slice(0, 100);
  if (!token || token.includes('@') || /\+?\d[\d\s()-]{7,}/.test(token)) return undefined;
  return /^[a-zA-Z0-9._/:-]+$/.test(token) ? token : undefined;
};

export const analyticsMayLoad = (choice) => choice === CONSENT_GRANTED;

export const buildPageContext = ({ href, referrer = '', title = '' }) => {
  let pageLocation = '/';
  let pagePath = '/';
  let pageReferrer = '';

  try {
    const url = new URL(href);
    pagePath = cleanPath(url.pathname);
    pageLocation = `${url.origin}${pagePath}`;
  } catch {
    // Geçersiz URL, Google'a ham değer göndermemek için varsayılan yola düşer.
  }

  try {
    pageReferrer = referrer ? new URL(referrer).origin : '';
  } catch {
    // Geçersiz yönlendiren değeri gönderilmez.
  }

  return {
    page_location: pageLocation,
    page_path: pagePath,
    page_referrer: pageReferrer,
    page_title: String(title).slice(0, 160),
  };
};

export const sanitizeAnalyticsEvent = (detail) => {
  if (!detail || typeof detail !== 'object' || !ALLOWED_EVENTS.has(detail.event)) return null;

  const parameters = {};
  for (const field of ALLOWED_PARAMETERS) {
    if (typeof detail[field] !== 'string') continue;
    const value = field === 'page_path' || field === 'landing_path'
      ? cleanPath(detail[field])
      : cleanToken(detail[field]);
    if (value !== undefined) parameters[field] = value;
  }

  return { eventName: detail.event, parameters };
};
