export const profile = {
  name: "Florin Stefanescu",
  role: "IT Mechanic & Software Developer",
  location: "Milan, Italy",
  headline: "Software developer building practical tools for competitive gaming and esports.",
  avatar: "/images/shadiflo.jpg",
  github: "https://github.com/shadiflo",
  email: "stefanescuf@ymail.com",
  openTo: "Collaborations",
  signature: "Florin",
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python"] },
    { category: "Web", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
    { category: "APIs & platforms", items: ["FACEIT API", "Twitch API", "Chrome API"] },
    { category: "Data & media", items: ["MongoDB", "PostgreSQL", "Prisma", "FFmpeg.wasm"] },
  ],
  experience: {
    title: "Project-based software development",
    label: "Project-based",
    description:
      "Build and maintain practical products across esports, web apps, browser extensions, media editing, live overlays, and automation.",
  },
  about: [
    "I'm Florin, an IT mechanic and software developer based in Milan. I build practical tools around competitive gaming and esports, from browser-based media editing to tools for inspecting FACEIT demos, live overlays, and player stats.",
    "My projects often start with a small friction point: finding useful match data, making a stream overlay easier to manage, or turning a repetitive task into something people can use. I enjoy working across the interface and the systems behind it.",
  ],
} as const;
