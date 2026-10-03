"use client";

import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { DEFAULT_ATTRIBUTION, type Proverb } from "../data/proverbs";

/** Fraction of the card width a drag must travel to change slides. */
const DISTANCE_THRESHOLD = 0.18;
/** A quick flick (px per ms) also changes slides, even if it's short. */
const VELOCITY_THRESHOLD = 0.45;
/** Rubber-band resistance when dragging past the first/last card. */
const EDGE_RESISTANCE = 0.3;

type DragState = {
  pointerId: number;
  startX: number;
  startTime: number;
};

export default function ProverbCarousel({ items }: { items: Proverb[] }) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);

  const count = items.length;
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  /* ---------- Swipe / drag (mouse, touch, pen) ---------- */

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (count < 2) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startTime: performance.now(),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    let dx = e.clientX - drag.startX;
    if ((isFirst && dx > 0) || (isLast && dx < 0)) dx *= EDGE_RESISTANCE;
    setDragOffset(dx);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>, cancelled = false) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    dragRef.current = null;

    if (!cancelled) {
      const dx = e.clientX - drag.startX;
      const width = viewportRef.current?.offsetWidth ?? 1;
      const velocity = Math.abs(dx) / Math.max(performance.now() - drag.startTime, 1);
      const passed =
        Math.abs(dx) > width * DISTANCE_THRESHOLD ||
        (Math.abs(dx) > 30 && velocity > VELOCITY_THRESHOLD);

      if (passed && dx < 0 && !isLast) setIndex(index + 1);
      if (passed && dx > 0 && !isFirst) setIndex(index - 1);
    }

    setDragOffset(0);
    setIsDragging(false);
  };

  /* ---------- Keyboard ---------- */

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keyActions: Record<string, () => void> = {
      ArrowLeft: prev,
      ArrowRight: next,
      Home: () => goTo(0),
      End: () => goTo(count - 1),
    };
    const action = keyActions[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  };

  if (count === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Proverbs and wisdom"
      className="mt-10"
    >
      {/* Viewport: focusable for arrow-key navigation */}
      <div
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(e) => endDrag(e)}
        onPointerCancel={(e) => endDrag(e, true)}
        onDragStart={(e) => e.preventDefault()}
        className={`touch-pan-y select-none overflow-hidden rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4 ${
          count > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
      >
        <div
          aria-live={isDragging ? "off" : "polite"}
          className={`flex ${
            isDragging
              ? "transition-none"
              : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          }`}
          style={{
            transform: `translate3d(calc(${-index * 100}% + ${dragOffset}px), 0, 0)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              className="w-full shrink-0"
            >
              <ProverbCard item={item} active={i === index} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {count > 1 && (
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to proverb ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className="group flex h-6 items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-black"
                      : "w-2 bg-black/20 group-hover:bg-black/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-sm tabular-nums text-black/45 sm:block">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <ArrowButton direction="prev" onClick={prev} />
              <ArrowButton direction="next" onClick={next} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProverbCard({ item, active }: { item: Proverb; active: boolean }) {
  const [lang, setLang] = useState<"am" | "en">("am");
  const attribution = item.attribution ?? DEFAULT_ATTRIBUTION;

  return (
    <article
      className={`relative overflow-hidden flex h-full flex-col rounded-2xl bg-[#0a0a0a] p-8 md:p-14 transition-opacity duration-500 shadow-2xl ${
        active ? "opacity-100" : "opacity-40"
      }`}
    >
      {/* Inner Gold Border */}
      <div className="absolute inset-[10px] border border-[#d4af37]/30 pointer-events-none rounded-[4px]" />
      
      {/* Decorative Top-Left */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none overflow-hidden">
        <div className="absolute top-8 -left-8 w-40 h-[4px] bg-gradient-to-r from-[#e67e22] to-[#f1c40f] -rotate-45 shadow-[0_0_10px_rgba(241,196,15,0.5)]" />
        <div className="absolute top-16 -left-6 w-40 h-[2px] bg-[#d4af37]/60 -rotate-45" />
      </div>

      {/* Decorative Bottom-Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none overflow-hidden">
        <div className="absolute bottom-8 -right-8 w-40 h-[4px] bg-gradient-to-l from-[#e67e22] to-[#f1c40f] -rotate-45 shadow-[0_0_10px_rgba(241,196,15,0.5)]" />
        <div className="absolute bottom-16 -right-6 w-40 h-[2px] bg-[#d4af37]/60 -rotate-45" />
      </div>

      {/* Language Toggle */}
      <div 
        className="relative z-10 flex justify-end mb-8" 
        onPointerDown={(e) => e.stopPropagation()} // Prevent swiping when toggling
      >
        <div className="flex rounded-full bg-white/5 p-1 border border-[#d4af37]/20 backdrop-blur-sm">
          <button
            onClick={() => setLang("am")}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${
              lang === "am" ? "bg-[#d4af37] text-black shadow-md" : "text-[#d4af37]/60 hover:text-[#d4af37]"
            }`}
          >
            አማርኛ
          </button>
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${
              lang === "en" ? "bg-[#d4af37] text-black shadow-md" : "text-[#d4af37]/60 hover:text-[#d4af37]"
            }`}
          >
            English
          </button>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[#d4af37] text-sm font-bold uppercase tracking-widest">
            {lang === "am" ? "ምሳሌ" : "PROVERB"}
          </span>
          {item.placeholder && (
            <span className="rounded-full border border-[#e67e22]/50 bg-[#e67e22]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f1c40f]">
              Placeholder
            </span>
          )}
        </div>

        <blockquote
          lang={lang}
          className="mt-6 max-w-4xl text-2xl md:text-4xl font-medium text-white/90 leading-snug md:leading-relaxed"
        >
          {lang === "am" ? item.amharic : item.english}
        </blockquote>

        {(lang === "am" ? item.meaningAmharic : item.meaningEnglish) && (
          <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
            <span className="text-[#d4af37]/70 text-xs font-bold uppercase tracking-widest block mb-3">
              {lang === "am" ? "ትርጉሙ" : "Meaning"}
            </span>
            <p className="max-w-3xl text-lg text-white/70 leading-relaxed font-light">
              {lang === "am" ? item.meaningAmharic : item.meaningEnglish}
            </p>
          </div>
        )}

        <p className="mt-auto pt-10 text-sm font-serif italic text-[#d4af37]/80 text-right">
          &mdash; {attribution}
        </p>
      </div>
    </article>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous proverb" : "Next proverb"}
      className="grid h-12 w-12 place-items-center rounded-full border border-black/15 bg-white transition hover:border-black hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-5 w-5 ${direction === "prev" ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
