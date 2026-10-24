import React from "react";
import { siteConfig } from "@/config/site";
import { PRICING_TIERS } from "@/config/pricing";

function JsonLdScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const ORG_ID = `${siteConfig.url}/#organization`;

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        name: "OpesFlux",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kington",
          addressRegion: "England",
          addressCountry: "GB",
        },
        parentOrganization: {
          "@type": "Organization",
          name: siteConfig.parentCompany.name,
          url: siteConfig.parentCompany.url,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "sales",
          areaServed: "GB",
          availableLanguage: ["English"],
        },
        knowsAbout: [
          "Stock control software",
          "Point of sale (EPOS)",
          "Wholesale and distribution software",
          "Purchase order management",
          "Invoicing",
          "Payroll software",
          "VAT reporting",
        ],
        sameAs: [siteConfig.social.linkedin, siteConfig.social.facebook, siteConfig.social.instagram],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "OpesFlux",
        url: siteConfig.url,
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

export function SoftwareAppJsonLd() {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "OpesFlux",
        url: siteConfig.url,
        description: siteConfig.description,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Point of sale, stock control, accounting and payroll",
        operatingSystem: "Web browser",
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
        offers: PRICING_TIERS.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          description: `${tier.users}, ${tier.locations.toLowerCase()}`,
          price: tier.price.monthly.toFixed(2),
          priceCurrency: tier.currency,
          url: `${siteConfig.url}/pricing`,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: tier.price.monthly.toFixed(2),
            priceCurrency: tier.currency,
            unitText: "MONTH",
          },
        })),
      }}
    />
  );
}

// items: [{ name, path }] where path is site-relative ("" for home)
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        image,
        inLanguage: "en-GB",
        datePublished,
        dateModified: dateModified || datePublished,
        author: { "@type": "Organization", name: authorName, url: siteConfig.url },
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLdScript
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }}
    />
  );
}
