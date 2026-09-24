import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { BlogPosting, WithContext } from 'schema-dts';

import { rightArrow as rightArrowDark, rightArrowLight } from '@/app/assets/assets';
import DynamicIcon from '@/components/dynamic-icon';
import { siteConfig } from '@/config/site-config';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);

  if (!getAllPostSlugs().includes(slug)) {
    return {};
  }

  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function getBlogPostingJsonLd(post: ReturnType<typeof getPostBySlug>): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);

  if (!getAllPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  return (
    <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
      <Script
        id='blog-posting-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostingJsonLd(post)).replace(/</g, '\\u003c'),
        }}
      />

      <article className='flex w-full max-w-full flex-col items-start gap-8 p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
        <Link
          href='/blog'
          className='font-IBM_Plex_Mono group relative flex h-auto w-auto flex-none items-center gap-1.5 text-[13px] font-medium text-white uppercase opacity-70 transition-all duration-500 hover:opacity-100'
        >
          <div className='relative aspect-square h-auto w-3.5 flex-none overflow-hidden'>
            <figure className='absolute inset-0 rounded-[inherit]'>
              <DynamicIcon
                lightImage={rightArrowLight}
                darkImage={rightArrowDark}
                height={10}
                width={10}
                altText='Back to blog'
                className='block h-full w-full rotate-[135deg] rounded-[inherit] object-cover object-center'
              />
            </figure>
          </div>
          Back to blog
        </Link>

        <header className='relative flex h-auto w-full flex-none flex-col items-start gap-4 overflow-visible border-b border-dashed border-dark-gray-4 pb-8'>
          <div className='text-light-gray-2 relative flex h-auto w-full flex-none flex-wrap items-center justify-start gap-3 overflow-visible p-0 text-[13px] font-medium'>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <div className='bg-medium-gray relative aspect-square h-[5px] w-[5px] flex-none rounded-full' />
            <span>{post.readingTime}</span>
          </div>

          <h1 className='text-3xl leading-[1.2em] font-bold text-white sm:text-[38px]'>
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className='relative flex h-auto w-full flex-none flex-wrap items-center justify-start gap-2 overflow-visible p-0'>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-dark-gray-2 border-dark-gray-4 text-light-gray-2 rounded-md border px-2 py-1 text-xs font-medium'
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className='prose prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-p:text-light-gray-2 prose-p:font-medium
            prose-strong:text-white
            prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-light-gray-3
            prose-code:text-light-gray-3 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-very-dark-gray prose-pre:border prose-pre:border-dark-gray-3
            prose-li:text-light-gray-2 prose-li:font-medium
            prose-blockquote:text-light-gray-2 prose-blockquote:border-dark-gray-4'
        >
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </div>
  );
}
