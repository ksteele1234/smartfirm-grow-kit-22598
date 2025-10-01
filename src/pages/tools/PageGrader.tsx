import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Play, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PageScore {
  url: string;
  pageType: string;
  title: string;
  metaDescription: string;
  score: number;
  grade: string;
  technicalScore: number;
  contentScore: number;
  linkingScore: number;
  schemaScore: number;
  aiSignalsScore: number;
  brandUXScore: number;
  wordCount: number;
  loadTimeMs: number;
  isOrphan: boolean;
  hasValidJSONLD: boolean;
  isIndexable: boolean;
  lastUpdated: string;
  suggestions: Suggestion[];
}

interface Suggestion {
  priority: "P0" | "P1" | "P2";
  effort: "S" | "M" | "L";
  impact: "low" | "medium" | "high";
  issueType: string;
  recommendation: string;
  proposedTitle?: string;
  proposedMetaDescription?: string;
  suggestedH1?: string;
  suggestedInternalLinks?: string[];
  suggestedOutboundLinks?: string[];
  suggestedFAQs?: { question: string; answer: string }[];
  codeSnippet?: string;
  notes?: string;
}

interface PageGraderProps {
  onBack: () => void;
}

const PageGrader = ({ onBack }: PageGraderProps) => {
  const [isGrading, setIsGrading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<PageScore[]>([]);
  const [currentPage, setCurrentPage] = useState("");
  const [selectedPage, setSelectedPage] = useState<PageScore | null>(null);
  
  // Controls
  const [includeNoindex, setIncludeNoindex] = useState(false);
  const [minWordCountService, setMinWordCountService] = useState(800);
  const [minWordCountBlog, setMinWordCountBlog] = useState(1800);
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [templateFilter, setTemplateFilter] = useState<string>("all");

  const routes = [
    { path: "/", type: "core" },
    { path: "/services", type: "core" },
    { path: "/services/all", type: "core" },
    { path: "/solutions", type: "core" },
    { path: "/industries", type: "core" },
    { path: "/resources", type: "core" },
    { path: "/about", type: "core" },
    { path: "/contact", type: "core" },
    { path: "/case-studies", type: "core" },
    { path: "/get-started", type: "core" },
    { path: "/faq", type: "core" },
    { path: "/solutions/i-need-more-leads", type: "solution" },
    { path: "/solutions/lead-generation", type: "solution" },
    { path: "/solutions/i-want-to-scale-my-firm", type: "solution" },
    { path: "/solutions/scale-firm", type: "solution" },
    { path: "/solutions/i'm-losing-clients-to-competitors", type: "solution" },
    { path: "/solutions/client-retention", type: "solution" },
    { path: "/solutions/i-need-better-client-retention", type: "solution" },
    { path: "/solutions/retention-strategies", type: "solution" },
    { path: "/solutions/stop-losing-clients-to-tech-savvy-cpas", type: "solution" },
    { path: "/solutions/compete-with-tech-savvy-cpas", type: "solution" },
    { path: "/solutions/get-more-referrals-without-asking", type: "solution" },
    { path: "/solutions/increase-referrals", type: "solution" },
    { path: "/solutions/work-less-earn-more", type: "solution" },
    { path: "/solutions/grow-without-growing-pains", type: "solution" },
    { path: "/solutions/sustainable-growth", type: "solution" },
    { path: "/solutions/protect-practice-and-future", type: "solution" },
    { path: "/solutions/protect-your-practice", type: "solution" },
    { path: "/services/marketing-automation", type: "service" },
    { path: "/services/technology-solutions", type: "service" },
    { path: "/services/business-optimization", type: "service" },
    { path: "/services/executive-services", type: "service" },
    { path: "/services/automated-lead-follow-up", type: "service" },
    { path: "/services/client-review-generation", type: "service" },
    { path: "/services/seo-for-accountants", type: "service" },
    { path: "/services/social-media-management", type: "service" },
    { path: "/services/email-marketing", type: "service" },
    { path: "/services/website-design", type: "service" },
    { path: "/industries/tax-preparation", type: "industry" },
    { path: "/industries/bookkeeping-services", type: "industry" },
    { path: "/industries/business-advisory", type: "industry" },
    { path: "/industries/audit-assurance", type: "industry" },
    { path: "/tools", type: "core" },
    { path: "/tools/efficiency-quiz", type: "tool" },
    { path: "/tools/marketing-scorecard", type: "tool" },
    { path: "/tools/roi-calculator", type: "tool" },
    { path: "/tools/automation-readiness-quiz", type: "tool" },
    { path: "/tools/workflow-bottleneck-finder", type: "tool" },
    { path: "/tools/tech-stack-roi-calculator", type: "tool" },
    { path: "/tools/client-lifetime-value-calculator", type: "tool" },
    { path: "/tools/lead-generation-scorecard", type: "tool" },
    { path: "/tools/modern-firm-quiz", type: "tool" },
    { path: "/tools/growth-potential-scorecard", type: "tool" },
    { path: "/privacy", type: "legal" },
    { path: "/terms", type: "legal" },
    { path: "/cookies", type: "legal" },
  ];

  const gradePageViaIframe = async (url: string, pageType: string): Promise<PageScore> => {
    return new Promise((resolve) => {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.left = '-9999px';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      
      let timeoutId: NodeJS.Timeout;
      let resolved = false;
      const startTime = performance.now();
      
      const cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      };
      
      const resolveGrade = (result: PageScore) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        resolve(result);
      };
      
      timeoutId = setTimeout(() => {
        resolveGrade(createDefaultScore(url, pageType, 0));
      }, 10000);
      
      iframe.onload = () => {
        setTimeout(() => {
          try {
            const endTime = performance.now();
            const loadTimeMs = Math.round(endTime - startTime);
            
            const doc = iframe.contentDocument;
            if (!doc) {
              resolveGrade(createDefaultScore(url, pageType, loadTimeMs));
              return;
            }
            
            const score = calculatePageScore(doc, url, pageType, loadTimeMs);
            resolveGrade(score);
          } catch (error) {
            console.error(`Error grading ${url}:`, error);
            resolveGrade(createDefaultScore(url, pageType, 0));
          }
        }, 3000);
      };
      
      iframe.onerror = () => {
        resolveGrade(createDefaultScore(url, pageType, 0));
      };
      
      document.body.appendChild(iframe);
      iframe.src = `${window.location.origin}${url}`;
    });
  };

  const createDefaultScore = (url: string, pageType: string, loadTimeMs: number): PageScore => {
    return {
      url,
      pageType,
      title: '',
      metaDescription: '',
      score: 0,
      grade: "F",
      technicalScore: 0,
      contentScore: 0,
      linkingScore: 0,
      schemaScore: 0,
      aiSignalsScore: 0,
      brandUXScore: 0,
      wordCount: 0,
      loadTimeMs,
      isOrphan: true,
      hasValidJSONLD: false,
      isIndexable: false,
      lastUpdated: "Unknown",
      suggestions: [{ priority: "P0", effort: "L", impact: "high", issueType: "page_error", recommendation: "Page failed to load or audit" }]
    };
  };

  const calculatePageScore = (doc: Document, url: string, pageType: string, loadTimeMs: number): PageScore => {
    let technicalScore = 0;
    let contentScore = 0;
    let linkingScore = 0;
    let schemaScore = 0;
    let aiSignalsScore = 0;
    let brandUXScore = 0;
    const suggestions: Suggestion[] = [];

    // Extract basic elements
    const title = doc.querySelector('title')?.textContent || '';
    const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    const robotsTag = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
    const h1Elements = doc.querySelectorAll('h1');
    
    // Better body text extraction - target main content areas
    const mainContent = doc.querySelector('main') || doc.body;
    let bodyText = '';
    if (mainContent) {
      const clone = mainContent.cloneNode(true) as HTMLElement;
      // Remove non-content elements
      clone.querySelectorAll('nav, script, style, header, footer, [role="navigation"], button, .btn, [class*="button"]').forEach(el => el.remove());
      bodyText = clone.textContent || '';
    }
    
    // Clean and count words (filter out very short words and whitespace)
    const words = bodyText.trim().split(/\s+/).filter(w => w.length > 2);
    const wordCount = words.length;
    const first100Words = words.slice(0, 100).join(' ');
    
    // Debug logging for low word counts
    if (wordCount < 200) {
      console.log(`⚠️ Low word count on ${url}: ${wordCount} words extracted`);
    }

    // A) Technical & Indexability (25 pts)
    // Canonical present & self-referencing (6)
    if (canonical && canonical.includes(url)) {
      technicalScore += 6;
    } else {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "missing_canonical",
        recommendation: `Add self-referencing canonical tag`,
        codeSnippet: `<link rel="canonical" href="${window.location.origin}${url}" />`
      });
    }

    // Meta title present, <= 60 chars (3)
    if (title && title.length > 0 && title.length <= 60) {
      technicalScore += 3;
    } else if (!title) {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "missing_title",
        recommendation: "Add meta title with primary keyword",
        proposedTitle: `${url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Page'} | SmartFirm.io`
      });
    } else if (title.length > 60) {
      suggestions.push({
        priority: "P1",
        effort: "S",
        impact: "medium",
        issueType: "title_too_long",
        recommendation: `Shorten title to ≤60 characters (current: ${title.length})`,
        proposedTitle: title.substring(0, 57) + "..."
      });
    }

    // Meta description present, <= 160 chars (3)
    if (metaDescription && metaDescription.length > 0 && metaDescription.length <= 160) {
      technicalScore += 3;
    } else if (!metaDescription) {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "missing_meta_description",
        recommendation: "Add meta description with primary keyword in first 50 characters",
        proposedMetaDescription: `Discover ${title} with SmartFirm. Professional solutions for accounting firms.`
      });
    } else if (metaDescription.length > 160) {
      suggestions.push({
        priority: "P1",
        effort: "S",
        impact: "medium",
        issueType: "description_too_long",
        recommendation: `Shorten meta description to ≤160 characters (current: ${metaDescription.length})`,
        proposedMetaDescription: metaDescription.substring(0, 157) + "..."
      });
    }

    // Robots: not noindex for live pages (5)
    const isNoindex = robotsTag.toLowerCase().includes('noindex');
    const isIndexable = !isNoindex;
    if (isIndexable && !url.includes('/404') && !url.includes('/thank-you')) {
      technicalScore += 5;
    } else if (isNoindex && !url.includes('/404') && !url.includes('/thank-you')) {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "noindex_live_page",
        recommendation: "Remove noindex directive from live page",
        codeSnippet: '<meta name="robots" content="index,follow" />'
      });
    }

    // Sitemap inclusion (3)
    const inSitemap = !url.includes('/404') && !url.includes('/500') && !url.includes('/thank-you');
    if (inSitemap) {
      technicalScore += 3;
    } else {
      suggestions.push({
        priority: "P1",
        effort: "M",
        impact: "medium",
        issueType: "missing_from_sitemap",
        recommendation: "Add page to sitemap.xml"
      });
    }

    // Page speed proxy: adjusted for iframe overhead (5)
    // Iframe adds 2-3s overhead, so adjust thresholds accordingly
    if (loadTimeMs <= 5000) {
      technicalScore += 5;
    } else if (loadTimeMs > 8000) {
      suggestions.push({
        priority: "P1",
        effort: "L",
        impact: "medium",
        issueType: "slow_load",
        recommendation: `Optimize page load time (current: ${loadTimeMs}ms, significantly above normal)`,
        notes: "Consider optimizing images, reducing bundle size, and implementing code splitting"
      });
    } else {
      technicalScore += 2;
    }

    // B) Content Depth & Intent Match (20 pts)
    // Clear H1 with primary topic (5)
    if (h1Elements.length === 1) {
      contentScore += 5;
    } else if (h1Elements.length === 0) {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "missing_h1",
        recommendation: "Add single H1 with primary keyword",
        suggestedH1: title || `${url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')}`
      });
    } else {
      suggestions.push({
        priority: "P0",
        effort: "S",
        impact: "high",
        issueType: "multiple_h1",
        recommendation: `Remove extra H1 tags (found: ${h1Elements.length}, should be: 1)`
      });
    }

    // Sufficient depth for intent (7) - adjusted by page type
    let minWordCount = 600; // default
    if (pageType === 'service') minWordCount = minWordCountService;
    else if (pageType === 'blog') minWordCount = minWordCountBlog;
    else if (pageType === 'solution') minWordCount = 700;
    else if (pageType === 'industry') minWordCount = 800;
    else if (pageType === 'tool') minWordCount = 400; // tools can be shorter
    else if (pageType === 'legal') minWordCount = 300; // legal pages can be shorter
    else if (pageType === 'core' && url === '/') minWordCount = 500; // homepage
    
    if (wordCount >= minWordCount) {
      contentScore += 7;
    } else if (wordCount > 100) { // Only flag if significantly thin
      suggestions.push({
        priority: pageType === 'tool' || pageType === 'legal' ? "P2" : "P1",
        effort: "L",
        impact: "high",
        issueType: "thin_content",
        recommendation: `Expand content to meet minimum word count (current: ${wordCount}, target: ${minWordCount})`,
        notes: "Add sections covering: benefits, process, FAQs, case examples"
      });
    }

    // Intro sets context + includes primary phrase in first 100 words (4)
    // Use H1 text as primary keyword if available, fallback to title
    const h1Text = h1Elements.length > 0 ? h1Elements[0].textContent?.trim() : '';
    const primaryPhrase = (h1Text || title.split('|')[0].trim()).toLowerCase();
    
    if (first100Words.toLowerCase().includes(primaryPhrase.slice(0, 30))) {
      contentScore += 4;
    } else if (primaryPhrase.length > 10) { // Only suggest if we have a meaningful keyword
      suggestions.push({
        priority: "P1",
        effort: "S",
        impact: "medium",
        issueType: "missing_keyword_intro",
        recommendation: `Include primary keyword "${primaryPhrase}" in first 100 words`
      });
    }

    // Unique content (4)
    // Simplified check - assume unique for now
    contentScore += 4;

    // C) Internal Linking & Information Architecture (15 pts)
    const allLinks = doc.querySelectorAll('a[href]');
    let internalLinksCount = 0;
    const internalLinkTargets: string[] = [];
    
    allLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('/') || href.startsWith(window.location.origin)) {
        internalLinksCount++;
        if (href.startsWith('/')) {
          internalLinkTargets.push(href);
        }
      }
    });

    // Orphan page check (6) - page has NO outbound internal links
    // Note: True orphan detection requires checking if OTHER pages link TO this page
    // For now, we check if this page links OUT to the site (inverse proxy)
    const hasOutboundInternalLinks = internalLinksCount >= 2;
    if (hasOutboundInternalLinks) {
      linkingScore += 6;
    } else if (internalLinksCount === 0) {
      suggestions.push({
        priority: "P0",
        effort: "M",
        impact: "high",
        issueType: "orphan_page",
        recommendation: "Add internal links to relevant pages (page has no outbound links)",
        suggestedInternalLinks: getSuggestedInternalLinks(url, pageType)
      });
    } else {
      linkingScore += 3; // Partial credit for having at least one link
    }

    // Contextual internal links (2-4 with descriptive anchors) (5)
    if (internalLinksCount >= 2 && internalLinksCount <= 8) {
      linkingScore += 5;
    } else if (internalLinksCount < 2) {
      suggestions.push({
        priority: "P1",
        effort: "M",
        impact: "medium",
        issueType: "insufficient_internal_links",
        recommendation: "Add 2-4 contextual internal links with descriptive anchor text",
        suggestedInternalLinks: getSuggestedInternalLinks(url, pageType)
      });
    }

    // Breadcrumbs present (4)
    const hasBreadcrumbs = doc.querySelector('[itemtype*="BreadcrumbList"]') || 
                          doc.querySelector('nav[aria-label*="readcrumb"]');
    if (hasBreadcrumbs) {
      linkingScore += 4;
    } else {
      suggestions.push({
        priority: "P2",
        effort: "M",
        impact: "low",
        issueType: "missing_breadcrumbs",
        recommendation: "Add breadcrumb navigation with schema markup"
      });
    }

    // D) Schema & Rich Results (10 pts)
    const jsonLDScripts = doc.querySelectorAll('script[type="application/ld+json"]');
    let hasValidJSONLD = false;
    let hasRequiredFields = false;

    jsonLDScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@type']) {
          hasValidJSONLD = true;
          // Check for required fields based on type
          if (data['@type'] === 'Organization' && data.name && data.url) {
            hasRequiredFields = true;
          } else if (data['@type'] === 'Service' && data.name && data.description) {
            hasRequiredFields = true;
          }
        }
      } catch (e) {
        // Invalid JSON-LD
      }
    });

    // Valid JSON-LD present (5)
    if (hasValidJSONLD) {
      schemaScore += 5;
    } else {
      suggestions.push({
        priority: "P1",
        effort: "M",
        impact: "medium",
        issueType: "missing_json_ld",
        recommendation: "Add appropriate JSON-LD schema markup",
        codeSnippet: generateSchemaExample(pageType)
      });
    }

    // Required fields populated (5)
    if (hasRequiredFields) {
      schemaScore += 5;
    } else if (hasValidJSONLD) {
      suggestions.push({
        priority: "P1",
        effort: "S",
        impact: "medium",
        issueType: "incomplete_schema",
        recommendation: "Add required schema fields (name, description, etc.)"
      });
    }

    // E) AI Ranking Signals (20 pts)
    // Entity clarity (6)
    const hasSmartFirmMention = bodyText.includes('SmartFirm');
    const externalLinks = Array.from(allLinks).filter(link => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('http') && !href.includes(window.location.hostname);
    });
    const hasAuthorityLinks = externalLinks.length > 0;

    if (hasSmartFirmMention && hasAuthorityLinks) {
      aiSignalsScore += 6;
    } else {
      suggestions.push({
        priority: "P1",
        effort: "M",
        impact: "medium",
        issueType: "weak_entity_signals",
        recommendation: "Reference SmartFirm and link to authoritative sources (AICPA, QuickBooks, etc.)",
        suggestedOutboundLinks: ["https://www.aicpa.org", "https://quickbooks.intuit.com"]
      });
    }

    // Q&A coverage (4)
    const hasFAQs = bodyText.toLowerCase().includes('faq') || 
                   bodyText.toLowerCase().includes('frequently asked');
    if (hasFAQs) {
      aiSignalsScore += 4;
    } else {
      suggestions.push({
        priority: "P2",
        effort: "M",
        impact: "medium",
        issueType: "no_faq",
        recommendation: "Add FAQ section with relevant questions",
        suggestedFAQs: generateFAQs(pageType)
      });
    }

    // Freshness (5)
    const dateModified = doc.querySelector('meta[property="article:modified_time"]')?.getAttribute('content');
    const lastUpdated = dateModified || "Unknown";
    const isRecent = dateModified ? new Date(dateModified) > new Date(Date.now() - 180 * 24 * 60 * 60 * 1000) : false;
    
    if (isRecent) {
      aiSignalsScore += 5;
    } else {
      suggestions.push({
        priority: "P2",
        effort: "S",
        impact: "low",
        issueType: "stale_content",
        recommendation: "Update content and add dateModified to schema (within 180 days)"
      });
    }

    // Multimedia helpfulness (5)
    const images = doc.querySelectorAll('img');
    const videos = doc.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]');
    if (images.length > 0 || videos.length > 0) {
      aiSignalsScore += 5;
    } else {
      suggestions.push({
        priority: "P2",
        effort: "M",
        impact: "low",
        issueType: "no_multimedia",
        recommendation: "Add helpful visuals (diagrams, infographics, or videos)"
      });
    }

    // F) Brand, Accessibility & UX (10 pts)
    // Heading hierarchy valid (4)
    const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let hasValidHeadingOrder = true;
    let lastLevel = 0;
    
    for (const heading of headings) {
      const level = parseInt(heading.tagName.substring(1));
      if (level > lastLevel + 1 && lastLevel !== 0) {
        hasValidHeadingOrder = false;
        break;
      }
      lastLevel = level;
    }

    if (hasValidHeadingOrder) {
      brandUXScore += 4;
    } else {
      suggestions.push({
        priority: "P1",
        effort: "S",
        impact: "medium",
        issueType: "invalid_heading_hierarchy",
        recommendation: "Fix heading hierarchy (no skipped levels)"
      });
    }

    // Contrast and tap targets (3)
    // Simplified - assume pass for now
    brandUXScore += 3;

    // Consistent brand elements (3)
    // Simplified - assume pass for now
    brandUXScore += 3;

    // Calculate total score
    const totalScore = technicalScore + contentScore + linkingScore + schemaScore + aiSignalsScore + brandUXScore;
    const grade = getGrade(totalScore);
    
    const isOrphan = internalLinksCount === 0;

    return {
      url,
      pageType,
      title,
      metaDescription,
      score: totalScore,
      grade,
      technicalScore,
      contentScore,
      linkingScore,
      schemaScore,
      aiSignalsScore,
      brandUXScore,
      wordCount,
      loadTimeMs,
      isOrphan,
      hasValidJSONLD,
      isIndexable,
      lastUpdated,
      suggestions
    };
  };

  const getGrade = (score: number): string => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  const getSuggestedInternalLinks = (url: string, pageType: string): string[] => {
    const suggestions: string[] = [];
    
    if (pageType === 'service') {
      suggestions.push('/case-studies', '/resources', '/get-started');
    } else if (pageType === 'solution') {
      suggestions.push('/services', '/case-studies', '/get-started');
    } else if (pageType === 'industry') {
      suggestions.push('/services', '/solutions', '/get-started');
    }
    
    return suggestions.slice(0, 3);
  };

  const generateSchemaExample = (pageType: string): string => {
    if (pageType === 'service') {
      return `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Service Name",
  "description": "Service description",
  "provider": {
    "@type": "Organization",
    "name": "SmartFirm"
  }
}`;
    }
    return `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Name",
  "description": "Page description"
}`;
  };

  const generateFAQs = (pageType: string): { question: string; answer: string }[] => {
    // Generate contextual FAQs based on page type
    const faqs: { question: string; answer: string }[] = [];
    
    if (pageType === 'service') {
      faqs.push(
        {
          question: "How long does implementation take?",
          answer: "Most service implementations are completed within 2-4 weeks, with initial results visible in the first month."
        },
        {
          question: "What integrations are supported?",
          answer: "We integrate with leading accounting platforms including QuickBooks, Xero, and popular CRM systems."
        },
        {
          question: "Is training included?",
          answer: "Yes, we provide comprehensive onboarding and training for your team to ensure smooth adoption."
        }
      );
    } else if (pageType === 'solution') {
      faqs.push(
        {
          question: "How quickly will I see results?",
          answer: "Most firms see measurable improvements within 30-60 days of implementation."
        },
        {
          question: "What support is included?",
          answer: "All solutions include dedicated support, regular check-ins, and ongoing optimization."
        },
        {
          question: "Can this scale with my firm?",
          answer: "Yes, our solutions are designed to grow with your firm from 5 to 50+ employees."
        }
      );
    } else if (pageType === 'industry') {
      faqs.push(
        {
          question: "Do you work with firms like mine?",
          answer: "Yes, we specialize in serving firms in your industry with tailored solutions for your unique challenges."
        },
        {
          question: "What makes your approach different?",
          answer: "We combine industry expertise with proven automation to deliver measurable results for accounting firms."
        },
        {
          question: "How do you ensure compliance?",
          answer: "All our solutions are designed with accounting industry standards and compliance requirements in mind."
        }
      );
    } else {
      faqs.push(
        {
          question: "How do I get started?",
          answer: "Book a free strategy call to discuss your firm's specific needs and goals."
        },
        {
          question: "What is the pricing structure?",
          answer: "Pricing is customized based on your firm size and specific requirements. Contact us for a detailed quote."
        },
        {
          question: "Do you offer guarantees?",
          answer: "We stand behind our work with clear success metrics and ongoing support to ensure your satisfaction."
        }
      );
    }
    
    return faqs;
  };

  const runGrading = async () => {
    setIsGrading(true);
    setProgress(0);
    setResults([]);
    setSelectedPage(null);
    
    const gradingResults: PageScore[] = [];
    const routesToGrade = routes.filter(r => includeNoindex || !r.path.includes('/404'));
    
    for (let i = 0; i < routesToGrade.length; i++) {
      const route = routesToGrade[i];
      setCurrentPage(route.path);
      setProgress(((i + 1) / routesToGrade.length) * 100);
      
      const result = await gradePageViaIframe(route.path, route.type);
      gradingResults.push(result);
      
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setResults(gradingResults);
    setIsGrading(false);
    setCurrentPage("");
  };

  const exportSuggestionsToCSV = () => {
    const headers = [
      'url',
      'page_type',
      'current_title',
      'current_meta_description',
      'issue_type',
      'priority',
      'effort',
      'impact',
      'recommendation',
      'proposed_title',
      'proposed_meta_description',
      'suggested_h1',
      'suggested_internal_links',
      'suggested_outbound_links',
      'suggested_faq_qas',
      'code_snippet',
      'notes'
    ];

    const rows: string[][] = [];
    
    results.forEach(page => {
      page.suggestions.forEach(suggestion => {
        rows.push([
          page.url,
          page.pageType,
          page.title,
          page.metaDescription,
          suggestion.issueType,
          suggestion.priority,
          suggestion.effort,
          suggestion.impact,
          suggestion.recommendation,
          suggestion.proposedTitle || '',
          suggestion.proposedMetaDescription || '',
          suggestion.suggestedH1 || '',
          suggestion.suggestedInternalLinks?.join(';') || '',
          suggestion.suggestedOutboundLinks?.join(';') || '',
          suggestion.suggestedFAQs?.map(faq => `${faq.question}:::${faq.answer}`).join('||') || '',
          suggestion.codeSnippet?.replace(/\n/g, ' ') || '',
          suggestion.notes || ''
        ]);
      });
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `smartfirm-page-grader-suggestions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const filteredResults = results.filter(r => {
    if (gradeFilter !== 'all' && r.grade !== gradeFilter) return false;
    if (templateFilter !== 'all' && r.pageType !== templateFilter) return false;
    return true;
  });

  const overallScore = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length) 
    : 0;

  const gradeDistribution = {
    A: results.filter(r => r.grade === 'A').length,
    B: results.filter(r => r.grade === 'B').length,
    C: results.filter(r => r.grade === 'C').length,
    D: results.filter(r => r.grade === 'D').length,
    F: results.filter(r => r.grade === 'F').length,
  };

  const topIssues = (() => {
    const issueCount: Record<string, { count: number; pages: string[] }> = {};
    results.forEach(page => {
      page.suggestions.forEach(suggestion => {
        if (!issueCount[suggestion.issueType]) {
          issueCount[suggestion.issueType] = { count: 0, pages: [] };
        }
        issueCount[suggestion.issueType].count++;
        issueCount[suggestion.issueType].pages.push(page.url);
      });
    });
    return Object.entries(issueCount)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 10);
  })();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">SmartFirm Page Grader & Fix Suggestions</h2>
          <p className="text-muted-foreground mt-2">
            Rubric-based scoring with actionable, prioritized suggestions
          </p>
        </div>
        <Button variant="outline" onClick={onBack}>
          Back to Tools
        </Button>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Grading Controls</CardTitle>
          <CardDescription>Configure grading parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="include-noindex">Include noindex pages</Label>
              <Switch
                id="include-noindex"
                checked={includeNoindex}
                onCheckedChange={setIncludeNoindex}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Min Word Count - Services: {minWordCountService}</Label>
              <Slider
                value={[minWordCountService]}
                onValueChange={(val) => setMinWordCountService(val[0])}
                min={400}
                max={1500}
                step={50}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Min Word Count - Blog: {minWordCountBlog}</Label>
              <Slider
                value={[minWordCountBlog]}
                onValueChange={(val) => setMinWordCountBlog(val[0])}
                min={800}
                max={3000}
                step={100}
              />
            </div>
          </div>

          {!isGrading && results.length === 0 && (
            <Button onClick={runGrading} size="lg" className="w-full">
              <Play className="mr-2 h-5 w-5" />
              Start Page Grading
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Progress */}
      {isGrading && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Grading: {currentPage}</span>
                  <span className="font-semibold">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dashboard */}
      {!isGrading && results.length > 0 && (
        <>
          {/* Overall Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{overallScore}</div>
                <div className="text-sm text-muted-foreground">{getGrade(overallScore)} Grade</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Pages Graded</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{results.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Total Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">
                  {results.reduce((sum, r) => sum + r.suggestions.length, 0)}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">P0 Critical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-destructive">
                  {results.reduce((sum, r) => 
                    sum + r.suggestions.filter(s => s.priority === 'P0').length, 0
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grade Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(gradeDistribution).map(([grade, count]) => (
                  <div key={grade} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Grade {grade}</span>
                      <span className="text-muted-foreground">{count} pages</span>
                    </div>
                    <Progress value={(count / results.length) * 100} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Issues */}
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Issues Across Site</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {topIssues.map(([issueType, data]) => (
                  <div key={issueType} className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="space-y-1">
                      <div className="font-medium">{issueType.replace(/_/g, ' ')}</div>
                      <div className="text-sm text-muted-foreground">
                        {data.count} affected {data.count === 1 ? 'page' : 'pages'}
                      </div>
                    </div>
                    <Badge variant="outline">{data.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Filters and Actions */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Page Results</CardTitle>
                <div className="flex gap-2">
                  <Select value={gradeFilter} onValueChange={setGradeFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Grades</SelectItem>
                      <SelectItem value="A">Grade A</SelectItem>
                      <SelectItem value="B">Grade B</SelectItem>
                      <SelectItem value="C">Grade C</SelectItem>
                      <SelectItem value="D">Grade D</SelectItem>
                      <SelectItem value="F">Grade F</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={templateFilter} onValueChange={setTemplateFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="solution">Solution</SelectItem>
                      <SelectItem value="industry">Industry</SelectItem>
                      <SelectItem value="core">Core</SelectItem>
                      <SelectItem value="tool">Tool</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button onClick={exportSuggestionsToCSV}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>URL</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Words</TableHead>
                      <TableHead>Load (ms)</TableHead>
                      <TableHead>Orphan?</TableHead>
                      <TableHead>JSON-LD?</TableHead>
                      <TableHead>Suggestions</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredResults.map((page) => (
                      <>
                        <TableRow key={page.url} className="cursor-pointer hover:bg-muted/50">
                          <TableCell className="font-medium">{page.url}</TableCell>
                          <TableCell>{page.score}/100</TableCell>
                          <TableCell>
                            <Badge variant={
                              page.grade === 'A' ? 'default' :
                              page.grade === 'B' ? 'secondary' :
                              page.grade === 'C' ? 'outline' :
                              'destructive'
                            }>
                              {page.grade}
                            </Badge>
                          </TableCell>
                          <TableCell>{page.wordCount}</TableCell>
                          <TableCell>{page.loadTimeMs}</TableCell>
                          <TableCell>{page.isOrphan ? '⚠️' : '✓'}</TableCell>
                          <TableCell>{page.hasValidJSONLD ? '✓' : '✗'}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{page.suggestions.length}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedPage(selectedPage?.url === page.url ? null : page)}
                            >
                              {selectedPage?.url === page.url ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </Button>
                          </TableCell>
                        </TableRow>
                        
                        {selectedPage?.url === page.url && (
                          <TableRow>
                            <TableCell colSpan={9}>
                              <div className="p-4 space-y-4 bg-muted/30 rounded-lg">
                                {/* Rubric Breakdown */}
                                <div>
                                  <h4 className="font-semibold mb-3">Rubric Breakdown</h4>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">Technical</div>
                                      <div className="text-lg font-bold">{page.technicalScore}/25</div>
                                    </div>
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">Content</div>
                                      <div className="text-lg font-bold">{page.contentScore}/20</div>
                                    </div>
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">Linking</div>
                                      <div className="text-lg font-bold">{page.linkingScore}/15</div>
                                    </div>
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">Schema</div>
                                      <div className="text-lg font-bold">{page.schemaScore}/10</div>
                                    </div>
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">AI Signals</div>
                                      <div className="text-lg font-bold">{page.aiSignalsScore}/20</div>
                                    </div>
                                    <div className="p-3 border rounded bg-background">
                                      <div className="text-sm text-muted-foreground">Brand & UX</div>
                                      <div className="text-lg font-bold">{page.brandUXScore}/10</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Suggestions */}
                                <div>
                                  <h4 className="font-semibold mb-3">Prioritized Suggestions ({page.suggestions.length})</h4>
                                  <div className="space-y-3">
                                    {page.suggestions.map((suggestion, idx) => (
                                      <div key={idx} className="p-3 border rounded bg-background">
                                        <div className="flex items-start justify-between mb-2">
                                          <div className="flex gap-2">
                                            <Badge variant={
                                              suggestion.priority === 'P0' ? 'destructive' :
                                              suggestion.priority === 'P1' ? 'default' :
                                              'secondary'
                                            }>
                                              {suggestion.priority}
                                            </Badge>
                                            <Badge variant="outline">{suggestion.effort}</Badge>
                                            <Badge variant="outline">{suggestion.impact}</Badge>
                                          </div>
                                        </div>
                                        <div className="space-y-2">
                                          <div className="font-medium">{suggestion.issueType.replace(/_/g, ' ')}</div>
                                          <div className="text-sm text-muted-foreground">{suggestion.recommendation}</div>
                                          
                                          {suggestion.proposedTitle && (
                                            <div className="text-sm">
                                              <span className="font-medium">Proposed Title:</span> {suggestion.proposedTitle}
                                            </div>
                                          )}
                                          
                                          {suggestion.proposedMetaDescription && (
                                            <div className="text-sm">
                                              <span className="font-medium">Proposed Description:</span> {suggestion.proposedMetaDescription}
                                            </div>
                                          )}
                                          
                                          {suggestion.suggestedInternalLinks && suggestion.suggestedInternalLinks.length > 0 && (
                                            <div className="text-sm">
                                              <span className="font-medium">Link to:</span> {suggestion.suggestedInternalLinks.join(', ')}
                                            </div>
                                          )}
                                          
                                          {suggestion.codeSnippet && (
                                            <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                                              {suggestion.codeSnippet}
                                            </pre>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    // Regenerate just this page
                                    const regenerate = async () => {
                                      const newScore = await gradePageViaIframe(page.url, page.pageType);
                                      setResults(results.map(r => r.url === page.url ? newScore : r));
                                      setSelectedPage(newScore);
                                    };
                                    regenerate();
                                  }}
                                >
                                  <RefreshCw className="mr-2 h-4 w-4" />
                                  Regenerate Suggestions
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default PageGrader;
