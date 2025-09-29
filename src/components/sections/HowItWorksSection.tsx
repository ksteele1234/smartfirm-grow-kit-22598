import { Phone, FileText, Rocket, CheckCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricDivider, FloatingShapes, AccentLine } from "@/components/ui/visual-accents";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Book a Call",
      description: "Schedule a free 30-minute strategy session. We'll uncover your biggest opportunities for growth and highlight where firms like yours are losing leads."
    },
    {
      icon: FileText,
      number: "02", 
      title: "Get a Plan",
      description: "Receive a custom growth strategy with timelines, expected outcomes, and ROI projections—all aligned with your accounting tech stack (QuickBooks, Xero, Karbon, Canopy)."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Grow", 
      description: "We implement and manage everything for you. Most firms see new client inquiries within 30 days and measurable improvements in retention by 90 days."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background-light relative overflow-hidden">
      <FloatingShapes variant="triangles" />
      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Your Path to 
            <span className="text-teal block">Effortless Growth</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our proven 3-step process takes the guesswork out of marketing so you can focus on client service while we handle the heavy lifting.
          </p>
        </div>
        
        <GeometricDivider variant="zigzag" />
        {/* Steps */}
        <div className="relative">
          {/* Connection Line with Accent */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <AccentLine className="opacity-30" />
            </div>
          </div>

          {/* Asymmetrical Step Layout */}
          <div className="space-y-16 stagger-container">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center shadow-soft group-hover:shadow-lg transition-all duration-300 scale-feedback">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-light border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                    {/* Connector for next step */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-8">
                        <AccentLine orientation="vertical" className="h-16" variant="dashed" />
                      </div>
                    )}
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Join hundreds of accounting firms that have transformed their marketing with SmartFirm. Your growth journey starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" className="group" asChild>
                <a href="/get-started">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start My Growth Plan
                  <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="hero" className="group" asChild>
                <a href="/services">
                  <Eye className="mr-2 h-5 w-5" />
                  Learn More About the Process
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;