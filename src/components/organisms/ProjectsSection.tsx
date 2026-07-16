import { getActiveProjects } from "@/lib/data";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import type { ProjectLinks } from "@/types";

export async function ProjectsSection() {
  const projects = await getActiveProjects();

  return (
    <section
      aria-label="Projeler"
      className="flex min-h-screen items-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading>Projeler</SectionHeading>
        <p className="mt-2 text-muted">Üzerinde çalıştığım işlerden seçmeler.</p>

        {projects.length === 0 ? (
          <p className="mt-10 rounded-2xl border-2 border-dashed border-line p-10 text-center text-muted">
            Projeler yakında burada olacak.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                title={p.title}
                desc={p.desc}
                techStack={p.techStack}
                links={(p.links ?? {}) as ProjectLinks}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
