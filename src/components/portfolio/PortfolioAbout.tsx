import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";

export const PortfolioAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary/[0.06] to-transparent" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute -right-40 top-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Building <span className="gradient-text">Intelligent</span> Automation
          </h2>
        </m.div>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass-card p-10 md:p-12 flex items-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I build intelligent automation solutions that connect your tools, streamline your workflows, and free your team to focus on what matters. With expertise in <span className="text-foreground font-medium">n8n and API integrations</span>, I design systems that are reliable, scalable, and actually solve real business problems—not just tech for tech's sake.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 glass-card p-4 aspect-video md:aspect-auto flex items-center justify-center overflow-hidden"
          >
            <iframe
              className="w-full h-full rounded-xl min-h-[280px]"
              src="https://www.youtube.com/embed/eEBevI6JmZY"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};
