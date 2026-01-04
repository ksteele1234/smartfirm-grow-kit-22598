import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, ChevronRight } from "lucide-react";

interface ClusterNavigatorProps {
  currentPostId: string;
  pillarId: string;
}

interface SiblingPost {
  id: string;
  title: string;
  slug: string;
}

interface PillarPost {
  id: string;
  title: string;
  slug: string;
}

const ClusterNavigator = ({ currentPostId, pillarId }: ClusterNavigatorProps) => {
  // Fetch pillar info
  const { data: pillar } = useQuery({
    queryKey: ["pillar-info", pillarId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug")
        .eq("id", pillarId)
        .maybeSingle();
      
      if (error) throw error;
      return data as PillarPost | null;
    },
    enabled: !!pillarId,
  });

  // Fetch sibling cluster posts
  const { data: siblingPosts = [] } = useQuery({
    queryKey: ["sibling-clusters", pillarId, currentPostId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug")
        .eq("pillar_id", pillarId)
        .eq("status", "published")
        .neq("id", currentPostId)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data as SiblingPost[];
    },
    enabled: !!pillarId,
  });

  if (!pillar || siblingPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t">
      <div className="bg-muted/50 rounded-xl p-6">
        {/* Pillar Link */}
        <div className="mb-4">
          <Link 
            to={`/blog/${pillar.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <BookOpen className="w-4 h-4" />
            Read the complete guide: {pillar.title}
          </Link>
        </div>

        {/* Sibling Posts */}
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            More in this series
          </h4>
          <ul className="space-y-2">
            {siblingPosts.map((post) => (
              <li key={post.id}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClusterNavigator;
