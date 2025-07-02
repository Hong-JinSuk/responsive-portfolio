'use client';

import Card from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SwitchLang from '@/components/ui/switch-lang';
import SwitchTheme from '@/components/ui/switch-theme';
import {
  AboutMe,
  ExData,
  IntroduceMyself,
  ProjectsData,
  SocialLink,
} from '@/constant/data';
import { useMouseSpy } from '@/hooks/use-mouse-spy';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { languageAtom } from '@/store/atom';
import { useAtomValue } from 'jotai';
import { ArrowRight, ArrowUp, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const sectionIds = ['AboutMe', 'Experience', 'Projects'];
const sectionMouseIds = ['AboutMe', 'Experience', 'Projects'];

export default function Page() {
  const lang = useAtomValue(languageAtom);
  const activeScrollId = useScrollSpy({ ids: sectionIds, offset: 0 });
  const activeMouseId = useMouseSpy({ ids: sectionMouseIds });

  const activeId = activeMouseId ?? activeScrollId;

  return (
    <div className="flex flex-col lg:flex-row w-full h-full relative">
      {/* <div className="gradation bg-gradient-to-t from-transparent to-white/100 dark:to-[#0E172A]/100 fixed w-full top-0 lg:h-[100px] md:h-16 z-50"></div> */}
      <div className="gradation bg-gradient-to-t from-transparent to-white/100 dark:to-[#0c1528]/100 fixed w-full top-0 lg:h-[100px] md:h-16 z-50"></div>
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
            <span>{IntroduceMyself[lang]}</span>
          </div>
        </section>
        <section className="hidden lg:block h-full mb-20">
          <nav className="flex flex-col gap-2">
            {sectionMouseIds.map((id, index) => (
              <div
                className="flex items-center space-x-3"
                key={`${id}-${index}`}
              >
                <Separator
                  className={`w-10 h-[2px] transition-all duration-500 ${
                    activeId === id ? 'w-16 bg-black dark:bg-white' : ''
                  }`}
                />
                <span
                  className={`${
                    activeId === id ? 'opacity-100' : ''
                  } text-lg opacity-50 transition-all duration-500`}
                >
                  {id}
                </span>
              </div>
            ))}
          </nav>
        </section>
        <section>
          <div className="flex pb-10 pt-10">
            <div className="flex space-x-4">
              {SocialLink.map(({ icon, url, alt }, index) => (
                // url 없으면 안보여주는게 맞나?
                <Image
                  key={index}
                  src={icon.src}
                  alt={alt}
                  width={28}
                  height={28}
                  className={`opacity-50 cursor-pointer dark:filter dark:invert ${
                    !url
                      ? 'hover:opacity-50 cursor-default'
                      : 'hover:opacity-100'
                  }`}
                  onClick={() => {
                    if (url) {
                      window.open(url, '_blank');
                    }
                  }} // URL이 있을 때만 이동
                />
              ))}
            </div>
            <div className="hidden lg:flex flex-grow items-center gap-2 pl-52">
              <SwitchLang />
              <SwitchTheme />
            </div>
          </div>
        </section>
      </header>
      <main className="flex flex-col w-full overflow-hidden relative mb-[115px] gap-10">
        <section className="w-full lg:pt-[70px]" id={sectionMouseIds[0]}>
          <p className="text-lg font-semibold lg:pt-7" id={sectionIds[0]}>
            About Me
          </p>
          {AboutMe.map((about, index) => (
            <Fragment key={index}>
              <br />
              <div className="opacity-100">{about[lang]}</div>
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
                toNavigateTitle={ex.toNavigateTitle}
                className="py-8 md:hover:!opacity-100 md:group-hover:opacity-40 transition-opacity duration-500"
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
                sdate={project.sdate}
                edate={project.edate}
                title={project.title}
                content={project.content}
                stacks={project.stacks}
                intro={project.intro}
                key={index}
                toNavigateTitle={project.toNavigateTitle}
                toNavigateImg={project.toNavigateImg}
                className="py-8 md:hover:!opacity-100 md:group-hover:opacity-40 transition-opacity duration-500"
              />
            ))}
          </div>
          <div className="flex items-center justify-between py-6">
            <span className="flex items-center cursor-pointer group hover:underline underline-offset-4 decoration-blue-400">
              <Link href={'/projects'}>View All Projects </Link>
              <ArrowRight className="size-5 group-hover:ml-2 transition-all duration-300" />
            </span>
            <ArrowUp
              className="transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
        </section>
        {/* <div className="gradation bg-gradient-to-b from-transparent to-white/100 dark:to-[#0E172A]/100 fixed w-full bottom-0 h-[100px] z-50"></div> */}
        <div className="gradation bg-gradient-to-b from-transparent to-white/100 dark:to-[#0c1528]/100 fixed w-full bottom-0 h-[100px] z-50"></div>
      </main>
    </div>
  );
}
