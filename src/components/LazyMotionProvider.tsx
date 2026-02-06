import { LazyMotion, domAnimation, m, AnimatePresence, useInView } from "framer-motion";
import { ReactNode } from "react";

// Re-export animation primitives for use in components
// This ensures all motion imports come through the LazyMotion context
export { m, AnimatePresence, useInView };

interface LazyMotionProviderProps {
  children: ReactNode;
}

// Wrapper that loads only the DOM animation features (smaller bundle)
export const LazyMotionProvider = ({ children }: LazyMotionProviderProps) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);
