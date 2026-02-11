import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { GitBranch, Link2, Database, ShieldCheck, Webhook, Server, Plug, Gauge } from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "n8n Workflow Architecture",
    description: "Designing complex, multi-branch automations from scratch.",
  },
  {
    icon: Link2,
    title: "API Integration & Orchestration",
    description: "Connecting disparate systems seamlessly.",
  },
  {
    icon: Database,
    title: "Data Transformation & Processing",
    description: "Clean, structure, and route data where it needs to go.",
  },
  {
    icon: ShieldCheck,
    title: "Error Handling & Reliability",
    description: "Building workflows that gracefully handle edge cases.",
  },
  {
    icon: Webhook,
    title: "Webhook & Event-Driven Automation",
    description: "Trigger actions in real-time across platforms.",
  },
  {
    icon: Server,
    title: "Database Operations",
    description: "Read, write, and sync data across SQL and NoSQL systems.",
  },
  {
    icon: Plug,
    title: "Third-Party Service Connections",
    description: "Integrating tools like Slack, Google Sheets, CRMs, and more.",
  },
  {
    icon: Gauge,
    title: "Workflow Optimization",
    description: "Refactoring existing automations for speed and maintainability.",
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
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group cursor-pointer"
              >
                <div className="glass-card p-6 h-full hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <m.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </m.div>
                  <h3 className="font-display text-base font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
