import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { 
  Calendar, 
  Mail, 
  MessageSquare, 
  CreditCard, 
  BarChart3, 
  Users, 
  Globe, 
  Zap,
  Phone,
  FileText,
  ShoppingCart,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Search,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

interface Integration {
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
  features: string[];
}

const integrations: Integration[] = [
  {
    name: "Email Marketing",
    description: "Connect your favorite email platforms for seamless campaign management and automated follow-ups.",
    icon: Mail,
    category: "Communication",
    features: ["Mailchimp", "SendGrid", "SMTP", "Gmail", "Outlook"],
  },
  {
    name: "SMS & Calling",
    description: "Reach your customers instantly with integrated SMS and voice calling capabilities.",
    icon: Phone,
    category: "Communication",
    features: ["Twilio", "Plivo", "RingCentral", "Vonage"],
  },
  {
    name: "Social Media",
    description: "Manage all your social channels from one place with automated posting and engagement.",
    icon: MessageSquare,
    category: "Marketing",
    features: ["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok"],
  },
  {
    name: "Advertising",
    description: "Connect your ad accounts for unified campaign tracking and lead attribution.",
    icon: Megaphone,
    category: "Marketing",
    features: ["Google Ads", "Facebook Ads", "TikTok Ads", "LinkedIn Ads"],
  },
  {
    name: "Payment Processing",
    description: "Accept payments seamlessly with integrated payment gateways and subscription management.",
    icon: CreditCard,
    category: "Commerce",
    features: ["Stripe", "PayPal", "Square", "Authorize.net", "NMI"],
  },
  {
    name: "E-commerce",
    description: "Sync your online store for automated order notifications and customer follow-ups.",
    icon: ShoppingCart,
    category: "Commerce",
    features: ["Shopify", "WooCommerce", "BigCommerce", "Magento"],
  },
  {
    name: "Calendar & Scheduling",
    description: "Integrate with popular calendar apps for seamless appointment booking and reminders.",
    icon: Calendar,
    category: "Productivity",
    features: ["Google Calendar", "Outlook Calendar", "Calendly", "iCal"],
  },
  {
    name: "CRM & Sales",
    description: "Connect your existing CRM or use our built-in pipeline management tools.",
    icon: Users,
    category: "Sales",
    features: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"],
  },
  {
    name: "Analytics & Reporting",
    description: "Track performance across all channels with integrated analytics and custom dashboards.",
    icon: BarChart3,
    category: "Analytics",
    features: ["Google Analytics", "Facebook Pixel", "Google Tag Manager"],
  },
  {
    name: "Website & Funnels",
    description: "Build and host high-converting websites and sales funnels with drag-and-drop simplicity.",
    icon: Globe,
    category: "Web",
    features: ["WordPress", "Wix", "Custom Domains", "SSL Certificates"],
  },
  {
    name: "Document & Forms",
    description: "Create contracts, proposals, and forms with e-signature capabilities.",
    icon: FileText,
    category: "Productivity",
    features: ["DocuSign", "HelloSign", "Custom Forms", "Surveys"],
  },
  {
    name: "Automation & Workflows",
    description: "Connect thousands of apps through powerful automation platforms.",
    icon: Zap,
    category: "Automation",
    features: ["Zapier", "Make", "Pabbly", "Webhooks", "API Access"],
  },
];

const categories = [...new Set(integrations.map(i => i.category))];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = searchQuery === "" || 
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || integration.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const filteredCategories = useMemo(() => {
    const categoriesWithResults = [...new Set(filteredIntegrations.map(i => i.category))];
    return categories.filter(c => categoriesWithResults.includes(c));
  }, [filteredIntegrations]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };
  return (
    <>
      <Helmet>
        <title>Integrations | Alprosper - Connect Your Favorite Tools</title>
        <meta name="description" content="Alprosper integrates with 100+ tools and platforms. Connect your email, CRM, payment processors, social media, and more for seamless automation." />
      </Helmet>
      
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                100+ Integrations
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Connect Your <span className="gradient-text">Entire Stack</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Alprosper seamlessly integrates with the tools you already use. From email and SMS to payments and analytics — everything works together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" asChild>
                  <Link to="/book-strategy-call">
                    See It In Action
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact">
                    Request an Integration
                  </Link>
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search integrations or tools (e.g., Stripe, Mailchimp)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-background/50 border-border/50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {(searchQuery || selectedCategory) && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>
                    Showing {filteredIntegrations.length} of {integrations.length} integrations
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Integration Categories */}
            {filteredIntegrations.length === 0 ? (
              <div className="text-center py-16 glass-card mb-16">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No integrations found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category} className="mb-16">
                  <h2 className="font-display text-2xl font-semibold mb-8 text-foreground">
                    {category}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIntegrations
                      .filter((integration) => integration.category === category)
                      .map((integration) => (
                        <div
                          key={integration.name}
                          className="glass-card p-6 hover:border-primary/30 transition-all group"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <integration.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                                {integration.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {integration.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {integration.features.map((feature) => (
                              <span
                                key={feature}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground"
                              >
                                <CheckCircle2 className="w-3 h-3 text-primary" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            )}

            {/* CTA Section */}
            <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Don't See Your Tool?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We're constantly adding new integrations. With our Zapier and webhook support, you can connect virtually any tool. Or let us know what you need — we're happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="w-5 h-5" />
                    Request Integration
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/book-strategy-call">
                    Talk to Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Integrations;
