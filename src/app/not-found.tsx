import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-bold text-(--color-cyan) mb-4 tracking-tighter">404</div>
        <h1 className="text-3xl font-semibold text-(--color-deep-blue) mb-3">This page took a wrong turn</h1>
        <p className="text-lg text-(--color-muted) mb-10">Let&apos;s get you back to flow.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Book a demo</Link>
          </Button>
        </div>
        <div>
          <p className="text-sm text-(--color-muted) mb-4">Or try one of these popular pages:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-(--color-border) p-4 text-sm font-medium text-(--color-deep-blue) hover:border-(--color-cyan) hover:text-(--color-cyan) transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
