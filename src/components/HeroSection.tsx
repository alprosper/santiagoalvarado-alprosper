import { m } from "@/components/LazyMotionProvider";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Big Systems. Small Business Heart.
                </span>
              </m.div>

              {/* Headline - No animation delay on LCP element for faster render */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Your Business, <span className="gradient-text glow-text">Empowered</span>
              </h1>

              {/* Subheadline */}
              <m.p
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We help you maximize and manage your business growth—with the tools big companies use and the flexibility
                you need.
              </m.p>

              {/* CTA Buttons */}
              <m.div
                className="flex flex-col sm:flex-row flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Link to="/book-strategy-call">
                  <Button variant="glow" size="lg" className="group w-full sm:w-auto">
                    Book Your Free Strategy Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  variant="glass"
                  size="lg"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    if ((window as any).leadConnector?.chatWidget?.openWidget) {
                      (window as any).leadConnector.chatWidget.openWidget();
                    }
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to us now.
                </Button>
              </m.div>

              {/* Social Proof */}
              <m.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="flex -space-x-3">
                  {["J", "M", "S", "R", "A", "T"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-glow-secondary/20 border-2 border-background flex items-center justify-center text-xs font-semibold text-foreground"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-semibold">50+</span>
                  <span className="text-muted-foreground hidden sm:inline"> businesses with </span>
                  <span className="text-muted-foreground sm:hidden"> businesses & </span>
                  <span className="text-primary font-semibold hidden sm:inline">5-star reviews</span>
                  <span className="text-primary font-semibold sm:hidden">5-stars</span>
                </div>
              </m.div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <m.div
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              {/* Glow behind dashboard */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-75" />

              {/* Dashboard mockup */}
              <div className="relative glass-card p-2 glow-effect">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-primary/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-muted rounded-md h-6 max-w-xs" />
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6 space-y-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Leads", value: "1,234", change: "+12%" },
                        { label: "Conversions", value: "89%", change: "+5%" },
                        { label: "Revenue", value: "$52K", change: "+23%" },
                      ].map((stat, i) => (
                        <m.div
                          key={stat.label}
                          className="p-4 rounded-lg bg-secondary/30 border border-border/50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-xl font-bold font-display mt-1">{stat.value}</p>
                          <p className="text-xs text-primary mt-1">{stat.change}</p>
                        </m.div>
                      ))}
                    </div>

                    {/* Chart placeholder */}
                    <m.div
                      className="h-32 rounded-lg bg-secondary/20 border border-border/30 flex items-end justify-around px-4 pb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <m.div
                          key={i}
                          className="w-6 rounded-t bg-gradient-to-t from-primary to-glow-secondary"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                        />
                      ))}
                    </m.div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <m.div
                className="absolute -top-4 -right-4 glass-card px-4 py-3 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-lg">✓</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">New Lead</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </m.div>

              <m.div
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-xs text-muted-foreground">AI Response Rate</p>
                <p className="text-2xl font-bold font-display gradient-text">98.5%</p>
              </m.div>
            </m.div>
          </div>
        </div>
    </section>
  );
};
