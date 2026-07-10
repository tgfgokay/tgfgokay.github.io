# GEO / AI-Arama Analizi — TGF Mali Müşavirlik

**Site:** https://tgfmalimusavirlik.com (henüz deploy edilmedi — localhost:4331)
**Teknoloji:** Astro (static / SSR pre-render), tamamen Türkçe
**Analiz tarihi:** 2026-07-10
**Çerçeve:** Google'ın resmi konumu — "GEO hâlâ SEO'dur." Bulgular, AI-arama yüzeylerine (Google AI Overviews, ChatGPT, Perplexity) uygulanan SEO temelleri olarak çerçevelenmiştir.

---

## 1. GEO Hazırlık Skoru: 82 / 100

| Alan | Ağırlık | Skor | Not |
|------|---------|------|-----|
| Alıntılanabilirlik (Citability) | 25% | 20/25 | SSS blokları güçlü; bazı pasajlar 134-167 kelime hedefinin altında |
| Yapısal Okunabilirlik | 20% | 18/20 | Temiz H1→H2→H3, SSS, adım listeleri; soru-tabanlı başlık az |
| Çok-modlu İçerik | 15% | 10/15 | Rehber kapak görselleri + portre var; tablo/infografik/video yok |
| Otorite & Marka Sinyalleri | 20% | 16/20 | Person schema + SMMM/TÜRMOB/İSMMMO künyesi eklendi; harici marka bahsi zayıf (deploy sonrası) |
| Teknik Erişilebilirlik | 20% | 18/20 | SSR ✓, tüm AI crawler'lar açık ✓, llms.txt eklendi ✓ |

> Not: Skor, sitenin **deploy edilmemiş** halini yansıtır. Canlıya çıkıp harici marka sinyalleri (Google Business, dizinler, LinkedIn) oturunca Otorite skoru yükselir.

---

## 2. Platform Kırılımı

| Platform | Tahmini Görünürlük | Ana Kaldıraç |
|----------|-------------------|--------------|
| **Google AI Overviews** | Orta-Yüksek | Yerel SEO + LocalBusiness/Service schema + SSS; klasik sıralama şart |
| **ChatGPT (web search)** | Orta | Entity netliği (Person/sameAs) yeni eklendi; Wikipedia/dizin bahsi yok |
| **Perplexity** | Düşük-Orta | Topluluk doğrulaması (Reddit/forum) ve harici bahis gerektirir |
| **Bing Copilot** | Orta | Bing index + IndexNow; deploy sonrası GSC/Bing Webmaster kaydı gerekli |

**Kritik içgörü:** ChatGPT ve Google AI Overviews aynı sorgu için domainlerin yalnızca ~%11'inde örtüşür. Deploy sonrası platform-bazlı çalışma (özellikle Google Business + dizinler) şart.

---

## 3. AI Crawler Erişim Durumu

`public/robots.txt`: `User-agent: * / Allow: /` — **tüm crawler'lar açık.**

| Crawler | Durum |
|---------|-------|
| GPTBot (OpenAI) | ✅ Açık |
| OAI-SearchBot | ✅ Açık |
| ChatGPT-User | ✅ Açık |
| ClaudeBot | ✅ Açık |
| PerplexityBot | ✅ Açık |
| Google-Extended | ✅ Açık |

Sitemap robots.txt'te bildirilmiş. **Aksiyon gerekmez** — tüm AI-arama crawler'ları için görünürlük açık.

---

## 4. llms.txt Durumu

**EKLENDİ** → `public/llms.txt` (3.7 KB). Yapı: başlık + özet + Hizmetler + Rehber + Kurumsal + Künye bölümleri, her biri açıklamalı link.

> Uyarı (birincil kaynak): llms.txt şu an büyük AI-arama sistemleri için doğrulanmış bir **alıntı kaldıracı değil** (Mueller/Illyes; SE Ranking 300k-domain çalışması). Yine de zararı yok, içerik haritası olarak sunuldu — bir citation-ranking ağırlığı atfedilmiyor.

---

## 5. Marka Bahsi Analizi

| Sinyal | Durum |
|--------|-------|
| Wikipedia / Wikidata | ❌ Yok (KOBİ ölçeği — beklenen) |
| LinkedIn | ✅ Var (`sameAs` ile bağlandı — gokaygul profili) |
| gokaygul.com (kişisel otorite sitesi) | ✅ `sameAs` ile bağlandı |
| Reddit / YouTube | ❌ Yok |
| Google Business Profile | ⏳ Doğrulama bekliyor (Gökay yapacak) |

