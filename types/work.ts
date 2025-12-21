export interface Work {
  id: string;
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  category: "esports" | "web" | "desktop" | "education" | "community";
  platform?: string;
  stack?: string[];
  website?: string;
  features?: string[];
  images: string[];
  content: {
    intro: string[];
    highlights?: string[];
    note?: string;
  };
}
