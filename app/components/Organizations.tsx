import React from "react";

export default function Organizations() {
  return (
    <section id="organizations" className="bg-[#FDFBF7] py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl">Enterprises & Ventures</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-['Impact',_sans-serif] uppercase tracking-wide md:text-5xl text-[#1A1A1A]">
            Organizations I Lead
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bookstore */}
          <div className="flex flex-col rounded-3xl overflow-hidden border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1">
            <div className="h-64 grid grid-cols-2 gap-1 bg-[#F5F0E6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore1.png" alt="Eyob Tsige Bookstore" className="w-full h-full object-cover col-span-2 row-span-2" />
            </div>
            <div className="flex gap-1 h-32 mt-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore2.png" alt="Eyob Tsige Bookstore Interior" className="w-1/2 h-full object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore3.png" alt="Eyob Tsige Bookstore Detail" className="w-1/2 h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-['Impact',_sans-serif] uppercase text-[#1A1A1A]">Eyob Tsige Bookstore</h3>
              <p className="mt-4 text-[#1A1A1A]/70 leading-relaxed font-medium">
                A hub of knowledge, inspiration, and personal development. We provide a curated selection of books that empower minds and transform lives.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-bold text-[#8B0000]">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Located in Hawassa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>0968095969 / 0930150011</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a5.96 5.96 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <a href="https://t.me/EYOBBOOKSHAWASSA" target="_blank" rel="noopener noreferrer" className="hover:underline">@eyobbook</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {/* Semay Multimedia */}
            <div className="flex-grow flex flex-col justify-center rounded-3xl p-8 md:p-12 border border-black/5 bg-[#1A1A1A] text-[#FDFBF7] shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,#8B0000_0%,transparent_70%)] opacity-40"></div>
              <div className="relative z-10">
                <span className="text-[#D4A63A] text-sm font-bold tracking-[0.2em] uppercase">Owner & CEO</span>
                <h3 className="mt-2 text-3xl font-['Impact',_sans-serif] uppercase">Semay Multimedia</h3>
                <p className="mt-4 text-[#FDFBF7]/80 leading-relaxed font-medium">
                  A premier media production company dedicated to creating impactful, high-quality audio and visual content. We focus on elevating educational and inspirational messaging through state-of-the-art media.
                </p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#D4A63A]/50 text-[#D4A63A] font-bold uppercase tracking-wide hover:bg-[#D4A63A] hover:text-[#1A1A1A] transition-colors">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Union Academy */}
            <div className="flex-grow flex flex-col justify-center rounded-3xl p-8 md:p-12 border border-[#D4A63A]/30 bg-gradient-to-br from-white to-[#F5F0E6] shadow-[0_20px_50px_rgba(212,166,58,0.1)] transition-transform hover:-translate-y-1 relative">
              <span className="text-[#8B0000] text-sm font-bold tracking-[0.2em] uppercase">Director</span>
              <h3 className="mt-2 text-3xl font-['Impact',_sans-serif] uppercase text-[#1A1A1A]">Union Academy</h3>
              <p className="mt-4 text-[#1A1A1A]/70 leading-relaxed font-medium">
                An institution committed to academic excellence, leadership development, and character building. Empowering the next generation of leaders.
              </p>
              <div className="mt-8">
                <a href="https://unionacademy.edu.et" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-[#8B0000] hover:text-[#5C0000] underline decoration-2 underline-offset-4 transition-colors">
                  Visit Union Academy Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
