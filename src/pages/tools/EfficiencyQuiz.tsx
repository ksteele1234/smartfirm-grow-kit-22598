import { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, ArrowRight, BarChart3 } from "lucide-react";

interface Question {
  id: string;
  category: 'billing' | 'client' | 'marketing';
  question: string;
  options: { value: string; label: string; score: number }[];
}

const EfficiencyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: "billing_1",
      category: "billing",
      question: "How do you currently handle time tracking for billable hours?",
      options: [
        { value: "manual", label: "Manual tracking with spreadsheets or paper", score: 1 },
        { value: "basic_software", label: "Basic time tracking software", score: 2 },
        { value: "integrated", label: "Integrated time tracking with billing automation", score: 3 },
        { value: "ai_powered", label: "AI-powered tracking with automatic categorization", score: 4 }
      ]
    },
    {
      id: "billing_2", 
      category: "billing",
      question: "How often do you send invoices to clients?",
      options: [
        { value: "manually", label: "Manually, when I remember", score: 1 },
        { value: "monthly_manual", label: "Monthly, but manually created", score: 2 },
        { value: "automated_monthly", label: "Automated monthly invoicing", score: 3 },
        { value: "real_time", label: "Real-time or milestone-based automated billing", score: 4 }
      ]
    },
    {
      id: "client_1",
      category: "client", 
      question: "How do you manage client communications and documents?",
      options: [
        { value: "email_folders", label: "Email folders and local file storage", score: 1 },
        { value: "cloud_basic", label: "Basic cloud storage with email", score: 2 },
        { value: "client_portal", label: "Client portal with document sharing", score: 3 },
        { value: "integrated_system", label: "Fully integrated CRM and document management", score: 4 }
      ]
    },
    {
      id: "client_2",
      category: "client",
      question: "How do you handle client onboarding?",
      options: [
        { value: "manual_process", label: "Manual process with paper forms", score: 1 },
        { value: "email_forms", label: "Email-based forms and documents", score: 2 },
        { value: "online_forms", label: "Online forms with basic automation", score: 3 },
        { value: "full_automation", label: "Fully automated onboarding workflow", score: 4 }
      ]
    },
    {
      id: "marketing_1",
      category: "marketing",
      question: "How do you currently acquire new clients?",
      options: [
        { value: "referrals_only", label: "Mostly referrals and word-of-mouth", score: 1 },
        { value: "basic_marketing", label: "Some basic marketing efforts", score: 2 },
        { value: "consistent_marketing", label: "Consistent marketing with tracking", score: 3 },
        { value: "automated_marketing", label: "Automated marketing funnels and lead nurturing", score: 4 }
      ]
    },
    {
      id: "marketing_2",
      category: "marketing", 
      question: "How do you follow up with potential clients?",
      options: [
        { value: "no_system", label: "No formal follow-up system", score: 1 },
        { value: "manual_reminders", label: "Manual reminders and calls", score: 2 },
        { value: "basic_automation", label: "Basic email automation sequences", score: 3 },
        { value: "full_automation", label: "Full marketing automation with personalization", score: 4 }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const categoryScores = {
      billing: 0,
      client: 0,
      marketing: 0
    };

    const categoryQuestions = {
      billing: 0,
      client: 0,
      marketing: 0
    };

    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          categoryScores[question.category] += option.score;
          categoryQuestions[question.category]++;
        }
      }
    });

    const categoryPercentages = {
      billing: Math.round((categoryScores.billing / (categoryQuestions.billing * 4)) * 100),
      client: Math.round((categoryScores.client / (categoryQuestions.client * 4)) * 100),
      marketing: Math.round((categoryScores.marketing / (categoryQuestions.marketing * 4)) * 100)
    };

    const overallScore = Math.round(
      (categoryPercentages.billing + categoryPercentages.client + categoryPercentages.marketing) / 3
    );

    return { categoryPercentages, overallScore };
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) return "Excellent! Your firm is highly efficient in this area.";
    if (score >= 60) return "Good progress, but there's room for improvement.";
    return "This area needs immediate attention for optimal efficiency.";
  };

  if (showResults) {
    const { categoryPercentages, overallScore } = calculateResults();
    
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Efficiency Quiz | SmartFirm"
          description="How efficient is your accounting firm? Take our quiz to assess billing, client management, and marketing efficiency."
          noindex={false}
        />
        <Header />
        <main className="pt-20">
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-primary mb-4">Your Efficiency Report</h1>
                <p className="text-lg text-muted-foreground">
                  Here's how your firm scores across key efficiency areas
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Overall Efficiency Score</CardTitle>
                  <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>
                    {overallScore}%
                  </div>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(categoryPercentages).map(([category, score]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="capitalize text-lg">
                        {category === 'client' ? 'Client Management' : category}
                      </CardTitle>
                      <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                        {score}%
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={score} className="mb-3" />
                      <p className="text-sm text-muted-foreground">
                        {getRecommendation(score)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-teal/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Ready to Improve Your Efficiency?</CardTitle>
                  <CardDescription className="text-lg">
                    Our SmartFirm Accelerator program can help you boost efficiency across all areas of your practice.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <a href="/get-started">
                        Book Your Strategy Session
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/tools">
                        Take Another Assessment
                        <BarChart3 className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
    <div className="min-h-screen bg-background">
      <SEO 
        title="Efficiency Quiz | SmartFirm"
        description="How efficient is your accounting firm? Take our quiz to assess billing, client management, and marketing efficiency."
        noindex={false}
      />
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container mx-auto max-w-2xl">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <a href="/tools">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tools
                </a>
              </Button>
              <h1 className="text-3xl font-bold text-primary mb-4">How Efficient Is Your Firm?</h1>
              <Progress value={progress} className="mb-4" />
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{currentQ.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={currentAnswer || ""} onValueChange={handleAnswerChange}>
                  {currentQ.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
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
                    disabled={!currentAnswer}
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
      </main>
      <Footer />
    </div>
  );
};

export default EfficiencyQuiz;