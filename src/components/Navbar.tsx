import { LazyMotionProvider, m } from "@/components/LazyMotionProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Volume2, VolumeX, Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import logoDark from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";
import { ThemeToggle } from "./ThemeToggle";
import { OptimizedImage } from "./OptimizedImage";

const AUDIO_URL = "/audio/site-audio-description.mp3";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const logo = theme === "dark" ? logoDark : logoLight;

  const navItems = [
    { label: "About", href: "/about", sectionId: null },
    { label: "Features", href: "/features", sectionId: null },
    { label: "Reviews", href: "/reviews", sectionId: null },
    { label: "News", href: "/news", sectionId: null }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = navItems
      .filter((item) => item.sectionId)
      .map((item) => item.sectionId as string);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (item: typeof navItems[0]) => {
    if (item.sectionId) {
      return location.pathname === "/" && activeSection === item.sectionId;
    }
    return location.pathname === item.href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (!item.sectionId) return;
    
    e.preventDefault();
    
    const scrollToSection = () => {
      const element = document.getElementById(item.sectionId!);
      if (element) {
        const navHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  const handlePlayAudio = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(AUDIO_URL);
        audioRef.current.preload = "auto";
        audioRef.current.onended = () => setIsPlaying(false);
        audioRef.current.onerror = () => setIsPlaying(false);
      }

      const a = audioRef.current;

      if (isPlaying) {
        a.pause();
        a.currentTime = 0;
        setIsPlaying(false);
        return;
      }

      a.muted = false;
      a.volume = 1;
      a.currentTime = 0;
      a.load();

      await a.play();
      setIsPlaying(true);
    } catch (err) {
      setIsPlaying(false);
      toast.error("Audio couldn't play here — opening it in a new tab.");
      window.open(AUDIO_URL, "_blank", "noopener,noreferrer");
      console.error("Audio play failed:", err);
    }
  };

  return (
    <LazyMotionProvider>
      <m.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass-card px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <m.div whileHover={{ scale: 1.02 }}>
                <OptimizedImage 
                  src={logo} 
                  alt="AlprosperAI" 
                  className="h-8 w-auto"
                  width={120}
                  height={32}
                  fetchPriority="high"
                  decoding="async"
                  loading="eager"
                />
              </m.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => {
                const isHashLink = item.href.includes('#');
                const active = isActive(item);
                
                return isHashLink ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`transition-colors duration-200 text-sm font-medium cursor-pointer ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <m.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                      className="inline-block"
                    >
                      {item.label}
                    </m.span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`transition-colors duration-200 text-sm font-medium ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <m.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                      className="inline-block"
                    >
                      {item.label}
                    </m.span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayAudio}
                aria-label={isPlaying ? 'Stop audio description' : 'Play audio description of page'}
                title={isPlaying ? 'Stop audio description' : 'Listen to page description'}
                className="h-9 w-9"
              >
                {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <ThemeToggle />
              <Button
                variant="glow"
                size="sm"
                onClick={() => {
                  if ((window as any).leadConnector?.chatWidget?.openWidget) {
                    (window as any).leadConnector.chatWidget.openWidget();
                  }
                }}
              >
                Reach Out Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <m.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass-card mt-2 p-4 flex flex-col gap-4">
              {navItems.map((item) => {
                const isHashLink = item.href.includes('#');
                const active = isActive(item);
                
                return isHashLink ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsOpen(false);
                    }}
                    className={`transition-colors py-2 cursor-pointer ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`transition-colors py-2 ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                variant="glow"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  if ((window as any).leadConnector?.chatWidget?.openWidget) {
                    (window as any).leadConnector.chatWidget.openWidget();
                  }
                }}
              >
                Reach Out Now
              </Button>
              <div className="flex items-center gap-3 pt-4 mt-2 border-t border-border/50">
                <button
                  onClick={handlePlayAudio}
                  aria-label={isPlaying ? 'Stop audio description' : 'Play audio description of page'}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors active:scale-95"
                >
                  {isPlaying ? <VolumeX className="h-5 w-5 text-primary" /> : <Volume2 className="h-5 w-5" />}
                  <span className="text-sm font-medium">{isPlaying ? 'Stop Audio' : 'Listen'}</span>
                </button>
                <button
                  onClick={() => {
                    const currentTheme = theme;
                    if (currentTheme === 'dark') {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('theme', 'light');
                      window.location.reload();
                    } else {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                      window.location.reload();
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors active:scale-95"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5" />
                      <span className="text-sm font-medium">Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      <span className="text-sm font-medium">Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </m.div>
        </div>
      </m.nav>
    </LazyMotionProvider>
  );
};
