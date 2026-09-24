import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site-config';
import { getAllPosts } from '@/lib/blog';
import type { SitemapPage } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: SitemapPage[] = [
    { url: '/', lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: '/services', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/blog', lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: '/contact', lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const postPages: SitemapPage[] = getAllPosts().map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const sitemapEntries = [...pages, ...postPages].map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return sitemapEntries;
}
