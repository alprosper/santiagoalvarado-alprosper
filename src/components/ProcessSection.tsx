import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef } from "react";
import { Megaphone, MessageSquare, Calendar, Star } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Create Awareness",
    description: "Build your digital presence with optimized websites, SEO, social media management, and targeted advertising.",
    icon: Megaphone,
    features: ["Website & SEO Optimization", "Reputation Management", "Social Media Planner", "Facebook & Google Ads"],
  },
  {
    step: "02",
    title: "Receive Inquiries",
    description: "Capture and respond to leads instantly with AI-powered automation that works 24/7.",
    icon: MessageSquare,
    features: ["Auto Email & Text Response", "AI Chat-Bot & Texting", "Calendar Bookings", "Appointment Reminders"],
  },
  {
    step: "03",
    title: "Provide Service",
    description: "Deliver exceptional service with streamlined scheduling, invoicing, and payment processing.",
    icon: Calendar,
    features: ["Run Booked Appointments", "Quick Estimates & Invoices", "Seamless Payments", "Service Tracking"],
  },
  {
    step: "04",
    title: "Capture Reviews",
    description: "Build trust and grow your reputation with automated review requests and lead nurturing.",
    icon: Star,
    features: ["Auto Review Requests", "Lead Nurturing", "Digital Presence", "Repeat Business"],
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative"
    >
      {/* Connection line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-y-1/2 z-0" />
      )}
      
      <div className="glass-card p-6 lg:p-8 h-full group hover:border-primary/30 transition-all duration-500 animated-border">
        {/* Step number */}
        <div className="flex items-start justify-between mb-6">
          <m.div
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </m.div>
          <span className="text-5xl font-display font-bold text-muted/30 group-hover:text-primary/20 transition-colors duration-500">
            {step.step}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-display text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {step.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {step.features.map((feature, i) => (
            <m.li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.3 + index * 0.15 + i * 0.05,
                ease: "easeOut"
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {feature}
            </m.li>
          ))}
        </ul>
      </div>
    </m.div>
  );
};

export const ProcessSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <m.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Path to <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven four-step process that transforms how you attract, engage, and retain customers.
          </p>
        </m.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};