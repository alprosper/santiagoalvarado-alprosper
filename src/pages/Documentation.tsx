import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Book, Zap, Users, Settings, MessageSquare, BarChart3, Workflow, Shield, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const guides = [
  {
    id: "getting-started",
    icon: Zap,
    title: "Getting Started",
    description: "Learn the basics of setting up your automation workflows and connecting your first integrations.",
    sections: [
      {
        title: "Initial consultation and assessment",
        content: "We begin with a comprehensive review of your current business processes to understand your unique needs and challenges."
      },
      {
        title: "Defining your automation goals",
        content: "Together, we establish clear objectives and measurable outcomes for your automation implementation."
      },
      {
        title: "Mapping your current processes",
        content: "We document your existing workflows to identify inefficiencies and areas ripe for automation."
      },
      {
        title: "Identifying automation opportunities",
        content: "Our team analyzes your processes to recommend the highest-impact automation solutions."
      }
    ]
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    description: "Understand how to automate repetitive tasks and create efficient business processes.",
    sections: [
      {
        title: "Creating automated workflows",
        content: "Design powerful workflows that connect your tools and automate repetitive tasks seamlessly."
      },
      {
        title: "Setting up triggers and actions",
        content: "Configure event-based triggers that automatically initiate the right actions at the right time."
      },
      {
        title: "Conditional logic and branching",
        content: "Build intelligent workflows with if/then logic to handle complex business scenarios."
      },
      {
        title: "Testing and debugging workflows",
        content: "Ensure your automations work flawlessly with our comprehensive testing and monitoring tools."
      }
    ]
  },
  {
    id: "lead-management",
    icon: Users,
    title: "Lead Management",
    description: "Capture, nurture, and convert leads automatically with smart automation sequences.",
    sections: [
      {
        title: "Lead capture form setup",
        content: "Create high-converting forms that automatically capture and organize prospect information."
      },
      {
        title: "Automated lead scoring",
        content: "Prioritize your hottest leads with intelligent scoring based on engagement and behavior."
      },
      {
        title: "Nurture sequence creation",
        content: "Build automated email sequences that guide prospects through your sales funnel."
      },
      {
        title: "CRM integration and sync",
        content: "Keep your CRM up-to-date with automatic data synchronization across all platforms."
      }
    ]
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication Automation",
    description: "Automate your email, SMS, and chat communications for consistent customer engagement.",
    sections: [
      {
        title: "Email automation setup",
        content: "Configure automated email campaigns that deliver the right message at the right time."
      },
      {
        title: "SMS campaign configuration",
        content: "Reach customers instantly with automated text message campaigns and notifications."
      },
      {
        title: "Chatbot implementation",
        content: "Deploy intelligent chatbots that handle customer inquiries 24/7."
      },
      {
        title: "Multi-channel messaging",
        content: "Coordinate seamless communication across email, SMS, chat, and social platforms."
      }
    ]
  },
  {
    id: "integrations",
    icon: Settings,
    title: "Integrations",
    description: "Connect your existing tools and platforms to create a unified automation ecosystem.",
    sections: [
      {
        title: "Available integrations overview",
        content: "Explore our library of 100+ native integrations with popular business tools."
      },
      {
        title: "API connections and webhooks",
        content: "Connect virtually any application using our flexible API and webhook capabilities."
      },
      {
        title: "Data synchronization",
        content: "Keep your data consistent across all platforms with real-time synchronization."
      },
      {
        title: "Custom integration requests",
        content: "Need a specific integration? Our team can build custom connections for your unique needs."
      }
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track performance, measure ROI, and optimize your automations with detailed analytics.",
    sections: [
      {
        title: "Dashboard overview",
        content: "Monitor all your automation performance metrics from a single, intuitive dashboard."
      },
      {
        title: "Key metrics and KPIs",
        content: "Track the metrics that matter most to your business success."
      },
      {
        title: "Custom report creation",
        content: "Build tailored reports that provide insights specific to your business needs."
      },
      {
        title: "Performance optimization tips",
        content: "Learn best practices for continuously improving your automation performance."
      }
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance",
    description: "Understand our security practices and how we protect your business data.",
    sections: [
      {
        title: "Data encryption standards",
        content: "Your data is protected with enterprise-grade encryption at rest and in transit."
      },
      {
        title: "Access control management",
        content: "Configure granular permissions to control who can access and modify your automations."
      },
      {
        title: "Compliance certifications",
        content: "We maintain compliance with industry standards including SOC 2 and GDPR."
      },
      {
        title: "Backup and recovery",
        content: "Rest easy with automatic backups and disaster recovery procedures."
      }
    ]
  },
  {
    id: "best-practices",
    icon: Book,
    title: "Best Practices",
    description: "Expert tips and strategies to maximize the value of your automation investment.",
    sections: [
      {
        title: "Automation strategy planning",
        content: "Develop a comprehensive automation roadmap aligned with your business goals."
      },
      {
        title: "Common pitfalls to avoid",
        content: "Learn from others' mistakes and sidestep common automation implementation errors."
      },
      {
        title: "Scaling your automations",
        content: "Strategies for expanding your automation capabilities as your business grows."
      },
      {
        title: "Measuring success",
        content: "Define and track the right metrics to demonstrate automation ROI."
      }
    ]
  }
];

const Documentation = () => {
  const [activeSection, setActiveSection] = useState<string>("getting-started");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Documentation | Alprosper</title>
        <meta name="description" content="Comprehensive guides and documentation for Alprosper's automation services. Learn how to maximize your business efficiency." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12 pt-8">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Documentation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about setting up and maximizing your automation workflows.
              </p>
            </div>

            {/* Help Banner */}
            <div className="glass-card p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Need help or have questions?
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Our team is ready to help you get the most out of your automation setup.
                </p>
              </div>
              <Button
                variant="glass"
                size="lg"
                className="shrink-0 group"
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

            {/* Main Content Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <aside className="w-full lg:w-64 shrink-0">
                <div className="lg:sticky lg:top-28 bg-background/95 backdrop-blur-sm rounded-[5px] p-4 border border-border/50 lg:border-0 lg:p-0 lg:bg-transparent lg:backdrop-blur-none">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
                    Table of Contents
                  </h3>
                  <div
                    role="navigation"
                    aria-label="Table of contents"
                    className="space-y-1 max-h-[60vh] lg:max-h-[calc(100vh-10rem)] overflow-y-auto"
                  >
                    {guides.map((guide) => (
                      <button
                        key={guide.id}
                        onClick={() => scrollToSection(guide.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-[5px] transition-all text-left",
                          activeSection === guide.id
                            ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        <guide.icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{guide.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                <div className="space-y-8">
                  {guides.map((guide) => (
                    <section
                      key={guide.id}
                      id={guide.id}
                      className="scroll-mt-24"
                    >
                      {/* Section Header */}
                      <div className="border-b border-border pb-4 mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-[5px] bg-primary/10 flex items-center justify-center">
                            <guide.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h2 className="font-display text-2xl font-semibold text-foreground">
                            {guide.title}
                          </h2>
                        </div>
                        <p className="text-muted-foreground ml-13">
                          {guide.description}
                        </p>
                      </div>

                      {/* Section Content */}
                      <div className="space-y-3">
                        {guide.sections.map((section, index) => {
                          const itemId = `${guide.id}-${index}`;
                          const isExpanded = expandedItems.includes(itemId);
                          
                          return (
                            <div
                              key={index}
                              className="border border-border/50 rounded-[5px] overflow-hidden bg-card/30"
                            >
                              <button
                                onClick={() => toggleExpanded(itemId)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/30 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                                    {index + 1}
                                  </span>
                                  <span className="font-medium text-foreground">
                                    {section.title}
                                  </span>
                                </div>
                                <ChevronDown 
                                  className={cn(
                                    "w-5 h-5 text-muted-foreground transition-transform",
                                    isExpanded && "rotate-180"
                                  )}
                                />
                              </button>
                              {isExpanded && (
                                <div className="px-5 pb-4 pt-0">
                                  <p className="text-muted-foreground pl-9">
                                    {section.content}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 pt-8 border-t border-border text-center">
                  <h2 className="font-display text-2xl font-semibold mb-3 text-foreground">
                    Ready to get started?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Our team is here to help you implement the perfect automation solution for your business.
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
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Documentation;
