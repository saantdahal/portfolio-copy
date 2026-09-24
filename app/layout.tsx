import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';
import type { Person, ProfessionalService, WebSite, WithContext } from 'schema-dts';

import Footer from '@/components/Footer/Footer';
import PageLayout from '@/components/layouts/page-layout';
import Navbar from '@/components/Navbar/Navbar';
import { siteConfig } from '@/config/site-config';
import { socialLists } from '@/data';
import developerConfig from '@/data/developer.config.json';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import NextTopLoaderProvider from '@/providers/nexttop-loader-provider';
import { ThemeProvider } from '@/providers/theme-provider';

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    alternateName: [developerConfig.username],
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };
}

function getPersonJsonLd(): WithContext<Person> {
  const sameAs = socialLists
    .map((social) => social.link)
    .filter((link) => !link.startsWith('mailto:'));

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Software Developer',
    description: developerConfig.about,
    email: siteConfig.author.email,
    image: siteConfig.ogImage,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
    },
    knowsAbout: ['Flutter', 'Node.js', 'JavaScript', 'TypeScript', 'Dart', 'React', 'Next.js', 'MongoDB', 'Express.js'],
    sameAs,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Tribhuvan University',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteConfig.url,
    },
  };
}

function getProfessionalServiceJsonLd(): WithContext<ProfessionalService> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.name} - Flutter & Node.js Development`,
    url: siteConfig.url,
    description: developerConfig.about,
    email: siteConfig.author.email,
    priceRange: '$$',
    areaServed: 'Worldwide',
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: Array.isArray(siteConfig.keywords)
    ? siteConfig.keywords.join(', ')
    : siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: siteConfig.icons,

  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Santosh Dahal',
      },
    ],
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image.png'],
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },

  alternates: {
    canonical: siteConfig.url,
  },
  authors: [
    {
      name: siteConfig.author?.name ?? 'Santosh Dahal',
      url: siteConfig.author?.url ?? siteConfig.url,
    },
  ],
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
    >
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
          type='image/x-icon'
        />

        <Script
          id='website-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
        <Script
          id='person-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
        <Script
          id='professional-service-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProfessionalServiceJsonLd()).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={cn('antialiased', fonts)}>
        <ThemeProvider
          attribute='data-theme'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoaderProvider />
          <PageLayout>
            <Navbar />
            {children}
            <Footer />
          </PageLayout>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
