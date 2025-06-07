import { LanguageType } from '@/types/types';
import { atom } from 'jotai';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'system';
  }
  return 'system';
};

export const themeAtom = atom(getInitialTheme());

export const languageAtom = atom<LanguageType>('ko');
