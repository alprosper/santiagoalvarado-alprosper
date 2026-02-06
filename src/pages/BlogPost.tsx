import { useParams, Navigate } from "react-router-dom";
import { LazyMotionProvider } from "@/components/LazyMotionProvider";
import { getPostBySlug } from "@/content/blog/posts";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Redirect to news listing if post not found
  if (!post) {
    return <Navigate to="/news" replace />;
  }

  return (
    <LazyMotionProvider>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <BlogPostTemplate post={post} />
        </main>

        <Footer />
      </div>
    </LazyMotionProvider>
  );
};

export default BlogPost;
