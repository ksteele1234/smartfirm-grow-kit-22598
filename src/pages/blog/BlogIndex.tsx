import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";
import { format } from "date-fns";

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
  profiles: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: posts = [], isLoading: postsLoading } = useQuery({
    queryKey: ["blog-posts", selectedCategory],
    queryFn: async () => {
      let query = supabase
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
          ),
          profiles (
            display_name,
            avatar_url
          )
        `)
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .order("publish_date", { ascending: false });

      if (selectedCategory) {
        query = query.eq("category_id", selectedCategory);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["blog-categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("id, name, slug")
        .order("name");
      if (error) throw error;
      return data as Category[];
    },
  });

  const { data: tags = [] } = useQuery({
    queryKey: ["blog-tags"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_tags")
        .select("id, name, slug")
        .order("name");
      if (error) throw error;
      return data as Tag[];
    },
  });

  const formatDate = (dateString: string | null, fallback: string) => {
    const date = dateString || fallback;
    return format(new Date(date), "MMMM d, yyyy");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog | SmartFirm - Firm Automation Insights"
        description="Expert insights on marketing automation, client acquisition, and growth strategies for accounting and CPA firms. Stay ahead with the latest industry trends."
        canonicalUrl="https://smartfirm.io/blog/"
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--ocean-blue))] to-[hsl(var(--professional-teal))] py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              SmartFirm Blog
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Expert insights on marketing automation, client acquisition, and growth strategies for accounting firms.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        {categories.length > 0 && (
          <section className="border-b bg-background sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Posts
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
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
                  No posts yet
                </h2>
                <p className="text-muted-foreground mb-8">
                  Check back soon for new articles and insights.
                </p>
                <Link to="/get-started">
                  <Button>Get Started with SmartFirm</Button>
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}/`}>
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
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publish_date, post.created_at)}</span>
                          </div>
                          {post.profiles?.display_name && (
                            <div className="flex items-center gap-1">
                              {post.profiles.avatar_url ? (
                                <img
                                  src={post.profiles.avatar_url}
                                  alt={post.profiles.display_name}
                                  className="w-5 h-5 rounded-full object-cover"
                                />
                              ) : (
                                <User className="w-4 h-4" />
                              )}
                              <span className="truncate max-w-[100px]">{post.profiles.display_name}</span>
                            </div>
                          )}
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

        {/* Browse by Topic Section */}
        {tags.length > 0 && (
          <section className="py-12 bg-slate-50 border-t">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">Browse by Topic</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {tags.map((tag) => (
                  <Link key={tag.id} to={`/blog/tags/${tag.slug}/`}>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors cursor-pointer text-sm py-1 px-3">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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

export default BlogIndex;
