import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { GitBranch, Link2, Database, ShieldCheck, Webhook, Server, Plug, Gauge, Code2, Layers, Megaphone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const services = [
  {
    icon: GitBranch,
    title: "GoHighLevel Workflow Automation",
    description: "Building advanced GHL workflows, triggers, and custom automations that drive leads through your pipeline on autopilot.",
    details: "From multi-step drip campaigns to complex conditional logic, I architect GHL workflows that handle lead nurturing, appointment booking, and pipeline management without manual intervention. Every workflow includes error handling and performance monitoring.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=GHL+Workflow+Demo",
  },
  {
    icon: ShieldCheck,
    title: "GHL AI Agents & Automations",
    description: "Deploying intelligent AI-powered agents inside GoHighLevel for conversational booking, lead qualification, and smart follow-ups.",
    details: "I build AI agents that live inside your GHL account—handling inbound conversations, qualifying leads in real-time, booking appointments, and triggering follow-up sequences. These agents learn your business context and respond naturally 24/7.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=AI+Agent+Demo",
  },
  {
    icon: Link2,
    title: "GHL API & Custom Integrations",
    description: "Extending GoHighLevel with custom API integrations, webhooks, and third-party connections for limitless functionality.",
    details: "When native integrations aren't enough, I build custom API connections between GHL and your external tools—payment processors, data warehouses, custom apps, and more. Every integration includes proper authentication, error handling, and logging.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=API+Integration+Demo",
  },
  {
    icon: Database,
    title: "GHL Funnel & Pipeline Architecture",
    description: "Designing high-converting funnels, multi-stage pipelines, and automated follow-up sequences inside GoHighLevel.",
    details: "I design end-to-end funnel systems inside GHL—from landing pages and forms to multi-stage pipelines with automated stage transitions, task assignments, and conversion tracking. Each funnel is optimized for your specific sales process.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=Funnel+Pipeline+Demo",
  },
  {
    icon: Webhook,
    title: "n8n Workflow Automations",
    description: "Designing complex, multi-branch n8n automations that connect your entire tech stack beyond what native tools can do.",
    details: "For automations that go beyond any single platform, I use n8n to orchestrate complex workflows across dozens of services—data transformations, conditional routing, scheduled jobs, and real-time event processing with full visibility and control.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=n8n+Workflow+Demo",
  },
  {
    icon: Server,
    title: "SaaS Website Development",
    description: "Building modern, high-performance SaaS websites and landing pages that convert visitors into users.",
    details: "I build fast, responsive SaaS marketing sites and product landing pages using modern frameworks. Every site is optimized for performance, SEO, and conversion—with clean code, mobile-first design, and analytics integration.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=SaaS+Website+Demo",
  },
  {
    icon: Plug,
    title: "CRM Migration & Setup",
    description: "Seamless migration of contacts, pipelines, and automations into GoHighLevel or other platforms.",
    details: "I handle the full migration process—exporting data from your current CRM, mapping fields, cleaning and deduplicating records, rebuilding automations, and verifying everything works in GoHighLevel before cutover. Zero data loss guaranteed.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=CRM+Migration+Demo",
  },
  {
    icon: Code2,
    title: "API & App Development",
    description: "Building custom APIs, applications, and backend systems tailored to your business logic and integrations.",
    details: "From RESTful APIs to full-stack web applications, I develop custom software that fits your exact business requirements—authentication systems, dashboards, data processing pipelines, and internal tools that integrate with your existing stack.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=App+Development+Demo",
  },
  {
    icon: Layers,
    title: "Customized SaaS Solutions",
    description: "Developing bespoke SaaS platforms with custom features, user management, and scalable architecture.",
    details: "I build white-label and custom SaaS products from the ground up—multi-tenant architecture, subscription billing, user roles and permissions, API access, and scalable infrastructure designed to grow with your customer base.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=Custom+SaaS+Demo",
  },
  {
    icon: Megaphone,
    title: "SEO & Ad Management",
    description: "Driving growth through SEO strategy, LSA, and paid campaigns across Facebook, Instagram, and Google Ads.",
    details: "I manage end-to-end digital marketing—technical SEO audits, local service ads, and paid social/search campaigns on Facebook, Instagram, and Google. Every campaign is tracked, optimized, and tied back to real revenue metrics in your CRM.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=SEO+%26+Ads+Demo",
  },
  {
    icon: Gauge,
    title: "Workflow Optimization & Scaling",
    description: "Auditing and refactoring existing automations for speed, reliability, and scale as your business grows.",
    details: "I audit your existing automations to find bottlenecks, failures, and inefficiencies—then refactor them for reliability and speed. Includes monitoring setup, alerting, documentation, and a roadmap for scaling as volume increases.",
    placeholder: "https://placehold.co/800x500/1a1a2e/f97316?text=Optimization+Demo",
  },
];

export const PortfolioServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <m.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            Portfolio
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
                onClick={() => setSelectedService(service)}
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
                  <span className="inline-block mt-3 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    View Examples →
                  </span>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl w-[95vw] glass-card border-border/30 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedService?.title ?? "Service Details"}
          </DialogTitle>
          {selectedService && (
            <div className="flex flex-col">
              <div className="w-full aspect-video bg-secondary/50 overflow-hidden">
                <img
                  src={selectedService.placeholder}
                  alt={`${selectedService.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <selectedService.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">
                    {selectedService.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.details}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
