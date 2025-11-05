const PricingComparisonOverview = () => {
  return (
    <section className="py-16 md:py-section bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Competitive Pricing Analysis
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-container-3xl mx-auto">
          {/* Left Column: Key Metrics */}
          <div className="flex flex-col justify-evenly gap-8">
            <div className="bg-slate-50 border-l-[5px] border-primary p-8">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Competitor Annual Cost
              </div>
              <div className="text-5xl font-extrabold text-foreground leading-tight">
                $25K - $120K
              </div>
              <div className="text-base text-muted-foreground mt-2">
                Per year (variable pricing)
              </div>
            </div>
            
            <div className="bg-slate-50 border-l-[5px] border-primary p-8">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                SmartFirm Annual Cost
              </div>
              <div className="text-5xl font-extrabold text-foreground leading-tight">
                $28,900
              </div>
              <div className="text-base text-muted-foreground mt-2">
                Year 1 ($14,500 + $14,400)
              </div>
            </div>
            
            <div className="bg-primary/5 border-l-[5px] border-primary p-8">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                Estimated Annual Savings
              </div>
              <div className="text-5xl lg:text-[52px] font-extrabold text-primary leading-tight">
                $86K - $164K
              </div>
              <div className="text-base text-muted-foreground mt-2">
                Based on comparable service packages
              </div>
            </div>
          </div>
          
          {/* Right Column: Comparison Bars */}
          <div className="flex flex-col justify-evenly gap-8">
            <div>
              <div className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                Up Front Costs
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    Competitor
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-secondary rounded-sm min-w-[130px]" style={{width: '360px', maxWidth: '100%'}}>
                    $33,500
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    SmartFirm
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-primary rounded-sm min-w-[130px]" style={{width: '155px', maxWidth: '100%'}}>
                    $14,500
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                Monthly Recurring (Low Estimate)
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    Competitor
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-secondary rounded-sm min-w-[130px]" style={{width: '360px', maxWidth: '100%'}}>
                    $6,820/month
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    SmartFirm
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-primary rounded-sm min-w-[130px]" style={{width: '140px', maxWidth: '100%'}}>
                    $1,200/month
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                Monthly Recurring (High Estimate)
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    Competitor
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-secondary rounded-sm min-w-[130px]" style={{width: '360px', maxWidth: '100%'}}>
                    $13,295/month
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-28 text-base font-semibold text-muted-foreground">
                    SmartFirm
                  </div>
                  <div className="h-11 flex items-center px-5 text-lg font-bold text-white bg-primary rounded-sm min-w-[130px]" style={{width: '140px', maxWidth: '100%'}}>
                    $1,200/month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonOverview;
