import { dashboardStats } from "../data/dashboard.data";
import StatCard from "./StatCard";

export default function StatsOverview() {
  return (
    <section className="mb-8">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          نظرة عامة على نشاطك
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          ملخص إحصائيات استخدامك للنظام.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}