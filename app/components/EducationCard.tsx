"use client";

import { useRef, useState } from "react";

type EducationItem = {
  school: string;
  program: string;
  status: string;
  image?: string;
};

export default function EducationCard({ items }: { items: EducationItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!isUnlocked) {
    return (
      <div className="relative w-full max-w-7xl mx-auto px-4 flex justify-center py-8">
        <button 
          onClick={() => setIsUnlocked(true)}
          className="group relative flex flex-col items-center justify-center w-full max-w-2xl bg-[#1A1A1A] rounded-3xl border border-[#D4A63A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(212,166,58,0.2)] p-12 md:p-16 text-center"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[#F5F0E6] opacity-5 group-hover:opacity-10 transition-opacity" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,#8B0000_0%,transparent_70%)] opacity-30"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Lock Icon */}
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-8 group-hover:bg-[#8B0000] group-hover:border-[#8B0000] transition-colors duration-500">
              <svg className="w-10 h-10 text-[#D4A63A] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-display text-[#FDFBF7] tracking-wider mb-4">
              Academic Journey
            </h3>
            <p className="text-[#D4A63A] font-body text-lg md:text-xl mb-10 tracking-wide italic">
              {items.length} Degrees &amp; Certifications
            </p>
            
            <span className="inline-flex items-center gap-3 rounded-full bg-[#8B0000] px-8 py-4 text-sm font-bold text-white uppercase tracking-widest shadow-lg group-hover:bg-white group-hover:text-[#8B0000] transition-colors">
              Click to Unlock
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 animate-[heroFadeUp_0.8s_ease-out_both] opacity-0" style={{ animationFillMode: 'forwards' }}>
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
        
        {items.map((item, i) => (
          <div 
            key={i} 
            className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white rounded-3xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-lg group flex flex-col h-full"
          >
            {item.image ? (
              <div className="relative w-full h-48 shrink-0 overflow-hidden bg-[#F5F0E6] flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[#8B0000]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.school} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-[#F5F0E6] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#8B0000]/5">
                <svg className="w-16 h-16 text-[#8B0000]/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#8B0000]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5" />
                </svg>
              </div>
            )}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-display text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors line-clamp-2">{item.school}</h3>
              <p className="mt-4 text-[#1A1A1A]/80 text-lg font-body leading-relaxed flex-grow">{item.program}</p>
              <div className="mt-8 flex items-center pt-6 border-t border-black/5">
                <span className="inline-flex rounded-full bg-[#8B0000]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8B0000]">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Hidden on mobile, swipe is better) */}
      {items.length > 2 && (
        <div className="hidden md:flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-[#FDFBF7] shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            aria-label="Next"
            className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-[#FDFBF7] shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
