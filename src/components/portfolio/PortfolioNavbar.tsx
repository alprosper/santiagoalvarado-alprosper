import { useState, useEffect } from "react";
import { m, AnimatePresence } from "@/components/LazyMotionProvider";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const nameTexts = ["Santiago Alvarado", "Automation Specialist"];

export const PortfolioNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % nameTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <m.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl glass-card transition-all duration-300">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-base md:text-xl font-bold tracking-tight relative h-7 md:h-8 overflow-hidden text-left min-w-[180px] md:min-w-[230px]"
          >
            <AnimatePresence mode="wait">
              <m.span
                key={nameTexts[nameIndex]}
                className="gradient-text block whitespace-nowrap"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {nameTexts[nameIndex]}
              </m.span>
            </AnimatePresence>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="glow"
              size="sm"
              className="hidden md:flex"
              onClick={() => scrollToSection("#contact")}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden glass-card mt-2 p-4 rounded-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <m.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left p-3 rounded-xl hover:bg-secondary transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    {link.label}
                  </m.button>
                ))}
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <Button
                    variant="glow"
                    className="mt-2 w-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get in Touch
                  </Button>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.header>
  );
};
