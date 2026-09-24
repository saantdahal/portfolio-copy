import { Mail, User, Zap } from 'lucide-react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
);

const LinkedIn = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const StackOverflow = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z' />
  </svg>
);

const Medium = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z' />
  </svg>
);

import {
  balBikashSchoolLogo,
  batikaLabsLogo,
  batikaLabsProjectImage,
  dartLogo,
  dynamicTechnosoftLogo,
  expressLogo,
  figmaLogoPng,
  firebaseLogo,
  flutterLogo,
  githubLogoPng,
  gitLogo,
  javascriptLogo,
  mongoCompassLogo,
  mongodbLogo,
  multicloudImage,
  n9nrmsImage,
  nextjsLogo,
  nnineSolutionLogo,
  nodejsLogo,
  postgreLogo,
  postmanLogo,
  reactLogo,
  skillVerifyImage,
  studiviaImage,
  tailwindcssLogo,
  tribhuvanUniversityLogo,
  typescriptLogo,
  vercelLogoPng,
  vscodeLogo,
} from '@/app/assets/assets';
import type {
  FAQ,
  myEducationTypes,
  myExperienceTypes,
  myServicesTypes,
  myShowCasesTypes,
  myStackTypes,
  socialBrandsTypes,
} from '@/types';
import type { socialListsTypes } from '@/types';
import type { pagesListsType } from '@/types';

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
    icon: <User />,
  },
  {
    id: 2,
    title: 'Services',
    href: '/services',
    icon: <Zap />,
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/saantdahal',
  },
  {
    id: 2,
    title: 'LinkedIn',
    icon: <LinkedIn size={20} />,
    link: 'https://www.linkedin.com/in/saantdahal/',
  },
  {
    id: 3,
    title: 'Stack Overflow',
    icon: <StackOverflow size={20} />,
    link: 'https://stackoverflow.com/users/29255884/santosh',
  },
  {
    id: 4,
    title: 'Medium',
    icon: <Medium size={20} />,
    link: 'https://medium.com/@saantdahal',
  },
  {
    id: 5,
    title: 'Email',
    icon: <Mail size={22} />,
    link: 'mailto:dev@santoshdahal.info.np',
  },
];

// Scrolling tech-stack marquee
export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: 'Flutter',
    link: 'https://flutter.dev',
    icon: flutterLogo,
    lightIcon: flutterLogo,
  },
  {
    id: 2,
    name: 'Dart',
    link: 'https://dart.dev',
    icon: dartLogo,
    lightIcon: dartLogo,
  },
  {
    id: 3,
    name: 'React',
    link: 'https://react.dev',
    icon: reactLogo,
    lightIcon: reactLogo,
  },
  {
    id: 4,
    name: 'Next.js',
    link: 'https://nextjs.org',
    icon: nextjsLogo,
    lightIcon: nextjsLogo,
  },
  {
    id: 5,
    name: 'Node.js',
    link: 'https://nodejs.org',
    icon: nodejsLogo,
    lightIcon: nodejsLogo,
  },
  {
    id: 6,
    name: 'Express',
    link: 'https://expressjs.com',
    icon: expressLogo,
    lightIcon: expressLogo,
  },
  {
    id: 7,
    name: 'MongoDB',
    link: 'https://www.mongodb.com',
    icon: mongodbLogo,
    lightIcon: mongodbLogo,
  },
  {
    id: 8,
    name: 'Firebase',
    link: 'https://firebase.google.com',
    icon: firebaseLogo,
    lightIcon: firebaseLogo,
  },
  {
    id: 9,
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org',
    icon: postgreLogo,
    lightIcon: postgreLogo,
  },
  {
    id: 10,
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org',
    icon: typescriptLogo,
    lightIcon: typescriptLogo,
  },
  {
    id: 11,
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: javascriptLogo,
    lightIcon: javascriptLogo,
  },
  {
    id: 12,
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com',
    icon: tailwindcssLogo,
    lightIcon: tailwindcssLogo,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: 'Mar 2026 - Present',
    title: 'Flutter Developer',
    company: 'Dynamic Technosoft',
    label: 'Software Company',
    description:
      'Building and maintaining cross-platform mobile applications using Flutter and Dart with the BLoC state management pattern. Integrating RESTful APIs, implementing reusable UI components, and optimizing app performance following clean architecture principles.',
    link: '',
    logo: dynamicTechnosoftLogo,
    logoLight: dynamicTechnosoftLogo,
  },
  {
    id: 2,
    year: 'Sep 2025 - Present',
    title: 'Flutter Developer',
    company: 'Batika Labs',
    label: 'Software Agency',
    description:
      'Building and maintaining cross-platform mobile applications using Flutter and Dart with the BLoC state management pattern. Integrating RESTful APIs, implementing reusable UI components, and collaborating with designers and backend developers to deliver production-ready mobile solutions.',
    link: 'https://batikalabs.dev',
    logo: batikaLabsLogo,
    logoLight: batikaLabsLogo,
  },
  {
    id: 3,
    year: 'Nov 2024 - Feb 2026',
    title: 'Flutter & Node.js Developer',
    company: 'Nnine Solution Pvt. Ltd',
    label: 'IT Company',
    description:
      'Built and maintained high-performance mobile and web applications using Flutter for the frontend and Node.js with Express for the backend. Developed RESTful APIs, integrated MongoDB databases, managed authentication, and worked on CI/CD setup in an agile environment.',
    link: '',
    logo: nnineSolutionLogo,
    logoLight: nnineSolutionLogo,
  },
];

