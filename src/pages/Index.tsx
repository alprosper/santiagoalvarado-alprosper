import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LazyMotionProvider } from "@/components/LazyMotionProvider";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";

import { PortfolioServices } from "@/components/portfolio/PortfolioServices";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { CursorGlow } from "@/components/CursorGlow";
import { TechMarquee } from "@/components/TechMarquee";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <LazyMotionProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <CursorGlow />
        <PortfolioNavbar />
        <main>
          <PortfolioHero />
          <TechMarquee />
          <PortfolioGallery />
          <PortfolioServices />
          <SectionDivider />
          <PortfolioContact />
        </main>
        <PortfolioFooter />
      </div>
    </LazyMotionProvider>
  );
};

export default Index;
