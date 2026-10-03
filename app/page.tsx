import ProverbCarousel from "./components/ProverbCarousel";
import EducationCard from "./components/EducationCard";
import { proverbs } from "./data/proverbs";

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
    <main className="bg-[#FDFBF7] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#8B0000] selection:text-[#FDFBF7]">
      {/* Fixed Top Header with Logo (stays in place while scrolling) */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#FDFBF7]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
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
                <span className="text-[#1A1A1A]">EYOB </span>
                <span className="bg-[linear-gradient(180deg,#D4A63A,#8B0000)] bg-clip-text text-transparent">TSIGE</span>
              </span>
              <span className="mt-1 flex items-center gap-2 text-[10px] tracking-[0.45em] text-[#1A1A1A]/70">
                <span className="h-px w-4 bg-[#8B0000]" />
                TEREFE
                <span className="h-px w-4 bg-[#8B0000]" />
              </span>
            </span>
          </a>
        </div>
        {/* Thin accent line */}
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#8B0000_30%,#D4A63A_70%,transparent)] opacity-60" />
      </header>

      {/* Floating Glass Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Main Pill */}
        <nav className="flex items-center gap-3 px-6 py-4 rounded-full bg-[#FDFBF7]/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <a href="#" className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Home">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          <a href="#education" className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Education">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </a>
          <a href="#proverbs" className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Wisdom & Proverbs">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </a>
        </nav>
        {/* Search Circle */}
        <button aria-label="Search" className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FDFBF7]/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]">
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
        {/* Readability overlays: light fade from the left + blend into page at the bottom */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#FDFBF7_0%,rgba(253,251,247,0.92)_30%,rgba(253,251,247,0.45)_58%,rgba(253,251,247,0)_80%)] max-md:bg-[linear-gradient(0deg,#FDFBF7_10%,rgba(253,251,247,0.85)_45%,rgba(253,251,247,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#FDFBF7,transparent)]" />
        {/* Subtle warm glow */}
        <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[#D4A63A]/15 blur-[140px]" />

        <div className="mx-auto w-full max-w-6xl px-6 pb-40 pt-[45vh] md:py-32">
        <div className="flex max-w-xl flex-col justify-center animate-[heroFadeUp_1s_ease-out_both]">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8B0000]">
            <span className="h-[2px] w-10 bg-[#8B0000]" />
            Educator · Media · Leadership
          </p>
          <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-normal font-['Impact',_sans-serif] text-[#1A1A1A] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            Eyob Tsige<br />Terefe
          </h1>
          <p className="mt-7 max-w-2xl leading-relaxed text-[#1A1A1A]/80 font-['var(--font-pacifico)',_cursive] text-3xl">
            Education, Media & Leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#proverbs" className="rounded bg-[#8B0000] px-8 py-3.5 text-sm font-bold text-[#FDFBF7] shadow-[0_4px_15px_rgba(139,0,0,0.3)] hover:bg-[#5C0000] transition-all hover:-translate-y-1 font-['Impact',_sans-serif] uppercase tracking-wide">
              Read Proverbs & Wisdom
            </a>
            <a href="#education" className="rounded border-2 border-[#8B0000] bg-white/40 backdrop-blur-sm px-8 py-3.5 text-sm font-bold text-[#8B0000] hover:bg-[#8B0000]/10 transition-colors font-['Impact',_sans-serif] uppercase tracking-wide">
              Education
            </a>
          </div>

          {/* Based-in glass card */}
          <div className="mt-12 flex max-w-lg flex-col gap-4 rounded-xl border border-black/5 border-l-4 border-l-[#8B0000] bg-white/70 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <p className="text-xs text-[#8B0000] tracking-[0.2em] uppercase font-['Impact',_sans-serif]">Based in</p>
              <p className="mt-1 text-2xl font-['var(--font-pacifico)',_cursive] text-[#1A1A1A]">Hawassa, Ethiopia</p>
            </div>
            <div className="space-y-2 text-sm leading-relaxed text-[#1A1A1A]/85 font-medium sm:border-l sm:border-black/10 sm:pl-8">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 shrink-0 bg-[#D4A63A] rotate-45"></span>
                Owner & CEO, SEMAY Multimedia
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 shrink-0 bg-[#D4A63A] rotate-45"></span>
                Director, Union Academy
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="bg-[#FDFBF7] text-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl">Education</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-['Impact',_sans-serif] uppercase tracking-wide md:text-5xl text-[#1A1A1A]">
              An interdisciplinary academic path.
            </h2>
          </div>
          
          <EducationCard items={education} />
        </div>
      </section>

      {/* Proverbs Section */}
      <section id="proverbs" className="border-y border-black/5 bg-[#F5F0E6] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-sm font-['Impact',_sans-serif] uppercase tracking-[0.2em] text-[#8B0000] text-xl">Words of Wisdom</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-['var(--font-pacifico)',_cursive] text-[#1A1A1A]">
              Proverbs & Reflections
            </h2>
          </div>
          <ProverbCarousel items={proverbs} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#FDFBF7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-[#1A1A1A]/60 md:flex-row md:items-center md:justify-between">
          <p className="font-['Impact',_sans-serif] tracking-widest text-lg uppercase">© {new Date().getFullYear()} Eyob Tsige Terefe. All rights reserved.</p>
          <p className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 bg-[#D4A63A] rotate-45"></span>
            More verified biography and media content will be added.
          </p>
        </div>
      </footer>
    </main>
  );
}
