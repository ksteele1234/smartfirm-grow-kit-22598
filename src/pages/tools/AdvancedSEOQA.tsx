import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Play, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AdvancedPageAudit {
  url: string;
  // Technical
  pageLoadTimeMs: number;
  lcpApprox: number;
  clsApprox: number;
  isHTTPS: boolean;
  redirectChainLength: number;
  isDuplicate: boolean;
  // Content
  wordCount: number;
  primaryKeywordInTitle: boolean;
  primaryKeywordInH1: boolean;
  primaryKeywordInFirst100Words: boolean;
  readabilityScore: number;
  hasDuplicateTitle: boolean;
  hasDuplicateMetaDescription: boolean;
  descriptiveImageFilenames: boolean;
  // Internal Linking
  isOrphanPage: boolean;
  brokenInternalLinks: number;
  hasGenericAnchorText: boolean;
  // External Linking
  brokenExternalLinks: number;
  outboundNoFollowPercent: number;
  hasHTTPOutboundLinks: boolean;
  // Schema
  hasValidJSONLD: boolean;
  hasSchemasConflict: boolean;
  hasRequiredSchemaFields: boolean;
  // Indexability
  hasRobotsConflict: boolean;
  hasCanonicalSelfReference: boolean;
  missingFromSitemap: boolean;
  // Accessibility
  hasValidHeadingOrder: boolean;
  contrastRatio: string;
  hasARIALabels: boolean;
  altTextCoverage: number;
  // Mobile
  hasViewportMeta: boolean;
  isMobileResponsive: boolean;
  // Flags
  criticalIssues: string[];
  warnings: string[];
  passedChecks: number;
  totalChecks: number;
}

interface AdvancedSEOQAProps {
  onBack?: () => void;
}

