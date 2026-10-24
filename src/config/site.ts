export const siteConfig = {
  name: "OpesFlux",
  tagline: "Your Work Flow Companion",
  description:
    "OpesFlux is cloud POS, stock control, purchasing, invoicing, accounting and payroll software for UK wholesalers, distributors and multi-site shops. From £19 a month.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://opesflux.devsandvisuals.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.devsandvisuals.com",
  ogImage: "/opengraph-image.png",
  logo: "/logo.png",
  logoIcon: "/logo.png",
  email: "hello.opesflux@devsandvisuals.com",
  phone: "+44 7490 350688",
  address: "Devs and Visuals, Kington, England",
  social: {
    linkedin: "https://www.linkedin.com/company/devs-and-visuals/",
    facebook: "https://www.facebook.com/profile.php?id=61571742365103",
    instagram: "https://www.instagram.com/devsandvisuals/",
  },
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/opesflux/demo",
  parentCompany: {
    name: "Devs and Visuals",
    url: "https://devsandvisuals.com",
  },
};
