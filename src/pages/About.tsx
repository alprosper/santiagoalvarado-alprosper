import { lazy, Suspense } from "react";
import { LazyMotionProvider, m } from "@/components/LazyMotionProvider";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Zap,
  TrendingUp,
  Shield,
  Coffee,
  Calendar
} from "lucide-react";

// Lazy load below-the-fold components
const AnimatedBackground = lazy(() => import("@/components/AnimatedBackground").then(mod => ({ default: mod.AnimatedBackground })));
const Footer = lazy(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })));

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by real outcomes—more leads, higher conversions, sustainable growth.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge solutions before your competition even knows they exist.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're invested partners, not just vendors. Your wins are our wins.",
    color: "from-primary to-amber-500"
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    description: "Results in weeks, not months. Fast without sacrificing quality.",
    color: "from-red-500 to-primary"
  }
];

const stats = [
  { value: "50+", label: "Businesses Transformed", icon: TrendingUp },
  { value: "10K+", label: "Hours Automated", icon: Zap },
  { value: "95%", label: "Client Retention", icon: Shield },
  { value: "3x", label: "Avg. ROI Increase", icon: TrendingUp }
];

// Background fallback
const BackgroundFallback = () => (
  <div className="fixed inset-0 -z-10 bg-background mesh-background opacity-60" />
);

// Section loader
const SectionLoader = () => (
  <div className="min-h-[100px] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const About = () => {
  return (
    <LazyMotionProvider>
      <div className="relative min-h-screen">
        <Suspense fallback={<BackgroundFallback />}>
          <AnimatedBackground />
        </Suspense>
        <Navbar />
        
        <main className="pt-32 pb-20">
          {/* Hero Section - More Dynamic */}
          <section className="relative px-6 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* Floating badge */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium">
                  <Heart className="w-4 h-4 text-primary" />
                  Built with passion for small business success
                </span>
              </m.div>
              
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-[1.1]"
              >
                We're Not Just Another{" "}
                <br className="hidden sm:block" />
                <span className="gradient-text glow-text">Agency</span>
              </m.h1>
              
              <m.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed"
              >
                We're the team that genuinely gets excited when your dashboard 
                lights up with new leads at 3 AM.{" "}
                <span className="text-foreground font-medium">That's kind of our thing.</span>
              </m.p>

              {/* Floating elements for visual interest */}
              <div className="relative mt-12">
                <m.div
                  className="absolute -top-8 left-[10%] glass-card px-4 py-2 hidden lg:flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Fueled by coffee & ambition</span>
                </m.div>

                <m.div
                  className="absolute -top-4 right-[10%] glass-card px-4 py-2 hidden lg:flex items-center gap-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium">Making magic happen daily</span>
                </m.div>
              </div>
            </div>
          </section>

          {/* Stats Section - More Visual */}
          <section className="px-6 py-12">
            <div className="max-w-5xl mx-auto">
              <m.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 md:p-10 glow-effect"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <m.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          {/* Story Section - More Personality */}
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Left side - Main story */}
                <m.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-3 space-y-8"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <Sparkles className="w-3 h-3" />
                      Our Origin Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Started with a <span className="gradient-text">Simple Frustration</span>
                    </h2>
                  </div>
                  
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p className="text-foreground font-medium text-xl">
                      We watched small businesses struggle with clunky tools that weren't built for them.
                    </p>
                    <p>
                      The big players? They had armies of developers, enterprise software, and automation 
                      that practically ran their businesses for them. Meanwhile, local shops, solo consultants, 
                      and growing teams were drowning in spreadsheets and sticky notes.
                    </p>
                    <p>
                      So we decided to level the playing field. We took the same powerful systems 
                      Fortune 500 companies use and made them{" "}
                      <span className="text-foreground font-medium">accessible, affordable, and actually usable</span>{" "}
                      for businesses that don't have a tech department.
                    </p>
                    <p>
                      Today, we partner with businesses across industries—from real estate and healthcare 
                      to e-commerce and professional services—helping them work smarter, not harder.
                    </p>
                  </div>

                  <m.div 
                    className="flex flex-wrap gap-3 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {["Real Estate", "Healthcare", "E-Commerce", "Professional Services", "SaaS", "Local Business"].map((industry) => (
                      <span 
                        key={industry}
                        className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                      >
                        {industry}
                      </span>
                    ))}
                  </m.div>
                </m.div>
                
                {/* Right side - Personality cards */}
                <m.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2 space-y-4"
                >
                  {/* Quote card */}
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                    <div className="text-6xl text-primary/20 font-display leading-none mb-2">"</div>
                    <p className="text-lg text-foreground font-medium italic relative z-10">
                      We don't just build systems. We build freedom—the freedom to focus on what you love about your business.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">— The Alprosper Team</p>
                    </div>
                  </div>

                  {/* Fun fact cards */}
                  <m.div 
                    className="glass-card p-5 flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Lightning Fast</p>
                      <p className="text-sm text-muted-foreground">Most projects go live in under 2 weeks</p>
                    </div>
                  </m.div>

                  <m.div 
                    className="glass-card p-5 flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌙</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">24/7 Automation</p>
                      <p className="text-sm text-muted-foreground">Your business works while you sleep</p>
                    </div>
                  </m.div>

                  <m.div 
                    className="glass-card p-5 flex items-center gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Real Humans</p>
                      <p className="text-sm text-muted-foreground">No bots here—just us, ready to help</p>
                    </div>
                  </m.div>
                </m.div>
              </div>
            </div>
          </section>

          {/* Values Section - More Engaging */}
          <section className="px-6 py-20 relative overflow-hidden">
          {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            
            <div className="max-w-6xl mx-auto relative">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  What Drives Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="gradient-text">Core Values</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These aren't just words on a wall. They're how we show up every single day.
                </p>
              </m.div>

              <m.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {values.map((value, index) => (
                  <m.div
                    key={value.title}
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="glass-card p-6 text-center group hover:glow-effect transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${value.color} p-[1px] relative`}>
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                        <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </m.div>
                ))}
              </m.div>
            </div>
          </section>

          {/* CTA Section - More Compelling */}
          <section className="px-6 py-24">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden glow-effect">
                {/* Background accents */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <m.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                  >
                    <Rocket className="w-8 h-8 text-primary" />
                  </m.div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to <span className="gradient-text">Transform</span> 
                    <br className="hidden sm:block" />
                    Your Business?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                    Let's have a real conversation about your goals. No pressure, no jargon—just 
                    honest advice on how automation can help you win.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="glow"
                      size="lg"
                      className="group text-base"
                      onClick={() => {
                        if ((window as any).leadConnector?.chatWidget?.openWidget) {
                          (window as any).leadConnector.chatWidget.openWidget();
                        }
                      }}
                    >
                      Start a Conversation
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="text-base" asChild>
                      <Link to="/#process">See Our Process</Link>
                    </Button>
                  </div>
                  
                  <p className="mt-8 text-sm text-muted-foreground">
                    Free strategy call • No commitment • Real answers
                  </p>
                </div>
              </div>
            </m.div>
          </section>
        </main>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>

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

export default About;
