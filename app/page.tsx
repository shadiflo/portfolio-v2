"use client";

import React, { useEffect } from "react";
import { Github, Twitter } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { works } from "./works/data";
import WorkCard from "@/components/works/work-card";

const Home = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/shadiflo", icon: Github },
    { name: "Twitter", href: "https://twitter.com/superclubgg", icon: Twitter },
    { name: "Discord", href: "https://discord.gg/cYAYpWhdb8", icon: SiDiscord },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-sky-500/30 lg:flex">
      {/* Background Grid - Fixed */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* LEFT SIDE - Fixed Header/Bio */}
      <header className="lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-hidden flex flex-col justify-center px-6 py-16 lg:px-20 xl:px-32 z-10 transition-all duration-1000">
        <div className="space-y-8 max-w-lg">
          {/* Profile Pic */}
          <div
            className={`transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src="/images/shadiflo.jpg"
                alt="Florin Stefanescu"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`space-y-2 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
              Florin Stefanescu
            </h1>
            <h2 className="text-xl sm:text-2xl text-sky-400 font-medium tracking-tight">
              IT Mechanic
            </h2>
          </div>

          <div
            className={`transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center gap-1 mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 text-white/50 lg:h-5 lg:w-5">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              <span className="text-white/50">Milan</span>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-base sm:text-lg text-white/50 leading-relaxed font-light">
              I'm a software developer building tools and platforms for competitive gaming.
              I focus on creating reliable and efficient systems for esports communities.
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`flex gap-4 pt-4 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-sky-400 transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* RIGHT SIDE - Scrollable Projects */}
      <main className="lg:w-1/2 px-6 py-16 lg:py-24 z-10" id="works">
        <div className="space-y-12 max-w-xl mx-auto lg:mx-0 lg:max-w-none lg:pr-20 xl:pr-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${600 + (index * 100)}ms` }}
              >
                <WorkCard work={work} />
              </div>
            ))}
          </div>

          {/* Simple Footer Text */}
          <div className="pt-20 pb-8 text-center lg:text-left text-xs text-white/20 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Florin Stefanescu
          </div>
        </div>
      </main>
    </div>
  );
};


export default Home;
