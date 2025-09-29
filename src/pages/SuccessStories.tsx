import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Star, 
  Quote,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowRight
} from "lucide-react";

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "SmartFirm transformed our client acquisition process. We went from struggling to find leads to having a consistent pipeline of qualified prospects.",
      name: "Sarah Johnson",
      title: "Managing Partner",
      firm: "Johnson & Associates CPA"
    },
    {
      quote: "The marketing automation system saved us 15 hours per week while increasing our client retention rate by 40%.",
      name: "Michael Chen",
      title: "Founder",
      firm: "Chen Tax Services"
    },
    {
      quote: "Within six months, we doubled our revenue and streamlined our operations. SmartFirm's approach is exactly what growing firms need.",
      name: "Lisa Rodriguez",
      title: "Owner",
      firm: "Rodriguez Accounting Group"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "From Overwhelmed to Organized: 300% Lead Increase",
      clientName: "Pinnacle Tax Solutions",
      industry: "Tax Preparation",
      problemSolved: "Lead Generation",
      firmSize: "Small",
      summary: "How a struggling tax prep firm tripled their qualified leads through strategic marketing automation.",
      thumbnail: "case-study-1",
      featured: true
    },
    {
      id: 2,
      title: "Scaling Smart: 40-Hour Workweek Achievement",
      clientName: "Metro Bookkeeping Services",
      industry: "Bookkeeping",
      problemSolved: "Operational Efficiency",
      firmSize: "Mid-sized",
      summary: "Transforming a chaotic practice into a well-oiled machine with streamlined processes.",
      thumbnail: "case-study-2"
    },
    {
      id: 3,
      title: "Client Retention Revolution: 85% Increase",
      clientName: "Alpine Financial Advisors",
      industry: "Financial Advisory",
      problemSolved: "Client Retention",
      firmSize: "Small",
      summary: "Building lasting client relationships through systematic follow-up and value delivery.",
      thumbnail: "case-study-3"
    },
    {
      id: 4,
      title: "Solo to Team: Successful Practice Expansion",
      clientName: "Peterson CPA",
      industry: "General Accounting",
      problemSolved: "Business Growth",
      firmSize: "Solo",
      summary: "How a solo practitioner built a team of 8 while maintaining quality and profitability.",
      thumbnail: "case-study-4"
    },
    {
      id: 5,
      title: "Digital Transformation: 50% Cost Reduction",
      clientName: "Riverbank Accounting",
      industry: "Bookkeeping",
      problemSolved: "Technology Integration",
      firmSize: "Mid-sized",
      summary: "Leveraging technology to cut operational costs while improving service quality.",
      thumbnail: "case-study-5"
    },
    {
      id: 6,
      title: "Niche Mastery: Becoming the Go-To Expert",
      clientName: "Healthcare CPA Solutions",
      industry: "Specialized Services",
      problemSolved: "Market Positioning",
      firmSize: "Small",
      summary: "Positioning as the premier healthcare accounting firm in their region.",
      thumbnail: "case-study-6"
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCaseStudies = caseStudies.filter(study => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "industry") return selectedCategory === "all" || study.industry === selectedCategory;
    if (selectedFilter === "problem") return selectedCategory === "all" || study.problemSolved === selectedCategory;
    if (selectedFilter === "size") return selectedCategory === "all" || study.firmSize === selectedCategory;
    return true;
  });

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-teal">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Real Results, Real Growth: SmartFirm Success Stories
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore how accounting firms like yours have achieved significant growth and efficiency with SmartFirm's tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="white-outline-on-dark" size="hero">
              Read All Case Studies
            </Button>
            <Button variant="hero" size="hero">
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
            Proof of Partnership: Our Clients' Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            These aren't just success stories—they're proof of what's possible when you partner with SmartFirm.
            Every firm featured here started with challenges similar to yours and achieved transformational results 
            through our proven methodologies and dedicated support.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-20 bg-background-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Success Story</Badge>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Featured Client Achievement
              </h2>
            </div>
            
            <Card className="max-w-4xl mx-auto shadow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                      {featuredCaseStudy.title}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {featuredCaseStudy.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="secondary">{featuredCaseStudy.industry}</Badge>
                      <Badge variant="outline">{featuredCaseStudy.firmSize} Firm</Badge>
                      <Badge variant="outline">{featuredCaseStudy.problemSolved}</Badge>
                    </div>
                    <Button className="group">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg p-8 text-center">
                    <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-heading font-semibold text-primary mb-2">
                      {featuredCaseStudy.clientName}
                    </h4>
                    <p className="text-text-secondary">
                      Client logo and key metrics would be displayed here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Case Studies Grid with Filters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Explore More Success Stories
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Filter by industry, challenge solved, or firm size to find stories most relevant to your situation.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all" onClick={() => setSelectedFilter("all")}>All Stories</TabsTrigger>
                <TabsTrigger value="industry" onClick={() => setSelectedFilter("industry")}>By Industry</TabsTrigger>
                <TabsTrigger value="problem" onClick={() => setSelectedFilter("problem")}>By Challenge</TabsTrigger>
                <TabsTrigger value="size" onClick={() => setSelectedFilter("size")}>By Firm Size</TabsTrigger>
              </TabsList>
              
              <TabsContent value="industry" className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant={selectedCategory === "all" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Industries
                  </Button>
                  <Button 
                    variant={selectedCategory === "Tax Preparation" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Tax Preparation")}
                  >
                    Tax Preparation
                  </Button>
                  <Button 
                    variant={selectedCategory === "Bookkeeping" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Bookkeeping")}
                  >
                    Bookkeeping
                  </Button>
                  <Button 
                    variant={selectedCategory === "Financial Advisory" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Financial Advisory")}
                  >
                    Financial Advisory
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="problem" className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant={selectedCategory === "all" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Challenges
                  </Button>
                  <Button 
                    variant={selectedCategory === "Lead Generation" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Lead Generation")}
                  >
                    Lead Generation
                  </Button>
                  <Button 
                    variant={selectedCategory === "Operational Efficiency" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Operational Efficiency")}
                  >
                    Operations
                  </Button>
                  <Button 
                    variant={selectedCategory === "Client Retention" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Client Retention")}
                  >
                    Client Retention
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="size" className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button 
                    variant={selectedCategory === "all" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Sizes
                  </Button>
                  <Button 
                    variant={selectedCategory === "Solo" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Solo")}
                  >
                    Solo Practice
                  </Button>
                  <Button 
                    variant={selectedCategory === "Small" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Small")}
                  >
                    Small Firm
                  </Button>
                  <Button 
                    variant={selectedCategory === "Mid-sized" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setSelectedCategory("Mid-sized")}
                  >
                    Mid-sized Firm
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="shadow-card hover:shadow-soft transition-shadow group cursor-pointer">
                <CardHeader>
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg h-40 mb-4 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary mb-4 text-sm">
                    {study.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="secondary" className="text-xs">{study.industry}</Badge>
                    <Badge variant="outline" className="text-xs">{study.firmSize}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{study.clientName}</span>
                    <ArrowRight className="w-4 h-4 text-text-light group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear directly from accounting firm owners who have transformed their practices with SmartFirm.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-text-primary mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-primary text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-text-secondary">
                  {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].firm}
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-text-light'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal to-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Let SmartFirm help you achieve your business goals. Contact us today to discuss your unique needs and discover how we can transform your accounting practice.
          </p>
          <Button variant="white-on-dark" size="hero">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Free Strategy Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;