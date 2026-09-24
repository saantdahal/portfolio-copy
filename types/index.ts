import type { StaticImageData } from 'next/image';

export interface pagesListsType {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface socialListsTypes {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface socialBrandsTypes {
  id: number;
  name: string;
  icon: StaticImageData | string;
  lightIcon: StaticImageData | string;
  link: string;
}

export interface myExperienceTypes {
  id: number;
  year: string;
  title: string;
  company: string;
  label: string;
  description: string;
  link: string;
  logo: StaticImageData | string;
  logoLight: StaticImageData | string;
}

export interface myEducationTypes {
  id: number;
  degree: string;
  school: string;
  date: string;
  grade: string;
  description: string;
  img: StaticImageData | string;
}

export interface myStackTypes {
  id: number;
  title: string;
  description: string;
  logo: StaticImageData | string;
  lightLogo: StaticImageData | string;
  link: string;
}

export interface myServicesTypes {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData | string;
  lightIcon: StaticImageData | string;
  link: string;
}
export interface myShowCasesTypes {
  id: number;
  title: string;
  description: string;
  link: string;
  type: string;
  year: string;
  image: StaticImageData | string;
}

export type FAQ = {
  question: string;
  answer: string;
};

export type ChangeFrequency =
  | 'yearly'
  | 'daily'
  | 'monthly'
  | 'always'
  | 'hourly'
  | 'weekly'
  | 'never';

export interface SitemapPage {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
