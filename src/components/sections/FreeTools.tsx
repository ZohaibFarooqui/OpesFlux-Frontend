import Link from "next/link";
import { TOOLS } from "@/config/tools";

export function FreeTools() {
  return (
    <section className="py-16 bg-(--color-cream)">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-(--color-deep-blue) tracking-tight mb-3 text-center">
          Free tools for everyday sums
        </h2>
        <p className="text-(--color-muted) leading-relaxed mb-8 text-center">
          Use them straight away, with no sign-up.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="rounded-2xl border border-(--color-border) bg-white p-5 hover:border-(--color-cyan)/40 transition-colors"
            >
              <h3 className="font-semibold text-(--color-deep-blue) mb-1.5">{t.name}</h3>
              <p className="text-sm text-(--color-muted) leading-relaxed">{t.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
