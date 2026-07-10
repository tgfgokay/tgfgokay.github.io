import { defineCollection, z } from 'astro:content';

// Rehber = yerel + pratik, yüksek-niyet aramalara odaklı içerik hub'ı.
// gokaygul.com'un düşünce liderliği içeriğinden AYRI: burası Şişli/İstanbul KOBİ'sinin
// somut sorularına (şirket kurma, vergi takvimi, şahıs vs limited) cevap verir.
const rehber = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // meta description + kart özeti
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // ilgili hizmet slug'ı — yazıdan hizmet sayfasına iç link için
    relatedService: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Guide = rehber'in İngilizce karşılığı (/en/guide/). Aynı şema; slug'lar İngilizce.
const guide = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    relatedService: z.string().optional(), // İngilizce hizmet slug'ı
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { rehber, guide };
