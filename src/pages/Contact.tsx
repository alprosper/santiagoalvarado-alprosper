import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!consentChecked) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive communications from Alprosper.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("contact-form", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or use the chat widget.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Alprosper</title>
        <meta name="description" content="Get in touch with Alprosper. We're here to help you automate your business and accelerate growth. Send us a message or book a call." />
      </Helmet>
      
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question or ready to transform your business? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold mb-3 text-foreground">
                      Thank You!
                    </h2>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message <span className="text-primary">*</span>
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or needs..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="mt-2 w-full rounded-[5px] border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={consentChecked}
                        onCheckedChange={(checked) => setConsentChecked(checked === true)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        By checking this box, I consent to receive SMS or Emails from Alprosper regarding confirmations or service-related communications. Message & data rates may apply. I can reply STOP to opt out or unsubscribe at any time.
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
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-card p-6">
                  <h2 className="font-display text-xl font-semibold mb-6 text-foreground">
                    Other Ways to Reach Us
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[5px] bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a 
                          href="mailto:support@alprosper.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          support@alprosper.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[5px] bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a 
                          href="tel:+16232928957" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (623) 292-8957
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-[5px] bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">
                          Phoenix, Arizona
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Widget CTA */}
                <div className="glass-card p-6 text-center">
                  <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    Need Immediate Help?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chat with our team in real-time for quick answers.
                  </p>
                  <Button
                    variant="glass"
                    size="lg"
                    className="group"
                    onClick={() => {
                      if ((window as any).leadConnector?.chatWidget?.openWidget) {
                        (window as any).leadConnector.chatWidget.openWidget();
                      }
                    }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Talk to us now.
                  </Button>
                </div>

                {/* Book a Call CTA */}
                <div className="glass-card p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                    Ready for a Deeper Conversation?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Schedule a free strategy call to discuss your automation needs.
                  </p>
                  <Button
                    variant="glow"
                    size="lg"
                    onClick={() => window.location.href = "/book-strategy-call"}
                  >
                    Book a Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