**En yüksek etkili harici aksiyon:** Google Business Profile telefon doğrulaması + saat/NAP tutarlılığı. Türkçe yerel sorgularda ("Şişli mali müşavir", "İstanbul KOBİ muhasebe") AI Overviews'in birincil kaynağı yerel işletme sinyalleridir.

---

## 6. Pasaj-Seviyesi Alıntılanabilirlik

**Güçlü (hazır):**
- Ana sayfa SSS (3 soru) — schema.org FAQPage ile işaretli, kendinden-yeterli cevaplar.
- Her hizmet sayfası SSS bloğu — FAQPage schema ile.
- Rehber makaleleri — "X nedir / nasıl" kalıbı, ilk paragrafta doğrudan cevap.

**İyileştirilebilir:**
- Bazı hizmet `summary` metinleri 40-60 kelime; ideal alıntı bloğu 134-167 kelime. Hizmet detay sayfalarındaki `intro` pasajları bu aralığa çekilebilir.
- Makale girişleri güçlü; ancak "tanım kutusu" (ilk 60 kelimede net tanım) bazı makalelerde dolaylı.

---

## 7. Server-Side Rendering Kontrolü

`astro.config.mjs`: `output: 'static'` → **tüm sayfalar pre-render edilmiş HTML.** AI crawler'lar JS çalıştırmaz; bu site tam SSR olduğu için tüm içerik (schema dahil) ham HTML'de mevcut. **Sorun yok** — doğrulandı: `/hakkimizda/` yanıtında 4 JSON-LD bloğu ham HTML içinde geliyor.

---

## 8. En Yüksek Etkili 5 Değişiklik

1. **[YAPILDI] Person + ProfilePage schema** — `hakkimizda.astro`. SMMM/TÜRMOB kimlik bilgisi, `knowsAbout`, `sameAs` (LinkedIn + gokaygul). Business schema `founder.@id` bu varlığa bağlandı → tutarlı entity grafiği.
2. **[YAPILDI] llms.txt** — içerik haritası.
3. **[Gökay — deploy sonrası] Google Business Profile** — telefon doğrulama + NAP + saat. Yerel AI Overviews için en kritik harici sinyal.
4. **[Öneri — kod] Hizmet detay intro pasajlarını 134-167 kelimeye çıkar** — alıntı bloğu optimizasyonu.
5. **[Öneri — deploy sonrası] Bing Webmaster + Google Search Console kaydı** — indexation + IndexNow (Copilot görünürlüğü).

---

## 9. Schema Önerileri (Durum)

| Schema | Durum |
|--------|-------|
| AccountingService (LocalBusiness) | ✅ Site-geneli (Base.astro) |
| BreadcrumbList | ✅ Tüm sayfalarda |
| Service | ✅ Hizmet sayfalarında |
| FAQPage | ✅ Ana sayfa + hizmet sayfaları |
| Person | ✅ Eklendi (hakkimizda) |
| ProfilePage | ✅ Eklendi (hakkimizda) |
| Article/BlogPosting | ⏳ Öneri: rehber makalelerine `Article` + `author.@id → /#gokay` eklenebilir (yazar E-E-A-T'ini makalelere taşır) |

---

## 10. İçerik Yeniden Biçimlendirme Önerileri

1. Rehber makalelerine **`Article` schema** ekle, `author` alanını `/#gokay` Person varlığına bağla — yazar otoritesini her makaleye taşır (En yüksek kalan kod fırsatı).
2. Hizmet detay sayfalarında **soru-tabanlı H2** kullan ("Şirket kuruluşu ne kadar sürer?" gibi) — sorgu kalıplarıyla eşleşir.
3. Uzun karşılaştırma makalelerine (şahıs vs limited) **tablo** ekle — çok-modlu seçilme oranını (+156%) artırır.
4. Her hizmet detayına ilk 60 kelimede net "X nedir" tanım kutusu.

---

### Uygulama Özeti (bu oturumda yapılanlar)
- `hakkimizda.astro`: Person + ProfilePage schema (`@id: /#gokay`, credential, knowsAbout, sameAs).
- `Base.astro`: business `founder.@id` → Person'a bağlandı; `sameAs`'e gokaygul.com eklendi.
- `public/llms.txt`: içerik haritası oluşturuldu.
- Doğrulandı: `/hakkimizda/` 4 JSON-LD tipi ham HTML'de (SSR), llms.txt 200.
