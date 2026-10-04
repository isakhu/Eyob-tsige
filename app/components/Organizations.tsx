import { bookstoreImages } from "../data/bookstoreImages";

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

export default function Organizations() {
  return (
    <section id="organizations" className="ventures section-light">
      <div className="section-container">
        <div className="section-heading ventures__heading">
          <div>
            <div className="section-kicker"><span>02</span> Organizations &amp; ventures</div>
            <p className="display-label">Work with a wider reach</p>
            <h2>From knowledge to media to education.</h2>
          </div>
          <p className="section-heading__note">
            Three distinct environments, connected by the same emphasis on learning,
            communication, and long-term impact.
          </p>
        </div>

        <div className="ventures__grid">
          <article className="venture-card venture-card--store">
            <div className="venture-card__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/books/bookstore1.png"
                alt="Eyob Tsige Bookstore"
                loading="lazy"
              />
              <span className="venture-card__number">01</span>
            </div>

            <div className="venture-card__body">
              <span className="venture-card__role">Bookstore · Hawassa</span>
              <h3>Eyob Tsige Bookstore</h3>
              <p>
                A hub of knowledge, inspiration, and personal development, with a
                curated selection of books intended to empower readers and grow ideas.
              </p>

              <div className="venture-contact">
                <span>0968095969 / 0930150011</span>
                <a href="https://t.me/EYOBBOOKSHAWASSA" target="_blank" rel="noopener noreferrer">
                  Telegram @eyobbook
                </a>
                <a href="https://tiktok.com/@eyobbookshawassa" target="_blank" rel="noopener noreferrer">
                  TikTok @eyobbookshawassa
                </a>
              </div>

              <div className="book-strip" aria-label="Bookstore highlights">
                {bookstoreImages.slice(0, 6).map((filename, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={filename}
                    src={"/images/books/eyob-books/" + filename}
                    alt={"Eyob Tsige Bookstore book " + (i + 1)}
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="map-wrap">
                <div className="map-wrap__label">
                  <span>Visit in person</span>
                  <strong>Hawassa, Ethiopia</strong>
                </div>
                <iframe
                  title="Eyob Bookstore location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7882532539334!2d38.474110074758265!3d7.043153492958963!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b145003352713d%3A0x5d0aa60f94ecc0df!2sEyob%20bookstore!5e1!3m2!1sen!2set!4v1791103034524!5m2!1sen!2set"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                className="venture-link"
                href="https://www.google.com/maps?cid=6704381335968596191"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
                <ArrowIcon />
              </a>
            </div>
          </article>

          <div className="ventures__stack">
            <article className="venture-card venture-card--dark">
              <div className="venture-card__glow" aria-hidden="true" />
              <div className="venture-card__body">
                <span className="venture-card__role">Owner &amp; CEO</span>
                <h3>SEMAY Multimedia</h3>
                <p>
                  A media production company focused on high-quality audio and visual
                  storytelling, with an emphasis on educational and inspirational
                  messaging.
                </p>
                <a href="#contact" className="venture-link venture-link--light">
                  Start a conversation
                  <ArrowIcon />
                </a>
              </div>
              <span className="venture-card__number">02</span>
            </article>

            <article className="venture-card venture-card--academy">
              <div className="venture-card__body">
                <span className="venture-card__role">Director</span>
                <h3>Union Academy</h3>
                <p>
                  An educational institution committed to academic excellence,
                  leadership development, and character building.
                </p>
                <a
                  href="https://unionacademy.edu.et"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-link"
                >
                  Visit the academy
                  <ArrowIcon />
                </a>
              </div>
              <span className="venture-card__number">03</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