export const myEducation: myEducationTypes[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Tribhuvan University',
    date: 'Nov 2022 - Present',
    grade: 'Ongoing',
    description:
      'Currently pursuing a Bachelor’s degree in Computer Applications, gaining hands-on experience in programming, database management, and software engineering, with a strong focus on building scalable, real-world applications with Flutter and Node.js.',
    img: tribhuvanUniversityLogo,
  },
  {
    id: 2,
    degree: 'School Leaving Certificate (SLC)',
    school: 'Bal Bikash Secondary School',
    date: 'Up to 2019',
    grade: '3.2 GPA',
    description:
      'Completed my School Leaving Certificate, building a solid academic foundation and developing an early interest in technology, problem-solving, and computer science fundamentals.',
    img: balBikashSchoolLogo,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: 'Git',
    description: 'Version Control System',
    logo: gitLogo,
    lightLogo: gitLogo,
    link: 'https://git-scm.com',
  },
  {
    id: 2,
    title: 'GitHub',
    description: 'Code Hosting & Collaboration',
    logo: githubLogoPng,
    lightLogo: githubLogoPng,
    link: 'https://github.com',
  },
  {
    id: 3,
    title: 'VS Code',
    description: 'Code Editor',
    logo: vscodeLogo,
    lightLogo: vscodeLogo,
    link: 'https://code.visualstudio.com',
  },
  {
    id: 4,
    title: 'Postman',
    description: 'API Testing Tool',
    logo: postmanLogo,
    lightLogo: postmanLogo,
    link: 'https://www.postman.com',
  },
  {
    id: 5,
    title: 'MongoDB Compass',
    description: 'Database GUI Tool',
    logo: mongoCompassLogo,
    lightLogo: mongoCompassLogo,
    link: 'https://www.mongodb.com/products/compass',
  },
  {
    id: 6,
    title: 'Vercel',
    description: 'Deployment Platform',
    logo: vercelLogoPng,
    lightLogo: vercelLogoPng,
    link: 'https://vercel.com',
  },
  {
    id: 7,
    title: 'Figma',
    description: 'Interface Design Tool',
    logo: figmaLogoPng,
    lightLogo: figmaLogoPng,
    link: 'https://www.figma.com',
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Mobile App Development',
    description:
      'Building performant, cross-platform mobile apps with Flutter and Dart, using BLoC/Provider for clean, scalable state management.',
    icon: flutterLogo,
    lightIcon: flutterLogo,
    link: '/services',
  },
  {
    id: 2,
    title: 'Backend Development',
    description:
      'Designing and building REST APIs with Node.js and Express, backed by MongoDB or PostgreSQL, with authentication and clean architecture.',
    icon: nodejsLogo,
    lightIcon: nodejsLogo,
    link: '/services',
  },
  {
    id: 3,
    title: 'Frontend Development',
    description:
      'Crafting responsive, accessible web interfaces with React and Next.js, styled with Tailwind CSS.',
    icon: reactLogo,
    lightIcon: reactLogo,
    link: '/services',
  },
  {
    id: 4,
    title: 'API & Firebase Integration',
    description:
      'Integrating RESTful APIs, Firebase services (auth, push notifications, realtime data), and third-party SDKs into mobile and web apps.',
    icon: firebaseLogo,
    lightIcon: firebaseLogo,
    link: '/services',
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Multi-Cloud',
    description:
      'A production-grade unified cloud resource management platform integrating AWS, GCP, and Azure into a single dashboard. Built with Go (gRPC, Apache Arrow) and React, offering real-time monitoring and normalized cloud data visualization with Prometheus and Grafana integration.',
    link: 'multicloud-admin.vercel.app',
    type: 'Full-Stack Platform',
    year: '2026',
    image: multicloudImage,
  },
  {
    id: 2,
    title: 'Skill Verify',
    description:
      'An AI-powered platform that verifies developers’ technical skills through real-world code analysis. Built during the 100X Nepal Hackathon, it analyzes GitHub repositories and resumes to generate blockchain-backed skill verification reports.',
    link: 'skillverify.io',
    type: 'AI Platform',
    year: '2026',
    image: skillVerifyImage,
  },
  {
    id: 3,
    title: 'Batika Labs',
    description:
      'A scalable multi-flavor Flutter application built with clean architecture and BLoC state management, using Retrofit and Dio for networking, Freezed for code generation, and Easy Localization for multilingual support.',
    link: 'yamie-end-customer.batikalabs.dev',
    type: 'Mobile App',
    year: '2025',
    image: batikaLabsProjectImage,
  },
  {
    id: 4,
    title: 'N9 NRMS – Attendance & Leave Management',
    description:
      'A cross-platform mobile app built with Flutter that streamlines workforce management, enabling attendance tracking, leave management, and real-time data synchronization for organizations.',
    link: 'hr.nnine.training',
    type: 'Mobile App',
    year: '2024',
    image: n9nrmsImage,
  },
  {
    id: 5,
    title: 'Studivia – Nepali Entrance Exam Prep',
    description:
      'A mobile-first platform helping Nepali school-level students prepare for entrance exams in Science, Management, and Humanities streams, with subject-wise quizzes, hint systems, and weekly leaderboards.',
    link: '',
    type: 'Mobile App',
    year: '2024',
    image: studiviaImage,
  },
];

