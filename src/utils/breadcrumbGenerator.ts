export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Mapping for custom breadcrumb names (from keyword CSV or manual entries)
const BREADCRUMB_NAME_MAP: Record<string, string> = {
  '/solutions/client-retention-cpa-client-retention-strategies': 'CPA Client Retention Strategies',
  '/solutions/stop-losing-clients': 'Stop Losing Clients',
  '/solutions/get-more-referrals': 'Get More Referrals',
  '/solutions/work-less-earn-more': 'Work Less, Earn More',
  '/solutions/grow-without-pains': 'Grow Without Growing Pains',
  '/solutions/protect-practice': 'Protect Your Practice',
  '/solutions/scale-firm': 'Scale Your Firm',
  '/solutions/client-retention': 'Client Retention',
  '/solutions/retention-strategies': 'Retention Strategies',
  '/services/marketing-automation': 'Marketing Automation',
  '/services/seo-for-accountants': 'SEO for Accountants',
  '/services/website-design': 'Website Design',
  '/services/content-marketing': 'Content Marketing',
  '/services/email-marketing': 'Email Marketing',
  '/services/social-media-management': 'Social Media Management',
  '/services/automated-lead-follow-up': 'Automated Lead Follow-Up',
  '/services/client-review-generation': 'Client Review Generation',
  '/services/online-reputation-management': 'Online Reputation Management',
  '/services/technology-solutions': 'Technology Solutions',
  '/services/business-optimization': 'Business Optimization',
  '/services/strategy-integration': 'Strategy & Integration',
  '/services/executive-services': 'Executive Services',
  '/industries/audit-assurance': 'Audit & Assurance Marketing',
  '/industries/bookkeeping-services': 'Bookkeeping Services Marketing',
  '/industries/tax-preparation': 'Tax Preparation Marketing',
  '/industries/business-advisory': 'Business Advisory Marketing',
  '/industries': 'Industries We Serve',
  '/services': 'Our Services',
  '/solutions': 'Solutions',
  '/tools': 'Tools & Calculators',
  '/resources': 'Resources',
  '/about': 'About Us',
  '/contact': 'Contact',
  '/get-started': 'Get Started',
  '/success-stories': 'Success Stories',
  '/faq': 'FAQ',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/cookies': 'Cookie Policy',
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
    
    breadcrumbs.push({
      name: segmentName,
      url: currentPath
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
