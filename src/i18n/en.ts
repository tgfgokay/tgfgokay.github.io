// İngilizce içerik — Türkçe site.ts + service-details.ts'in sadık çevirisi.
// Aynı KOBİ/yerel işletme konumlandırması; yabancı-yatırımcı (HNWI) açısı TAŞINMAZ.
// slug = İngilizce; trSlug = Türkçe karşılık (hreflang eşlemesi için).

import type { Service } from '../data/site';

export type ServiceEn = Service & { trSlug: string };

export type Faq = { q: string; a: string };
export type TypeCard = { title: string; badge?: string; text: string };
export interface ServiceDetail {
  heroTitle: string;
  intro: string;
  typeCards?: TypeCard[];
  typeHeading?: string;
  steps: { title: string; text: string }[];
  stepsHeading: string;
  included: string[];
  includedHeading: string;
  faqs: Faq[];
}

export const servicesEn: ServiceEn[] = [
  {
    slug: 'company-formation',
    trSlug: 'sirket-kurulusu',
    title: 'Company Formation',
    metaDesc:
      'Company formation in Istanbul with a Şişli-based CPA: choosing the type, costs, registration and post-setup obligations — I run the whole process.',
    short:
      'Limited, joint-stock or sole proprietorship — I set you up from scratch with the right company type, step by step.',
    summary:
      'Which company type suits you, what costs you’ll face, what you need to do after setup — I talk it all through in advance and run the process on your behalf.',
    icon: 'building',
  },
  {
    slug: 'accounting-payroll',
    trSlug: 'muhasebe-bordro',
    title: 'Accounting & Payroll',
    metaDesc:
      'Accounting and payroll for Istanbul SMEs: bookkeeping, social-security filings, e-documents. I track every deadline for you.',
    short: 'Bookkeeping, payroll and filing processes managed on a regular schedule.',
    summary:
      'From bookkeeping to payroll, from social-security filings to e-documents, I keep your day-to-day accounting in order and track the deadlines for you.',
    icon: 'ledger',
  },
  {
    slug: 'tax-returns',
    trSlug: 'beyanname-vergi',
    title: 'Tax Returns',
    metaDesc:
      'VAT, withholding, provisional and annual returns, with applicable exemptions and deductions assessed under current rules.',
    short: 'Periodic tracking of returns, payment dates and applicable tax provisions.',
    summary:
      'I prepare VAT, withholding, provisional and annual returns and assess applicable exemptions and deductions under current rules.',
    icon: 'receipt',
  },
  {
    slug: 'incentives-kosgeb',
    trSlug: 'tesvik-kosgeb',
    title: 'Incentives & KOSGEB',
    metaDesc:
      'KOSGEB and investment incentives: eligibility assessment and full application management for SMEs across Istanbul.',
    short: 'Eligibility, application and reporting processes for KOSGEB and investment incentives.',
    summary:
      'I assess your eligibility for KOSGEB, investment incentives and other government support, and manage the application process from start to finish.',
    icon: 'growth',
  },
  {
    slug: 'technopark-rd',
    trSlug: 'teknopark',
    title: 'Technopark & R&D',
    metaDesc:
      'Technopark applications, earnings exemption, withholding incentive and social-security support for your software or R&D business in Istanbul.',
    short: 'I run the technopark process end to end for software and R&D businesses.',
    summary:
      'I manage technopark applications and track applicable exemptions, withholding incentives and social-security support under current rules.',
    icon: 'spark',
  },
  {
    slug: 'advisory',
    trSlug: 'danismanlik',
    title: 'Advisory',
    metaDesc:
      'Advisory for the complex decisions of a growing business: valuation, merger and transfer, international tax. Istanbul-based, SME-focused.',
    short: 'Higher-level needs such as company valuation, mergers and international tax.',
    summary:
      'For the more complex decisions you face as your business grows — valuation, merger/transfer, international tax — I stand by you.',
    icon: 'compass',
  },
];

