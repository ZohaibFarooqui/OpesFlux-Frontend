import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OpesFlux Insights — Practical Guides for UK Businesses",
  description:
    "Practical, UK-specific guides on MTD VAT, payroll, inventory, and growing your business with the right tools. Updated weekly.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
              OpesFlux Insights
            </h1>
            <p className="text-lg text-(--color-muted) leading-[1.7]">
              Practical guides on UK business management, compliance, and growing efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24 rounded-2xl bg-(--color-cream) border border-(--color-border)">
              <p className="text-2xl font-semibold text-(--color-deep-blue) mb-2">Posts coming soon</p>
              <p className="text-(--color-muted)">We&apos;re writing our first guides on UK compliance, MTD VAT, and more.</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featuredPost && (
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 bg-(--color-cyan)/10 text-(--color-cyan) text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                    Featured
                  </div>
                  <BlogCard post={featuredPost} />
                </div>
              )}

              {/* Newsletter */}
              {regularPosts.length > 2 && (
                <div className="my-12">
                  <NewsletterCTA />
                </div>
              )}

              {/* Post grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
