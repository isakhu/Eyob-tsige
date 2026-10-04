const blogPosts = [
  {
    id: 1,
    title: "The Power of Mindset in Leadership",
    excerpt:
      "Leadership begins in the mind. Before you can lead others, you must learn to lead yourself. Discover how a growth mindset changes the way you influence and inspire.",
    date: "October 1, 2026",
    category: "Leadership",
    readTime: "5 min",
    image: "/images/hero-profile.jpg",
  },
  {
    id: 2,
    title: "Education as the Great Equalizer",
    excerpt:
      "True education goes beyond the classroom. It is the tool that opens possibilities, strengthens communities, and creates room for better decisions.",
    date: "September 15, 2026",
    category: "Education",
    readTime: "4 min",
    image: "/images/books/bookstore2.png",
  },
  {
    id: 3,
    title: "Navigating Life's Intersections",
    excerpt:
      "At a crossroads, the easy path and the right path are rarely the same. The choices we make in those moments become part of the character we carry forward.",
    date: "August 28, 2026",
    category: "Life & Wisdom",
    readTime: "6 min",
    image: "/images/books/bookstore1.png",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="journal section-light">
      <div className="section-container">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>05</span> Articles &amp; insights</div>
            <p className="display-label">The journal</p>
            <h2>Writing for the days that need perspective.</h2>
          </div>
          <p className="section-heading__note">
            Short essays on leadership, education, mindset, and the intersections
            between work and life.
          </p>
        </div>

        <div className="journal__grid">
          <article className="journal-feature">
            <div className="journal-feature__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.image} alt={featured.title} loading="lazy" />
            </div>
            <div className="journal-feature__body">
              <div className="journal-meta">
                <span>{featured.category}</span>
                <span>{featured.readTime}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <div className="journal-feature__footer">
                <time>{featured.date}</time>
                <span className="journal-link">
                  Read article
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </article>

          <div className="journal-list">
            {rest.map((post) => (
              <article className="journal-row" key={post.id}>
                <div className="journal-row__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="journal-row__body">
                  <div className="journal-meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="journal-row__footer">
                    <time>{post.date}</time>
                    <span className="journal-link">
                      Read
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
