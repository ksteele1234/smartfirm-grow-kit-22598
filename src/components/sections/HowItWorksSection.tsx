import { Phone, FileText, Rocket, CheckCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeometricDivider, FloatingShapes, AccentLine } from "@/components/ui/visual-accents";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Book a Call",
      description: "Tell us about your firm's growth goals."
    },
    {
      icon: FileText,
      number: "02", 
      title: "Get a Custom Plan",
      description: "We'll map out a tailored strategy for accountants, CPAs, or bookkeepers."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Grow", 
      description: "Implement automation, SEO, and marketing systems that drive predictable growth."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background-light relative overflow-hidden">
      <FloatingShapes variant="triangles" />
      <div className="container relative mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#647FBC] mb-6">
            Your Path to Growth with 
            <span className="text-[#14b8a6] block">Marketing Automation for Accountants</span>
          </h2>
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
                    <h3 className="text-2xl font-heading font-bold text-[#243b55] mb-4">
                      {step.title}
                    </h3>
                    <p className={`text-text-secondary leading-relaxed max-w-md mx-auto ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center elevation-1 group-hover:elevation-2 transition-all duration-300 scale-feedback">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/10 border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
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
          <div className="bg-white rounded-2xl p-8 lg:p-12 elevation-1 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-[#243b55] mb-4">
              Ready to Get Started?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" className="group" asChild>
                <a href="/get-started">
                  <Rocket className="mr-2 h-5 w-5" />
                  Book My Free Growth Strategy Call
                  <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="hero" className="group" asChild>
                <a href="#how-it-works">
                  <Eye className="mr-2 h-5 w-5" />
                  Show Me the System
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