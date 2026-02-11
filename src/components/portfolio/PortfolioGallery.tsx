import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  {
    title: "GHL Workflow Automation",
    description: "Advanced multi-step workflows with conditional logic, automated lead nurturing, and pipeline management inside GoHighLevel.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=GHL+Workflow",
    tag: "Automation",
  },
  {
    title: "AI Agent Deployment",
    description: "Intelligent conversational agents for 24/7 lead qualification, appointment booking, and smart follow-up sequences.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=AI+Agent",
    tag: "AI",
  },
  {
    title: "Custom API Integration",
    description: "Seamless connections between GoHighLevel and third-party tools with proper authentication, error handling, and logging.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=API+Integration",
    tag: "Integration",
  },
  {
    title: "Funnel & Pipeline System",
    description: "End-to-end funnel architecture with multi-stage pipelines, automated transitions, and conversion tracking.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=Funnel+Pipeline",
    tag: "Funnels",
  },
  {
    title: "n8n Workflow Orchestration",
    description: "Complex multi-service automations with data transformations, conditional routing, and real-time event processing.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=n8n+Workflow",
    tag: "Automation",
  },
  {
    title: "SaaS Marketing Website",
    description: "High-performance marketing sites with mobile-first design, SEO optimization, and analytics integration.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=SaaS+Website",
    tag: "Development",
  },
  {
    title: "CRM Data Migration",
    description: "Full migration from legacy CRMs—field mapping, data deduplication, automation rebuilds, and zero-downtime cutover.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=CRM+Migration",
    tag: "Migration",
  },
  {
    title: "Custom Dashboard App",
    description: "Bespoke dashboards and internal tools with real-time data, role-based access, and seamless stack integration.",
    image: "https://placehold.co/800x500/1a1a2e/f97316?text=Custom+Dashboard",
    tag: "Development",
  },
];

export const PortfolioGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const selected = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <m.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of projects, automations, and solutions I've built
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="glass-card overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs text-primary font-medium">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl w-[95vw] glass-card border-border/30 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selected?.title ?? "Gallery Item"}
          </DialogTitle>
          {selected && (
            <div className="relative">
              <div className="w-full aspect-video bg-secondary/50 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium mb-3">
                  {selected.tag}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  {selected.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selected.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {galleryItems.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