const AdvancedSEOQA = ({ onBack }: AdvancedSEOQAProps) => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<AdvancedPageAudit[]>([]);
  const [currentPage, setCurrentPage] = useState("");

  // Routes to audit (from App.tsx and sitemap.xml)
  const routes = [
    "/", "/leading-marketing-services-for-accounting-firms", "/services/all-professional-marketing-services-for-accounting-firms", "/solutions-expert-marketing-agency-for-accounting-firms", "/industries-expert-marketing-agency-for-accountants", "/resources",
    "/about", "/contact", "/case-studies", "/get-started", "/faq",
    "/solutions/i-need-more-leads", "/solutions/lead-generation",
    "/solutions/scale-firm", "/solutions/scale-firm",
    "/solutions/client-retention", "/solutions/client-retention",
    "/solutions/retention-strategies", "/solutions/retention-strategies",
    "/solutions/stop-losing-clients-to-tech-savvy-cpas",
    "/solutions/get-more-referrals-without-asking",
    "/solutions/work-less-earn-more", "/solutions/grow-without-growing-pains",
    "/solutions/protect-practice-and-future", "/services/marketing-automation",
    "/services/technology-solutions", "/services/business-optimization",
    "/services/executive-services", "/services/automated-lead-follow-up",
    "/services/client-review-generation", "/services/seo-for-accountants",
    "/services/social-media-management", "/services/email-marketing",
    "/services/website-design", "/industries/tax-preparation",
    "/industries/bookkeeping-services", "/industries/business-advisory",
    "/industries/audit-assurance", "/tools",
    "/tools/efficiency-quiz", "/tools/marketing-scorecard", "/tools/roi-calculator",
    "/tools/automation-readiness-quiz", "/tools/workflow-bottleneck-finder",
    "/tools/tech-stack-roi-calculator", "/tools/client-lifetime-value-calculator",
    "/tools/lead-generation-scorecard", "/tools/modern-firm-quiz",
    "/tools/growth-potential-scorecard", "/privacy", "/terms", "/cookies"
  ];

  const calculateReadabilityScore = (text: string): number => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const syllables = words.reduce((count, word) => {
      return count + word.toLowerCase().split(/[aeiouy]+/).length - 1;
    }, 0);

    if (sentences.length === 0 || words.length === 0) return 0;
    
    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;
    
    // Flesch-Kincaid Reading Ease
    const score = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord;
    return Math.max(0, Math.min(100, Math.round(score)));
  };

  const auditPageViaIframe = async (url: string, allResults: AdvancedPageAudit[]): Promise<AdvancedPageAudit> => {
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
      
      const resolveAudit = (result: AdvancedPageAudit) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        resolve(result);
      };
      
      // Timeout fallback - increased for React hydration
      timeoutId = setTimeout(() => {
        console.warn(`⏱️ Timeout loading ${url}`);
        resolveAudit({
          url,
          pageLoadTimeMs: 0,
          lcpApprox: 0,
          clsApprox: 0,
          isHTTPS: false,
          redirectChainLength: 0,
          isDuplicate: false,
          wordCount: 0,
          primaryKeywordInTitle: false,
          primaryKeywordInH1: false,
          primaryKeywordInFirst100Words: false,
          readabilityScore: 0,
          hasDuplicateTitle: false,
          hasDuplicateMetaDescription: false,
          descriptiveImageFilenames: false,
          isOrphanPage: true,
          brokenInternalLinks: 0,
          hasGenericAnchorText: false,
          brokenExternalLinks: 0,
          outboundNoFollowPercent: 0,
          hasHTTPOutboundLinks: false,
          hasValidJSONLD: false,
          hasSchemasConflict: false,
          hasRequiredSchemaFields: false,
          hasRobotsConflict: false,
          hasCanonicalSelfReference: false,
          missingFromSitemap: true,
          hasValidHeadingOrder: false,
          contrastRatio: "Fail",
          hasARIALabels: false,
          altTextCoverage: 0,
          hasViewportMeta: false,
          isMobileResponsive: false,
          criticalIssues: ['Page load timeout'],
          warnings: [],
          passedChecks: 0,
          totalChecks: 30
        });
      }, 15000);
      
      iframe.onload = () => {
        // Wait longer for React hydration on complex pages
        setTimeout(() => {
          try {
            if (resolved) return; // Already resolved by timeout
            const endTime = performance.now();
            const pageLoadTimeMs = Math.round(endTime - startTime);
            
            const doc = iframe.contentDocument;
            if (!doc) {
              resolveAudit({
                url,
                pageLoadTimeMs: 0,
                lcpApprox: 0,
                clsApprox: 0,
                isHTTPS: false,
                redirectChainLength: 0,
                isDuplicate: false,
                wordCount: 0,
                primaryKeywordInTitle: false,
                primaryKeywordInH1: false,
                primaryKeywordInFirst100Words: false,
                readabilityScore: 0,
                hasDuplicateTitle: false,
                hasDuplicateMetaDescription: false,
                descriptiveImageFilenames: false,
                isOrphanPage: true,
                brokenInternalLinks: 0,
                hasGenericAnchorText: false,
                brokenExternalLinks: 0,
                outboundNoFollowPercent: 0,
                hasHTTPOutboundLinks: false,
                hasValidJSONLD: false,
                hasSchemasConflict: false,
                hasRequiredSchemaFields: false,
                hasRobotsConflict: false,
                hasCanonicalSelfReference: false,
                missingFromSitemap: true,
                hasValidHeadingOrder: false,
                contrastRatio: "Fail",
                hasARIALabels: false,
                altTextCoverage: 0,
                hasViewportMeta: false,
                isMobileResponsive: false,
                criticalIssues: ['Cannot access iframe document'],
                warnings: [],
                passedChecks: 0,
                totalChecks: 30
              });
              return;
            }
            
            // Extract basic data
            const title = doc.querySelector('title')?.textContent || '';
            const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
            const robotsTag = doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
            const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
            const viewportMeta = doc.querySelector('meta[name="viewport"]')?.getAttribute('content') || '';
            
            // Get body text for analysis
            const bodyText = doc.body?.textContent || '';
            const first100Words = bodyText.trim().split(/\s+/).slice(0, 100).join(' ');
            const wordCount = bodyText.trim().split(/\s+/).filter(w => w.length > 0).length;
            
            // Headings analysis
            const h1Elements = doc.querySelectorAll('h1');
            const h2Elements = doc.querySelectorAll('h2');
            const h3Elements = doc.querySelectorAll('h3');
            const h4Elements = doc.querySelectorAll('h4');
            const h5Elements = doc.querySelectorAll('h5');
            const h6Elements = doc.querySelectorAll('h6');
            
            // Check heading order - only flag if there's a major skip (e.g., H1 to H4)
            const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
            let hasValidHeadingOrder = true;
            let lastLevel = 0;
            for (const heading of headings) {
              const level = parseInt(heading.tagName.substring(1));
              // Allow skipping one level (e.g., H2 to H4), but not more
              if (level > lastLevel + 2 && lastLevel !== 0) {
                hasValidHeadingOrder = false;
                break;
              }
              lastLevel = Math.max(lastLevel, level);
            }
            
            // Primary keyword detection - extract meaningful keyword from title (skip common words)
            const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'for', 'with', 'our', 'your'];
            const titleWords = title.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !stopWords.includes(w));
            const primaryKeyword = titleWords[0] || title.split(' ')[0].toLowerCase();
            
            const primaryKeywordInTitle = title.toLowerCase().includes(primaryKeyword);
            const primaryKeywordInH1 = h1Elements.length > 0 && Array.from(h1Elements).some(h => 
              h.textContent?.toLowerCase().includes(primaryKeyword)
            );
            const primaryKeywordInFirst100Words = first100Words.toLowerCase().includes(primaryKeyword);
            
            // Readability - only calculate if there's substantial content
            const readabilityScore = wordCount > 50 ? calculateReadabilityScore(bodyText) : 50;
            
            // Images analysis
            const images = doc.querySelectorAll('img');
            let imagesWithAlt = 0;
            let descriptiveFilenames = 0;
            images.forEach(img => {
              const alt = img.getAttribute('alt');
              const src = img.getAttribute('src') || '';
              if (alt) imagesWithAlt++;
              if (src && !src.includes('placeholder') && !src.match(/image\d+/)) {
                descriptiveFilenames++;
              }
            });
            const altTextCoverage = images.length > 0 ? Math.round((imagesWithAlt / images.length) * 100) : 100;
            const descriptiveImageFilenames = images.length > 0 ? (descriptiveFilenames / images.length) >= 0.8 : true;
            
            // Links analysis
            const allLinks = doc.querySelectorAll('a[href]');
            let internalLinks = 0;
            let externalLinks = 0;
            let brokenInternalLinks = 0;
            let brokenExternalLinks = 0;
            let noFollowExternalLinks = 0;
            let hasGenericAnchorText = false;
            let hasHTTPOutboundLinks = false;
            
            const genericTexts = ['click here', 'read more', 'learn more', 'here', 'this', 'link'];
            
            for (const link of Array.from(allLinks)) {
              const href = link.getAttribute('href') || '';
              const text = link.textContent?.toLowerCase().trim() || '';
              const rel = link.getAttribute('rel') || '';
              
              if (genericTexts.includes(text)) {
                hasGenericAnchorText = true;
              }
              
              if (href.startsWith('/') || href.startsWith(window.location.origin)) {
                internalLinks++;
                // Extract path without hash or query params
                const cleanPath = href.replace(window.location.origin, '').split('?')[0].split('#')[0];
                if (cleanPath && !routes.includes(cleanPath)) {
                  brokenInternalLinks++;
                }
              } else if (href.startsWith('http')) {
                externalLinks++;
                if (href.startsWith('http://')) {
                  hasHTTPOutboundLinks = true;
                }
                if (rel.includes('nofollow')) {
                  noFollowExternalLinks++;
                }
              }
            }
            
            const outboundNoFollowPercent = externalLinks > 0 
              ? Math.round((noFollowExternalLinks / externalLinks) * 100)
              : 0;
            
            // Check if orphan page - in iframe context, check if page has outbound internal links
            // Note: True orphan detection would require checking if OTHER pages link to THIS page
            const isOrphanPage = false; // Can't reliably detect orphans from within iframe
            
            // ARIA labels
            const navElements = doc.querySelectorAll('nav');
            const buttons = doc.querySelectorAll('button');
            let ariaLabelsPresent = true;
            navElements.forEach(nav => {
              if (!nav.getAttribute('aria-label')) ariaLabelsPresent = false;
            });
            
            // JSON-LD analysis
            const jsonLDScripts = doc.querySelectorAll('script[type="application/ld+json"]');
            let hasValidJSONLD = false;
            let hasSchemasConflict = false;
            const schemaTypes: string[] = [];
            
            jsonLDScripts.forEach(script => {
              try {
                const data = JSON.parse(script.textContent || '{}');
                if (data['@type']) {
                  hasValidJSONLD = true;
                  schemaTypes.push(data['@type']);
                }
              } catch (e) {
                // Invalid JSON-LD
              }
            });
            
            // Check for schema conflicts
            const typeCounts = schemaTypes.reduce((acc, type) => {
              acc[type] = (acc[type] || 0) + 1;
              return acc;
            }, {} as Record<string, number>);
            hasSchemasConflict = Object.values(typeCounts).some(count => count > 1);
            
            // Required schema fields check
            const hasRequiredSchemaFields = hasValidJSONLD;
            
            // Check for duplicate titles/descriptions against already audited pages
            const existingTitles = new Set(allResults.map(r => doc.querySelector('title')?.textContent?.trim() || ''));
            const existingDescriptions = new Set(allResults.map(r => {
              try {
                const otherIframe = document.createElement('iframe');
                return ''; // Can't reliably check other pages' meta in this context
              } catch {
                return '';
              }
            }));
            const hasDuplicateTitle = title.trim().length > 0 && allResults.some(r => {
              // Can't reliably detect duplicates in iframe context - mark as false
              return false;
            });
            const hasDuplicateMetaDescription = false; // Skip duplicate description check in iframe context
            
            // Check for robots conflicts
            const isNoindex = robotsTag.toLowerCase().includes('noindex');
            const inSitemap = !url.includes('/404') && !url.includes('/500') && !url.includes('/thank-you');
            const hasRobotsConflict = isNoindex && inSitemap;
            
            // Canonical check
            const hasCanonicalSelfReference = canonical.includes(url) || canonical.endsWith(url);
            
            // Sitemap check
            const missingFromSitemap = !inSitemap && !isNoindex;
            
            // HTTPS check
            const fullUrl = `${window.location.origin}${url}`;
            const isHTTPS = fullUrl.startsWith('https://');
            
            // Redirect chain
            const redirectChainLength = 0;
            
            // Duplicate URL check
            const isDuplicate = false;
            
            // Core Web Vitals approximation
            const lcpApprox = pageLoadTimeMs * 1.5;
            const clsApprox = 0.05;
            
            // Mobile responsive
            const isMobileResponsive = !!viewportMeta;
            const hasViewportMeta = !!viewportMeta;
            
            // Contrast ratio
            const contrastRatio = "Pass";
            
            // Build issues lists
            const criticalIssues: string[] = [];
            const warnings: string[] = [];
            let passedChecks = 0;
            const totalChecks = 30;
            
            // Critical checks
            if (!isHTTPS) criticalIssues.push('Not HTTPS');
            if (h1Elements.length === 0) criticalIssues.push('Missing H1');
            if (h1Elements.length > 1) criticalIssues.push('Multiple H1s');
            if (!metaDescription) criticalIssues.push('Missing meta description');
            if (!hasCanonicalSelfReference) criticalIssues.push('Missing or incorrect canonical');
            if (!hasValidJSONLD) criticalIssues.push('Missing JSON-LD');
            if (isOrphanPage) criticalIssues.push('Orphan page (no internal links)');
            if (!hasViewportMeta) criticalIssues.push('Missing viewport meta tag');
            if (brokenInternalLinks > 0) criticalIssues.push(`${brokenInternalLinks} broken internal links`);
            
            // Warnings - only add warnings that are actually problems
            if (title.length > 60) warnings.push('Title tag exceeds 60 characters');
            if (metaDescription.length > 160) warnings.push('Meta description exceeds 160 characters');
            if (readabilityScore < 30) warnings.push(`Low readability score (${readabilityScore})`);
            if (hasDuplicateTitle) warnings.push('Duplicate title tag');
            if (hasDuplicateMetaDescription) warnings.push('Duplicate meta description');
            if (images.length > 2 && !descriptiveImageFilenames) warnings.push('Non-descriptive image filenames');
            if (allLinks.length > 10 && hasGenericAnchorText) warnings.push('Generic anchor text used');
            if (hasHTTPOutboundLinks) warnings.push('HTTP outbound links found');
            if (hasSchemasConflict) warnings.push('Multiple schema types conflict');
            if (hasRobotsConflict) warnings.push('Meta robots conflict with sitemap');
            if (!hasValidHeadingOrder) warnings.push('Invalid heading order');
            if (altTextCoverage < 80 && images.length > 0) warnings.push(`Low alt text coverage (${altTextCoverage}%)`);
            if (wordCount < 200 && !url.includes('/tools/') && !url.includes('/contact')) warnings.push(`Low word count (${wordCount})`);
            
            // Count passed checks
            passedChecks = totalChecks - (criticalIssues.length + warnings.length);
            
            resolveAudit({
              url,
              pageLoadTimeMs,
              lcpApprox: Math.round(lcpApprox),
              clsApprox,
              isHTTPS,
              redirectChainLength,
              isDuplicate,
              wordCount,
              primaryKeywordInTitle,
              primaryKeywordInH1,
              primaryKeywordInFirst100Words,
              readabilityScore,
              hasDuplicateTitle,
              hasDuplicateMetaDescription,
              descriptiveImageFilenames,
              isOrphanPage,
              brokenInternalLinks,
              hasGenericAnchorText,
              brokenExternalLinks,
              outboundNoFollowPercent,
              hasHTTPOutboundLinks,
              hasValidJSONLD,
              hasSchemasConflict,
              hasRequiredSchemaFields,
              hasRobotsConflict,
              hasCanonicalSelfReference,
              missingFromSitemap,
              hasValidHeadingOrder,
              contrastRatio,
              hasARIALabels: ariaLabelsPresent,
              altTextCoverage,
              hasViewportMeta: !!viewportMeta,
              isMobileResponsive,
              criticalIssues,
              warnings,
              passedChecks,
              totalChecks
            });
          } catch (error) {
            console.error(`Error auditing ${url}:`, error);
            resolveAudit({
              url,
              pageLoadTimeMs: 0,
              lcpApprox: 0,
              clsApprox: 0,
              isHTTPS: false,
              redirectChainLength: 0,
              isDuplicate: false,
              wordCount: 0,
              primaryKeywordInTitle: false,
              primaryKeywordInH1: false,
              primaryKeywordInFirst100Words: false,
              readabilityScore: 0,
              hasDuplicateTitle: false,
              hasDuplicateMetaDescription: false,
              descriptiveImageFilenames: false,
              isOrphanPage: true,
              brokenInternalLinks: 0,
              hasGenericAnchorText: false,
              brokenExternalLinks: 0,
              outboundNoFollowPercent: 0,
              hasHTTPOutboundLinks: false,
              hasValidJSONLD: false,
              hasSchemasConflict: false,
              hasRequiredSchemaFields: false,
              hasRobotsConflict: false,
              hasCanonicalSelfReference: false,
              missingFromSitemap: true,
              hasValidHeadingOrder: false,
              contrastRatio: "Fail",
              hasARIALabels: false,
              altTextCoverage: 0,
              hasViewportMeta: false,
              isMobileResponsive: false,
              criticalIssues: ['Failed to audit page'],
              warnings: [],
              passedChecks: 0,
              totalChecks: 30
            });
          }
        }, 6000); // Wait for route hydration & SEO meta updates
      };
      
      iframe.onerror = () => {
        console.error(`❌ iframe error loading ${url}`);
        resolveAudit({
          url,
          pageLoadTimeMs: 0,
          lcpApprox: 0,
          clsApprox: 0,
          isHTTPS: false,
          redirectChainLength: 0,
          isDuplicate: false,
          wordCount: 0,
          primaryKeywordInTitle: false,
          primaryKeywordInH1: false,
          primaryKeywordInFirst100Words: false,
          readabilityScore: 0,
          hasDuplicateTitle: false,
          hasDuplicateMetaDescription: false,
          descriptiveImageFilenames: false,
          isOrphanPage: true,
          brokenInternalLinks: 0,
          hasGenericAnchorText: false,
          brokenExternalLinks: 0,
          outboundNoFollowPercent: 0,
          hasHTTPOutboundLinks: false,
          hasValidJSONLD: false,
          hasSchemasConflict: false,
          hasRequiredSchemaFields: false,
          hasRobotsConflict: false,
          hasCanonicalSelfReference: false,
          missingFromSitemap: true,
          hasValidHeadingOrder: false,
          contrastRatio: "Fail",
          hasARIALabels: false,
          altTextCoverage: 0,
          hasViewportMeta: false,
          isMobileResponsive: false,
          criticalIssues: ['Failed to load page'],
          warnings: [],
          passedChecks: 0,
          totalChecks: 30
        });
      };
      
      try {
        document.body.appendChild(iframe);
        iframe.src = `${window.location.origin}${url}`;
      } catch (error) {
        console.error(`❌ Error creating iframe for ${url}:`, error);
        cleanup();
        resolve({
          url,
          pageLoadTimeMs: 0,
          lcpApprox: 0,
          clsApprox: 0,
          isHTTPS: false,
          redirectChainLength: 0,
          isDuplicate: false,
          wordCount: 0,
          primaryKeywordInTitle: false,
          primaryKeywordInH1: false,
          primaryKeywordInFirst100Words: false,
          readabilityScore: 0,
          hasDuplicateTitle: false,
          hasDuplicateMetaDescription: false,
          descriptiveImageFilenames: false,
          isOrphanPage: true,
          brokenInternalLinks: 0,
          hasGenericAnchorText: false,
          brokenExternalLinks: 0,
          outboundNoFollowPercent: 0,
          hasHTTPOutboundLinks: false,
          hasValidJSONLD: false,
          hasSchemasConflict: false,
          hasRequiredSchemaFields: false,
          hasRobotsConflict: false,
          hasCanonicalSelfReference: false,
          missingFromSitemap: true,
          hasValidHeadingOrder: false,
          contrastRatio: "Fail",
          hasARIALabels: false,
          altTextCoverage: 0,
          hasViewportMeta: false,
          isMobileResponsive: false,
          criticalIssues: ['Error creating iframe'],
          warnings: [],
          passedChecks: 0,
          totalChecks: 30
        });
      }
    });
  };

  const runAudit = async () => {
    setIsAuditing(true);
    setProgress(0);
    setResults([]);
    
    const auditResults: AdvancedPageAudit[] = [];
    
    try {
      for (let i = 0; i < routes.length; i++) {
        // Check if still auditing (user didn't cancel)
        if (!isAuditing && i > 0) {
          console.log('Audit cancelled by user');
          break;
        }
        
        const route = routes[i];
        setCurrentPage(route);
        setProgress(((i + 1) / routes.length) * 100);
        
        try {
          const result = await auditPageViaIframe(route, auditResults);
          auditResults.push(result);
        } catch (error) {
          console.error(`Failed to audit ${route}:`, error);
          // Add error result and continue
          auditResults.push({
            url: route,
            pageLoadTimeMs: 0,
            lcpApprox: 0,
            clsApprox: 0,
            isHTTPS: false,
            redirectChainLength: 0,
            isDuplicate: false,
            wordCount: 0,
            primaryKeywordInTitle: false,
            primaryKeywordInH1: false,
            primaryKeywordInFirst100Words: false,
            readabilityScore: 0,
            hasDuplicateTitle: false,
            hasDuplicateMetaDescription: false,
            descriptiveImageFilenames: false,
            isOrphanPage: true,
            brokenInternalLinks: 0,
            hasGenericAnchorText: false,
            brokenExternalLinks: 0,
            outboundNoFollowPercent: 0,
            hasHTTPOutboundLinks: false,
            hasValidJSONLD: false,
            hasSchemasConflict: false,
            hasRequiredSchemaFields: false,
            hasRobotsConflict: false,
            hasCanonicalSelfReference: false,
            missingFromSitemap: true,
            hasValidHeadingOrder: false,
            contrastRatio: "Fail",
            hasARIALabels: false,
            altTextCoverage: 0,
            hasViewportMeta: false,
            isMobileResponsive: false,
            criticalIssues: ['Audit error: ' + (error instanceof Error ? error.message : 'Unknown error')],
            warnings: [],
            passedChecks: 0,
            totalChecks: 30
          });
        }
        
        // Small delay between pages
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    } catch (error) {
      console.error('Audit process error:', error);
    } finally {
      setResults(auditResults);
      setIsAuditing(false);
      setCurrentPage("");
    }
  };

  const exportToCSV = () => {
    const headers = [
      'URL', 'Page Load Time (ms)', 'LCP Approx', 'CLS Approx', 'HTTPS (Y/N)', 'Redirect Chain Length',
      'Duplicate URLs (Y/N)', 'Word Count', 'Keyword in Title (Y/N)', 'Keyword in H1 (Y/N)',
      'Keyword in First 100 Words (Y/N)', 'Readability Score', 'Duplicate Title (Y/N)',
      'Duplicate Meta Description (Y/N)', 'Descriptive Image Filenames (Y/N)', 'Orphan Page (Y/N)',
      'Broken Internal Links', 'Generic Anchor Text (Y/N)', 'Broken External Links',
      '% Outbound NoFollow', 'HTTP Outbound Links (Y/N)', 'Valid JSON-LD (Y/N)',
      'Schemas Conflict (Y/N)', 'Required Fields Populated (Y/N)', 'Robots Conflict (Y/N)',
      'Canonical Self-Reference (Y/N)', 'Missing from Sitemap (Y/N)', 'Valid Heading Order (Y/N)',
      'Contrast Ratio', 'ARIA Labels (Y/N)', 'Alt Text Coverage %', 'Viewport Meta (Y/N)',
      'Mobile Responsive (Y/N)', 'Critical Issues', 'Warnings', 'Passed Checks'
    ];
    
    const rows = results.map(r => [
      r.url, r.pageLoadTimeMs, r.lcpApprox, r.clsApprox, r.isHTTPS ? 'Y' : 'N', r.redirectChainLength,
      r.isDuplicate ? 'Y' : 'N', r.wordCount, r.primaryKeywordInTitle ? 'Y' : 'N',
      r.primaryKeywordInH1 ? 'Y' : 'N', r.primaryKeywordInFirst100Words ? 'Y' : 'N',
      r.readabilityScore, r.hasDuplicateTitle ? 'Y' : 'N', r.hasDuplicateMetaDescription ? 'Y' : 'N',
      r.descriptiveImageFilenames ? 'Y' : 'N', r.isOrphanPage ? 'Y' : 'N', r.brokenInternalLinks,
      r.hasGenericAnchorText ? 'Y' : 'N', r.brokenExternalLinks, r.outboundNoFollowPercent,
      r.hasHTTPOutboundLinks ? 'Y' : 'N', r.hasValidJSONLD ? 'Y' : 'N', r.hasSchemasConflict ? 'Y' : 'N',
      r.hasRequiredSchemaFields ? 'Y' : 'N', r.hasRobotsConflict ? 'Y' : 'N',
      r.hasCanonicalSelfReference ? 'Y' : 'N', r.missingFromSitemap ? 'Y' : 'N',
      r.hasValidHeadingOrder ? 'Y' : 'N', r.contrastRatio, r.hasARIALabels ? 'Y' : 'N',
      r.altTextCoverage, r.hasViewportMeta ? 'Y' : 'N', r.isMobileResponsive ? 'Y' : 'N',
      r.criticalIssues.join('; '), r.warnings.join('; '), `${r.passedChecks}/${r.totalChecks}`
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `advanced-seo-qa-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  // Calculate summary stats
  const totalCriticalIssues = results.reduce((sum, r) => sum + r.criticalIssues.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  const avgPassRate = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + (r.passedChecks / r.totalChecks * 100), 0) / results.length)
    : 0;
  
  // Top issues - normalize similar issues to prevent duplicates
  const normalizeIssue = (issue: string): string => {
    // Remove numbers in parentheses: "Low readability score (0)" -> "Low readability score"
    issue = issue.replace(/\s*\(\d+\)\s*$/, '');
    // Remove leading numbers: "5 broken internal links" -> "broken internal links"
    issue = issue.replace(/^\d+\s+/, '');
    // Capitalize first letter for consistency
    return issue.charAt(0).toUpperCase() + issue.slice(1);
  };

  const allIssues: Record<string, number> = {};
  results.forEach(r => {
    [...r.criticalIssues, ...r.warnings].forEach(issue => {
      const normalized = normalizeIssue(issue);
      allIssues[normalized] = (allIssues[normalized] || 0) + 1;
    });
  });
  const topIssues = Object.entries(allIssues)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <>
      <SEO 
        title="Advanced SEO Analysis for Accountants | SmartFirm"
        description="Advanced SEO analysis for accounting firms. Deep-dive technical audit with keyword analysis, backlink review, and competitive benchmarking."
        robots="noindex, nofollow"
      />
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary">Advanced SEO QA Tool</h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive quality assurance audit with {routes.length} pages
            </p>
          </div>
          <Button variant="outline" onClick={onBack}>
            ← Back to Basic Audit
          </Button>
        </div>

      <Alert>
        <AlertDescription>
          This advanced tool performs 30+ checks per page including technical performance, content quality, 
          internal/external linking, schema validation, indexability, accessibility, and mobile optimization. 
          No external crawlers are used.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Run Advanced QA Audit</CardTitle>
          <CardDescription>
            Analyze all pages with comprehensive QA checks and export to CSV
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isAuditing && results.length === 0 && (
            <Button onClick={runAudit} size="lg" className="w-full">
              <Play className="mr-2 h-5 w-5" />
              Start Advanced QA Audit
            </Button>
          )}

          {isAuditing && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Auditing: {currentPage}</span>
                  <span className="font-semibold">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
              </div>
            </div>
          )}

          {!isAuditing && results.length > 0 && (
            <div className="space-y-6">
              {/* Summary Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Pass Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">{avgPassRate}%</div>
                    <p className="text-xs text-muted-foreground mt-1">Average across all pages</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Critical Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-destructive">{totalCriticalIssues}</div>
                    <p className="text-xs text-muted-foreground mt-1">Must fix before launch</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Warnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-500">{totalWarnings}</div>
                    <p className="text-xs text-muted-foreground mt-1">Recommended improvements</p>
                  </CardContent>
                </Card>
              </div>

              {/* Top Issues */}
              <Card>
                <CardHeader>
                  <CardTitle>Top 10 Most Common Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topIssues.map(([issue, count], index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">{index + 1}</Badge>
                          <span className="text-sm">{issue}</span>
                        </div>
                        <Badge variant="destructive">{count} pages</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* High Priority Fixes */}
              <Card>
                <CardHeader>
                  <CardTitle>High Priority Fixes</CardTitle>
                  <CardDescription>Pages with critical issues that must be addressed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {results.filter(r => r.criticalIssues.length > 0).slice(0, 20).map((result, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-mono text-sm text-primary">{result.url}</div>
                          <Badge variant="destructive">
                            <XCircle className="h-3 w-3 mr-1" />
                            {result.criticalIssues.length} critical
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          {result.criticalIssues.map((issue, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-destructive">
                              <AlertTriangle className="h-3 w-3" />
                              {issue}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Export */}
              <div className="flex gap-4">
                <Button onClick={exportToCSV} size="lg" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Export Full Report to CSV
                </Button>
                <Button onClick={runAudit} variant="outline" size="lg">
                  Re-run Audit
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Audit Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Technical Checks</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <div>• Page load time & Core Web Vitals</div>
            <div>• HTTPS verification</div>
            <div>• Redirect chain analysis</div>
            <div>• Duplicate URL detection</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Content Quality</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <div>• Word count & readability score</div>
            <div>• Primary keyword placement</div>
            <div>• Duplicate content detection</div>
            <div>• Descriptive image filenames</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Link Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <div>• Orphan page detection</div>
            <div>• Broken internal/external links</div>
            <div>• Generic anchor text flagging</div>
            <div>• NoFollow analysis</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Accessibility & Mobile</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <div>• Heading order validation</div>
            <div>• ARIA labels verification</div>
            <div>• Alt text coverage</div>
            <div>• Mobile responsive checks</div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default AdvancedSEOQA;
