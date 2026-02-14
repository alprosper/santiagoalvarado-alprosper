import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ghlWorkflow1 from "@/assets/portfolio/ghl-workflow-1.png";
import ghlWorkflow2 from "@/assets/portfolio/ghl-workflow-2.png";
import ghlWorkflow3 from "@/assets/portfolio/ghl-workflow-3.jpg";
import ghlWorkflow4 from "@/assets/portfolio/ghl-workflow-4.png";
import appDev1 from "@/assets/portfolio/app-dev-1.png";
import appDev2 from "@/assets/portfolio/app-dev-2.png";
import appDev3 from "@/assets/portfolio/app-dev-3.png";
import websiteDev1 from "@/assets/portfolio/website-dev-1.png";
import websiteDev2 from "@/assets/portfolio/website-dev-2.png";
import websiteDev3 from "@/assets/portfolio/website-dev-3.png";
import n8nWorkflow1 from "@/assets/portfolio/n8n-workflow-1.png";
import n8nWorkflow2 from "@/assets/portfolio/n8n-workflow-2.png";
import n8nWorkflow3 from "@/assets/portfolio/n8n-workflow-3.png";
import n8nWorkflow4 from "@/assets/portfolio/n8n-workflow-4.png";
import n8nWorkflow5 from "@/assets/portfolio/n8n-workflow-5.png";
import websiteDevThumb from "@/assets/portfolio/website-dev-thumb.png";

type GalleryItem = {
  title: string;
  description: string;
  images: { src: string; caption: string }[];
  thumbnail?: string;
  tag: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "n8n Workflow Orchestration",
    description: "Complex multi-service automations with data transformations, conditional routing, and real-time event processing.",
    images: [
      { src: n8nWorkflow1, caption: "An AI Agent for quick executions and lookups via SMS" },
      { src: n8nWorkflow2, caption: "An AI Agent that reports on ongoing/active tasks and internal conversations from various tools to provide a high-level view of operations" },
      { src: n8nWorkflow3, caption: "An automation that will check for daily webinars completed and will provide the reports you need via Email" },
      { src: n8nWorkflow4, caption: "An AI Agent that can be prompted via SMS to review and report on various Google Sheets" },
      { src: n8nWorkflow5, caption: "An automation to monitor RSS feeds for specific topics and/or keywords, and will send you an SMS alert when the topic is found" },
    ],
    tag: "Automation",
  },
  {
    title: "GHL Workflow Automation",
    description: "Advanced multi-step workflows with conditional logic, automated lead nurturing, and pipeline management inside GoHighLevel.",
    images: [
      { src: ghlWorkflow1, caption: "OpenAI-powered call summary and action items for the assigned user" },
      { src: ghlWorkflow2, caption: "SMS-to-AI Agent automation for processing responses and alerting the team" },
      { src: ghlWorkflow3, caption: "Booking bot activation workflow for qualifying and booking new leads" },
      { src: ghlWorkflow4, caption: "Standard folder creation and organization for workflows" },
    ],
    tag: "Automation",
  },
  {
    title: "API/App Development",
    description: "Custom applications, portals, and tools built to centralize workflows and connect seamlessly with platforms like GoHighLevel.",
    images: [
      { src: appDev1, caption: "Login screen for custom tools/apps" },
      { src: appDev2, caption: "Custom portals that connect to other applications to help centralize usage" },
      { src: appDev3, caption: "Custom tools that connect to GHL" },
    ],
    tag: "Development",
  },
  {
    title: "Website Development",
    description: "High-performance marketing sites with mobile-first design, SEO optimization, and analytics integration.",
    thumbnail: websiteDevThumb,
    images: [
      { src: websiteDev1, caption: "alprosper.com — SaaS marketing website with analytics dashboard and strategy call booking" },
      { src: websiteDev2, caption: "qlinks.bio — Link-in-bio platform with pricing tiers and audience engagement tools" },
      { src: websiteDev3, caption: "artisans.com — Luxury home organization service site with design consultation booking" },
    ],
    tag: "Development",
  },
];

export const PortfolioGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
      setSelectedImageIndex(0);
    }
  };
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
      setSelectedImageIndex(0);
    }
  };

  const selected = selectedIndex !== null ? galleryItems[selectedIndex] : null;
  const currentImage = selected ? selected.images[selectedImageIndex] : null;

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of projects, automations, and solutions I've built
          </p>
        </m.div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-16">
          {galleryItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  !isEven ? "md:direction-rtl" : ""
                }`}
              >
                {/* Screenshot */}
                <div
                  className={`group relative cursor-pointer ${
                    !isEven ? "md:order-2" : "md:order-1"
                  }`}
                  onClick={() => { setSelectedIndex(index); setSelectedImageIndex(0); }}
                >
                  <div className="glass-card overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.thumbnail || item.images[0].src}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <ZoomIn className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      {item.images.length > 1 && (
                        <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-foreground font-medium">
                          {item.images.length} images
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail navigation dots */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const prev = (index - 1 + galleryItems.length) % galleryItems.length;
                        document.getElementById(`project-${prev}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {index + 1} / {galleryItems.length}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const next = (index + 1) % galleryItems.length;
                        document.getElementById(`project-${next}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div
                  id={`project-${index}`}
                  className={`flex flex-col justify-center ${
                    !isEven ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium mb-4">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <button
                    onClick={() => { setSelectedIndex(index); setSelectedImageIndex(0); }}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    View full screenshot
                    <ZoomIn className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </button>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal — image left, description right */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
        <DialogContent className="max-w-6xl w-[95vw] glass-card border-border/30 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selected?.title ?? "Gallery Item"}
          </DialogTitle>
          {selected && currentImage && (
            <div className="grid md:grid-cols-[1fr_320px] min-h-[50vh]">
              {/* Left — Image */}
              <div className="relative bg-secondary/30 flex items-center justify-center overflow-hidden">
                <img
                  src={currentImage.src}
                  alt={currentImage.caption || selected.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />

                {/* Project nav arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right — Description */}
              <div className="p-6 md:p-8 flex flex-col justify-between border-l border-border/30">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium mb-3">
                    {selected.tag}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                    {selected.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {selected.description}
                  </p>
                  {currentImage.caption && (
                    <p className="text-xs text-muted-foreground/80 italic border-t border-border/20 pt-3">
                      {currentImage.caption}
                    </p>
                  )}
                </div>

                {/* Image thumbnails for multi-image projects */}
                {selected.images.length > 1 && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <span className="text-xs text-muted-foreground mb-2 block">
                      {selectedImageIndex + 1} of {selected.images.length} screenshots
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {selected.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImageIndex(i)}
                          className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                            i === selectedImageIndex
                              ? "border-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                              : "border-border/30 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.caption || `Screenshot ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">
                    Project {selectedIndex !== null ? selectedIndex + 1 : 0} / {galleryItems.length}
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
