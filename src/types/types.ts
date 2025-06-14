export type CardType = {
  title: {
    ko: string;
    eng: string;
  };
  content: {
    ko: string;
    eng: string;
  };
  toNavigateTitle?: string;
  toNavigateImg?: string;
  sdate?: string;
  edate?: string;
  stacks?: string[];
  intro?: string | File;
  className?: string;
};

export type LanguageType = 'ko' | 'eng';
