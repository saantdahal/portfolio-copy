import { zapIcon, zapIconLight } from '@/app/assets/assets';
import ServiceItemLists from '@/components/MyServices/service-item-lists';
import MyStack from '@/components/MyStack/MyStack';
import SectionHeading from '@/components/SectionHeading';
import ShowCase from '@/components/ShowCase';

export default function ServicesSection() {
  return (
    <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-center justify-start gap-0 overflow-hidden p-0'>
      <div className='relative flex h-min w-full max-w-full flex-none flex-col flex-nowrap items-center justify-center gap-[60px] overflow-visible p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
        <SectionHeading
          darkImage={zapIcon}
          lightImage={zapIconLight}
          title='My Services'
          description='Building mobile apps, backends, and web frontends with a focus on clean, maintainable code.'
        />

        <ServiceItemLists />

        <MyStack />
        <ShowCase
          isMore={false}
          showData={4}
        />
      </div>
    </div>
  );
}
