# TGF anonim lead ölçümü

Bu klasör TGF'nin gokaygul.com'dan bağımsız ticari çekiş kaydını tutar. Kayıt birimi anonim lead'dir; kişi, şirket ve mesaj içeriği tutulmaz.

## Kalıcı sınır

- E-posta/WhatsApp gövdesi, ad-soyad, telefon, e-posta adresi, şirket adı, VKN/TCKN, teklif veya serbest metin yok.
- `leads.jsonl` yalnızca kontrollü kategoriler içerir.
- İlk kayıt, 7 Eylül 2026'da kullanıcı tarafından bildirilen yeni lead'i ilk ticari çekiş sinyali olarak temsil eder; kaynak ve nitelik bilinmediği için `unknown` bırakılmıştır.
- Yeni satır eklendikten sonra `npm run growth:audit` çalıştırılır.
- Aynı denetim, tanıtım sayfalarında ücretsiz hizmet, sonuç garantisi ve karşılaştırmalı üstünlük çağrışımı yapan belirlenmiş ifadeleri de tarar.
- Yayına aday bir sürüm için `npm run growth:verify` çalıştırılır; bu komut derlenmiş HTML sayfalarının ölçüm paketini yüklediğini ve pakette harici analytics gönderimi bulunmadığını da doğrular.
- Güncel anonim huni sayımları ve verideki açıklara göre bugünkü ilk üç iş `npm run growth:report` ile alınır. Çıktı kişi veya lead kimliği göstermez; hacim ve zaman serisi oluşmadan trend/oran yorumu üretmez.

## Ölçüm sözleşmesi

Site içindeki `LeadIntentTracker.astro` bugün ağ isteği yapmaz. Aşağıdaki anonim olayları tarayıcıdaki yerel `dataLayer` kuyruğuna hazırlar:

- `contact_intent`: telefon, e-posta veya WhatsApp bağlantısı tıklaması.
- `lead_form_submit`: formun WhatsApp'a yönlendirilmeden hemen önce tamamlanması.

Olay alanları yalnızca sayfa yolu, dil, CTA konumu, kanal, hizmet kategorisi, UTM kaynak/medium/kampanya için temizlenmiş kısa token, yönlendiren alan adı, ilk açılış yolu ve kontrollü açılış grubudur. E-posta/telefon biçimine benzeyen UTM değerleri reddedilir; ad, telefon ve mesaj okunmaz.

GA4/GTM veya başka bir veri gönderimi eklenmeden önce ölçüm kimliği, onay/aydınlatma yaklaşımı ve yayın için Gökay onayı gerekir.

## Mesleki tanıtım uyum kapısı

TÜRMOB'un reklam yasağı ve haksız rekabet kuralları nedeniyle büyüme planındaki arama motoru, Google İşletme Profili, yönlendirme, içerik ve CTA önerileri otomatik olarak uygulanmaz. Özellikle ücretli reklam, iş sağlama amaçlı anahtar kelime/bağlantı kullanımı, karşılaştırmalı veya üstünlük iddiası, indirim/ücretsiz hizmet vaadi, mükellef referansı ve toplu tanıtım mesajı için önce güncel oda/TÜRMOB uygunluğu doğrulanır ve ardından Gökay onayı alınır.

Ölçüm altyapısı yalnız anonim performans kaydı içindir; reklam yasağını dolanmak veya kişisel veri toplamak için kullanılamaz.

Tanıtım metinlerindeki nötrleştirmeler `2f9b871`, PII'siz yerel ölçüm kuyruğu `59a38b4` ve anonim huni özeti `96dbcf3` commit'leriyle Gökay'ın açık onayından sonra yayımlanmıştır. GA4/GTM bağlantısı, hesap kurulumu ve harici mesajlaşma bu yayınların parçası değildir.

Metin ve ölçüm değişikliklerinin iki ayrı sürüm halinde ilerlemesi için `release-checklist.md` kullanılır.

## KPI tanımları

- **Teyitli lead:** Gökay'ın gerçek bir kişi/işletme talebi olduğunu teyit ettiği anonim kayıt.
- **Nitelikli lead oranı:** `qualification=qualified` / tüm teyitli lead'ler.
- **Görüşmeye geçiş:** `appointment_outcome` scheduled veya completed / tüm teyitli lead'ler.
- **Kazanım oranı:** `commercial_outcome=won` / kararı sonuçlanmış (`won` + `lost`) lead'ler.
- **Yanıt SLA'sı:** `under_1h`, `1_4h`, `same_day`, `next_business_day`, `over_1_business_day` kovaları; kesin kişi/saat verisi tutulmaz.

## İlk karar kapısı

- **Birincil sonuçlar:** teyitli lead, nitelikli lead, görüşmeye ulaşan ve kazanılan sayıları.
- **Sürücüler:** kaynak/kanal/hizmet atfının tamamlanması ve ilk yanıt kovasının bilinmesi.
- **Koruma ölçütü:** PII/serbest metin ihlali sıfır; her kayıt `growth:audit` denetiminden geçer.
- **Geçici değerlendirme eşiği:** en az 5 teyitli lead ve 14 günlük gözlem oluşmadan dönüşüm oranı veya kanal üstünlüğü yorumu yapılmaz. Bu eşik istatistiksel kesinlik değil, erken ve aşırı yorum riskini azaltan operasyon kararıdır.
