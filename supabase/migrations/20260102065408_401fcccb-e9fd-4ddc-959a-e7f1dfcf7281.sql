-- Add SEO and description fields to blog_tags
ALTER TABLE public.blog_tags 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS meta_title TEXT,
ADD COLUMN IF NOT EXISTS meta_description TEXT;

-- Create related tags junction table for tag relationships
CREATE TABLE IF NOT EXISTS public.blog_related_tags (
  tag_id UUID NOT NULL REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  related_tag_id UUID NOT NULL REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (tag_id, related_tag_id),
  CONSTRAINT no_self_reference CHECK (tag_id != related_tag_id)
);

-- Enable RLS on related tags
ALTER TABLE public.blog_related_tags ENABLE ROW LEVEL SECURITY;

-- Anyone can view related tags
CREATE POLICY "Anyone can view related tags"
ON public.blog_related_tags
FOR SELECT
USING (true);

-- Admins can manage related tags
CREATE POLICY "Admins can manage related tags"
ON public.blog_related_tags
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));