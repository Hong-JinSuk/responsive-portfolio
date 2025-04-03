'use client';

import pIntro from '@/assets/images/code-image.png';
import Github from '@/assets/images/logo-github.svg';
import Instargram from '@/assets/images/logo-instagram.svg';
import LinkedIn from '@/assets/images/logo-linkedin.svg';
import Card from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SwitchTheme from '@/components/ui/switch-theme';
import { useMaskImage } from '@/hooks/use-mask-images';
import { useMouseSpy } from '@/hooks/use-mouse-spy';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { CardType } from '@/types/types';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

const ExData: CardType[] = [
  {
    sdate: 'JUN 2021',
    edate: 'NOV 2022',
    title: 'Software Engineer · Coxwave, Inc. ',
    content:
      'Developed AI-powered interactive web apps. Took on the role of planning, designing and building various types of UI components for the main product. Took charge of building and managing the design system using Figma.',
    stacks: ['React', 'next.js'],
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

const ProjectsData: CardType[] = [
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

const IntroduceMyself =
  'I build robust and user-friendly web applications from the ground up.';

const SocialLink = [
  { src: Github, url: 'https://github.com/Hong-JinSuk', alt: 'Github' },
  { src: LinkedIn, url: '', alt: 'LinkedIn' },
  { src: Instargram, url: '', alt: 'Instagram' },
];

const AboutMe = [
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

const sectionIds = ['AboutMe', 'Experience', 'Projects'];
const sectionMouseIds = ['AboutMe', 'Experience', 'Projects'];

export default function Page() {
  const router = useRouter();
  const maskStyle = useMaskImage(40);
  const activeScrollId = useScrollSpy({ ids: sectionIds, offset: 0 });
  const activeMouseId = useMouseSpy({ ids: sectionMouseIds });

  const activeId = activeMouseId ?? activeScrollId;

  const [appliedMask, setAppliedMask] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isLg = window.innerWidth >= 1024;
      setAppliedMask(isLg ? maskStyle : '');
    };

    handleResize(); // 초기 실행 (현재 화면 크기 반영)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maskStyle]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full relative">
      <header className="w-full flex flex-col justify-between lg:sticky lg:top-0 lg:py-24 lg:max-h-screen">
        <section className="flex h-full flex-col space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-3xl md:text-5xl font-bold">Hong JinSuk</span>
            <div className="lg:hidden">
              <SwitchTheme />
            </div>
          </div>
          <div className="flex space-x-1">
            <span>Full-Stack Software Engineer</span>
            <Sparkles className="text-yellow-300 size-5" />
          </div>
          <div className="max-w-80">
            <span>{IntroduceMyself}</span>
          </div>
        </section>
        <section className="hidden lg:block h-full mb-20">
          <nav className="flex flex-col gap-2">
            {sectionMouseIds.map((id) => (
              <div className="flex items-center space-x-3">
                <Separator
                  className={`w-10 h-[2px] transition-all duration-500 ${
                    activeId === id ? 'w-16 bg-black dark:bg-white' : ''
                  }`}
                />
                <span
                  key={id}
                  className={`${
                    activeId === id ? 'opacity-100' : ''
                  } text-lg opacity-50 transition-all duration-500`}
                >
                  {id}
                </span>
              </div>
            ))}
          </nav>
          {/* <nav>
            <ul style={{ display: 'flex', gap: '1rem' }}>
              {sectionIds.map((id) => (
                <li
                  key={id}
                  style={{ fontWeight: activeId === id ? 'bold' : 'normal' }}
                >
                  {id}
                </li>
              ))}
            </ul>
          </nav> */}
        </section>
        <section>
          <div className="flex pb-10 pt-10">
            <div className="flex space-x-4">
              {SocialLink.map(({ src, url, alt }, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={alt}
                  className="size-7 opacity-50 hover:opacity-100 cursor-pointer dark:filter dark:invert"
                  onClick={() => window.open(url, '_blank')} // URL이 있을 때만 이동
                />
              ))}
            </div>
            <div className="hidden lg:flex flex-grow justify-center">
              <SwitchTheme />
            </div>
          </div>
        </section>
      </header>
      <main className="flex flex-col w-full overflow-hidden relative mb-[115px] gap-10">
        <div className="gradation bg-gradient-to-t from-transparent to-white/100 dark:to-[#0E172A]/100 fixed w-full top-0 lg:h-[100px] md:h-16 z-50"></div>
        <section className="w-full lg:pt-[70px]" id={sectionMouseIds[0]}>
          <p className="text-lg font-semibold lg:pt-7" id={sectionIds[0]}>
            About Me
          </p>
          {AboutMe.map((about, index) => (
            <Fragment key={index}>
              <br />
              <div className="opacity-70">{about}</div>
            </Fragment>
          ))}
        </section>
        <section className="w-full flex flex-col" id={sectionMouseIds[1]}>
          <p className="pt-7 text-lg font-semibold" id={sectionIds[1]}>
            EXPERIENCE
          </p>
          <div className="flex flex-col group">
            {ExData.map((ex, index) => (
              <Card
                sdate={ex.sdate}
                edate={ex.edate}
                title={ex.title}
                content={ex.content}
                stacks={ex.stacks}
                key={index}
                toNavigate={ex.toNavigate}
                className="py-8 lg:hover:!opacity-100 lg:group-hover:opacity-40 transition-opacity duration-500"
              />
            ))}
          </div>
          <div className="flex items-center py-6">
            <span className="flex items-center cursor-pointer group hover:underline underline-offset-4 decoration-blue-400">
              <Link href={'/experience'}>View Full Résumé </Link>
              <ArrowRight className="size-5 group-hover:ml-2 transition-all duration-300" />
            </span>
          </div>
        </section>
        <section className="w-full flex flex-col" id={sectionMouseIds[2]}>
          <p className="pt-7 text-lg font-semibold" id={sectionIds[2]}>
            PROJECTS
          </p>
          <div className="flex flex-col group">
            {ProjectsData.map((project, index) => (
              <Card
                title={project.title}
                content={project.content}
                stacks={project.stacks}
                intro={project.intro}
                key={index}
                toNavigate=""
                className="py-8 lg:hover:!opacity-100 lg:group-hover:opacity-40 transition-opacity duration-500"
              />
            ))}
          </div>
          <div className="flex items-center py-6">
            <span className="flex items-center cursor-pointer group hover:underline underline-offset-4 decoration-blue-400">
              <Link href={'/projects'}>View All Projects </Link>
              <ArrowRight className="size-5 group-hover:ml-2 transition-all duration-300" />
            </span>
          </div>
        </section>
        <div className="gradation bg-gradient-to-b from-transparent to-white/100 dark:to-[#0E172A]/100 fixed w-full bottom-0 h-[100px] z-50"></div>
      </main>
    </div>
  );
}
