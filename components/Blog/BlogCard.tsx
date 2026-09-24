'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { rightArrow as rightArrowDark, rightArrowLight } from '@/app/assets/assets';
import type { BlogPostMeta } from '@/types';

import DynamicIcon from '../dynamic-icon';

export default function BlogCard({ post, index }: { post: BlogPostMeta; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='relative h-auto w-full flex-none'
    >
      <Link
        href={`/blog/${post.slug}`}
        className='bg-very-dark-gray border-dark-gray-3 hover:border-dark-gray-6 group relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-4 overflow-visible rounded-xl border p-5 transition-all duration-500'
      >
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

        <h3 className='group-hover:text-light-gray-3 relative text-[20px] leading-[1.3em] font-bold text-white transition-colors duration-500'>
          {post.title}
        </h3>

        <p className='text-light-gray-2 relative text-[15px] font-medium'>{post.description}</p>

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

        <div className='font-IBM_Plex_Mono relative flex h-auto w-auto flex-none items-center gap-1.5 text-[13px] font-medium text-white uppercase opacity-70 transition-all duration-500 group-hover:opacity-100'>
          Read more
          <div className='relative aspect-square h-auto w-3.5 flex-none overflow-hidden'>
            <figure className='absolute inset-0 rounded-[inherit]'>
              <DynamicIcon
                lightImage={rightArrowLight}
                darkImage={rightArrowDark}
                height={10}
                width={10}
                altText='Read more'
                className='block h-full w-full -rotate-45 rounded-[inherit] object-cover object-center'
              />
            </figure>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
