"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/dictionaries";

/* Bayrak emoji'leri Windows'ta render edilmediği için mini SVG bayraklar kullanılıyor. */
function TrFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9.5" cy="8" r="4" fill="#fff" />
      <circle cx="10.5" cy="8" r="3.2" fill="#E30A17" />
      <polygon
        points="14.2,5.9 14.7,7.4 16.3,7.4 15,8.35 15.5,9.9 14.2,8.95 12.9,9.9 13.4,8.35 12.1,7.4 13.7,7.4"
        fill="#fff"
      />
    </svg>
  );
}

function EnFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M12,0 V16 M0,8 H24" stroke="#fff" strokeWidth="5" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const next = locale === "tr" ? "en" : "tr";

  function switchLocale() {
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    router.refresh();
  }

  return (
    <button
      onClick={switchLocale}
      aria-label={next === "en" ? "Switch to English" : "Türkçeye geç"}
      className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg px-1.5 sm:px-2.5 py-1.5 text-xs sm:text-sm font-medium text-muted hover:bg-elevated hover:text-foreground transition-colors cursor-pointer"
    >
      {locale === "tr" ? <TrFlag /> : <EnFlag />}
      {locale.toUpperCase()}
    </button>
  );
}
