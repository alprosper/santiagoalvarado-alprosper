import { LazyMotionProvider, m } from "@/components/LazyMotionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote, Star, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [{
  quote: "I'm so thankful I was able to work with them, it was the best choice for my business. Santiago is very knowledgeable and polite. He helped me create my business website and also business cards! The most helpful part is having a CRM Alprosper Ai.",
  name: "Martin",
  role: "Owner"
}, {
  quote: "I'm very happy with the website that he designed for me and all the help that he always does for me. I definitely recommend Santiago (Alprosper Marketing, LLC) for your future website marketing. He's definitely the best.",
  name: "Tony",
  role: "Owner"
}, {
  quote: "Amazing. It makes my job easier. Santiago built us an awesome website. I love how the CRM tracks all our customers and our conversations. We linked all our social media platforms so it makes things easier to manage. The app is convenient and you can access your customers, payments, and schedule at anytime anyplace.",
  name: "Melissa",
  role: "Owner"
}, {
  quote: "Has been a very valuable asset to my business. Thank you!",
  name: "Tim",
  role: "Owner"
}, {
  quote: "Amazing. He's helped me grow my business tremendously with advertising and tech support.",
  name: "Tyler",
  role: "Owner"
}, {
  quote: "Very friendly and super helpful with all of my needs!!",
  name: "Darcie",
  role: "Owner"
}, {
  quote: "Santiago is the man! He has helped us immensely in creating a digital footprint online, all while helping us with a platform and lead generation system that allows us to connect with customers in a quicker and seamless process. I highly recommend his services. You won't regret it!",
  name: "Brady",
  role: "Owner"
}, {
  quote: "I've been working with Santiago for a long time and he helped me start my own website. He is extremely patient and helpful!! Definitely recommend him!",
  name: "Kat",
  role: "Manager"
}, {
  quote: "Santiago is absolutely great to work with. He is very informative and communicates very well.",
  name: "Jim",
  role: "Owner"
}, {
  quote: "Alprosper has provided excellent support specially in creating my new website, they are also readily available to address any questions I have along the way.",
  name: "Patrizia",
  role: "Owner"
}, {
  quote: "I couldn't ask for more! Personable and a fantastic company to work with on any website and technical needs!",
  name: "Blaine",
  role: "Owner"
}, {
  quote: "Very helpful in not only organizing your business but also growing your business. Thank you for all you do, definitely recommend this to all my insurance friends!",
  name: "Vince",
  role: "Owner"
}, {
  quote: "We are immensely grateful for his contributions and are better equipped for future challenges thanks to his efforts.",
  name: "Client",
  role: "Owner"
}, {
  quote: "Never again do I need to keep up with all my different accounts because everything is in ONE place. I am not tech savvy so having them to do it all and show me how to do it myself has been life-changing for my business.",
  name: "Krystle",
  role: "Owner"
}, {
  quote: "Has been an absolute pleasure to work with and the knowledge, skills and ability they bring to the table is undeniable. Their care for details and attention to the little things has made my life SO much easier with our business. I highly recommend them and their skills to anyone looking to grow, refine or streamline their business!",
  name: "Andy",
  role: "Co-Founder & CEO"
}, {
  quote: "Bringing Santiago onto our team for our migration was nothing short of transformative. His expertise proved invaluable. Santiago didn't just manage a system change; he enhanced our entire operational framework. His technical skills, combined with his exceptional teamwork and problem-solving capabilities, have set a new standard of excellence.",
  name: "Management",
  role: "Owner"
}];

const Reviews = () => {

  return (
    <LazyMotionProvider>
      <div className="min-h-screen flex flex-col bg-background mesh-background">
        <Navbar />

        <main className="flex-1 pt-24 pb-16 px-4">
          <div className="container mx-auto">
            {/* Header */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Client Reviews
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                What Our <span className="gradient-text">Clients</span> Say
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real stories from business owners who transformed their operations with our solutions.
              </p>
            </m.div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-6 rounded-2xl relative group hover:border-primary/30 transition-all duration-300"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff6b35] flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb347] to-[#ff6b35] flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </m.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />

        {/* Sticky CTA Button - Always visible */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button asChild size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
            <Link to="/book-strategy-call">
              <Calendar className="mr-2 w-5 h-5" />
              <span className="hidden sm:inline">Book Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </LazyMotionProvider>
  );
};

export default Reviews;
