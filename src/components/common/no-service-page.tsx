'use client';

import { ImageList } from '@/assets/images';
import { Button } from '@/components/ui/button';
import {
  linkMessage,
  noServicePageMessage,
  notFoundToastMessage,
} from '@/constant/data';
import useToast from '@/hooks/use-toast';
import { languageAtom } from '@/store/atom';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NoServicePage() {
  const { toast } = useToast();
  const lang = useAtomValue(languageAtom);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted && notFoundToastMessage) {
      toast('info', `${noServicePageMessage[lang]}`);
    }
    if (!mounted) {
      setMounted(true);
    }
  }, [lang, mounted, toast]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-md:mt-16 md:mt-28 lg:mt-40 sm:space-y-4 lg:space-y-6">
      <div className="relative aspect-video h-52 sm:h-72 lg:h-96 max-lg:my-10">
        <Image
          src={ImageList.comming_soon.src}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 text-lg sm:text-xl lg:text-2xl">
        {/* <div className="flex flex-col">
          <span className="text-center">{noServicePageMessage[lang]}</span>
          <span className="text-center max-sm:hidden">
            {subNotFoundMessage[lang]}
          </span>
        </div> */}
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
