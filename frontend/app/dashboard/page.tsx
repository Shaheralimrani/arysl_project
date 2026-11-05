import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import WelcomeCard from "../features/dashboard/components/WelcomeCard";
import StatsOverview from "../features/dashboard/components/StatsOverveiw";
import QuickActions from "../features/dashboard/components/QuickActions";
import RecentPredictions from "../features/dashboard/components/RecentPredictions";
import YSLInfoCard from "../features/dashboard/components/YSLInfoCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader />

        <WelcomeCard />

        <StatsOverview />

        <QuickActions />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentPredictions />
          </div>

          <div>
            <YSLInfoCard />
          </div>
        </div>
      </div>
    </main>
  );
}