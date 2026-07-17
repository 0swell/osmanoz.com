import { SocialLinks } from "@/components/molecules/SocialLinks";
import { CopyEmailButton } from "@/components/molecules/CopyEmailButton";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t-2 border-line bg-surface px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{dict.footer.contact}:</span>
          <CopyEmailButton
            email="z0nams0@gmail.com"
            copiedText={dict.footer.copied}
            failText={dict.footer.copyFail}
          />
        </div>
        <SocialLinks />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Osman Öz. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
