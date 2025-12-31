import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const workflowAreas = [
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    tasks: [
      { id: "manual-intake", task: "Manual data entry from intake forms", timeWasted: "2 hours/client" },
      { id: "document-collection", task: "Manually requesting and organizing documents", timeWasted: "3 hours/client" },
      { id: "contract-setup", task: "Creating contracts from scratch each time", timeWasted: "1 hour/client" },
      { id: "welcome-process", task: "Manual welcome calls and information sharing", timeWasted: "1.5 hours/client" }
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    tasks: [
      { id: "invoice-creation", task: "Creating invoices manually", timeWasted: "30 min/invoice" },
      { id: "payment-follow-up", task: "Manual payment reminders and follow-ups", timeWasted: "2 hours/week" },
      { id: "expense-tracking", task: "Manual expense categorization", timeWasted: "3 hours/week" },
      { id: "financial-reporting", task: "Creating reports manually in Excel", timeWasted: "4 hours/month" }
    ]
  },
  {
    id: "marketing-lead-gen",
    title: "Marketing & Lead Generation",
    tasks: [
      { id: "lead-follow-up", task: "Manual follow-up with prospects", timeWasted: "5 hours/week" },
      { id: "social-media", task: "Creating and posting social media content", timeWasted: "3 hours/week" },
      { id: "email-campaigns", task: "Writing and sending marketing emails", timeWasted: "2 hours/week" },
      { id: "website-updates", task: "Manually updating website content", timeWasted: "2 hours/month" }
    ]
  },
  {
    id: "client-communication",
    title: "Client Communication",
    tasks: [
      { id: "status-updates", task: "Manual project status updates", timeWasted: "1 hour/week per client" },
      { id: "document-sharing", task: "Emailing documents back and forth", timeWasted: "2 hours/week" },
      { id: "appointment-scheduling", task: "Phone tag for scheduling meetings", timeWasted: "1 hour/week" },
      { id: "client-queries", task: "Answering routine client questions", timeWasted: "3 hours/week" }
    ]
  },
  {
    id: "internal-operations",
    title: "Internal Operations",
    tasks: [
      { id: "time-tracking", task: "Manual time tracking and timesheets", timeWasted: "2 hours/week" },
      { id: "task-management", task: "Managing tasks through email/sticky notes", timeWasted: "1 hour/day" },
      { id: "file-organization", task: "Searching for files in disorganized folders", timeWasted: "30 min/day" },
      { id: "team-communication", task: "Inefficient team communication methods", timeWasted: "2 hours/week" }
    ]
  }
];

