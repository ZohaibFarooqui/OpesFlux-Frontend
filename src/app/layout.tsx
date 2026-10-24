import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "OpesFlux",
  title: {
    default: "OpesFlux: POS, Stock Control and Accounts in One System",
    template: "%s | OpesFlux",
  },
  description: siteConfig.description,
  openGraph: {
    siteName: "OpesFlux",
    locale: "en_GB",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "OpesFlux" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col text-(--color-text)">
        {children}
      </body>
    </html>
  );
}
