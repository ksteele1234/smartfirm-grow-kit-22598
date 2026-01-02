import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { format } from "date-fns";
import NotFound from "@/pages/NotFound";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  publish_date: string | null;
  created_at: string;
  blog_categories: {
    name: string;
    slug: string;
  } | null;
  profiles: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

interface PostTag {
  id: string;
  name: string;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          content,
          excerpt,
          featured_image,
          meta_title,
          meta_description,
          publish_date,
          created_at,
          blog_categories (
            name,
            slug
          ),
          profiles (
            display_name,
            avatar_url
          )
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!slug,
  });

  // Fetch tags for this post
  const { data: postTags = [] } = useQuery({
    queryKey: ["blog-post-tags", post?.id],
    queryFn: async () => {
      if (!post?.id) return [];

      const { data: tagLinks, error: tagLinksError } = await supabase
        .from("blog_post_tags")
        .select("tag_id")
        .eq("post_id", post.id);

      if (tagLinksError) throw tagLinksError;
      if (!tagLinks || tagLinks.length === 0) return [];

      const tagIds = tagLinks.map((tl) => tl.tag_id);

      const { data, error } = await supabase
        .from("blog_tags")
        .select("id, name, slug")
        .in("id", tagIds);

      if (error) throw error;
      return data as PostTag[];
    },
    enabled: !!post?.id,
  });

  if (isLoading) {
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

  if (error || !post) {
    return <NotFound />;
  }

  const publishDate = post.publish_date 
    ? format(new Date(post.publish_date), "MMMM d, yyyy")
    : format(new Date(post.created_at), "MMMM d, yyyy");

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={post.meta_title || `${post.title} | SmartFirm Blog`}
        description={post.meta_description || post.excerpt || ""}
        canonicalUrl={`https://smartfirm.io/blog/${post.slug}`}
      />
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--ocean-blue))] to-[hsl(var(--professional-teal))] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            {post.blog_categories && (
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
                {post.blog_categories.name}
              </Badge>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              {post.profiles?.display_name && (
                <div className="flex items-center gap-2">
                  {post.profiles.avatar_url ? (
                    <img
                      src={post.profiles.avatar_url}
                      alt={post.profiles.display_name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{post.profiles.display_name}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="container mx-auto px-4 max-w-4xl -mt-8">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto px-4 max-w-4xl py-12 md:py-16">
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:font-heading
              prose-h1:text-[hsl(var(--heading-primary))] prose-h1:text-[2rem] prose-h1:lg:text-[2.5rem] prose-h1:font-extrabold
              prose-h2:text-[hsl(var(--heading-primary))] prose-h2:text-[1.5rem] prose-h2:lg:text-[2rem] prose-h2:font-bold
              prose-h3:text-[hsl(var(--heading-secondary))] prose-h3:text-[1.25rem] prose-h3:lg:text-[1.5rem] prose-h3:font-semibold
              prose-h4:text-[hsl(var(--heading-secondary))] prose-h4:text-[1.125rem] prose-h4:lg:text-[1.25rem] prose-h4:font-semibold
              prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />

          {/* Tags */}
          {postTags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">Tags:</span>
                {postTags.map((tag) => (
                  <Link key={tag.id} to={`/blog/tags/${tag.slug}`}>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Accounting Firm?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how SmartFirm can help you automate your marketing, attract more clients, and grow your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
