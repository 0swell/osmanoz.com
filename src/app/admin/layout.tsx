import type { Metadata } from "next";

// Admin alanı arama motorlarında indexlenmesin (robots.txt Disallow'a ek ikinci katman)
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
