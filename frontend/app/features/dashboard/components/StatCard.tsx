import type { DashboardStat } from "../types/dashboard.types";

interface StatCardProps {
  stat: DashboardStat;
}

export default function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {stat.title}
          </p>

          <p className="mt-4 text-3xl font-bold text-slate-900">
            {stat.value}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">
        {stat.description}
      </p>
    </div>
  );
}