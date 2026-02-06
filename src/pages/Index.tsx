import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ProcessSection } from "@/components/ProcessSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LazyMotionProvider } from "@/components/LazyMotionProvider";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <LazyMotionProvider>
      {/* Structured Data for AEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema includeRating={true} ratingValue={5} reviewCount={50} />
      
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <main>
          <HeroSection />
          <ProcessSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LazyMotionProvider>
  );
};

export default Index;
