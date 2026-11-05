import ContributorHeader from "@/app/features/contributor/components/ContributorHeader";
import ContributorWelcome from "@/app/features/contributor/components/ContributorWelcome";
import ContributorStats from "@/app/features/contributor/components/ContributorStats";
import ContributionProgress from "@/app/features/contributor/components/ContributionProgress";
import RecentContributions from "@/app/features/contributor/components/RecentContributions";
import ContributorActions from "@/app/features/contributor/components/ContributorActions";
import ContributorBadges from "@/app/features/contributor/components/ContributorBadges";
import WorkspaceShell from "@/app/components/layout/WorkspaceShell";

export default function ContributorDashboardPage() {
  return (
    <WorkspaceShell>
    <main className="min-h-screen bg-gray-50/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ContributorHeader />

        <ContributorWelcome />

        <ContributorStats />

        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <RecentContributions />
            <ContributorBadges />
          </div>

          <div className="space-y-6">
            <ContributionProgress />
            <ContributorActions />
          </div>
        </div>
      </div>
    </main>
     </WorkspaceShell>
  );
}