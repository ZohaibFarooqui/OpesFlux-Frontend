import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

// Next.js merges metadata shallowly: a page's `openGraph` replaces the layout's
// whole object, image included. Every page builds its metadata here so the
// canonical, og:url, og:image and locale are never dropped.
export function pageMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;
  const fullTitle = absoluteTitle ? title : `${title} | OpesFlux`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "OpesFlux",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "OpesFlux" }],
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
