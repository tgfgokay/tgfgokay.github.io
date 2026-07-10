// Her hizmet detay sayfası için zengin içerik.
// Şirket kuruluşu = giriş kapısı, en detaylı (şirket türü kartları dahil).

export type Faq = { q: string; a: string };
export type TypeCard = { title: string; badge?: string; text: string };

export interface ServiceDetail {
  heroTitle: string;
  intro: string;
  typeCards?: TypeCard[]; // opsiyonel (yalnız şirket kuruluşunda)
  typeHeading?: string;
  steps: { title: string; text: string }[];
  stepsHeading: string;
  included: string[];
  includedHeading: string;
  faqs: Faq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'sirket-kurulusu': {
    heroTitle: 'Doğru şirket türüyle, temiz bir başlangıç',
    intro:
      'Şirket kuruluşu, yeni bir işi resmi olarak başlatmanın ilk adımıdır: doğru şirket türünü seçmek, ana sözleşmeyi hazırlamak, ticaret sicil ve vergi dairesi işlemlerini tamamlamak ve muhasebe düzenini kurmak. İşinizi büyütmeye hazırsınız; ben de kağıt işini üstleneyim. İlk konuşmamızda hangi şirket türünün — şahıs, limited ya da anonim — size uyduğunu, karşılaşacağınız kuruluş ve aylık maliyetleri, sonrasında sizi bekleyen beyanname ve SGK yükümlülüklerini açıkça anlatırım. Kararı birlikte verdikten sonra bütün süreci sizin adınıza yürütürüm: evrak hazırlığı, tescil, e-imza, defter tasdiki ve e-belge başvuruları dahil. Amacım, işe temiz ve sağlam bir zeminde başlamanız; ileride sürpriz bir ceza ya da eksik bildirimle uğraşmamanız. Siz işinizin kendisine odaklanın, resmi tarafı bana bırakın. Kuruluştan itibaren tarihleri ben takip eder, ilk beyannameniz ve bildirimlerinizle birlikte düzenli takibe geçeriz.',
    typeHeading: 'Hangi şirket türü size göre?',
    typeCards: [
      {
        title: 'Şahıs İşletmesi',
        text: 'Hızlı ve düşük maliyetli kuruluş. Küçük ölçekli, tek kişilik ya da yeni başlayan işler için ideal başlangıç.',
      },
      {
        title: 'Limited Şirket',
        badge: 'En sık tercih edilen',
        text: 'Ortaklık ve sınırlı sorumluluk isteyen KOBİ’ler için dengeli seçenek. Kurumsal görünüm, yönetilebilir maliyet.',
      },
      {
        title: 'Anonim Şirket',
        text: 'Büyüme, yatırımcı ve hisse devri planlayanlar için. Daha kurumsal yapı, ek yükümlülükler.',
      },
    ],
    stepsHeading: 'Kuruluş nasıl ilerliyor?',
    steps: [
      { title: 'Görüşme', text: 'İşinizi ve hedefinizi dinliyorum; size en uygun türü birlikte belirliyoruz.' },
      { title: 'Hazırlık', text: 'Ana sözleşme, imza, vergi dairesi ve ticaret sicil evraklarını hazırlıyorum.' },
      { title: 'Tescil', text: 'Ticaret sicil ve vergi dairesi işlemlerini sizin adınıza tamamlıyorum.' },
      { title: 'Kurulum', text: 'E-imza, defter tasdiki, e-belge sistemleri ve muhasebe düzeninizi kuruyorum.' },
      { title: 'Takip', text: 'İlk beyanname ve bildirimlerinizle birlikte düzenli takibe geçiyoruz.' },
    ],
    includedHeading: 'Kuruluşa neler dahil?',
    included: [
      'Şirket türü ve maliyet danışmanlığı',
      'Ana sözleşme ve kuruluş evrakları',
      'Ticaret sicil ve vergi dairesi işlemleri',
      'Potansiyel vergi mükellefiyeti kurulumu',
      'E-imza, e-fatura / e-arşiv başvuruları',
      'Defter tasdiki ve ilk muhasebe düzeni',
    ],
    faqs: [
      { q: 'Kuruluş ne kadar sürüyor?', a: 'Evraklar tamamsa şahıs işletmesi 1–2 gün, limited/anonim şirket birkaç iş günü içinde kurulur.' },
      { q: 'Sermaye şart mı, ne kadar olmalı?', a: 'Limited şirkette asgari sermaye yasayla belirlidir; peşin ödenme zorunluluğu esnetilmiştir. Durumunuza göre en uygun tutarı beraber belirleriz.' },
      { q: 'Evden / sanal ofisten kurabilir miyim?', a: 'Birçok faaliyet için mümkün. Sektörünüze göre uygunluğu değerlendirip yol gösteririm.' },
      { q: 'Kuruluştan sonra beni ne bekliyor?', a: 'Düzenli beyanname, SGK ve e-belge yükümlülükleri. Hepsinin takibini ben üstlenirim; siz işinize odaklanırsınız.' },
    ],
  },

