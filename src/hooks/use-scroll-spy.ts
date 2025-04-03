import { useEffect, useState } from 'react';

type Props = {
  ids: string[];
  offset?: number;
};

export function useScrollSpy({ ids, offset = 100 }: Props) {
  const [activeId, setActiveId] = useState<string | null>();

  useEffect(() => {
    const handleScroll = () => {
      let closestId: string | null = null;
      let minDistance = Infinity;

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      setActiveId(closestId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 렌더 시 체크

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
