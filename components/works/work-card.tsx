import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Work } from "@/types/work";
import { useState } from "react";

interface WorkCardProps {
  work: Work;
}

const WorkCard = ({ work }: WorkCardProps) => {
  const [imageError, setImageError] = useState(false);

  const CardWrapper = work.website ? 'a' : 'div';
  const wrapperProps = work.website
    ? { href: work.website, target: "_blank", rel: "noopener noreferrer", className: "block h-full" }
    : { className: "block h-full cursor-default" };

  return (
    <CardWrapper {...wrapperProps}>
      <div className={`group h-full flex flex-col p-5 rounded-xl border border-white/10 bg-white/5 transition-all duration-200 ${work.website ? 'hover:scale-[1.02] hover:bg-white/10 hover:border-white/20' : ''}`}>
        <div className="flex flex-col gap-2">
          {/* Header with Icon & Title */}
          <div className="flex items-center gap-3">
            {/* Icon Logic */}
            <div className="shrink-0">
              {work.id === 'pixelcut' && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                </div>
              )}
              {work.id === 'superclub' && (
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-black/20">
                  <Image src="/superclub.png" alt="SuperClub" width={32} height={32} className="w-full h-full object-cover" />
                </div>
              )}
              {work.id === 'faceitvisuals' && (
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-black/20">
                  <Image src="/visuals.png" alt="FaceitVisuals" width={32} height={32} className="w-full h-full object-cover" />
                </div>
              )}
              {work.id === 'demoparser' && (
                <div className="w-8 h-8 rounded-lg bg-[#FF5500] flex items-center justify-center text-white shadow-lg shadow-[#FF5500]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3.5V20.5L19 12L5 3.5Z" /></svg>
                </div>
              )}
              {work.id === 'overlayovh' && (
                <div className="w-8 h-8 rounded-lg bg-[#302E31] flex items-center justify-center text-white shadow-lg shadow-[#302E31]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm-1.09 17.66c-3.13-.57-5.59-3.21-5.83-6.42l4.89 1.63c.27 1.44 1.35 2.65 2.78 3.12l-1.84 1.67zm7.59-3.96c-.95 2.82-3.59 4.88-6.68 4.88-.41 0-.81-.04-1.2-.11l2.36-2.14a3.996 3.996 0 0 0 5.52-2.63zm-.42-6.52c.62 1.34.86 2.82.65 4.29l-4.52-2.83c-.02-1.52-.89-2.85-2.18-3.55l6.05-2.02c.01.27.01.55 0 .82v1.29zM8.3 6.95a7.96 7.96 0 0 1 2.39-2.73l-.47 6.18c-1.42.34-2.58 1.42-3.04 2.79L4.1 9.77c.87-1.18 2.3-2.15 4.2-2.82z" />
                  </svg>
                </div>
              )}
              {work.id === 'discordbots' && (
                <div className="w-8 h-8 rounded-lg bg-[#5865F2] flex items-center justify-center text-white shadow-lg shadow-[#5865F2]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.12-9.23-1.69-19.14-5.26-28.1C117.76,33.09,112.55,20.06,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                </div>
              )}
              {/* Default fallback for others if needed, or render nothing */}
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-between">
              <p className="font-semibold text-white/90 text-base truncate">
                {work.title}
              </p>
              {/* External Link Icon */}
              {work.website && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M7 17l9.2-9.2M17 8v9M8 8h9" /></svg>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mt-1">
            {work.description}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default WorkCard;
