"use client";

import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
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
  const [lang, setLang] = useState<"am" | "en">("am");

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);

  const count = items.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  // Calculates shortest distance for infinite looping effect
  const getDist = useCallback((i: number) => {
    let d = i - index;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  }, [index, count]);

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
    const dx = e.clientX - drag.startX;
    setDragOffset(dx); // Infinite loop means no edge resistance needed
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

      if (passed && dx < 0) goTo(index + 1);
      if (passed && dx > 0) goTo(index - 1);
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
      <div className="mb-6 flex justify-end px-4">
        <div className="flex rounded-full bg-white p-1 border border-black/5 shadow-sm">
          <button
            onClick={() => setLang("am")}
            className={`rounded-full px-5 py-1.5 text-sm font-bold transition-colors ${
              lang === "am" ? "bg-[#8B0000] text-[#FDFBF7] shadow-md" : "text-[#1A1A1A]/60 hover:text-[#8B0000]"
            }`}
          >
            አማርኛ
          </button>
          <button
            onClick={() => setLang("en")}
            className={`rounded-full px-5 py-1.5 text-sm font-bold transition-colors ${
              lang === "en" ? "bg-[#8B0000] text-[#FDFBF7] shadow-md" : "text-[#1A1A1A]/60 hover:text-[#8B0000]"
            }`}
          >
            English
          </button>
        </div>
      </div>

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
        className={`relative touch-pan-y select-none overflow-hidden rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4 h-[550px] md:h-[650px] w-full flex items-center justify-center [perspective:1500px] ${
          count > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : ""
        }`}
      >
        {items.map((item, i) => {
          const dist = getDist(i);
          const absDist = Math.abs(dist);
          const isActive = dist === 0;

          const dragX = isDragging ? dragOffset : 0;
          const translateX = dist * 65; 
          const translateZ = -absDist * 220; 
          const rotateY = dist * -25; 
          const opacity = Math.max(1 - (absDist * 0.4), 0);
          const zIndex = 50 - absDist;

          const transitionClass = isDragging 
            ? "transition-none" 
            : "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

          return (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!isActive}
              className={`absolute w-[85%] md:w-[60%] max-w-2xl shrink-0 [transform-style:preserve-3d] ${transitionClass}`}
              style={{
                transform: `translateX(calc(${translateX}% + ${dragX}px)) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex,
                visibility: absDist > 3 ? 'hidden' : 'visible',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <ProverbCard item={item} active={isActive} lang={lang} />
            </div>
          );
        })}
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
                      ? "w-8 bg-[#8B0000]"
                      : "w-2 bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-sm tabular-nums text-[#1A1A1A]/60 sm:block font-medium">
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

/** Body text longer than this (in characters) is collapsed behind "Read more". */
const COLLAPSE_AFTER = 450;

function ProverbCard({ item, active, lang }: { item: Proverb; active: boolean; lang: "am" | "en" }) {
  const [expanded, setExpanded] = useState(false);
  const attribution = item.attribution ?? DEFAULT_ATTRIBUTION;

  // Use English when selected and available; otherwise fall back to Amharic.
  const showEnglish = lang === "en" && Boolean(item.english);
  const textLang = showEnglish ? "en" : "am";
  const text = showEnglish ? item.english : item.amharic;
  const isLong = (text?.length ?? 0) > COLLAPSE_AFTER;

  return (
    <article
      className={`relative overflow-hidden flex flex-col rounded-2xl p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 transition-colors duration-700 ${
        active ? "bg-white" : "bg-[#FDFBF7]"
      }`}
    >
      {/* Inner Gold Border */}
      <div className="absolute inset-[10px] border border-[#D4A63A]/40 pointer-events-none rounded-[4px]" />
      
      {/* Decorative Top-Left */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none overflow-hidden">
        <div className="absolute top-8 -left-8 w-40 h-[4px] bg-[#8B0000] -rotate-45 shadow-[0_0_10px_rgba(139,0,0,0.2)]" />
        <div className="absolute top-16 -left-6 w-40 h-[2px] bg-[#D4A63A] -rotate-45" />
      </div>

      {/* Decorative Bottom-Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none overflow-hidden">
        <div className="absolute bottom-8 -right-8 w-40 h-[4px] bg-[#8B0000] -rotate-45 shadow-[0_0_10px_rgba(139,0,0,0.2)]" />
        <div className="absolute bottom-16 -right-6 w-40 h-[2px] bg-[#D4A63A] -rotate-45" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[#8B0000] text-sm font-bold uppercase tracking-widest">
            {showEnglish ? "Proverb" : "ምሳሌ"}
          </span>
          {item.placeholder && (
            <span className="rounded-full border border-[#8B0000]/50 bg-[#8B0000]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8B0000]">
              Placeholder
            </span>
          )}
        </div>

        <div className="relative mt-6">
          <blockquote
            key={textLang}
            lang={textLang}
            className={`max-w-4xl whitespace-pre-line text-xl md:text-2xl lg:text-3xl font-medium text-[#1A1A1A]/90 leading-snug md:leading-relaxed animate-[heroFadeUp_0.5s_ease-out_both] ${
              textLang === "am" ? "font-['var(--font-noto-ethiopic)',_serif]" : "font-['Georgia',_'Times_New_Roman',_serif]"
            } ${isLong && !expanded ? "line-clamp-[8]" : ""}`}
          >
            {text}
          </blockquote>
          {isLong && !expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,white_10%,transparent)]" />
          )}
        </div>

        {isLong && (
          <button
            type="button"
            aria-expanded={expanded}
            tabIndex={active ? 0 : -1}
            onPointerDown={(e) => e.stopPropagation()} // don't start a swipe
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex self-start items-center gap-2 rounded-full border border-[#8B0000]/50 px-5 py-2 text-sm font-semibold text-[#8B0000] transition-colors hover:bg-[#8B0000] hover:text-[#FDFBF7]"
          >
            {expanded
              ? showEnglish ? "Show less" : "በአጭሩ አሳይ"
              : showEnglish ? "Read more" : "ሙሉውን ያንብቡ"}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}

        <p className="mt-10 pt-6 border-t border-black/10 text-sm font-serif italic text-[#8B0000]/80 text-right">
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
      className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white text-[#8B0000] transition-all hover:border-[#8B0000] hover:bg-[#8B0000] hover:text-[#FDFBF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B0000] active:scale-95 shadow-md"
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
