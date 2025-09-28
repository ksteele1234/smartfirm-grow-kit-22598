// CMS data types for template system
export interface CMSPageData {
  id: string;
  title: string;
  slug: string;
  metaDescription?: string;
  content: any;
}

export interface ServicePageData extends CMSPageData {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage?: string;
  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    details?: string[];
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

export interface SolutionPageData extends CMSPageData {
  heroTitle: string;
  heroSubtitle: string;
  problemStatement: string;
  solutionOverview: string;
  keyBenefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

export interface IndustryPageData extends CMSPageData {
  heroTitle: string;
  heroSubtitle: string;
  industryOverview: string;
  challenges: Array<{
    title: string;
    description: string;
    solution: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  caseStudies: Array<{
    title: string;
    client: string;
    result: string;
    link: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

export interface SuccessStoryData extends CMSPageData {
  clientName: string;
  clientLogo?: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
    image?: string;
  };
  services: string[];
}

export interface ResourcePageData extends CMSPageData {
  heroTitle: string;
  heroSubtitle: string;
  category: string;
  readTime?: number;
  publishDate: string;
  author?: {
    name: string;
    image?: string;
    bio?: string;
  };
  content: string;
  relatedResources?: Array<{
    title: string;
    excerpt: string;
    link: string;
    category: string;
  }>;
  downloadLink?: string;
}