-- Add pillar/cluster support to blog_posts table
ALTER TABLE blog_posts 
ADD COLUMN post_type TEXT DEFAULT 'standard' CHECK (post_type IN ('standard', 'pillar', 'cluster')),
ADD COLUMN pillar_id UUID REFERENCES blog_posts(id) ON DELETE SET NULL,
ADD COLUMN display_order INTEGER DEFAULT 0;

-- Create indexes for efficient pillar lookups
CREATE INDEX idx_blog_posts_pillar_id ON blog_posts(pillar_id);
CREATE INDEX idx_blog_posts_post_type ON blog_posts(post_type);

-- Add constraint to ensure pillar_id is only set for cluster posts
ALTER TABLE blog_posts ADD CONSTRAINT cluster_must_have_pillar 
CHECK (
  (post_type != 'cluster') OR (post_type = 'cluster' AND pillar_id IS NOT NULL)
);

-- Add constraint to ensure pillars don't reference other pillars
ALTER TABLE blog_posts ADD CONSTRAINT pillar_cannot_have_parent
CHECK (
  (post_type != 'pillar') OR (post_type = 'pillar' AND pillar_id IS NULL)
);