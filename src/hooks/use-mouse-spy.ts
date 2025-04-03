import { useEffect, useState } from 'react';

type Props = {
  ids: string[];
};

export function useMouseSpy({ ids }: Props): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const isInside =
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom;

        if (isInside) {
          setActiveId(id);
          return;
        }
      }

      setActiveId(null); // 아무 섹션에도 안 들어갔을 때
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [ids]);

  return activeId;
}