// Türkçe slug → İngilizce slug (hreflang, dil değiştirici için)
export const trToEnSlug: Record<string, string> = Object.fromEntries(
  servicesEn.map((s) => [s.trSlug, s.slug])
);

// Rehber (TR) slug → Guide (EN) slug — hreflang eşi ve dil değiştirici için.
export const rehberToGuideSlug: Record<string, string> = {
  'sisli-sirket-kurulusu-rehberi': 'sisli-company-formation-guide',
  'sahis-mi-limited-mi': 'sole-proprietorship-vs-limited',
  'kobi-vergi-beyanname-takvimi': 'sme-tax-return-calendar',
  'e-tebligat-kacirmayin': 'e-notification-dont-miss-it',
  'mali-musavir-degistirme': 'changing-your-accountant',
  'serbest-meslekte-gecici-vergi': 'provisional-tax-self-employed',
  'sirketten-para-cekmenin-dogru-yolu': 'withdrawing-money-from-your-company',
  'teknoparka-girmeli-misiniz': 'should-you-enter-a-technopark',
  'uretim-yatirim-tesvik-belgesi': 'investment-incentive-certificate',
};

export const processStepsEn = [
  {
    title: 'Scope discussion',
    text: 'We discuss your current situation and the scope of service by phone or WhatsApp.',
  },
  {
    title: 'Needs analysis',
    text: 'We clarify exactly what you need based on your business and your goals.',
  },
  {
    title: 'Handover / setup',
    text: 'I take over your existing records or set you up from scratch and get things in order.',
  },
  {
    title: 'Ongoing follow-up',
    text: 'I track the deadlines; you focus on your business.',
  },
];

export const whyPointsEn = [
  {
    title: 'I’m reachable',
    text: 'An accountant who picks up the phone and replies on WhatsApp. Your question never goes unanswered.',
  },
  {
    title: 'I keep you informed',
    text: 'I flag upcoming obligations and explain provisions that may apply.',
  },
  {
    title: 'I’m transparent',
    text: 'You know exactly what I do and what you pay. No surprises.',
  },
];

