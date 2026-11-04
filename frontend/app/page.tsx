import HeroSection from "../features/home/components/HeroSection";
import FeaturesSection from "../features/home/components/FeaturesSection";
import HowItWorksSection from "../features/home/components/HowItWorksSection";
import StatsSection from "../features/home/components/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
    </>
  );
}