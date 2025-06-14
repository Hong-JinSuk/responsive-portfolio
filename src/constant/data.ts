import { ImageList } from '@/assets/images';
import { CardType } from '@/types/types';

export const ExData: CardType[] = [
  {
    sdate: 'MAR 2025',
    edate: 'JUL 2025',
    title: {
      ko: '농협은행 AI 통합 프로젝트',
      eng: 'NHBank AI Integration Project',
    },
    content: {
      ko: '농협은행 AI 통합 프로젝트에서 React를 이용한 프론트엔드 개발을 담당하였으며, LGCNS와 뱅가드랩과 협업하여 요구사항을 정리하고, UI뿐만 아니라 요구에 맞는 프론트엔드 기능 구현에도 직접 참여하였습니다.',
      eng: 'I was responsible for frontend development using React in the NongHyup Bank AI Integration Project. I collaborated with LGCNS and Vanguard Lab to define requirements, and participated not only in UI implementation but also in developing frontend functionalities that met those requirements.',
    },
    stacks: ['React', 'TypeScript', 'TailwindCSS', 'RESTful API'],
    toNavigateTitle: '',
  },
  {
    sdate: 'MAR 2025',
    edate: 'JUL 2025',
    title: {
      ko: '농협은행 AI 통합 프로젝트',
      eng: 'NHBank AI Integration Project',
    },
    content: {
      ko: '농협은행 AI 통합 프로젝트에서 React를 이용한 프론트엔드 개발을 담당하였으며, LGCNS와 뱅가드랩과 협업하여 요구사항을 정리하고, UI뿐만 아니라 요구에 맞는 프론트엔드 기능 구현에도 직접 참여하였습니다.',
      eng: 'I was responsible for frontend development using React in the NongHyup Bank AI Integration Project. I collaborated with LGCNS and Vanguard Lab to define requirements, and participated not only in UI implementation but also in developing frontend functionalities that met those requirements.',
    },
    stacks: ['React', 'TypeScript', 'TailwindCSS', 'RESTful API'],
    toNavigateTitle: '',
  },
];

export const AboutMe = [
  {
    ko: `안녕하세요. 저는 올해 1년차인 풀스택 개발자 홍진석입니다.`,
    eng: `I'm a full-stack engineer focusing on creating scalable and
            maintainable codebases. I have extensive experience with TypeScript,
            React and Next.js at a startup. Thanks to my work experience at an
            ad agency, I've honed my communication skills to solve real-world
            problems interactively.`,
  },
  {
    ko: `My main focus these days is teaching coding and web development to a
            small group of uni students and graduates. I don't get paid for
            running this study group, but I genuinely enjoy sharing my knowledge
            and skills based on my experience :)`,
    eng: `My main focus these days is teaching coding and web development to a
            small group of uni students and graduates. I don't get paid for
            running this study group, but I genuinely enjoy sharing my knowledge
            and skills based on my experience :)`,
  },
  {
    ko: `My main focus these days is teaching coding and web development to a
            small group of uni students and graduates. I don't get paid for
            running this study group, but I genuinely enjoy sharing my knowledge
            and skills based on my experience :)`,
    eng: `When I'm not at the computer, I enjoy working out in the gym and
            hanging out with my wife with a cup of coffee c o f f e e`,
  },
];

export const ProjectsData: CardType[] = [
  {
    sdate: 'MAY 2024',
    edate: 'JUN 2024',
    title: {
      ko: '구름톤트레이닝 - Spoco',
      eng: 'Spoco in goormtonTraining',
    },
    content: {
      ko: '오프라인에서 함께 코딩 스터디를 하던 사람들과 더 효율적으로 공부하기 위해, 온라인에서도 스터디를 이어갈 수 있도록 이 프로젝트를 시작하게 되었습니다. 문제를 온라인에 업로드하고 각자 문제를 풀 수 있을 뿐만 아니라, 서로의 코드에 코멘트를 남기며 어떤 부분이 잘못되었는지 함께 피드백을 주고받을 수 있는 기능도 제공합니다.',
      eng: 'This project was started to help members of an offline coding study group continue their sessions more efficiently online. Users can upload coding problems, solve them individually, and leave comments on each other’s code to point out mistakes and share feedback.',
    },
    stacks: [],
    intro: ImageList.spoco.src,
    toNavigateTitle: 'https://github.com/study-for-code/Backend',
    toNavigateImg: 'https://www.youtube.com/watch?v=591WiUhtz98',
  },
  {
    title: {
      ko: 'example',
      eng: 'Hama',
    },
    content: {
      ko: '프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다. 프로젝트 예시입니다.',
      eng: 'An AI-powered web application for erasing objects from an image. The application was sold to Sandoll Group in March 2023.',
    },
    stacks: ['TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    intro: ImageList.pIntro.src,
    toNavigateTitle: '',
  },
];

export const SocialLink = [
  {
    icon: ImageList.Github,
    url: 'https://github.com/Hong-JinSuk',
    alt: 'Github',
  },
  { icon: ImageList.blog, url: 'https://realtone.tistory.com/', alt: 'blog' },
  {
    icon: ImageList.LinkedIn,
    url: '',
    alt: 'LinkedIn',
  },
  { icon: ImageList.Instargram, url: '', alt: 'Instagram' },
];

export const IntroduceMyself = {
  ko: `풀스택 개발자로서 프론트엔드에서는 UI/UX를, 백엔드에서는 성능 최적화를 중점적으로 개발하고 있습니다.`,
  eng: `As a full-stack developer, I focus on UI/UX in the frontend and performance optimization in the backend.`,
};

export const notFoundMessage = {
  ko: '페이지를 찾을 수 없습니다.',
  eng: `PAGE NOT FOUND`,
};

export const subNotFoundMessage = {
  ko: `요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.`,
  eng: `The page you're looking for doesn't exist or may have been moved.`,
};

export const linkMessage = {
  ko: '메인으로 이동',
  eng: 'Go to Main',
};

export const notFoundToastMessage = {
  ko: '잘못된 페이지 접근입니다.',
  eng: `It's Invalid page access.`,
};
