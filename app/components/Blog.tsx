import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Mindset in Leadership",
    excerpt: "Leadership begins in the mind. Before you can lead others, you must learn to lead yourself. Discover how cultivating a growth mindset transforms your ability to influence and inspire.",
    date: "October 1, 2026",
    category: "Leadership",
    readTime: "5 min read",
    image: "/images/hero-profile.jpg"
  },
  {
    id: 2,
    title: "Education as the Great Equalizer",
    excerpt: "True education goes beyond the classroom. It is the tool that breaks the chains of backwardness and opens the door to infinite possibilities. Here is why we must invest in quality education.",
    date: "September 15, 2026",
    category: "Education",
    readTime: "4 min read",
    image: "/images/books/bookstore2.png" // fallback image
  },
  {
    id: 3,
    title: "Navigating Life's Intersections",
    excerpt: "We often arrive at crossroads where we must choose between the easy path and the right path. Choosing the path less traveled requires courage but yields the greatest rewards.",
    date: "August 28, 2026",
    category: "Life & Wisdom",
    readTime: "6 min read",
    image: "/images/books/bookstore1.png" // fallback image
  }
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#F5F0E6] py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl">Articles & Insights</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-['Impact',_sans-serif] uppercase tracking-wide md:text-5xl text-[#1A1A1A]">
              Latest from the Blog
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 font-bold text-[#8B0000] hover:text-[#5C0000] transition-colors border-b-2 border-[#8B0000] pb-1">
            View All Posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5 transition-transform hover:-translate-y-2 group">
              <div className="h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-multiply" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4A63A]"></span>
                  <span className="text-[#1A1A1A]/50">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-['var(--font-pacifico)',_cursive] text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#8B0000] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#1A1A1A]/70 font-medium leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-black/5 text-sm font-medium text-[#1A1A1A]/50">
                  <span>{post.date}</span>
                  <a href="#" className="text-[#8B0000] hover:text-[#5C0000] flex items-center gap-1 font-bold">
                    Read <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
