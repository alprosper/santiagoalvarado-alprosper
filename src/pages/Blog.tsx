import { m } from "@/components/LazyMotionProvider";
import { LazyMotionProvider } from "@/components/LazyMotionProvider";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { getSortedPosts } from "@/content/blog/posts";
import { format } from "date-fns";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

const Blog = () => {
  const posts = getSortedPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <LazyMotionProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Latest Updates</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                News & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay informed with the latest industry trends, business strategies, and expert insights to help you grow.
              </p>
            </m.div>

            {/* Featured Article */}
            {featuredPost && (
              <m.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <Link to={`/news/${featuredPost.slug}`} className="block group">
                  <div className="glass-card rounded-xl overflow-hidden grid lg:grid-cols-2 gap-0 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    {/* Featured Image */}
                    {featuredPost.featuredImage && (
                      <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                        <img
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            Featured
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      {/* Tags */}
                      {featuredPost.tags && featuredPost.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-base lg:text-lg mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(featuredPost.publishedAt), "MMMM d, yyyy")}
                        </span>
                        <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Read Full Article
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </m.article>
            )}

            {/* Section Divider */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">More Articles</h3>
              <div className="h-px flex-1 bg-border" />
            </m.div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post, index) => (
                <m.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <Link to={`/news/${post.slug}`} className="block h-full">
                    <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                      {/* Featured Image */}
                      {post.featuredImage && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Date */}
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          {format(new Date(post.publishedAt), "MMM d, yyyy")}
                        </span>

                        {/* Title */}
                        <h2 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Tags & CTA */}
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags && post.tags.slice(0, 1).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </m.article>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No news articles yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </main>

        <CTASection hideTestimonialBadge />

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

export default Blog;
