"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "am" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Shares the selected proverb language between the header toggle and the
 * proverb carousel. Amharic is the default.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("am");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

const OPTIONS: { value: Lang; label: string; title: string }[] = [
  { value: "am", label: "አማ", title: "አማርኛ" },
  { value: "en", label: "EN", title: "English" },
];

/** Compact pill switch shown in the fixed top header. */
export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Proverb language"
      className="relative flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md"
    >
      {/* Sliding highlight */}
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#E00000] shadow-[0_0_12px_rgba(224,0,0,0.55)] transition-transform duration-300 ease-out ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          id={`lang-${opt.value}`}
          type="button"
          title={opt.title}
          aria-pressed={lang === opt.value}
          onClick={() => setLang(opt.value)}
          className={`relative z-10 w-12 rounded-full py-1.5 text-xs font-bold tracking-wider transition-colors ${
            lang === opt.value ? "text-white" : "text-white/60 hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
