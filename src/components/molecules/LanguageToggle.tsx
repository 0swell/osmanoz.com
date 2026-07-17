"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/dictionaries";

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
      className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted hover:bg-elevated hover:text-foreground transition-colors cursor-pointer"
    >
      {next.toUpperCase()}
    </button>
  );
}
