import { educationIcon, educationIconLight } from '@/app/assets/assets';

import SectionHeading from '../SectionHeading';
import EducationItem from './education-item';

export default function Education() {
  return (
    <div
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
      aria-label='My education'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          darkImage={educationIcon}
          lightImage={educationIconLight}
          title='My education'
          description='Academic background that shaped my foundation in software development.'
        />
      </div>
      <EducationItem />
    </div>
  );
}
