"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

const programs = [
  {
    title: "Semay Multimedia",
    type: "Radio Broadcast",
    channel: "South FM 100.9",
    description: "Deep-dive interviews and theological discussions."
  }
];

export default function MediaPrograms() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate cards staggered entrance
    anime({
      targets: cardsRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      easing: "easeOutExpo",
      duration: 1200,
    });
  }, []);

  return (
    <section id="media" className="bg-[#1A1A1A] py-24 text-[#FDFBF7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#8B0000_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#D4A63A_0%,transparent_70%)] blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[11px] font-body uppercase tracking-[0.2em] text-[#D4A63A] font-bold">Broadcasting</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-[#FDFBF7]">Radio & Television</h2>
          <p className="mt-4 max-w-2xl text-[#FDFBF7]/80 leading-relaxed font-body">
            Produced by Semay Multimedia, Eyob&apos;s programs have been a staple of Ethiopian media, delivering profound insights directly into homes nationwide.
          </p>
          <div className="mt-8">
            <a href="/semay" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#D4A63A]/50 text-[#D4A63A] font-bold uppercase tracking-wide hover:bg-[#D4A63A] hover:text-[#1A1A1A] transition-colors text-xs">
              Visit Semay Multimedia Website
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-md mx-auto gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default opacity-0"
            >
              <div className="w-12 h-12 bg-[#8B0000]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {program.type.includes("Television") ? (
                  <svg className="w-6 h-6 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ) : program.type.includes("Radio") ? (
                  <svg className="w-6 h-6 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                ) : (
                  <svg className="w-6 h-6 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
              </div>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-[#D4A63A]">{program.channel}</span>
              <h3 className="text-2xl font-display mt-2 mb-3 text-white">{program.title}</h3>
              <p className="text-[#FDFBF7]/70 text-sm leading-relaxed font-body">{program.description}</p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
