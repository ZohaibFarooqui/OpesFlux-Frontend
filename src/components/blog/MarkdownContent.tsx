"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) mt-12 mb-4 leading-tight tracking-tight">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-medium text-(--color-deep-blue) mt-8 mb-3 leading-tight">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold text-(--color-deep-blue) mt-6 mb-2">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-base text-(--color-text) leading-[1.85] mb-5">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-5 space-y-1.5 text-(--color-text)">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-5 space-y-1.5 text-(--color-text)">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-(--color-cyan) underline underline-offset-4 hover:text-(--color-cyan-soft) transition-colors"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-(--color-cyan) pl-5 italic text-(--color-muted) my-6">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.startsWith("language-");
          if (isBlock) {
            return (
              <pre className="bg-(--color-deep-blue) text-(--color-cream) rounded-xl p-5 overflow-x-auto my-6 text-sm leading-relaxed">
                <code>{children}</code>
              </pre>
            );
          }
          return (
            <code className="bg-(--color-mist) text-(--color-deep-blue) px-1.5 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          );
        },
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ""} className="rounded-2xl my-8 w-full" loading="lazy" />
        ),
        hr: () => <hr className="border-(--color-border) my-10" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-(--color-deep-blue)">{children}</strong>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-(--color-border) bg-(--color-cream) px-4 py-2 text-left font-semibold text-(--color-deep-blue)">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-(--color-border) px-4 py-2 text-(--color-text)">{children}</td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
