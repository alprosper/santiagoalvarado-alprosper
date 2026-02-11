import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let animationFrame: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      glow.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-0 md:opacity-100 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.07) 0%, hsl(var(--primary) / 0.03) 30%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
};