export const faqData: FAQ[] = [
  {
    question: 'Can you work with clients remotely?',
    answer:
      'Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.',
  },
  {
    question: 'Will my app be cross-platform?',
    answer:
      "Yes. I build mobile apps with Flutter, which ships from a single codebase to both iOS and Android, and web apps with React/Next.js that are fully responsive across devices and screen sizes.",
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      'The timeline for each project varies depending on its scope and complexity. Factors such as the number of features, integrations, and the feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.',
  },
  {
    question: 'Can you integrate third-party APIs and services?',
    answer:
      'Yes, I have experience integrating REST APIs, Firebase, payment gateways, and other third-party services and SDKs. Whether you need authentication, push notifications, or analytics, I can recommend and implement a smooth integration.',
  },
  {
    question: 'Do you offer app and website maintenance?',
    answer:
      'Yes, I offer maintenance services to ensure your app or website remains up to date, secure, and optimized. From performance updates to adding new features, I can provide ongoing support to keep things running smoothly.',
  },
  {
    question: 'How do you handle revisions?',
    answer:
      'I value your input and collaboration throughout the development process. Upon completing an initial build, I encourage you to provide feedback, and I incorporate your suggestions and revisions to ensure the final product aligns with your vision.',
  },
  {
    question: 'What tech stack do you work with?',
    answer:
      'On mobile, I mainly use Flutter and Dart with BLoC/Provider. On the backend, Node.js, Express, MongoDB, and PostgreSQL. On the frontend, React, Next.js, and Tailwind CSS.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.',
  },
];
