import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Play, AlertCircle, CheckCircle, Info, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdvancedSEOQA from "./AdvancedSEOQA";

interface PageAudit {
  url: string;
  title: string;
  titleLength: number;
  metaDescription: string;
  metaDescriptionLength: number;
  hasH1: boolean;
  h1Count: number;
  hasH2: boolean;
  hasCanonical: boolean;
  indexable: boolean;
  robotsDirective: string;
  hasOGImage: boolean;
  hasJSONLD: boolean;
  jsonLDTypes: string[];
  imagesMissingAlt: number;
  internalLinksCount: number;
  externalLinksCount: number;
  htmlSizeKB: number;
  issues: string[];
}

const SEOAudit = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic");
  const [isAuditing, setIsAuditing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<PageAudit[]>([]);
  const [currentPage, setCurrentPage] = useState("");

  // All routes to audit (from App.tsx)
  const routes = [
    "/",
    "/services",
    "/services/all",
    "/solutions",
    "/industries",
    "/resources",
    "/about",
    "/contact",
    "/case-studies",
    "/get-started",
    "/solutions/i-need-more-leads",
    "/solutions/lead-generation",
    "/solutions/i-want-to-scale-my-firm",
    "/solutions/scale-firm",
    "/solutions/i'm-losing-clients-to-competitors",
    "/solutions/client-retention",
    "/solutions/i-need-better-client-retention",
    "/solutions/retention-strategies",
    "/solutions/stop-losing-clients-to-tech-savvy-cpas",
    "/solutions/compete-with-tech-savvy-cpas",
    "/solutions/get-more-referrals-without-asking",
    "/solutions/increase-referrals",
    "/solutions/work-less-earn-more",
    "/solutions/grow-without-growing-pains",
    "/solutions/sustainable-growth",
    "/solutions/protect-practice-and-future",
    "/solutions/protect-your-practice",
    "/services/marketing-automation",
    "/services/technology-solutions",
    "/services/business-optimization",
    "/services/executive-services",
    "/services/automated-lead-follow-up",
    "/services/client-review-generation",
    "/services/seo-for-accountants",
    "/services/social-media-management",
    "/services/email-marketing",
    "/services/website-design",
    "/industries/tax-preparation",
    "/industries/bookkeeping-services",
    "/industries/business-advisory",
    "/industries/audit-&-assurance",
    "/tools",
    "/tools/efficiency-quiz",
    "/tools/marketing-scorecard",
    "/tools/roi-calculator",
    "/tools/automation-readiness-quiz",
    "/tools/workflow-bottleneck-finder",
    "/tools/tech-stack-roi-calculator",
    "/tools/client-lifetime-value-calculator",
    "/tools/lead-generation-scorecard",
    "/tools/modern-firm-quiz",
    "/tools/growth-potential-scorecard",
    "/privacy",
    "/terms",
    "/cookies",
    "/faq",
  ];

  const auditPageViaIframe = async (url: string): Promise<PageAudit> => {
    return new Promise((resolve) => {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.left = '-9999px';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      
      let timeoutId: NodeJS.Timeout;
      let resolved = false;
      
      const cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      };
      
      const resolveAudit = (result: PageAudit) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        resolve(result);
      };
      
      // Timeout fallback
      timeoutId = setTimeout(() => {
        resolveAudit({
          url,
          title: 'TIMEOUT',
          titleLength: 0,
          metaDescription: 'TIMEOUT',
          metaDescriptionLength: 0,
          hasH1: false,
          h1Count: 0,
          hasH2: false,
          hasCanonical: false,
          indexable: false,
          robotsDirective: 'TIMEOUT',
          hasOGImage: false,
          hasJSONLD: false,
          jsonLDTypes: [],
          imagesMissingAlt: 0,
          internalLinksCount: 0,
          externalLinksCount: 0,
          htmlSizeKB: 0,
          issues: ['Page load timeout']
        });
      }, 5000);
      
      iframe.onload = () => {
        // Wait for React hydration
        setTimeout(() => {
          try {
            const doc = iframe.contentDocument;
            if (!doc) {
              resolveAudit({
                url,
                title: 'ERROR',
                titleLength: 0,
                metaDescription: 'ERROR',
                metaDescriptionLength: 0,
                hasH1: false,
                h1Count: 0,
                hasH2: false,
                hasCanonical: false,
                indexable: false,
                robotsDirective: 'ERROR',
                hasOGImage: false,
                hasJSONLD: false,
                jsonLDTypes: [],
                imagesMissingAlt: 0,
                internalLinksCount: 0,
                externalLinksCount: 0,
                htmlSizeKB: 0,
                issues: ['Cannot access iframe document']
              });
              return;
            }
            
            // Extract data from live DOM
            const title = doc.querySelector('title')?.textContent || '';
            const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
            const robotsTag = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
            const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
            const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
            
            // H1 and H2
            const h1Elements = doc.querySelectorAll('h1');
            const h2Elements = doc.querySelectorAll('h2');
            
            // JSON-LD
            const jsonLDScripts = doc.querySelectorAll('script[type="application/ld+json"]');
            const jsonLDTypes: string[] = [];
            jsonLDScripts.forEach(script => {
              try {
                const data = JSON.parse(script.textContent || '{}');
                if (data['@type']) {
                  jsonLDTypes.push(data['@type']);
                }
              } catch (e) {
                // Invalid JSON-LD
              }
            });
            
            // Images without alt
            const images = doc.querySelectorAll('img');
            let imagesMissingAlt = 0;
            images.forEach(img => {
              const alt = img.getAttribute('alt');
              const role = img.getAttribute('role');
              if (!alt && role !== 'presentation') {
                imagesMissingAlt++;
              }
            });
            
            // Links
            const allLinks = doc.querySelectorAll('a[href]');
            let internalLinks = 0;
            let externalLinks = 0;
            
            allLinks.forEach(link => {
              const href = link.getAttribute('href') || '';
              if (href.startsWith('/') || href.startsWith(window.location.origin)) {
                internalLinks++;
              } else if (href.startsWith('http')) {
                externalLinks++;
              }
            });
            
            // HTML size
            const htmlSize = doc.documentElement.outerHTML.length;
            const htmlSizeKB = htmlSize / 1024;
            
            // Determine indexability
            const isNoindex = robotsTag.toLowerCase().includes('noindex');
            const indexable = !isNoindex;
            
            // Check for issues
            const issues: string[] = [];
            if (h1Elements.length > 1) issues.push('Multiple H1 tags');
            if (h1Elements.length === 0) issues.push('Missing H1');
            if (!canonical) issues.push('Missing canonical');
            if (!metaDescription) issues.push('Missing meta description');
            if (title.length > 60) issues.push('Title >60 chars');
            if (metaDescription.length > 160) issues.push('Description >160 chars');
            if (!ogImage) issues.push('Missing OG image');
            if (jsonLDTypes.length === 0) issues.push('Missing JSON-LD');
            
            resolveAudit({
              url,
              title,
              titleLength: title.length,
              metaDescription,
              metaDescriptionLength: metaDescription.length,
              hasH1: h1Elements.length > 0,
              h1Count: h1Elements.length,
              hasH2: h2Elements.length > 0,
              hasCanonical: !!canonical,
              indexable,
              robotsDirective: robotsTag || 'none',
              hasOGImage: !!ogImage,
              hasJSONLD: jsonLDTypes.length > 0,
              jsonLDTypes,
              imagesMissingAlt,
              internalLinksCount: internalLinks,
              externalLinksCount: externalLinks,
              htmlSizeKB: Math.round(htmlSizeKB * 10) / 10,
              issues
            });
          } catch (error) {
            console.error(`Error auditing ${url}:`, error);
            resolveAudit({
              url,
              title: 'ERROR',
              titleLength: 0,
              metaDescription: 'ERROR',
              metaDescriptionLength: 0,
              hasH1: false,
              h1Count: 0,
              hasH2: false,
              hasCanonical: false,
              indexable: false,
              robotsDirective: 'ERROR',
              hasOGImage: false,
              hasJSONLD: false,
              jsonLDTypes: [],
              imagesMissingAlt: 0,
              internalLinksCount: 0,
              externalLinksCount: 0,
              htmlSizeKB: 0,
              issues: ['Failed to audit page']
            });
          }
        }, 1500); // Wait for React hydration
      };
      
      iframe.onerror = () => {
        resolveAudit({
          url,
          title: 'ERROR',
          titleLength: 0,
          metaDescription: 'ERROR',
          metaDescriptionLength: 0,
          hasH1: false,
          h1Count: 0,
          hasH2: false,
          hasCanonical: false,
          indexable: false,
          robotsDirective: 'ERROR',
          hasOGImage: false,
          hasJSONLD: false,
          jsonLDTypes: [],
          imagesMissingAlt: 0,
          internalLinksCount: 0,
          externalLinksCount: 0,
          htmlSizeKB: 0,
          issues: ['Failed to load page']
        });
      };
      
      document.body.appendChild(iframe);
      iframe.src = `${window.location.origin}${url}`;
    });
  };

  const runAudit = async () => {
    setIsAuditing(true);
    setProgress(0);
    setResults([]);
    
    const auditResults: PageAudit[] = [];
    
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      setCurrentPage(route);
      setProgress(((i + 1) / routes.length) * 100);
      
      const result = await auditPageViaIframe(route);
      auditResults.push(result);
      
      // Small delay to prevent overwhelming the browser
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setResults(auditResults);
    setIsAuditing(false);
    setCurrentPage("");
  };

  const exportToCSV = () => {
    const headers = [
      'URL',
      'Title Length',
      'Meta Description Length',
      'H1 (Y/N)',
      'H2 (Y/N)',
      'Canonical (Y/N)',
      'Indexable (Y/N)',
      'OG Image (Y/N)',
      'JSON-LD Valid (Y/N)',
      'Images Missing Alt',
      'Internal Links Count',
      'External Links Count',
      'HTML Size KB',
      'Issues'
    ];
    
    const rows = results.map(result => [
      result.url,
      result.titleLength,
      result.metaDescriptionLength,
      result.hasH1 ? 'Y' : 'N',
      result.hasH2 ? 'Y' : 'N',
      result.hasCanonical ? 'Y' : 'N',
      result.indexable ? 'Y' : 'N',
      result.hasOGImage ? 'Y' : 'N',
      result.hasJSONLD ? 'Y' : 'N',
      result.imagesMissingAlt,
      result.internalLinksCount,
      result.externalLinksCount,
      result.htmlSizeKB,
      result.issues.join('; ')
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `seo-audit-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const pagesWithIssues = results.filter(r => r.issues.length > 0).length;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="SEO Audit Tool"
        description="Internal SEO audit tool for SmartFirm website analysis"
        robots="noindex,nofollow"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              SEO Audit Tools
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose between basic SEO audit or advanced QA analysis
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "basic" | "advanced")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="basic">Basic SEO Audit</TabsTrigger>
              <TabsTrigger value="advanced">Advanced SEO QA</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-8">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  This tool audits {routes.length} pages using live DOM scanning (SPA-aware). It waits for React hydration to capture the actual rendered content that search engines see.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle>Run Basic SEO Audit</CardTitle>
                  <CardDescription>
                    Analyze all pages and export results to CSV
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!isAuditing && results.length === 0 && (
                    <div className="space-y-4">
                      <Button onClick={runAudit} size="lg" className="w-full">
                        <Play className="mr-2 h-5 w-5" />
                        Start SEO Audit
                      </Button>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Need more comprehensive analysis?
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setActiveTab("advanced")}
                          className="w-full"
                        >
                          Try Advanced SEO QA
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {isAuditing && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            Auditing: {currentPage}
                          </span>
                          <span className="font-semibold">
                            {Math.round(progress)}%
                          </span>
                        </div>
                        <Progress value={progress} />
                      </div>
                    </div>
                  )}

                  {!isAuditing && results.length > 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Pages Audited</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold text-primary">
                              {results.length}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Total Issues</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold text-destructive">
                              {totalIssues}
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm">Pages with Issues</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold text-orange-500">
                              {pagesWithIssues}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="flex gap-4">
                        <Button onClick={exportToCSV} size="lg" className="flex-1">
                          <Download className="mr-2 h-5 w-5" />
                          Export to CSV
                        </Button>
                        <Button onClick={runAudit} variant="outline" size="lg">
                          Re-run Audit
                        </Button>
                      </div>

                      {/* Preview Results */}
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-muted p-4">
                          <h3 className="font-semibold">Audit Results Preview</h3>
                          <p className="text-sm text-muted-foreground">
                            Showing pages with issues (full export available via CSV)
                          </p>
                        </div>
                        <div className="divide-y max-h-96 overflow-y-auto">
                          {results.filter(r => r.issues.length > 0).map((result, index) => (
                            <div key={index} className="p-4 hover:bg-muted/50">
                              <div className="flex items-start justify-between mb-2">
                                <div className="font-mono text-sm text-primary">
                                  {result.url}
                                </div>
                                <Badge variant={result.issues.length > 3 ? "destructive" : "secondary"}>
                                  {result.issues.length} issues
                                </Badge>
                              </div>
                              <div className="space-y-1">
                                {result.issues.map((issue, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <AlertCircle className="h-3 w-3" />
                                    {issue}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audit Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Checks Performed:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Title tag length (&lt;60 chars)</li>
                        <li>• Meta description length (&lt;160 chars)</li>
                        <li>• H1 presence (single)</li>
                        <li>• H2 presence</li>
                        <li>• Canonical tag</li>
                        <li>• Indexability status</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Additional Metrics:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• OG image presence</li>
                        <li>• JSON-LD structured data</li>
                        <li>• Images missing alt text</li>
                        <li>• Internal/external link counts</li>
                        <li>• HTML page size</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced">
              <AdvancedSEOQA onBack={() => setActiveTab("basic")} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEOAudit;
