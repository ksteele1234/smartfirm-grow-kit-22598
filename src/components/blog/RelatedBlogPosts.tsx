import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface RelatedBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  featured_image: string | null;
  publish_date: string | null;
}

interface RelatedBlogPostsProps {
  /** Tag slugs to match blog posts against (e.g., ["marketing-automation", "lead-generation"]) */
  tags: string[];
  /** Section heading text */
  heading?: string;
  /** Max number of posts to show */
  limit?: number;
}

/**
 * Displays related blog posts on service pages by matching blog post tags.
 * Queries Supabase blog_tags + blog_post_tags junction table to find relevant content.
 * Falls back to recent posts if no tag matches found.
 * Returns null (renders nothing) if no published posts exist.
 */
const RelatedBlogPosts = ({
  tags,
  heading = "Related Articles",
  limit = 3
}: RelatedBlogPostsProps) => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["related-blog-posts-by-tags", tags.join(","), limit],
    queryFn: async () => {
      if (tags.length === 0) return [];

      // Step 1: Get tag IDs from slugs
      const { data: tagRows, error: tagError } = await supabase
        .from("blog_tags")
        .select("id")
        .in("slug", tags);

      if (tagError) throw tagError;
      const tagIds = (tagRows || []).map((t) => t.id);

      // Step 2: Get post IDs matching those tags
      if (tagIds.length > 0) {
        const { data: postTagRows, error: ptError } = await supabase
          .from("blog_post_tags")
          .select("post_id")
          .in("tag_id", tagIds);

        if (!ptError && postTagRows && postTagRows.length > 0) {
          const postIds = [...new Set(postTagRows.map((pt) => pt.post_id))];

          const { data: tagPosts, error: postsError } = await supabase
            .from("blog_posts")
            .select("id, slug, title, excerpt, featured_image, publish_date")
            .eq("status", "published")
            .lte("publish_date", new Date().toISOString())
            .in("id", postIds)
            .order("publish_date", { ascending: false })
            .limit(limit);

          if (!postsError && tagPosts && tagPosts.length >= limit) {
            return tagPosts as RelatedBlogPost[];
          }

          // If we got some but not enough, we'll supplement below
          if (!postsError && tagPosts && tagPosts.length > 0) {
            const existingIds = tagPosts.map((p) => p.id);
            const remaining = limit - tagPosts.length;

            const { data: morePosts } = await supabase
              .from("blog_posts")
              .select("id, slug, title, excerpt, featured_image, publish_date")
              .eq("status", "published")
              .lte("publish_date", new Date().toISOString())
              .not("id", "in", `(${existingIds.join(",")})`)
              .order("publish_date", { ascending: false })
              .limit(remaining);

            return [...tagPosts, ...(morePosts || [])] as RelatedBlogPost[];
          }
        }
      }

      // Fallback: recent posts if no tag matches
      const { data: recentPosts, error: recentError } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, featured_image, publish_date")
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .order("publish_date", { ascending: false })
        .limit(limit);

      if (recentError) throw recentError;
      return (recentPosts || []) as RelatedBlogPost[];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  if (isLoading || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {heading}
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore our latest insights and strategies for accounting firms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}/`}
                className="group block h-full"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-border">
                  {post.featured_image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200 text-base">
                      {post.title}
                    </h3>
                    {post.publish_date && (
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(new Date(post.publish_date), "MMM d, yyyy")}
                      </p>
                    )}
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all duration-200">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
