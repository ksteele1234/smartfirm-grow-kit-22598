import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, TrendingUp, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const GrowthPotentialScorecard = () => {
  const [annualRevenue, setAnnualRevenue] = useState<number>(0);
  const [teamSize, setTeamSize] = useState<number>(0);
  const [avgClientValue, setAvgClientValue] = useState<number>(0);
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [firmType, setFirmType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const firmTypes = {
    "tax-prep": { name: "Tax Preparation", revMultiplier: 1.0 },
    "bookkeeping": { name: "Bookkeeping Services", revMultiplier: 1.2 },
    "accounting": { name: "Full Service Accounting", revMultiplier: 1.5 },
    "cpa-firm": { name: "CPA Firm", revMultiplier: 1.8 },
    "advisory": { name: "Business Advisory", revMultiplier: 2.2 }
  };

  const locationTypes = {
    "rural": { name: "Rural/Small Town", multiplier: 0.8 },
    "suburban": { name: "Suburban", multiplier: 1.0 },
    "metro": { name: "Metropolitan Area", multiplier: 1.3 },
    "major-city": { name: "Major City (NYC, LA, SF)", multiplier: 1.6 }
  };

  const calculateBenchmarks = () => {
    const firmTypeData = firmTypes[firmType as keyof typeof firmTypes];
    const locationData = locationTypes[location as keyof typeof locationTypes];
    
    if (!firmTypeData || !locationData || teamSize === 0) return null;

    // Industry benchmarks (base values for suburban full-service accounting)
    const baseRevenuePerEmployee = 150000;
    const baseHourlyRate = 125;
    const baseClientValue = 3000;

    // Adjust for firm type and location
    const expectedRevenuePerEmployee = baseRevenuePerEmployee * firmTypeData.revMultiplier * locationData.multiplier;
    const expectedHourlyRate = baseHourlyRate * firmTypeData.revMultiplier * locationData.multiplier;
    const expectedClientValue = baseClientValue * firmTypeData.revMultiplier * locationData.multiplier;

    const expectedTotalRevenue = expectedRevenuePerEmployee * teamSize;

    return {
      expectedTotalRevenue,
      expectedRevenuePerEmployee,
      expectedHourlyRate,
      expectedClientValue,
      currentRevenuePerEmployee: teamSize > 0 ? annualRevenue / teamSize : 0
    };
  };

  const calculateGrowthScore = () => {
    const benchmarks = calculateBenchmarks();
    if (!benchmarks) return 0;

    let score = 0;
    let maxScore = 100;

    // Revenue performance (40 points)
    const revenueRatio = annualRevenue / benchmarks.expectedTotalRevenue;
    if (revenueRatio >= 1.2) score += 40;
    else if (revenueRatio >= 1.0) score += 30;
    else if (revenueRatio >= 0.8) score += 20;
    else if (revenueRatio >= 0.6) score += 10;

    // Revenue per employee (30 points)
    const efficiencyRatio = benchmarks.currentRevenuePerEmployee / benchmarks.expectedRevenuePerEmployee;
    if (efficiencyRatio >= 1.2) score += 30;
    else if (efficiencyRatio >= 1.0) score += 25;
    else if (efficiencyRatio >= 0.8) score += 15;
    else if (efficiencyRatio >= 0.6) score += 5;

    // Pricing (30 points)
    if (hourlyRate > 0) {
      const pricingRatio = hourlyRate / benchmarks.expectedHourlyRate;
      if (pricingRatio >= 1.2) score += 30;
      else if (pricingRatio >= 1.0) score += 25;
      else if (pricingRatio >= 0.8) score += 15;
      else if (pricingRatio >= 0.6) score += 5;
    } else {
      maxScore -= 30; // If no hourly rate provided, adjust max score
    }

    return Math.round((score / maxScore) * 100);
  };

  const getGrowthCategory = (score: number) => {
    if (score >= 80) return { 
      level: "High Growth Potential", 
      color: "text-green-600", 
      description: "Your firm is performing at or above industry standards",
      emoji: "🚀"
    };
    if (score >= 60) return { 
      level: "Moderate Growth Potential", 
      color: "text-blue-600", 
      description: "Good foundation with clear opportunities for improvement",
      emoji: "📈"
    };
    if (score >= 40) return { 
      level: "Untapped Potential", 
      color: "text-yellow-600", 
      description: "Significant room for growth and optimization",
      emoji: "⚡"
    };
    return { 
      level: "Major Growth Opportunity", 
      color: "text-red-600", 
      description: "Substantial improvements needed to reach potential",
      emoji: "🎯"
    };
  };

  const getRecommendations = () => {
    const benchmarks = calculateBenchmarks();
    if (!benchmarks) return [];

    const recommendations = [];

    // Revenue recommendations
    if (annualRevenue < benchmarks.expectedTotalRevenue * 0.8) {
      recommendations.push("Focus on client acquisition and marketing to increase revenue");
    }

    // Efficiency recommendations
    if (benchmarks.currentRevenuePerEmployee < benchmarks.expectedRevenuePerEmployee * 0.8) {
      recommendations.push("Improve operational efficiency and automation to increase revenue per employee");
    }

    // Pricing recommendations
    if (hourlyRate > 0 && hourlyRate < benchmarks.expectedHourlyRate * 0.8) {
      recommendations.push("Consider raising rates to match market standards for your area and service level");
    }

    // Client value recommendations
    if (avgClientValue > 0 && avgClientValue < benchmarks.expectedClientValue * 0.8) {
      recommendations.push("Increase average client value through upselling and premium service offerings");
    }

    // General recommendations
    if (teamSize === 1) {
      recommendations.push("Consider strategic hiring to scale beyond solo practice limitations");
    }

    return recommendations.slice(0, 4);
  };

  if (showResults) {
    const benchmarks = calculateBenchmarks();
    const growthScore = calculateGrowthScore();
    const growthCategory = getGrowthCategory(growthScore);
    const recommendations = getRecommendations();

    if (!benchmarks) {
      return (
        <div className="min-h-screen bg-background">
          <SEO 
            title="Growth Potential Scorecard | SmartFirm"
            description="Calculate your firm's growth potential. Analyze revenue, team size, and market positioning for accounting firms."
            noindex={false}
          />
          <Header />
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <p>Please fill in all required fields to see your results.</p>
              <Button onClick={() => setShowResults(false)} className="mt-4">
                Go Back
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Growth Potential Scorecard Results | SmartFirm"
          description="Your growth potential analysis with benchmarking and recommendations for your accounting firm."
          noindex={false}
        />
        <Header />
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Your Growth Potential Score</CardTitle>
                <CardDescription>How does your firm compare to industry benchmarks?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">{growthCategory.emoji}</div>
                  <div className="text-5xl font-bold text-primary mb-2">{growthScore}%</div>
                  <div className={`text-xl font-semibold ${growthCategory.color} mb-2`}>
                    {growthCategory.level}
                  </div>
                  <p className="text-muted-foreground">{growthCategory.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Your Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Annual Revenue:</span>
                        <span className="font-semibold">${annualRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue per Employee:</span>
                        <span className="font-semibold">${benchmarks.currentRevenuePerEmployee.toLocaleString()}</span>
                      </div>
                      {hourlyRate > 0 && (
                        <div className="flex justify-between">
                          <span>Hourly Rate:</span>
                          <span className="font-semibold">${hourlyRate}</span>
                        </div>
                      )}
                      {avgClientValue > 0 && (
                        <div className="flex justify-between">
                          <span>Avg Client Value:</span>
                          <span className="font-semibold">${avgClientValue.toLocaleString()}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Industry Benchmarks
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Expected Revenue:</span>
                        <span className="font-semibold text-green-600">${benchmarks.expectedTotalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected per Employee:</span>
                        <span className="font-semibold text-green-600">${benchmarks.expectedRevenuePerEmployee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Market Hourly Rate:</span>
                        <span className="font-semibold text-green-600">${Math.round(benchmarks.expectedHourlyRate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Client Value:</span>
                        <span className="font-semibold text-green-600">${benchmarks.expectedClientValue.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Growth Gap Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Revenue Gap:</div>
                        <div className={`text-lg font-semibold ${annualRevenue >= benchmarks.expectedTotalRevenue ? 'text-green-600' : 'text-red-600'}`}>
                          {annualRevenue >= benchmarks.expectedTotalRevenue ? '+' : ''}${(annualRevenue - benchmarks.expectedTotalRevenue).toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Efficiency Gap:</div>
                        <div className={`text-lg font-semibold ${benchmarks.currentRevenuePerEmployee >= benchmarks.expectedRevenuePerEmployee ? 'text-green-600' : 'text-red-600'}`}>
                          {benchmarks.currentRevenuePerEmployee >= benchmarks.expectedRevenuePerEmployee ? '+' : ''}${(benchmarks.currentRevenuePerEmployee - benchmarks.expectedRevenuePerEmployee).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Growth Action Plan:</h3>
                  <ul className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Unlock Your Growth Potential?</h3>
                  <p className="text-muted-foreground mb-4">
                    SmartFirm can help you implement strategies to reach and exceed industry benchmarks for your market.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Growth Strategy
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
        title="Accounting Firm Growth Scorecard Tool | SmartFirm"
        description="Use our accounting firm growth scorecard to rate your marketing, operations, client experience, technology, and team to identify growth constraints."
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-2xl mx-auto">
          <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Accounting Firm Growth Scorecard | SmartFirm</h1>
          <div id="sf-keyword-intro">
            <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
              This accounting firm growth scorecard evaluates your marketing effectiveness, operational efficiency, client experience quality, technology adoption, and team capabilities to pinpoint growth constraints.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Growth Potential Scorecard
              </CardTitle>
              <CardDescription>
                Benchmark your firm's revenue, pricing, and efficiency against industry standards
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firmType" className="text-base font-medium">Firm Type</Label>
                  <Select onValueChange={setFirmType}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your firm type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(firmTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location" className="text-base font-medium">Location Type</Label>
                  <Select onValueChange={setLocation}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(locationTypes).map(([key, loc]) => (
                        <SelectItem key={key} value={key}>{loc.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="annualRevenue" className="text-base font-medium">Annual Revenue</Label>
                  <Input
                    id="annualRevenue"
                    type="number"
                    min="0"
                    step="10000"
                    value={annualRevenue || ''}
                    onChange={(e) => setAnnualRevenue(parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 500000"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="teamSize" className="text-base font-medium">Team Size (including you)</Label>
                  <Input
                    id="teamSize"
                    type="number"
                    min="1"
                    value={teamSize || ''}
                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                    placeholder="e.g., 3"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="hourlyRate" className="text-base font-medium">Average Hourly Rate (Optional)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    min="0"
                    value={hourlyRate || ''}
                    onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 150"
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    For comparison with market rates
                  </p>
                </div>

                <div>
                  <Label htmlFor="avgClientValue" className="text-base font-medium">Average Annual Client Value (Optional)</Label>
                  <Input
                    id="avgClientValue"
                    type="number"
                    min="0"
                    value={avgClientValue || ''}
                    onChange={(e) => setAvgClientValue(parseFloat(e.target.value) || 0)}
                    placeholder="e.g., 3000"
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Total revenue ÷ number of clients
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={() => setShowResults(true)}
                  disabled={!firmType || !location || annualRevenue <= 0 || teamSize <= 0}
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Calculate Growth Potential
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

export default GrowthPotentialScorecard;