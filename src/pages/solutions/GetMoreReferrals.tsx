import SolutionPageTemplate from "@/templates/SolutionPageTemplate";
import { SolutionPageData } from "@/types/cms";
import { getFaqsForPath } from "@/data/faqContent";

const GetMoreReferrals = () => {
  const solutionFaqs = getFaqsForPath("/solutions/get-more-referrals-without-asking");
  const solutionData: SolutionPageData = {
    id: "get-more-referrals",
    title: "Automated Client Referral System for CPAs | SmartFirm",
    slug: "get-more-referrals-without-asking",
    metaDescription: "Get more referrals without asking through a client referral system for CPAs delivering exceptional experiences and simplifying client introductions.",
    canonicalUrl: "https://smartfirm.io/solutions/get-more-referrals-without-asking",
    content: {},
    heroTitle: "Client Referral System For CPAs",
    heroSubtitle: "Our automated client referral system for CPAs generates referrals naturally by delivering exceptional client experiences, creating referral-worthy moments, and making it effortless for clients to introduce you.",
    problemStatement: "Most CPAs struggle to get referrals because they're uncomfortable asking, don't have systems to identify satisfied clients, or fail to stay top-of-mind consistently.",
    solutionOverview: "Our referral generation system automatically identifies happy clients, nurtures them into advocates, builds your reputation online, and keeps you top-of-mind year-round.",
    problemSolutionPairs: [
      {
        problem: "Clients only hear from the firm at tax time, so they forget the value you deliver the rest of the year.",
        solution: "Automate education touchpoints—quarterly insights, deadline reminders, and quick wins—that keep you top-of-mind without manual effort."
      },
      {
        problem: "Happy clients want to refer but there is no frictionless way to introduce you to their peers.",
        solution: "Launch a referral hub with shareable links, pre-written emails, and simple intake forms that capture warm introductions instantly."
      },
      {
        problem: "Online reviews are outdated, making prospects wonder if your firm is still active.",
        solution: "Trigger review requests right after key milestones and syndicate the feedback across Google, Yelp, and niche directories automatically."
      }
    ],
    keyBenefits: [
      {
        title: "Turn Happy Clients into Advocates",
        description: "Automatically identify satisfied clients and convert them into active referral sources with proven systems.",
        icon: "Users"
      },
      {
        title: "Get Found by People Looking for CPAs",
        description: "Dominate local search and online directories so referrals can easily find and recommend you.",
        icon: "Search"
      },
      {
        title: "Build Trust Before You Meet",
        description: "Create educational content, testimonials, and case studies that make referrals easy to give.",
        icon: "Shield"
      },
      {
        title: "Stay Top-of-Mind Year-Round",
        description: "Automated newsletters, tax tips, and seasonal reminders keep you memorable to referral sources.",
        icon: "Calendar"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Identify Your Best Advocates",
        description: "We help you find satisfied clients who are most likely to refer using satisfaction tracking and client analysis."
      },
      {
        step: 2,
        title: "Build Your Online Reputation",
        description: "Create compelling content, gather testimonials, and optimize your online presence to make referrals easy."
      },
      {
        step: 3,
        title: "Automate Relationship Nurturing",
        description: "Set up automated communication sequences that keep you top-of-mind without being pushy."
      },
      {
        step: 4,
        title: "Track and Amplify Results",
        description: "Monitor referral sources, optimize your approach, and scale what works best."
      }
    ],
    results: [
      {
        metric: "300%",
        value: "More Referrals",
        description: "Increase referral volume with automated systems"
      },
      {
        metric: "85%",
        value: "Client Advocacy Rate",
        description: "Turn satisfied clients into active advocates"
      },
      {
        metric: "50%",
        value: "Better Referral Quality",
        description: "Attract higher-value clients through referrals"
      }
    ],
    ctaTitle: "Start Getting More Referrals Automatically",
    ctaDescription: "Stop hoping for referrals and start generating them systematically. Book a call to see how we can build your referral engine.",
    faqs: solutionFaqs
  };

  return <SolutionPageTemplate data={solutionData} />;
};

export default GetMoreReferrals;
