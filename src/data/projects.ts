export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  stack: string[];
  category: string;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "pixelcut",
    title: "PixelCut",
    description: "Client-side media editor for resizing images, removing backgrounds, creating banners, and assembling video montages.",
    url: "https://pixelcut.shadi.dev",
    stack: ["React", "FFmpeg.wasm", "Tailwind CSS"],
    category: "web",
    featured: true,
  },
  {
    id: "demoparser",
    title: "FACEIT Demo Parser",
    description: "Parse FACEIT demos, explore match data, and listen to voice communications directly in the browser.",
    url: "https://demo.shadi.dev",
    stack: ["Next.js", "Go", "FACEIT API"],
    category: "esports",
    featured: true,
  },
  {
    id: "overlayovh",
    title: "Overlay.ovh",
    description: "Professional overlays for League of Legends and FACEIT, with a Twitch extension.",
    url: "https://overlay.ovh",
    stack: ["Next.js", "TypeScript", "Twitch API"],
    category: "esports",
    featured: true,
  },
  {
    id: "superclub",
    title: "SuperClub.gg",
    description: "Esports talent platform with enhanced player statistics and insights.",
    url: "https://superclub.gg",
    stack: ["React", "Node.js", "MongoDB"],
    category: "esports",
    featured: true,
    image: "/superclub.png",
  },
  {
    id: "faceitvisuals",
    title: "FaceitVisuals",
    description: "Chrome extension enhancing FACEIT.com, used by more than 10,000 players.",
    url: "https://chromewebstore.google.com/detail/faceit-visuals/ngcickocpcongeagbpkejabhkgmcildo",
    stack: ["JavaScript", "Chrome API", "FACEIT API"],
    category: "esports",
    featured: true,
    image: "/visuals.png",
  },
  {
    id: "discordbots",
    title: "Organization Discord Bots",
    description: "Discord automation for customer data and agent performance tracking.",
    stack: ["Node.js", "Discord.js", "PostgreSQL", "Prisma"],
    category: "bots",
  },
  {
    id: "esports-databases",
    title: "Esports Pro Databases",
    description: "Professional CS2 player tracking and historical statistics archives.",
    stack: ["MongoDB", "Python", "Node.js", "Express"],
    category: "esports",
  },
  {
    id: "outlawzcs",
    title: "OutlawzCS.net",
    description: "Italian Counter-Strike 1.6 community with servers, tournaments, and leagues.",
    stack: [],
    category: "community",
  },
];
