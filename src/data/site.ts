// TGF Mali Müşavirlik — merkezi site verisi (NAP, hizmetler, linkler).
// Tek doğruluk kaynağı; footer/header/schema hepsi buradan besleniyor.

export const site = {
  name: 'TGF Mali Müşavirlik',
  legalName: 'Gökay Gül — Serbest Muhasebeci Mali Müşavir',
  personName: 'Gökay Gül',
  title: 'Serbest Muhasebeci Mali Müşavir',
  domain: 'tgfmalimusavirlik.com',
  url: 'https://tgfmalimusavirlik.com',
  tagline: 'İstanbul geneli · KOBİ mali müşavirliği',

  // İletişim
  phone: '+902123206006',
  phoneDisplay: '0212 320 6006', // NBSP: numara satır sonunda bölünmesin
  gsm: '+905418528604',
  gsmDisplay: '0541 852 8604',
  fax: '+902123206047',
  faxDisplay: '0212 320 6047',
  email: 'gokay.gul@tgfmalimusavirlik.com',
  whatsapp: '905418528604', // wa.me formatı
  whatsappText: 'Merhaba, mali müşavirlik hizmetleriniz hakkında bilgi almak istiyorum.',

  // Adres (NAP tutarlı)
  address: {
    line: 'Kaptanpaşa Mah. Darülaceze Cad. Bilaş İş Merkezi A Blok No:31 Kat:8 D:80',
    district: 'Okmeydanı / Şişli',
    city: 'İstanbul',
    postalCode: '34384',
    country: 'TR',
    full: 'Kaptanpaşa Mah. Darülaceze Cad. Bilaş İş Merkezi A Blok No:31 Kat:8 D:80, Okmeydanı / Şişli / İstanbul',
    lat: 41.0624177,
    lng: 28.9686336,
  },

  // Yasal
  taxOffice: 'Şişli Vergi Dairesi',
  vkn: '65284104820', // 11 hane — şahıs işletmesi (TC = VKN)
  chamber: 'İstanbul SMMM Odası (İSMMMO)',

  // Çalışma saatleri (varsayım — netleşince güncelle)
  hours: 'Pazartesi – Cuma, 09:00 – 18:00',
  hoursSchema: 'Mo,Tu,We,Th,Fr 09:00-18:00',

  // Dış linkler
  portalUrl: 'https://emukellef.com.tr',
  linkedin: 'https://www.linkedin.com/in/gökay-gül-b7771865/',
  gokaygul: 'https://gokaygul.com',

  // Google Maps embed (koordinat pinli)
  mapEmbed:
    'https://www.google.com/maps?q=41.0624177,28.9686336&hl=tr&z=17&output=embed',
  mapLink: 'https://www.google.com/maps?q=41.0624177,28.9686336',

  // Güven şeridi rakamları (Gökay'dan gerçek veri gelince güncellenecek)
  stats: {
    // years: null,      // deneyim yılı — bekleniyor
    // clients: null,    // mükellef sayısı — bekleniyor
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string; // ana sayfa kartı — 1 cümle
  summary: string; // detay sayfası özet
  metaDesc: string; // meta description (≤155 karakter)
  icon: string; // basit SVG anahtarı
};

// /hizmetler/{slug} — 5 hizmet. Giriş kapısı: şirket kuruluşu.
export const services: Service[] = [
  {
    slug: 'sirket-kurulusu',
    title: 'Şirket Kuruluşu',
    metaDesc:
      'Şişli merkezli mali müşavirden İstanbul genelinde şirket kuruluşu: tür seçimi, maliyetler, tescil ve kuruluş sonrası yükümlülükler — süreci ben yürütürüm.',
    short:
      'Limited, anonim ya da şahıs — doğru şirket türüyle sıfırdan, adım adım yanınızdayım.',
    summary:
      'Hangi şirket türü size uygun, hangi maliyetlerle karşılaşacaksınız, kuruluş sonrası ne yapmanız gerekiyor — hepsini önceden konuşur, süreci sizin adınıza yürütürüm.',
    icon: 'building',
  },
  {
    slug: 'muhasebe-bordro',
    title: 'Muhasebe & Bordro',
    metaDesc:
      'İstanbul’da KOBİ’ler için muhasebe ve bordro: defter kaydı, SGK bildirimleri, e-belgeler. Tarihleri sizin yerinize takip ederim.',
    short:
      'Düzenli, zamanında ve hatasız muhasebe. Cezayla, gecikmeyle uğraşmayın.',
    summary:
      'Defter kaydından bordroya, SGK bildirimlerinden e-belgelere kadar günlük muhasebenizi düzenli tutar, tarihleri sizin yerinize takip ederim.',
    icon: 'ledger',
  },
  {
    slug: 'beyanname-vergi',
    title: 'Beyanname & Vergi',
    metaDesc:
      'KDV, muhtasar, geçici ve yıllık beyannameler İstanbul’da mali müşavir güvencesiyle. Yasal vergi avantajlarını önceden planlarım.',
    short:
      'Beyannameleriniz zamanında; vergi avantajlarınız gözden kaçmadan.',
    summary:
      'KDV, muhtasar, geçici ve yıllık beyannameler; üstüne yasal vergi avantajlarını önceden planlayarak gereğinden fazla ödemenizi önlerim.',
    icon: 'receipt',
  },
  {
    slug: 'tesvik-kosgeb',
    title: 'Teşvik & KOSGEB',
    metaDesc:
      'KOSGEB ve yatırım teşviklerinde uygunluk değerlendirmesi ve başvuru yönetimi. İstanbul’da KOBİ’ler için baştan sona destek.',
    short:
      'Hakkınız olan destekleri alın, büyümenizi devlet destekleriyle finanse edin.',
    summary:
      'KOSGEB, yatırım teşvikleri ve diğer devlet desteklerinde uygunluğunuzu değerlendirir, başvuru sürecini baştan sona yönetirim.',
    icon: 'growth',
  },
  {
    slug: 'teknopark',
    title: 'Teknopark & Ar-Ge',
    metaDesc:
      'Teknopark başvurusu, kazanç istisnası, stopaj teşviki ve SGK desteği: yazılım ve Ar-Ge işiniz için tüm süreci İstanbul’da ben yönetirim.',
    short:
      'Yazılım ve Ar-Ge işletmelerinin teknopark süreçlerini baştan sona yürütüyorum.',
    summary:
      'Teknopark başvurusundan istisna uygulamasına, personel stopaj teşvikinden SGK desteğine kadar tüm süreci ben yönetirim. Yazılım ve Ar-Ge işinizin avantajlarını eksiksiz kullanmanızı sağlarım.',
    icon: 'spark',
  },
  {
    slug: 'danismanlik',
    title: 'Danışmanlık',
    metaDesc:
      'Değerleme, birleşme/devir ve uluslararası vergi gibi karmaşık kararlarda İstanbul’da KOBİ’nizin yanında mali danışmanlık.',
    short:
      'Şirket değerleme, birleşme ve uluslararası vergi gibi üst düzey ihtiyaçlar.',
    summary:
      'İşletmeniz büyürken karşınıza çıkan daha karmaşık kararlarda — değerleme, birleşme/devir, uluslararası vergi — yanınızda dururum.',
    icon: 'compass',
  },
];

// Süreç adımları — ana sayfa "nasıl çalışıyoruz"
export const processSteps = [
  {
    title: 'Ücretsiz ön görüşme',
    text: 'Telefon ya da WhatsApp’tan durumunuzu dinliyorum. Bağlayıcı değil, ücretsiz.',
  },
  {
    title: 'İhtiyaç analizi',
    text: 'İşinize ve hedefinize göre neye ihtiyacınız olduğunu netleştiriyoruz.',
  },
  {
    title: 'Devir / kurulum',
    text: 'Mevcut kayıtlarınızı devralır ya da sıfırdan kurar, düzeni oturtururum.',
  },
  {
    title: 'Düzenli takip',
    text: 'Tarihleri ben takip ederim; siz işinize odaklanırsınız.',
  },
];

// "Neden biz?" — birinci tekil, samimi
export const whyPoints = [
  {
    title: 'Ulaşılabilirim',
    text: 'Telefonu açan, WhatsApp’tan dönen bir mali müşavir. Sorunuz cevapsız kalmaz.',
  },
  {
    title: 'Sizi korur, uyarırım',
    text: 'Ceza yemeden önce haber veririm; avantajı gözden kaçırmam.',
  },
  {
    title: 'Şeffafım',
    text: 'Ne yaptığımı, ne ödediğinizi açıkça bilirsiniz. Sürpriz yok.',
  },
];
