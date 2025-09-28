import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, ArrowLeft, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const questions = [
  {
    id: 1,
    question: "How many qualified leads do you generate per month?",
    options: [
      { value: 4, label: "20+ leads", points: 4 },
      { value: 3, label: "10-19 leads", points: 3 },
      { value: 2, label: "5-9 leads", points: 2 },
      { value: 1, label: "1-4 leads", points: 1 },
      { value: 0, label: "0 leads consistently", points: 0 }
    ]
  },
  {
    id: 2,
    question: "What's your lead-to-client conversion rate?",
    options: [
      { value: 4, label: "50%+ conversion", points: 4 },
      { value: 3, label: "30-49% conversion", points: 3 },
      { value: 2, label: "15-29% conversion", points: 2 },
      { value: 1, label: "5-14% conversion", points: 1 },
      { value: 0, label: "Under 5% or don't track", points: 0 }
    ]
  },
  {
    id: 3,
    question: "How quickly do you follow up with new leads?",
    options: [
      { value: 4, label: "Within 1 hour (automated)", points: 4 },
      { value: 3, label: "Same day", points: 3 },
      { value: 2, label: "Within 24-48 hours", points: 2 },
      { value: 1, label: "Within a week", points: 1 },
      { value: 0, label: "When I remember to", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Do you have a systematic lead nurturing process?",
    options: [
      { value: 4, label: "Automated email sequences + personal follow-up", points: 4 },
      { value: 3, label: "Regular personal follow-up", points: 3 },
      { value: 2, label: "Occasional check-ins", points: 2 },
      { value: 1, label: "Single follow-up attempt", points: 1 },
      { value: 0, label: "No formal process", points: 0 }
    ]
  },
  {
    id: 5,
    question: "How many lead generation channels are you actively using?",
    options: [
      { value: 4, label: "5+ channels (referrals, SEO, social, ads, networking)", points: 4 },
      { value: 3, label: "3-4 channels", points: 3 },
      { value: 2, label: "2 channels", points: 2 },
      { value: 1, label: "1 channel only", points: 1 },
      { value: 0, label: "Relying on referrals only", points: 0 }
    ]
  },
  {
    id: 6,
    question: "Do you track your marketing ROI?",
    options: [
      { value: 4, label: "Yes, I know cost-per-lead for each channel", points: 4 },
      { value: 3, label: "Yes, I track overall marketing spend vs. new clients", points: 3 },
      { value: 2, label: "I have a general idea", points: 2 },
      { value: 1, label: "I track spending but not results", points: 1 },
      { value: 0, label: "No tracking at all", points: 0 }
    ]
  },
  {
    id: 7,
    question: "How often do you generate leads without directly paying for ads?",
    options: [
      { value: 4, label: "80%+ organic (referrals, SEO, content)", points: 4 },
      { value: 3, label: "60-79% organic", points: 3 },
      { value: 2, label: "40-59% organic", points: 2 },
      { value: 1, label: "20-39% organic", points: 1 },
      { value: 0, label: "Under 20% organic", points: 0 }
    ]
  },
  {
    id: 8,
    question: "Are your leads coming from your ideal client profile?",
    options: [
      { value: 4, label: "80%+ are ideal clients", points: 4 },
      { value: 3, label: "60-79% are ideal clients", points: 3 },
      { value: 2, label: "40-59% are ideal clients", points: 2 },
      { value: 1, label: "20-39% are ideal clients", points: 1 },
      { value: 0, label: "Mostly low-value or poor-fit clients", points: 0 }
    ]
  }
];

const LeadGenerationScorecard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (points: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: points }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, points) => sum + points, 0);
    const maxPoints = questions.length * 4;
    return {
      total: totalPoints,
      percentage: Math.round((totalPoints / maxPoints) * 100),
      maxPoints
    };
  };

  const getScoreCategory = (percentage: number) => {
    if (percentage >= 80) return { 
      level: "Lead Generation Champion", 
      color: "text-green-600", 
      description: "You have a strong lead generation system!",
      emoji: "🚀"
    };
    if (percentage >= 60) return { 
      level: "Growing Pipeline", 
      color: "text-blue-600", 
      description: "Good foundation with room for optimization.",
      emoji: "📈"
    };
    if (percentage >= 40) return { 
      level: "Inconsistent Flow", 
      color: "text-yellow-600", 
      description: "Some lead generation happening, but inconsistent.",
      emoji: "⚠️"
    };
    return { 
      level: "Lead Generation Crisis", 
      color: "text-red-600", 
      description: "Your growth is at risk without more leads.",
      emoji: "🚨"
    };
  };

  const getRecommendations = (percentage: number) => {
    if (percentage >= 80) {
      return [
        "Focus on scaling your best-performing channels",
        "Implement advanced attribution tracking",
        "Develop strategic partnerships for referrals",
        "Create premium content to attract higher-value clients"
      ];
    }
    if (percentage >= 60) {
      return [
        "Automate your lead follow-up process",
        "Add 1-2 new lead generation channels",
        "Improve lead qualification and scoring",
        "Create a consistent content marketing strategy"
      ];
    }
    if (percentage >= 40) {
      return [
        "Implement automated lead nurturing sequences",
        "Set up proper lead tracking and CRM",
        "Develop a referral program for existing clients",
        "Start consistent content creation for SEO"
      ];
    }
    return [
      "Establish a basic lead capture system on your website",
      "Set up Google My Business and local SEO",
      "Create a simple email follow-up sequence",
      "Ask every satisfied client for referrals"
    ];
  };

  if (showResults) {
    const score = calculateScore();
    const scoreCategory = getScoreCategory(score.percentage);
    const recommendations = getRecommendations(score.percentage);

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tools
            </Link>
            
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Your Lead Generation Score</CardTitle>
                <CardDescription>Are you getting enough leads for growth?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">{scoreCategory.emoji}</div>
                  <div className="text-5xl font-bold text-primary mb-2">{score.percentage}%</div>
                  <div className={`text-xl font-semibold ${scoreCategory.color} mb-2`}>
                    {scoreCategory.level}
                  </div>
                  <p className="text-muted-foreground">{scoreCategory.description}</p>
                  <div className="text-sm text-muted-foreground mt-2">
                    {score.total} out of {score.maxPoints} points
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-center mb-2">Lead Generation Health</h3>
                      <Progress value={score.percentage} className="mb-2" />
                      <p className="text-sm text-center text-muted-foreground">
                        {score.percentage < 60 ? "Below industry standards" : "Meeting expectations"}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-center mb-2">Growth Potential</h3>
                      <div className="text-2xl font-bold text-green-600 text-center">
                        {score.percentage < 40 ? "High" : score.percentage < 70 ? "Medium" : "Optimization"}
                      </div>
                      <p className="text-sm text-center text-muted-foreground">
                        Room for improvement
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Your Priority Actions:</h3>
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

                {score.percentage < 60 && (
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-3">⚠️ Growth Warning</h3>
                      <p className="text-sm text-red-700">
                        Your current lead generation is insufficient for sustainable growth. Most successful firms generate 10-20 qualified leads per month with a 30%+ conversion rate. 
                        Without improvement, you may struggle to replace departing clients and scale your practice.
                      </p>
                    </CardContent>
                  </Card>
                )}

                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Lead Generation?</h3>
                  <p className="text-muted-foreground mb-4">
                    SmartFirm's automated marketing system can help you consistently generate qualified leads and convert them into clients.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Your Lead Generation Blueprint
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
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Link to="/tools" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tools
          </Link>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Lead Generation Scorecard</CardTitle>
              <CardDescription>
                Quick assessment: Are you getting enough leads for growth?
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
                          {option.points === 4 ? "Excellent" : option.points === 3 ? "Good" : option.points === 2 ? "Fair" : option.points === 1 ? "Poor" : "Needs Work"}
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

export default LeadGenerationScorecard;