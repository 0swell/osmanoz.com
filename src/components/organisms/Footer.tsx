import { SocialLinks } from "@/components/molecules/SocialLinks";
import { CopyEmailButton } from "@/components/molecules/CopyEmailButton";
import { Logo } from "@/components/atoms/Logo";
import { SITE } from "@/lib/site";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const updated = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(SITE.updated));

  return (
    <footer className="border-t-2 border-line bg-surface px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-auto sm:h-14" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{dict.footer.contact}:</span>
            <CopyEmailButton
              email="z0nams0@gmail.com"
              copiedText={dict.footer.copied}
              failText={dict.footer.copyFail}
            />
          </div>
        </div>
        <SocialLinks />
        <div className="text-center text-xs text-muted sm:text-right">
          <p>
            © {new Date().getFullYear()} Osman Öz. {dict.footer.rights}
          </p>
          <p className="mt-1">
            {dict.footer.updated}: <time dateTime={SITE.updated}>{updated}</time>
          </p>
        </div>
      </div>
    </footer>
  );
}
