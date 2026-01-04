import { useEditor, EditorContent, Editor } from '@tiptap/react';
import { Node, mergeAttributes } from '@tiptap/core';
import { DOMParser as ProseMirrorDOMParser } from '@tiptap/pm/model';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Heading from '@tiptap/extension-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Code,
  Minus,
  Upload,
  Loader2,
  Hash,
  FileText,
  Wand2,
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Custom Heading extension that preserves ID attributes for anchors
const CustomHeading = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        parseHTML: element => element.getAttribute('id'),
        renderHTML: attributes => {
          if (!attributes.id) {
            return {};
          }
          return { id: attributes.id };
        },
      },
    };
  },
});

const TldrCallout = Node.create({
  name: 'tldrCallout',
  group: 'block',
  content: 'block+',
  defining: true,
  isolating: true,
  parseHTML() {
    return [{ tag: 'aside.tldr-callout' }, { tag: 'div.tldr-callout' }];
  },
  renderHTML({ HTMLAttributes }) {
    // `not-prose` prevents Tailwind Typography from flattening/overriding callout styles.
    return [
      'aside',
      mergeAttributes(HTMLAttributes, { class: 'tldr-callout not-prose' }),
      0,
    ];
  },
});

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [anchorId, setAnchorId] = useState('');
  const [linkOpen, setLinkOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [anchorOpen, setAnchorOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  const addLink = () => {
    if (linkUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkUrl })
        .run();
      setLinkUrl('');
      setLinkOpen(false);
    }
  };

  const addAnchorId = () => {
    if (anchorId) {
      // Normalize anchor ID: lowercase, replace spaces with hyphens
      const normalizedId = anchorId.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      // Insert an anchor span at the cursor position
      editor.chain().focus().insertContent(`<span id="${normalizedId}" class="anchor-target"></span>`).run();
      toast.success(`Anchor #${normalizedId} added. Link to it with #${normalizedId}`);
      setAnchorId('');
      setAnchorOpen(false);
    }
  };

  const insertTldr = () => {
    let debug = { empty: true, selectedLen: 0, inserted: false, hasNode: false };

    editor
      .chain()
      // NOTE: no `.focus()` here; focusing can collapse the current selection.
      .command(({ tr, state, dispatch }) => {
        const { from, to, empty } = state.selection;
        const selectedText = empty ? '' : state.doc.textBetween(from, to, ' ').trim();
        const bodyText = selectedText || 'Your summary here...';

        const paragraph = state.schema.nodes.paragraph;
        const tldrCallout = state.schema.nodes.tldrCallout;

        debug = {
          empty,
          selectedLen: selectedText.length,
          inserted: false,
          hasNode: Boolean(tldrCallout),
        };

        if (!paragraph || !tldrCallout) {
          return false;
        }

        // Insert as a true block node after the current parent block.
        const $to = state.selection.$to;
        const insertPosBefore = $to.after($to.depth);

        if (!empty) {
          tr.delete(from, to);
        }

        const insertPos = tr.mapping.map(insertPosBefore);

        const bold = state.schema.marks.bold;
        const textNodes = [
          state.schema.text('TL;DR: ', bold ? [bold.create()] : undefined),
          state.schema.text(bodyText),
        ];

        const calloutNode = tldrCallout.create(null, paragraph.create(null, textNodes));
        tr.insert(insertPos, calloutNode);

        debug.inserted = true;

        if (dispatch) dispatch(tr.scrollIntoView());
        return true;
      })
      .run();

    console.debug('[TLDR]', debug);

    if (debug.inserted) {
      toast.success('TL;DR block inserted');
    } else {
      toast.error('TL;DR insert failed (see console debug log)');
    }
  };

  const addImageFromUrl = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl('');
      setImageOpen(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a JPG, PNG, GIF, or WebP image.');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('File too large. Maximum size is 5MB.');
      return;
    }

    setIsUploading(true);
    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `blog-content/${fileName}`;

      // Upload to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      if (urlData?.publicUrl) {
        editor.chain().focus().setImage({ src: urlData.publicUrl }).run();
        toast.success('Image uploaded successfully');
        setImageOpen(false);
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      if (error.message?.includes('row-level security')) {
        toast.error('Permission denied. Make sure you are logged in as an admin or editor.');
      } else {
        toast.error('Failed to upload image. Please try again.');
      }
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-1 border-b border-border p-2 bg-muted/30 rounded-t-md">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('bold') && 'bg-muted')}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('italic') && 'bg-muted')}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('code') && 'bg-muted')}
        title="Inline Code"
      >
        <Code className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn('h-8 w-8 p-0', editor.isActive('heading', { level: 1 }) && 'bg-muted')}
        title="Heading 1"
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn('h-8 w-8 p-0', editor.isActive('heading', { level: 2 }) && 'bg-muted')}
        title="Heading 2"
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn('h-8 w-8 p-0', editor.isActive('heading', { level: 3 }) && 'bg-muted')}
        title="Heading 3"
      >
        <Heading3 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={cn('h-8 w-8 p-0', editor.isActive('heading', { level: 4 }) && 'bg-muted')}
        title="Heading 4"
      >
        <Heading4 className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('bulletList') && 'bg-muted')}
        title="Bullet List"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('orderedList') && 'bg-muted')}
        title="Numbered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn('h-8 w-8 p-0', editor.isActive('blockquote') && 'bg-muted')}
        title="Quote"
      >
        <Quote className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="h-8 w-8 p-0"
        title="Horizontal Rule"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <Popover open={linkOpen} onOpenChange={setLinkOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className={cn('h-8 w-8 p-0', editor.isActive('link') && 'bg-muted')}
            title="Add Link"
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3" align="start">
          <div className="flex gap-2">
            <Input
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addLink()}
            />
            <Button type="button" size="sm" onClick={addLink}>
              Add
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <Popover open={imageOpen} onOpenChange={setImageOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Add Image"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3" align="start">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-3">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="url">URL</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif,image/webp"
                onChange={handleFileSelect}
                className="hidden"
                id="image-upload"
              />
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Image
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                JPG, PNG, GIF, or WebP. Max 5MB.
              </p>
            </TabsContent>
            <TabsContent value="url" className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addImageFromUrl()}
                />
                <Button type="button" size="sm" onClick={addImageFromUrl}>
                  Add
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      {/* Anchor ID Button */}
      <Popover open={anchorOpen} onOpenChange={setAnchorOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Add Anchor ID (for jump links)"
          >
            <Hash className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3" align="start">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">
              Add an anchor ID to create a jump link target. Link to it with #{anchorId || 'your-id'}
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="section-name"
                value={anchorId}
                onChange={(e) => setAnchorId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addAnchorId()}
              />
              <Button type="button" size="sm" onClick={addAnchorId}>
                Add
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* TL;DR Button */}
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onMouseDown={(e) => {
          // Prevent toolbar click from stealing focus and collapsing selection
          e.preventDefault();
          insertTldr();
        }}
        className="h-8 px-2 gap-1"
        title="Insert TL;DR callout"
      >
        <FileText className="h-4 w-4" />
        <span className="text-xs">TL;DR</span>
      </Button>

      {/* Auto-generate Anchor IDs for H2 headings */}
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => {
          // Generate slug from text
          const generateSlug = (text: string): string => {
            return text
              .toLowerCase()
              .replace(/['']/g, '') // Remove apostrophes
              .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
              .replace(/\s+/g, '-') // Replace spaces with hyphens
              .replace(/-+/g, '-') // Collapse multiple hyphens
              .replace(/^-|-$/g, ''); // Trim hyphens from ends
          };

          // Track used IDs to avoid duplicates
          const usedIds = new Set<string>();
          let updatedCount = 0;

          // Traverse the document and update H2 headings without IDs
          editor.state.doc.descendants((node, pos) => {
            if (node.type.name === 'heading' && node.attrs.level === 2) {
              const currentId = node.attrs.id;
              if (!currentId) {
                const text = node.textContent;
                let baseSlug = generateSlug(text);
                let slug = baseSlug;
                let counter = 1;
                
                // Ensure uniqueness
                while (usedIds.has(slug)) {
                  slug = `${baseSlug}-${counter}`;
                  counter++;
                }
                usedIds.add(slug);

                // Update the node with the new ID
                const tr = editor.state.tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  id: slug,
                });
                editor.view.dispatch(tr);
                updatedCount++;
              } else {
                usedIds.add(currentId);
              }
            }
          });

          if (updatedCount > 0) {
            toast.success(`Generated anchor IDs for ${updatedCount} H2 heading${updatedCount > 1 ? 's' : ''}`);
          } else {
            toast.info('All H2 headings already have anchor IDs');
          }
        }}
        className="h-8 px-2 gap-1"
        title="Auto-generate anchor IDs for all H2 headings"
      >
        <Wand2 className="h-4 w-4" />
        <span className="text-xs">Auto IDs</span>
      </Button>

      <div className="w-px h-6 bg-border mx-1 self-center" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="h-8 w-8 p-0"
        title="Undo"
      >
        <Undo className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="h-8 w-8 p-0"
        title="Redo"
      >
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  );
};

export function RichTextEditor({
  content,
  onChange,
  placeholder = 'Start writing...',
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      TldrCallout,
      StarterKit.configure({
        // Disable built-in heading to use our custom one
        heading: false,
      }),
      // Use custom heading that preserves ID attributes
      CustomHeading.configure({
        levels: [1, 2, 3, 4],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-lg my-4',
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base max-w-none p-4 h-full overflow-y-auto focus:outline-none',
        // Make the actual writing surface the scroll container (most reliable for contenteditable)
        style: '-webkit-overflow-scrolling:touch; overscroll-behavior:contain;',
      },
      // Handle paste to convert markdown headings to proper HTML headings
      handlePaste: (view, event) => {
        const htmlData = event.clipboardData?.getData('text/html');
        const text = event.clipboardData?.getData('text/plain');
        
        // If there's already HTML data with headings, let it paste normally
        if (htmlData && (htmlData.includes('<h1') || htmlData.includes('<h2') || htmlData.includes('<h3') || htmlData.includes('<h4'))) {
          return false; // Let default handling proceed
        }
        
        // Convert markdown headings in plain text to HTML
        if (text && text.includes('#')) {
          // Check if it looks like markdown (has # at start of lines)
          const hasMarkdownHeadings = /^#{1,4} /m.test(text);
          
          if (hasMarkdownHeadings) {
            // Convert markdown headings to HTML
            let html = text
              .split('\n\n')
              .map(block => {
                // Process each block
                return block
                  .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
                  .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                  .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                  .replace(/^# (.+)$/gm, '<h1>$1</h1>');
              })
              .map(block => {
                // Wrap non-heading blocks in paragraphs
                if (!block.startsWith('<h')) {
                  return `<p>${block.replace(/\n/g, '<br>')}</p>`;
                }
                return block;
              })
              .join('');
            
            event.preventDefault();
            
            // Use TipTap's insertContent command
            const { state } = view;
            const { from } = state.selection;
            
            // Parse and insert the HTML content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // Insert content using the editor's command
            const editorView = view;
            const tr = state.tr;
            
            // Use ProseMirror's HTML parser
            const pmDomParser = ProseMirrorDOMParser.fromSchema(state.schema);
            const parsed = pmDomParser.parse(tempDiv);
            
            tr.replaceSelection(parsed.slice(0));
            editorView.dispatch(tr);
            
            return true;
          }
        }
        
        return false; // Let default paste handling proceed
      },
    },
  });

  // Sync content when it changes externally (e.g., on form reset)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div
      className={cn(
        'border border-input rounded-md bg-background flex flex-col h-[60vh] min-h-[420px] max-h-[800px] overflow-hidden',
        className
      )}
    >
      <div className="flex-shrink-0 bg-background border-b border-border">
        <MenuBar editor={editor} />
      </div>

      {/* Constrain the editor to the remaining height; ProseMirror handles the internal scrolling */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <EditorContent editor={editor} className="h-full min-h-0" />
      </div>
    </div>
  );
}
