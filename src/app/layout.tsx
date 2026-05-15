import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OpesFlux — All-in-One ERP & POS for Modern Business",
    template: "%s | OpesFlux",
  },
  description:
    "All-in-one ERP and POS platform. POS, inventory, accounting, payroll, and compliance in one system for any business.",
  alternates: {
    languages: {
      "x-default": siteConfig.url,
      en: siteConfig.url,
    },
  },
  openGraph: {
    siteName: "OpesFlux",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col text-(--color-text)">
        {children}
      </body>
    </html>
  );
}
