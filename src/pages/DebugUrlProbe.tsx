import { useMemo, useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type ProbeResult = Record<string, unknown>;

export default function DebugUrlProbe() {
  const [target, setTarget] = useState(
    "https://smartfirm.io/blog/accounting-firm-automation",
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProbeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canRun = useMemo(() => {
    try {
      const u = new URL(target);
      return u.hostname === "smartfirm.io";
    } catch {
      return false;
    }
  }, [target]);

  const run = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("url-probe", {
        body: { url: target },
      });

      if (error) throw new Error(error.message);
      setResult(data as ProbeResult);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="URL Probe (Debug)"
        description="Internal diagnostic tool to check URL availability."
        noindex
        robots="noindex, nofollow"
      />
      <Header />

      <main id="main-content" className="section-padding">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            URL Probe (Debug)
          </h1>
          <p className="mt-3 text-foreground leading-relaxed">
            This checks the server response and redirect chain using a Googlebot-smartphone
            user agent.
          </p>

          <Card className="mt-8 p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Target URL (smartfirm.io only)
                </label>
                <Input
                  className="mt-2"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="https://smartfirm.io/blog/..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="sm:w-auto"
                  onClick={run}
                  disabled={!canRun || loading}
                >
                  {loading ? "Running…" : "Run probe"}
                </Button>
                {!canRun && (
                  <p className="text-sm text-muted-foreground">
                    Enter a valid smartfirm.io URL.
                  </p>
                )}
              </div>

              {error && (
                <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground">
                  <strong className="text-destructive">Error:</strong> {error}
                </div>
              )}

              {result && (
                <div>
                  <p className="text-sm font-medium text-foreground">Result</p>
                  <pre className="mt-2 max-h-[520px] overflow-auto rounded-lg bg-muted p-4 text-xs text-foreground">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