  'muhasebe-bordro': {
    heroTitle: 'Düzenli muhasebe, zamanında bordro',
    intro:
      'Muhasebe ve bordro, bir işletmenin günlük mali kayıtlarının düzenli tutulması ve personel ücretlerinin yasaya uygun hesaplanmasıdır. Defter kaydından bordroya, SGK bildiriminden e-belgeye kadar bütün bu işleri sizin yerinize düzenli olarak yürütürüm. Belgelerinizi dijital ya da kağıt olarak toplar, kayıtları zamanında işler; personelinizin ücret, kesinti, izin ve SGK hesaplarını içeren bordrosunu her ay hazırlarım. İşe giriş-çıkış bildirimleri, aylık SGK ve muhtasar bildirimleri, e-fatura, e-arşiv ve e-defter süreçleri de bu kapsamdadır. En önemlisi, tarihleri ben takip ederim; siz gecikme faizi ya da idari cezayla uğraşmazsınız. Ayın sonunda durumunuzu sade bir özetle paylaşır, yaklaşan yükümlülükleri önceden hatırlatırım. Başka bir müşavirden geçiyorsanız devir ve kayıt aktarımını da ben yaparım; sizden yalnızca onay beklerim. Böylece muhasebe, işinizi yavaşlatan bir yük olmaktan çıkar; arkanızda sessizce işleyen bir düzene dönüşür.',
    stepsHeading: 'Nasıl yürütüyoruz?',
    steps: [
      { title: 'Devir', text: 'Mevcut kayıtlarınızı devralır ya da sıfırdan düzeni kurarım.' },
      { title: 'Toplama', text: 'Belgelerinizi düzenli akışla toplar, dijital ortamda saklarım.' },
      { title: 'İşleme', text: 'Kayıtları zamanında işler, bordro ve SGK bildirimlerini hazırlarım.' },
      { title: 'Raporlama', text: 'Durumunuzu anlaşılır şekilde özetler, tarihleri hatırlatırım.' },
    ],
    includedHeading: 'Neler dahil?',
    included: [
      'Yasal defter kayıtları ve tasdikleri',
      'Personel bordrosu ve ücret hesaplamaları',
      'SGK işe giriş/çıkış ve aylık bildirimler',
      'E-fatura / e-arşiv / e-defter süreçleri',
      'Cari, banka ve stok mutabakatları',
      'Aylık özet ve tarih hatırlatmaları',
    ],
    faqs: [
      { q: 'Belgeleri nasıl ulaştırırım?', a: 'Dijital olarak (fotoğraf/PDF/e-belge) gönderebilirsiniz; kağıt tercih ederseniz o da olur. Size en pratik olanı seçeriz.' },
      { q: 'Bordroyu siz mi hesaplıyorsunuz?', a: 'Evet. Ücret, kesinti, izin ve SGK dahil bordronuzu hazırlar, bildirimleri zamanında yaparım.' },
      { q: 'Başka müşavirden geçmek zor mu?', a: 'Hayır. Devir ve kayıt aktarımını ben yaparım; siz sadece onay verirsiniz.' },
    ],
  },

