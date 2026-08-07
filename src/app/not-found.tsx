import Link from "next/link";
import { Home } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Logo className="h-16 w-auto" />
      <div>
        <p className="font-display text-6xl font-bold text-accent">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold">Sayfa bulunamadı</h1>
        <p className="mt-2 text-muted">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        <Home size={16} />
        Ana sayfaya dön
      </Link>
    </main>
  );
}
