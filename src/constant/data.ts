import { ImageList } from '@/assets/images';
import { CardType } from '@/types/types';

export const ExData: CardType[] = [
  {
    sdate: 'DEC 2024',
    edate: 'FEB 2025',
    title: {
      ko: `펜타시스템 자사 프로젝트의 React 전환 및 프론트-백엔드 분리`,
      eng: `Migration of a legacy in-house project to React with frontend-backend separation`,
    },
    content: {
      ko: `펜타시스템의 자사 프로그램 중 메타데이터 관리 시스템과 포털 시스템의 프론트엔드를 React로 전환하는 작업을 맡아 진행했습니다.
            이 과정에서 React, TypeScript, TailwindCSS를 활용해 UI를 재구성하고, 프론트엔드와 백엔드를 분리하여 유지보수성과 확장성을 높였습니다.
            해당 시스템은 이후 펜타시스템의 정식 제품으로 판매되고 있습니다.`,
      eng: `I led the migration of Penta System’s in-house metadata management and portal systems to React.
            Using React, TypeScript, and TailwindCSS, I restructured the frontend architecture and decoupled it from the backend, significantly improving maintainability and scalability.
            The system has since been commercialized as one of Penta System’s official products.`,
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
  {
    sdate: 'JUL 2025',
    edate: 'NOW',
    title: {
      ko: '경찰청 - 더플랫폼(정보 차세대) 시스템 구축',
      eng: 'National Police Agency - The Platform (Next-Generation Information System) Development',
    },
    content: {
      ko: '경찰청에서 정보계 차세대 프로젝트인 더 플랫폼에서 데이터 및 AI 포탈의 프런트 작업을 맡아 개발중입니다.',
      eng: `I was in charge of the frontend development for the Data and AI Portal as part of the National Police Agency's next-generation information system project, The Platform.`,
    },
    stacks: ['React', 'TypeScript', 'TailwindCSS', 'RESTful API'],
    toNavigateTitle: '',
  },
];

export const AboutMe = [
  {
    ko: `안녕하세요. 저는 올해 1년차인 풀스택 개발자 홍진석입니다.`,
    eng: `Hi, I'm Hong Jin-Suk. first year full-stack developer`,
  },
  {
    ko: `저는 확장가능하고, 요구사항에 유연하게 대처할 수 있는 것을 중점적으로 생각하며 코딩하는 풀스택 개발자입니다.
         현재 펜타시스템에서 프론트엔드 개발자로 근무 중이며, 자사 프로젝트에서는 간단한 백엔드 개발도 함께 맡고 있습니다.
         또한 외부 프로젝트를 통해 협업 경험을 쌓으며, 변화하는 요구사항 속에서도 안정적으로 프로젝트를 설계하고 유지하는 방법을 배웠습니다.`,
    eng: `I’m a full-stack developer who focuses on building scalable and adaptable systems that respond well to changing requirements.
          Currently, I work as a frontend developer at Penta System, while also handling some backend development for in-house projects.
          Through collaboration with other companies and real-world project experience, I’ve learned how to design systems that remain flexible and stable, even as needs evolve.
`,
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
    stacks: [
      'JAVA',
      'Spring',
      'MySQL',
      'MongoDB',
      'JPA',
      'AWS',
      'Git',
      'Git_Actions',
    ],
    intro: ImageList.spoco.src,
    toNavigateTitle: 'https://github.com/study-for-code/Backend',
    toNavigateImg: 'https://www.youtube.com/watch?v=591WiUhtz98',
  },
  {
    sdate: 'MAY 2024',
    edate: 'JUN 2024',
    title: {
      ko: '구름톤트레이닝 - 도파밍',
      eng: 'DoFarming - goormtonTraining',
    },
    content: {
      ko: '여행을 갈 때, 가장 중요한 목적지를 고르기 힘든 사람들을 위해 프로젝트를 시작하게 되었습니다. 사용자 대신 여행지를 골라주고, 여행지 근처의 식당, 엑티비티 등 다양한 놀거리 및 즐길거리를 추천해줍니다.',
      eng: 'We started this project for people who find it difficult to choose a travel destination. Our service selects a destination on behalf of the user and recommends various activities and attractions nearby, such as restaurants, entertainment, and things to do.',
    },
    stacks: [
      'JAVA',
      'Spring',
      'MySQL',
      'MongoDB',
      'JPA',
      'AWS',
      'Git',
      'Git_Actions',
    ],
    intro: ImageList.dofarming.src,
    toNavigateTitle: 'https://github.com/goorm-dofarming',
    toNavigateImg: 'https://www.youtube.com/watch?v=mbJmN1jLD6s',
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
  {
    icon: ImageList.Instargram,
    url: 'https://www.instagram.com/jinsuk_hon9/',
    alt: 'Instagram',
  },
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
