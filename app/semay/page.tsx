import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semay Multimedia | Media Production & Broadcasting",
  description: "A premier media production company in Ethiopia dedicated to creating impactful, high-quality audio and visual content.",
};

export default function SemayMultimediaPage() {
  return (
    <main className="min-h-[100svh] bg-[#111111] text-[#FDFBF7] selection:bg-[#D4A63A] selection:text-[#111111]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[radial-gradient(circle_at_top_right,#8B0000_0%,transparent_70%)] border border-white/20 flex items-center justify-center">
              <span className="font-display font-bold text-lg leading-none">S</span>
            </div>
            <span className="font-display text-xl font-bold tracking-widest uppercase">Semay</span>
          </div>
          <Link href="/" className="text-xs font-body font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#D4A63A] transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Eyob Tsige
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111111] z-10 opacity-70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-[#111111] z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
            alt="Studio setup" 
            className="w-full h-full object-cover filter grayscale opacity-50"
          />
        </div>

        {/* Floating glow effects */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#8B0000]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[#D4A63A]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[#D4A63A] text-sm font-body font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[#D4A63A]"></span>
              Media & Broadcasting
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.1] mb-8">
              Elevating the <br />
              <span className="italic text-white/70">Ethiopian</span> Voice.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-body font-light leading-relaxed mb-12 max-w-2xl">
              A premier production house dedicated to creating impactful audio and visual content that empowers minds and transforms lives.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-[#D4A63A] text-[#111111] px-8 py-4 text-xs font-body font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Explore Services
              </a>
              <a href="#contact" className="bg-white/5 border border-white/20 text-white px-8 py-4 text-xs font-body font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">Our Expertise</h2>
            <div className="w-full h-px bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 bg-[#8B0000]/20 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h3 className="text-2xl font-display text-white mb-4">Radio Production</h3>
              <p className="text-white/60 font-body leading-relaxed text-sm">
                State-of-the-art studio recording and broadcast syndication for national radio programs, including deep-dive interviews and theological discussions.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 bg-[#8B0000]/20 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-display text-white mb-4">Television & Video</h3>
              <p className="text-white/60 font-body leading-relaxed text-sm">
                High-definition video production, multi-camera setups, and post-production editing for television shows, documentaries, and digital content.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 bg-[#8B0000]/20 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#D4A63A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" /></svg>
              </div>
              <h3 className="text-2xl font-display text-white mb-4">Content Strategy</h3>
              <p className="text-white/60 font-body leading-relaxed text-sm">
                Strategic media planning, scriptwriting, and creative direction to ensure your message reaches and impacts the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Show Section */}
      <section className="py-24 border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video bg-white/5 border border-white/10 group cursor-pointer overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-20 group-hover:scale-110 transition-transform border border-white/20">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div>
            <p className="text-sm font-body font-bold uppercase tracking-[0.2em] text-[#8B0000] mb-4">Featured Program</p>
            <h3 className="text-4xl font-display text-white mb-6">The Philosophy of Leadership</h3>
            <p className="text-white/60 font-body leading-relaxed mb-8">
              Hosted by Eyob Tsige Terefe on South FM 100.9, this weekly broadcast reaches millions across the nation, offering profound insights into leadership, ethics, and personal development.
            </p>
            <div className="flex items-center gap-4 text-sm font-body font-medium text-white/80">
              <span className="px-3 py-1 bg-white/10 rounded-full">Radio Broadcast</span>
              <span className="px-3 py-1 bg-white/10 rounded-full">Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-widest uppercase mb-2">Semay Multimedia</h2>
            <p className="text-white/50 font-body text-sm">Hawassa, Ethiopia</p>
          </div>
          <div className="flex gap-8 text-sm font-body font-bold tracking-widest uppercase text-white/60">
            <a href="mailto:contact@eyobtsige.com" className="hover:text-[#D4A63A] transition-colors">Email Us</a>
            <Link href="/" className="hover:text-[#D4A63A] transition-colors">Main Website</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