  'beyanname-vergi': {
    heroTitle: 'Beyannameniz zamanında, avantajınız cebinizde',
    intro:
      'Beyanname, işletmenizin gelir, gider ve vergi bilgilerini yasal sürede vergi dairesine bildirmesidir; doğru planlama ise gereğinden fazla vergi ödememenizi sağlar. KDV, muhtasar, geçici ve yıllık gelir/kurumlar beyannamelerini zamanında hazırlar, sizin adınıza veririm. Ama işi yalnızca beyannameyi vermekle bırakmam: dönem kapanmadan tahmini vergi tutarınızı paylaşır, ödeme takviminizi önceden planlamanıza yardımcı olurum. Sektörünüze uygun istisna, indirim ve teşvikleri düzenli olarak gözden geçirir, hakkınız olan avantajları uygularım; böylece kanunun tanıdığı sınırlar içinde mümkün olan en az vergiyi ödersiniz. Geçici vergi, stopaj ve yıllık beyan arasındaki ilişkiyi doğru kurarak yıl sonunda çıkabilecek sürprizleri baştan önlerim. Tarihleri ben takip ettiğim için gecikme ve buna bağlı cezalar yaşanmaz. Ne ödeyeceğinizi önceden, açıkça bilirsiniz; rakamların arkasına saklanmam. Amacım vergiyi hem yasaya uygun hem de öngörülebilir kılmak.',
    stepsHeading: 'Nasıl çalışıyoruz?',
    steps: [
      { title: 'İnceleme', text: 'Kayıtlarınızı ve dönemsel durumunuzu değerlendiririm.' },
      { title: 'Planlama', text: 'Yasal avantaj ve istisnaları önceden planlarız.' },
      { title: 'Beyan', text: 'Beyannameleri hazırlar, zamanında veririm.' },
      { title: 'Bilgilendirme', text: 'Ne ödeyeceğinizi önceden, sürprizsiz bilirsiniz.' },
    ],
    includedHeading: 'Neler dahil?',
    included: [
      'KDV ve muhtasar beyannameleri',
      'Geçici ve yıllık gelir/kurumlar beyannamesi',
      'Vergi planlaması ve istisna değerlendirmesi',
      'Damga, harç ve diğer yükümlülükler',
      'Ödeme takvimi ve tutar bilgilendirmesi',
      'Vergi incelemesine hazırlık desteği',
    ],
    faqs: [
      { q: 'Ne kadar vergi ödeyeceğimi önceden öğrenebilir miyim?', a: 'Evet. Dönem kapanmadan tahmini tutarı paylaşır, planlamanıza yardımcı olurum.' },
      { q: 'Vergi avantajlarını nasıl yakalıyorsunuz?', a: 'Sektörünüze uygun istisna, indirim ve teşvikleri düzenli olarak gözden geçirir, uygun olanları uygularım.' },
      { q: 'Beyanname gecikirse ne olur?', a: 'Tarihleri ben takip ettiğim için gecikme yaşanmaz; olası cezaları önceden önlerim.' },
    ],
  },

