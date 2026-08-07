import { SITE } from "@/lib/site";

/**
 * Yapısal veri (JSON-LD) — SEO/GEO/AEO'nun kalbi.
 * Person + WebSite + BreadcrumbList; arama ve YZ motorları "Osman Öz kimdir"e bu veriyle cevap verir.
 * Server component; görünmez (<script>), tasarımı etkilemez.
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        alternateName: SITE.altName,
        url: SITE.url,
        image: `${SITE.url}/opengraph-image`,
        jobTitle: SITE.jobTitle,
        email: `mailto:${SITE.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Burdur",
          addressCountry: "TR",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: SITE.university,
        },
        knowsAbout: [...SITE.knowsAbout],
        sameAs: [SITE.socials.github, SITE.socials.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} — Portfolyo`,
        inLanguage: ["tr-TR", "en"],
        publisher: { "@id": `${SITE.url}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE.url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE.url}/#projeler` },
          { "@type": "ListItem", position: 3, name: "CV", item: `${SITE.url}/#cv` },
          { "@type": "ListItem", position: 4, name: "SSS", item: `${SITE.url}/#sss` },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
