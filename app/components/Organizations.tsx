"use client";

import React, { useRef, useState } from "react";
import { bookstoreImages } from "../data/bookstoreImages";

export default function Organizations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
            <div className="h-64 w-full bg-[#F5F0E6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore1.png" alt="Eyob Tsige Bookstore" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#1A1A1A] p-4 text-center">
              <button 
                onClick={() => setShowGallery(true)}
                className="text-sm font-bold text-[#D4A63A] hover:text-white uppercase tracking-widest flex items-center justify-center w-full gap-2 transition-colors py-1"
              >
                View Full Book Gallery ({bookstoreImages.length} Books)
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </button>
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
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.34 3.94-1.36 5.61-1.57 2.6-4.48 4.21-7.53 4.06-2.52-.13-4.9-1.38-6.42-3.32-1.66-2.1-2.18-4.9-.99-7.3 1.05-2.11 3.12-3.66 5.48-4.04v4.06c-1.34.18-2.6.93-3.23 2.08-.82 1.5-.54 3.42.66 4.6 1.16 1.13 2.94 1.48 4.42.75 1.42-.71 2.27-2.19 2.27-3.79V.02z"/>
                  </svg>
                  <a href="https://tiktok.com/@eyobbookshawassa" target="_blank" rel="noopener noreferrer" className="hover:underline">@eyobbookshawassa</a>
                </div>
              </div>

              {/* Map Embed Section */}
              <div className="mt-8 rounded-xl overflow-hidden border border-black/10">
                <div className="bg-[#F5F0E6] p-3 text-center border-b border-black/10">
                  <h4 className="font-['Impact',_sans-serif] tracking-wider text-[#1A1A1A]">Eyob Bookstore</h4>
                  <p className="text-xs font-bold text-[#8B0000]">Hawassa, Ethiopia</p>
                </div>
                <div className="w-full h-[400px] md:h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7882532539334!2d38.474110074758265!3d7.043153492958963!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b145003352713d%3A0x5d0aa60f94ecc0df!2sEyob%20bookstore!5e1!3m2!1sen!2set!4v1791103034524!5m2!1sen!2set"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://www.google.com/maps?cid=6704381335968596191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#8B0000] px-6 py-3 text-sm font-bold text-[#FDFBF7] shadow hover:bg-[#5C0000] transition-colors uppercase tracking-wide"
                >
                  📍 Get Directions
                </a>
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

      {/* Fullscreen Gallery Grid */}
      {showGallery && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#FDFBF7] animate-[heroFadeUp_0.3s_ease-out_both]">
          <div className="flex items-center justify-between p-6 border-b border-black/10 bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
            <div>
              <h2 className="text-2xl font-['Impact',_sans-serif] uppercase text-[#1A1A1A] tracking-wider">Eyob Tsige Bookstore</h2>
              <p className="text-sm font-bold text-[#8B0000]">{bookstoreImages.length} Books Available</p>
            </div>
            <button 
              className="text-[#1A1A1A] hover:text-white hover:bg-[#8B0000] transition-colors p-2 bg-black/5 rounded-full"
              onClick={() => setShowGallery(false)}
              aria-label="Close gallery"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-[1600px] mx-auto">
              {bookstoreImages.map((filename, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all cursor-pointer bg-white" 
                  onClick={() => setSelectedImage(filename)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/images/books/eyob-books/${filename}`} 
                    alt={`Eyob Tsige Bookstore Book ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-[#8B0000]/0 group-hover:bg-[#8B0000]/20 transition-colors flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Single Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 md:p-8 animate-[heroFadeUp_0.2s_ease-out_both]"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 hover:bg-white/20 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Close fullscreen"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`/images/books/eyob-books/${selectedImage}`} 
              alt="Fullscreen Book Cover" 
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl" 
            />
          </div>
        </div>
      )}
    </section>
  );
}
