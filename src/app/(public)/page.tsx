import { ScrollStack } from "@/components/organisms/ScrollStack";
import { Hero } from "@/components/organisms/Hero";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { CvSection } from "@/components/organisms/CvSection";

export const revalidate = 60;

export default function HomePage() {
  return (
    <ScrollStack
      sections={[<Hero key="hero" />, <ProjectsSection key="projects" />, <CvSection key="cv" />]}
    />
  );
}
