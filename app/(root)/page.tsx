import React from 'react';

import Education from '@/components/Education/Education';
import Hero from '@/components/Hero/Hero';
import MyExperience from '@/components/MyExperience/MyExperience';
import MyServices from '@/components/MyServices/MyServices';
import MyStack from '@/components/MyStack/MyStack';
import ShowCase from '@/components/ShowCase';

export default function Home() {
  return (
    <div className='relative flex w-full max-w-full flex-none flex-col items-center justify-center gap-[100px] overflow-hidden p-[80px_0px] md:px-4 lg:w-[80%] lg:max-w-[750px] lg:flex-nowrap lg:overflow-visible lg:px-0'>
      <Hero />
      <MyExperience />
      <Education />
      <MyStack />
      <MyServices />
      <ShowCase
        showData={2}
        isMore
      />
    </div>
  );
}
