import { Link } from "react-router-dom";

// Static list of all published blog posts - renders immediately without API calls
// This ensures blog post links appear in prerendered HTML for SEO
// MAINTENANCE: Update this list when publishing new blog posts
// Current count: 9 posts | Last updated: 2026-01-23
const ALL_BLOG_POSTS = [
  { 
    slug: "key-techniques-to-boost-your-firms-online-reputation", 
    title: "Key Techniques to Boost Your Firm's Online Reputation"
  },
  { 
    slug: "accounting-firm-online-reputation-management", 
    title: "How to Manage Your Firm's Online Reputation Effectively"
  },
  { 
    slug: "ineffective-marketing-strategies-for-accountants", 
    title: "Avoid These Ineffective Marketing Strategies as an Accountant"
  },
  { 
    slug: "accounting-firm-automation-costs", 
    title: "Accounting Firm Automation Costs by Firm Size"
  },
  { 
    slug: "get-accounting-clients", 
    title: "Get Accounting Clients: A Simple, Repeatable System"
  },
  { 
    slug: "accounting-firm-client-acquisition", 
    title: "Accounting Firm Client Acquisition: The Calm, Practical System"
  },
  { 
    slug: "accounting-firm-automation", 
    title: "Accounting Firm Automation: A Practical Guide for Modern CPA Firms"
  },
  { 
    slug: "the-breaking-point-why-accounting-firms-are-automating", 
    title: "The Breaking Point: Why 90% of Accounting Firms Are Automating in 2026"
  },
  { 
    slug: "5-measurable-benefits-of-accounting-firm-automation", 
    title: "The 5 Measurable Benefits of Accounting Firm Automation"
  },
];

const BlogPostList = () => {
  return (
    <ul className="space-y-2">
      {ALL_BLOG_POSTS.map((post) => (
        <li key={post.slug}>
          <Link 
            to={`/blog/${post.slug}/`}
            className="text-primary hover:underline"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostList;