  'tesvik-kosgeb': {
    heroTitle: 'Hakkınız olan destekleri alın',
    intro:
      'Devlet destekleri ve teşvikler, işletmenizin büyümesini kendi kaynaklarınızın yanında kamu kaynaklarıyla da finanse etmenizi sağlayan programlardır. KOSGEB destekleri, yatırım teşvik belgesi ve diğer devlet desteklerinde önce uygunluğunuzu değerlendirir, ardından başvuru sürecini baştan sona yönetirim. İşletmenizin ölçeğine, sektörüne ve büyüme planınıza bakarak hangi programlara girebileceğinizi sizin için listeler; dağınık mevzuatın içinde size gerçekten uyanları ayıklarım. Başvuru dosyasını hazırlar, başvuruyu sizin adınıza yapar ve sonucu takip ederim. Onay sonrasında da iş bitmez: hak ediş, raporlama ve yükümlülükleri birlikte yönetiriz; böylece aldığınız destek geri istenmez. Yeni kurulan şirketler de birçok programdan faydalanabilir — hatta kuruluş aşamasındaysanız yapıyı en baştan doğru kurarak destek şansınızı artırırız. Amacım, hakkınız olan ama çoğu işletmenin farkında bile olmadığı destekleri masada bırakmamanız. Büyümenizi devletin sunduğu imkânlarla birlikte planlayalım.',
    stepsHeading: 'Süreç nasıl işliyor?',
    steps: [
      { title: 'Uygunluk', text: 'Hangi destek ve teşviklere uygun olduğunuzu tespit ederim.' },
      { title: 'Hazırlık', text: 'Başvuru dosyası ve gerekli belgeleri hazırlarım.' },
      { title: 'Başvuru', text: 'Başvuruyu sizin adınıza yapar, süreci takip ederim.' },
      { title: 'Takip', text: 'Onay sonrası raporlama ve yükümlülükleri yönetiriz.' },
    ],
    includedHeading: 'Neler dahil?',
    included: [
      'KOSGEB destek programı değerlendirmesi',
      'Yatırım teşvik belgesi süreçleri',
      'Başvuru dosyası hazırlığı',
      'Uygunluk ve hak ediş takibi',
      'Destek sonrası raporlama',
      'Diğer devlet destekleri danışmanlığı',
    ],
    faqs: [
      { q: 'Hangi desteklere uygunum, nasıl anlarım?', a: 'İşletmenizin ölçeğine, sektörüne ve planınıza bakarak uygun destekleri sizin için listelerim.' },
      { q: 'Başvuruyu siz mi yapıyorsunuz?', a: 'Evet. Dosyayı hazırlar, başvuruyu yapar ve sonucu takip ederim.' },
      { q: 'Yeni kurulan şirket de faydalanabilir mi?', a: 'Birçok programda evet. Kuruluş aşamasındaysanız, en baştan doğru kurgulayarak destek şansınızı artırırız.' },
    ],
  },

  teknopark: {
    heroTitle: 'Teknopark süreçlerinizi baştan sona yürütüyorum',
    intro:
      'Teknopark (teknoloji geliştirme bölgesi), yazılım, Ar-Ge ve tasarım işletmelerine 4691 sayılı Kanun kapsamında ciddi vergi avantajları sunan bölgelerdir. Bu işletmelerin teknopark süreçlerini baştan sona ben yürütüyorum: bölgeye başvurudan kazanç istisnasının uygulanmasına, personel gelir vergisi stopaj teşvikinden SGK işveren primi desteğine kadar. İlk adımda işinizin yapısına ve personelinize bakar, teknoparkın size sağlayacağı avantajı rakamlarla ortaya koyarım. Ardından istisna kapsamına giren nitelikli faaliyetlerle kapsam dışı işleri baştan ayırır, yapıyı doğru kurarım — çünkü teknoparkta en sık yapılan hata, istisnayı olduğundan geniş uygulayıp sonradan sorun yaşamaktır. Bölgeye kabul ve başvuru süreçlerini sizin adınıza yürütür, evrakı hazırlarım. Kabul sonrasında da istisna, stopaj teşviki ve SGK desteğinin doğru uygulanmasını düzenli takip ederim. Avantajları eksiksiz kullanır, kapsamı hatasız kurarım; siz yazılımınıza ve büyümenize odaklanırsınız.',
    stepsHeading: 'Nasıl yürütüyoruz?',
    steps: [
      { title: 'Değerlendirme', text: 'İşinizin yapısına ve personelinize bakar, teknoparkın size sağlayacağı avantajı rakamlarla ortaya koyarım.' },
      { title: 'Kurgu', text: 'İstisna kapsamına giren ve girmeyen faaliyetleri baştan ayırır, yapıyı doğru kurarım.' },
      { title: 'Başvuru', text: 'Bölgeye kabul ve gerekli başvuru süreçlerini sizin adınıza yürütür, evrakı hazırlarım.' },
      { title: 'Takip', text: 'İstisna, stopaj teşviki ve SGK desteğinin doğru uygulanmasını düzenli takip ederim.' },
    ],
    includedHeading: 'Neler dahil?',
    included: [
      'Teknopark başvuru ve bölgeye kabul süreci',
      'İstisna kapsamı faaliyet ayrımı',
      'Kazanç istisnasının doğru uygulanması',
      'Personel gelir vergisi stopaj teşviki',
      'SGK işveren primi desteği takibi',
      'Bölgede üretilen yazılımda KDV istisnası',
    ],
    faqs: [
      { q: 'Teknopark süreçlerini siz mi yürütüyorsunuz?', a: 'Evet. Bölgeye başvurudan istisnanın uygulanmasına, stopaj teşvikinden SGK desteğine kadar tüm süreci ben yönetirim; siz işinize odaklanırsınız.' },
      { q: 'Teknoparktaki her gelirim vergiden istisna mı olur?', a: 'İstisna, bölgedeki nitelikli yazılım/Ar-Ge/tasarım faaliyetinden doğan kazanca uygulanır. Kapsam dışı işleri ayrı değerlendirir, bu ayrımı baştan doğru kurarım.' },
      { q: 'İstisna kalıcı mı?', a: 'Kanunla belirlenmiş süreli bir teşviktir ve süre dönem dönem uzatılır. Güncel süreyi ve koşulları sizin için takip ederim.' },
    ],
  },

