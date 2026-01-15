import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeft, Loader2, Save, Eye, CalendarIcon, Clock, X, FileSearch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { cn } from '@/lib/utils';
import { format, setHours, setMinutes } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RichTextEditor } from '@/components/ui/rich-text-editor';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens only'),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  featured_image: z.string().url().optional().or(z.literal('')),
  category_id: z.string().optional(),
  author_id: z.string().optional(),
  tag_ids: z.array(z.string()).optional(),
  status: z.enum(['draft', 'published', 'scheduled']),
  publish_date: z.date().optional().nullable(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  post_type: z.enum(['standard', 'pillar', 'cluster']).default('standard'),
  pillar_id: z.string().optional(),
  display_order: z.number().default(0),
});

type PostFormData = z.infer<typeof postSchema>;

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface PillarPost {
  id: string;
  title: string;
}

interface Profile {
  id: string;
  display_name: string | null;
}

export default function PostEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = Boolean(id);

  const [isLoading, setIsLoading] = useState(isEditing);
  const [isSaving, setIsSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [authors, setAuthors] = useState<Profile[]>([]);
  const [pillarPosts, setPillarPosts] = useState<PillarPost[]>([]);

  const form = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      category_id: '',
      author_id: '',
      tag_ids: [],
      status: 'draft',
      publish_date: null,
      meta_title: '',
      meta_description: '',
      post_type: 'standard',
      pillar_id: '',
      display_order: 0,
    },
  });

  useEffect(() => {
    fetchCategories();
    fetchTags();
    fetchAuthors();
    fetchPillarPosts();
    if (isEditing && id) {
      fetchPost(id);
    }
  }, [id, isEditing]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('id, name')
      .order('name');

    if (error) {
      console.error('Error fetching categories:', error);
    } else {
      setCategories(data || []);
    }
  };

  const fetchTags = async () => {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('id, name, slug')
      .order('name');

    if (error) {
      console.error('Error fetching tags:', error);
    } else {
      setTags(data || []);
    }
  };

  const fetchAuthors = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, display_name')
      .order('display_name');

    if (error) {
      console.error('Error fetching authors:', error);
    } else {
      setAuthors(data || []);
    }
  };

  const fetchPillarPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title')
      .eq('post_type', 'pillar')
      .order('title');

    if (error) {
      console.error('Error fetching pillar posts:', error);
    } else {
      setPillarPosts(data || []);
    }
  };

  const fetchPost = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      // Fetch post tags
      const { data: postTags } = await supabase
        .from('blog_post_tags')
        .select('tag_id')
        .eq('post_id', postId);

      if (data) {
        form.reset({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || '',
          content: data.content || '',
          featured_image: data.featured_image || '',
          category_id: data.category_id || '',
          author_id: data.author_id || '',
          tag_ids: postTags?.map((pt) => pt.tag_id) || [],
          status: data.status as 'draft' | 'published' | 'scheduled',
          publish_date: data.publish_date ? new Date(data.publish_date) : null,
          meta_title: data.meta_title || '',
          meta_description: data.meta_description || '',
          post_type: (data.post_type as 'standard' | 'pillar' | 'cluster') || 'standard',
          pillar_id: data.pillar_id || '',
          display_order: data.display_order || 0,
        });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load post');
      navigate('/admin/posts');
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const toggleTag = (tagId: string) => {
    const currentTags = form.getValues('tag_ids') || [];
    if (currentTags.includes(tagId)) {
      form.setValue('tag_ids', currentTags.filter((id) => id !== tagId));
    } else {
      form.setValue('tag_ids', [...currentTags, tagId]);
    }
  };

  const onSubmit = async (data: PostFormData) => {
    if (!user) return;
    setIsSaving(true);

    try {
      const postData = {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || null,
        content: data.content || null,
        featured_image: data.featured_image || null,
        category_id: data.category_id || null,
        status: data.status,
        publish_date: data.status === 'published'
          ? new Date().toISOString()
          : data.publish_date?.toISOString() || null,
        meta_title: data.meta_title || null,
        meta_description: data.meta_description || null,
        author_id: data.author_id || user.id,
        post_type: data.post_type,
        pillar_id: data.post_type === 'cluster' ? data.pillar_id || null : null,
        display_order: data.post_type === 'cluster' ? data.display_order : 0,
      };

      let postId = id;

      if (isEditing && id) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;

        // Update post tags
        await supabase.from('blog_post_tags').delete().eq('post_id', id);
        if (data.tag_ids && data.tag_ids.length > 0) {
          const tagInserts = data.tag_ids.map((tagId) => ({
            post_id: id,
            tag_id: tagId,
          }));
          await supabase.from('blog_post_tags').insert(tagInserts);
        }

        toast.success('Post updated');
      } else {
        const { data: newPost, error } = await supabase
          .from('blog_posts')
          .insert([postData])
          .select()
          .single();

        if (error) throw error;
        postId = newPost?.id;

        // Add post tags
        if (data.tag_ids && data.tag_ids.length > 0 && postId) {
          const tagInserts = data.tag_ids.map((tagId) => ({
            post_id: postId,
            tag_id: tagId,
          }));
          await supabase.from('blog_post_tags').insert(tagInserts);
        }

        toast.success('Post created');
        navigate('/admin/posts');
      }
    } catch (error: any) {
      console.error('Error saving post:', error);
      if (error.code === '23505') {
        toast.error('A post with this slug already exists');
      } else {
        toast.error('Failed to save post');
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <SEO
        title={isEditing ? 'Edit Post' : 'New Post'}
        description="Edit blog post"
        robots="noindex,nofollow"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate('/admin/posts')}
              >
                <ArrowLeft size={16} className="mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-primary">
                {isEditing ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {/* Preview button - always available when editing */}
              {isEditing && form.watch('slug') && (
                <Button type="button" variant="outline" asChild>
                  <a href={`/blog/preview/${form.watch('slug')}/`} target="_blank" rel="noopener noreferrer">
                    <FileSearch size={16} className="mr-2" />
                    Preview
                  </a>
                </Button>
              )}
              {/* View live button - only for published posts */}
              {isEditing && form.watch('status') === 'published' && (
                <Button type="button" variant="outline" asChild>
                  <a href={`/blog/${form.watch('slug')}/`} target="_blank" rel="noopener noreferrer">
                    <Eye size={16} className="mr-2" />
                    View Live
                  </a>
                </Button>
              )}
              <Button type="submit" disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} className="mr-2" />
                    {isEditing ? 'Update' : 'Create'}
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Post title"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              if (!isEditing && !form.getValues('slug')) {
                                form.setValue('slug', generateSlug(e.target.value));
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="post-url-slug" {...field} />
                        </FormControl>
                        <FormDescription>
                          URL: /blog/{field.value || 'your-slug'}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Brief summary of the post..."
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Shown in blog listings and social shares
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            content={field.value || ''}
                            onChange={field.onChange}
                            placeholder="Write your post content here..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="meta_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Custom title for search engines" {...field} />
                        </FormControl>
                        <FormDescription>
                          Leave blank to use post title
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="meta_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Description for search engines..."
                            rows={2}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Recommended: 150-160 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publish</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch('status') === 'scheduled' && (
                    <>
                      <FormField
                        control={form.control}
                        name="publish_date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Publish Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      'w-full pl-3 text-left font-normal',
                                      !field.value && 'text-muted-foreground'
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, 'PPP')
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value || undefined}
                                  onSelect={(date) => {
                                    if (date && field.value) {
                                      // Preserve the time from the existing value
                                      date.setHours(field.value.getHours());
                                      date.setMinutes(field.value.getMinutes());
                                    } else if (date) {
                                      // Default to 9:00 AM
                                      date.setHours(9);
                                      date.setMinutes(0);
                                    }
                                    field.onChange(date);
                                  }}
                                  disabled={(date) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return date < today;
                                  }}
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="publish_date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Publish Time</FormLabel>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <Select
                                value={field.value ? format(field.value, 'HH:mm') : '09:00'}
                                onValueChange={(time) => {
                                  const [hours, minutes] = time.split(':').map(Number);
                                  const newDate = field.value ? new Date(field.value) : new Date();
                                  newDate.setHours(hours);
                                  newDate.setMinutes(minutes);
                                  field.onChange(newDate);
                                }}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {Array.from({ length: 24 }, (_, hour) =>
                                    ['00', '30'].map((minute) => {
                                      const time = `${hour.toString().padStart(2, '0')}:${minute}`;
                                      const displayTime = format(
                                        setMinutes(setHours(new Date(), hour), parseInt(minute)),
                                        'h:mm a'
                                      );
                                      return (
                                        <SelectItem key={time} value={time}>
                                          {displayTime}
                                        </SelectItem>
                                      );
                                    })
                                  ).flat()}
                                </SelectContent>
                              </Select>
                            </div>
                            <FormDescription>
                              {field.value && (
                                <span className="text-xs">
                                  Scheduled for: {format(field.value, 'PPP')} at {format(field.value, 'h:mm a')}
                                </span>
                              )}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="author_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Author</FormLabel>
                            <Select
                              onValueChange={(value) => field.onChange(value === 'none' ? '' : value)}
                              value={field.value || 'none'}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select author" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">No author</SelectItem>
                                {authors.map((author) => (
                                  <SelectItem key={author.id} value={author.id}>
                                    {author.display_name || 'Unnamed'}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Content Structure Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Content Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="post_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Post Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select post type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="standard">Standard Post</SelectItem>
                            <SelectItem value="pillar">Pillar Page (Hub)</SelectItem>
                            <SelectItem value="cluster">Cluster Post (Supporting)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          {field.value === 'pillar' && 'Hub page that links to related cluster posts'}
                          {field.value === 'cluster' && 'Supporting article linked to a pillar page'}
                          {field.value === 'standard' && 'Standalone blog post'}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch('post_type') === 'cluster' && (
                    <>
                      <FormField
                        control={form.control}
                        name="pillar_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent Pillar</FormLabel>
                            <Select
                              onValueChange={(value) => field.onChange(value === 'none' ? '' : value)}
                              value={field.value || 'none'}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select pillar page" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">Select a pillar...</SelectItem>
                                {pillarPosts
                                  .filter(p => p.id !== id) // Don't allow self-reference
                                  .map((pillar) => (
                                    <SelectItem key={pillar.id} value={pillar.id}>
                                      {pillar.title}
                                    </SelectItem>
                                  ))
                                }
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The pillar page this cluster post belongs to
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="display_order"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Display Order</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="0"
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                              />
                            </FormControl>
                            <FormDescription>
                              Order in which this post appears in the pillar's table of contents
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={(value) => field.onChange(value === 'none' ? '' : value)}
                          value={field.value || 'none'}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">Uncategorized</SelectItem>
                            {categories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel className="block mb-2">Tags</FormLabel>
                    {tags.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No tags available. Create tags in the Tag Manager first.
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto p-2 border rounded-md bg-background">
                        {tags.map((tag) => {
                          const isSelected = (form.watch('tag_ids') || []).includes(tag.id);
                          return (
                            <Badge
                              key={tag.id}
                              variant={isSelected ? 'default' : 'outline'}
                              className="cursor-pointer hover:bg-primary/10"
                              onClick={() => toggleTag(tag.id)}
                            >
                              {tag.name}
                              {isSelected && <X size={12} className="ml-1" />}
                            </Badge>
                          );
                        })}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to select/deselect tags
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="featured_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
