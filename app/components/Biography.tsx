"use client";

import React from "react";

const timelineEvents = [
  {
    year: "Present",
    role: "Author & Speaker",
    description: "Continuing to write profound literary works and speaking at major conventions to inspire the next generation."
  },
  {
    year: "2015 - Present",
    role: "Director, Union Academy",
    description: "Leading an institution committed to academic excellence, leadership development, and character building."
  },
  {
    year: "2010 - Present",
    role: "Owner & CEO, Semay Multimedia",
    description: "Founded and expanded a premier media production company focused on impactful audio and visual content."
  },
  {
    year: "2005 - 2010",
    role: "Radio & TV Host",
    description: "Hosted highly influential broadcast programs that reached millions across Ethiopia."
  }
];

export default function Biography() {
  return (
    <section id="about" className="bg-[#FDFBF7] py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/hero-profile.jpg" 
              alt="Eyob Tsige Terefe" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold tracking-widest uppercase text-sm">Visionary Leader</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl mb-4">About The Author</p>
            <h2 className="text-4xl md:text-5xl font-['Impact',_sans-serif] uppercase text-[#1A1A1A] mb-6">Eyob Tsige Terefe</h2>
            <div className="space-y-4 text-[#1A1A1A]/70 text-lg leading-relaxed">
              <p>
                Eyob Tsige Terefe is a highly respected author, speaker, and media personality whose work has left an indelible mark on Ethiopian literature and thought leadership. 
              </p>
              <p>
                With a deep background in theology, psychology, and leadership, his writings and broadcasts bridge the gap between profound wisdom and practical daily living. He is the mastermind behind the "Eyob Bookstore", housing thousands of literary works.
              </p>
              <p>
                Through Semay Multimedia and Union Academy, he continues to build platforms that elevate educational and inspirational messaging for the next generation.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl">Legacy</p>
            <h3 className="mt-2 text-3xl font-['Impact',_sans-serif] uppercase text-[#1A1A1A]">Professional Timeline</h3>
          </div>

          <div className="relative border-l-2 border-[#8B0000]/20 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px] space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-8 group`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#8B0000] shadow-[0_0_0_4px_#FDFBF7,0_0_0_6px_rgba(139,0,0,0.2)] transition-all group-hover:scale-125 z-10"></div>
                
                {/* Content Box */}
                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 group-hover:shadow-md transition-shadow relative">
                    {/* Small arrow pointing to the dot */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-black/5 transform ${index % 2 === 0 ? 'right-[-8px] rotate-45' : 'left-[-8px] -rotate-135'}`}></div>
                    
                    <span className="inline-block px-3 py-1 bg-[#F5F0E6] text-[#8B0000] text-xs font-bold uppercase tracking-widest rounded-full mb-3">{event.year}</span>
                    <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">{event.role}</h4>
                    <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
