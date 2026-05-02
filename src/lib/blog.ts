import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const DEFAULT_AUTHOR = { name: "OpesFlux Team", role: "Staff", avatar: "/team/default.jpg" };

function normalizeAuthor(raw: unknown) {
  if (!raw || typeof raw !== "object") return DEFAULT_AUTHOR;
  const a = raw as Record<string, string>;
  return { name: a.name || DEFAULT_AUTHOR.name, role: a.role || DEFAULT_AUTHOR.role, avatar: a.avatar || DEFAULT_AUTHOR.avatar };
}

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      updated: data.updated,
      author: normalizeAuthor(data.author),
      coverImage: data.coverImage || "/blog-covers/default-cover.jpg",
      coverImageAlt: data.coverImageAlt || data.title || "",
      tags: data.tags || [],
      category: data.category || "General",
      featured: data.featured || false,
      seoKeywords: data.seoKeywords || [],
      canonicalUrl: data.canonicalUrl,
      ogImage: data.ogImage,
      readingTime: calcReadingTime(content),
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<(BlogPost & { content: string }) | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    updated: data.updated,
    author: normalizeAuthor(data.author),
    coverImage: data.coverImage || "/blog-covers/default-cover.jpg",
    coverImageAlt: data.coverImageAlt || data.title || "",
    tags: data.tags || [],
    category: data.category || "General",
    featured: data.featured || false,
    seoKeywords: data.seoKeywords || [],
    canonicalUrl: data.canonicalUrl,
    ogImage: data.ogImage,
    readingTime: calcReadingTime(content),
    content,
  };
}

export async function getRelatedPosts(slug: string, category: string, tags: string[]): Promise<BlogPost[]> {
  const all = await getAllPosts();
  const others = all.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === category);
  const sameTags = others.filter((p) => p.tags.some((t) => tags.includes(t)));
  const combined = [...new Map([...sameCategory, ...sameTags].map((p) => [p.slug, p])).values()];
  return combined.slice(0, 3);
}
