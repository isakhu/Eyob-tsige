"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F0E6] py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <p className="text-sm font-body font-bold uppercase tracking-[0.2em] text-[#8B0000] mb-2">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-display text-[#1A1A1A] mb-6 italic">Booking & Contact</h2>
            <p className="text-[#1A1A1A]/80 text-lg leading-relaxed mb-8 font-body">
              For speaking engagements, media appearances, literary inquiries, or questions about Union Academy and Semay Multimedia.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8B0000]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Email</h4>
                  <p className="text-[#1A1A1A]/70 text-sm mt-1">contact@eyobtsige.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8B0000]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#8B0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Location</h4>
                  <p className="text-[#1A1A1A]/70 text-sm mt-1">Hawassa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#FDFBF7] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-shadow" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#FDFBF7] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-shadow" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#FDFBF7] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-shadow" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-wider mb-2">Subject</label>
                <select className="w-full bg-[#FDFBF7] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-shadow appearance-none">
                  <option>Speaking Engagement</option>
                  <option>Book Inquiry</option>
                  <option>Media Interview</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#FDFBF7] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-shadow resize-none"></textarea>
              </div>
              
              <button className="w-full bg-[#1A1A1A] text-[#FDFBF7] font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#8B0000] transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
