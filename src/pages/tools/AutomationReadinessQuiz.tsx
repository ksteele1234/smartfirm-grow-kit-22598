import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SEO from "@/components/SEO";

const questions = [
  {
    id: 1,
    question: "Do you use automated invoicing software?",
    category: "Invoicing"
  },
  {
    id: 2,
    question: "Are client payments processed automatically?",
    category: "Invoicing"
  },
  {
    id: 3,
    question: "Do new clients complete digital onboarding forms?",
    category: "Client Onboarding"
  },
  {
    id: 4,
    question: "Is client document collection automated?",
    category: "Client Onboarding"
  },
  {
    id: 5,
    question: "Do you have automated welcome sequences for new clients?",
    category: "Client Onboarding"
  },
  {
    id: 6,
    question: "Are your marketing emails sent automatically?",
    category: "Marketing"
  },
  {
    id: 7,
    question: "Do you have automated lead follow-up sequences?",
    category: "Marketing"
  },
  {
    id: 8,
    question: "Are social media posts scheduled automatically?",
    category: "Marketing"
  },
  {
    id: 9,
    question: "Do you use automated appointment scheduling?",
    category: "Operations"
  },
  {
    id: 10,
    question: "Are client reminders sent automatically?",
    category: "Operations"
  }
];

const AutomationReadinessQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const yesAnswers = Object.values(answers).filter(Boolean).length;
    return Math.round((yesAnswers / questions.length) * 100);
  };

  const getScoreCategory = (score: number) => {
    if (score >= 80) return { level: "Advanced", color: "text-green-600", description: "Your firm is well-automated!" };
    if (score >= 60) return { level: "Intermediate", color: "text-blue-600", description: "Good automation foundation with room to grow." };
    if (score >= 40) return { level: "Basic", color: "text-yellow-600", description: "Some automation in place, significant opportunity." };
    return { level: "Beginner", color: "text-red-600", description: "Major automation opportunities await!" };
  };

  const getRecommendations = (score: number) => {
    if (score >= 80) {
      return [
        "Focus on advanced workflow optimization",
        "Consider AI-powered analytics and insights",
        "Explore integration opportunities between existing tools"
      ];
    }
    if (score >= 60) {
      return [
        "Automate remaining manual marketing tasks",
        "Implement advanced client onboarding workflows",
        "Set up automated reporting and analytics"
      ];
    }
    if (score >= 40) {
      return [
        "Start with automated email marketing sequences",
        "Implement digital client onboarding",
        "Set up automated invoicing and payment processing"
      ];
    }
    return [
      "Begin with basic email automation",
      "Implement automated scheduling and reminders",
      "Set up simple lead capture and follow-up"
    ];
  };

  if (showResults) {
    const score = calculateScore();
    const scoreCategory = getScoreCategory(score);
    const recommendations = getRecommendations(score);

    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Automation Readiness Quiz Results | SmartFirm"
          description="Your automation readiness score with recommendations to improve efficiency in your accounting firm."
          canonicalUrl="https://smartfirm.io/tools/automation-readiness-quiz"
          pageType="tool"
          toolName="Automation Readiness Quiz"
          noindex={false}
        />
        <Header />
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-2xl mx-auto">
            <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Your Automation Readiness Score</CardTitle>
                <CardDescription>Here's how automation-ready your firm is</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
                  <div className={`text-xl font-semibold ${scoreCategory.color}`}>
                    {scoreCategory.level}
                  </div>
                  <p className="text-muted-foreground mt-2">{scoreCategory.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Personalized Recommendations:</h3>
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Automate Your Firm?</h3>
                  <p className="text-muted-foreground mb-4">
                    Let SmartFirm help you implement these automation solutions and boost your efficiency.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your SmartFirm Accelerator Plan
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
        title="Automation Readiness Assessment for Accountants"
        description="Discover if you're ready for automation with our readiness assessment for accountants evaluating processes, technology, team, and client base for automation."
        canonicalUrl="https://smartfirm.io/tools/automation-readiness-quiz"
        pageType="tool"
        toolName="Automation Readiness Quiz"
        noindex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-2xl mx-auto">
          <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-12">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">Automation Readiness Assessment For Accountants</h1>
          <div id="sf-keyword-intro">
            <p className="text-sm text-muted-foreground -mt-6 mb-8 text-center" data-sf="entities">
              Our automation readiness assessment for accountants evaluates your current processes, technology infrastructure, team capabilities, and client base to determine your optimal automation strategy and implementation timeline.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Automation Readiness Quiz</CardTitle>
              <CardDescription>
                Discover how ready your firm is for automation in just 2 minutes
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
                  <h3 className="text-lg font-medium mb-2">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Category: {questions[currentQuestion].category}
                  </p>
                </div>

                <RadioGroup className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="cursor-pointer">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="cursor-pointer">No</Label>
                  </div>
                </RadioGroup>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    onClick={() => handleAnswer(true)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Yes
                  </Button>
                  <Button 
                    onClick={() => handleAnswer(false)}
                    variant="outline" 
                    className="flex-1"
                  >
                    No
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

export default AutomationReadinessQuiz;