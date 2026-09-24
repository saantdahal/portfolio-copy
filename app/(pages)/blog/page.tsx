import type { Metadata } from 'next';

import { blogIcon, blogIconLight } from '@/app/assets/assets';
import BlogCard from '@/components/Blog/BlogCard';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and writeups by Santosh Dahal on Flutter, Node.js, and web development.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
      <div className='flex w-full max-w-full flex-col items-center gap-[40px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
        <SectionHeading
          title='Blog'
          darkImage={blogIcon}
          lightImage={blogIconLight}
          description='Thoughts, tutorials, and writeups on Flutter, Node.js, and web development.'
        />

        <div className='relative flex h-min w-full flex-none flex-col items-start justify-start gap-4 overflow-visible p-0'>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <BlogCard
                key={post.slug}
                post={post}
                index={index}
              />
            ))
          ) : (
            <p className='text-light-gray-2 py-12 text-center text-base font-medium'>
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
