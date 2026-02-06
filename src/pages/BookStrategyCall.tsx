import { LazyMotionProvider, m } from "@/components/LazyMotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingCalendar } from "@/components/BookingCalendar";

const BookStrategyCall = () => {
  return (
    <LazyMotionProvider>
      <div className="min-h-screen flex flex-col bg-background mesh-background">
        <Navbar />

        <main className="flex-1 pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                Book Your <span className="gradient-text">Free Strategy Call</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let's discuss how we can help maximize your business growth with the right tools and strategies.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BookingCalendar />
            </m.div>
          </div>
        </main>

        <Footer />
      </div>
    </LazyMotionProvider>
  );
};

export default BookStrategyCall;