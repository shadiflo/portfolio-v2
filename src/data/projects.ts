export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  stack: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: 'pixelcut',
    title: 'PixelCut',
    description: 'Client-side media editor — resize, remove backgrounds, create banners, video montage.',
    url: 'https://pixelcut.shadi.dev',
    stack: ['React', 'FFmpeg.wasm', 'TailwindCSS'],
    category: 'web',
  },
  {
    id: 'demoparser',
    title: 'FACEIT Demo Parser',
    description: 'Parse FACEIT demos, extract match data and listen to voice comms in browser.',
    url: 'https://demo.shadi.dev',
    stack: ['Next.js', 'Go', 'FACEIT API'],
    category: 'esports',
  },
  {
    id: 'overlayovh',
    title: 'Overlay.ovh',
    description: 'Professional overlays for LoL and FACEIT with a Twitch extension.',
    url: 'https://overlay.ovh',
    stack: ['Next.js', 'TypeScript', 'Twitch API'],
    category: 'esports',
  },
  {
    id: 'superclub',
    title: 'SuperClub.gg',
    description: 'Esports talent platform with enhanced player statistics and insights.',
    url: 'https://superclub.gg',
    stack: ['React', 'Node.js', 'MongoDB'],
    category: 'esports',
  },
  {
    id: 'faceitvisuals',
    title: 'FaceitVisuals',
    description: 'Chrome extension enhancing Faceit.com — 10K+ users.',
    url: 'https://chromewebstore.google.com/detail/faceit-visuals/ngcickocpcongeagbpkejabhkgmcildo',
    stack: ['JavaScript', 'Chrome API', 'FACEIT API'],
    category: 'esports',
  },
  {
    id: 'discordbots',
    title: 'Organization Discord Bots',
    description: 'Advanced Discord automation for customer data and agent performance tracking.',
    stack: ['Node.js', 'Discord.js', 'PostgreSQL', 'Prisma'],
    category: 'bots',
  },
  {
    id: 'esports-databases',
    title: 'Esports Pro Databases',
    description: 'CS2 professional player tracking and historical data archives.',
    stack: ['MongoDB', 'Python', 'Node.js', 'Express'],
    category: 'esports',
  },
  {
    id: 'outlawzcs',
    title: 'OutlawzCS.net',
    description: 'One of the largest Italian CS 1.6 communities — servers, tournaments, leagues.',
    stack: [],
    category: 'community',
  },
];
