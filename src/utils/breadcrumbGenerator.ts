export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Mapping for custom breadcrumb names (from keyword CSV or manual entries)
const BREADCRUMB_NAME_MAP: Record<string, string> = {
  '/solutions/client-retention/': 'CPA Client Retention Strategies',
  '/solutions/stop-losing-clients-to-tech-savvy-cpas/': 'Stop Losing Clients',
  '/solutions/get-more-referrals-for-cpa-firm-without-asking/': 'Get More Referrals',
  '/solutions/work-less-earn-more-as-a-cpa/': 'Work Less, Earn More',
  '/solutions/grow-accounting-firm-without-growing-pains/': 'Grow Without Growing Pains',
  '/solutions/protect-accounting-practice-from-data-breaches/': 'Protect Your Practice',
  '/solutions/scale-accounting-firm-without-chaos/': 'Scale Your Firm',
  '/solutions/retention-strategies/': 'Retention Strategies',
  '/services/marketing-automation-for-accounting-firms/': 'Marketing Automation',
  '/services/seo-for-accounting-firms/': 'SEO for Accountants',
  '/services/website-design-for-accounting-firms/': 'Website Design',
  '/services/content-marketing-for-accounting-firms/': 'Content Marketing',
  '/services/email-marketing-for-accounting-firms/': 'Email Marketing',
  '/services/social-media-management-for-accounting-firms/': 'Social Media Management',
  '/services/automated-lead-follow-up-for-accounting-firms/': 'Automated Lead Follow-Up',
  '/services/client-review-generation/': 'Client Review Generation',
  '/services/reputation-management-for-cpa-firms/': 'Online Reputation Management',
  '/services/technology-consulting-for-accounting-firms/': 'Technology Solutions',
  '/services/business-optimization-for-accounting-firms/': 'Business Optimization',
  '/services/marketing-strategy-integration-for-accounting-firms/': 'Strategy & Integration',
  '/services/fractional-cio-for-accounting-firms/': 'Executive Services',
  '/industries/marketing-for-audit-firms/': 'Audit & Assurance Marketing',
  '/industries/marketing-for-bookkeeping-firms/': 'Bookkeeping Services Marketing',
  '/industries/automation-for-tax-preparation-firms/': 'Tax Preparation Marketing',
  '/industries/business-advisory/': 'Business Advisory Marketing',
  // Use NEW canonical paths, not old redirect paths
  '/industries/': 'Industries We Serve',
  '/services/': 'Our Services',
  '/solutions/': 'Solutions',
  '/tools/': 'Tools & Calculators',
  '/resources/': 'Resources',
  '/marketing-agency-for-accounting-firms/': 'About Us',
  '/accounting-firm-automation-consultation/': 'Contact',
  '/get-started-accounting-firm-automation/': 'Get Started',
  '/faq/': 'FAQ',
  '/privacy-policy/': 'Privacy Policy',
  '/terms-of-service/': 'Terms of Service',
  '/cookie-policy/': 'Cookie Policy',
};

export const generateBreadcrumbs = (
  pathname: string,
  pageTitle?: string
): BreadcrumbItem[] => {
  // Homepage has no breadcrumbs
  if (pathname === '/' || pathname === '') {
    return [];
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' }
  ];

  const segments = pathname.split('/').filter(Boolean);

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Use custom name if available, otherwise format from slug
    let segmentName: string;
    if (isLast && pageTitle) {
      // Use provided page title for the last segment
      segmentName = pageTitle;
    } else if (BREADCRUMB_NAME_MAP[currentPath]) {
      // Use mapped name
      segmentName = BREADCRUMB_NAME_MAP[currentPath];
    } else {
      // Format from slug
      segmentName = formatSegmentName(segment);
    }

    // Always add trailing slash for Netlify Pretty URLs compatibility
    const urlWithSlash = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

    breadcrumbs.push({
      name: segmentName,
      url: urlWithSlash
    });
  });

  return breadcrumbs;
};

const formatSegmentName = (segment: string): string => {
  // Convert 'marketing-automation' -> 'Marketing Automation'
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
