import { SectionHeading } from "@/components/atoms/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * SSS bölümü — AEO'nun kalbi: gerçek sorular H3 başlık, altında öz cevap.
 * FAQPage JSON-LD ile Google zengin sonuç / snippet üretebilir.
 * Scroll-stack'in ALTINDA normal bölüm olarak durur; 3 katmanlı yapı korunur.
 */
export function FaqSection({ dict }: { dict: Dictionary }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="sss" aria-label={dict.faq.title} className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl">
        <SectionHeading>{dict.faq.title}</SectionHeading>
        <p className="mt-2 text-muted">{dict.faq.subtitle}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3">
          {dict.faq.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border-2 border-line bg-surface p-4 text-center"
            >
              <dt className="font-display text-2xl font-bold text-accent">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        <dl className="mt-8 divide-y divide-line">
          {dict.faq.items.map((item) => (
            <div key={item.q} className="py-5">
              <dt>
                <h3 className="font-display text-lg font-semibold">{item.q}</h3>
              </dt>
              <dd className="mt-2 leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
