import { LanguageType } from '@/types/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'system';
  }
  return 'system';
};

const getLangAtom = (): LanguageType => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored) return stored as LanguageType;

    localStorage.setItem('language', 'ko');
    return 'ko';
  }

  return 'ko';
};

export const themeAtom = atom(getInitialTheme());

export const languageAtom = atomWithStorage<LanguageType>(
  'language',
  getLangAtom()
);
