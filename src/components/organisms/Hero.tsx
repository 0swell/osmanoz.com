export function Hero() {
  return (
    <section
      aria-label="Tanıtım"
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
          Merhaba, ben
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          Osman Öz
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Modern web teknolojileriyle üretiyorum. Projelerimi incelemek ve
          CV&apos;me göz atmak için aşağı kaydır.
        </p>
        <div
          aria-hidden
          className="mt-14 animate-bounce text-muted text-sm select-none"
        >
          ↓ kaydır
        </div>
      </div>
    </section>
  );
}
