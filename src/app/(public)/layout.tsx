import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { ScrollProgress } from "@/components/organisms/ScrollProgress";
import { ScrollToTop } from "@/components/organisms/ScrollToTop";
import { getDictionary, getLocale } from "@/i18n/locale";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return (
    <>
      <ScrollProgress />
      <Navbar sections={dict.nav} locale={locale} />
      <main>{children}</main>
      <Footer dict={dict} />
      <ScrollToTop />
    </>
  );
}
