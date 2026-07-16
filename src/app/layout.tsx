import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osmanoz.com"),
  title: {
    default: "Osman Öz — Portfolyo",
    template: "%s | Osman Öz",
  },
  description:
    "Osman Öz'ün kişisel web sayfası: projeler, profesyonel CV ve iletişim.",
  openGraph: {
    title: "Osman Öz — Portfolyo",
    description:
      "Osman Öz'ün kişisel web sayfası: projeler, profesyonel CV ve iletişim.",
    url: "https://osmanoz.com",
    siteName: "osmanoz.com",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
