import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, BookOpen, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import NotFound from "@/pages/NotFound";
import { normalizeBlogHtml } from "@/lib/blogHtml";

interface PillarPost {
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
    email: string | null;
    avatar_url: string | null;
    bio: string | null;
  } | null;
}

interface ClusterPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  publish_date: string | null;
  display_order: number;
}

const PillarPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch pillar post
  const { data: pillar, isLoading, error } = useQuery({
    queryKey: ["pillar-post", slug],
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
            email,
            avatar_url,
            bio
          )
        `)
        .eq("slug", slug)
        .eq("post_type", "pillar")
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .maybeSingle();

      if (error) throw error;
      return data as PillarPost | null;
    },
    enabled: !!slug,
  });

  // Fetch cluster posts for this pillar
  const { data: clusterPosts = [] } = useQuery({
    queryKey: ["cluster-posts", pillar?.id],
    queryFn: async () => {
      if (!pillar?.id) return [];

      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image, publish_date, display_order")
        .eq("pillar_id", pillar.id)
        .eq("status", "published")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as ClusterPost[];
    },
    enabled: !!pillar?.id,
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

  if (error || !pillar) {
    return <NotFound />;
  }

  const publishDate = pillar.publish_date
    ? format(new Date(pillar.publish_date), "MMMM d, yyyy")
    : format(new Date(pillar.created_at), "MMMM d, yyyy");

  // Generate ItemList structured data for SEO
  const itemListSchema = clusterPosts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${pillar.title} - Complete Series`,
    "numberOfItems": clusterPosts.length,
    "itemListElement": clusterPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "name": post.title,
        "url": `https://smartfirm.io/blog/${post.slug}`
      }
    }))
  } : null;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={pillar.meta_title || `${pillar.title} | SmartFirm Blog`}
        description={pillar.meta_description || pillar.excerpt || ""}
        canonicalUrl={`https://smartfirm.io/blog/${pillar.slug}/`}
      />

      {/* ItemList Schema for cluster posts */}
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}

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

            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[hsl(var(--coral))] text-white hover:bg-[hsl(var(--coral))]/90">
                <BookOpen className="w-3 h-3 mr-1" />
                Complete Guide
              </Badge>
              {pillar.blog_categories && (
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  {pillar.blog_categories.name}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {pillar.title}
            </h1>

            {pillar.excerpt && (
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {pillar.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              {pillar.profiles?.display_name && (
                <div className="flex items-center gap-2">
                  {pillar.profiles.avatar_url ? (
                    <img
                      src={pillar.profiles.avatar_url}
                      alt={pillar.profiles.display_name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{pillar.profiles.display_name}</span>
                </div>
              )}
              {clusterPosts.length > 0 && (
                <div className="flex items-center gap-2">
                  <span>{clusterPosts.length} articles in this guide</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {pillar.featured_image && (
          <div className="container mx-auto px-4 max-w-4xl -mt-8">
            <img
              src={pillar.featured_image}
              alt={pillar.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Table of Contents - Cluster Posts */}
        {clusterPosts.length > 0 && (
          <section className="container mx-auto px-4 max-w-4xl py-12">
            <div className="bg-muted/50 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <div className="grid gap-4">
                {clusterPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card className="transition-all hover:shadow-md hover:border-primary/30">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Pillar Content */}
        <article className="container mx-auto px-4 max-w-4xl py-8 md:py-12">
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
              prose-li:text-muted-foreground
              [&_.anchor-target]:scroll-mt-24 [&_.anchor-target]:invisible [&_.anchor-target]:absolute [&_.anchor-target]:w-0 [&_.anchor-target]:h-0
              prose-h2:scroll-mt-24 prose-h3:scroll-mt-24"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const anchor = target.closest('a');
              if (anchor?.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href')?.slice(1);
                if (targetId) {
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.history.pushState(null, '', `#${targetId}`);
                  }
                }
              }
            }}
            dangerouslySetInnerHTML={{ __html: normalizeBlogHtml(pillar.content || "") }}
          />
        </article>

        {/* Cluster Posts Grid */}
        {clusterPosts.length > 0 && (
          <section className="bg-muted py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Explore Each Topic in Detail
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clusterPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                      {post.featured_image && (
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-background py-16">
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

export default PillarPage;
