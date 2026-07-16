import { formatNumber } from "@/utils/format";

export function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-5">
      <div className="flex items-center justify-between text-muted">
        <span className="text-sm">{label}</span>
        {icon}
      </div>
      <p className="mt-2 font-display text-3xl font-bold">{formatNumber(value)}</p>
    </div>
  );
}
