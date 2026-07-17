import { ScrollStack } from "@/components/organisms/ScrollStack";
import { Hero } from "@/components/organisms/Hero";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { CvSection } from "@/components/organisms/CvSection";
import { getDictionary } from "@/i18n/locale";

export default async function HomePage() {
  const dict = await getDictionary();
  return (
    <ScrollStack
      sections={[
        <Hero key="hero" dict={dict} />,
        <ProjectsSection key="projects" dict={dict} />,
        <CvSection key="cv" dict={dict} />,
      ]}
    />
  );
}
