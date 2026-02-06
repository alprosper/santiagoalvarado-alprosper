import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Users, Zap, Globe, MapPin } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Lead Generation",
    description: "Strategic campaigns that attract and convert high-quality leads for your business.",
  },
  {
    icon: Zap,
    title: "CRM Automations",
    description: "GoHighLevel workflows that automate follow-ups, nurturing, and customer engagement.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Fast-loading, conversion-optimized websites and landing pages that drive results.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Get found by local customers with optimized Google Business profiles and local rankings.",
  },
];

export const PortfolioServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <m.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack marketing and automation solutions to help your business grow.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                  <m.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </m.div>
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
