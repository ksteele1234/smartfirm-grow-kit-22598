import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { format } from "date-fns";
import NotFound from "@/pages/NotFound";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  publish_date: string | null;
  created_at: string;
  blog_categories: {
    name: string;
    slug: string;
  } | null;
}

interface TagData {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

interface RelatedTag {
  id: string;
  name: string;
  slug: string;
}

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch the tag details
  const { data: tag, isLoading: tagLoading, error: tagError } = useQuery({
    queryKey: ["blog-tag", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_tags")
        .select("id, name, slug, description, meta_title, meta_description")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      return data as TagData | null;
    },
    enabled: !!slug,
  });

  // Fetch posts with this tag
  const { data: posts = [], isLoading: postsLoading } = useQuery({
    queryKey: ["blog-posts-by-tag", tag?.id],
    queryFn: async () => {
      if (!tag?.id) return [];

      // First get post IDs that have this tag
      const { data: postTags, error: postTagsError } = await supabase
        .from("blog_post_tags")
        .select("post_id")
        .eq("tag_id", tag.id);

      if (postTagsError) throw postTagsError;
      if (!postTags || postTags.length === 0) return [];

      const postIds = postTags.map((pt) => pt.post_id);

      // Then fetch the actual posts
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          excerpt,
          featured_image,
          publish_date,
          created_at,
          blog_categories (
            name,
            slug
          )
        `)
        .in("id", postIds)
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .order("publish_date", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: !!tag?.id,
  });

  // Fetch related tags
  const { data: relatedTags = [] } = useQuery({
    queryKey: ["related-tags", tag?.id],
    queryFn: async () => {
      if (!tag?.id) return [];

      // Get related tag IDs
      const { data: relatedTagIds, error: relatedError } = await supabase
        .from("blog_related_tags")
        .select("related_tag_id")
        .eq("tag_id", tag.id);

      if (relatedError) throw relatedError;
      if (!relatedTagIds || relatedTagIds.length === 0) return [];

      const ids = relatedTagIds.map((rt) => rt.related_tag_id);

      // Fetch the related tag details
      const { data, error } = await supabase
        .from("blog_tags")
        .select("id, name, slug")
        .in("id", ids);

      if (error) throw error;
      return data as RelatedTag[];
    },
    enabled: !!tag?.id,
  });

  const formatDate = (dateString: string | null, fallback: string) => {
    const date = dateString || fallback;
    return format(new Date(date), "MMMM d, yyyy");
  };

  if (tagLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (tagError || !tag) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={tag.meta_title || `${tag.name} | SmartFirm Blog`}
        description={tag.meta_description || tag.description || `Browse all articles tagged with ${tag.name}`}
        canonicalUrl={`https://smartfirm.io/blog/tags/${tag.slug}`}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--ocean-blue))] to-[hsl(var(--professional-teal))] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-white/80" />
              <Badge className="bg-white/20 text-white hover:bg-white/30">
                Tag
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {tag.name}
            </h1>

            {tag.description && (
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                {tag.description}
              </p>
            )}

            <p className="text-white/60 mt-4">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </section>

        {/* Related Tags */}
        {relatedTags.length > 0 && (
          <section className="border-b bg-background">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">Related topics:</span>
                {relatedTags.map((relatedTag) => (
                  <Link key={relatedTag.id} to={`/blog/tags/${relatedTag.slug}`}>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {relatedTag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {postsLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  No posts with this tag yet
                </h2>
                <p className="text-muted-foreground mb-8">
                  Check back soon for new articles.
                </p>
                <Link to="/blog">
                  <Button>Browse All Posts</Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                      {post.featured_image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardHeader>
                        {post.blog_categories && (
                          <Badge variant="secondary" className="w-fit mb-2">
                            {post.blog_categories.name}
                          </Badge>
                        )}
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publish_date, post.created_at)}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {post.excerpt && (
                          <CardDescription className="line-clamp-3">
                            {post.excerpt}
                          </CardDescription>
                        )}
                        <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Grow Your Accounting Firm?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how SmartFirm can help you automate your marketing, attract more clients, and scale your practice.
            </p>
            <Link to="/get-started">
              <Button size="lg" className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TagPage;
