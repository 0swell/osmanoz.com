import { Download, MousePointerClick, FolderKanban } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCvUrl } from "@/lib/data";
import { StatCard } from "@/components/molecules/StatCard";
import { DailyBars } from "@/components/organisms/admin/DailyBars";
import { ProjectForm } from "@/components/organisms/admin/ProjectForm";
import { CvUploadForm } from "@/components/organisms/admin/CvUploadForm";

export const dynamic = "force-dynamic";

const DAYS = 14;

function lastNDays(): Date[] {
  const days: Date[] = [];
  for (let i = DAYS - 1; i >= 0; i--) {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - i);
    days.push(d);
  }
  return days;
}

export default async function DashboardPage() {
  const since = lastNDays()[0];
  const [projects, cvCount, clickCount, events, cvUrl] = await Promise.all([
    prisma.project.findMany({ orderBy: { order: "asc" } }).catch(() => []),
    prisma.analytics.count({ where: { eventType: "CV_DOWNLOAD" } }).catch(() => 0),
    prisma.analytics.count({ where: { eventType: "CARD_CLICK" } }).catch(() => 0),
    prisma.analytics
      .findMany({
        where: { createdAt: { gte: since } },
        select: { eventType: true, createdAt: true },
      })
      .catch(() => []),
    getCvUrl(),
  ]);

  const days = lastNDays();
  const byDay = (type: "CV_DOWNLOAD" | "CARD_CLICK") =>
    days.map((day) => {
      const next = new Date(day);
      next.setDate(next.getDate() + 1);
      return {
        day,
        count: events.filter(
          (e) => e.eventType === type && e.createdAt >= day && e.createdAt < next
        ).length,
      };
    });

  return (
    <div className="space-y-8">
      <section aria-label="Özet">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label="CV İndirme" value={cvCount} icon={<Download size={18} />} />
          <StatCard label="Kart Tıklama" value={clickCount} icon={<MousePointerClick size={18} />} />
          <StatCard label="Proje" value={projects.length} icon={<FolderKanban size={18} />} />
        </div>
      </section>

      <section aria-label="Zaman bazlı analitik" className="grid gap-4 lg:grid-cols-2">
        <DailyBars title={`CV İndirme (son ${DAYS} gün)`} data={byDay("CV_DOWNLOAD")} />
        <DailyBars title={`Kart Tıklama (son ${DAYS} gün)`} data={byDay("CARD_CLICK")} />
      </section>

      <section aria-label="CV yönetimi">
        <CvUploadForm currentUrl={cvUrl} />
      </section>

      <section aria-label="Proje yönetimi" className="space-y-4">
        <h2 className="font-display text-xl font-bold">Projeler</h2>
        {projects.map((p) => (
          <ProjectForm key={p.id} project={p} />
        ))}
        <h3 className="font-display font-semibold text-muted">Yeni Proje</h3>
        <ProjectForm />
      </section>
    </div>
  );
}
