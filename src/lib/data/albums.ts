export type Album = {
  slug: string;
  title: string;
  artist: string;
  year: number;
  label?: string;
  /** Why this record matters */
  why: string;
  cover?: string;
};

export const albums: Album[] = [];
