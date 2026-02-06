import { m } from "@/components/LazyMotionProvider";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/content/blog/posts";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { BlogPostingSchema } from "@/components/StructuredData";

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  return (
    <>
      {/* BlogPosting Schema for AEO */}
      <BlogPostingSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        publishedAt={post.publishedAt}
        featuredImage={post.featuredImage}
        slug={post.slug}
        tags={post.tags}
      />
      
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
        </m.div>

        {/* Featured Image */}
        {post.featuredImage && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-lg overflow-hidden mb-8"
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </m.div>
        )}

        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), "MMMM d, yyyy")}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </m.header>

        {/* Content */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-ul:text-muted-foreground prose-li:text-muted-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 glass-card rounded-lg text-center"
        >
          <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free strategy call with our team to discuss how we can help you achieve your goals.
          </p>
          <Button asChild size="lg">
            <Link to="/book-strategy-call">
              Book Your Free Strategy Call
            </Link>
          </Button>
        </m.div>
      </article>
    </>
  );
};

export default BlogPostTemplate;
