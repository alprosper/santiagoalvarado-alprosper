import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQPageSchema } from "@/components/StructuredData";

const faqs = [
  {
    question: "What is Alprosper and how can it help my business?",
    answer: "Alprosper is a business automation agency that helps small and medium businesses implement enterprise-grade tools and workflows. We specialize in lead generation, CRM automation, communication workflows, and custom integrations to help you save time and grow faster."
  },
  {
    question: "How do I get started with Alprosper?",
    answer: "Getting started is easy! Simply book a free strategy call where we'll discuss your business needs, current processes, and identify automation opportunities. From there, we'll create a customized plan tailored to your goals."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with a wide range of small to medium-sized businesses across various industries including professional services, e-commerce, healthcare, real estate, and more. If you're looking to streamline operations and grow, we can help."
  },
  {
    question: "How long does it take to implement automation solutions?",
    answer: "Implementation timelines vary based on complexity. Simple automations can be set up within days, while more comprehensive solutions may take 2-4 weeks. During your strategy call, we'll provide a realistic timeline based on your specific needs."
  },
  {
    question: "Do I need technical knowledge to use your solutions?",
    answer: "Not at all! Our solutions are designed to be user-friendly. We handle all the technical setup and provide training so you and your team can easily manage and monitor your automations. Ongoing support is always available."
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with 100+ popular business tools including CRMs (HubSpot, Salesforce), email platforms (Mailchimp, ActiveCampaign), payment processors (Stripe, PayPal), scheduling tools, and many more. Custom integrations are also available."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on your specific needs and the scope of implementation. We offer flexible packages to suit different budgets. Schedule a strategy call for a personalized quote with no obligation."
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Yes! We provide ongoing support and maintenance packages to ensure your automations continue running smoothly. This includes monitoring, updates, troubleshooting, and optimization recommendations."
  },
  {
    question: "Can I cancel or modify my automations later?",
    answer: "Absolutely. Your automations are fully customizable and can be adjusted as your business needs evolve. We're here to help you scale and adapt your solutions over time."
  },
  {
    question: "How do I contact support if I have an issue?",
    answer: "You can reach our support team through the chat widget on this page, by email, or by scheduling a support call. We typically respond within 24 hours on business days."
  }
];

const HelpCenter = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Help Center | Alprosper</title>
        <meta name="description" content="Get help and find answers to frequently asked questions about Alprosper's automation services. Our support team is here to assist you." />
      </Helmet>
      
      {/* FAQPage Schema for AEO */}
      <FAQPageSchema faqs={faqs} />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Help Center
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Find answers to common questions or chat with our support team for personalized assistance.
              </p>
              
              {/* Talk to us button */}
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

            {/* FAQs Section */}
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold mb-8 text-foreground text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isExpanded = expandedFaq === index;
                  
                  return (
                    <div
                      key={index}
                      className="border border-border/50 rounded-[5px] overflow-hidden bg-card/30"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-medium text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={cn(
                            "w-5 h-5 text-muted-foreground transition-transform shrink-0",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-6 pb-5 pt-0">
                          <p className="text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Still need help */}
            <div className="text-center glass-card p-8">
              <h2 className="font-display text-2xl font-semibold mb-3 text-foreground">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team is ready to help. Use the chat widget or reach out directly.
              </p>
              <a 
                href="mailto:support@alprosper.com"
                className="text-primary hover:underline"
              >
                support@alprosper.com
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;
