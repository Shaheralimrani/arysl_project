import ContributorStatCard from "./ContributorStatCard";
import { contributorStats } from "../data/contributor.data";

export default function ContributorStats() {
  return (
    <section className="mb-8">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900">
          ملخص نشاطك
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          نظرة عامة على مساهماتك وإنجازاتك.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {contributorStats.map((stat) => (
          <ContributorStatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}