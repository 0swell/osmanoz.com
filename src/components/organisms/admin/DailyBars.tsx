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
      <div className="mt-4 flex h-36 gap-1.5">
        {data.map(({ day, count }) => (
          <div key={day.toISOString()} className="flex flex-1 flex-col gap-1">
            <div className="relative flex flex-1 items-end">
              <div
                style={{ height: `${Math.max(3, (count / max) * 100)}%` }}
                className={`w-full rounded-t ${count > 0 ? "bg-accent" : "bg-elevated"}`}
                title={`${formatDay(day)}: ${count}`}
              />
            </div>
            <span className={`text-center text-[10px] ${count > 0 ? "font-semibold text-accent" : "text-muted"}`}>
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
