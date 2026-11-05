import {
  Award,
  Zap,
  BookOpen,
  Trophy,
  LockKeyhole,
} from "lucide-react";

import { contributorBadges } from "../data/contributor.data";

const badgeIcons = {
  award: Award,
  zap: Zap,
  "book-open": BookOpen,
  trophy: Trophy,
};

export default function ContributorBadges() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-gray-900">
            الشارات والإنجازات
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            إنجازاتك في مجتمع المساهمين.
          </p>
        </div>

        <Award size={22} className="text-amber-500" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {contributorBadges.map((badge) => {
          const Icon =
            badgeIcons[badge.icon as keyof typeof badgeIcons];

          return (
            <div
              key={badge.id}
              className={`rounded-xl border p-4 text-center ${
                badge.unlocked
                  ? "border-amber-100 bg-amber-50/60"
                  : "border-gray-100 bg-gray-50 opacity-60"
              }`}
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                  badge.unlocked
                    ? "bg-amber-100 text-amber-600"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {badge.unlocked ? (
                  <Icon size={23} />
                ) : (
                  <LockKeyhole size={21} />
                )}
              </div>

              <h3 className="mt-3 text-xs font-bold text-gray-800">
                {badge.title}
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-gray-500">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}