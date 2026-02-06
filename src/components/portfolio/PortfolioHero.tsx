import { m } from "@/components/LazyMotionProvider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import headshot from "@/assets/headshot.png";

export const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                Marketing & Automation Specialist
              </span>
            </m.div>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mt-8">
              Santiago <span className="gradient-text glow-text">Alvarado</span>
            </h1>

            {/* Tagline */}
            <m.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I help businesses generate leads and automate their processes so they can focus on what they're best at.
            </m.p>

            {/* CTA */}
            <m.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                variant="glow"
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Services
              </Button>
            </m.div>
          </div>

          {/* Right Content - Headshot */}
          <m.div
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />
            
            <div className="relative">
              <img
                src={headshot}
                alt="Santiago Alvarado"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover glow-effect"
              />
            </div>
          </m.div>
        </div>

        {/* Scroll indicator */}
        <m.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </m.div>
      </div>
    </section>
  );
};
