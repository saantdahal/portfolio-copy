import type { Metadata } from 'next';

import ServicesSection from './_components/services-section';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mobile app development with Flutter, backend development with Node.js and Express, and frontend development with React and Next.js — services offered by Santosh Dahal.',
  alternates: {
    canonical: '/services',
  },
};

export default function SearvicesPage() {
  return <ServicesSection />;
}
