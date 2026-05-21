export type Documentary = {
  slug: string;
  title: string;
  year: number;
  director?: string;
  /** Subject — the band, scene, or person */
  subject: string;
  /** Why this matters */
  why: string;
  poster?: string;
};

export const docs: Documentary[] = [];
