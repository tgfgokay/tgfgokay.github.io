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
    short: 'Regular, on-time and error-free accounting. No penalties, no delays to deal with.',
    summary:
      'From bookkeeping to payroll, from social-security filings to e-documents, I keep your day-to-day accounting in order and track the deadlines for you.',
    icon: 'ledger',
  },
  {
    slug: 'tax-returns',
    trSlug: 'beyanname-vergi',
    title: 'Tax Returns',
    short: 'Your returns filed on time; your tax advantages never overlooked.',
    summary:
      'VAT, withholding, provisional and annual returns; plus I plan your lawful tax advantages in advance so you don’t pay more than you have to.',
    icon: 'receipt',
  },
  {
    slug: 'incentives-kosgeb',
    trSlug: 'tesvik-kosgeb',
    title: 'Incentives & KOSGEB',
    short: 'Claim the support you’re entitled to; finance your growth with government incentives.',
    summary:
      'I assess your eligibility for KOSGEB, investment incentives and other government support, and manage the application process from start to finish.',
    icon: 'growth',
  },
  {
    slug: 'technopark-rd',
    trSlug: 'teknopark',
    title: 'Technopark & R&D',
    short: 'I run the technopark process end to end for software and R&D businesses.',
    summary:
      'From the technopark application to applying the exemption, from the personnel withholding incentive to social-security support, I manage the whole process — so your software and R&D business uses every advantage in full.',
    icon: 'spark',
  },
  {
    slug: 'advisory',
    trSlug: 'danismanlik',
    title: 'Advisory',
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
    title: 'Free initial call',
    text: 'I listen to your situation by phone or WhatsApp. Non-binding and free of charge.',
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
    title: 'I protect and warn you',
    text: 'I let you know before a penalty arises; I never miss an advantage.',
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
      'Company formation is the first step in officially starting a new business: choosing the right company type, preparing the articles of association, completing the trade registry and tax office procedures, and setting up your accounting. You’re ready to grow your business; let me take on the paperwork. In our first talk I explain clearly which company type — sole proprietorship, limited or joint-stock — suits you, the setup and monthly costs you’ll face, and the tax and social-security obligations that await you afterwards. Once we decide together, I run the whole process on your behalf: document preparation, registration, e-signature, ledger certification and e-document applications included. My aim is for you to start on clean, solid ground and never deal with a surprise penalty or missing filing later. You focus on the business itself; leave the formal side to me. From day one I track the deadlines, and we move into regular follow-up with your first return and filings.',
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
      'Accounting and payroll mean keeping a business’s daily financial records in order and calculating staff wages in line with the law. From bookkeeping to payroll, from social-security filings to e-documents, I carry out all of this for you on a regular basis. I collect your documents digitally or on paper, process the records on time, and prepare each month your staff’s payroll including wages, deductions, leave and social security. Entry/exit notifications, monthly social-security and withholding filings, and e-invoice, e-archive and e-ledger processes are all part of this. Most importantly, I track the deadlines; you never deal with late-payment interest or administrative penalties. At month end I share your position in a plain summary and remind you of upcoming obligations in advance. If you’re moving from another accountant, I handle the handover and record transfer too; I only need your approval. This way accounting stops being a burden that slows you down and becomes an order that runs quietly behind you.',
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
    heroTitle: 'Your return on time, your advantage in your pocket',
    intro:
      'A tax return is your business reporting its income, expenses and tax details to the tax office within the legal period; good planning is what keeps you from paying more tax than necessary. I prepare VAT, withholding, provisional and annual income/corporate returns on time and file them on your behalf. But I don’t leave the job at just filing: before the period closes I share your estimated tax amount and help you plan your payment schedule in advance. I regularly review the exemptions, deductions and incentives that suit your sector and apply the ones you’re entitled to — so you pay the least tax possible within the limits the law allows. By setting up the relationship between provisional tax, withholding and the annual return correctly, I prevent surprises that could arise at year-end. Because I track the deadlines, there are no delays or related penalties. You know what you’ll pay in advance, clearly; I never hide behind the numbers. My aim is to make tax both lawful and predictable.',
    stepsHeading: 'How do we work?',
    steps: [
      { title: 'Review', text: 'I assess your records and your position for the period.' },
      { title: 'Planning', text: 'We plan the lawful advantages and exemptions in advance.' },
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
      { q: 'How do you capture tax advantages?', a: 'I regularly review the exemptions, deductions and incentives suited to your sector and apply the applicable ones.' },
      { q: 'What happens if a return is late?', a: 'Because I track the deadlines, there are no delays; I prevent any potential penalties in advance.' },
    ],
  },

  'incentives-kosgeb': {
    heroTitle: 'Claim the support you’re entitled to',
    intro:
      'Government support and incentives are programmes that let you finance your growth with public resources alongside your own. For KOSGEB support, the investment incentive certificate and other government support, I first assess your eligibility and then manage the application process from start to finish. Looking at your size, sector and growth plan, I list for you the programmes you can enter and, within the scattered legislation, single out the ones that genuinely fit you. I prepare the application file, submit it on your behalf and track the result. Even after approval the work doesn’t end: we manage the entitlement, reporting and obligations together, so the support you receive isn’t reclaimed. Newly formed companies can also benefit from many programmes — in fact, if you’re at the formation stage, we increase your chances of support by structuring things correctly from the very start. My aim is that you don’t leave on the table the support you’re entitled to but that most businesses aren’t even aware of. Let’s plan your growth together with the opportunities the state offers.',
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
      { q: 'Can a newly formed company benefit too?', a: 'In many programmes, yes. If you’re at the formation stage, we boost your chances of support by structuring it right from the start.' },
    ],
  },

  'technopark-rd': {
    heroTitle: 'I run your technopark process end to end',
    intro:
      'A technopark (technology development zone) is an area that offers software, R&D and design businesses significant tax advantages under Law No. 4691. I run the technopark process for these businesses end to end: from the zone application to applying the earnings exemption, from the personnel income-tax withholding incentive to social-security employer-premium support. As a first step I look at your business structure and staff and lay out, in numbers, the advantage the technopark will bring you. Then I separate qualifying activities within the exemption from those outside its scope and structure things correctly from the start — because the most common mistake in a technopark is applying the exemption more broadly than it should be and running into trouble later. I carry out the zone admission and application processes on your behalf and prepare the paperwork. After admission, I regularly track the correct application of the exemption, the withholding incentive and social-security support. I use every advantage in full and set up the scope without error; you focus on your software and your growth.',
    stepsHeading: 'How do we run it?',
    steps: [
      { title: 'Assessment', text: 'I look at your business structure and staff and lay out the technopark advantage in numbers.' },
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
      'Financial advisory means getting expert support on the decisions that go beyond day-to-day accounting as your business grows. In areas such as company valuation, merger, transfer and demerger, international tax and double taxation, and partnership structure and share transfer, I stand by you with my experience. First I understand your need and your goal clearly and assess the situation from a financial and tax standpoint. Then I lay out more than one path before you, with the risks and advantages of each, so you make the decision on solid ground. And once you’ve decided, I don’t leave you alone — I put the decision into action and manage the process. You can also take these services on a one-off basis; we can work within a limited scope for a specific transaction or decision. For higher-level, cross-border or high-volume structures, if needed I also refer you to the more comprehensive advisory I run through gokaygul.com. My aim is that you don’t have to make the complex decisions that growth brings on your own.',
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
      { q: 'Who are these services for?', a: 'For growing SMEs and businesses with more corporate needs. If needed, I also direct you to higher-level advisory via gokaygul.com.' },
    ],
  },
};

// ---- Sayfa metinleri ----
export const pages = {
  home: {
    metaDescription:
      'A financial advisor alongside SMEs across Istanbul. Company formation, accounting & payroll, tax returns, incentives & KOSGEB. My phone is always on — free initial call.',
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
    whyHeading: 'More than a bookkeeper',
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
    freeCall: 'Free Initial Call',
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
      'I work differently: I pick up the phone, I reply on WhatsApp, I warn you before a penalty arises. I don’t hide behind the numbers; I explain what I do and what you pay in plain language.',
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
      'Foreign investor advisory',
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
    ctaText: 'Ask directly. A free initial call is non-binding.',
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
