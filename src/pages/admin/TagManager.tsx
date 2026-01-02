import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Pencil, Trash2, Loader2, Upload, X } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';

const tagSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase with hyphens only'),
  description: z.string().optional(),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  related_tag_ids: z.array(z.string()).optional(),
});

type TagFormData = z.infer<typeof tagSchema>;

interface Tag {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
}

interface RelatedTag {
  tag_id: string;
  related_tag_id: string;
}

export default function TagManager() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [relatedTags, setRelatedTags] = useState<RelatedTag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBulkDialogOpen, setIsBulkDialogOpen] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [bulkInput, setBulkInput] = useState('');
  const [isBulkSaving, setIsBulkSaving] = useState(false);

  const form = useForm<TagFormData>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      meta_title: '',
      meta_description: '',
      related_tag_ids: [],
    },
  });

  useEffect(() => {
    fetchTags();
    fetchRelatedTags();
  }, []);

  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) throw error;
      setTags(data || []);
    } catch (error) {
      console.error('Error fetching tags:', error);
      toast.error('Failed to load tags');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedTags = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_related_tags')
        .select('*');

      if (error) throw error;
      setRelatedTags(data || []);
    } catch (error) {
      console.error('Error fetching related tags:', error);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const getRelatedTagIds = (tagId: string) => {
    return relatedTags
      .filter((rt) => rt.tag_id === tagId)
      .map((rt) => rt.related_tag_id);
  };

  const openDialog = (tag?: Tag) => {
    if (tag) {
      setEditingTag(tag);
      form.reset({
        name: tag.name,
        slug: tag.slug,
        description: tag.description || '',
        meta_title: tag.meta_title || '',
        meta_description: tag.meta_description || '',
        related_tag_ids: getRelatedTagIds(tag.id),
      });
    } else {
      setEditingTag(null);
      form.reset({
        name: '',
        slug: '',
        description: '',
        meta_title: '',
        meta_description: '',
        related_tag_ids: [],
      });
    }
    setIsDialogOpen(true);
  };

  const onSubmit = async (data: TagFormData) => {
    setIsSaving(true);
    try {
      if (editingTag) {
        const { error } = await supabase
          .from('blog_tags')
          .update({
            name: data.name,
            slug: data.slug,
            description: data.description || null,
            meta_title: data.meta_title || null,
            meta_description: data.meta_description || null,
          })
          .eq('id', editingTag.id);

        if (error) throw error;

        // Update related tags
        await supabase
          .from('blog_related_tags')
          .delete()
          .eq('tag_id', editingTag.id);

        if (data.related_tag_ids && data.related_tag_ids.length > 0) {
          const relatedTagInserts = data.related_tag_ids.map((relatedId) => ({
            tag_id: editingTag.id,
            related_tag_id: relatedId,
          }));
          await supabase.from('blog_related_tags').insert(relatedTagInserts);
        }

        toast.success('Tag updated');
      } else {
        const { data: newTag, error } = await supabase
          .from('blog_tags')
          .insert([{
            name: data.name,
            slug: data.slug,
            description: data.description || null,
            meta_title: data.meta_title || null,
            meta_description: data.meta_description || null,
          }])
          .select()
          .single();

        if (error) throw error;

        // Add related tags
        if (data.related_tag_ids && data.related_tag_ids.length > 0 && newTag) {
          const relatedTagInserts = data.related_tag_ids.map((relatedId) => ({
            tag_id: newTag.id,
            related_tag_id: relatedId,
          }));
          await supabase.from('blog_related_tags').insert(relatedTagInserts);
        }

        toast.success('Tag created');
      }
      setIsDialogOpen(false);
      fetchTags();
      fetchRelatedTags();
    } catch (error: any) {
      console.error('Error saving tag:', error);
      if (error.code === '23505') {
        toast.error('A tag with this slug already exists');
      } else {
        toast.error('Failed to save tag');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleBulkUpload = async () => {
    if (!bulkInput.trim()) {
      toast.error('Please enter tags to upload');
      return;
    }

    setIsBulkSaving(true);
    try {
      // Parse CSV or line-separated input
      // Format: name,slug,description,meta_title,meta_description
      // or just: name (will auto-generate slug)
      const lines = bulkInput.split('\n').filter((line) => line.trim());
      const tagsToInsert: Array<{
        name: string;
        slug: string;
        description: string | null;
        meta_title: string | null;
        meta_description: string | null;
      }> = [];

      for (const line of lines) {
        const parts = line.split(',').map((p) => p.trim());
        const name = parts[0];
        if (!name) continue;

        const slug = parts[1] || generateSlug(name);
        const description = parts[2] || null;
        const meta_title = parts[3] || null;
        const meta_description = parts[4] || null;

        tagsToInsert.push({
          name,
          slug,
          description,
          meta_title,
          meta_description,
        });
      }

      if (tagsToInsert.length === 0) {
        toast.error('No valid tags found');
        return;
      }

      // Insert in batches to handle potential duplicates
      let successCount = 0;
      let errorCount = 0;

      for (const tag of tagsToInsert) {
        const { error } = await supabase.from('blog_tags').insert([tag]);
        if (error) {
          console.error(`Error inserting tag "${tag.name}":`, error);
          errorCount++;
        } else {
          successCount++;
        }
      }

      if (successCount > 0) {
        toast.success(`Created ${successCount} tag(s)`);
      }
      if (errorCount > 0) {
        toast.warning(`${errorCount} tag(s) failed (may already exist)`);
      }

      setBulkInput('');
      setIsBulkDialogOpen(false);
      fetchTags();
    } catch (error) {
      console.error('Error bulk uploading tags:', error);
      toast.error('Failed to upload tags');
    } finally {
      setIsBulkSaving(false);
    }
  };

  const handleDelete = async (tagId: string) => {
    try {
      const { error } = await supabase
        .from('blog_tags')
        .delete()
        .eq('id', tagId);

      if (error) throw error;
      toast.success('Tag deleted');
      setTags(tags.filter((t) => t.id !== tagId));
    } catch (error) {
      console.error('Error deleting tag:', error);
      toast.error('Failed to delete tag');
    }
  };

  const toggleRelatedTag = (tagId: string) => {
    const currentRelated = form.getValues('related_tag_ids') || [];
    if (currentRelated.includes(tagId)) {
      form.setValue('related_tag_ids', currentRelated.filter((id) => id !== tagId));
    } else {
      form.setValue('related_tag_ids', [...currentRelated, tagId]);
    }
  };

  return (
    <>
      <SEO
        title="Manage Tags"
        description="Manage blog tags"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary">Tags</h1>
            <p className="text-muted-foreground">Label your blog posts with SEO-optimized tags</p>
          </div>
          <div className="flex gap-2">
            <Dialog open={isBulkDialogOpen} onOpenChange={setIsBulkDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Upload size={16} className="mr-2" />
                  Bulk Upload
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Bulk Upload Tags</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Enter one tag per line. Use CSV format for full control:</p>
                    <code className="block bg-muted p-2 rounded text-xs">
                      name,slug,description,meta_title,meta_description
                    </code>
                    <p>Or just enter tag names (slugs will be auto-generated):</p>
                    <code className="block bg-muted p-2 rounded text-xs">
                      Marketing Automation<br />
                      Tax Planning<br />
                      Client Retention
                    </code>
                  </div>
                  <Textarea
                    placeholder="Enter tags here..."
                    rows={10}
                    value={bulkInput}
                    onChange={(e) => setBulkInput(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsBulkDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleBulkUpload} disabled={isBulkSaving}>
                      {isBulkSaving ? (
                        <>
                          <Loader2 size={16} className="mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload size={16} className="mr-2" />
                          Upload Tags
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => openDialog()}>
                  <Plus size={16} className="mr-2" />
                  New Tag
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingTag ? 'Edit Tag' : 'New Tag'}
                  </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <Tabs defaultValue="basic" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="seo">SEO</TabsTrigger>
                        <TabsTrigger value="related">Related Tags</TabsTrigger>
                      </TabsList>

                      <TabsContent value="basic" className="space-y-4 mt-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Tag name"
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                    if (!editingTag) {
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
                              <FormLabel>Slug *</FormLabel>
                              <FormControl>
                                <Input placeholder="tag-slug" {...field} />
                              </FormControl>
                              <FormDescription>
                                URL: /blog/tags/{field.value || 'your-slug'}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Brief description explaining what content readers will find with this tag..."
                                  rows={3}
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Displayed on the tag page to help visitors understand the topic
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TabsContent>

                      <TabsContent value="seo" className="space-y-4 mt-4">
                        <FormField
                          control={form.control}
                          name="meta_title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Meta Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Custom title for search engines"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Leave blank to auto-generate. Recommended: under 60 characters.
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
                                Recommended: 150-160 characters for optimal display in search results.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TabsContent>

                      <TabsContent value="related" className="space-y-4 mt-4">
                        <div>
                          <FormLabel className="block mb-2">Related Tags</FormLabel>
                          <FormDescription className="mb-3">
                            Select tags that are related to this one. They will be shown on the tag page.
                          </FormDescription>
                          {tags.filter((t) => t.id !== editingTag?.id).length === 0 ? (
                            <p className="text-sm text-muted-foreground">
                              No other tags available. Create more tags first.
                            </p>
                          ) : (
                            <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto p-2 border rounded-md">
                              {tags
                                .filter((t) => t.id !== editingTag?.id)
                                .map((tag) => {
                                  const isSelected = (form.watch('related_tag_ids') || []).includes(tag.id);
                                  return (
                                    <Badge
                                      key={tag.id}
                                      variant={isSelected ? 'default' : 'outline'}
                                      className="cursor-pointer hover:bg-primary/10"
                                      onClick={() => toggleRelatedTag(tag.id)}
                                    >
                                      {tag.name}
                                      {isSelected && <X size={12} className="ml-1" />}
                                    </Badge>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={isSaving}>
                        {isSaving ? (
                          <>
                            <Loader2 size={16} className="mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Tags Display */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">All Tags ({tags.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : tags.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No tags yet</p>
                <Button onClick={() => openDialog()}>
                  Create your first tag
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="group flex items-start justify-between gap-4 bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-primary">{tag.name}</span>
                        <span className="text-xs text-muted-foreground">/{tag.slug}</span>
                      </div>
                      {tag.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {tag.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tag.meta_title && (
                          <Badge variant="outline" className="text-xs">
                            SEO Title ✓
                          </Badge>
                        )}
                        {tag.meta_description && (
                          <Badge variant="outline" className="text-xs">
                            SEO Description ✓
                          </Badge>
                        )}
                        {getRelatedTagIds(tag.id).length > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {getRelatedTagIds(tag.id).length} Related
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDialog(tag)}
                      >
                        <Pencil size={14} />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Trash2 size={14} className="text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Tag</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{tag.name}"? This will remove the tag from all posts.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(tag.id)}
                              className="bg-destructive hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
