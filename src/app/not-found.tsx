'use client';

import icon404 from '@/assets/images/icon_404.png';
import { Button } from '@/components/ui/button';
import {
  linkMessage,
  notFoundMessage,
  notFoundToastMessage,
  subNotFoundMessage,
} from '@/constant/data';
import useToast from '@/hooks/use-toast';
import { languageAtom } from '@/store/atom';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const { toast } = useToast();
  const lang = useAtomValue(languageAtom);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      toast('error', notFoundToastMessage[lang]);
    }
  }, [mounted]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-md:mt-16 md:mt-28 lg:mt-40">
      <Image
        src={icon404}
        alt=""
        className="size-52 sm:size-72 lg:size-96 max-lg:my-10"
      />
      <div className="flex flex-col justify-center items-center space-y-4 text-lg sm:text-xl lg:text-2xl">
        <div className="flex flex-col">
          <span className="text-center">{notFoundMessage[lang]}</span>
          <span className="text-center max-sm:hidden">
            {subNotFoundMessage[lang]}
          </span>
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          onClick={() => router.push('/hong-jinsuk')}
        >
          <span className="text-center text-white text-sm sm:text-lg lg:text-xl">
            {linkMessage[lang]}
          </span>
        </Button>
      </div>
    </div>
  );
}
