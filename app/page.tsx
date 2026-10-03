import ProverbCarousel from "./components/ProverbCarousel";
import { proverbs } from "./data/proverbs";

const education = [
  {
    school: "Otto-Friedrich-Universität Bamberg",
    program: "Master of Arts in Educational Quality",
    status: "Graduated",
  },
  {
    school: "Dilla University",
    program: "Master of Arts in Counseling Psychology",
    status: "Attending",
  },
  {
    school: "Hawassa University",
    program: "Master of Arts in Educational Leadership and Management",
    status: "Attending",
  },
  {
    school: "Jimma University",
    program: "BSc in Business Administration and Information Systems",
    status: "Class of 2012",
  },
  {
    school: "HiLCoE School of Computer Science and Technology",
    program: "BSc in Computer Science",
    status: "Class of 2009",
  },
  {
    school: "Kotebe University of Education",
    program: "Mathematics major, Physics minor",
    status: "Class of 2000",
  },
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-black/10 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-semibold tracking-tight">EYOB TSIGE TEREFE</a>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#education">Education</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_.7fr] md:py-32">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
            Educator · Media · Leadership
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Eyob Tsige Terefe
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
            An education and media professional whose work connects academic
            leadership, multimedia and promotion, and educational services.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              Explore his work
            </a>
            <a href="#education" className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium">
              Education
            </a>
          </div>
        </div>
        <div className="flex min-h-72 items-end rounded-3xl bg-black p-7 text-white">
          <div>
            <p className="text-sm text-white/55">Based in</p>
            <p className="mt-2 text-2xl font-semibold">Hawassa, Ethiopia</p>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Owner & CEO, SEMAY Multimedia and Promotion
              <br />
              Manager, Union Academy
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">Profile</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Education, media, and institutional leadership.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Eyob Tsige Terefe is the Owner and CEO of SEMAY Multimedia and
            Promotion, working in radio and television programs. He is also
            Manager of Union Academy in Hawassa, an educational institution
            serving learners from kindergarten through Grade 12.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">Professional work</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-black/10 bg-white p-8">
            <p className="text-sm text-black/45">Owner & CEO</p>
            <h3 className="mt-2 text-3xl font-semibold">SEMAY Multimedia and Promotion</h3>
            <p className="mt-5 leading-7 text-black/60">
              Radio and television programs, multimedia, and promotional work.
            </p>
          </article>
          <article className="rounded-3xl border border-black/10 bg-white p-8">
            <p className="text-sm text-black/45">Manager · Since September 9, 2010</p>
            <h3 className="mt-2 text-3xl font-semibold">Union Academy</h3>
            <p className="mt-5 leading-7 text-black/60">
              An academy in Hawassa serving students from nursery through Grade 12.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Words of Wisdom</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Proverbs & Wisdom
          </h2>
        </div>
        <ProverbCarousel items={proverbs} />
      </section>

      <section id="education" className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Education</p>
          <div className="mt-8 grid gap-4">
            {education.map((item) => (
              <div key={item.school} className="grid gap-2 border-t border-white/15 py-6 md:grid-cols-[1fr_1.2fr_auto] md:items-center">
                <h3 className="font-semibold">{item.school}</h3>
                <p className="text-white/65">{item.program}</p>
                <p className="text-sm text-white/45 md:text-right">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-black/50 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Eyob Tsige Terefe</p>
        <p>More verified biography and media content will be added.</p>
      </footer>
    </main>
  );
}
