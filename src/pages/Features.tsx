import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { LazyMotionProvider, m } from "@/components/LazyMotionProvider";
import { Bot, BarChart3, Zap, Monitor, Globe, Clock, MessageCircle, CreditCard, Megaphone, ThumbsUp, Sparkles, PenTool, Image, FileText, Users, Mail, Code, Blocks, Wrench, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/StructuredData";

const featureCategories = [
  {
    title: "Lead Generation & Sales",
    description: "Capture, nurture, and convert leads into paying customers.",
    features: [
      {
        icon: Bot,
        title: "Smart Automation",
        description: "Chatbots and automated responses that engage leads 24/7 without human intervention.",
      },
      {
        icon: Users,
        title: "Lead Scoring",
        description: "Automatically prioritize your hottest leads with intelligent scoring based on behavior.",
      },
      {
        icon: Mail,
        title: "Email Sequences",
        description: "Create personalized email drip campaigns that nurture leads on autopilot.",
      },
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Instant lead response and booking capabilities that never miss an opportunity.",
      },
    ],
  },
  {
    title: "Communication & Analytics",
    description: "Stay connected and make data-driven decisions.",
    features: [
      {
        icon: MessageCircle,
        title: "Unified Inbox",
        description: "All your conversations in one place. Never lose track of a lead again.",
      },
      {
        icon: Globe,
        title: "Multi-Channel",
        description: "Connect with customers across email, SMS, social media, and web from one platform.",
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Real-time insights and reporting to track your growth and optimize performance.",
      },
    ],
  },
  {
    title: "Business Operations",
    description: "Streamline your day-to-day and focus on growth.",
    features: [
      {
        icon: Monitor,
        title: "Website",
        description: "Fast-loading, mobile-optimized sites with quick-action buttons so leads can reach out instantly.",
      },
      {
        icon: CreditCard,
        title: "Integrated Payments",
        description: "Send invoices and collect payments seamlessly within the platform.",
      },
      {
        icon: Clock,
        title: "Save 10+ Hours/Week",
        description: "Automate repetitive tasks and focus on what matters most—growing your business.",
      },
    ],
  },
  {
    title: "Custom Solutions",
    description: "Tailored tools and integrations built specifically for your business needs.",
    features: [
      {
        icon: Code,
        title: "Custom API Integrations",
        description: "Connect any third-party service or platform with custom API integrations built for your workflow.",
      },
      {
        icon: Blocks,
        title: "Custom Applications",
        description: "Purpose-built apps and dashboards designed around your unique business processes.",
      },
      {
        icon: Wrench,
        title: "Bespoke Automation",
        description: "Custom automation workflows that fit your exact requirements—no cookie-cutter solutions.",
      },
    ],
  },
  {
    title: "AI-Powered Tools",
    description: "Optional AI features for those ready to leverage cutting-edge automation.",
    features: [
      {
        icon: Megaphone,
        title: "AI Ads Generator",
        description: "Create high-converting ad copy and visuals for Facebook, Google, and Instagram in seconds.",
      },
      {
        icon: ThumbsUp,
        title: "AI Ad Reviews",
        description: "Get instant AI-powered feedback on your ads with suggestions to improve performance and ROI.",
      },
      {
        icon: Sparkles,
        title: "AI Assistants",
        description: "Virtual assistants that handle scheduling, follow-ups, and customer inquiries automatically.",
      },
      {
        icon: PenTool,
        title: "AI Content Writer",
        description: "Generate blog posts, emails, and social media content tailored to your brand voice.",
      },
      {
        icon: Image,
        title: "AI Image Generator",
        description: "Create stunning visuals and graphics for marketing campaigns without a designer.",
      },
      {
        icon: FileText,
        title: "AI Proposal Builder",
        description: "Generate professional proposals and quotes in minutes with AI-powered templates.",
      },
    ],
  },
];

const Features = () => {

  return (
    <LazyMotionProvider>
      {/* Service Schema for AEO */}
      <ServiceSchema services={featureCategories} />
      
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <main>
          <section className="py-24 px-6 pt-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

            <div className="max-w-7xl mx-auto relative">
              {/* Section Header */}
              <m.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
                  All Features
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Everything You Need to <span className="gradient-text">Scale</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  We provide a complete suite of tools designed specifically for small businesses looking to compete.
                </p>
              </m.div>

              {/* Category Anchor Links */}
              <m.div
                className="flex flex-wrap justify-center gap-3 mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {featureCategories.map((category) => {
                  const slug = category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    const element = document.getElementById(slug);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  };
                  return (
                    <a
                      key={category.title}
                      href={`#${slug}`}
                      onClick={handleClick}
                      className="px-4 py-2 rounded-full glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      {category.title}
                    </a>
                  );
                })}
              </m.div>

              {/* Feature Categories */}
              {featureCategories.map((category, categoryIndex) => {
                const slug = category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                return (
                <m.div
                  key={category.title}
                  id={slug}
                  className="mb-20 last:mb-0 scroll-mt-32"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="mb-10 relative">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        {String(categoryIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground text-center max-w-xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.features.map((feature, featureIndex) => {
                      const Icon = feature.icon;
                      return (
                        <m.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.08 }}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            transition: { duration: 0.25, ease: "easeOut" } 
                          }}
                          className="group cursor-pointer"
                        >
                          <div className="glass-card p-6 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_40px_-10px_hsl(var(--primary)/0.25)] hover:bg-background/80">
                            <m.div
                              className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-primary/15 transition-all duration-300"
                              whileHover={{ scale: 1.15, rotate: 8 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </m.div>
                            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                          </div>
                        </m.div>
                      );
                    })}
                  </div>
                </m.div>
              );
              })}
            </div>
          </section>
          <CTASection hideTestimonialBadge />
        </main>
        <Footer />

        {/* Sticky CTA Button - Always visible */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button asChild size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
            <Link to="/book-strategy-call">
              <Calendar className="mr-2 w-5 h-5" />
              <span className="hidden sm:inline">Book Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </LazyMotionProvider>
  );
};

export default Features;