  danismanlik: {
    heroTitle: 'Daha büyük kararlarda yanınızda',
    intro:
      'Mali danışmanlık, işletmeniz büyürken karşınıza çıkan ve günlük muhasebenin ötesine geçen kararlarda uzman desteği almanızdır. Şirket değerleme, birleşme, devir ve bölünme, uluslararası vergi ve çifte vergilendirme, ortaklık yapısı ve pay devri gibi konularda deneyimimle yanınızda dururum. Önce ihtiyacınızı ve hedefinizi net biçimde anlar, durumu mali ve vergisel açıdan değerlendiririm. Sonra riskleri ve avantajlarıyla birlikte önünüze birden fazla yol koyarım; kararı sağlıklı bir zeminde vermenizi sağlarım. Kararı verdikten sonra da yalnız bırakmam — uygulamayı hayata geçirir, süreci yönetirim. Bu hizmetleri tek seferlik de alabilirsiniz; belirli bir işlem ya da karar için sınırlı kapsamda çalışabiliriz. Daha üst düzey, sınır ötesi veya yüksek hacimli yapılarda gerekirse gokaygul.com üzerinden yürüttüğüm daha kapsamlı danışmanlığa da yönlendiririm. Amacım, büyümenin getirdiği karmaşık kararları yalnız vermek zorunda kalmamanız.',
    stepsHeading: 'Nasıl ilerliyoruz?',
    steps: [
      { title: 'Dinleme', text: 'İhtiyacınızı ve hedefinizi net biçimde anlarım.' },
      { title: 'Analiz', text: 'Durumu mali ve vergisel açıdan değerlendiririm.' },
      { title: 'Seçenekler', text: 'Riskleri ve avantajlarıyla yolları önünüze koyarım.' },
      { title: 'Uygulama', text: 'Kararı hayata geçirir, süreci yönetirim.' },
    ],
    includedHeading: 'Hangi konularda?',
    included: [
      'Şirket değerleme',
      'Birleşme, devir ve bölünme',
      'Uluslararası vergi ve çifte vergilendirme',
      'Ortaklık yapısı ve pay devri',
      'Finansal tablo ve durum analizi',
      'Yatırım ve büyüme senaryoları',
    ],
    faqs: [
      { q: 'Tek seferlik danışmanlık alabilir miyim?', a: 'Evet. Belirli bir karar ya da işlem için tek seferlik danışmanlık verebilirim.' },
      { q: 'Uluslararası vergi konusunda destek var mı?', a: 'Evet. Sınır ötesi işlem ve yapılarda vergisel etkileri değerlendirir, yol gösteririm.' },
      { q: 'Bu hizmetler kimler için?', a: 'Büyüyen KOBİ’ler ve daha kurumsal ihtiyaçları olan işletmeler için. Gerekirse gokaygul.com üzerinden daha üst düzey danışmanlığa da yönlendiririm.' },
    ],
  },
};
