export interface MovieType {
  id: number;
  name: string;
  summary: string | null;
  image: {
    medium: string;
    original: string;
  } | null;
}