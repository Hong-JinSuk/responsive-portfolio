import { ImageList } from '@/assets/images';
import { languageAtom } from '@/store/atom';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SwitchLang() {
  const [lang, setLang] = useAtom(languageAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 서버 사이드 렌더링 방지 (Hydration 오류 해결)
  }

  return (
    <div className="cursor-pointer">
      {lang === 'ko' ? (
        <div className="relative size-7">
          <Image
            src={ImageList.koreaFlag.src}
            alt="South Korea"
            className="size-7"
            onClick={() => setLang('eng')}
            fill
          />
        </div>
      ) : (
        <div className="relative size-7">
          <Image
            src={ImageList.usaFlag.src}
            alt="South Korea"
            onClick={() => setLang('ko')}
            fill
          />
        </div>
      )}
    </div>
  );
}
