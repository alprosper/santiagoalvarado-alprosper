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
            Building <span className="gradient-text">Intelligent</span> Automation
          </h2>
        </m.div>

        <div className="grid md:grid-cols-2 gap-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 flex items-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build intelligent automation solutions that connect your tools, streamline your workflows, and free your team to focus on what matters. With expertise in <span className="text-foreground font-medium">n8n and API integrations</span>, I design systems that are reliable, scalable, and actually solve real business problems—not just tech for tech's sake.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-4 aspect-video flex items-center justify-center overflow-hidden"
          >
            {/* Replace the placeholder below with your video embed */}
            <div className="w-full h-full rounded-xl bg-muted/30 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              <span className="text-sm">Video coming soon</span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};
