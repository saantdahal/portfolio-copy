import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type React from 'react';

interface AnimatedImageGridProps {
  image: string | StaticImageData;
}

const AnimatedImageGrid: React.FC<AnimatedImageGridProps> = ({ image }) => {
  return (
    <div className='bg-image-bg relative aspect-square w-44 flex-none overflow-hidden rounded-[10px] sm:w-[260px]'>
      <figure className='relative h-full w-full'>
        <Image
          src={image}
          alt='Profile image'
          fill
          sizes='(max-width: 640px) 176px, 260px'
          className='h-full w-full rounded-[10px] object-cover'
          fetchPriority='high'
        />
      </figure>
    </div>
  );
};

export default AnimatedImageGrid;
