import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LazyMotionProvider } from "@/components/LazyMotionProvider";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioAbout } from "@/components/portfolio/PortfolioAbout";
import { PortfolioServices } from "@/components/portfolio/PortfolioServices";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";

const Index = () => {
  return (
    <LazyMotionProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <PortfolioNavbar />
        <main>
          <PortfolioHero />
          <PortfolioAbout />
          <PortfolioServices />
          <PortfolioContact />
        </main>
        <PortfolioFooter />
      </div>
    </LazyMotionProvider>
  );
};

export default Index;
