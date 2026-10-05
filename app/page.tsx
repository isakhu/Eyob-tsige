import ProverbCarousel from "./components/ProverbCarousel";
import EducationCard from "./components/EducationCard";
import Organizations from "./components/Organizations";
import { proverbs } from "./data/proverbs";
import Reveal from "./components/Reveal";
import Biography from "./components/Biography";
import MediaPrograms from "./components/MediaPrograms";
import Contact from "./components/Contact";

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
          <a href="#" className="brand-mark" aria-label="Eyob Tsige Terefe — Home" style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo.png" 
              alt="Eyob Tsige Terefe Logo" 
              style={{ height: '4rem', width: 'auto', mixBlendMode: 'multiply', transition: 'transform 0.3s ease' }} 
            />
          </a>
        </div>
        {/* Thin accent line */}
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#8B0000_30%,#D4A63A_70%,transparent)] opacity-60" />
      </header>

      {/* Floating Glass Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Main Pill */}
        <nav className="flex items-center gap-3 px-6 py-4 rounded-full bg-[#FDFBF7]/90 backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-x-auto max-w-[90vw] scrollbar-hide">
          <a href="#" className="shrink-0 p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Home">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          <a href="#organizations" className="shrink-0 p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Organizations">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
          </a>
          <a href="#media" className="shrink-0 p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Media">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </a>
          <a href="#education" className="shrink-0 p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Education">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </a>
          <a href="#proverbs" className="shrink-0 p-2 rounded-full hover:bg-black/5 transition-colors text-[#1A1A1A]/70 hover:text-[#8B0000]" aria-label="Wisdom & Proverbs">
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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#FDFBF7_0%,rgba(253,251,247,0.95)_35%,rgba(253,251,247,0.5)_60%,rgba(253,251,247,0)_85%)] max-md:bg-[linear-gradient(0deg,#FDFBF7_10%,rgba(253,251,247,0.9)_45%,rgba(253,251,247,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#FDFBF7,transparent)]" />
        {/* Subtle warm glow */}
        <div className="absolute -left-40 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[#D4A63A]/20 blur-[140px]" />

        <div className="mx-auto w-full max-w-6xl px-6 pb-40 pt-[45vh] md:py-32">
        <div className="flex max-w-xl flex-col justify-center animate-[heroFadeUp_1s_ease-out_both]">
          <h1 className="text-6xl md:text-8xl leading-[1.1] tracking-tight font-display text-[#1A1A1A] drop-shadow-[0_2px_10px_rgba(0,0,0,0.05)] font-semibold">
            Eyob Tsige<br /><span className="italic">Terefe</span>
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-[#1A1A1A]/80 font-body text-xl md:text-2xl font-light">
            Education, Media & Leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#proverbs" className="rounded bg-[#8B0000] px-8 py-4 text-sm font-bold text-[#FDFBF7] shadow-[0_4px_15px_rgba(139,0,0,0.3)] hover:bg-[#5C0000] transition-all hover:-translate-y-1 font-body uppercase tracking-[0.15em]">
              Read Proverbs & Wisdom
            </a>
            <a href="#organizations" className="rounded border border-[#8B0000]/30 bg-white/50 backdrop-blur-md px-8 py-4 text-sm font-bold text-[#8B0000] hover:bg-[#8B0000]/10 transition-colors font-body uppercase tracking-[0.15em]">
              Organizations
            </a>
          </div>

          {/* Based-in glass card */}
          <div className="mt-16 flex max-w-lg flex-col gap-4 rounded-xl border border-black/5 border-l-4 border-l-[#8B0000] bg-white/70 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0">
              <p className="text-[10px] text-[#8B0000] tracking-[0.2em] uppercase font-bold font-body">Based in</p>
              <a href="https://web.facebook.com/Hawassa-Sidamo-Ethiopia-109298179090397/" target="_blank" rel="noopener noreferrer" className="mt-1 text-xl font-display font-medium text-[#1A1A1A] italic hover:text-[#8B0000] hover:underline transition-colors block">
                Hawassa, Sidamo, Ethiopia
              </a>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-[#1A1A1A]/85 font-medium sm:border-l sm:border-black/10 sm:pl-8 font-body">
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#D4A63A]"></span>
                Owner & CEO, SEMAY Multimedia
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#D4A63A]"></span>
                Director, Union Academy
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>



      <Reveal><Biography /></Reveal>

      <Reveal><Organizations /></Reveal>

      <Reveal><MediaPrograms /></Reveal>

      {/* Education Section */}
      <Reveal><section id="education" className="bg-[#FDFBF7] text-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-sm font-body uppercase tracking-[0.2em] text-[#8B0000] font-bold">Education</p>
          </div>
          
          <EducationCard items={education} />
        </div>
      </section></Reveal>

      {/* Proverbs Section */}
      <Reveal><section id="proverbs" className="border-y border-black/5 bg-[#F5F0E6] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-sm font-body uppercase tracking-[0.2em] text-[#8B0000] font-bold">Words of Wisdom</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-display text-[#1A1A1A] italic">
              Proverbs & Reflections
            </h2>
          </div>
          <ProverbCarousel items={proverbs} />
        </div>
      </section></Reveal>


      <Reveal><Contact /></Reveal>

      {/* Footer */}
      <Reveal><footer className="border-t border-black/5 bg-[#FDFBF7] pt-20 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-display text-[#1A1A1A] mb-4 font-semibold italic">Eyob Tsige Terefe</h2>
              <p className="text-[#1A1A1A]/70 font-body text-sm leading-relaxed max-w-sm">
                Author, educator, and visionary leader. Empowering the next generation through profound literature, academic excellence, and impactful media broadcasting.
              </p>
            </div>
            
            <div>
              <h3 className="font-body font-bold text-xs uppercase tracking-widest text-[#8B0000] mb-6">Organizations</h3>
              <ul className="space-y-4 text-sm font-body text-[#1A1A1A]/80 font-medium">
                <li><a href="#organizations" className="hover:text-[#8B0000] transition-colors">Eyob Bookstore</a></li>
                <li><a href="/semay" className="hover:text-[#8B0000] transition-colors">Semay Multimedia</a></li>
                <li><a href="https://web.facebook.com/profile.php?id=100063943534740" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B0000] transition-colors">Union Academy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-body font-bold text-xs uppercase tracking-widest text-[#8B0000] mb-6">Social Connect</h3>
              <ul className="space-y-4 text-sm font-body text-[#1A1A1A]/80 font-medium">
                <li><a href="https://t.me/eyobbook" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B0000] transition-colors">Telegram</a></li>
                <li><a href="https://tiktok.com/@eyobbookshawassa" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B0000] transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 text-xs font-body text-[#1A1A1A]/50 font-medium">
            <p className="mb-4 md:mb-0 uppercase tracking-widest">© {new Date().getFullYear()} Eyob Tsige Terefe. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="hover:text-[#8B0000] transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-[#8B0000] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer></Reveal>
    </main>
  );
}
