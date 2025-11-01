import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Clock, ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const categories = {
  tech: "Technology Adoption",
  marketing: "Marketing Sophistication", 
  efficiency: "Operational Efficiency"
};

const questions = [
  {
    id: 1,
    category: "tech",
    question: "How do you handle client communications?",
    options: [
      { value: 4, label: "Client portal + automated updates + mobile app", points: 4 },
      { value: 3, label: "Email + some automated notifications", points: 3 },
      { value: 2, label: "Mostly email and phone calls", points: 2 },
      { value: 1, label: "Phone calls and in-person meetings", points: 1 },
      { value: 0, label: "Whatever works at the moment", points: 0 }
    ]
  },
  {
    id: 2,
    category: "tech",
    question: "How do you manage your practice?",
    options: [
      { value: 4, label: "Cloud-based practice management with automation", points: 4 },
      { value: 3, label: "Cloud-based software with some integrations", points: 3 },
      { value: 2, label: "Basic practice management software", points: 2 },
      { value: 1, label: "Mostly Excel and desktop software", points: 1 },
      { value: 0, label: "Paper files and basic accounting software", points: 0 }
    ]
  },
  {
    id: 3,
    category: "tech",
    question: "How do clients sign documents and contracts?",
    options: [
      { value: 4, label: "Electronic signatures integrated with my system", points: 4 },
      { value: 3, label: "DocuSign or similar e-signature service", points: 3 },
      { value: 2, label: "Email PDF back and forth", points: 2 },
      { value: 1, label: "Print, sign, scan/fax", points: 1 },
      { value: 0, label: "In-person signatures only", points: 0 }
    ]
  },
  {
    id: 4,
    category: "marketing",
    question: "How do you attract new clients?",
    options: [
      { value: 4, label: "Multi-channel marketing with automation and tracking", points: 4 },
      { value: 3, label: "Website, SEO, and some social media", points: 3 },
      { value: 2, label: "Basic website and occasional networking", points: 2 },
      { value: 1, label: "Referrals and word-of-mouth only", points: 1 },
      { value: 0, label: "No active marketing efforts", points: 0 }
    ]
  },
  {
    id: 5,
    category: "marketing",
    question: "Do you have a professional website?",
    options: [
      { value: 4, label: "Modern, mobile-optimized with lead capture and SEO", points: 4 },
      { value: 3, label: "Professional website with basic SEO", points: 3 },
      { value: 2, label: "Basic website that's functional", points: 2 },
      { value: 1, label: "Outdated website or social media page only", points: 1 },
      { value: 0, label: "No website", points: 0 }
    ]
  },
  {
    id: 6,
    category: "marketing",
    question: "How do you follow up with prospects?",
    options: [
      { value: 4, label: "Automated email sequences + personal outreach", points: 4 },
      { value: 3, label: "CRM system with regular follow-up", points: 3 },
      { value: 2, label: "Manual follow-up when I remember", points: 2 },
      { value: 1, label: "One follow-up call/email", points: 1 },
      { value: 0, label: "No systematic follow-up", points: 0 }
    ]
  },
  {
    id: 7,
    category: "efficiency",
    question: "How do you handle routine tasks?",
    options: [
      { value: 4, label: "Most routine tasks are automated", points: 4 },
      { value: 3, label: "Some automation and templates", points: 3 },
      { value: 2, label: "Templates for common tasks", points: 2 },
      { value: 1, label: "Some recurring processes documented", points: 1 },
      { value: 0, label: "Everything done manually each time", points: 0 }
    ]
  },
  {
    id: 8,
    category: "efficiency",
    question: "How do you track time and billing?",
    options: [
      { value: 4, label: "Automated time tracking with project integration", points: 4 },
      { value: 3, label: "Digital time tracking software", points: 3 },
      { value: 2, label: "Manual time sheets in software", points: 2 },
      { value: 1, label: "Paper timesheets or basic tracking", points: 1 },
      { value: 0, label: "Estimate time after the fact", points: 0 }
    ]
  },
  {
    id: 9,
    category: "efficiency",
    question: "How do you onboard new clients?",
    options: [
      { value: 4, label: "Fully automated digital onboarding process", points: 4 },
      { value: 3, label: "Digital forms with some automation", points: 3 },
      { value: 2, label: "Email templates and checklists", points: 2 },
      { value: 1, label: "Phone calls and paper forms", points: 1 },
      { value: 0, label: "Ad-hoc process each time", points: 0 }
    ]
  }
];

const ModernFirmQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (points: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: points }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScores = () => {
    const categoryScores = {
      tech: { total: 0, max: 0 },
      marketing: { total: 0, max: 0 },
      efficiency: { total: 0, max: 0 }
    };

    questions.forEach(question => {
      const answer = answers[question.id] || 0;
      categoryScores[question.category as keyof typeof categoryScores].total += answer;
      categoryScores[question.category as keyof typeof categoryScores].max += 4;
    });

    const overallTotal = Object.values(categoryScores).reduce((sum, cat) => sum + cat.total, 0);
    const overallMax = Object.values(categoryScores).reduce((sum, cat) => sum + cat.max, 0);

    return {
      overall: Math.round((overallTotal / overallMax) * 100),
      tech: Math.round((categoryScores.tech.total / categoryScores.tech.max) * 100),
      marketing: Math.round((categoryScores.marketing.total / categoryScores.marketing.max) * 100),
      efficiency: Math.round((categoryScores.efficiency.total / categoryScores.efficiency.max) * 100)
    };
  };

  const getModernityLevel = (score: number) => {
    if (score >= 80) return { 
      level: "Future-Ready Firm", 
      color: "text-green-600", 
      description: "You're ahead of the curve!",
      emoji: "🚀"
    };
    if (score >= 60) return { 
      level: "Modern Practice", 
      color: "text-blue-600", 
      description: "Good technology adoption with room to grow.",
      emoji: "💻"
    };
    if (score >= 40) return { 
      level: "Modernizing Firm", 
      color: "text-yellow-600", 
      description: "Making progress but falling behind competitors.",
      emoji: "⚡"
    };
    return { 
      level: "Traditional Practice", 
      color: "text-red-600", 
      description: "Significant modernization needed to stay competitive.",
      emoji: "📋"
    };
  };

  const getRecommendations = (scores: { overall: number; tech: number; marketing: number; efficiency: number }) => {
    const recommendations = [];

    if (scores.tech < 60) {
      recommendations.push("Upgrade to cloud-based practice management with client portals");
      recommendations.push("Implement electronic signatures and document automation");
    }

    if (scores.marketing < 60) {
      recommendations.push("Develop a modern, mobile-optimized website with SEO");
      recommendations.push("Set up automated lead nurturing and follow-up systems");
    }

    if (scores.efficiency < 60) {
      recommendations.push("Automate routine tasks and client onboarding");
      recommendations.push("Implement digital time tracking and billing automation");
    }

    if (scores.overall >= 60) {
      recommendations.push("Focus on advanced integrations and AI-powered insights");
      recommendations.push("Explore cutting-edge technologies for competitive advantage");
    }

    return recommendations.slice(0, 4); // Limit to top 4 recommendations
  };

  if (showResults) {
    const scores = calculateScores();
    const modernityLevel = getModernityLevel(scores.overall);
    const recommendations = getRecommendations(scores);

    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Modern Firm Quiz Results | SmartFirm"
          description="Your firm modernization assessment with technology adoption recommendations for accounting firms."
          canonicalUrl="https://smartfirm.io/tools/modern-firm-quiz"
          pageType="tool"
          toolName="Modern Firm Quiz"
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
                <CardTitle className="text-3xl text-primary">Your Firm Modernity Score</CardTitle>
                <CardDescription>How modern is your accounting practice?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                <div className="text-center">
                  <div className="text-6xl mb-4">{modernityLevel.emoji}</div>
                  <div className="text-5xl font-bold text-primary mb-2">{scores.overall}%</div>
                  <div className={`text-xl font-semibold ${modernityLevel.color} mb-2`}>
                    {modernityLevel.level}
                  </div>
                  <p className="text-muted-foreground">{modernityLevel.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-sm">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{categories.tech}</h3>
                      <div className="text-2xl font-bold text-blue-600">{scores.tech}%</div>
                      <Progress value={scores.tech} className="mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{categories.marketing}</h3>
                      <div className="text-2xl font-bold text-purple-600">{scores.marketing}%</div>
                      <Progress value={scores.marketing} className="mt-2" />
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{categories.efficiency}</h3>
                      <div className="text-2xl font-bold text-green-600">{scores.efficiency}%</div>
                      <Progress value={scores.efficiency} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Modernization Priorities:</h3>
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

                {scores.overall < 50 && (
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-yellow-700 mb-3">⚠️ Competitive Risk</h3>
                      <p className="text-sm text-yellow-700">
                        Your firm may be losing clients to more modern competitors. Today's clients expect digital convenience, 
                        online access, and efficient processes. Modernizing your practice isn't just about efficiency—it's about survival and growth.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Modernize Your Practice?</h3>
                  <p className="text-muted-foreground mb-4">
                    SmartFirm can help you implement modern technology, marketing, and efficiency systems to compete effectively in today's market.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Modernization Plan
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
        title="Modern Accounting Firm Assessment Tool | SmartFirm"
        description="Rate your practice with our modern accounting firm assessment measuring technology adoption, client experience, service delivery, and competitive positioning."
        canonicalUrl="https://smartfirm.io/tools/modern-firm-quiz"
        pageType="tool"
        toolName="Modern Firm Quiz"
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-2xl mx-auto">
          <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Modern Accounting Firm Assessment</h1>
          <div id="sf-keyword-intro">
            <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
              This modern accounting firm assessment measures your technology adoption, client experience quality, service delivery methods, and competitive positioning to show how you compare to modern practices.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">How Modern Is Your Firm?</CardTitle>
              <CardDescription>
                Assess your technology adoption, marketing sophistication, and operational efficiency
              </CardDescription>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Question {currentQuestion + 1} of {questions.length}</span>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-primary font-medium mb-2">
                    {categories[questions[currentQuestion].category as keyof typeof categories]}
                  </div>
                  <h3 className="text-lg font-medium mb-4">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <RadioGroup className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value.toString()} id={option.value.toString()} />
                      <Label htmlFor={option.value.toString()} className="cursor-pointer flex-1">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="grid grid-cols-1 gap-3 pt-4">
                  {questions[currentQuestion].options.map((option) => (
                    <Button 
                      key={option.value}
                      onClick={() => handleAnswer(option.points)}
                      variant="outline" 
                      className="text-left justify-start h-auto p-4 hover:bg-primary/5"
                    >
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {option.points === 4 ? "Very Modern" : option.points === 3 ? "Modern" : option.points === 2 ? "Somewhat Modern" : option.points === 1 ? "Traditional" : "Very Traditional"}
                        </div>
                      </div>
                    </Button>
                  ))}
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

export default ModernFirmQuiz;