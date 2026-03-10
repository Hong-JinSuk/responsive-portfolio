'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom'; // 1. flushSync 추가

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

  const handleThemeChange = (newTheme: string) => {
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <div className="cursor-pointer">
      <Sun
        className={`size-7 opacity-50 hover:opacity-100 ${
          defaultTheme === 'dark' ? 'hidden' : ''
        }`}
        onClick={() => handleThemeChange('dark')}
      />
      <Moon
        className={`size-7 opacity-50 hover:opacity-100 ${
          defaultTheme === 'light' ? 'hidden' : ''
        }`}
        onClick={() => handleThemeChange('light')}
      />
    </div>
  );
}
