-- Create FAQs table
CREATE TABLE IF NOT EXISTS public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_faqs_slug ON public.faqs(slug);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_faqs_category ON public.faqs(category);

-- Create index on display_order for sorting
CREATE INDEX IF NOT EXISTS idx_faqs_display_order ON public.faqs(display_order);

-- Create index on is_published for filtering published FAQs
CREATE INDEX IF NOT EXISTS idx_faqs_is_published ON public.faqs(is_published);

-- Enable Row Level Security
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published FAQs
CREATE POLICY "Allow public read access to published FAQs"
  ON public.faqs
  FOR SELECT
  USING (is_published = true);

-- Create policy to allow authenticated users to manage FAQs
CREATE POLICY "Allow authenticated users to manage FAQs"
  ON public.faqs
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_faqs_updated_at
  BEFORE UPDATE ON public.faqs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add comment to table
COMMENT ON TABLE public.faqs IS 'Frequently Asked Questions for the SmartFirm website';
