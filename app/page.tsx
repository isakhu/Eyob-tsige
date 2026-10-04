import ProverbCarousel from "./components/ProverbCarousel";
import EducationCard from "./components/EducationCard";
import Organizations from "./components/Organizations";
import Blog from "./components/Blog";
import { proverbs } from "./data/proverbs";

const education = [
  { school: "Dilla University", program: "Master of Arts in Counseling Psychology", status: "Class of 2019", image: "/images/education/dilla.jpg" },
  { school: "Hawassa University", program: "Master of Arts in Educational Leadership and Management", status: "Class of 2014", image: "/images/education/hawassa.jpg" },
  { school: "Otto-Friedrich-Universität Bamberg", program: "Master of Arts in Educational Quality", status: "Graduated", image: "/images/education/bamberg.jpg" },
  { school: "Jimma University", program: "BSc in Business Administration and Information Systems", status: "Class of 2012", image: "/images/education/jimma.jpg" },
  { school: "HiLCoE School of Computer Science and Technology", program: "BSc in Computer Science", status: "Class of 2009", image: "/images/education/hilcoe.jpg" },
  { school: "Kotebe University of Education", program: "Mathematics major, Physics minor", status: "Class of 2000", image: "/images/education/kotebe.jpg" },
];

const navItems = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#organizations" },
  { label: "Education", href: "#education" },
  { label: "Wisdom", href: "#proverbs" },
  { label: "Journal", href: "#blog" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#" className="brand-mark" aria-label="Eyob Tsige Terefe — Home">
            <span className="brand-mark__seal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-mark.png" alt="" />
            </span>
            <span className="brand-mark__type">
              <span className="brand-mark__name">EYOB TSIGE</span>
              <span className="brand-mark__sub">TEREFE</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a href="#contact" className="header-cta">
            Connect
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__texture" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" />
              Educator · Media · Leadership
            </p>
            <h1 id="hero-title">
              Eyob
              <span>Tsige Terefe</span>
            </h1>
            <p className="hero__lead">
              Building a life around ideas that educate, stories that move people,
              and leadership that leaves something useful behind.
            </p>

            <div className="hero__actions">
              <a href="#story" className="button button--primary">
                Explore the story
                <ArrowIcon />
              </a>
              <a href="#proverbs" className="button button--text">
                Read the wisdom
                <ArrowIcon />
              </a>
            </div>

            <div className="hero__credentials" aria-label="Current leadership roles">
              <div><span>Based in</span><strong>Hawassa, Ethiopia</strong></div>
              <div><span>Founder / Executive</span><strong>SEMAY Multimedia</strong></div>
              <div><span>Education</span><strong>Union Academy</strong></div>
            </div>
          </div>

          <div className="hero__portrait">
            <div className="portrait-frame portrait-frame--outer" aria-hidden="true" />
            <div className="portrait-frame portrait-frame--inner" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-profile.jpg" alt="Eyob Tsige Terefe speaking with a microphone" fetchPriority="high" />
            <div className="portrait-caption">
              <span>01</span>
              <div>
                <strong>Purpose before profile.</strong>
                <small>A public record of work, learning &amp; reflection.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story section-light">
        <div className="section-container story__grid">
          <div className="section-kicker"><span>01</span>The throughline</div>
          <div className="story__copy">
            <p className="display-label">A life shaped by learning</p>
            <h2>Education is the foundation.<em>Leadership is the responsibility.</em></h2>
            <p>
              Eyob Tsige Terefe brings together education, media, entrepreneurship,
              and reflective writing under one personal philosophy: knowledge should
              not sit still. It should move people, improve institutions, and create
              practical value.
            </p>
            <p>
              This space brings those dimensions together — the organizations he
              leads, the academic path behind his work, and a growing archive of
              proverbs and reflections.
            </p>
            <a href="#organizations" className="story-link">See the work<ArrowIcon /></a>
          </div>
          <div className="story__aside">
            <span className="story__quote-mark">“</span>
            <p>The strongest personal brand is not a louder name. It is a body of work people can trust.</p>
            <span className="story__rule" />
            <span className="story__caption">Education · Media · Leadership</span>
          </div>
        </div>
      </section>

      <Organizations />

      <section id="education" className="education section-dark">
        <div className="section-container">
          <div className="section-heading section-heading--dark">
            <div>
              <div className="section-kicker"><span>03</span>Academic formation</div>
              <p className="display-label">Six chapters of study</p>
              <h2>Different disciplines. One expanding lens.</h2>
            </div>
            <p className="section-heading__note">
              Psychology, leadership, education, business, computing, mathematics and
              physics — an interdisciplinary foundation for complex work.
            </p>
          </div>
          <EducationCard items={education} />
        </div>
      </section>

      <section id="proverbs" className="wisdom section-cream">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>04</span>The wisdom archive</div>
              <p className="display-label">Words worth returning to</p>
              <h2>Proverbs, prayers &amp; reflections.</h2>
            </div>
            <p className="section-heading__note">
              A bilingual collection designed to preserve the ideas, lessons and
              observations that continue to shape a life.
            </p>
          </div>
          <ProverbCarousel items={proverbs} />
        </div>
      </section>

      <Blog />

      <footer id="contact" className="site-footer">
        <div className="section-container">
          <div className="footer-top">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__line" />Eyob Tsige Terefe</p>
              <h2>Ideas become valuable when they become useful.</h2>
            </div>
            <a className="button button--outline-light" href="https://t.me/EYOBBOOKSHAWASSA" target="_blank" rel="noopener noreferrer">
              Connect on Telegram
              <ArrowIcon />
            </a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Eyob Tsige Terefe. All rights reserved.</p>
            <div className="footer-links">
              <a href="#story">Story</a>
              <a href="#organizations">Work</a>
              <a href="#education">Education</a>
              <a href="#proverbs">Wisdom</a>
              <a href="#blog">Journal</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