export const serviceDetailsEn: Record<string, ServiceDetail> = {
  'company-formation': {
    heroTitle: 'A clean start with the right company type',
    intro:
      'Company formation is the first step in officially starting a new business: choosing the right company type, preparing the articles of association, completing the trade registry and tax office procedures, and setting up your accounting. In our first talk I explain which company type — sole proprietorship, limited or joint-stock — may suit you, the setup and monthly costs, and the tax and social-security obligations that follow. Once we decide together, I run the process on your behalf: document preparation, registration, e-signature, ledger certification and e-document applications included. From day one I track the relevant deadlines and explain the filing requirements as we move into regular follow-up.',
    typeHeading: 'Which company type fits you?',
    typeCards: [
      {
        title: 'Sole Proprietorship',
        text: 'Fast, low-cost setup. An ideal starting point for small-scale, one-person or brand-new businesses.',
      },
      {
        title: 'Limited Company',
        badge: 'Most preferred',
        text: 'A balanced option for SMEs wanting partnership and limited liability. Corporate image, manageable cost.',
      },
      {
        title: 'Joint-Stock Company',
        text: 'For those planning growth, investors and share transfers. A more corporate structure with extra obligations.',
      },
    ],
    stepsHeading: 'How does formation proceed?',
    steps: [
      { title: 'Consultation', text: 'I listen to your business and your goal; together we decide the most suitable type.' },
      { title: 'Preparation', text: 'I prepare the articles of association, signature, tax office and trade registry documents.' },
      { title: 'Registration', text: 'I complete the trade registry and tax office procedures on your behalf.' },
      { title: 'Setup', text: 'I set up your e-signature, ledger certification, e-document systems and accounting order.' },
      { title: 'Follow-up', text: 'We move into regular follow-up with your first return and filings.' },
    ],
    includedHeading: 'What’s included in formation?',
    included: [
      'Company type and cost advisory',
      'Articles of association and formation documents',
      'Trade registry and tax office procedures',
      'Prospective tax registration setup',
      'E-signature, e-invoice / e-archive applications',
      'Ledger certification and initial accounting order',
    ],
    faqs: [
      { q: 'How long does formation take?', a: 'If the documents are ready, a sole proprietorship takes 1–2 days and a limited/joint-stock company a few business days.' },
      { q: 'Is capital required, and how much?', a: 'The minimum capital for a limited company is set by law; the requirement to pay it up front has been relaxed. We decide the most suitable amount together based on your situation.' },
      { q: 'Can I set up from home / a virtual office?', a: 'For many activities, yes. I assess suitability for your sector and guide you.' },
      { q: 'What awaits me after formation?', a: 'Regular returns, social-security and e-document obligations. I take on tracking all of them; you focus on your business.' },
    ],
  },

  'accounting-payroll': {
    heroTitle: 'Orderly accounting, on-time payroll',
    intro:
      'Accounting and payroll mean keeping a business’s daily financial records in order and calculating staff wages in line with the law. From bookkeeping to payroll, from social-security filings to e-documents, I carry out these processes on a regular basis. I collect your documents digitally or on paper, process the records, and prepare monthly payroll including wages, deductions, leave and social security. Entry and exit notifications, monthly social-security and withholding filings, and e-invoice, e-archive and e-ledger processes are included. I track the schedule and flag upcoming obligations and the possible consequences of delay. At month end I share a plain summary. If you’re moving from another accountant, I handle the handover and record transfer with your approval.',
    stepsHeading: 'How do we run it?',
    steps: [
      { title: 'Handover', text: 'I take over your existing records or set up the order from scratch.' },
      { title: 'Collection', text: 'I collect your documents in a regular flow and store them digitally.' },
      { title: 'Processing', text: 'I process records on time and prepare payroll and social-security filings.' },
      { title: 'Reporting', text: 'I summarise your position clearly and remind you of the deadlines.' },
    ],
    includedHeading: 'What’s included?',
    included: [
      'Statutory ledger records and certifications',
      'Staff payroll and wage calculations',
      'Social-security entry/exit and monthly filings',
      'E-invoice / e-archive / e-ledger processes',
      'Current account, bank and stock reconciliations',
      'Monthly summary and deadline reminders',
    ],
    faqs: [
      { q: 'How do I send documents?', a: 'You can send them digitally (photo/PDF/e-document); paper works too if you prefer. We pick whatever is most practical for you.' },
      { q: 'Do you calculate the payroll?', a: 'Yes. I prepare your payroll including wages, deductions, leave and social security, and file on time.' },
      { q: 'Is it hard to switch from another accountant?', a: 'No. I handle the handover and record transfer; you just give your approval.' },
    ],
  },

  'tax-returns': {
    heroTitle: 'Tax return and filing processes',
    intro:
      'A tax return reports your business’s income, expenses and tax details to the tax office within the legal period. I prepare VAT, withholding, provisional and annual income or corporate returns and file them on your behalf. Before the period closes I share the estimated tax amount and payment schedule. I assess exemptions, deductions and incentives that may apply to your sector under current rules. I explain the relationship between provisional tax, withholding and the annual return, and flag upcoming deadlines and the possible consequences of delay. The aim is to keep the tax process compliant and predictable.',
    stepsHeading: 'How do we work?',
    steps: [
      { title: 'Review', text: 'I assess your records and your position for the period.' },
      { title: 'Assessment', text: 'We assess applicable exemptions and deductions under current rules.' },
      { title: 'Filing', text: 'I prepare the returns and file them on time.' },
      { title: 'Briefing', text: 'You know what you’ll pay in advance, without surprises.' },
    ],
    includedHeading: 'What’s included?',
    included: [
      'VAT and withholding returns',
      'Provisional and annual income/corporate returns',
      'Tax planning and exemption assessment',
      'Stamp duty, fees and other obligations',
      'Payment schedule and amount briefing',
      'Support in preparing for a tax audit',
    ],
    faqs: [
      { q: 'Can I know how much tax I’ll pay in advance?', a: 'Yes. Before the period closes I share the estimated amount and help you plan.' },
      { q: 'How do you assess exemptions, deductions and incentives?', a: 'I review the provisions that may apply to your sector and transactions, then explain their scope and conditions.' },
      { q: 'What happens if a return is late?', a: 'A late filing may have tax and procedural consequences; I track the schedule and flag upcoming deadlines.' },
    ],
  },

  'incentives-kosgeb': {
    heroTitle: 'KOSGEB and incentive processes',
    intro:
      'Government support and incentives may provide financing or tax relief subject to programme conditions. For KOSGEB support, investment incentive certificates and other programmes, I assess eligibility based on your size, sector and plan. I prepare the application file and track the process. After approval, we manage entitlement, reporting and other obligations together. For newly formed companies, eligibility is assessed separately under the current conditions of each programme.',
    stepsHeading: 'How does the process work?',
    steps: [
      { title: 'Eligibility', text: 'I determine which support and incentives you qualify for.' },
      { title: 'Preparation', text: 'I prepare the application file and required documents.' },
      { title: 'Application', text: 'I apply on your behalf and follow the process.' },
      { title: 'Follow-up', text: 'After approval we manage reporting and obligations.' },
    ],
    includedHeading: 'What’s included?',
    included: [
      'KOSGEB support programme assessment',
      'Investment incentive certificate processes',
      'Application file preparation',
      'Eligibility and entitlement tracking',
      'Post-support reporting',
      'Advisory on other government support',
    ],
    faqs: [
      { q: 'Which support am I eligible for, and how do I find out?', a: 'I list the suitable support for you based on your business’s size, sector and plan.' },
      { q: 'Do you handle the application?', a: 'Yes. I prepare the file, submit the application and track the result.' },
      { q: 'Can a newly formed company benefit too?', a: 'It may be possible under some programmes; eligibility must be assessed against the current programme conditions.' },
    ],
  },

  'technopark-rd': {
    heroTitle: 'I run your technopark process end to end',
    intro:
      'A technopark (technology development zone) provides exemption and incentive provisions for software, R&D and design businesses under Law No. 4691. I manage the zone application and the processes relating to the earnings exemption, personnel income-tax withholding incentive and social-security employer-premium support. I assess the provisions that may apply to your business and staff structure and their possible financial effects. I separate qualifying activities from work outside the scope, prepare the application paperwork, and track the relevant provisions after admission under current conditions.',
    stepsHeading: 'How do we run it?',
    steps: [
      { title: 'Assessment', text: 'I assess applicable provisions and possible financial effects based on your business and staff structure.' },
      { title: 'Structuring', text: 'I separate in-scope and out-of-scope activities from the start and structure things correctly.' },
      { title: 'Application', text: 'I run the zone admission and application processes on your behalf and prepare the paperwork.' },
      { title: 'Follow-up', text: 'I regularly track the correct application of the exemption, withholding incentive and social-security support.' },
    ],
    includedHeading: 'What’s included?',
    included: [
      'Technopark application and zone admission',
      'In-scope activity separation for the exemption',
      'Correct application of the earnings exemption',
      'Personnel income-tax withholding incentive',
      'Social-security employer-premium support tracking',
      'VAT exemption on software produced in the zone',
    ],
    faqs: [
      { q: 'Do you run the technopark processes yourselves?', a: 'Yes. From the zone application to applying the exemption, from the withholding incentive to social-security support, I manage the whole process; you focus on your business.' },
      { q: 'Is all my income in the technopark tax-exempt?', a: 'The exemption applies to earnings from qualifying software/R&D/design activity in the zone. I assess out-of-scope work separately and set up this distinction correctly from the start.' },
      { q: 'Is the exemption permanent?', a: 'It is a time-limited incentive set by law, and the period is extended from time to time. I track the current period and conditions for you.' },
    ],
  },

  advisory: {
    heroTitle: 'By your side on the bigger decisions',
    intro:
      'Financial advisory means getting expert support on the decisions that go beyond day-to-day accounting as your business grows. In areas such as company valuation, merger, transfer and demerger, international tax and double taxation, and partnership structure and share transfer, I stand by you with my experience. First I understand your need and your goal clearly and assess the situation from a financial and tax standpoint. Then I lay out more than one path before you, with the risks and advantages of each, so you make the decision on solid ground. And once you’ve decided, I don’t leave you alone — I put the decision into action and manage the process. You can also take these services on a one-off basis; we can work within a limited scope for a specific transaction or decision. My aim is that you don’t have to make the complex decisions that growth brings on your own.',
    stepsHeading: 'How do we proceed?',
    steps: [
      { title: 'Listening', text: 'I understand your need and your goal clearly.' },
      { title: 'Analysis', text: 'I assess the situation from a financial and tax standpoint.' },
      { title: 'Options', text: 'I lay out the paths before you, with their risks and advantages.' },
      { title: 'Execution', text: 'I put the decision into action and manage the process.' },
    ],
    includedHeading: 'In which areas?',
    included: [
      'Company valuation',
      'Merger, transfer and demerger',
      'International tax and double taxation',
      'Partnership structure and share transfer',
      'Financial statement and position analysis',
      'Investment and growth scenarios',
    ],
    faqs: [
      { q: 'Can I get one-off advisory?', a: 'Yes. I can provide one-off advisory for a specific decision or transaction.' },
      { q: 'Is there support on international tax?', a: 'Yes. I assess the tax implications of cross-border transactions and structures and guide you.' },
      { q: 'Who are these services for?', a: 'For growing SMEs and businesses with more corporate needs.' },
    ],
  },
};

