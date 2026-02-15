import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

export const ScrollIndicator = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (showScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={showScrollUp ? "Scroll to top" : "Scroll down"}
      className="fixed bottom-20 right-6 z-[60] w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        {showScrollUp ? (
          <m.span
            key="up"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp className="w-5 h-5" />
          </m.span>
        ) : (
          <m.span
            key="down"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </m.span>
        )}
      </AnimatePresence>
    </button>
  );
};
