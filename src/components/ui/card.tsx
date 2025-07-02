'use client';

import { languageAtom } from '@/store/atom';
import { CardType } from '@/types/types';
import { useAtomValue } from 'jotai';
import { ArrowUpRight, Minus } from 'lucide-react';
import Image from 'next/image';
import { Button } from './button';

export default function Card({
  sdate,
  edate,
  title,
  content,
  stacks,
  intro,
  toNavigateTitle,
  toNavigateImg,
  className,
}: CardType) {
  const lang = useAtomValue(languageAtom);

  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          {sdate && (
            <div className="min-w-44">
              <span className="text-slate-500 text-sm font-semibold flex items-center">
                {sdate} <Minus strokeWidth={1} /> {edate}
              </span>
            </div>
          )}
          {intro && (
            <div
              className={`min-w-[160px] h-[120px] max-md:w-40 ${
                !sdate ? 'mt-9' : 'mt-3'
              } border-3 md:mr-10 border-black rounded-lg max-md:hidden ${
                toNavigateImg && 'cursor-pointer'
              } transition transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:dark:shadow-gray-950`}
            >
              <Image
                src={
                  typeof intro === 'string' ? intro : URL.createObjectURL(intro)
                }
                alt={title[lang]}
                onClick={() => {
                  if (toNavigateImg) {
                    window.open(toNavigateImg, '_blank');
                  }
                }}
                fill
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span
            id={`${title}-${toNavigateTitle}`}
            className={`flex items-center w-fit font-bold group/card ${
              toNavigateTitle && 'hover:text-green-400 cursor-pointer'
            }`}
            onClick={() => {
              if (toNavigateTitle) {
                window.open(toNavigateTitle, '_blank');
              }
            }}
          >
            {title[lang]}
            {toNavigateTitle && (
              <ArrowUpRight
                size={18}
                className="group-hover/card:translate-x-1 group-hover/card:-translate-y-0.5 transition-transform duration-500"
              />
            )}
          </span>
          <span className="text-sm py-3 ">{content[lang]}</span>
          <div className="flex items-center flex-wrap gap-2">
            {stacks?.map((item, index) => (
              <Button
                disabled
                variant={'stack'}
                size={'stack'}
                key={index}
                className="dark:bg-[#122737]"
              >
                <span className="dark:text-green-500">{item}</span>
              </Button>
            ))}
          </div>
        </div>
        {intro && (
          <div
            className={`md:hidden min-w-[160px] h-[120px] max-md:w-40 max-md:mt-2 border-3 md:mr-10 border-black rounded-lg ${
              toNavigateImg && 'cursor-pointer'
            } transition transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:dark:shadow-gray-950`}
          >
            <Image
              src={
                typeof intro === 'string' ? intro : URL.createObjectURL(intro)
              }
              alt={title[lang]}
              onClick={() => {
                if (toNavigateImg) {
                  window.open(toNavigateImg, '_blank');
                }
              }}
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
}
