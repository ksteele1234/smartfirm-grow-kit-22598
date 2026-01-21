import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  featured_image: string | null;
  publish_date: string | null;
}

interface RelatedPostsProps {
  currentPostId: string;
  categoryId?: string;
  limit?: number;
}

const RelatedPosts = ({ currentPostId, categoryId, limit = 3 }: RelatedPostsProps) => {
  const { data: relatedPosts = [], isLoading } = useQuery({
    queryKey: ["related-posts", currentPostId, categoryId],
    queryFn: async () => {
      // First try: posts from same category
      if (categoryId) {
        const { data: categoryPosts, error: categoryError } = await supabase
          .from("blog_posts")
          .select("id, slug, title, excerpt, featured_image, publish_date")
          .eq("status", "published")
          .lte("publish_date", new Date().toISOString())
          .eq("category_id", categoryId)
          .neq("id", currentPostId)
          .order("publish_date", { ascending: false })
          .limit(limit);

        if (!categoryError && categoryPosts && categoryPosts.length >= limit) {
          return categoryPosts as RelatedPost[];
        }
      }

      // Fallback: get recent posts if not enough in category
      const { data: recentPosts, error: recentError } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, featured_image, publish_date")
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .neq("id", currentPostId)
        .order("publish_date", { ascending: false })
        .limit(limit);

      if (recentError) throw recentError;
      return (recentPosts || []) as RelatedPost[];
    },
  });

  if (isLoading || relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-xl font-bold text-foreground mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}/`} 
            className="group block"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 overflow-hidden">
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
              <CardContent className="p-4">
                <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h4>
                {post.publish_date && (
                  <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(post.publish_date), "MMM d, yyyy")}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
