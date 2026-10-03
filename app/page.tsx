import ProverbCarousel from "./components/ProverbCarousel";
import { proverbs } from "./data/proverbs";
import { blogPosts } from "./data/blog";

const education = [
  {
    school: "Dilla University",
    program: "Master of Arts in Counseling Psychology",
    status: "Class of 2019",
    image: "/images/education/dilla.jpg",
  },
  {
    school: "Hawassa University",
    program: "Master of Arts in Educational Leadership and Management",
    status: "Class of 2014",
    image: "/images/education/hawassa.jpg",
  },
  {
    school: "Otto-Friedrich-Universität Bamberg",
    program: "Master of Arts in Educational Quality",
    status: "Graduated",
    image: "/images/education/bamberg.jpg",
  },
  {
    school: "Jimma University",
    program: "BSc in Business Administration and Information Systems",
    status: "Class of 2012",
    image: "/images/education/jimma.jpg",
  },
  {
    school: "HiLCoE School of Computer Science and Technology",
    program: "BSc in Computer Science",
    status: "Class of 2009",
    image: "/images/education/hilcoe.jpg",
  },
  {
    school: "Kotebe University of Education",
    program: "Mathematics major, Physics minor",
    status: "Class of 2000",
    image: "/images/education/kotebe.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#181818] text-[#F5E6CC] min-h-screen font-sans selection:bg-[#E00000] selection:text-[#FFFFFF]">
      {/* Fixed Top Header with Logo (stays in place while scrolling) */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 md:h-20">
          <a href="#" aria-label="Eyob Tsige Terefe — Home" className="group flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-mark.png"
              alt="ET logo"
              className="h-10 w-auto mix-blend-screen transition-transform duration-500 group-hover:scale-105 md:h-12"
            />
            <span className="flex flex-col leading-none font-['Georgia',_'Times_New_Roman',_serif]">
              <span className="text-base font-bold tracking-[0.12em] md:text-lg">
                <span className="text-white">EYOB </span>
                <span className="bg-[linear-gradient(180deg,#F7D774,#C9952B)] bg-clip-text text-transparent">TSIGE</span>
              </span>
              <span className="mt-1 flex items-center gap-2 text-[10px] tracking-[0.45em] text-white/80">
                <span className="h-px w-4 bg-[#D4A63A]" />
                TEREFE
                <span className="h-px w-4 bg-[#D4A63A]" />
              </span>
            </span>
          </a>
          <a
            href="#work"
            className="hidden rounded-full bg-[#E00000] px-6 py-2.5 text-xs text-white uppercase tracking-widest font-['Impact',_sans-serif] shadow-[0_0_15px_rgba(224,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#aa0000] md:inline-block"
          >
            Explore Work
          </a>
        </div>
        {/* Thin accent line */}
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#D4A63A_30%,#E00000_70%,transparent)] opacity-60" />
      </header>

      {/* Floating Glass Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Main Pill */}
        <nav className="flex items-center gap-3 px-6 py-4 rounded-full bg-[#181818]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="Home">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          <a href="#about" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="About">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </a>
          <a href="#work" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="Work">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.982-2 1.982H5.75c-1.104 0-2-.888-2-1.982v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </a>
          <a href="#education" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="Education">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </a>
          <a href="#community" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="Community Space">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </a>
          <a href="#opinions" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white" aria-label="Opinions & Reflections">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </a>
        </nav>
        {/* Search Circle */}
        <button aria-label="Search" className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#181818]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:bg-white/10 transition-colors text-white/80 hover:text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        {/* Background portrait */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-profile.jpg"
          alt="Eyob Tsige Terefe speaking with a microphone"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center] md:object-right animate-[heroZoom_18s_ease-out_forwards]"
        />
        {/* Readability overlays: dark fade from the left + blend into page at the bottom */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#181818_0%,rgba(24,24,24,0.92)_30%,rgba(24,24,24,0.45)_58%,rgba(24,24,24,0)_80%)] max-md:bg-[linear-gradient(0deg,#181818_10%,rgba(24,24,24,0.85)_45%,rgba(24,24,24,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#181818,transparent)]" />
        {/* Subtle crimson glow to tie the photo into the red theme */}
        <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[#E00000]/25 blur-[140px]" />

        <div className="mx-auto w-full max-w-6xl px-6 pb-40 pt-[45vh] md:py-32">
        <div className="flex max-w-xl flex-col justify-center animate-[heroFadeUp_1s_ease-out_both]">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#E00000]">
            <span className="h-[2px] w-10 bg-[#E00000]" />
            Educator · Media · Leadership
          </p>
          <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-normal font-['Impact',_sans-serif] text-[#F5E6CC] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Eyob Tsige<br />Terefe
          </h1>
          <p className="mt-7 max-w-2xl leading-relaxed text-[#F5E6CC]/80 font-['var(--font-pacifico)',_cursive] text-3xl">
            Education, Media & Leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded bg-[#E00000] px-8 py-3.5 text-sm font-bold text-[#FFFFFF] shadow-[0_0_15px_rgba(224,0,0,0.5)] hover:bg-[#aa0000] transition-all hover:-translate-y-1 font-['Impact',_sans-serif] uppercase tracking-wide">
              Explore his work
            </a>
            <a href="#education" className="rounded border-2 border-[#E00000] bg-[#181818]/40 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-[#F5E6CC] hover:bg-[#E00000]/20 transition-colors font-['Impact',_sans-serif] uppercase tracking-wide">
              Education
            </a>
          </div>

          {/* Based-in glass card */}
          <div className="mt-12 flex max-w-lg flex-col gap-4 rounded-xl border border-white/10 border-l-4 border-l-[#E00000] bg-[#181818]/55 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <p className="text-xs text-[#E00000] tracking-[0.2em] uppercase font-['Impact',_sans-serif]">Based in</p>
              <p className="mt-1 text-2xl font-['var(--font-pacifico)',_cursive] text-[#FFFFFF]">Hawassa, Ethiopia</p>
            </div>
            <div className="space-y-2 text-sm leading-relaxed text-[#F5E6CC]/85 font-medium sm:border-l sm:border-white/10 sm:pl-8">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 shrink-0 bg-[#E00000] rotate-45"></span>
                Owner & CEO, SEMAY Multimedia
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 shrink-0 bg-[#E00000] rotate-45"></span>
                Director, Union Academy
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y border-[#F5E6CC]/10 bg-[#000000]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Profile</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-['Impact',_sans-serif] uppercase tracking-wide md:text-5xl text-[#F5E6CC] leading-tight">
            Education, media, and institutional leadership.
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#F5E6CC]/80">
            Eyob Tsige Terefe is the Owner and CEO of SEMAY Multimedia and
            Promotion, working in radio and television programs. He is also
            director of Union Academy in Hawassa, an educational hub in Hawassa
            serving learners from kindergarten through Grade 12 and recently up to college.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Professional work</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="group rounded border border-[#E00000]/30 bg-[#000000] p-10 transition-all hover:bg-[#E00000]/10 hover:shadow-[0_10px_30px_rgba(224,0,0,0.2)]">
            <p className="text-sm font-bold text-[#E00000] tracking-wider uppercase font-['Impact',_sans-serif]">Owner & CEO</p>
            <h3 className="mt-4 text-4xl font-['var(--font-pacifico)',_cursive] text-[#F5E6CC]">SEMAY Multimedia and Promotion</h3>
            <p className="mt-6 text-lg leading-relaxed text-[#F5E6CC]/70">
              Radio and television programs, multimedia, and promotional work.
            </p>
          </article>
          <article className="group rounded border border-[#E00000]/30 bg-[#000000] p-10 transition-all hover:bg-[#E00000]/10 hover:shadow-[0_10px_30px_rgba(224,0,0,0.2)]">
            <p className="text-sm font-bold text-[#E00000] tracking-wider uppercase font-['Impact',_sans-serif]">Manager · Since September 9, 2010</p>
            <h3 className="mt-4 text-4xl font-['var(--font-pacifico)',_cursive] text-[#F5E6CC]">Union Academy</h3>
            <p className="mt-6 text-lg leading-relaxed text-[#F5E6CC]/70">
              An academy in Hawassa serving students from kindergarten through Grade 12.
            </p>
          </article>
        </div>
      </section>

      {/* Community Space Section */}
      <section id="community" className="border-t border-[#F5E6CC]/10 bg-[#050505] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
              <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Community Space</p>
              <h2 className="mt-4 text-5xl md:text-6xl font-['Impact',_sans-serif] uppercase tracking-wide text-[#F5E6CC]">
                Eyob Books Hawassa
              </h2>
              <p className="mt-4 text-3xl font-['var(--font-pacifico)',_cursive] text-[#E00000]">
                Coffee to Read
              </p>
              <p className="mt-6 text-2xl md:text-3xl leading-relaxed text-[#F5E6CC]/90 font-medium">
                በምቹ ስፍራ ያሻችሁን መርጣችሁ በነፃ አንብቡ።
              </p>
              <p className="mt-3 text-lg text-[#F5E6CC]/60 italic">
                Choose what you want in a comfortable place and read for free.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-[#E00000] bg-[#E00000]/10 text-center font-bold text-[#F5E6CC] shadow-[0_0_30px_rgba(224,0,0,0.3)] font-['Impact',_sans-serif] tracking-widest text-lg uppercase rotate-12">
                Free<br/>Reading
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl border border-[#E00000]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group aspect-[3/4] md:aspect-auto md:h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore1.png" alt="Coffee to Read Hawassa Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-[#F5E6CC] font-bold tracking-wider uppercase text-sm border-b border-[#E00000] pb-1">Quiet Atmosphere</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-[#E00000]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group aspect-[3/4] md:aspect-auto md:h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore2.png" alt="Eyob reading a book" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-[#F5E6CC] font-bold tracking-wider uppercase text-sm border-b border-[#E00000] pb-1">Extensive Collection</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-[#E00000]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group aspect-[3/4] md:aspect-auto md:h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/books/bookstore3.png" alt="Relaxing and reading" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-[#F5E6CC] font-bold tracking-wider uppercase text-sm border-b border-[#E00000] pb-1">Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proverbs Section */}
      <section className="border-y border-[#F5E6CC]/10 bg-[#181818] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Words of Wisdom</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-['var(--font-pacifico)',_cursive] text-[#F5E6CC]">
              Proverbs & Wisdom
            </h2>
          </div>
          <ProverbCarousel items={proverbs} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-[#000000] text-[#F5E6CC]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Education</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-['Impact',_sans-serif] uppercase tracking-wide md:text-5xl text-[#F5E6CC]">
              An interdisciplinary academic path.
            </h2>
          </div>
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((item) => (
              item.image ? (
                <div key={item.school} className="relative flex overflow-hidden rounded border border-[#E00000]/50 shadow-lg transition-transform duration-500 hover:-translate-y-2 group">
                  <div className="absolute inset-0 bg-[#E00000]/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={`${item.school} - ${item.program}`} className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105" />
                </div>
              ) : (
                <div key={item.school} className="relative flex flex-col justify-center overflow-hidden rounded bg-[#181818] p-10 border border-[#E00000]/30 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:border-[#E00000] min-h-[400px]">
                  <h3 className="text-[#F5E6CC] text-3xl font-['var(--font-pacifico)',_cursive] text-center leading-snug">{item.school}</h3>
                  <div className="my-6 h-1 w-16 bg-[#E00000] mx-auto" />
                  <p className="text-[#F5E6CC]/90 text-center text-lg leading-relaxed font-medium">{item.program}</p>
                  
                  <div className="mt-auto pt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#E00000] font-['Impact',_sans-serif]">
                    {item.status}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Opinions Section */}
      <section id="opinions" className="border-t border-[#F5E6CC]/10 bg-[#111111] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#E00000] text-xl">Thoughts & Perspectives</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-['var(--font-pacifico)',_cursive] text-[#F5E6CC]">
                Opinions & Reflections
              </h2>
            </div>
            <button className="shrink-0 text-sm font-bold uppercase tracking-widest text-[#E00000] hover:text-[#FFFFFF] transition-colors flex items-center gap-2 group">
              View all thoughts
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-[#181818] rounded-xl overflow-hidden border border-[#E00000]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 hover:border-[#E00000]/50 hover:shadow-[0_10px_30px_rgba(224,0,0,0.15)]">
                {post.image && (
                  <div className="relative h-56 overflow-hidden bg-[#000000]">
                    <div className="absolute inset-0 bg-[#E00000]/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <time className="text-xs font-bold uppercase tracking-widest text-[#E00000] mb-4">
                    {post.date}
                  </time>
                  <h3 className="text-2xl font-bold text-[#F5E6CC] leading-tight mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#F5E6CC]/70 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5E6CC] group-hover:text-[#E00000] transition-colors">
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#F5E6CC]/10 bg-[#181818]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-[#F5E6CC]/60 md:flex-row md:items-center md:justify-between">
          <p className="font-['Impact',_sans-serif] tracking-widest text-lg uppercase">© {new Date().getFullYear()} Eyob Tsige Terefe. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 bg-[#E00000] rotate-45"></span>
            More verified biography and media content will be added.
          </p>
        </div>
      </footer>
    </main>
  );
}
