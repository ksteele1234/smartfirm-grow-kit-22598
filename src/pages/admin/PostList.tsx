import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Loader2,
  FileUp,
  ExternalLink,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Columns,
  FileSearch,
} from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import PostCsvUploader from './PostCsvUploader';

interface ColumnVisibility {
  type: boolean;
  category: boolean;
  pillar: boolean;
  status: boolean;
  updated: boolean;
  published: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  status: string;
  post_type: string | null;
  publish_date: string | null;
  created_at: string;
  updated_at: string;
  pillar_id: string | null;
  category_id: string | null;
  blog_categories: { id: string; name: string } | null;
}

interface Category {
  id: string;
  name: string;
}

interface PillarPost {
  id: string;
  title: string;
}

type SortField = 'title' | 'category' | 'status' | 'updated_at' | 'publish_date' | 'post_type';
type SortDirection = 'asc' | 'desc';

export default function PostList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pillars, setPillars] = useState<PillarPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [postTypeFilter, setPostTypeFilter] = useState<string>('all');
  const [pillarFilter, setPillarFilter] = useState<string>('all');
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>('updated_at');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [isBulkActionLoading, setIsBulkActionLoading] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    type: true,
    category: true,
    pillar: true,
    status: true,
    updated: true,
    published: true,
  });
  const { isAdmin } = useAuth();

  const toggleColumn = (column: keyof ColumnVisibility) => {
    setColumnVisibility(prev => ({ ...prev, [column]: !prev[column] }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [postsRes, categoriesRes] = await Promise.all([
        supabase
          .from('blog_posts')
          .select(`
            id,
            title,
            slug,
            excerpt,
            status,
            post_type,
            publish_date,
            created_at,
            updated_at,
            pillar_id,
            category_id,
            blog_categories (id, name)
          `)
          .order('updated_at', { ascending: false }),
        supabase
          .from('blog_categories')
          .select('id, name')
          .order('name'),
      ]);

      if (postsRes.error) throw postsRes.error;
      if (categoriesRes.error) throw categoriesRes.error;

      const allPosts = postsRes.data || [];
      setPosts(allPosts);
      setCategories(categoriesRes.data || []);

      // Extract pillars from posts
      const pillarPosts = allPosts
        .filter(p => p.post_type === 'pillar')
        .map(p => ({ id: p.id, title: p.title }));
      setPillars(pillarPosts);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load posts');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      toast.success('Post deleted');
      setPosts(posts.filter((p) => p.id !== postId));
      setSelectedPosts(prev => {
        const next = new Set(prev);
        next.delete(postId);
        return next;
      });
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Failed to delete post');
    }
  };

  const handleBulkDelete = async () => {
    if (selectedPosts.size === 0) return;
    setIsBulkActionLoading(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .in('id', Array.from(selectedPosts));

      if (error) throw error;
      toast.success(`${selectedPosts.size} posts deleted`);
      setPosts(posts.filter((p) => !selectedPosts.has(p.id)));
      setSelectedPosts(new Set());
    } catch (error) {
      console.error('Error deleting posts:', error);
      toast.error('Failed to delete posts');
    } finally {
      setIsBulkActionLoading(false);
    }
  };

  const handleBulkStatusChange = async (newStatus: 'published' | 'draft') => {
    if (selectedPosts.size === 0) return;
    setIsBulkActionLoading(true);
    try {
      const updateData: { status: 'published' | 'draft' | 'scheduled'; publish_date?: string | null } = { status: newStatus };
      if (newStatus === 'published') {
        updateData.publish_date = new Date().toISOString();
      }

      const { error } = await supabase
        .from('blog_posts')
        .update(updateData)
        .in('id', Array.from(selectedPosts));

      if (error) throw error;
      toast.success(`${selectedPosts.size} posts ${newStatus === 'published' ? 'published' : 'unpublished'}`);
      setPosts(posts.map(p =>
        selectedPosts.has(p.id)
          ? { ...p, status: newStatus, publish_date: newStatus === 'published' ? new Date().toISOString() : p.publish_date }
          : p
      ));
      setSelectedPosts(new Set());
    } catch (error) {
      console.error('Error updating posts:', error);
      toast.error('Failed to update posts');
    } finally {
      setIsBulkActionLoading(false);
    }
  };

  const handleQuickStatusToggle = async (post: BlogPost) => {
    const newStatus: 'published' | 'draft' = post.status === 'published' ? 'draft' : 'published';
    try {
      const updateData: { status: 'published' | 'draft' | 'scheduled'; publish_date?: string | null } = { status: newStatus };
      if (newStatus === 'published') {
        updateData.publish_date = new Date().toISOString();
      }

      const { error } = await supabase
        .from('blog_posts')
        .update(updateData)
        .eq('id', post.id);

      if (error) throw error;
      toast.success(`Post ${newStatus === 'published' ? 'published' : 'unpublished'}`);
      setPosts(posts.map(p =>
        p.id === post.id
          ? { ...p, status: newStatus, publish_date: newStatus === 'published' ? new Date().toISOString() : p.publish_date }
          : p
      ));
    } catch (error) {
      console.error('Error toggling status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Published</Badge>;
      case 'scheduled':
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Scheduled</Badge>;
      default:
        return <Badge variant="secondary">Draft</Badge>;
    }
  };

  const getPostTypeBadge = (postType: string | null) => {
    switch (postType) {
      case 'pillar':
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Pillar</Badge>;
      case 'cluster':
        return <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/10">Cluster</Badge>;
      default:
        return <Badge variant="outline" className="text-muted-foreground">Standard</Badge>;
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getPillarTitle = (pillarId: string | null) => {
    if (!pillarId) return null;
    const pillar = pillars.find(p => p.id === pillarId);
    return pillar?.title || null;
  };

  // Enhanced filtering with search in title, slug, and excerpt
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.slug.toLowerCase().includes(searchLower) ||
        (post.excerpt?.toLowerCase().includes(searchLower) ?? false);
      const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
      const matchesCategory =
        categoryFilter === 'all' ||
        (categoryFilter === 'uncategorized' ? !post.category_id : post.category_id === categoryFilter);
      const matchesPostType =
        postTypeFilter === 'all' ||
        (postTypeFilter === 'standard' ? (!post.post_type || post.post_type === 'standard') : post.post_type === postTypeFilter);
      const matchesPillar =
        pillarFilter === 'all' ||
        (pillarFilter === 'orphan' ? (post.post_type === 'cluster' && !post.pillar_id) : post.pillar_id === pillarFilter);

      return matchesSearch && matchesStatus && matchesCategory && matchesPostType && matchesPillar;
    });
  }, [posts, searchQuery, statusFilter, categoryFilter, postTypeFilter, pillarFilter]);

  // Sorting
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'category':
          comparison = (a.blog_categories?.name || '').localeCompare(b.blog_categories?.name || '');
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'updated_at':
          comparison = new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
          break;
        case 'publish_date':
          const aDate = a.publish_date ? new Date(a.publish_date).getTime() : 0;
          const bDate = b.publish_date ? new Date(b.publish_date).getTime() : 0;
          comparison = aDate - bDate;
          break;
        case 'post_type':
          comparison = (a.post_type || 'standard').localeCompare(b.post_type || 'standard');
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredPosts, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown size={14} className="ml-1 text-muted-foreground" />;
    return sortDirection === 'asc'
      ? <ArrowUp size={14} className="ml-1" />
      : <ArrowDown size={14} className="ml-1" />;
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedPosts(new Set(sortedPosts.map(p => p.id)));
    } else {
      setSelectedPosts(new Set());
    }
  };

  const handleSelectPost = (postId: string, checked: boolean) => {
    setSelectedPosts(prev => {
      const next = new Set(prev);
      if (checked) {
        next.add(postId);
      } else {
        next.delete(postId);
      }
      return next;
    });
  };

  const handleImportSuccess = () => {
    fetchData();
    setIsImportOpen(false);
  };

  // Stats calculations
  const stats = useMemo(() => {
    const total = posts.length;
    const published = posts.filter(p => p.status === 'published').length;
    const draft = posts.filter(p => p.status === 'draft').length;
    const scheduled = posts.filter(p => p.status === 'scheduled').length;
    const pillarCount = posts.filter(p => p.post_type === 'pillar').length;
    const clusterCount = posts.filter(p => p.post_type === 'cluster').length;
    const standardCount = posts.filter(p => !p.post_type || p.post_type === 'standard').length;
    return { total, published, draft, scheduled, pillarCount, clusterCount, standardCount };
  }, [posts]);

  const allSelected = sortedPosts.length > 0 && selectedPosts.size === sortedPosts.length;
  const someSelected = selectedPosts.size > 0 && selectedPosts.size < sortedPosts.length;

  return (
    <>
      <SEO
        title="Manage Posts"
        description="Manage blog posts"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Posts</h1>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsImportOpen(!isImportOpen)}>
              <FileUp size={16} className="mr-2" />
              Import CSV
            </Button>
            <Button asChild>
              <Link to="/admin/posts/new">
                <Plus size={16} className="mr-2" />
                New Post
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-xs text-muted-foreground">Total Posts</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.published}</div>
            <div className="text-xs text-muted-foreground">Published</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-slate-500">{stats.draft}</div>
            <div className="text-xs text-muted-foreground">Draft</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.scheduled}</div>
            <div className="text-xs text-muted-foreground">Scheduled</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-primary">{stats.pillarCount}</div>
            <div className="text-xs text-muted-foreground">Pillars</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-secondary">{stats.clusterCount}</div>
            <div className="text-xs text-muted-foreground">Clusters</div>
          </div>
          <div className="bg-card border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-muted-foreground">{stats.standardCount}</div>
            <div className="text-xs text-muted-foreground">Standard</div>
          </div>
        </div>

        {/* CSV Import Section */}
        <Collapsible open={isImportOpen} onOpenChange={setIsImportOpen}>
          <CollapsibleContent>
            <PostCsvUploader onSuccess={handleImportSuccess} />
          </CollapsibleContent>
        </Collapsible>

        {/* Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search title, slug, or excerpt..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="uncategorized">Uncategorized</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={postTypeFilter} onValueChange={setPostTypeFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Post Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pillar">Pillar</SelectItem>
                <SelectItem value="cluster">Cluster</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
              </SelectContent>
            </Select>
            {(postTypeFilter === 'cluster' || postTypeFilter === 'all') && (
              <Select value={pillarFilter} onValueChange={setPillarFilter}>
                <SelectTrigger className="w-full sm:w-52">
                  <SelectValue placeholder="Pillar Parent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pillars</SelectItem>
                  <SelectItem value="orphan">Orphan Clusters (No Pillar)</SelectItem>
                  {pillars.map(pillar => (
                    <SelectItem key={pillar.id} value={pillar.id}>
                      {pillar.title.length > 30 ? pillar.title.substring(0, 30) + '...' : pillar.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {/* Column Visibility Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="default" className="ml-auto">
                  <Columns size={16} className="mr-2" />
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.type}
                  onCheckedChange={() => toggleColumn('type')}
                >
                  Type
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.category}
                  onCheckedChange={() => toggleColumn('category')}
                >
                  Category
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.pillar}
                  onCheckedChange={() => toggleColumn('pillar')}
                >
                  Pillar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.status}
                  onCheckedChange={() => toggleColumn('status')}
                >
                  Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.updated}
                  onCheckedChange={() => toggleColumn('updated')}
                >
                  Updated
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={columnVisibility.published}
                  onCheckedChange={() => toggleColumn('published')}
                >
                  Published
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Bulk Actions Bar */}
        {selectedPosts.size > 0 && (
          <div className="flex items-center gap-4 p-3 bg-muted/50 border rounded-lg">
            <span className="text-sm font-medium">{selectedPosts.size} selected</span>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkStatusChange('published')}
                disabled={isBulkActionLoading}
              >
                <Eye size={14} className="mr-1" />
                Publish
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleBulkStatusChange('draft')}
                disabled={isBulkActionLoading}
              >
                <EyeOff size={14} className="mr-1" />
                Unpublish
              </Button>
              {isAdmin && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-destructive hover:text-destructive"
                      disabled={isBulkActionLoading}
                    >
                      <Trash2 size={14} className="mr-1" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete {selectedPosts.size} Posts</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete {selectedPosts.size} posts? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleBulkDelete}
                        className="bg-destructive hover:bg-destructive/90"
                      >
                        Delete {selectedPosts.size} Posts
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSelectedPosts(new Set())}
              className="ml-auto"
            >
              Clear selection
            </Button>
          </div>
        )}

        {/* Posts Table */}
        <div className="border rounded-lg bg-card overflow-x-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : sortedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                {searchQuery || statusFilter !== 'all' || categoryFilter !== 'all' || postTypeFilter !== 'all'
                  ? 'No posts match your filters'
                  : 'No posts yet'}
              </p>
              {!searchQuery && statusFilter === 'all' && categoryFilter === 'all' && postTypeFilter === 'all' && (
                <Button asChild>
                  <Link to="/admin/posts/new">Create your first post</Link>
                </Button>
              )}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all posts"
                      className={someSelected ? 'data-[state=checked]:bg-primary/50' : ''}
                    />
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => handleSort('title')}
                  >
                    <div className="flex items-center">
                      Title
                      <SortIcon field="title" />
                    </div>
                  </TableHead>
                  {columnVisibility.type && (
                    <TableHead
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort('post_type')}
                    >
                      <div className="flex items-center">
                        Type
                        <SortIcon field="post_type" />
                      </div>
                    </TableHead>
                  )}
                  {columnVisibility.category && (
                    <TableHead
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort('category')}
                    >
                      <div className="flex items-center">
                        Category
                        <SortIcon field="category" />
                      </div>
                    </TableHead>
                  )}
                  {columnVisibility.pillar && (
                    <TableHead>Pillar</TableHead>
                  )}
                  {columnVisibility.status && (
                    <TableHead
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort('status')}
                    >
                      <div className="flex items-center">
                        Status
                        <SortIcon field="status" />
                      </div>
                    </TableHead>
                  )}
                  {columnVisibility.updated && (
                    <TableHead
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort('updated_at')}
                    >
                      <div className="flex items-center">
                        Updated
                        <SortIcon field="updated_at" />
                      </div>
                    </TableHead>
                  )}
                  {columnVisibility.published && (
                    <TableHead
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleSort('publish_date')}
                    >
                      <div className="flex items-center">
                        Published
                        <SortIcon field="publish_date" />
                      </div>
                    </TableHead>
                  )}
                  <TableHead className="w-36">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedPosts.map((post) => (
                  <TableRow key={post.id} className={selectedPosts.has(post.id) ? 'bg-muted/30' : ''}>
                    <TableCell>
                      <Checkbox
                        checked={selectedPosts.has(post.id)}
                        onCheckedChange={(checked) => handleSelectPost(post.id, !!checked)}
                        aria-label={`Select ${post.title}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate" title={post.title}>
                      {post.title}
                    </TableCell>
                    {columnVisibility.type && (
                      <TableCell>{getPostTypeBadge(post.post_type)}</TableCell>
                    )}
                    {columnVisibility.category && (
                      <TableCell>
                        {post.blog_categories?.name || (
                          <span className="text-muted-foreground">Uncategorized</span>
                        )}
                      </TableCell>
                    )}
                    {columnVisibility.pillar && (
                      <TableCell className="max-w-[150px] truncate text-muted-foreground text-sm">
                        {post.post_type === 'cluster' ? (
                          getPillarTitle(post.pillar_id) || <span className="text-amber-600">No pillar</span>
                        ) : (
                          '—'
                        )}
                      </TableCell>
                    )}
                    {columnVisibility.status && (
                      <TableCell>{getStatusBadge(post.status)}</TableCell>
                    )}
                    {columnVisibility.updated && (
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(post.updated_at)}
                      </TableCell>
                    )}
                    {columnVisibility.published && (
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(post.publish_date)}
                      </TableCell>
                    )}
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {/* Preview button - opens dedicated preview page with link validation */}
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-8 w-8"
                          title="Preview post with link validation"
                        >
                          <a href={`/blog/preview/${post.slug}/`} target="_blank" rel="noopener noreferrer">
                            <FileSearch size={14} />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQuickStatusToggle(post)}
                          title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                          className="h-8 w-8"
                        >
                          {post.status === 'published' ? <EyeOff size={14} /> : <Eye size={14} />}
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8" title="Edit post">
                          <Link to={`/admin/posts/${post.id}/edit`}>
                            <Pencil size={14} />
                          </Link>
                        </Button>
                        {post.status === 'published' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-8 w-8"
                            title="View live post"
                          >
                            <a href={`/blog/${post.slug}/`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} />
                            </a>
                          </Button>
                        )}
                        {isAdmin && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" title="Delete post">
                                <Trash2 size={14} />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Post</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete "{post.title}"? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(post.id)}
                                  className="bg-destructive hover:bg-destructive/90"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        {/* Results count */}
        {!isLoading && sortedPosts.length > 0 && (
          <p className="text-sm text-muted-foreground text-center">
            Showing {sortedPosts.length} of {posts.length} posts
          </p>
        )}
      </div>
    </>
  );
}
