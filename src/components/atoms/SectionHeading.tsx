export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
      {children}
    </h2>
  );
}
