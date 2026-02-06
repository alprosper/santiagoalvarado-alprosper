import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Clock, 
  Video, 
  MessageCircle, 
  Gift, 
  Star, 
  CheckCircle, 
  XCircle,
  Zap,
  Users,
  TrendingUp,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Webinars = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("add-ghl-contact", {
        body: { email, name, source: "webinar-registration" },
      });

      if (error) throw error;

      toast.success("You're registered! Check your email for details.");
      setEmail("");
      setName("");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const beforePoints = [
    "Spending hours on manual tasks that could be automated",
    "Missing leads due to slow follow-up processes",
    "Struggling to scale without hiring more staff",
    "Losing customers to competitors with better systems",
  ];

  const afterPoints = [
    "Automated workflows handling repetitive tasks 24/7",
    "Instant lead response and nurturing sequences",
    "Scalable systems that grow with your business",
    "Increased customer retention and satisfaction",
    "More time to focus on strategy and growth",
  ];

  const webinarDetails = [
    { icon: Video, label: "Format", value: "Live Video Workshop" },
    { icon: Clock, label: "Length", value: "90 Minutes" },
    { icon: MessageCircle, label: "Interactivity", value: "Live Q&A Session" },
    { icon: Gift, label: "Bonus", value: "Free Automation Templates" },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "AI Automation Mastery",
      description: "Learn to implement AI-powered workflows that work while you sleep",
    },
    {
      icon: Users,
      title: "Lead Generation Systems",
      description: "Build automated funnels that consistently attract qualified leads",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth Blueprint",
      description: "Discover the exact systems used by 7-figure businesses",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Free AI Automation Webinar | AlprosperAI</title>
        <meta
          name="description"
          content="Join our free webinar and learn how to automate your business with AI. Discover proven strategies to save time, generate leads, and scale your revenue."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-glow-secondary/8 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-primary/5 blur-[80px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* On Air Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
              </span>
              <span className="text-sm font-semibold text-destructive">ON AIR</span>
            </motion.div>

            <p className="text-muted-foreground mb-4">
              WEBINAR → AI Business Automation Blueprint
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop Working <span className="text-primary">Harder</span>.
              <br />
              Start Working <span className="text-primary">Smarter</span>.
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn how small businesses are using AI automation to save 20+ hours per week, 
              generate more leads, and scale their revenue — without hiring more staff.
            </p>

            {/* Star Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Rated by 500+ business owners
              </span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Enable sound
                </div>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Available Now</span>
                </div>

                <h2 className="font-display text-2xl font-bold mb-2">
                  Register Today <span className="text-primary">For Free</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join 500+ business owners who've already transformed their operations.
                </p>

                <form onSubmit={handleRegister} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Watch Free Webinar Now"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Watch Now</span>
                    </div>
                    <span className="text-primary font-bold">$0</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Free on-demand access. No credit card required.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Host Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-primary">A</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-display text-3xl font-bold mb-2">
                    Your <span className="text-primary">Host</span>
                  </h2>
                  <h3 className="text-xl font-semibold mb-4">AlprosperAI Team</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Experts in AI-powered business automation
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Helped 500+ small businesses scale operations
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Specialists in GHL, CRM, and workflow automation
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic">
                    "We believe every small business deserves enterprise-grade automation. 
                    Our mission is to make it accessible and affordable for everyone."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Before/After Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What to Expect from <span className="text-primary">Attending</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  BEFORE THE WEBINAR
                </h3>
                <ul className="space-y-4">
                  {beforePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="bg-card border border-primary/30 rounded-2xl p-8 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)]">
                <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  AFTER THE WEBINAR
                </h3>
                <ul className="space-y-4">
                  {afterPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Webinar Details */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              Webinar <span className="text-primary">Details</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {webinarDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <detail.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                  <p className="font-semibold">{detail.value}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Highlights */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Webinar <span className="text-primary">Highlights</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)] transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <highlight.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our free webinar and discover the automation strategies 
                that are helping businesses save time and scale faster.
              </p>
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Register Now — It's Free
              </Button>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Webinars;
