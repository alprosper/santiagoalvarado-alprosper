import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";

export const PortfolioAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Turning <span className="gradient-text">Complexity</span> Into Growth
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a top-performing <span className="text-foreground font-medium">Marketing, Sales, and CRM Specialist</span> with extensive expertise in GoHighLevel automation and lead generation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I've successfully enhanced CRM setups and optimized marketing funnels for multiple clients, achieving significant ROI metrics and improved campaign performance through innovative workflow automations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By leveraging skills in CRM systems, landing page design, and omnichannel marketing, I create compelling, automated client solutions that streamline processes and enhance engagement strategies.
          </p>
        </m.div>
      </div>
    </section>
  );
};
