import { useTheme } from "next-themes";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";
import { OptimizedImage } from "./OptimizedImage";
import { openCookiePreferences } from "./CookieConsent";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/alprosperai/" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/alprosperai" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@AlprosperAI" },
];

interface FooterLink {
  label: string;
  href: string;
  isInternal?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/features", isInternal: true },
    { label: "Integrations", href: "/integrations", isInternal: true },
    { label: "Changelog", href: "/changelog", isInternal: true },
  ],
  Company: [
    { label: "About", href: "/about", isInternal: true },
    { label: "News", href: "/news", isInternal: true },
    { label: "Reviews", href: "/reviews", isInternal: true },
    { label: "Contact", href: "/contact", isInternal: true },
  ],
  Resources: [
    { label: "Documentation", href: "/documentation", isInternal: true },
    { label: "Help Center", href: "/help-center", isInternal: true },
    { label: "Community", href: "https://alprosperu.app.clientclub.net/login" },
    { label: "Webinars", href: "/webinars", isInternal: true },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy-policy", isInternal: true },
    { label: "Terms", href: "/terms-of-service", isInternal: true },
    { label: "Security", href: "/security", isInternal: true },
    { label: "GDPR", href: "/gdpr", isInternal: true },
  ],
};

export const Footer = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="https://alprosper.com"
              className="flex items-center mb-4 hover:scale-[1.02] transition-transform"
            >
              <OptimizedImage 
                src={logo} 
                alt="AlprosperAI" 
                className="h-8 w-auto" 
                width={120} 
                height={32}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering small businesses with enterprise-grade automation and growth solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isInternal ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alprosper LLC. All rights reserved.
          </p>
          <button 
            onClick={openCookiePreferences}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};
