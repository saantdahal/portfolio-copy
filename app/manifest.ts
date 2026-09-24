import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site-config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: siteConfig.name,
    name: siteConfig.title,
    description: siteConfig.description,
    icons: [
      {
        src: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    id: '/',
    start_url: '/',
    display: 'standalone',
    scope: '/',
    theme_color: siteConfig.themeColor,
    background_color: siteConfig.themeColor,
  };
}
