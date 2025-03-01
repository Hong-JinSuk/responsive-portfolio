'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SwitchTheme() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 서버 사이드 렌더링 방지 (Hydration 오류 해결)
  }

  const defaultTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="cursor-pointer">
      <Sun
        className={`size-7 opacity-50 hover:opacity-100 ${
          defaultTheme === 'dark' && 'hidden'
        }`}
        onClick={() => setTheme('dark')}
      />
      <Moon
        className={`size-7 opacity-50 hover:opacity-100 ${
          defaultTheme === 'light' && 'hidden'
        }`}
        onClick={() => setTheme('light')}
      />
    </div>
  );
}
