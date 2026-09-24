import type { Metadata } from 'next';

import { questionMarkIcon, questionMarkIconLight } from '@/app/assets/assets';
import FAQ from '@/components/FAQ/FAQ';
import SectionHeading from '@/components/SectionHeading';
import { faqData } from '@/data';

import ContactSection from './_components/contact-section';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Santosh Dahal for Flutter, Node.js, and web development projects. Let's build something together.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <div className='relative flex h-min w-full flex-1 flex-col items-center justify-start gap-0 overflow-hidden p-0'>
        <div className='flex w-full max-w-full flex-col items-center gap-[60px] p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
          <ContactSection />

          {/* FAQ's */}
          <SectionHeading
            darkImage={questionMarkIcon}
            lightImage={questionMarkIconLight}
            title='Common Queries'
            description='Get Answers to Common Queries. Your Questions, Addressed Simply.'
          />

          <FAQ data={faqData} />
        </div>
      </div>
    </>
  );
}
