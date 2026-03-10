import { ImageList } from '@/assets/images';
import { CardType } from '@/types/types';

export const ExData: CardType[] = [
  {
    sdate: 'DEC 2024',
    edate: 'FEB 2025',
    title: {
      ko: `자사 제품 React 전환`,
      eng: `Migration of Our Product to React`,
    },
    company: {
      ko: '펜타시스템',
      eng: 'PentaSystem',
    },
    content: {
      ko: `펜타시스템의 자사 프로그램 중 메타데이터 관리 시스템과 포털 시스템의 프론트엔드를 React로 전환하는 작업을 맡아 진행했습니다.
            이 과정에서 React, TypeScript, TailwindCSS를 활용해 UI를 재구성하고, 프론트엔드와 백엔드를 분리하여 유지보수성과 확장성을 높였습니다.
            해당 시스템은 이후 펜타시스템의 정식 제품으로 판매되고 있습니다.`,
      eng: `I led the migration of Penta System’s in-house metadata management and portal systems to React.
            Using React, TypeScript, and TailwindCSS, I restructured the frontend architecture and decoupled it from the backend, significantly improving maintainability and scalability.
            The system has since been commercialized as one of Penta System’s official products.`,
    },
    stacks: ['React', 'TypeScript', 'TailwindCSS', 'Tanstack-Query', 'Axios'],
    toNavigateTitle: '',
  },
  {
    sdate: 'MAR 2025',
    edate: 'JUL 2025',
    title: {
      ko: 'AI 통합 프로젝트',
      eng: 'AI Integration Project',
    },
    company: {
      ko: '농협은행',
      eng: 'NHBank',
    },
    content: {
      ko: '농협은행 AI 통합 프로젝트에서 React를 이용한 프론트엔드 개발을 담당하였으며, LGCNS와 뱅가드랩과 협업하여 요구사항을 정리하고, UI뿐만 아니라 요구에 맞는 프론트엔드 기능 구현에도 직접 참여하였습니다.',
      eng: 'I was responsible for frontend development using React in the NongHyup Bank AI Integration Project. I collaborated with LGCNS and Vanguard Lab to define requirements, and participated not only in UI implementation but also in developing frontend functionalities that met those requirements.',
    },
    stacks: ['React', 'TypeScript', 'TailwindCSS', 'Tanstack-Query', 'Axios'],
    toNavigateTitle: '',
  },
  {
    sdate: 'JUL 2025',
    edate: 'SEP 2025',
    title: {
      ko: '더플랫폼(정보 차세대) 시스템 구축',
      eng: 'The Platform (Next-Generation Information System) Development',
    },
    company: {
      ko: '경찰청',
      eng: 'National Police Agency',
    },
    content: {
      ko: '경찰청 정보계 차세대 프로젝트에서 타 시스템과의 Link 연동 및 SSO 인증 연결을 구현하였고, 경찰청 담당자 피드백과 기존 자료를 분석하여 데이터를 가공한 뒤 Recharts를 활용해 대시보드를 개발하였습니다. 또한 URL 입력만으로 데이터를 일괄 수집할 수 있는 기능과 페이지 캡처 기능을 구현하였습니다.',
      eng: 'In the next-generation information system project at the National Police Agency, I implemented external system link integration and SSO authentication. Based on feedback from stakeholders and analysis of existing materials, I processed and visualized data using Recharts to build an interactive dashboard. I also developed a feature to batch-fetch data via URL input and implemented a page capture functionality.',
    },
    stacks: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Tanstack-Query',
      'Axios',
      'Recharts',
    ],
    toNavigateTitle: '',
  },
  {
    sdate: 'NOV 2025',
    edate: 'DEC 2025',
    title: {
      ko: '비정형 데이터 자산화 플랫폼 구축',
      eng: 'Development of Unstructured Data Asset Management Platform',
    },
    company: {
      ko: '신한은행',
      eng: 'Shinhan Bank',
    },
    content: {
      ko: '정형 및 비정형 데이터 솔루션을 통합하는 과정에서 핵심 프론트엔드 비즈니스 로직 설계를 주도했습니다. 특히 React Hook Form과 Zod를 활용한 엄격한 스키마 기반 데이터 검증 시스템을 구축하여, 프론트엔드 단에서 데이터 오류를 사전 차단함으로써 백엔드 서버의 연산 부담을 유의미하게 경감시켰습니다. 또한 AI 분석 결과를 직관적으로 시각화하고, 이를 다양한 포맷으로 Export하는 기능을 구현하여 금융권 고객사의 데이터 활용 요구사항을 성공적으로 충족시켰습니다.',
      eng: 'Led the design of core front-end business logic during the integration of structured and unstructured data solutions. By implementing a strict schema-based validation system using React Hook Form and Zod, I effectively minimized backend processing overhead by handling data integrity at the client side. I also developed features to visualize AI analysis results and export them into various formats, successfully meeting high-standard data requirements for financial sector clients.',
    },
    stacks: [
      'React',
      'TypeScript',
      'Tanstack-Query',
      'Axios',
      'React Hook Form',
      'Zod',
      'Tailwind CSS',
    ],
  },
  {
    sdate: 'JAN 2026',
    edate: 'NOW',
    title: {
      ko: 'NEXT 데이터 플랫폼 구축',
      eng: 'NEXT Data Platform Development',
    },
    company: {
      ko: '우리금융캐피탈',
      eng: 'Woori Financial Capital',
    },
    content: {
      ko: 'React 및 TypeScript 기반의 프론트엔드 개발과 UI 퍼블리싱을 담당하며, 금융 데이터 플랫폼의 사용자 경험(UX)을 고도화하고 있습니다. 고객사 요구사항을 충실히 반영하는 동시에 더 나은 아키텍처와 UI/UX 방안을 선제적으로 제안하고 있으며, BIMATRIX 등 협력사와의 긴밀한 소통을 통해 기술적 요청사항을 해결하고 있습니다. 특히 데이터 중심의 랜딩 페이지를 직관적인 UI로 구현하고, Framer Motion을 활용한 인터랙티브 요소와 2차 인증 시스템을 도입하여 서비스의 보안성과 사용성을 동시에 개선했습니다.',
      eng: 'Leading front-end development and UI publishing using React and TypeScript for a financial data platform. I focus on enhancing user experience (UX) while proactively proposing optimized architectural and UI/UX solutions beyond basic client requirements. I also collaborate closely with partners like BIMATRIX to address technical requests and streamline integration. Key contributions include developing intuitive, data-driven landing pages and implementing secure 2-factor authentication. I have also significantly improved UX by integrating sophisticated animations using Framer Motion to create a more interactive and seamless interface.',
    },
    stacks: [
      'React',
      'TypeScript',
      'Tanstack Query',
      'Axios',
      'React Hook Form',
      'Zod',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
];

export const AboutMe = [
  {
    ko: `안녕하세요, 1년차 프론트엔드 개발자 홍진석입니다.`,
    eng: `Hi, I'm Hong Jin-Suk, a frontend developer with 1 year of professional experience.`,
  },
  {
    ko: `React와 TypeScript를 중심으로 금융권 및 공공기관 프로젝트에 참여하며 실무 경험을 쌓아왔습니다.
농협은행, 경찰청, 신한은행, 우리금융캐피탈 등 다양한 도메인의 프로젝트에서 단순 UI 구현을 넘어 핵심 비즈니스 로직 설계와 아키텍처 개선에 직접 기여했습니다.
변화하는 요구사항 속에서도 유지보수성과 확장성을 고려한 개발을 지향하며, 협력사 및 고객사와의 긴밀한 소통을 통해 기술적 문제를 해결하는 것을 즐깁니다.`,
    eng: `I have built practical experience participating in projects for financial institutions and public sector clients, working primarily with React and TypeScript.
Across projects with organizations such as NongHyup Bank, the National Police Agency, Shinhan Bank, and Woori Financial Capital, I have contributed beyond UI implementation — taking ownership of core business logic and proactively proposing architectural improvements.
I am committed to writing maintainable and scalable code, and I thrive on solving technical challenges through close collaboration with clients and partner teams.`,
  },
  {
    ko: `최근에는 단순한 기능 구현을 넘어 사용자 경험과 코드 품질 모두를 고려하는 개발자로 성장하고 있습니다.
Framer Motion을 활용한 인터랙티브 UI, React Hook Form과 Zod를 결합한 스키마 기반 검증 시스템 등 더 정교한 프론트엔드 설계를 경험하며 기술적 깊이를 넓혀가고 있습니다.
앞으로는 성능 최적화와 접근성, 그리고 설계 단계부터 능동적으로 참여하는 개발자로 발전해 나가고자 합니다.`,
    eng: `Recently, I have been growing as a developer who considers both user experience and code quality, beyond just feature implementation.
Through hands-on experience with interactive UI using Framer Motion and schema-based validation systems combining React Hook Form and Zod, I have been deepening my technical expertise in frontend architecture.
Going forward, I aim to further develop my skills in performance optimization and accessibility, while becoming a developer who contributes proactively from the design stage.`,
  },
];

export const ProjectsData: CardType[] = [
  {
    sdate: 'MAY 2024',
    edate: 'JUN 2024',
    title: {
      ko: 'Spoco',
      eng: 'Spoco',
    },
    company: {
      ko: '구름톤트레이닝',
      eng: 'goormtonTraining',
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
      ko: '도파밍',
      eng: 'DoFarming',
    },
    company: {
      ko: '구름톤트레이닝',
      eng: 'goormtonTraining',
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

export const noServicePageMessage = {
  ko: '현재 준비중인 페이지입니다.',
  eng: 'This Service is Currently Being Prepared',
};
