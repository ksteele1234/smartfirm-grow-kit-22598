import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    monthlyAdSpend: "",
    monthlyLeads: "",
    conversionRate: "",
    averageClientValue: "",
    clientLifetimeMonths: ""
  });
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const adSpend = parseFloat(formData.monthlyAdSpend) || 0;
    const leads = parseFloat(formData.monthlyLeads) || 0;
    const conversionRate = parseFloat(formData.conversionRate) || 0;
    const clientValue = parseFloat(formData.averageClientValue) || 0;
    const lifetimeMonths = parseFloat(formData.clientLifetimeMonths) || 0;

    const newClients = leads * (conversionRate / 100);
    const monthlyRevenue = newClients * clientValue;
    const lifetimeValue = clientValue * lifetimeMonths;
    const lifetimeRevenue = newClients * lifetimeValue;
    const costPerLead = leads > 0 ? adSpend / leads : 0;
    const costPerClient = newClients > 0 ? adSpend / newClients : 0;
    const monthlyROI = adSpend > 0 ? ((monthlyRevenue - adSpend) / adSpend) * 100 : 0;
    const lifetimeROI = adSpend > 0 ? ((lifetimeRevenue - adSpend) / adSpend) * 100 : 0;

    return {
      adSpend,
      leads,
      newClients,
      monthlyRevenue,
      lifetimeRevenue,
      costPerLead,
      costPerClient,
      monthlyROI,
      lifetimeROI,
      lifetimeValue
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percent: number) => {
    return `${percent >= 0 ? '+' : ''}${percent.toFixed(1)}%`;
  };

  const getROIColor = (roi: number) => {
    if (roi >= 200) return "text-green-600";
    if (roi >= 100) return "text-yellow-600";
    return "text-red-600";
  };

  const getROIMessage = (roi: number) => {
    if (roi >= 300) return "Outstanding ROI! Your marketing is highly profitable.";
    if (roi >= 200) return "Excellent ROI! Your marketing is very effective.";
    if (roi >= 100) return "Good ROI! Your marketing is profitable.";
    if (roi >= 0) return "Break-even marketing. Room for improvement.";
    return "Marketing investment needs optimization.";
  };

  const results = calculateROI();

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Marketing ROI Calculator Results | SmartFirm"
          description="Your marketing ROI analysis for accounting firms. See your return on investment and growth potential."
          noindex={false}
        />
        <Header />
        <main className="container mx-auto px-4 py-16 pt-24">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <Calculator className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-primary mb-4">Your Marketing ROI Analysis</h1>
                <p className="text-lg text-muted-foreground">
                  Based on your current marketing performance
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Monthly Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ad Spend:</span>
                      <span className="font-semibold">{formatCurrency(results.adSpend)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Leads Generated:</span>
                      <span className="font-semibold">{results.leads.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">New Clients:</span>
                      <span className="font-semibold">{results.newClients.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.monthlyRevenue)}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monthly ROI:</span>
                        <span className={`font-bold text-xl ${getROIColor(results.monthlyROI)}`}>
                          {formatPercentage(results.monthlyROI)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Lifetime Value Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Client Lifetime Value:</span>
                      <span className="font-semibold">{formatCurrency(results.lifetimeValue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Lifetime Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(results.lifetimeRevenue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Cost Per Lead:</span>
                      <span className="font-semibold">{formatCurrency(results.costPerLead)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Cost Per Client:</span>
                      <span className="font-semibold">{formatCurrency(results.costPerClient)}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Lifetime ROI:</span>
                        <span className={`font-bold text-xl ${getROIColor(results.lifetimeROI)}`}>
                          {formatPercentage(results.lifetimeROI)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">ROI Assessment</CardTitle>
                  <p className={`text-lg font-medium ${getROIColor(results.lifetimeROI)}`}>
                    {getROIMessage(results.lifetimeROI)}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Revenue Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Each dollar spent generates {formatCurrency(results.lifetimeROI / 100)} in lifetime value
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Client Acquisition</h4>
                      <p className="text-sm text-muted-foreground">
                        You're acquiring {results.newClients.toFixed(1)} new clients monthly
                      </p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-teal mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Growth Potential</h4>
                      <p className="text-sm text-muted-foreground">
                        {results.lifetimeROI >= 200 ? "Strong growth trajectory" : "Opportunity for optimization"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-teal/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Optimize Your Marketing ROI</CardTitle>
                  <CardDescription className="text-lg">
                    SmartFirm can help you improve these metrics and maximize your marketing investment. 
                    Our automation and optimization strategies typically increase ROI by 150-300%.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <a href="/get-started">
                        Get Your Growth Strategy
                        <TrendingUp className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/tools">
                        Try Another Calculator
                        <BarChart3 className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Button variant="outline" onClick={() => setShowResults(false)}>
                  <Calculator className="mr-2 h-4 w-4" />
                  Recalculate with Different Numbers
                </Button>
              </div>
            </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketing ROI Calculator | SmartFirm"
        description="Calculate marketing ROI for your accounting firm. Estimate returns on ad spend and client lifetime value."
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <Button variant="ghost" asChild className="mb-4">
                <a href="/tools">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tools
                </a>
              </Button>
              <h1 className="text-3xl font-bold text-primary mb-4">Marketing ROI Calculator</h1>
              <p className="text-sm text-muted-foreground mt-2 text-center" data-sf="entities">
                Built by SmartFirm for accounting firms. See our <a href="/leading-marketing-services-for-accounting-firms" className="text-primary hover:underline" data-sf="internal-add">services</a>. Learn more from
                <a href="https://www.aicpa.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-sf="external-add"> AICPA</a> and
                <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-sf="external-add"> QuickBooks</a>.
              </p>
              <p className="text-muted-foreground">
                Enter your current marketing metrics to calculate your return on investment and identify optimization opportunities.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Current Marketing Performance</CardTitle>
                <CardDescription>
                  Fill in your current numbers to see your marketing ROI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="monthlyAdSpend">Monthly Ad Spend ($)</Label>
                      <Input
                        id="monthlyAdSpend"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.monthlyAdSpend}
                        onChange={(e) => handleInputChange("monthlyAdSpend", e.target.value)}
                        placeholder="5000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyLeads">Monthly Leads Generated</Label>
                      <Input
                        id="monthlyLeads"
                        type="number"
                        min="0"
                        value={formData.monthlyLeads}
                        onChange={(e) => handleInputChange("monthlyLeads", e.target.value)}
                        placeholder="100"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="conversionRate">Lead to Client Conversion Rate (%)</Label>
                      <Input
                        id="conversionRate"
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={formData.conversionRate}
                        onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                        placeholder="15"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="averageClientValue">Average Monthly Client Value ($)</Label>
                      <Input
                        id="averageClientValue"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.averageClientValue}
                        onChange={(e) => handleInputChange("averageClientValue", e.target.value)}
                        placeholder="500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="clientLifetimeMonths">Average Client Lifetime (months)</Label>
                    <Input
                      id="clientLifetimeMonths"
                      type="number"
                      min="1"
                      value={formData.clientLifetimeMonths}
                      onChange={(e) => handleInputChange("clientLifetimeMonths", e.target.value)}
                      placeholder="36"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Calculate My ROI
                    <Calculator className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-12 bg-accent/50">
              <CardHeader>
                <CardTitle className="text-lg">How to Use This Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Monthly Ad Spend:</strong> Total amount spent on advertising per month
                </div>
                <div>
                  <strong>Monthly Leads:</strong> Number of qualified leads generated from your marketing
                </div>
                <div>
                  <strong>Conversion Rate:</strong> Percentage of leads that become paying clients
                </div>
                <div>
                  <strong>Client Value:</strong> Average monthly revenue per client
                </div>
                <div>
                  <strong>Client Lifetime:</strong> How long clients typically stay with your firm
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      <Footer />
    </div>
  );
};

export default ROICalculator;