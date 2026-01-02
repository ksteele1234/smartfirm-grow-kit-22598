import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { FileUp, Upload, Loader2, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Profile {
  id: string;
  display_name: string | null;
  email: string | null;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface PostCsvUploaderProps {
  onSuccess: () => void;
}

export default function PostCsvUploader({ onSuccess }: PostCsvUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [pasteInput, setPasteInput] = useState('');
  const csvInputRef = useRef<HTMLInputElement>(null);

  // Parse a CSV line handling quoted fields
  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const processCSVData = async (text: string) => {
    const lines = text.split('\n').filter((line) => line.trim());

    if (lines.length === 0) {
      toast.error('No data found');
      return;
    }

    // Check if first line is a header
    const firstLine = lines[0].toLowerCase();
    const hasHeader = firstLine.includes('title') || firstLine.includes('slug');
    const dataLines = hasHeader ? lines.slice(1) : lines;

    if (dataLines.length === 0) {
      toast.error('No post data found (only header row detected)');
      return;
    }

    setIsUploading(true);

    try {
      // Fetch categories, authors, and tags for matching
      const [categoriesRes, profilesRes, tagsRes] = await Promise.all([
        supabase.from('blog_categories').select('id, name, slug'),
        supabase.from('profiles').select('id, display_name, email'),
        supabase.from('blog_tags').select('id, name, slug'),
      ]);

      const categories: Category[] = categoriesRes.data || [];
      const profiles: Profile[] = profilesRes.data || [];
      const tags: Tag[] = tagsRes.data || [];

      // Helper functions to find matches
      const findCategoryId = (categoryName: string): string | null => {
        if (!categoryName) return null;
        const match = categories.find(
          (c) =>
            c.name.toLowerCase() === categoryName.toLowerCase() ||
            c.slug.toLowerCase() === categoryName.toLowerCase()
        );
        return match?.id || null;
      };

      const findAuthorId = (authorName: string): string | null => {
        if (!authorName) return null;
        const match = profiles.find(
          (p) =>
            p.display_name?.toLowerCase() === authorName.toLowerCase() ||
            p.email?.toLowerCase() === authorName.toLowerCase()
        );
        return match?.id || null;
      };

      const findTagIds = (tagNames: string): string[] => {
        if (!tagNames) return [];
        const tagList = tagNames.split(';').map((t) => t.trim().toLowerCase());
        return tags
          .filter(
            (t) =>
              tagList.includes(t.name.toLowerCase()) ||
              tagList.includes(t.slug.toLowerCase())
          )
          .map((t) => t.id);
      };

      let successCount = 0;
      let errorCount = 0;
      const errors: string[] = [];

      // Expected columns: Title, Slug, Category, Excerpt, Meta Title, Meta Description, Author, Tags, H1, Content
      for (const line of dataLines) {
        const parts = parseCSVLine(line);
        const title = parts[0]?.trim();

        if (!title) {
          errors.push('Skipped row with empty title');
          errorCount++;
          continue;
        }

        const slug = parts[1]?.trim() || generateSlug(title);
        const categoryName = parts[2]?.trim() || '';
        const excerpt = parts[3]?.trim() || null;
        const metaTitle = parts[4]?.trim() || null;
        const metaDescription = parts[5]?.trim() || null;
        const authorName = parts[6]?.trim() || '';
        const tagNames = parts[7]?.trim() || '';
        const h1 = parts[8]?.trim() || '';
        const contentRaw = parts[9]?.trim() || '';

        // Build the content - if H1 is provided, prepend it
        let content = contentRaw;
        if (h1 && !content.startsWith(`<h1`)) {
          content = `<h1>${h1}</h1>\n${content}`;
        }

        const categoryId = findCategoryId(categoryName);
        const authorId = findAuthorId(authorName);
        const tagIds = findTagIds(tagNames);

        try {
          // Insert the post
          const { data: newPost, error } = await supabase
            .from('blog_posts')
            .insert([
              {
                title,
                slug,
                category_id: categoryId,
                excerpt,
                meta_title: metaTitle,
                meta_description: metaDescription,
                author_id: authorId,
                content: content || null,
                status: 'draft',
              },
            ])
            .select('id')
            .single();

          if (error) {
            if (error.code === '23505') {
              errors.push(`"${title}" - slug already exists`);
            } else {
              errors.push(`"${title}" - ${error.message}`);
            }
            errorCount++;
            continue;
          }

          // Add tags if any
          if (tagIds.length > 0 && newPost) {
            const tagInserts = tagIds.map((tagId) => ({
              post_id: newPost.id,
              tag_id: tagId,
            }));
            await supabase.from('blog_post_tags').insert(tagInserts);
          }

          successCount++;
        } catch (err: any) {
          errors.push(`"${title}" - ${err.message}`);
          errorCount++;
        }
      }

      if (successCount > 0) {
        toast.success(`Created ${successCount} post(s) as drafts`);
        onSuccess();
      }
      if (errorCount > 0) {
        toast.warning(`${errorCount} post(s) failed`);
        console.error('Import errors:', errors);
      }
    } catch (error) {
      console.error('Error processing CSV:', error);
      toast.error('Failed to process CSV data');
    } finally {
      setIsUploading(false);
      setPasteInput('');
    }
  };

  const handleCsvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv') && file.type !== 'text/csv') {
      toast.error('Please upload a CSV file');
      return;
    }

    try {
      const text = await file.text();
      await processCSVData(text);
    } catch (error) {
      console.error('Error reading CSV:', error);
      toast.error('Failed to read CSV file');
    } finally {
      if (csvInputRef.current) {
        csvInputRef.current.value = '';
      }
    }
  };

  const handlePasteUpload = async () => {
    if (!pasteInput.trim()) {
      toast.error('Please paste CSV data');
      return;
    }
    await processCSVData(pasteInput);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const syntheticEvent = {
        target: { files: [file] },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      handleCsvUpload(syntheticEvent);
    }
  };

  const downloadTemplate = () => {
    const headers = 'Title,Slug,Category,Excerpt,Meta Title,Meta Description,Author,Tags,H1,Content';
    const example = '"My First Post","my-first-post","Marketing","A brief excerpt...","SEO Title","SEO Description","John Doe","tag1;tag2","Welcome to My Post","<p>Full HTML content here...</p>"';
    const csvContent = `${headers}\n${example}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blog-posts-template.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Import Posts from CSV</CardTitle>
        <CardDescription>
          Upload a CSV with columns: Title, Slug, Category, Excerpt, Meta Title, Meta Description, Author, Tags (semicolon-separated), H1, Content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button variant="outline" size="sm" onClick={downloadTemplate}>
            <Download size={16} className="mr-2" />
            Download Template
          </Button>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload CSV</TabsTrigger>
            <TabsTrigger value="paste">Paste Text</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging
                  ? 'border-primary bg-primary/5'
                  : 'border-muted-foreground/25 hover:border-primary/50'
              }`}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                ref={csvInputRef}
                type="file"
                accept=".csv,text/csv"
                onChange={handleCsvUpload}
                className="hidden"
                id="csv-upload"
              />
              <FileUp className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your CSV file here, or
              </p>
              <Button
                variant="outline"
                onClick={() => csvInputRef.current?.click()}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Importing...
                  </>
                ) : (
                  <>
                    <Upload size={16} className="mr-2" />
                    Choose File
                  </>
                )}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="paste" className="mt-4 space-y-4">
            <Textarea
              placeholder="Paste CSV data here...&#10;Title,Slug,Category,Excerpt,Meta Title,Meta Description,Author,Tags,H1,Content"
              value={pasteInput}
              onChange={(e) => setPasteInput(e.target.value)}
              rows={8}
              className="font-mono text-sm"
            />
            <Button onClick={handlePasteUpload} disabled={isUploading || !pasteInput.trim()}>
              {isUploading ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload size={16} className="mr-2" />
                  Import Posts
                </>
              )}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
