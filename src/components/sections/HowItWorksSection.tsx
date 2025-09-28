import { Phone, FileText, Rocket, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Book a Call",
      description: "Schedule a free 30-minute strategy session where we'll understand your goals, challenges, and current marketing efforts."
    },
    {
      icon: FileText,
      number: "02", 
      title: "Get a Plan",
      description: "We'll design a custom marketing strategy tailored to your firm's needs, complete with timelines and expected outcomes."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Grow",
      description: "We'll implement the plan and manage everything for you, while you focus on serving clients and growing your practice."
    }
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Your Path to
            <span className="text-teal block">Effortless Growth</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our proven 3-step process takes the complexity out of marketing, so you can focus on what you do best.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute top-0 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-teal to-primary opacity-30"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Step Number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center shadow-soft group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-light border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-teal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Check Mark */}
                  <div className="mt-6 flex justify-center">
                    <CheckCircle className="h-6 w-6 text-teal opacity-60" />
                  </div>
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
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join hundreds of accounting firms that have transformed their marketing with SmartFirm. Your growth journey starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-lg rounded-xl font-semibold h-16 px-8 text-lg transition-all duration-300 group">
                Book Your Free Strategy Call
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground rounded-xl font-medium h-16 px-8 text-lg transition-all duration-300">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;