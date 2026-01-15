import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, User, BookOpen, AlertTriangle, CheckCircle, ExternalLink, Link2, Loader2 } from "lucide-react";
import { format } from "date-fns";
import NotFound from "@/pages/NotFound";
import ClusterNavigator from "@/components/blog/ClusterNavigator";
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
  status: string;
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

interface LinkValidationResult {
  url: string;
  type: 'internal' | 'external';
  status: 'valid' | 'invalid' | 'checking';
  error?: string;
}

const BlogPostPreview = () => {
  const { slug } = useParams<{ slug: string }>();
  const [linkResults, setLinkResults] = useState<LinkValidationResult[]>([]);
  const [isValidating, setIsValidating] = useState(false);

  // Fetch post without status filter (preview mode)
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post-preview", slug],
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
          status,
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
        .maybeSingle();

      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  // Fetch tags for this post
  const { data: postTags = [] } = useQuery({
    queryKey: ["blog-post-tags-preview", post?.id],
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
    queryKey: ["pillar-for-cluster-preview", post?.pillar_id],
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

  // Extract and validate links when post content changes
  useEffect(() => {
    if (!post?.content) return;

    const validateLinks = async () => {
      setIsValidating(true);

      // Extract all links from HTML content
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content || '', 'text/html');
      const links = Array.from(doc.querySelectorAll('a[href]'));

      const uniqueUrls = [...new Set(links.map(link => link.getAttribute('href') || '').filter(Boolean))];

      // Separate anchor links from other links - anchors don't need validation
      const anchorLinks = uniqueUrls.filter(url => url.startsWith('#'));
      const otherLinks = uniqueUrls.filter(url => !url.startsWith('#'));

      // Mark anchor links as valid immediately
      const anchorResults: LinkValidationResult[] = anchorLinks.map(url => ({
        url,
        type: 'internal' as const,
        status: 'valid' as const,
      }));

      const results: LinkValidationResult[] = otherLinks.map(url => ({
        url,
        type: url.startsWith('http') && !url.includes('smartfirm.io') ? 'external' : 'internal',
        status: 'checking' as const,
      }));

      // Show all results including pre-validated anchors
      setLinkResults([...anchorResults, ...results]);

      // Validate only non-anchor links
      const validatedResults = await Promise.all(
        results.map(async (result) => {
          try {
            if (result.type === 'internal') {
              // For internal links, check if the path exists in our routes
              const cleanUrl = result.url.replace(/^https?:\/\/[^/]+/, '').replace(/#.*$/, '');

              // Simple validation: check if it starts with valid prefixes or is empty
              const validPrefixes = ['/', '/blog/', '/services/', '/solutions/', '/industries/', '/tools/', '/faq/', '/case-studies/', '/about', '/contact', '/get-started', '/resources', '/privacy', '/terms', '/cookies'];
              const isValid = cleanUrl === '' || validPrefixes.some(prefix => cleanUrl.startsWith(prefix));

              return {
                ...result,
                status: isValid ? 'valid' : 'invalid',
                error: isValid ? undefined : 'Path may not exist',
              } as LinkValidationResult;
            } else {
              // External links - we can't validate due to CORS, mark as valid
              return {
                ...result,
                status: 'valid' as const,
              };
            }
          } catch {
            return {
              ...result,
              status: 'invalid' as const,
              error: 'Validation failed',
            };
          }
        })
      );

      // Combine anchor results (already valid) with validated results
      setLinkResults([...anchorResults, ...validatedResults]);
      setIsValidating(false);
    };

    validateLinks();
  }, [post?.content]);

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
  const isDraft = post.status !== 'published';
  const invalidLinks = linkResults.filter(r => r.status === 'invalid');
  const validLinks = linkResults.filter(r => r.status === 'valid');

  const publishDate = post.publish_date
    ? format(new Date(post.publish_date), "MMMM d, yyyy")
    : format(new Date(post.created_at), "MMMM d, yyyy");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Draft Preview Banner */}
      <div className="bg-amber-500 text-white py-3 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">
              {isDraft ? 'Draft Preview' : 'Preview Mode'} — This post is {post.status}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to={`/admin/posts/${post.id}`}>
              <Button variant="secondary" size="sm" className="bg-white text-amber-700 hover:bg-amber-50">
                Edit Post
              </Button>
            </Link>
            <Link to="/admin/posts">
              <Button variant="ghost" size="sm" className="text-white hover:bg-amber-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Link Validation Panel */}
      <div className="bg-muted border-b py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Link2 className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold">Link Validation</h3>
              {isValidating && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                {validLinks.length} valid
              </span>
              {invalidLinks.length > 0 && (
                <span className="flex items-center gap-1 text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  {invalidLinks.length} issues
                </span>
              )}
              <span className="text-muted-foreground">
                {linkResults.length} total links
              </span>
            </div>
          </div>

          {invalidLinks.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-2">
              <h4 className="text-sm font-medium text-red-800 mb-2">Links with potential issues:</h4>
              <ul className="space-y-1">
                {invalidLinks.map((link, idx) => (
                  <li key={idx} className="text-sm text-red-700 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{link.url}</span>
                    {link.error && <span className="text-red-500">— {link.error}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {linkResults.length > 0 && invalidLinks.length === 0 && !isValidating && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-2">
              <p className="text-sm text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                All {linkResults.length} links appear to be valid
              </p>
            </div>
          )}

          {linkResults.length === 0 && !isValidating && (
            <p className="text-sm text-muted-foreground">No links found in this post.</p>
          )}
        </div>
      </div>

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
                <Link to={`/blog/${pillarInfo.slug}`}>
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
              {/* Status Badge */}
              <Badge className={`
                ${post.status === 'draft' ? 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30' : ''}
                ${post.status === 'scheduled' ? 'bg-blue-500/20 text-blue-200 border-blue-400/30' : ''}
                ${post.status === 'published' ? 'bg-green-500/20 text-green-200 border-green-400/30' : ''}
                border
              `}>
                {post.status.toUpperCase()}
              </Badge>
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
                  <Link key={tag.id} to={`/blog/tags/${tag.slug}`}>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {tag.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Cluster Navigator */}
          {isCluster && post.pillar_id && (
            <ClusterNavigator currentPostId={post.id} pillarId={post.pillar_id} />
          )}

          {/* Author Bio Section */}
          {post.profiles?.display_name && post.profiles?.bio && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-start gap-4">
                {post.profiles.avatar_url ? (
                  <img
                    src={post.profiles.avatar_url}
                    alt={post.profiles.display_name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {post.profiles.display_name}
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    {post.profiles.bio}
                  </p>
                </div>
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPreview;
