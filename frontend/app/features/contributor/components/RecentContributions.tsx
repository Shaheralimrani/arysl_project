import {
  CheckCircle2,
  Clock3,
  Image as ImageIcon,
  Video,
  XCircle,
} from "lucide-react";

import { recentContributions } from "../data/contributor.data";
import { Contribution } from "../types/contributor.types";

const statusConfig = {
  approved: {
    label: "مقبولة",
    className: "bg-emerald-50 text-emerald-700",
    icon: CheckCircle2,
  },
  pending: {
    label: "قيد المراجعة",
    className: "bg-amber-50 text-amber-700",
    icon: Clock3,
  },
  rejected: {
    label: "مرفوضة",
    className: "bg-red-50 text-red-700",
    icon: XCircle,
  },
};

function ContributionStatus({ status }: { status: Contribution["status"] }) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${config.className}`}
    >
      <Icon size={14} />
      {config.label}
    </span>
  );
}

export default function RecentContributions() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <div>
          <h2 className="font-bold text-gray-900">
            أحدث مساهماتك
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            تابع حالة الملفات التي أرسلتها.
          </p>
        </div>

        <span className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
          آخر 4 مساهمات
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        {recentContributions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 p-5 transition hover:bg-gray-50/70 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                {item.type === "image" ? (
                  <ImageIcon size={20} />
                ) : (
                  <Video size={20} />
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {item.submittedAt}
                </p>
              </div>
            </div>

            <div className="sm:pr-4">
              <ContributionStatus status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}