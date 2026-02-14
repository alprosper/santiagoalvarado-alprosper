import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const PortfolioContact = ({ embedded }: { embedded?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", needs: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const needs = formData.needs.trim();

    if (!name || !email || !needs) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (name.length > 100 || email.length > 255 || needs.length > 1000) {
      toast({ title: "One or more fields exceed the allowed length.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Please enter a valid email.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("contact-form", {
        body: { name, email, phone: "", message: needs },
      });
      if (error) throw error;
      toast({ title: "Message sent! We'll be in touch soon." });
      setFormData({ name: "", email: "", needs: "" });
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inner = (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
          Contact
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Let's Build <span className="gradient-text">Something</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tell us what you need and we'll get back to you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          maxLength={100}
          required
          className="bg-background/50 border-border/50"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          maxLength={255}
          required
          className="bg-background/50 border-border/50"
        />
        <textarea
          name="needs"
          placeholder="Your Current Needs"
          value={formData.needs}
          onChange={handleChange}
          maxLength={1000}
          required
          rows={3}
          className="w-full rounded-[5px] border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
        />
        <Button
          type="submit"
          variant="glow"
          size="lg"
          className="w-full group"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
          {!isSubmitting && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
        </Button>
      </form>
    </m.div>
  );

  if (embedded) return <div id="contact" className="glass-card p-8 md:p-10 glow-effect">{inner}</div>;

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative">{inner}</div>
    </section>
  );
};
