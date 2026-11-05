import { Target, TrendingUp } from "lucide-react";

export default function ContributionProgress() {
  const approved = 18;
  const target = 25;
  const percentage = Math.min((approved / target) * 100, 100);

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-gray-900">
            تقدمك نحو الإنجاز القادم
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            استمر في المساهمة لفتح شارة صانع المعرفة.
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Target size={22} />
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between text-sm">
        <span className="font-semibold text-gray-700">
          المساهمات المقبولة
        </span>

        <span className="font-bold text-teal-700">
          {approved} / {target}
        </span>
      </div>

      <div
        className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100"
        role="progressbar"
        aria-label="التقدم نحو الشارة القادمة"
        aria-valuenow={approved}
        aria-valuemin={0}
        aria-valuemax={target}
      >
        <div
          className="h-full rounded-full bg-gradient-to-l from-teal-600 to-emerald-400 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
        <TrendingUp size={15} className="text-emerald-600" />

        <span>
          تحتاج إلى {target - approved} مساهمات مقبولة للوصول إلى هدفك.
        </span>
      </div>
    </section>
  );
}