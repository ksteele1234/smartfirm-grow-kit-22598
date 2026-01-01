import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, FolderOpen, Tags, Plus, Clock, CheckCircle, FileEdit } from 'lucide-react';
import SEO from '@/components/SEO';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  scheduledPosts: number;
  totalCategories: number;
  totalTags: number;
}

interface RecentPost {
  id: string;
  title: string;
  status: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    scheduledPosts: 0,
    totalCategories: 0,
    totalTags: 0,
  });
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch posts with status counts
      const { data: posts, error: postsError } = await supabase
        .from('blog_posts')
        .select('id, title, status, updated_at')
        .order('updated_at', { ascending: false });

      if (postsError) throw postsError;

      // Fetch categories count
      const { count: categoriesCount, error: catError } = await supabase
        .from('blog_categories')
        .select('*', { count: 'exact', head: true });

      if (catError) throw catError;

      // Fetch tags count
      const { count: tagsCount, error: tagsError } = await supabase
        .from('blog_tags')
        .select('*', { count: 'exact', head: true });

      if (tagsError) throw tagsError;

      const allPosts = posts || [];
      setStats({
        totalPosts: allPosts.length,
        publishedPosts: allPosts.filter(p => p.status === 'published').length,
        draftPosts: allPosts.filter(p => p.status === 'draft').length,
        scheduledPosts: allPosts.filter(p => p.status === 'scheduled').length,
        totalCategories: categoriesCount || 0,
        totalTags: tagsCount || 0,
      });

      setRecentPosts(allPosts.slice(0, 5));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle size={14} className="text-green-600" />;
      case 'scheduled':
        return <Clock size={14} className="text-amber-600" />;
      default:
        return <FileEdit size={14} className="text-slate-400" />;
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="SmartFirm blog admin dashboard"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to the SmartFirm blog admin</p>
          </div>
          <Button asChild>
            <Link to="/admin/posts/new">
              <Plus size={16} className="mr-2" />
              New Post
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                {stats.publishedPosts} published
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <FileEdit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.draftPosts}</div>
              <p className="text-xs text-muted-foreground">
                {stats.scheduledPosts} scheduled
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCategories}</div>
              <p className="text-xs text-muted-foreground">
                For organizing posts
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tags</CardTitle>
              <Tags className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTags}</div>
              <p className="text-xs text-muted-foreground">
                For flexible tagging
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Posts</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/posts">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : recentPosts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No posts yet</p>
                <Button asChild>
                  <Link to="/admin/posts/new">Create your first post</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/admin/posts/${post.id}/edit`}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-primary/50 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(post.status)}
                      <span className="font-medium text-sm">{post.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.updated_at)}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
