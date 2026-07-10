// İki dilli arayüz metinleri (UI strings). Türkçe = varsayılan/kök, İngilizce = /en/.
// Bileşenler lang prop'u ile buradan besleniyor. NAP (telefon/adres) site.ts'te dil-bağımsız.

export type Lang = 'tr' | 'en';

export const langs: Lang[] = ['tr', 'en'];

// Her dil için kök yollar (nav + dil değiştirici).
export const routes = {
  tr: {
    home: '/',
    services: '/hizmetler/',
    guide: '/rehber/',
    about: '/hakkimizda/',
    contact: '/iletisim/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    guide: '/en/guide/',
    about: '/en/about/',
    contact: '/en/contact/',
  },
} as const;

export const ui = {
  tr: {
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    inLanguage: 'tr-TR',
    brandSuffix: 'Serbest Muhasebeci Mali Müşavir, İstanbul',
    hours: 'Pazartesi – Cuma, 09:00 – 18:00',
    waText: 'Merhaba, mali müşavirlik hizmetleriniz hakkında bilgi almak istiyorum.',
    businessDesc:
      'İstanbul genelinde KOBİ’lere yönelik mali müşavirlik: şirket kuruluşu, muhasebe ve bordro, beyanname ve vergi, teşvik ve KOSGEB, danışmanlık. Ofis Şişli’de.',
    langSwitch: { to: 'en', label: 'EN', aria: 'Switch to English' },
    nav: { services: 'Hizmetler', guide: 'Rehber', about: 'Hakkımızda', contact: 'İletişim' },
    home: 'Ana Sayfa',
    portal: 'Mükellef Girişi',
    whatsapp: 'WhatsApp',
    waWrite: 'WhatsApp’tan yaz',
    freeCall: 'Ücretsiz Ön Görüşme',
    menuOpen: 'Menüyü aç',
    brandAria: 'TGF Mali Müşavirlik ana sayfa',
    navAria: 'Ana menü',
    // Footer
    footerDesc:
      'İstanbul genelinde KOBİ’lerin yanında; şirket kuruluşundan günlük muhasebeye kadar mali işlerinizi güvenle yürütüyorum.',
    footerServices: 'Hizmetler',
    footerContact: 'İletişim',
    portalArrow: 'Mükellef Girişi →',
    legalLine: (o: { taxOffice: string; vkn: string; chamber: string }) =>
      `${o.taxOffice} · V.K.N. ${o.vkn} · SMMM ruhsatlı · ${o.chamber} üyesi`,
    rights: 'Tüm hakları saklıdır.',
    // CTA strip
    ctaHeading: 'Bir soru mu var? Önce konuşalım.',
    ctaText:
      'Ücretsiz ön görüşme bağlayıcı değil. Durumunuzu dinleyeyim, en doğru yolu birlikte bulalım.',
    // Contact section
    contactEyebrow: 'İletişim',
    contactHeading: 'Hadi tanışalım',
    contactLede: 'Bir çayımızı için, işinizi konuşalım. En geç 1 iş günü içinde dönüş yaparım.',
    addr: 'Adres',
    openMap: 'Haritada aç →',
    phone: 'Telefon',
    email: 'E-posta',
    workingHours: 'Çalışma saatleri',
    mapTitle: 'TGF Mali Müşavirlik konumu — Bilaş İş Merkezi, Şişli',
    formNote: 'Formu doldurun, ben size döneyim.',
    fName: 'Ad Soyad',
    fNamePh: 'Adınız Soyadınız',
    fPhone: 'Telefon',
    fPhonePh: '05xx xxx xx xx',
    fSubject: 'Konu',
    fSubjectOpts: [
      'Şirket kuruluşu',
      'Muhasebe & bordro',
      'Beyanname & vergi',
      'Teşvik & KOSGEB',
      'Teknopark & Ar-Ge',
      'Danışmanlık',
      'Diğer',
    ],
    fMessage: 'Mesajınız (opsiyonel)',
    fMessagePh: 'Kısaca durumunuzu yazabilirsiniz',
    fSend: 'Gönder',
    fAlt: 'veya',
    fAltLink: 'WhatsApp’tan yazın',
    waFabAria: 'WhatsApp’tan yazın',
    // 404
    nf404Title: 'Bu sayfayı bulamadım',
    nf404Lede: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Buradan devam edebilirsiniz:',
    // breadcrumb roots
    bcHome: 'Ana Sayfa',
    detay: 'Detaya bak',
    devamlaOku: 'Devamını oku',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    inLanguage: 'en-US',
    brandSuffix: 'Certified Public Accountant, Istanbul',
    hours: 'Monday – Friday, 09:00 – 18:00',
    waText: 'Hello, I’d like to get information about your accounting services.',
    businessDesc:
      'Accounting and financial advisory for SMEs across Istanbul: company formation, bookkeeping and payroll, tax returns, incentives and KOSGEB, advisory. Office in Şişli.',
    langSwitch: { to: 'tr', label: 'TR', aria: 'Türkçe’ye geç' },
    nav: { services: 'Services', guide: 'Guide', about: 'About', contact: 'Contact' },
    home: 'Home',
    portal: 'Client Login',
    whatsapp: 'WhatsApp',
    waWrite: 'Message on WhatsApp',
    freeCall: 'Free Initial Call',
    menuOpen: 'Open menu',
    brandAria: 'TGF Mali Müşavirlik home',
    navAria: 'Main menu',
    footerDesc:
      'Alongside SMEs across Istanbul — from company formation to day-to-day accounting, I handle your financial affairs with care.',
    footerServices: 'Services',
    footerContact: 'Contact',
    portalArrow: 'Client Login →',
    legalLine: (o: { taxOffice: string; vkn: string; chamber: string }) =>
      `${o.taxOffice} · Tax No. ${o.vkn} · Licensed CPA (SMMM) · Member of ${o.chamber}`,
    rights: 'All rights reserved.',
    ctaHeading: 'Have a question? Let’s talk first.',
    ctaText:
      'A free initial call is not binding. Tell me your situation and we’ll find the right path together.',
    contactEyebrow: 'Contact',
    contactHeading: 'Let’s meet',
    contactLede:
      'Let’s have a coffee and talk about your business. I reply within one business day at the latest.',
    addr: 'Address',
    openMap: 'Open in map →',
    phone: 'Phone',
    email: 'Email',
    workingHours: 'Working hours',
    mapTitle: 'TGF Mali Müşavirlik location — Bilaş İş Merkezi, Şişli',
    formNote: 'Fill in the form and I’ll get back to you.',
    fName: 'Full name',
    fNamePh: 'Your full name',
    fPhone: 'Phone',
    fPhonePh: '+90 5xx xxx xx xx',
    fSubject: 'Subject',
    fSubjectOpts: [
      'Company formation',
      'Accounting & payroll',
      'Tax returns',
      'Incentives & KOSGEB',
      'Technopark & R&D',
      'Advisory',
      'Other',
    ],
    fMessage: 'Your message (optional)',
    fMessagePh: 'Briefly describe your situation',
    fSend: 'Send',
    fAlt: 'or',
    fAltLink: 'message on WhatsApp',
    waFabAria: 'Message on WhatsApp',
    nf404Title: 'I couldn’t find this page',
    nf404Lede: 'The page you’re looking for may have moved or never existed. You can continue from here:',
    bcHome: 'Home',
    detay: 'View details',
    devamlaOku: 'Read more',
  },
} as const;

export type UI = (typeof ui)['tr'];
