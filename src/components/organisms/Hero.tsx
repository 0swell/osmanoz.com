import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      aria-label={dict.hero.greet}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Glassmorphism arka plan lekeleri */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 size-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 size-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {dict.hero.greet}
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          Osman Öz
        </h1>
        <p className="mt-4 font-display text-lg font-medium text-muted sm:text-xl">
          {dict.hero.tagline}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {dict.hero.desc}
        </p>
        <div
          aria-hidden
          className="mt-14 animate-bounce text-muted text-sm select-none"
        >
          {dict.hero.scroll}
        </div>
      </div>
    </section>
  );
}