// ---- Sayfa metinleri ----
export const pages = {
  home: {
    metaDescription:
      'Accounting for SMEs across Istanbul: company formation, payroll, tax returns and incentives. Contact and service-scope information.',
    pill: 'Istanbul-wide · Accepting new clients',
    h1pre: 'Your SME’s',
    h1grad: 'Financial Advisor',
    h1post: 'in Istanbul',
    lede:
      'From company formation to day-to-day accounting, from tax returns to incentive applications, leave all your business’s financial affairs to me with confidence. I serve every district of Istanbul, and my phone is always on.',
    ctaSecondary: 'I want to start a company',
    trust: ['Licensed CPA (SMMM)', 'TÜRMOB member', 'Şişli / Istanbul'],
    servicesEyebrow: 'Services',
    servicesHeading: 'By your side across your financial affairs, start to finish',
    servicesLede:
      'Whichever you need — setup from scratch, regular follow-up, or one-off advisory.',
    whyEyebrow: 'Why me?',
    whyHeading: 'How I work',
    processEyebrow: 'How we work',
    processHeading: 'We start together in 4 steps',
    portalEyebrow: 'Existing clients',
    portalHeading: 'Reach your documents 24/7',
    portalText:
      'Are you a client? You can access your documents, returns and reports through the client portal anytime.',
    portalBtn: 'Client Login',
    faq: [
      {
        q: 'How long does company formation take?',
        a: 'If the documents are ready, a sole proprietorship is usually set up in 1–2 days and a limited/joint-stock company within a few business days. I run the process from start to finish.',
      },
      {
        q: 'Is it hard to switch to you from my current accountant?',
        a: 'No. I handle the handover, record transfer and the necessary notifications on your behalf; you only give your approval.',
      },
      {
        q: 'Where do you provide services?',
        a: 'My office is in Şişli (Bilaş İş Merkezi). I serve businesses across Istanbul; most procedures can also be handled remotely.',
      },
    ],
  },
  services: {
    metaDescription:
      'TGF Mali Müşavirlik services: company formation, accounting & payroll, tax returns, incentives & KOSGEB, technopark & R&D and advisory. Istanbul-wide.',
    eyebrow: 'Services',
    h1: 'By your side at every stage of your business',
    lede:
      'From formation to growth, I’ve gathered the financial work you need under one roof. Browse the topic you’re interested in below; if you have a question, I’m just a phone call away.',
    detail: 'View details',
  },
  serviceDetail: {
    freeCall: 'Scope Discussion',
    waWrite: 'Message on WhatsApp',
    processEyebrow: 'Process',
    faqEyebrow: 'Frequently asked',
    faqHeading: 'Things you might be wondering',
    otherHeading: 'Other services',
    ctaHeading: (t: string) => `Ready for ${t}?`,
    waText: (t: string) => `Hello, I’d like to get information about ${t}.`,
  },
  about: {
    metaDescription:
      'Gökay Gül — Certified Public Accountant (SMMM). Alongside SMEs across Istanbul; a reachable, transparent accountant who warns you ahead of time.',
    eyebrow: 'About',
    h1: 'The financial advisor by your side',
    lede:
      'What small and medium-sized businesses need most is an accountant who picks up the phone and explains clearly what they’re doing. That’s exactly what I do.',
    portraitCap: 'Gökay Gül · CPA (SMMM)',
    noteHeading: 'A note from the founder',
    note: [
      'Hi, I’m Gökay. For years I’ve been handling the financial affairs of businesses in Istanbul. The biggest gap I’ve seen in this work is owners’ questions going unanswered.',
      'I work differently: I pick up the phone, reply on WhatsApp and explain upcoming obligations in plain language. I don’t hide behind the numbers; I explain what I do and what you pay.',
      'Whether you’re starting a new company or want to hand over your existing setup — I take on the paperwork side, and you get on with your business.',
    ],
    sign: '— Gökay Gül, Certified Public Accountant (SMMM)',
    statsEyebrow: 'In brief',
    statsHeading: 'Ground you can trust',
    stats: [
      { big: '20+ Years', small: 'Field experience', icon: 'award' },
      { big: 'SMMM', small: 'TÜRMOB licensed', icon: 'shield' },
      { big: 'İSMMMO', small: 'Chamber member', icon: 'check' },
      { big: 'Şişli', small: 'Istanbul office', icon: 'pin' },
    ],
    valuesEyebrow: 'My values',
    valuesHeading: 'My way of working fits in three words',
    expEyebrow: 'Areas of expertise',
    expHeading: 'These are the areas I help with most',
    expertise: [
      'SME accounting',
      'Company formation',
      'Incentives & KOSGEB',
      'Accounting & payroll',
      'Tax returns & planning',
      'E-commerce & digital businesses',
    ],
    ctaHeading: 'How about we meet?',
    personDesc:
      'A Certified Public Accountant (SMMM) with over 20 years of field experience in Istanbul. Serves SMEs in company formation, accounting, tax planning and incentives.',
  },
  contact: {
    metaDescription:
      'TGF Mali Müşavirlik contact: Bilaş İş Merkezi, Şişli/Istanbul. Phone 0212 320 6006, WhatsApp and map. Reply within one business day.',
    h1: 'Get in touch',
    lede:
      'I serve all of Istanbul from my office in Şişli. Phone, WhatsApp or the form below — whichever is easiest for you.',
    contactHeading: 'Write and I’ll get back to you',
  },
  guide: {
    metaDescription:
      'TGF Mali Müşavirlik guide: practical, plain notes on company formation, tax and accounting for SMEs in Istanbul. From an accountant’s point of view.',
    eyebrow: 'Guide',
    h1: 'Practical notes for SMEs',
    lede:
      'From company formation to the tax calendar, I’ve explained the most-asked topics in plain language. If you can’t find what you’re looking for, I’m just a phone call away.',
    readMore: 'Read more',
    ctaHeading: 'Not finding the answer here?',
    ctaText: 'Ask directly. The initial call covers your situation and the service scope.',
    relatedEyebrow: 'Related service',
    allPosts: 'All guide articles',
  },
  notFound: {
    metaDescription: 'The page you’re looking for wasn’t found. You can return home or browse our services.',
    title: 'Page not found',
    homeBtn: 'Home',
    servicesBtn: 'Services',
    contactBtn: 'Contact',
  },
};
