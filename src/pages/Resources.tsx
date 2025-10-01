import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  BookOpen, 
  Calculator, 
  FileText, 
  BarChart3, 
  Video,
  Download,
  Star,
  Calendar,
  Mail,
  MessageSquare
} from "lucide-react";
import SEO from "@/components/SEO";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Guides & Whitepapers",
      description: "In-depth articles, e-books, and whitepapers on marketing, automation, and business growth.",
      link: "/resources/guides"
    },
    {
      icon: <Calculator className="h-8 w-8 text-teal" />,
      title: "Tools & Calculators",
      description: "Interactive tools like ROI calculators, profit estimators, and workflow templates.",
      link: "/tools"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Blog",
      description: "Latest articles, industry news, and thought leadership posts.",
      link: "/resources/blog"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal" />,
      title: "Case Studies",
      description: "Real-world examples of client success and transformation stories.",
      link: "/resources/case-studies"
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Webinars & Events",
      description: "Recordings of past webinars and upcoming event schedules.",
      link: "/resources/webinars"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-teal" />,
      title: "FAQ",
      description: "Frequently asked questions about our services and solutions for accounting firms.",
      link: "/faq"
    }
  ];

  const blogPosts = [
    {
      title: "5 Marketing Automation Mistakes That Are Costing You Clients",
      excerpt: "Discover the most common automation pitfalls that accounting firms face and learn how to avoid them for better client acquisition and retention.",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "How to Scale Your Accounting Practice Without Hiring More Staff",
      excerpt: "Learn proven strategies for growing your firm's capacity through technology, automation, and process optimization.",
      date: "March 10, 2024",
      readTime: "12 min read"
    },
    {
      title: "The Ultimate Guide to SEO for Accounting Firms in 2024",
      excerpt: "Everything you need to know about ranking higher in search results and attracting more local clients to your practice.",
      date: "March 5, 2024",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Resources | SmartFirm"
        description="Free guides, tools, calculators, and insights to help accounting professionals grow their firms. Expert CPA marketing resources."
        pageType="default"
        noindex={false}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8">
              Grow Your Firm with Our Expert Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Access a wealth of knowledge, tools, and insights designed to help accounting professionals thrive. 
              From detailed guides to interactive calculators, we've got everything you need for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="hero">
                Explore All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Subscribe to Our Newsletter
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Your Hub for Accounting Firm Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SmartFirm's resource library is your go-to destination for actionable insights, practical tools, and proven strategies. 
              Whether you're looking to automate your marketing, optimize your technology stack, or scale your operations, 
              our expert-curated content provides the guidance you need to succeed.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full border-border bg-background">
                  <CardHeader className="text-center pb-6 px-8 pt-8">
                    <div className="mx-auto mb-6 p-4 rounded-lg bg-accent/30 w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground mb-4">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto px-8 pb-8">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        asChild
                    >
                      <a href={category.link}>
                        {category.title === "Guides & Whitepapers" ? "View All Guides" :
                         category.title === "Tools & Calculators" ? "View All Tools" :
                         category.title === "Blog" ? "Read Our Blog" :
                         category.title === "Case Studies" ? "View Success Stories" :
                         "Watch Webinars"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary to-teal p-10 lg:p-16 text-primary-foreground flex items-center">
                    <div>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                        <Star className="h-4 w-4 mr-2" />
                        Featured Resource
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        The Ultimate Guide to Automated Lead Generation
                      </h3>
                      <p className="text-white/90 mb-8 text-lg leading-relaxed">
                        A comprehensive 50-page guide covering everything from lead magnets to nurture sequences. 
                        Learn how top accounting firms are generating 3x more qualified leads with automation.
                      </p>
                      <div className="flex items-center text-white/80 mb-6">
                        <Download className="h-4 w-4 mr-2" />
                        <span className="text-sm">Free Download • 50 Pages • PDF Format</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center bg-background">
                    <h4 className="font-semibold text-foreground mb-6 text-lg">What You'll Learn:</h4>
                    <ul className="space-y-4 text-muted-foreground mb-10 text-base">
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                        How to create irresistible lead magnets
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                        Email sequences that convert prospects
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                        Landing page optimization strategies
                      </li>
                      <li className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-teal mt-2 mr-4 flex-shrink-0"></div>
                        Automation workflows that work
                      </li>
                    </ul>
                    <Button size="lg" variant="hero">
                      Download Now
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Latest Insights from Our Blog
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay up-to-date with the latest trends, strategies, and insights for growing your accounting practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-background">
                  <CardHeader className="pb-6 px-8 pt-8">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 px-8 pb-8">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border-primary text-primary"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a href="/resources/blog">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="border-border bg-gradient-to-br from-accent/30 to-accent/10">
                <CardHeader className="pb-8 px-10 pt-10">
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-6">
                    Stay Ahead of the Curve
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                    Get our latest resources and insights delivered straight to your inbox. 
                    Join thousands of accounting professionals who trust SmartFirm for industry updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-10 pb-10">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 h-12"
                    />
                    <Button size="lg" variant="hero">
                      Sign Up
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    No spam, unsubscribe at any time. Privacy policy applies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our experts are here to help. Contact us for personalized advice and guidance tailored to your firm's specific needs.
              </p>
              <Button size="lg" variant="hero" asChild>
                <a href="/contact">
                  Speak to an Expert
                  <MessageSquare className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;