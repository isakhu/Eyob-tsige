"use client";

import { useRef } from "react";

type EducationItem = {
  school: string;
  program: string;
  status: string;
  image?: string;
};

export default function EducationCard({ items }: { items: EducationItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        
        {items.map((item, i) => (
          <div 
            key={i} 
            className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white rounded-3xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-lg group flex flex-col h-full"
          >
            {item.image ? (
              <div className="relative w-full h-48 shrink-0 overflow-hidden bg-[#F5F0E6]">
                <div className="absolute inset-0 bg-[#8B0000]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.school} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors line-clamp-2">{item.school}</h3>
              <p className="mt-4 text-[#1A1A1A]/80 text-lg leading-relaxed flex-grow">{item.program}</p>
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
