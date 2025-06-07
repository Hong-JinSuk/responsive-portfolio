import pIntro from '@/assets/images/code-image.png';
import Github from '@/assets/images/logo-github.svg';
import Instargram from '@/assets/images/logo-instagram.svg';
import LinkedIn from '@/assets/images/logo-linkedin.svg';
import { CardType } from '@/types/types';

// 추후에 변경해야함
// title: {
//   ko: '농협은행 AI 통합 프로젝트',
//   en: 'NongHyup Bank AI Integration Project',
// },

export const ExData: CardType[] = [
  {
    sdate: '2025-03-15',
    edate: '2025-07-15',
    title: '농협은행 AI 통합 프로젝트',
    content:
      '농협은행 AI 통합 프로젝트에서 React를 이용한 프론트엔드를 맡아 작업하였습니다.',
    stacks: ['React', 'TailwindCSS', 'RESTful API'],
    toNavigate: '',
  },
  {
    sdate: 'JUN 2021',
    edate: 'NOV 2022',
    title: 'Software Engineer · Coxwave, Inc. ',
    content:
      'Developed AI-powered interactive web apps. Took on the role of planning, designing and building various types of UI components for the main product. Took charge of building and managing the design system using Figma.',
    stacks: ['react', 'next.js'],
    toNavigate: '',
  },
  {
    sdate: 'JUN 2021',
    edate: 'NOV 2022',
    title: 'Software Engineer · Coxwave, Inc. ',
    content:
      'Developed AI-powered interactive web apps. Took on the role of planning, designing and building various types of UI components for the main product. Took charge of building and managing the design system using Figma.',
    stacks: [
      'react',
      'next.js',
      'TypeScript',
      'Tailwind CSS',
      'Java',
      'JPA',
      'R',
      'Python',
    ],
    toNavigate: '',
  },
];

export const AboutMe = [
  `I'm a full-stack engineer focusing on creating scalable and
            maintainable codebases. I have extensive experience with TypeScript,
            React and Next.js at a startup. Thanks to my work experience at an
            ad agency, I've honed my communication skills to solve real-world
            problems interactively.`,
  `My main focus these days is teaching coding and web development to a
            small group of uni students and graduates. I don't get paid for
            running this study group, but I genuinely enjoy sharing my knowledge
            and skills based on my experience :)`,
  `When I'm not at the computer, I enjoy working out in the gym and
            hanging out with my wife with a cup of coffee c o f f e e`,
];

export const ProjectsData: CardType[] = [
  {
    title: 'Hama',
    content:
      'An AI-powered web application for erasing objects from an image. The application was sold to Sandoll Group in March 2023.',
    stacks: ['TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    intro: pIntro.src,
    toNavigate: '',
  },
  {
    title: 'Hama',
    content:
      'An AI-powered web application for erasing objects from an image. The application was sold to Sandoll Group in March 2023.',
    stacks: ['TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    intro: pIntro.src,
    toNavigate: '',
  },
  {
    title: 'Hama',
    content:
      'An AI-powered web application for erasing objects from an image. The application was sold to Sandoll Group in March 2023.',
    stacks: ['TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    intro: pIntro.src,
    toNavigate: '',
  },
];

export const SocialLink = [
  { src: Github, url: 'https://github.com/Hong-JinSuk', alt: 'Github' },
  { src: LinkedIn, url: '', alt: 'LinkedIn' },
  { src: Instargram, url: '', alt: 'Instagram' },
];

export const IntroduceMyself =
  'I build robust and user-friendly web applications from the ground up.';

export const notFoundMessage = {
  ko: '페이지를 찾을 수 없습니다.',
  eng: `PAGE NOT FOUND`,
};

export const subNotFoundMessage = {
  ko: `요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.`,
  eng: `'The page you're looking for doesn't exist or may have been moved.'`,
};

export const linkMessage = {
  ko: '메인으로 이동',
  eng: 'Go to Main',
};
