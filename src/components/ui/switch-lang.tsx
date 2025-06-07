import korea from '@/assets/images/korea.png';
import usa from '@/assets/images/usa.png';
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
        <Image
          src={korea}
          alt="South Korea"
          className="size-7"
          onClick={() => setLang('eng')}
        />
      ) : (
        <Image
          src={usa}
          alt="South Korea"
          className="size-7"
          onClick={() => setLang('ko')}
        />
      )}
    </div>
  );
}
