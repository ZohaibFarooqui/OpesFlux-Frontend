import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guides for UK Shops and Wholesalers",
  description:
    "Plain-English guides on stock control, EPOS, invoicing, VAT and payroll for UK wholesalers, distributors and multi-site shops.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  // One hero card, then every other post. Several posts can be marked featured;
  // only the newest becomes the hero and the rest stay in the grid.
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const otherPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <>
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
              Guides for UK shops and wholesalers
            </h1>
            <p className="text-lg text-(--color-muted) leading-[1.7]">
              Practical, plain-English guides on stock control, EPOS, invoicing, VAT and payroll.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24 rounded-2xl bg-(--color-cream) border border-(--color-border)">
              <p className="text-2xl font-semibold text-(--color-deep-blue) mb-2">Guides coming soon</p>
            </div>
          ) : (
            <>
              {featuredPost && (
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 bg-(--color-cyan)/10 text-(--color-cyan-ink) text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                    Featured
                  </div>
                  <BlogCard post={featuredPost} />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              <div className="mt-12">
                <NewsletterCTA />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
