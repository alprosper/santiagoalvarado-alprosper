import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterSubscriptionProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact";
}

export const NewsletterSubscription = ({
  title = "Stay Updated",
  description = "Subscribe to get notified about new features, updates, and product improvements.",
  variant = "default",
}: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke("add-ghl-contact", {
        body: { email },
      });

      if (error) {
        console.error("Error adding contact:", error);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("Thanks for subscribing! You'll be notified of updates.");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
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
      </form>
    );
  }

  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
        <Bell className="w-4 h-4" />
        <span className="text-sm font-medium">Get Notified</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        {description}
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        No spam, unsubscribe at any time.
      </p>
    </motion.div>
  );
};
