export type CardType = {
  title: string;
  content: string;
  toNavigate: string;
  sdate?: string;
  edate?: string;
  stacks?: string[];
  intro?: string | File;
  className?: string;
};
