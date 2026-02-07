import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Users, Bell, RefreshCw } from "lucide-react";

const projects = [
  {
    icon: Users,
    title: "Multi-Stage Lead Processing Pipeline",
    description: "Built an end-to-end workflow that captures leads from web forms, enriches data via API calls, scores prospects, routes them to the right sales team, and logs everything to a CRM—all automatically.",
    result: "Reduced manual data entry by 90% and cut response time from hours to seconds.",
  },
  {
    icon: Bell,
    title: "Cross-Platform Notification System",
    description: "Designed an integration hub that monitors multiple data sources, applies business logic to filter events, and delivers targeted notifications via Slack, email, and SMS based on urgency and recipient preferences.",
    result: "Now handles 1,000+ events daily with zero manual oversight.",
  },
  {
    icon: RefreshCw,
    title: "Database Sync & Transformation Engine",
    description: "Created a robust workflow that pulls data from legacy systems, transforms it to match modern schema requirements, handles duplicate detection, and syncs bidirectionally with a cloud database.",
    result: "Ensures data consistency across the organization while maintaining audit trails.",
  },
];

export const PortfolioProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </m.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <m.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <m.div
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </m.div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <p className="text-sm font-medium text-primary">{project.result}</p>
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
