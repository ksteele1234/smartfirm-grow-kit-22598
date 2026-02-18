import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, DollarSign, TrendingDown, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const ClientLifetimeValueCalculator = () => {
  const [avgMonthlyValue, setAvgMonthlyValue] = useState<number>(0);
  const [avgClientLifespan, setAvgClientLifespan] = useState<number>(0);
  const [clientType, setClientType] = useState<string>("");
  const [churnRate, setChurnRate] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  const clientTypes = {
    "tax-only": { name: "Tax Preparation Only", avgValue: 500, avgLifespan: 2 },
    "bookkeeping": { name: "Monthly Bookkeeping", avgValue: 350, avgLifespan: 3 },
    "accounting": { name: "Full Accounting Services", avgValue: 800, avgLifespan: 4 },
    "advisory": { name: "Business Advisory", avgValue: 1200, avgLifespan: 5 },
    "comprehensive": { name: "Comprehensive Services", avgValue: 1500, avgLifespan: 6 }
  };

  const handleClientTypeChange = (value: string) => {
    setClientType(value);
    const type = clientTypes[value as keyof typeof clientTypes];
    if (type) {
      setAvgMonthlyValue(type.avgValue);
      setAvgClientLifespan(type.avgLifespan);
    }
  };

  const calculateCLV = () => {
    if (avgMonthlyValue > 0 && avgClientLifespan > 0) {
      return avgMonthlyValue * avgClientLifespan * 12;
    }
    return 0;
  };

  const calculateLossImpact = () => {
    const clv = calculateCLV();
    const clientsLostPerYear = churnRate > 0 ? Math.round(100 / churnRate) : 0;

    return {
      singleClientLoss: clv,
      annualLossImpact: clv * clientsLostPerYear,
      clientsLostPerYear
    };
  };

  const getMarketingBudgetRecommendation = () => {
    const clv = calculateCLV();
    return {
      conservative: Math.round(clv * 0.1),
      moderate: Math.round(clv * 0.2),
      aggressive: Math.round(clv * 0.3)
    };
  };

  const getRetentionImpact = () => {
    const clv = calculateCLV();
    const currentChurn = churnRate / 100;
    const improvedChurn = Math.max(currentChurn * 0.7, 0.05); // 30% improvement, minimum 5%

    const currentLifespan = 1 / currentChurn;
    const improvedLifespan = 1 / improvedChurn;
    const lifespanIncrease = improvedLifespan - currentLifespan;

    return {
      currentAnnualValue: avgMonthlyValue * 12,
      additionalValue: Math.round(avgMonthlyValue * 12 * lifespanIncrease),
      improvementPercentage: Math.round(((improvedLifespan - currentLifespan) / currentLifespan) * 100)
    };
  };

  if (showResults) {
    const clv = calculateCLV();
    const lossImpact = calculateLossImpact();
    const marketingBudget = getMarketingBudgetRecommendation();
    const retentionImpact = getRetentionImpact();

    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Client Lifetime Value Calculator Results | SmartFirm"
          description="Your client lifetime value analysis with retention recommendations for your accounting firm."
          canonicalUrl="https://smartfirm.io/tools/client-lifetime-value-calculator-for-accountants/"
          pageType="tool"
          toolName="Client Lifetime Value Calculator"
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
                <CardTitle className="text-3xl text-primary">Your Client Lifetime Value Analysis</CardTitle>
                <CardDescription>Understanding the true value of your clients and the cost of losing them</CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="text-center bg-primary/10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Client Lifetime Value</h3>
                  <div className="text-5xl font-bold text-primary">${clv.toLocaleString()}</div>
                  <p className="text-muted-foreground mt-2">
                    Average value of each client over their lifetime
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-sm">
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-700">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        Cost of Losing Clients
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground">Each client lost costs:</div>
                        <div className="text-2xl font-bold text-red-600">${lossImpact.singleClientLoss.toLocaleString()}</div>
                      </div>
                      {churnRate > 0 && (
                        <div>
                          <div className="text-sm text-muted-foreground">Annual revenue at risk:</div>
                          <div className="text-xl font-bold text-red-600">${lossImpact.annualLossImpact.toLocaleString()}</div>
                          <div className="text-xs text-red-700">From losing ~{lossImpact.clientsLostPerYear} clients/year</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Marketing Budget Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground">Conservative (10% of CLV):</div>
                        <div className="text-lg font-semibold text-green-600">${marketingBudget.conservative.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Moderate (20% of CLV):</div>
                        <div className="text-lg font-semibold text-green-600">${marketingBudget.moderate.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Aggressive (30% of CLV):</div>
                        <div className="text-lg font-semibold text-green-600">${marketingBudget.aggressive.toLocaleString()}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {churnRate > 0 && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-700">Retention Improvement Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        If you could reduce client churn by just 30%:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Current annual value:</div>
                          <div className="text-lg font-semibold text-blue-600">
                            ${retentionImpact.currentAnnualValue.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Additional value:</div>
                          <div className="text-lg font-semibold text-blue-600">
                            +${retentionImpact.additionalValue.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Total improvement:</div>
                          <div className="text-lg font-semibold text-blue-600">
                            {retentionImpact.improvementPercentage}% increase
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Client acquisition is 5-25x more expensive than retention</li>
                      <li>• A 5% increase in retention can increase profits by 25-95%</li>
                      <li>• Investing ${marketingBudget.conservative.toLocaleString()} to acquire one client pays for itself over their lifetime</li>
                      <li>• Losing even one client costs you ${lossImpact.singleClientLoss.toLocaleString()} in potential revenue</li>
                      <li>• Strong client relationships and excellent service are your best marketing strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Maximize Client Value?</h3>
                  <p className="text-muted-foreground mb-4">
                    SmartFirm helps you improve client retention and attract high-value clients through automated marketing and exceptional client experiences.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Client Growth Strategy
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
        title="Client Lifetime Value Calculator | SmartFirm.io"
        description="Client lifetime value calculator for accountants — understand retention impact and set informed marketing budgets for your CPA firm."
        canonicalUrl="https://smartfirm.io/tools/client-lifetime-value-calculator-for-accountants/"
        pageType="tool"
        toolName="Client Lifetime Value Calculator"
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-2xl mx-auto">
          <Link to="/tools/" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>

          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Client Lifetime Value Calculator for Accountants</h1>
          <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
            Built by SmartFirm for accounting firms. See our <a href="/services/" className="text-primary hover:underline" data-sf="internal-add">services</a>. Learn more from
            <a href="https://www.aicpa.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-sf="external-add"> AICPA</a> and
            <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-sf="external-add"> QuickBooks</a>.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <DollarSign className="h-6 w-6 mr-2" />
                Client Lifetime Value Calculator
              </CardTitle>
              <CardDescription>
                Calculate the true value of your clients and understand why retention matters more than acquisition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="clientType" className="text-base font-medium">Client Type (Optional - for benchmarking)</Label>
                <Select onValueChange={handleClientTypeChange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select client type for benchmark data" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(clientTypes).map(([key, type]) => (
                      <SelectItem key={key} value={key}>{type.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="avgMonthlyValue" className="text-base font-medium">Average Monthly Revenue per Client</Label>
                <Input
                  id="avgMonthlyValue"
                  type="number"
                  min="0"
                  step="50"
                  value={avgMonthlyValue || ''}
                  onChange={(e) => setAvgMonthlyValue(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 500"
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Total monthly revenue divided by number of active clients
                </p>
              </div>

              <div>
                <Label htmlFor="avgClientLifespan" className="text-base font-medium">Average Client Lifespan (years)</Label>
                <Input
                  id="avgClientLifespan"
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={avgClientLifespan || ''}
                  onChange={(e) => setAvgClientLifespan(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 3.5"
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  How long do clients typically stay with your firm?
                </p>
              </div>

              <div>
                <Label htmlFor="churnRate" className="text-base font-medium">Annual Client Churn Rate (%) - Optional</Label>
                <Input
                  id="churnRate"
                  type="number"
                  min="0"
                  max="100"
                  value={churnRate || ''}
                  onChange={(e) => setChurnRate(parseFloat(e.target.value) || 0)}
                  placeholder="e.g., 15"
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  What percentage of clients leave each year?
                </p>
              </div>

              <div className="pt-6">
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={avgMonthlyValue <= 0 || avgClientLifespan <= 0}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Calculate Client Lifetime Value
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

export default ClientLifetimeValueCalculator;