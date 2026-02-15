import { m } from "@/components/LazyMotionProvider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Play, X } from "lucide-react";
import { useState, useRef } from "react";
import headshot from "@/assets/headshot.png";

const VSL_URL = "https://storage.googleapis.com/msgsndr/cSyIZFAgwXwZic4pCtod/media/6990c721899b88d2c494b0ed.mp4";

export const PortfolioHero = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  const handleStop = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <section id="hero" className="relative pt-24 px-6 pb-4 flex-col flex items-center justify-start">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-[40px]">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
                <Cog className="w-4 h-4 text-primary" />
                Automation Specialist
              </span>
            </m.div>

            {/* Name */}
            <m.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}>

              {"I Turn Chaos Into".split(" ").map((word, i) =>
              <m.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}>

                  {word}
                </m.span>
              )}
              <m.span
                className="gradient-text glow-text inline-block"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 200 }}>

                Clockwork
              </m.span>
            </m.h1>

            {/* Tagline */}
            <m.p
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}>

              Automation specialist transforming repetitive tasks into elegant, self-running systems that save time and eliminate errors.
            </m.p>

            {/* CTA */}
            <m.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}>

              <Button
                variant="glow"
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}>

                Get In Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}>

                View Projects
              </Button>
            </m.div>
          </div>

          {/* Right Content - Headshot */}
          <m.div
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}>

            {/* Glow behind image */}
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-75" />
            
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                style={{ boxShadow: '0 0 40px -10px hsl(var(--primary) / 0.2)' }}
              >
                {/* Headshot thumbnail */}
                {!playing && (
                  <button
                    onClick={handlePlay}
                    className="relative w-full h-full group cursor-pointer"
                    aria-label="Watch video"
                  >
                    <img
                      src={headshot}
                      alt="Santiago Alvarado"
                      className="w-full h-full object-cover"
                    />
                    {/* Always-visible play button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/25 transition-all duration-300">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-20 h-20 rounded-full border-2 border-white/25 animate-ping" style={{ animationDuration: '2s' }} />
                        <div className="w-14 h-14 rounded-full bg-white/40 group-hover:bg-white/75 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-black/50 fill-black/50 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Watch Video</span>
                  </button>
                )}

                {/* Video playing inside circle */}
                {playing && (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={VSL_URL}
                      controls
                      className="w-full h-full object-cover"
                      onEnded={handleStop}
                    />
                    <button
                      onClick={handleStop}
                      className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      aria-label="Close video"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.upwork.com/freelancers/santiagoalprosper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="Upwork"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/alprosperai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@AlprosperAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </m.div>
        </div>

      </div>
     </section>);
};