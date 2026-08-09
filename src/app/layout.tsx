import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/atoms/JsonLd";
import { getLocale } from "@/i18n/locale";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

// "light dark": tarayıcıya iki temayı da kendimiz yönettiğimizi bildirir;
// Android Chrome'un "siteleri koyu temaya zorla" karartması bu sayede devre dışı kalır
export const viewport: Viewport = {
  colorScheme: "light dark",
};

const description =
  "Osman Öz — yazılım mühendisi, MAKÜ Bilgisayar Mühendisliği mezunu. React, Next.js ve TypeScript ile modern web ve makine öğrenmesi projeleri geliştiriyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Osman Öz — Software Developer | React, Next.js & TypeScript",
    template: "%s | Osman Öz",
  },
  description,
  keywords: [
    "Osman Öz",
    "Osman Oz",
    "osmanoz",
    "Software Developer",
    "Yazılım Geliştirici",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolyo",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Osman Öz — Software Developer",
    description,
    url: SITE.url,
    siteName: "osmanoz.com",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Öz — Software Developer",
    description,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
