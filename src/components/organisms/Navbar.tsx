"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { LanguageToggle } from "@/components/molecules/LanguageToggle";
import type { Locale } from "@/i18n/dictionaries";

export function Navbar({
  sections,
  locale,
}: {
  sections: readonly string[];
  locale: Locale;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const vh = window.innerHeight;
      const idx = Math.min(
        sections.length - 1,
        Math.floor((window.scrollY + vh / 2) / vh)
      );
      setActive(idx);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections.length]);

  function goTo(i: number) {
    window.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b-2 border-line/60 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <button
          onClick={() => goTo(0)}
          className="font-display text-base font-bold cursor-pointer"
        >
          osmanoz<span className="text-accent">.com</span>
        </button>
        <div className="flex items-center gap-1">
          {sections.map((label, i) => (
            <button
              key={label}
              onClick={() => goTo(i)}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors cursor-pointer ${
                active === i
                  ? "bg-elevated text-accent font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <span aria-hidden className="mx-3.5 h-4 w-0.5 rounded-full bg-accent" />
          <LanguageToggle locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
