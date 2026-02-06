import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Sparkles, Bug, Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

interface ChangelogEntry {
  version: string;
  date: string;
  type: "feature" | "improvement" | "bugfix" | "security";
  title: string;
  description: string;
  changes: string[];
}

const typeConfig = {
  feature: {
    icon: Sparkles,
    label: "New Feature",
    color: "text-green-500 dark:text-green-400",
    bg: "bg-green-500/10",
  },
  improvement: {
    icon: Zap,
    label: "Improvement",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  bugfix: {
    icon: Bug,
    label: "Bug Fix",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-500/10",
  },
  security: {
    icon: Shield,
    label: "Security",
    color: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
};

const changelogEntries: ChangelogEntry[] = [
  {
    version: "3.3.0",
    date: "December 2024",
    type: "feature",
    title: "Keyless PayPal & Venmo Integration",
    description: "Streamlined payment setup with OAuth-based connections.",
    changes: [
      "Keyless PayPal integration via OAuth",
      "Venmo payment support for US customers",
      "Faster credential-free payment setup",
      "Enhanced payment reconciliation tools",
    ],
  },
  {
    version: "3.2.0",
    date: "November 2024",
    type: "feature",
    title: "WhatsApp Automation & Media Retention",
    description: "Advanced WhatsApp features for better customer engagement.",
    changes: [
      "Missed Call Text Back automation for WhatsApp",
      "Pre-approved template messaging support",
      "1-year media retention in CRM (photos, PDFs, videos)",
      "Enhanced WhatsApp conversation tracking",
    ],
  },
  {
    version: "3.1.0",
    date: "October 2024",
    type: "improvement",
    title: "LevelUp Day 2024 - 300+ Updates",
    description: "Massive platform-wide improvements and new capabilities.",
    changes: [
      "Over 300 feature updates and improvements",
      "Enhanced platform stability and performance",
      "New API endpoints for third-party integrations",
      "Improved user interface across all modules",
    ],
  },
  {
    version: "3.0.0",
    date: "September 2024",
    type: "feature",
    title: "AI Employee & GoKollab",
    description: "Revolutionary AI-powered automation and community collaboration features.",
    changes: [
      "AI Employee for end-to-end business automation",
      "GoKollab community collaboration platform integration",
      "Branded Mobile App Builder for client portals",
      "2-in-1 Documents with Sign & Pay capabilities",
    ],
  },
  {
    version: "2.9.0",
    date: "August 2024",
    type: "feature",
    title: "Ad Manager & Audience Tools",
    description: "Enhanced advertising capabilities with powerful audience targeting.",
    changes: [
      "Custom and lookalike audience creation",
      "Detailed statistics dashboard for ad performance",
      "Track impressions, clicks, and ROI in real-time",
      "Improved campaign optimization tools",
    ],
  },
  {
    version: "2.8.0",
    date: "July 2024",
    type: "improvement",
    title: "Conversation AI Enhancements",
    description: "Greater visibility and control over AI-powered conversations.",
    changes: [
      "Visibility into prompts, knowledge bases, and actions",
      "Edit bot status for specific contacts",
      "Enhanced AI message customization",
      "Improved conversation flow management",
    ],
  },
  {
    version: "2.7.0",
    date: "June 2024",
    type: "feature",
    title: "E-commerce Upsells & Customer Portal",
    description: "New e-commerce features to boost sales and customer experience.",
    changes: [
      "Upsell products at checkout integration",
      "Customer Access Center with OTP login",
      "Order tracking and management portal",
      "Enhanced checkout flow optimization",
    ],
  },
  {
    version: "2.6.0",
    date: "May 2024",
    type: "improvement",
    title: "Content AI & Social Planner",
    description: "AI-powered content creation and expanded social media scheduling.",
    changes: [
      "Quick access ChatGPT-style AI interface",
      "AI image editing in media library",
      "YouTube Shorts and Videos scheduling",
      "Facebook Reels and Canva integration",
    ],
  },
  {
    version: "2.5.0",
    date: "March 2024",
    type: "feature",
    title: "Workflow Notes & Math Operations",
    description: "Enhanced workflow capabilities for better team collaboration.",
    changes: [
      "Notes and Stickies for internal workflow collaboration",
      "Math Operations for real-time custom value updates",
      "Improved workflow builder interface",
      "Enhanced workflow duplication across locations",
    ],
  },
  {
    version: "2.4.0",
    date: "November 2023",
    type: "feature",
    title: "Communities & Paid Groups",
    description: "Build and monetize your community with paid membership options.",
    changes: [
      "Paid Groups within communities",
      "Course completion certificates",
      "Community engagement analytics",
      "Member management dashboard",
    ],
  },
  {
    version: "2.3.0",
    date: "October 2023",
    type: "feature",
    title: "WhatsApp Integration",
    description: "Full WhatsApp integration for seamless customer communication.",
    changes: [
      "WhatsApp reselling capabilities",
      "QR code generation for easy connection",
      "In-app WhatsApp messaging",
      "Automated WhatsApp workflows",
    ],
  },
  {
    version: "2.2.0",
    date: "September 2023",
    type: "feature",
    title: "Conversation AI Launch",
    description: "AI-powered conversational bots for automated customer engagement.",
    changes: [
      "Web chat AI bot integration",
      "SMS conversation automation",
      "Natural language processing capabilities",
      "Customizable AI responses and triggers",
    ],
  },
  {
    version: "2.1.0",
    date: "August 2023",
    type: "feature",
    title: "Advanced Workflows & IVR",
    description: "Powerful automation with voice response capabilities.",
    changes: [
      "Interactive Voice Response (IVR) system",
      "Contactless workflows via Zapier",
      "Workflow duplication across locations",
      "Enhanced trigger and action options",
    ],
  },
  {
    version: "2.0.0",
    date: "July 2023",
    type: "improvement",
    title: "Mobile App & Payments",
    description: "Enhanced mobile experience with new payment features.",
    changes: [
      "Tap to Pay functionality",
      "Warm and blind call transfers",
      "White Label App Customizer",
      "ACH Bank Transfers and QuickBooks integration",
    ],
  },
  {
    version: "1.9.0",
    date: "June 2023",
    type: "feature",
    title: "Forms & Surveys Upgrade",
    description: "Smarter forms with conditional logic and custom styling.",
    changes: [
      "Conditional logic for dynamic forms",
      "Custom themes and branding options",
      "GDPR-compliant font support",
      "Enhanced survey analytics",
    ],
  },
];

const Changelog = () => {
  return (
    <>
      <Helmet>
        <title>Changelog | Alprosper - Product Updates & Release Notes</title>
        <meta
          name="description"
          content="Stay up to date with the latest Alprosper updates, new features, improvements, and bug fixes. See what's new in our platform."
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">What's New</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Changelog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keep track of updates, new features, and improvements we're making to Alprosper.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-primary/50" />

            {/* Entries */}
            <div className="space-y-12">
              {changelogEntries.map((entry, index) => {
                const config = typeConfig[entry.type];
                const Icon = config.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={entry.version}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    />

                    {/* Date badge - mobile */}
                    <div className="md:hidden pl-8 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {entry.date}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 pl-8 md:pl-0 ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      {/* Date badge - desktop */}
                      <motion.div
                        className={`hidden md:flex items-center gap-2 text-sm text-muted-foreground mb-2 ${
                          isEven ? "justify-end" : ""
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {entry.date}
                      </motion.div>

                      <motion.div 
                        className="relative bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] hover:border-primary/30 transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Card glow overlay */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        {/* Header */}
                        <div
                          className={`flex items-start gap-3 mb-4 ${
                            isEven ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <motion.div 
                            className={`p-2 rounded-lg ${config.bg}`}
                            whileHover={{ rotate: 10 }}
                          >
                            <Icon className={`w-5 h-5 ${config.color}`} />
                          </motion.div>
                          <div className={isEven ? "md:text-right" : ""}>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                v{entry.version}
                              </span>
                              <span
                                className={`text-xs font-medium ${config.color}`}
                              >
                                {config.label}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mt-1">
                              {entry.title}
                            </h3>
                          </div>
                        </div>

                        <p
                          className={`text-muted-foreground mb-4 ${
                            isEven ? "md:text-right" : ""
                          }`}
                        >
                          {entry.description}
                        </p>

                        {/* Changes list */}
                        <ul
                          className={`space-y-2 ${
                            isEven ? "md:text-right" : ""
                          }`}
                        >
                          {entry.changes.map((change, changeIndex) => (
                            <motion.li
                              key={changeIndex}
                              className={`text-sm text-muted-foreground flex items-start gap-2 ${
                                isEven ? "md:flex-row-reverse" : ""
                              }`}
                              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.4 + changeIndex * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {change}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20">
            <NewsletterSubscription
              title="Never Miss an Update"
              description="Subscribe to get notified when we release new features and improvements to the platform."
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Changelog;
