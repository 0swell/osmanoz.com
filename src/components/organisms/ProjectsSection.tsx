import { getActiveProjects } from "@/lib/data";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import type { ProjectLinks } from "@/types";
import type { Dictionary } from "@/i18n/dictionaries";

export async function ProjectsSection({ dict }: { dict: Dictionary }) {
  const projects = await getActiveProjects();

  return (
    <section
      aria-label={dict.projects.title}
      className="flex min-h-screen items-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading>{dict.projects.title}</SectionHeading>
        <p className="mt-2 text-muted">{dict.projects.subtitle}</p>

        {projects.length === 0 ? (
          <p className="mt-10 rounded-2xl border-2 border-dashed border-line p-10 text-center text-muted">
            {dict.projects.empty}
          </p>
        ) : (
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                title={p.title}
                desc={p.desc}
                techStack={p.techStack}
                links={(p.links ?? {}) as ProjectLinks}
                codeLabel={dict.projects.code}
                liveLabel={dict.projects.live}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
