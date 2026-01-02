import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("🕐 Starting scheduled posts publisher...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Use service role key to bypass RLS
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date().toISOString();
    console.log(`📅 Current time: ${now}`);

    // Find all scheduled posts where publish_date has passed
    const { data: scheduledPosts, error: fetchError } = await supabase
      .from("blog_posts")
      .select("id, title, slug, publish_date")
      .eq("status", "scheduled")
      .lte("publish_date", now);

    if (fetchError) {
      console.error("❌ Error fetching scheduled posts:", fetchError);
      throw fetchError;
    }

    if (!scheduledPosts || scheduledPosts.length === 0) {
      console.log("✅ No posts to publish at this time");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No posts to publish", 
          publishedCount: 0 
        }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200 
        }
      );
    }

    console.log(`📝 Found ${scheduledPosts.length} post(s) to publish`);

    // Update each scheduled post to published
    const postIds = scheduledPosts.map((post) => post.id);
    
    const { error: updateError } = await supabase
      .from("blog_posts")
      .update({ status: "published" })
      .in("id", postIds);

    if (updateError) {
      console.error("❌ Error updating posts:", updateError);
      throw updateError;
    }

    // Log published posts
    for (const post of scheduledPosts) {
      console.log(`✅ Published: "${post.title}" (slug: ${post.slug})`);
    }

    console.log(`🎉 Successfully published ${scheduledPosts.length} post(s)`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Published ${scheduledPosts.length} post(s)`,
        publishedCount: scheduledPosts.length,
        publishedPosts: scheduledPosts.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
        })),
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ Error in publish-scheduled-posts:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
