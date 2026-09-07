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

Durum: **DOĞRULANDI — yerel `dataLayer` kuyruğu yayımlandı, harici analytics bağlantısı yok.** Commit `59a38b4`; GitHub Pages koşusu `34110197558` başarıyla tamamlandı.

Önkoşullar:

- [ ] Kullanılacak GA4/GTM mülkü ve veri akışı Gökay tarafından onaylanmış.
- [ ] KVKK/aydınlatma ve gerekiyorsa onay yaklaşımı değerlendirilmiş.
- [ ] Veri saklama süresi ve erişim yetkileri belirlenmiş.
- [x] Paket A canlıda doğrulanmış.
- [x] Ölçüm paketi ayrı bir commit/sürüm olarak hazırlanmış.

Canlı doğrulama:

- [ ] `contact_intent` telefon, e-posta ve WhatsApp için tek olay üretiyor.
- [ ] `lead_form_submit` yalnız kontrollü hizmet kategorisi taşıyor.
- [ ] İlk-touch kaynak, medium, kampanya, referrer domain ve açılış grubu beklenen değerlerde.
- [ ] Ad, telefon, e-posta adresi, mesaj gövdesi veya serbest metin olay parametrelerinde yok.
- [ ] Debug test trafiği gerçek lead raporundan ayrılmış.

## İlk 14 gün gözlem

- [ ] Her gerçek lead için yalnız anonim kategori sonucu elle güncelleniyor.
- [ ] `unknown` kaynak/kanal/hizmet kayıtları ayrıca izleniyor.
- [ ] Aynı dönemde ikinci CTA, içerik veya kanal deneyi açılmıyor.
- [ ] Trafik yerine nitelikli lead, görüşme ve ticari sonuç değerlendiriliyor.

## Kapsam dışı

Google İşletme Profili şimdilik beklemededir. Ücretli reklam, toplu mesaj, referans/mükellef adı ve gokaygul.com çapraz kampanyası bu yayın paketlerinin parçası değildir.
