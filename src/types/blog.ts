export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: BlogAuthor;
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  category: string;
  featured?: boolean;
  seoKeywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  readingTime: number;
  content?: string;
};
