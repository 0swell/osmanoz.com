/**
 * OZ logo — tema duyarlı. next-themes `.dark` sınıfını <html>'e paint öncesi eklediği için
 * doğru varyant CSS ile seçilir (JS flash'ı olmaz).
 * Light modda siyah OZ (şeffaf zemin), dark modda beyaz OZ (koyu zemin).
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/OZ-Logo-Light.svg"
        alt="Osman Öz"
        className={`block dark:hidden ${className}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/OZ-Logo-Dark.svg"
        alt=""
        aria-hidden="true"
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
