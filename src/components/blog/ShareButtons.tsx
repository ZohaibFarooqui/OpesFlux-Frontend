"use client";

import React, { useState } from "react";
import { ExternalLink, X, Mail, Copy, Check } from "lucide-react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttons = [
    {
      label: "Share on LinkedIn",
      Icon: ExternalLink,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on X",
      Icon: X,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      label: "Share by email",
      Icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-(--color-muted) mr-1">Share:</span>
      {buttons.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-muted) hover:text-(--color-cyan) hover:border-(--color-cyan) transition-colors"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-muted) hover:text-(--color-cyan) hover:border-(--color-cyan) transition-colors"
      >
        {copied ? <Check className="h-4 w-4 text-(--color-success)" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
