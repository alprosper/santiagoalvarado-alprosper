import { m } from "@/components/LazyMotionProvider";

export const PortfolioFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Santiago Alvarado. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://alprosperai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              alprosperai.com
            </a>
          </div>
        </m.div>
      </div>
    </footer>
  );
};
