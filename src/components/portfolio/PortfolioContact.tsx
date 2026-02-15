import { m, useInView } from "@/components/LazyMotionProvider";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const PortfolioContact = ({ embedded }: { embedded?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    if (!consentChecked) {
      toast({ title: "Consent Required", description: "Please agree to receive communications.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("contact-form", {
        body: { name, email, phone, message },
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const header = (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-6">
        Contact
      </span>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Tell us what you need and we'll get back to you
      </p>
    </m.div>
  );

  const formContent = (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your message has been sent. We'll get back to you within 24 hours.
          </p>
          <Button
            variant="glass"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", phone: "", message: "" });
              setConsentChecked(false);
            }}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
          <div>
            <Label htmlFor="contact-name" className="text-foreground">
              Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="contact-name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              required
              className="mt-2 bg-background/50 border-border/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contact-email" className="text-foreground">
                Email <span className="text-primary">*</span>
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                required
                className="mt-2 bg-background/50 border-border/50"
              />
            </div>

            <div>
              <Label htmlFor="contact-phone" className="text-foreground">
                Phone Number
              </Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 bg-background/50 border-border/50"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contact-message" className="text-foreground">
              Message <span className="text-primary">*</span>
            </Label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us about your project or question..."
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              required
              rows={4}
              className="mt-2 w-full rounded-[5px] border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="contact-consent"
              checked={consentChecked}
              onCheckedChange={(checked) => setConsentChecked(checked === true)}
              className="mt-1"
            />
            <Label htmlFor="contact-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              By checking this box, I consent to receive SMS or Emails regarding confirmations or service-related communications. Message & data rates may apply. I can reply STOP to opt out or unsubscribe at any time.
            </Label>
          </div>

          <Button
            type="submit"
            variant="glow"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </m.div>
  );

  if (embedded) return (
    <div id="contact">
      {header}
      <div className="glass-card p-8 md:p-10">{formContent}</div>
    </div>
  );

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative">
        {header}
        {formContent}
      </div>
    </section>
  );
};
