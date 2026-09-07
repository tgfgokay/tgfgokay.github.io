# TGF sıralı yayın kontrol listesi

Bu belge yayın yetkisi vermez. Her harici adım için Gökay'ın açık onayı gerekir.

## Paket A — nötr tanıtım metinleri

Durum: **DOĞRULANDI — yayımlandı.** Commit `2f9b871`; GitHub Pages koşusu `34110030016` başarıyla tamamlandı.

Önkoşullar:

- [ ] Oda/TÜRMOB açısından kullanılacak metin yaklaşımı değerlendirilmiş.
- [x] Türkçe ve İngilizce sayfalar birlikte gözden geçirilmiş.
- [x] `npm run growth:audit` geçmiş.
- [x] `npm run growth:verify` geçmiş.

Yayın sonrası doğrulama:

- [x] Ana sayfa, hizmetler, hizmet detayları, rehber ve İngilizce karşılıkları açılıyor.
- [x] “Ücretsiz hizmet”, sonuç garantisi veya karşılaştırmalı üstünlük çağrışımı yapan belirlenmiş kalıplar canlı HTML'de yok.
- [x] Sitemap ve canonical adresleri değişmemiş.

## Paket B — PII'siz ölçüm

Durum: **DOĞRULANDI — TGF'ye özgü yerel olay kuyruğu ve onay kapılı GA4 bağlantısı yayımlandı.** İlk paket commit'i `59a38b4`; GA4 bağlantısı commit'i `fb2a4c3`. Derleme testleri, Google etiketinin analitik onayından önce yüklenmediğini doğruluyor. GA4 olay alımı henüz veri olmadığı için **BİLİNMİYOR**.

Önkoşullar:

- [x] Kullanılacak GA4 mülkü ve veri akışı Gökay tarafından onaylanmış (`G-MRYJDNND4N`).
- [x] KVKK çerez rehberi ve Google temel onay yaklaşımı değerlendirilmiş; kabul öncesi Google etiketi engellenmiş.
- [ ] Veri saklama süresi ve erişim yetkileri belirlenmiş.
- [x] Paket A canlıda doğrulanmış.
- [x] Ölçüm paketi ayrı bir commit/sürüm olarak hazırlanmış.

Kod ve derleme doğrulaması:

- [x] Telefon, e-posta ve WhatsApp bağlantıları kontrollü `contact_channel` kategorilerine eşleniyor.
- [x] Form konu seçimi ve sayfa yolu yalnız kontrollü hizmet kategorilerine eşleniyor.
- [x] İlk-touch kaynak, medium, kampanya, referrer domain ve açılış grubu beklenen değerlerde; Google İşletme Profili etiketi ayrıca test ediliyor.
- [x] Ad, telefon, e-posta adresi, mesaj gövdesi veya serbest metin olay parametrelerinde yok.

GA4 canlı veri doğrulaması:

- [ ] `contact_intent` ve `lead_form_submit` olayları izinli gerçek oturumdan sonra GA4'te görülüyor.
- [ ] Debug test trafiği gerçek lead raporundan ayrılmış.

## İlk 14 gün gözlem

- [ ] Her gerçek lead için yalnız anonim kategori sonucu elle güncelleniyor.
- [ ] `unknown` kaynak/kanal/hizmet kayıtları ayrıca izleniyor.
- [ ] Aynı dönemde ikinci CTA, içerik veya kanal deneyi açılmıyor.
- [ ] Trafik yerine nitelikli lead, görüşme ve ticari sonuç değerlendiriliyor.

## Kapsam dışı

Google İşletme Profili tek Şişli kaydına indirildi; adres, çalışma saatleri, nötr açıklama ve TGF site adresi güncellendi. İşletme videosuyla doğrulama Gökay tarafından tamamlanmayı bekliyor. Ücretli reklam, toplu mesaj, referans/mükellef adı ve gokaygul.com çapraz kampanyası bu yayın paketlerinin parçası değildir.
