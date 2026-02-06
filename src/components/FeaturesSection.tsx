import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Bot, BarChart3, Zap, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Smart chatbots and automated responses that engage leads 24/7 without human intervention.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and reporting to track your growth and optimize performance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant lead response and booking capabilities that never miss an opportunity.",
  },
  {
    icon: Monitor,
    title: "Website",
    description: "Fast-loading, mobile-optimized sites with quick-action buttons so leads can reach out instantly.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <m.div
          ref={ref}
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.6,
          }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            Powerful Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a complete suite of tools designed specifically for small businesses looking to compete.
          </p>
        </m.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300">
                  <m.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </m.div>
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* See All Features Button */}
        <m.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/features">
              See All Features
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
};