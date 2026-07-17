"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/molecules/LogoutButton";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";

const tabs = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/tables", label: "Tablolar" },
];

export function AdminHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b-2 border-line bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold">
            osmanoz<span className="text-accent">.com</span>{" "}
            <span className="text-sm font-normal text-muted">/ admin</span>
          </span>
          <nav className="flex items-center gap-1">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  pathname.startsWith(t.href)
                    ? "bg-elevated text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted sm:inline">
            Admin (Osman Öz) Logged In
          </span>
          <ThemeToggle />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
