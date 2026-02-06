import { m } from "@/components/LazyMotionProvider";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [{
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

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 px-6 relative">
      {/* Background accent - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from business owners who transformed their operations with our solutions.
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* See All Reviews Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="group gap-2">
            <Link to="/reviews">
              See All Reviews
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
};
