'use client';

import { CardType } from '@/types/types';
import { Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './button';

export default function Card({
  sdate,
  edate,
  title,
  content,
  stacks,
  intro,
  toNavigate,
  className,
}: CardType) {
  const router = useRouter();

  const navigate = (toNavigate: string) => {
    router.push(`/${toNavigate}`);
  };

  return (
    <div className={`flex flex-col lg:flex-row ${className}`}>
      <div className="flex flex-col md:flex-row">
        {sdate && (
          <div className="min-w-44">
            <span className="text-slate-500 text-sm font-semibold flex items-center">
              {sdate} <Minus strokeWidth={1} /> {edate}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <span
            className={`w-fit cursor-pointer  font-bold ${
              toNavigate ? 'hover:text-blue-800' : ''
            }`}
            onClick={() => {
              if (toNavigate) {
                navigate('hong-jinsuk');
              }
            }}
          >
            {title}
          </span>
          <span className="text-sm py-3 ">{content}</span>
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
          <img
            src={typeof intro === 'string' ? intro : URL.createObjectURL(intro)}
            alt={title}
            className="w-56 border-3 md:mr-10 border-black rounded-lg aspect-[3/2] md:order-first"
          />
        )}
      </div>
      {/* <Separator /> */}
    </div>
  );
}
