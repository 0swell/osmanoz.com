import { formatDay } from "@/utils/format";

/** Zaman bazlı analitik — grafik kütüphanesi yerine saf Tailwind bar'ları (CLAUDE.md madde 2). */
export function DailyBars({
  title,
  data,
}: {
  title: string;
  data: { day: Date; count: number }[];
}) {
  const max = Math.max(1, ...data.map((d) => d.count));
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-5">
      <h3 className="font-display font-semibold">{title}</h3>
      <div className="mt-4 flex h-32 items-end gap-1.5">
        {data.map(({ day, count }) => (
          <div key={day.toISOString()} className="group relative flex-1">
            <div
              style={{ height: `${Math.max(4, (count / max) * 100)}%` }}
              className={`w-full rounded-t ${count > 0 ? "bg-accent" : "bg-elevated"} transition-opacity group-hover:opacity-80`}
            />
            <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-foreground px-1.5 py-0.5 text-[10px] text-background opacity-0 group-hover:opacity-100">
              {count}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-muted">
        <span>{formatDay(data[0].day)}</span>
        <span>{formatDay(data[data.length - 1].day)}</span>
      </div>
    </div>
  );
}
