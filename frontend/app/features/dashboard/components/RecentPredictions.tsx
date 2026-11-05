import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { recentPredictions } from "../data/dashboard.data";

export default function RecentPredictions() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            آخر عمليات التعرف
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            أحدث النتائج التجريبية.
          </p>
        </div>

        <Link
          href="/predict"
          className="flex shrink-0 items-center gap-2 text-xs font-semibold text-teal-700 transition hover:text-teal-900"
        >
          تعرف على إشارة
          <ArrowLeft size={15} />
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {recentPredictions.map((prediction) => (
          <div
            key={prediction.id}
            className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {prediction.predictedText}
                </h3>

                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock3 size={13} />
                  {prediction.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pr-12 sm:pr-0">
              <span className="text-xs text-slate-500">
                الثقة
              </span>

              <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                {prediction.confidence}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}