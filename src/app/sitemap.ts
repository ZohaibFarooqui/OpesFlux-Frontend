import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { INDUSTRIES_LIST } from "@/config/industries";
import { COMPARISONS } from "@/config/compare";
import { siteConfig } from "@/config/site";

const BASE = siteConfig.url;

// Real last-changed dates, not the build time: a lastmod that changes on every
// deploy teaches Google to ignore it. Bump a date when that page's content changes.
const STATIC_PAGES: { path: string; updated: string; priority: number }[] = [
  { path: "", updated: "2026-10-24", priority: 1 },
  { path: "/features", updated: "2026-10-24", priority: 0.9 },
  { path: "/pricing", updated: "2026-10-24", priority: 0.9 },
  { path: "/industries", updated: "2026-10-24", priority: 0.8 },
  { path: "/compare", updated: "2026-10-24", priority: 0.7 },
  { path: "/partners", updated: "2026-10-24", priority: 0.6 },
  { path: "/blog", updated: "2026-10-24", priority: 0.6 },
  { path: "/about", updated: "2026-10-24", priority: 0.5 },
  { path: "/contact", updated: "2026-10-24", priority: 0.6 },
  { path: "/privacy", updated: "2026-05-01", priority: 0.2 },
  { path: "/terms", updated: "2026-05-01", priority: 0.2 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    ...STATIC_PAGES.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: new Date(p.updated),
      priority: p.priority,
    })),
    ...INDUSTRIES_LIST.map((i) => ({
      url: `${BASE}/industries/${i.slug}`,
      lastModified: new Date(i.updated),
      priority: 0.8,
    })),
    ...COMPARISONS.map((c) => ({
      url: `${BASE}/compare/${c.slug}`,
      lastModified: new Date(c.checked),
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
      priority: 0.6,
    })),
  ];
}
