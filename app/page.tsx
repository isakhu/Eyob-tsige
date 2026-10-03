const education = [
  ["Otto-Friedrich-Universität Bamberg","Master of Arts in Educational Quality","Graduated"],
  ["Dilla University","Master of Arts in Counseling Psychology","Attending"],
  ["Hawassa University","Master of Arts in Educational Leadership and Management","Attending"],
  ["Jimma University","BSc in Business Administration and Information Systems","Class of 2012"],
  ["HiLCoE School of Computer Science and Technology","BSc in Computer Science","Class of 2009"],
  ["Kotebe University of Education","Mathematics major · Physics minor","Class of 2000"],
];
const facts=[["2010","Manager, Union Academy"],["Education","Nursery → Grade 12"],["Media","Radio & television"],["Location","Hawassa, Ethiopia"]];

export default function Home() {
  return <main>
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f7f5]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-semibold tracking-[.12em]">EYOB TSIGE</a>
        <div className="hidden gap-7 text-sm md:flex"><a href="#about">About</a><a href="#work">Work</a><a href="#education">Education</a><a href="#contact">Contact</a></div>
      </nav>
    </header>

    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[1.15fr_.85fr] md:py-32">
      <div className="flex flex-col justify-center">
        <span className="mb-7 w-fit rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[.2em]">Educator · Media · Leadership</span>
        <h1 className="max-w-4xl text-6xl font-bold leading-[.94] tracking-[-.04em] md:text-8xl">Eyob<br/>Tsige Terefe</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">A professional profile connecting education, institutional leadership, multimedia and promotion, and community-facing work.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#work" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">View work</a><a href="#education" className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold">Academic journey</a></div>
      </div>
      <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-black p-8 text-white md:min-h-[620px]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15"/><div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/15"/>
        <div className="relative flex h-full flex-col justify-between"><div className="text-xs uppercase tracking-[.25em] text-white/45">Profile / 01</div><div><div className="mb-8 h-px w-20 bg-white/30"/><p className="text-sm text-white/45">Based in</p><p className="mt-2 text-3xl font-semibold">Hawassa, Ethiopia</p><p className="mt-6 max-w-sm text-sm leading-7 text-white/60">Owner & CEO of SEMAY Multimedia and Promotion and Manager of Union Academy.</p></div></div>
      </div>
    </section>

    <section id="about" className="border-y border-black/10 bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[.7fr_1.3fr]"><p className="text-xs font-semibold uppercase tracking-[.25em] text-black/40">01 / About</p><div><h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">A career shaped by education, leadership and media.</h2><p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">Eyob Tsige Terefe is the Owner and CEO of SEMAY Multimedia and Promotion, working in radio and television programs. He is also Manager of Union Academy in Hawassa, an academy serving learners from nursery through Grade 12.</p></div></div></section>

    <section id="work" className="mx-auto max-w-7xl px-6 py-24"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-black/40">02 / Work</p><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Professional work</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2">
      <article className="rounded-[2rem] bg-black p-9 text-white md:p-12"><p className="text-xs uppercase tracking-[.2em] text-white/45">01 · Media</p><h3 className="mt-20 text-4xl font-semibold tracking-tight">SEMAY Multimedia and Promotion</h3><p className="mt-5 max-w-md leading-7 text-white/60">Owner & CEO. Radio and television programs, multimedia, and promotional work.</p></article>
      <article className="rounded-[2rem] border border-black/10 bg-white p-9 md:p-12"><p className="text-xs uppercase tracking-[.2em] text-black/40">02 · Education</p><h3 className="mt-20 text-4xl font-semibold tracking-tight">Union Academy</h3><p className="mt-5 max-w-md leading-7 text-black/60">Manager since September 9, 2010. Serving students from nursery through Grade 12 in Hawassa.</p></article>
    </div></section>

    <section className="bg-[#e8e7e2]"><div className="mx-auto max-w-7xl px-6 py-20"><div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">{facts.map(([label,value])=><div key={label} className="border-l border-black/15 pl-5"><p className="text-xs uppercase tracking-[.2em] text-black/40">{label}</p><p className="mt-3 max-w-48 text-sm font-medium leading-6">{value}</p></div>)}</div></div></section>

    <section id="education" className="bg-black text-white"><div className="mx-auto max-w-7xl px-6 py-24"><p className="text-xs font-semibold uppercase tracking-[.25em] text-white/40">03 / Education</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">An interdisciplinary academic path.</h2><div className="mt-14 border-t border-white/15">{education.map(([school,program,status],i)=><div key={school} className="grid gap-3 border-b border-white/15 py-7 md:grid-cols-[.8fr_1fr_auto] md:items-center"><span className="text-xs text-white/35">0{i+1}</span><div><h3 className="font-semibold">{school}</h3><p className="mt-1 text-sm text-white/50">{program}</p></div><span className="text-xs uppercase tracking-[.15em] text-white/40 md:text-right">{status}</span></div>)}</div></div></section>

    <section id="contact" className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2rem] bg-white p-9 md:p-14"><p className="text-xs font-semibold uppercase tracking-[.25em] text-black/40">04 / Contact</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">More of Eyob’s story is coming.</h2><p className="mt-6 max-w-2xl leading-7 text-black/60">This version is based only on information provided so far. Photos, biography, programs, achievements, links and contact details can be added next.</p></div></section>
    <footer className="border-t border-black/10 px-6 py-8 text-sm text-black/45"><div className="mx-auto flex max-w-7xl justify-between gap-6"><span>Eyob Tsige Terefe</span><span>© {new Date().getFullYear()}</span></div></footer>
  </main>;
}