"use client";

import { useRef } from "react";

type EducationItem = {
  school: string;
  program: string;
  status: string;
  image?: string;
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === "left" ? (
        <path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function EducationCard({ items }: { items: EducationItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -430 : 430,
      behavior: "smooth",
    });
  };

  return (
    <div className="education-carousel">
      <div
        ref={scrollRef}
        className="education-carousel__track"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <article key={item.school} className="education-card">
            <div className="education-card__media">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.school} loading="lazy" />
              ) : (
                <div className="education-card__placeholder">ET</div>
              )}
              <span className="education-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="education-card__body">
              <span className="education-card__status">{item.status}</span>
              <h3>{item.school}</h3>
              <p>{item.program}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="education-carousel__controls">
        <button type="button" onClick={() => scroll("left")} aria-label="Previous education item">
          <Arrow direction="left" />
        </button>
        <span>Scroll through the academic path</span>
        <button type="button" onClick={() => scroll("right")} aria-label="Next education item">
          <Arrow direction="right" />
        </button>
      </div>
    </div>
  );
}
