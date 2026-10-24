import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const title = post.seoTitle || post.title;
  const base = pageMetadata({
    title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.ogImage || post.coverImage,
    type: "article",
    // Long post titles would pass 60 characters with the " | OpesFlux" suffix.
    absoluteTitle: title.length > 49,
  });
  return {
    ...base,
    alternates: { canonical: post.canonicalUrl || `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, post.category, post.tags);
  const url = `${siteConfig.url}/blog/${slug}`;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={url}
        image={`${siteConfig.url}${post.coverImage}`}
        datePublished={post.date}
        dateModified={post.updated}
        authorName={post.author.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />

      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-(--color-muted) mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-(--color-cyan) transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-(--color-cyan) transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-(--color-muted)">{post.category}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="w-10 h-10 rounded-full bg-(--color-deep-blue) flex items-center justify-center text-white font-bold text-sm shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold text-(--color-deep-blue)">{post.author.name}</div>
              <div className="text-xs text-(--color-muted)">{post.author.role}</div>
            </div>
            <div className="text-xs text-(--color-muted) flex items-center gap-2">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {post.updated && post.updated !== post.date && (
            <p className="text-xs text-(--color-muted) italic mb-6">Updated {formatDate(post.updated)}</p>
          )}

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="mt-2">
            <p className="text-lg text-(--color-muted) leading-[1.8] mb-8">{post.description}</p>
            <MarkdownContent content={post.content || ""} />
          </div>

          {/* Product box: every guide ends with the pages a buyer would read next */}
          <aside className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-cream) p-6">
            <p className="text-sm font-semibold text-(--color-deep-blue) mb-2">
              Running a wholesale business or several shops?
            </p>
            <p className="text-sm text-(--color-text) leading-relaxed mb-4">
              OpesFlux puts the till, stock, purchase orders, invoices, accounts and payroll in one system, from £19 a month.
              See how it works for{" "}
              <Link href="/industries/wholesale" className="text-(--color-cyan-ink) underline underline-offset-4">wholesalers</Link>,{" "}
              <Link href="/industries/cash-and-carry" className="text-(--color-cyan-ink) underline underline-offset-4">cash and carry</Link>,{" "}
              <Link href="/industries/off-licences" className="text-(--color-cyan-ink) underline underline-offset-4">off-licences</Link> and{" "}
              <Link href="/industries/retail" className="text-(--color-cyan-ink) underline underline-offset-4">multi-site shops</Link>.
            </p>
            <Button size="sm" asChild>
              <Link href="/contact">Book a free demo</Link>
            </Button>
          </aside>

          <div className="mt-12 pt-8 border-t border-(--color-border)">
            <ShareButtons title={post.title} url={url} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-8">Continue reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-16">
          <NewsletterCTA />
        </div>
      </div>
    </>
  );
}
