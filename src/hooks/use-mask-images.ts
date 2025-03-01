import { useEffect, useState } from 'react';

/**
 * @param {number} fadeHeight 흐려지는 높이 (default: 40px)
 * @returns {string} mask-image 스타일 값
 */
export function useMaskImage(fadeHeight: number = 40) {
  const [maskStyle, setMaskStyle] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newMask = `linear-gradient(to bottom, rgba(0,0,0,0) ${scrollY}px, rgba(0,0,0,1) ${
        scrollY + fadeHeight
      }px)`;
      setMaskStyle(newMask);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeHeight]); // fadeHeight 변경 시 업데이트

  return maskStyle;
}
