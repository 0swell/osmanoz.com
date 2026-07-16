import { LogoutButton } from "@/components/molecules/LogoutButton";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b-2 border-line bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <span className="font-display font-bold">
            osmanoz<span className="text-accent">.com</span>{" "}
            <span className="text-sm font-normal text-muted">/ admin</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-muted sm:inline">
              Admin (Osman Öz) Logged In
            </span>
            <ThemeToggle />
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}
