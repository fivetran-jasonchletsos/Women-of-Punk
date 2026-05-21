export type Film = {
  slug: string;
  title: string;
  year: number;
  director: string;
  /** Why this film matters */
  why: string;
  poster?: string;
};

export const films: Film[] = [];
