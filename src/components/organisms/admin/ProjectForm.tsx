import { saveProject, deleteProject } from "@/app/admin/actions";
import { Button } from "@/components/atoms/Button";
import type { Project } from "@prisma/client";
import type { ProjectLinks } from "@/types";

const inputCls =
  "mt-1 w-full rounded-xl border-2 border-line bg-background px-3 py-2 text-sm outline-none focus:border-accent";

export function ProjectForm({ project }: { project?: Project }) {
  const links = (project?.links ?? {}) as ProjectLinks;
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-5">
      <form action={saveProject} className="grid gap-3 sm:grid-cols-2">
        {project && <input type="hidden" name="id" value={project.id} />}
        <label className="text-sm font-medium sm:col-span-2">
          Başlık <span className="text-xs text-muted">(max 40)</span>
          <input name="title" defaultValue={project?.title} required maxLength={40} className={inputCls} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Açıklama <span className="text-xs text-muted">(max 200 — kartlar eşit boyda kalsın diye)</span>
          <textarea name="desc" defaultValue={project?.desc} required rows={3} maxLength={200} className={inputCls} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Tech Stack (virgülle ayır) <span className="text-xs text-muted">(max 60)</span>
          <input
            name="techStack"
            defaultValue={project?.techStack.join(", ")}
            placeholder="Next.js, TypeScript, Tailwind"
            maxLength={60}
            className={inputCls}
          />
        </label>
        <label className="text-sm font-medium">
          GitHub Linki
          <input name="github" type="url" defaultValue={links.github} className={inputCls} />
        </label>
        <label className="text-sm font-medium">
          Canlı Link
          <input name="live" type="url" defaultValue={links.live} className={inputCls} />
        </label>
        <label className="text-sm font-medium">
          Sıra
          <input name="order" type="number" defaultValue={project?.order ?? 0} className={inputCls} />
        </label>
        <label className="flex items-end gap-2 pb-2 text-sm font-medium">
          <input
            name="isActive"
            type="checkbox"
            defaultChecked={project?.isActive ?? true}
            className="size-4 accent-[var(--accent)]"
          />
          Yayında
        </label>
        <div className="sm:col-span-2">
          <Button type="submit">{project ? "Güncelle" : "Ekle"}</Button>
        </div>
      </form>
      {project && (
        <form action={deleteProject} className="mt-2">
          <input type="hidden" name="id" value={project.id} />
          <button className="text-xs text-red-500 hover:underline cursor-pointer">
            Projeyi sil
          </button>
        </form>
      )}
    </div>
  );
}
