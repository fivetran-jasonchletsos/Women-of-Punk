export type Quote = {
  id: string;
  quote: string;
  speaker: string;
  source?: string;
  year?: number;
};

export const quotes: Quote[] = [];
