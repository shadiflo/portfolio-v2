import { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: "pixelcut",
    title: "PixelCut",
    period: "2025-Present",
    description:
      "A powerful, private, and fast client-side media editor for image resizing, background removal (AI Cuts), banner creation, and video montage.",
    thumbnail: "/images/works/pixelcut.png",
    category: "web",
    platform: "Web App",
    stack: ["React", "FFmpeg.wasm", "@imgly/background-removal", "TailwindCSS"],
    website: "https://pixelcut.shadi.dev",
    features: [
      "AI-powered background removal (Cuts)",
      "Bulk image resizing and conversion",
      "Dynamic banner creator with layer management",
      "Client-side video trimming and montage",
    ],
    images: ["/images/works/pixelcut.png"],
    content: {
      intro: [
        "PixelCut is a comprehensive media processing suite built entirely with client-side technologies. It leverages WASM-based engines like FFmpeg and @imgly/background-removal to provide professional-grade tools without ever uploading user data to a server.",
        "The application features a sleek, modern interface designed for speed and ease of use, making batch processing of images and quick video edits accessible directly in the browser.",
      ],
      highlights: [
        "On-device AI background removal for images",
        "High-performance video concatenation and trimming using FFmpeg.wasm",
        "Advanced canvas-based banner creator with drag-and-drop support",
        "Zero-latency processing by keeping all operations client-side",
      ],
    },
  },
  {
    id: "demoparser",
    title: "FACEIT Demo Parser",
    period: "2024-Present",
    description: "A specialized tool for parsing FACEIT demo files to extract match data and listen to voice communications directly in the browser.",
    thumbnail: "/images/works/faceit.png",
    category: "esports",
    platform: "Web Tool",
    stack: ["Next.js", "Go", "FACEIT API", "Web Audio API"],
    website: "https://demo.shadi.dev",
    features: [
      "Demo parsing",
      "Voice comms playback",
      "Match data extraction",
      "Browser-based analysis",
    ],
    images: [],
    content: {
      intro: [
        "The FACEIT Demo Parser is a specialized web tool designed for competitive CS2 players and analysts. It allows users to parse FACEIT demo files directly in the browser to extract detailed match data.",
        "A key feature of this tool is the ability to extract and listen to voice communications from the match, providing deeper insights into team communication and coordination during gameplay.",
      ],
      highlights: [
        "Parse FACEIT demo files (.dem) directly in the browser",
        "Extract and playback voice communications from specific rounds",
        "Analyze match events and player statistics",
        "No dedicated software installation required",
      ],
    },
  },
  {
    id: "overlayovh",
    title: "Overlay.ovh",
    period: "2024-Present",
    description:
      "A Next.js platform providing professional overlays for League of Legends and FACEIT, featuring a custom Twitch extension for real-time player data.",
    thumbnail: "/images/works/overlayovh.png",
    category: "esports",
    platform: "Web / Twitch Extension",
    stack: ["Next.js", "TypeScript", "Twitch API", "FACEIT API"],
    website: "https://overlay.ovh",
    features: [
      "Dynamic League of Legends overlays",
      "Real-time FACEIT data integration",
      "Twitch Extension for live stats",
      "Customizable visual themes",
    ],
    images: ["/images/works/overlayovh.png"],
    content: {
      intro: [
        "Overlay.ovh is a specialized platform built with Next.js that provides high-quality, dynamic overlays for streamers in the League of Legends and FACEIT ecosystems.",
        "The project includes a robust Twitch extension that allows viewers to check live FACEIT data and game statistics directly within the stream interface, significantly enhancing viewer engagement.",
      ],
      highlights: [
        "Developed custom Next.js site for overlay management",
        "Built a Twitch Extension used by competitive streamers",
        "Seamless integration with FACEIT and League of Legends APIs",
        "Real-time data synchronization for live match tracking",
      ],
    },
  },
  {
    id: "discordbots",
    title: "Organization Discord Bots",
    period: "2023-Present",
    description:
      "Advanced Discord automation for tracking customer data and agent performance for various professional organizations.",
    thumbnail: "/images/works/discordbots.png",
    category: "web",
    platform: "Discord / Node.js",
    stack: ["Node.js", "Discord.js", "PostgreSQL", "Prisma"],
    features: [
      "Customer data tracking",
      "Agent performance metrics",
      "Automated reporting",
      "Organization management",
    ],
    images: ["/images/works/discordbots.png"],
    content: {
      intro: [
        "I've developed a suite of sophisticated Discord bots for multiple organizations to streamline their customer and agent data management.",
        "These bots serve as a central hub for tracking interactions, monitoring agent efficiency, and maintaining detailed customer records within the organization's Discord workspace.",
      ],
      highlights: [
        "Automated data collection and tracking systems",
        "Performance analytics for support agents",
        "Secure customer database integration",
        "Customizable notification and alert systems",
      ],
    },
  },
  {
    id: "livechat-extension",
    title: "LiveChat Efficiency Tool",
    period: "2024",
    description:
      "A combined browser extension and companion app designed to optimize workflow for agents handling customer livechats.",
    thumbnail: "/images/works/livechat.png",
    category: "web",
    platform: "Extension / Desktop",
    stack: ["React", "Chrome Extension API", "Node.js", "TailwindCSS"],
    features: [
      "Workflow optimization",
      "Quick-response templates",
      "Customer history search",
      "Live performance tracking",
    ],
    images: ["/images/works/livechat.png"],
    content: {
      intro: [
        "The LiveChat Efficiency Tool is a dual-component system consisting of a browser extension and a dedicated application aimed at maximizing the productivity of support agents.",
        "By integrating directly into livechat interfaces, it provides agents with instant access to customer data, history, and optimized response workflows, reducing resolution times and improving customer satisfaction.",
      ],
      highlights: [
        "Significantly reduced average response times for agents",
        "Centralized customer data access within the chat interface",
        "Custom workflow automation for repetitive tasks",
        "Integrated performance dashboard for real-time monitoring",
      ],
    },
  },
  {
    id: "esports-databases",
    title: "Esports Pro Databases",
    period: "2023-Present",
    description:
      "Comprehensive databases and tracking systems for CS2 professional players and organizational data.",
    thumbnail: "/images/works/databases.png",
    category: "esports",
    platform: "Web / API",
    stack: ["MongoDB", "Python", "Node.js", "Express"],
    features: [
      "Pro player tracking",
      "Historical data archives",
      "Performance metrics",
      "API access for partners",
    ],
    images: ["/images/works/databases.png"],
    content: {
      intro: [
        "I maintain and manage extensive databases dedicated to the CS2 professional scene, tracking everything from player transfers to historical match performance.",
        "These databases provide a critical data layer for various esports platforms and organizations that require accurate, up-to-date professional scene metrics.",
      ],
      highlights: [
        "Built large-scale data ingestion pipelines for CS2 stats",
        "Maintained high-availability databases for pro player records",
        "Developed custom APIs for data distribution to third parties",
        "Implemented detailed tracking for player movements and performance trends",
      ],
    },
  },
  {
    id: "superclub",
    title: "SuperClub.gg",
    period: "2023-Present",
    description:
      "A talent platform designed to help esports players showcase their skills and abilities with enhanced statistics and insights.",
    thumbnail: "/images/works/streamertool.png",
    category: "esports",
    platform: "Web",
    stack: ["React", "Node.js", "Faceit API", "MongoDB"],
    website: "https://superclub.gg",
    features: [
      "Player statistics",
      "Team management",
      "Performance tracking",
      "Talent showcasing",
    ],
    images: [
      "/images/works/streamertool.png",
      "/images/works/league.png",
      "/images/works/super.png",
    ],
    content: {
      intro: [
        "SuperClub.gg is a talent platform designed to help esports players showcase their skills and abilities. The platform offers various tools for players and organizations to improve performance and track progress, with a particular focus on integrating with Faceit API to provide enhanced statistics and insights.",
        "The platform serves as a hub for competitive gamers looking to advance their careers, with tools that make tracking progress and improvement easier for both individual players and organizations scouting new talent.",
      ],
      highlights: [
        "Comprehensive player profiles with detailed statistics",
        "Team formation and management tools",
        "Advanced analytics for performance improvement",
        "Integration with Faceit API for seamless data access",
        "Talent discovery system for organizations and teams",
      ],
    },
  },
  {
    id: "faceitvisuals",
    title: "FaceitVisuals",
    period: "2022-Present",
    description:
      "A Chrome extension designed to enhance the Faceit.com experience with additional features and tools. Over 10,000 users.",
    thumbnail: "/images/works/super.png",
    category: "esports",
    platform: "Chrome Extension",
    stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "Faceit API"],
    website: "https://chromewebstore.google.com/detail/faceit-visuals/ngcickocpcongeagbpkejabhkgmcildo",
    images: [
      "/images/works/super.png",
    ],
    content: {
      intro: [
        "FaceitVisuals is a Chrome extension designed to enhance the Faceit.com experience with additional features and tools. With over 10,000 users, this extension has become a popular tool in the competitive CS:GO community.",
        "The extension provides players with advanced statistics, enhanced visual elements, and quality-of-life improvements that aren't available on the standard Faceit platform.",
      ],
      highlights: [
        "Matchroom Elo Calculator - Calculate and display ELO statistics for all players in a match",
        "V.I.P. Badges - Custom badges to identify special users",
        "Ban History - Easy access to player ban records",
        "Matchroom Badges - Visual enhancements for the matchroom interface",
        "Steam Profile Integration - Adds Faceit information to Steam profiles",
        "Ongoing Development - New API functionalities being added regularly",
      ],
    },
  },
  {
    id: "outlawzcs",
    title: "OutlawzCS.net",
    period: "2000s-2010s",
    description:
      "One of the largest Italian Counter-Strike 1.6 communities, offering a complete gaming experience with multiple game servers, tournaments, and competitive leagues.",
    thumbnail: "/images/works/league.png",
    category: "community",
    platform: "Web, Game Servers",
    stack: [],
    features: [
      "Community forums",
      "Tournament system",
      "Player statistics",
      "Team management",
    ],
    images: [
      "/images/works/league.png",
    ],
    content: {
      intro: [
        "OutlawzCS.net was one of the largest Italian Counter-Strike 1.6 communities, offering a complete gaming experience with multiple game servers, tournaments, and competitive leagues with prize money.",
        "The community hosted 3 Counter-Strike 1.6 servers, 2 CS:GO public servers, and 1 CS:GO surf server. All servers were consistently at full capacity, with daily 10-man pickup games and organized tournament leagues offering cash prizes.",
      ],
      note:
        "OutlawzCS.net is no longer active but was a significant part of the Italian Counter-Strike community history. The website can still be partially viewed through Internet Archive's Wayback Machine.",
      highlights: [
        "Established one of Italy's most active Counter-Strike gaming communities",
        "Consistently maintained full servers with active player base",
        "Organized competitive leagues and tournaments with cash prizes",
        "Facilitated daily 10-man pickup games for competitive practice",
        "Managed multiple game servers across different CS versions and game modes",
      ],
    },
  },
  {
    id: "websites",
    title: "Local Business Websites",
    period: "Various Years",
    description:
      "Designed and developed websites for diverse local businesses and organizations including educational institutions and commercial businesses.",
    thumbnail: "/images/works/super.png",
    category: "web",
    platform: "Web",
    stack: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
    images: [],
    content: {
      intro: [
        "Throughout my freelance career, I've designed and developed websites for a diverse range of local businesses and organizations. These projects have included educational institutions like kindergartens and schools, as well as commercial businesses such as window manufacturers and retailers.",
        "Each project was approached with a customized solution based on the client's specific needs, target audience, and business goals. This portfolio represents my ability to adapt to different industries and create effective web presences for various types of organizations.",
      ],
      highlights: [
        "Education - Developed interactive websites for schools featuring student portals, event calendars, and resource libraries",
        "Kindergarten - Created child-friendly, colorful websites with parent information areas, photo galleries, and registration forms",
        "Manufacturing - Built product showcase websites for window manufacturers with detailed catalogs, quote request systems, and installation galleries",
        "Custom Solutions - Implemented tailored content management systems allowing clients to easily update their own website content",
      ],
    },
  },
];
