import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { GitBranch, Link2, Database, ShieldCheck, Webhook, Server, Plug, Gauge, Code2, Layers, Megaphone } from "lucide-react";

const services = [
  { icon: GitBranch, title: "GHL Workflow Automation" },
  { icon: ShieldCheck, title: "GHL AI Agents" },
  { icon: Link2, title: "GHL API Integrations" },
  { icon: Database, title: "Funnel & Pipeline Architecture" },
  { icon: Webhook, title: "n8n Automations" },
  { icon: Server, title: "SaaS Website Development" },
  { icon: Plug, title: "CRM Migration & Setup" },
  { icon: Code2, title: "API & App Development" },
  { icon: Layers, title: "Custom SaaS Solutions" },
  { icon: Megaphone, title: "SEO & Ad Management" },
  { icon: Gauge, title: "Workflow Optimization" },
];

export const PortfolioServices = ({ embedded }: { embedded?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <>
      <m.div
        ref={ref}
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
          Services
        </span>
      </m.div>

      <div className="flex flex-wrap justify-center gap-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <m.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card px-4 py-3 flex items-center gap-2.5 hover:border-primary/30 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <Icon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">{service.title}</span>
            </m.div>
          );
        })}
      </div>
    </>
  );

  if (embedded) return <div>{content}</div>;

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">{content}</div>
    </section>
  );
};

