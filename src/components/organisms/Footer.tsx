import { SocialLinks } from "@/components/molecules/SocialLinks";
import { CopyEmailButton } from "@/components/molecules/CopyEmailButton";

export function Footer() {
  return (
    <footer className="border-t-2 border-line bg-surface px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <CopyEmailButton email="z0nams0@gmail.com" />
        <SocialLinks />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Osman Öz. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
