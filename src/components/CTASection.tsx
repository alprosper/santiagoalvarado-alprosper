import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

// Lazy-load Supabase client - only needed after user interaction
const getSupabase = () => import("@/integrations/supabase/client").then(m => m.supabase);

interface CTASectionProps {
  hideTestimonialBadge?: boolean;
}

export const CTASection = ({ hideTestimonialBadge = false }: CTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const supabase = await getSupabase();
      const { data, error } = await supabase.functions.invoke('add-ghl-contact', {
        body: { email }
      });

      if (error) {
        console.error('Error adding contact:', error);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Floating Social Proof Badge */}
      {!hideTestimonialBadge && (
        <m.div
          className="fixed left-4 bottom-4 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#reviews" className="block bg-card p-4 md:p-5 rounded-xl shadow-2xl max-w-[240px] md:max-w-[220px] border border-primary/30 cursor-pointer hover:shadow-primary/20 hover:shadow-2xl transition-all ring-1 ring-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-7 h-7 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-base font-display font-semibold text-foreground">5.0</span>
            </div>
            <p className="text-sm text-muted-foreground leading-tight font-sans">
              <span className="text-primary font-bold">50+</span> businesses with 5-star reviews
            </p>
          </a>
        </m.div>
      )}

      {/* Background glow */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/15 blur-[80px] rounded-full" />
      </div>

      <m.div
        ref={ref}
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
      >
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center glow-effect animated-border">

          <div className="relative z-10">
            <m.div
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Stay Updated</span>
            </m.div>

            <m.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Subscribe to Our <span className="gradient-text">Newsletter</span>
            </m.h2>

            <m.p
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Get the latest tips, insights, and updates delivered straight to your inbox. No spam, just value.
            </m.p>

            {/* Newsletter Form */}
            <m.form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <Button type="submit" variant="glow" size="lg" className="h-12" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </m.form>

            <m.p
              className="text-xs text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </m.p>
          </div>
        </div>
      </m.div>
    </section>
  );
};