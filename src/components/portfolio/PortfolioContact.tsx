import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const PortfolioContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <m.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center glow-effect"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-sm text-primary mb-6">
            Get In Touch
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Grow</span> Your Business?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Let's discuss how I can help automate your processes and generate more leads.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              className="group"
              asChild
            >
              <a href="https://alprosperai.com" target="_blank" rel="noopener noreferrer">
                View Testimonials
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="group"
              asChild
            >
              <a href="mailto:hello@santiagoalvarado.com">
                Send Me an Email
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </m.div>
      </div>
    </section>
  );
};
