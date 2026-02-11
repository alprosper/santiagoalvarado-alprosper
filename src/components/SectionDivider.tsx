import { m } from "@/components/LazyMotionProvider";

export const SectionDivider = () => {
  return (
    <div className="flex justify-center py-2">
      <m.div
        className="h-px w-full max-w-md"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};
