import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-2xl border border-(--color-border) overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,194,255,0.16)] transition-all h-full flex flex-col bg-white">
        <div className="relative aspect-video">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-(--color-deep-blue) leading-snug mb-2 line-clamp-2 group-hover:text-(--color-cyan) transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-(--color-muted) leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.description}
          </p>
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-(--color-border)">
            <div className="w-7 h-7 rounded-full bg-(--color-deep-blue) flex items-center justify-center text-white text-xs font-bold shrink-0">
              {post.author?.name?.charAt(0) ?? "O"}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-medium text-(--color-text-strong) truncate">{post.author?.name ?? "OpesFlux Team"}</div>
              <div className="text-xs text-(--color-muted)">
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · {post.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
