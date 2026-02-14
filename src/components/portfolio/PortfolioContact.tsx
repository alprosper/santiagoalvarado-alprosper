import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PortfolioContact = ({ embedded }: { embedded?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const inner = (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 md:p-12 text-center glow-effect"
    >
      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-sm text-primary mb-6">
        Contact
      </span>
      
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Let's Build <span className="gradient-text">Something</span>
      </h2>
      
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
        Have a process that's crying out for automation? Let's talk about how we can make your systems work smarter. Reach out and let's turn your workflow headaches into smooth operations.
      </p>

      <Button
        variant="glow"
        size="lg"
        className="group"
        asChild
      >
        <a href="mailto:hello@santiagoalvarado.com">
          Get In Touch
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </m.div>
  );

  if (embedded) return <div id="contact">{inner}</div>;

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative">{inner}</div>
    </section>
  );
};

