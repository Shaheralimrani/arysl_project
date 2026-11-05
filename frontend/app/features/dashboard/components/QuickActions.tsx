import { quickActions } from "../data/dashboard.data";
import QuickActionCard from "./QuickActionCard";

export default function QuickActions() {
  return (
    <section className="mb-8">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          الوصول السريع
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          انتقل مباشرة إلى الخدمات المتاحة.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {quickActions.map((action) => (
          <QuickActionCard key={action.id} action={action} />
        ))}
      </div>
    </section>
  );
}