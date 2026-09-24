import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { BlogPost, BlogPostMeta } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const WORDS_PER_MINUTE = 200;

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags ?? [],
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug): BlogPostMeta => {
      const { slug: postSlug, title, description, date, tags, readingTime } = getPostBySlug(slug);
      return { slug: postSlug, title, description, date, tags, readingTime };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