const WorkflowBottleneckFinder = () => {
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleTaskToggle = (taskId: string) => {
    const newSelected = new Set(selectedTasks);
    if (newSelected.has(taskId)) {
      newSelected.delete(taskId);
    } else {
      newSelected.add(taskId);
    }
    setSelectedTasks(newSelected);
  };

  const handleAnalyze = () => {
    setShowEmailModal(true);
  };

  const handleContinueToResults = () => {
    setShowEmailModal(false);
    setShowResults(true);
  };

  const calculateTotalTimeWasted = () => {
    let totalMinutesPerWeek = 0;
    
    workflowAreas.forEach(area => {
      area.tasks.forEach(task => {
        if (selectedTasks.has(task.id)) {
          const timeStr = task.timeWasted;
          let minutesPerWeek = 0;
          
          if (timeStr.includes('hour')) {
            const hours = parseFloat(timeStr.match(/[\d.]+/)?.[0] || '0');
            if (timeStr.includes('/client')) {
              minutesPerWeek = hours * 60 * 4; // Assuming 4 new clients per month
            } else if (timeStr.includes('/week')) {
              minutesPerWeek = hours * 60;
            } else if (timeStr.includes('/month')) {
              minutesPerWeek = (hours * 60) / 4.33; // Average weeks per month
            } else if (timeStr.includes('/day')) {
              minutesPerWeek = hours * 60 * 5; // 5 work days
            } else if (timeStr.includes('/invoice')) {
              minutesPerWeek = hours * 60 * 20; // Assuming 20 invoices per week
            }
          } else if (timeStr.includes('min')) {
            const minutes = parseFloat(timeStr.match(/[\d.]+/)?.[0] || '0');
            if (timeStr.includes('/day')) {
              minutesPerWeek = minutes * 5;
            } else if (timeStr.includes('/invoice')) {
              minutesPerWeek = minutes * 20;
            }
          }
          
          totalMinutesPerWeek += minutesPerWeek;
        }
      });
    });
    
    return {
      hoursPerWeek: Math.round(totalMinutesPerWeek / 60 * 10) / 10,
      hoursPerMonth: Math.round(totalMinutesPerWeek / 60 * 4.33 * 10) / 10,
      hoursPerYear: Math.round(totalMinutesPerWeek / 60 * 52 * 10) / 10
    };
  };

  const getRecommendations = () => {
    const recommendations = [];
    
    workflowAreas.forEach(area => {
      const areaSelectedTasks = area.tasks.filter(task => selectedTasks.has(task.id));
      if (areaSelectedTasks.length > 0) {
        switch (area.id) {
          case "client-onboarding":
            recommendations.push("Implement automated client onboarding workflows with digital forms and document collection");
            break;
          case "billing-payments":
            recommendations.push("Set up automated invoicing, payment processing, and financial reporting systems");
            break;
          case "marketing-lead-gen":
            recommendations.push("Deploy automated lead nurturing, social media scheduling, and email marketing campaigns");
            break;
          case "client-communication":
            recommendations.push("Create client portals, automated scheduling, and templated communication workflows");
            break;
          case "internal-operations":
            recommendations.push("Implement project management systems, automated time tracking, and centralized file storage");
            break;
        }
      }
    });
    
    return recommendations;
  };

  if (showResults) {
    const timeWasted = calculateTotalTimeWasted();
    const recommendations = getRecommendations();
    const potentialSavings = Math.round(timeWasted.hoursPerYear * 75); // Assuming $75/hour value

    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Workflow Bottleneck Finder for Accountants | SmartFirm"
          description="Free workflow bottleneck finder for accounting firms. Identify inefficiencies, measure process delays, and get recommendations to streamline operations."
          canonicalUrl="https://smartfirm.io/tools/workflow-bottleneck-finder"
          pageType="tool"
          toolName="Workflow Bottleneck Finder"
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
                <CardTitle className="text-3xl text-primary">Your Workflow Analysis Results</CardTitle>
                <CardDescription>Here's how much time your bottlenecks are costing you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="grid md:grid-cols-3 gap-sm text-center">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{timeWasted.hoursPerWeek}h</div>
                      <div className="text-sm text-red-700">per week</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-6">
                      <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">{timeWasted.hoursPerMonth}h</div>
                      <div className="text-sm text-orange-700">per month</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{timeWasted.hoursPerYear}h</div>
                      <div className="text-sm text-red-700">per year</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Potential Annual Savings</h3>
                  <div className="text-3xl font-bold text-primary">${potentialSavings.toLocaleString()}</div>
                  <p className="text-muted-foreground mt-2">
                    Based on {timeWasted.hoursPerYear} hours at $75/hour value
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Priority Automation Areas:</h3>
                  <ul className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Eliminate These Bottlenecks?</h3>
                  <p className="text-muted-foreground mb-4">
                    SmartFirm can help you automate these workflows and reclaim {timeWasted.hoursPerWeek} hours per week.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Automation Plan
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
        title="Comprehensive SEO Audit for Accounting Firms"
        description="Complete our accounting firm workflow audit identifying bottlenecks, redundancies, manual tasks, and automation opportunities across your client delivery process."
        canonicalUrl="https://smartfirm.io/tools/workflow-bottleneck-finder"
        pageType="tool"
        toolName="Workflow Bottleneck Finder"
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Accounting Firm Workflow Audit | SmartFirm</h1>
          <div id="sf-keyword-intro">
            <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
              This accounting firm workflow audit maps your entire client delivery process, identifies bottlenecks and redundancies, highlights manual tasks ripe for automation, and recommends efficiency improvements.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Workflow Bottleneck Finder</CardTitle>
              <CardDescription>
                Identify which manual tasks are wasting your time and costing your firm money
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {workflowAreas.map((area) => (
                  <div key={area.id} className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
                    <div className="grid gap-3">
                      {area.tasks.map((task) => (
                        <Card key={task.id} className="p-4">
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id={task.id}
                              checked={selectedTasks.has(task.id)}
                              onCheckedChange={() => handleTaskToggle(task.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label htmlFor={task.id} className="text-sm font-medium cursor-pointer">
                                {task.task}
                              </label>
                              <div className="mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Time wasted: {task.timeWasted}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t">
                  <Button 
                    onClick={() => setShowResults(true)}
                    disabled={selectedTasks.size === 0}
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Analyze My Workflow ({selectedTasks.size} bottlenecks selected)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkflowBottleneckFinder;