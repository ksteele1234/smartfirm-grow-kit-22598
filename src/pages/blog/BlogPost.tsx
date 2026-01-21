import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, User, BookOpen, Mail } from "lucide-react";
import { format } from "date-fns";
import NotFound from "@/pages/NotFound";
import ClusterNavigator from "@/components/blog/ClusterNavigator";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { normalizeBlogHtml } from "@/lib/blogHtml";

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
  post_type: string | null;
  pillar_id: string | null;
  author_id: string | null;
  category_id: string | null;
  blog_categories: {
    name: string;
    slug: string;
  } | null;
}

interface PublicProfile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

interface PostTag {
  id: string;
  name: string;
  slug: string;
}

interface PillarInfo {
  id: string;
  title: string;
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
          post_type,
          pillar_id,
          author_id,
          category_id,
          blog_categories (
            name,
            slug
          )
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .lte("publish_date", new Date().toISOString())
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  // Fetch author profile from public_profiles view (no email for public access)
  const { data: authorProfile } = useQuery({
    queryKey: ["public-profile", post?.author_id],
    queryFn: async () => {
      if (!post?.author_id) return null;

      const { data, error } = await supabase
        .from("public_profiles" as any)
        .select("id, display_name, avatar_url, bio")
        .eq("id", post.author_id)
        .maybeSingle();

      if (error) throw error;
      return data as unknown as PublicProfile | null;
    },
    enabled: !!post?.author_id,
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

  // Fetch pillar info if this is a cluster post
  const { data: pillarInfo } = useQuery({
    queryKey: ["pillar-for-cluster", post?.pillar_id],
    queryFn: async () => {
      if (!post?.pillar_id) return null;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug")
        .eq("id", post.pillar_id)
        .maybeSingle();

      if (error) throw error;
      return data as PillarInfo | null;
    },
    enabled: !!post?.pillar_id,
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

  const isCluster = post.post_type === 'cluster' && post.pillar_id;

  const publishDate = post.publish_date
    ? format(new Date(post.publish_date), "MMMM d, yyyy")
    : format(new Date(post.created_at), "MMMM d, yyyy");

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={post.meta_title || `${post.title} | SmartFirm Blog`}
        description={post.meta_description || post.excerpt || ""}
        canonicalUrl={`https://smartfirm.io/blog/${post.slug}/`}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--ocean-blue))] to-[hsl(var(--professional-teal))] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb for cluster posts */}
            {isCluster && pillarInfo ? (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Link to="/blog/">
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Blog
                  </Button>
                </Link>
                <span className="text-white/50">/</span>
                <Link to={`/blog/${pillarInfo.slug}/`}>
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {pillarInfo.title}
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/blog/">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {isCluster && (
                <Badge className="bg-primary/20 text-white border border-white/20">
                  Part of a guide
                </Badge>
              )}
              {post.blog_categories && (
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  {post.blog_categories.name}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              {authorProfile?.display_name && (
                <div className="flex items-center gap-2">
                  {authorProfile.avatar_url ? (
                    <img
                      src={authorProfile.avatar_url}
                      alt={authorProfile.display_name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span>{authorProfile.display_name}</span>
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
              prose-li:text-muted-foreground
              [&_.tldr-callout]:italic [&_.tldr-callout]:text-[0.95rem] [&_.tldr-callout]:leading-snug
              [&_.tldr-callout]:bg-[hsl(var(--light-teal-bg))] [&_.tldr-callout]:border-l-4 
              [&_.tldr-callout]:border-[hsl(var(--professional-teal))] [&_.tldr-callout]:px-5 [&_.tldr-callout]:py-4 
              [&_.tldr-callout]:rounded-r-lg [&_.tldr-callout]:my-6 [&_.tldr-callout]:text-[hsl(var(--slate-dark))]
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
            dangerouslySetInnerHTML={{ __html: normalizeBlogHtml(post.content || "") }}
          />

          {/* Tags */}
          {postTags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">Tags:</span>
                {postTags.map((tag) => (
                  <Link key={tag.id} to={`/blog/tags/${tag.slug}/`}>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts - Creates internal links to reduce orphan pages */}
          <RelatedPosts 
            currentPostId={post.id} 
            categoryId={post.category_id || undefined}
            limit={3}
          />

          {/* Cluster Navigator - shows related posts in the pillar */}
          {isCluster && post.pillar_id && (
            <ClusterNavigator currentPostId={post.id} pillarId={post.pillar_id} />
          )}

          {/* Author Bio Section */}
          {authorProfile?.display_name && authorProfile?.bio && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-start gap-4">
                {authorProfile.avatar_url ? (
                  <img
                    src={authorProfile.avatar_url}
                    alt={authorProfile.display_name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {authorProfile.display_name}
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    {authorProfile.bio}
                  </p>
                  <Link
                    to="/contact/"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact {authorProfile.display_name?.split(' ')[0] || 'Author'}
                  </Link>
                </div>
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
              <Link to="/get-started/">
                <Button size="lg" className="bg-[hsl(var(--coral))] hover:bg-[hsl(var(--coral))]/90 text-white">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/blog/">
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
