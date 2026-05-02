import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: `${title} | OpesFlux`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | OpesFlux`,
      description,
      url,
      siteName: "OpesFlux",
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | OpesFlux`,
      description,
      images: [image],
    },
  };
}
