import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ChallengeSection from "@/components/sections/ChallengeSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AIMLSection from "@/components/sections/AIMLSection";
import TechnicalSection from "@/components/sections/TechnicalSection";
import MarketSection from "@/components/sections/MarketSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import TeamSection from "@/components/sections/TeamSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <HowItWorksSection />
      <AIMLSection />
      <TechnicalSection />
      <MarketSection />
      <ImpactSection />
      <PartnershipSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
