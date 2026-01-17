import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, DollarSign, TrendingUp, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const commonTools = [
  { id: "quickbooks", name: "QuickBooks", avgCost: 50 },
  { id: "xero", name: "Xero", avgCost: 42 },
  { id: "karbon", name: "Karbon", avgCost: 90 },
  { id: "canopy", name: "Canopy", avgCost: 65 },
  { id: "hubspot", name: "HubSpot", avgCost: 120 },
  { id: "mailchimp", name: "Mailchimp", avgCost: 35 },
  { id: "slack", name: "Slack", avgCost: 25 },
  { id: "dropbox", name: "Dropbox Business", avgCost: 20 },
  { id: "zoom", name: "Zoom Pro", avgCost: 20 },
  { id: "calendly", name: "Calendly", avgCost: 15 },
  { id: "docusign", name: "DocuSign", avgCost: 45 },
  { id: "lastpass", name: "LastPass Business", avgCost: 36 }
];

const TechStackROICalculator = () => {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const [customTools, setCustomTools] = useState<Array<{ name: string; cost: number }>>([]);
  const [teamSize, setTeamSize] = useState<number>(1);
  const [showResults, setShowResults] = useState(false);

  const handleToolToggle = (toolId: string) => {
    const newSelected = new Set(selectedTools);
    if (newSelected.has(toolId)) {
      newSelected.delete(toolId);
    } else {
      newSelected.add(toolId);
    }
    setSelectedTools(newSelected);
  };

  const addCustomTool = () => {
    setCustomTools([...customTools, { name: '', cost: 0 }]);
  };

  const updateCustomTool = (index: number, field: 'name' | 'cost', value: string | number) => {
    const updated = [...customTools];
    updated[index] = { ...updated[index], [field]: value };
    setCustomTools(updated);
  };

  const removeCustomTool = (index: number) => {
    setCustomTools(customTools.filter((_, i) => i !== index));
  };

  const calculateCurrentCosts = () => {
    let monthlyCost = 0;

    // Selected common tools
    selectedTools.forEach(toolId => {
      const tool = commonTools.find(t => t.id === toolId);
      if (tool) {
        monthlyCost += tool.avgCost * teamSize;
      }
    });

    // Custom tools
    customTools.forEach(tool => {
      if (tool.cost > 0) {
        monthlyCost += tool.cost;
      }
    });

    return {
      monthly: monthlyCost,
      annual: monthlyCost * 12
    };
  };

  const calculateConsolidatedCosts = () => {
    // SmartFirm integrated platform pricing tiers
    const pricing = {
      solo: { monthly: 149, features: "Core automation + marketing" },
      small: { monthly: 299, features: "Full automation + CRM + advanced marketing" },
      growing: { monthly: 499, features: "Complete suite + custom integrations" },
      enterprise: { monthly: 799, features: "Enterprise features + dedicated support" }
    };

    let recommendedTier;
    if (teamSize === 1) recommendedTier = pricing.solo;
    else if (teamSize <= 5) recommendedTier = pricing.small;
    else if (teamSize <= 15) recommendedTier = pricing.growing;
    else recommendedTier = pricing.enterprise;

    return {
      monthly: recommendedTier.monthly,
      annual: recommendedTier.monthly * 12,
      features: recommendedTier.features
    };
  };

  const calculateSavings = () => {
    const current = calculateCurrentCosts();
    const consolidated = calculateConsolidatedCosts();

    return {
      monthlySavings: current.monthly - consolidated.monthly,
      annualSavings: current.annual - consolidated.annual,
      percentageSavings: current.monthly > 0 ? ((current.monthly - consolidated.monthly) / current.monthly * 100) : 0
    };
  };

  const getEfficiencyGains = () => {
    const toolCount = selectedTools.size + customTools.filter(t => t.cost > 0).length;

    if (toolCount >= 8) {
      return {
        timesSaved: "15-20 hours/week",
        efficiency: "60-80%",
        description: "Major efficiency gains from eliminating tool switching and manual integrations"
      };
    } else if (toolCount >= 5) {
      return {
        timesSaved: "10-15 hours/week",
        efficiency: "40-60%",
        description: "Significant time savings from streamlined workflows"
      };
    } else if (toolCount >= 3) {
      return {
        timesSaved: "5-10 hours/week",
        efficiency: "25-40%",
        description: "Moderate efficiency improvements from tool consolidation"
      };
    } else {
      return {
        timesSaved: "2-5 hours/week",
        efficiency: "10-25%",
        description: "Some efficiency gains from reduced complexity"
      };
    }
  };

  if (showResults) {
    const current = calculateCurrentCosts();
    const consolidated = calculateConsolidatedCosts();
    const savings = calculateSavings();
    const efficiency = getEfficiencyGains();

    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Tech Stack ROI Calculator Results | SmartFirm"
          description="Your tech stack analysis results with cost savings and efficiency recommendations."
          canonicalUrl="https://smartfirm.io/tools/tech-stack-roi-calculator/"
          pageType="tool"
          toolName="Tech Stack ROI Calculator"
          noindex={false}
        />
        <Header />
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <Link to="/tools/" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Your Tech Stack ROI Analysis</CardTitle>
                <CardDescription>See how much you could save with automation and consolidation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="grid md:grid-cols-2 gap-sm">
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-700">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Current Tech Stack
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-600">${current.monthly.toLocaleString()}/mo</div>
                      <div className="text-sm text-red-700">${current.annual.toLocaleString()}/year</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {selectedTools.size + customTools.filter(t => t.cost > 0).length} tools for {teamSize} team member{teamSize !== 1 ? 's' : ''}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        SmartFirm Consolidated
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">${consolidated.monthly.toLocaleString()}/mo</div>
                      <div className="text-sm text-green-700">${consolidated.annual.toLocaleString()}/year</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {consolidated.features}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {savings.monthlySavings > 0 && (
                  <div className="text-center bg-primary/10 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-2">Potential Savings</h3>
                    <div className="text-4xl font-bold text-green-600">${savings.annualSavings.toLocaleString()}</div>
                    <div className="text-lg text-green-700">per year</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      That's {savings.percentageSavings.toFixed(0)}% savings on your tech stack costs
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-sm">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Efficiency Gains</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="font-semibold">Time Saved:</div>
                          <div className="text-primary">{efficiency.timesSaved}</div>
                        </div>
                        <div>
                          <div className="font-semibold">Efficiency Improvement:</div>
                          <div className="text-primary">{efficiency.efficiency}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {efficiency.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Additional Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Unified data across all functions</li>
                        <li>✓ Reduced training time for staff</li>
                        <li>✓ Better security with single login</li>
                        <li>✓ Improved client experience</li>
                        <li>✓ Real-time reporting and analytics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Consolidate Your Tech Stack?</h3>
                  <p className="text-muted-foreground mb-4">
                    See how SmartFirm can replace {selectedTools.size + customTools.filter(t => t.cost > 0).length} tools with one powerful platform.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Consolidation Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Accounting Firm Technology ROI Calculator | SmartFirm"
        description="Calculate your accounting firm technology ROI by inputting software costs, time savings, error reduction, and capacity gains to justify technology investments."
        canonicalUrl="https://smartfirm.io/tools/tech-stack-roi-calculator/"
        pageType="tool"
        toolName="Tech Stack ROI Calculator"
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/tools/" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>

          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Accounting Firm Technology Roi | SmartFirm</h1>
          <div id="sf-keyword-intro">
            <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
              Our accounting firm technology ROI calculator helps you quantify the return on technology investments by measuring time savings, error reduction, capacity increases, and client satisfaction improvements.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Tech Stack ROI Calculator
              </CardTitle>
              <CardDescription>
                Calculate potential savings from consolidating your current tools into an integrated platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <Label htmlFor="teamSize" className="text-base font-medium">Team Size</Label>
                <Input
                  id="teamSize"
                  type="number"
                  min="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                  className="mt-2 max-w-xs"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Select Your Current Tools</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {commonTools.map((tool) => (
                    <Card key={tool.id} className="p-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={tool.id}
                          checked={selectedTools.has(tool.id)}
                          onCheckedChange={() => handleToolToggle(tool.id)}
                        />
                        <div className="flex-1">
                          <label htmlFor={tool.id} className="font-medium cursor-pointer">
                            {tool.name}
                          </label>
                          <div className="text-sm text-muted-foreground">
                            ${tool.avgCost}/month per user
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Custom Tools</h3>
                  <Button variant="outline" onClick={addCustomTool}>
                    Add Custom Tool
                  </Button>
                </div>
                {customTools.map((tool, index) => (
                  <Card key={index} className="p-4 mb-3">
                    <div className="flex items-center space-x-3">
                      <Input
                        placeholder="Tool name"
                        value={tool.name}
                        onChange={(e) => updateCustomTool(index, 'name', e.target.value)}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        placeholder="Monthly cost"
                        value={tool.cost || ''}
                        onChange={(e) => updateCustomTool(index, 'cost', parseFloat(e.target.value) || 0)}
                        className="w-32"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeCustomTool(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="pt-6 border-t">
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={selectedTools.size === 0 && customTools.filter(t => t.cost > 0).length === 0}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Calculate My ROI
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechStackROICalculator;