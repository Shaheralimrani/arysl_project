import {
  Upload,
  CheckCircle2,
  Clock3,
  Star,
  LucideIcon,
} from "lucide-react";

import { ContributorStat } from "../types/contributor.types";

const icons: Record<ContributorStat["icon"], LucideIcon> = {
  upload: Upload,
  check: CheckCircle2,
  clock: Clock3,
  star: Star,
};

const iconStyles: Record<ContributorStat["icon"], string> = {
  upload: "bg-blue-50 text-blue-600",
  check: "bg-emerald-50 text-emerald-600",
  clock: "bg-amber-50 text-amber-600",
  star: "bg-violet-50 text-violet-600",
};

interface Props {
  stat: ContributorStat;
}

export default function ContributorStatCard({ stat }: Props) {
  const Icon = icons[stat.icon];

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconStyles[stat.icon]}`}
        >
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-5 text-sm font-medium text-gray-500">
        {stat.title}
      </p>

      <p className="mt-2 text-3xl font-bold text-gray-900">
        {stat.value}
      </p>

      <p className="mt-2 text-xs text-gray-400">
        {stat.description}
      </p>
    </article>
  );
}