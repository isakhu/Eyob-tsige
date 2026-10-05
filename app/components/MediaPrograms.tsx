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
  const videoRef = useRef<HTMLDivElement | null>(null);

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

    // Continuous floating animation for the mock video
    if (videoRef.current) {
      anime({
        targets: videoRef.current,
        translateY: [-10, 10],
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        duration: 3000,
      });
    }
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
          <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#D4A63A] text-xl">Broadcasting</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-['Impact',_sans-serif] uppercase">Radio & Television</h2>
          <p className="mt-4 max-w-2xl text-[#FDFBF7]/70 leading-relaxed">
            Produced by Semay Multimedia, Eyob's programs have been a staple of Ethiopian media, delivering profound insights directly into homes nationwide.
          </p>
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A63A]">{program.channel}</span>
              <h3 className="text-2xl font-['Impact',_sans-serif] uppercase mt-2 mb-3">{program.title}</h3>
              <p className="text-[#FDFBF7]/60 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Mock YouTube Video Embed */}
        <div 
          ref={videoRef}
          className="mt-16 rounded-2xl overflow-hidden border border-white/10 aspect-video bg-black relative flex items-center justify-center group cursor-pointer hover:border-white/30 transition-colors"
        >
          {/* This would be an iframe in a real production environment */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <div className="absolute bottom-6 left-6 z-10">
            <h4 className="font-['Impact',_sans-serif] tracking-wider text-xl">Watch: The Philosophy of Leadership</h4>
            <p className="text-sm text-white/70">Semay Multimedia • 1.2M Views</p>
          </div>
        </div>

      </div>
    </section>
  );
}
