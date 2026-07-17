import { prisma } from "@/lib/prisma";
import { formatDateTime } from "@/utils/format";

export const dynamic = "force-dynamic";

function Table({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: (string | number | boolean | null)[][];
}) {
  return (
    <section aria-label={title} className="rounded-2xl border-2 border-line bg-surface p-5">
      <h2 className="font-display text-lg font-bold">
        {title} <span className="text-sm font-normal text-muted">({rows.length} kayıt)</span>
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b-2 border-line text-muted">
              {headers.map((h) => (
                <th key={h} className="px-3 py-2 font-medium whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={headers.length} className="px-3 py-6 text-center text-muted">
                  Kayıt yok
                </td>
              </tr>
            ) : (
              rows.map((cells, i) => (
                <tr key={i} className="border-b border-line/50 last:border-0">
                  {cells.map((c, j) => (
                    <td key={j} className="px-3 py-2 whitespace-nowrap max-w-64 truncate align-top">
                      {c === null ? <span className="text-muted">—</span> : String(c)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function TablesPage() {
  const [projects, analytics, settings] = await Promise.all([
    prisma.project.findMany({ orderBy: { order: "asc" } }).catch(() => []),
    prisma.analytics
      .findMany({ orderBy: { createdAt: "desc" }, take: 100, include: { project: { select: { title: true } } } })
      .catch(() => []),
    prisma.settings.findMany().catch(() => []),
  ]);

  return (
    <div className="space-y-8">
      <Table
        title="Project"
        headers={["Sıra", "Başlık", "Slug", "Tıklama", "Yayında", "Oluşturulma", "Güncellenme"]}
        rows={projects.map((p) => [
          p.order,
          p.title,
          p.slug,
          p.clickCount,
          p.isActive ? "✓" : "✗",
          formatDateTime(p.createdAt),
          formatDateTime(p.updatedAt),
        ])}
      />
      <Table
        title="Analytics (son 100)"
        headers={["Event", "Proje", "Tarih"]}
        rows={analytics.map((a) => [
          a.eventType,
          a.project?.title ?? null,
          formatDateTime(a.createdAt),
        ])}
      />
      <Table
        title="Settings"
        headers={["Key", "Value"]}
        rows={settings.map((s) => [s.key, s.value])}
      />
    </div>
  );
}
