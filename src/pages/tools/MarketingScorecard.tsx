import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, ArrowRight, BarChart3, AlertTriangle } from "lucide-react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import ToolPageWrapper from "@/components/ToolPageWrapper";
import { EmailCaptureModal } from "@/components/ui/email-capture-modal";

interface Question {
  id: string;
  question: string;
  category: string;
}

const MarketingScorecard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    { id: "website", question: "Do you have a professional website that ranks well in local search?", category: "Online Presence" },
    { id: "seo", question: "Are you actively optimizing your website for search engines?", category: "Online Presence" },
    { id: "social_media", question: "Do you maintain active, professional social media profiles?", category: "Online Presence" },
    { id: "content_marketing", question: "Do you regularly publish valuable content (blog posts, newsletters)?", category: "Content Strategy" },
    { id: "lead_magnets", question: "Do you offer free resources to capture prospect information?", category: "Lead Generation" },
    { id: "email_marketing", question: "Do you have an email marketing system for nurturing leads?", category: "Lead Generation" },
    { id: "follow_up", question: "Do you have a systematic follow-up process for new leads?", category: "Lead Generation" },
    { id: "client_testimonials", question: "Do you actively collect and showcase client testimonials?", category: "Social Proof" },
    { id: "case_studies", question: "Do you have detailed case studies showing client results?", category: "Social Proof" },
    { id: "referral_system", question: "Do you have a formal system for generating referrals?", category: "Referrals" },
    { id: "networking", question: "Do you actively participate in professional networking events?", category: "Networking" },
    { id: "tracking", question: "Do you track marketing metrics and ROI?", category: "Analytics" }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value === "yes"
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowEmailModal(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleContinueToResults = () => {
    setShowEmailModal(false);
    setShowResults(true);
  };

  const calculateResults = () => {
    const totalQuestions = questions.length;
    const yesAnswers = Object.values(answers).filter(answer => answer === true).length;
    const score = Math.round((yesAnswers / totalQuestions) * 100);

    const categoryResults = questions.reduce((acc, question) => {
      const category = question.category;
      if (!acc[category]) {
        acc[category] = { total: 0, correct: 0 };
      }
      acc[category].total++;
      if (answers[question.id]) {
        acc[category].correct++;
      }
      return acc;
    }, {} as Record<string, { total: number; correct: number }>);

    return { score, yesAnswers, totalQuestions, categoryResults };
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Excellent! Your marketing is working well.";
    if (score >= 60) return "Good foundation, but room for improvement.";
    if (score >= 40) return "Some marketing efforts, but inconsistent results.";
    return "Your marketing needs immediate attention.";
  };

  const getActionPlan = (score: number) => {
    if (score >= 80) {
      return [
        "Focus on optimization and scaling successful campaigns",
        "Implement advanced attribution tracking",
        "Consider expanding to new marketing channels",
        "Develop more sophisticated automation workflows"
      ];
    }
    if (score >= 60) {
      return [
        "Implement marketing automation for lead nurturing",
        "Develop a content marketing strategy",
        "Set up proper tracking and analytics",
        "Create a systematic referral program"
      ];
    }
    if (score >= 40) {
      return [
        "Focus on SEO and local search optimization",
        "Set up basic email marketing campaigns",
        "Create lead magnets and opt-in forms",
        "Develop a consistent social media presence"
      ];
    }
    return [
      "Start with a professional website and basic SEO",
      "Set up Google My Business and local listings",
      "Create social media profiles and post regularly",
      "Implement basic lead capture and follow-up systems"
    ];
  };

  if (showResults) {
    const { score, yesAnswers, totalQuestions, categoryResults } = calculateResults();
    const actionPlan = getActionPlan(score);

    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Marketing Scorecard Results | SmartFirm"
          description="Your marketing assessment results with personalized recommendations for accounting firm growth."
          canonicalUrl="https://smartfirm.io/tools/marketing-scorecard"
          pageType="tool"
          toolName="Marketing Scorecard"
          noindex={false}
        />
        <Header />
        <main className="pt-20">
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl">
              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Marketing Effectiveness Score</CardTitle>
                  <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                    {score}%
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {yesAnswers} out of {totalQuestions} marketing elements in place
                  </p>
                  <p className={`text-lg font-medium ${getScoreColor(score)}`}>
                    {getScoreMessage(score)}
                  </p>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      What's Working
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {questions
                        .filter(q => answers[q.id])
                        .map(q => (
                          <li key={q.id} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                            {q.question}
                          </li>
                        ))}
                    </ul>
                    {Object.values(answers).filter(Boolean).length === 0 && (
                      <p className="text-muted-foreground italic">
                        Focus on implementing the action plan below to start building your marketing foundation.
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                      Priority Action Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {actionPlan.map((action, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {Object.entries(categoryResults).map(([category, result]) => {
                  const categoryScore = Math.round((result.correct / result.total) * 100);
                  return (
                    <Card key={category}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">{category}</CardTitle>
                        <div className={`text-2xl font-bold ${getScoreColor(categoryScore)}`}>
                          {result.correct}/{result.total}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={categoryScore} className="h-2" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" variant="coral" asChild>
                  <a href="/get-started">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ.id];

  return (
    <ToolPageWrapper
      title="Marketing Assessment Tool for Accountants | SmartFirm"
      description="Complete our marketing assessment for accountants scoring your website, SEO, automation, content, social media, and reviews to identify opportunities."
      pageTitle="Marketing Assessment For Accountants | SmartFirm"
      intro="Our marketing assessment for accountants evaluates your website effectiveness, SEO performance, marketing automation, content strategy, social media presence, and online reviews to identify growth opportunities."
    >
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <a href="/tools">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </a>
            </Button>
            <h2 className="text-3xl font-bold text-primary mb-4">Answer These Questions</h2>
            <Progress value={progress} className="mb-4" />
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length} • {currentQ.category}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup 
                value={currentAnswer === undefined ? "" : currentAnswer ? "yes" : "no"} 
                onValueChange={handleAnswerChange}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="flex-1 cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="flex-1 cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline" 
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button 
                  onClick={nextQuestion}
                  disabled={currentAnswer === undefined}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <EmailCaptureModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onContinue={handleContinueToResults}
      />
    </ToolPageWrapper>
  );
};

export default MarketingScorecard;
