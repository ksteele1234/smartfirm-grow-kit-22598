import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

/**
 * Static Tag Cloud Component
 * 
 * IMPORTANT: This component uses a hardcoded list of tags to ensure
 * all tag links appear in the initial HTML render (for SEO prerendering).
 * 
 * When new tags are added to the database, they should also be added here.
 * Query to get all tags: SELECT slug, name FROM blog_tags ORDER BY name;
 */
const ALL_TAGS = [
  { slug: "2026", name: "2026" },
  { slug: "accounting-automation", name: "Accounting Automation" },
  { slug: "accounting-firm-growth", name: "Accounting Firm Growth" },
  { slug: "accounting-firm-lead-generation", name: "Accounting Firm Lead Generation" },
  { slug: "administrative-burden", name: "Administrative Burden" },
  { slug: "analytics", name: "Analytics" },
  { slug: "best-practices", name: "Best Practices" },
  { slug: "billing-automation", name: "Billing Automation" },
  { slug: "bookkeepers", name: "Bookkeepers" },
  { slug: "burnout", name: "Burnout" },
  { slug: "business-strategy", name: "Business Strategy" },
  { slug: "case-studies", name: "Case Studies" },
  { slug: "change-management", name: "Change Management" },
  { slug: "client-acquisition", name: "Client Acquisition" },
  { slug: "client-communication", name: "Client Communication" },
  { slug: "client-experience", name: "Client Experience" },
  { slug: "client-portal", name: "Client Portal" },
  { slug: "client-retention", name: "Client Retention" },
  { slug: "cloud-software", name: "Cloud Software" },
  { slug: "competitive-advantage", name: "Competitive Advantage" },
  { slug: "compliance", name: "Compliance" },
  { slug: "cost-savings", name: "Cost Savings" },
  { slug: "cpa-firms", name: "CPA Firms" },
  { slug: "cpa-marketing", name: "CPA Marketing" },
  { slug: "crm", name: "CRM" },
  { slug: "data-entry", name: "Data Entry" },
  { slug: "digital-transformation", name: "Digital Transformation" },
  { slug: "document-automation", name: "Document Automation" },
  { slug: "document-management", name: "Document Management" },
  { slug: "efficiency", name: "Efficiency" },
  { slug: "error-reduction", name: "Error Reduction" },
  { slug: "firm-capacity", name: "Firm Capacity" },
  { slug: "firm-growth", name: "Firm Growth" },
  { slug: "firm-owners", name: "Firm Owners" },
  { slug: "how-to-guide", name: "How-To Guide" },
  { slug: "implementation", name: "Implementation" },
  { slug: "integration", name: "Integration" },
  { slug: "invoice-follow-up", name: "Invoice Follow-Up" },
  { slug: "local-seo-for-cpas", name: "Local SEO for CPAs" },
  { slug: "manual-processes", name: "Manual Processes" },
  { slug: "modern-accounting", name: "Modern Accounting" },
  { slug: "performance-metrics", name: "Performance Metrics" },
  { slug: "practice-management", name: "Practice Management" },
  { slug: "process-improvement", name: "Process Improvement" },
  { slug: "productivity", name: "Productivity" },
  { slug: "profitability", name: "Profitability" },
  { slug: "quality-improvement", name: "Quality Improvement" },
  { slug: "reporting", name: "Reporting" },
  { slug: "reputation-management", name: "Reputation Management" },
  { slug: "revenue-growth", name: "Revenue Growth" },
  { slug: "roi", name: "ROI" },
  { slug: "roi-analysis", name: "ROI Analysis" },
  { slug: "sales-process", name: "Sales Process" },
  { slug: "scalability", name: "Scalability" },
  { slug: "scheduling", name: "Scheduling" },
  { slug: "security", name: "Security" },
  { slug: "small-firms", name: "Small Firms" },
  { slug: "software", name: "Software" },
  { slug: "staff-retention", name: "Staff Retention" },
  { slug: "tax-accountants", name: "Tax Accountants" },
  { slug: "tax-automation", name: "Tax Automation" },
  { slug: "tax-preparers", name: "Tax Preparers" },
  { slug: "tax-season", name: "Tax Season" },
  { slug: "technology", name: "Technology" },
  { slug: "technology-adoption", name: "Technology Adoption" },
  { slug: "time-management", name: "Time Management" },
  { slug: "time-savings", name: "Time Savings" },
  { slug: "training", name: "Training" },
  { slug: "trends", name: "Trends" },
  { slug: "workflow-automation", name: "Workflow Automation" },
  { slug: "work-life-balance", name: "Work-Life Balance" },
];

interface TagCloudProps {
  title?: string;
  className?: string;
  showIcon?: boolean;
}

const TagCloud = ({ 
  title = "Browse All Topics", 
  className = "",
  showIcon = true,
}: TagCloudProps) => {
  return (
    <div className={`${className}`} data-testid="tag-cloud">
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {showIcon && <Tag className="w-5 h-5 text-muted-foreground" />}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {ALL_TAGS.map((tag) => (
          <Link key={tag.slug} to={`/blog/tags/${tag.slug}/`}>
            <Badge 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-sm"
            >
              {tag.name}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
