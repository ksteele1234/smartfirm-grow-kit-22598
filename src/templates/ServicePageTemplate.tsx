import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Button } from "@/components/ui/button";
import { ServicePageData } from "@/types/cms";
import { CheckCircle, ArrowRight, Settings } from "lucide-react";
import { StandardCard } from "@/components/ui/standard-card";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const heroStyles = `
  @keyframes rotateClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateClockwiseBottomRight {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateClockwiseUpperLeft {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotateCounterClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  
  @keyframes rotateCounterClockwiseBottomRight {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  
  @keyframes rotateCounterClockwiseUpperLeft {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  
  @keyframes bubble-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes pulse-dot {
    0%, 100% { 
      transform: scale(1); 
      opacity: 0.6; 
    }
    50% { 
      transform: scale(1.5); 
      opacity: 1; 
    }
  }
  
  @keyframes pulse-button {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
  
  @media (max-width: 768px) {
    .orbital-circle-set-1 { transform: scale(0.7); }
    .orbital-circle-set-2 { transform: scale(0.7); }
    .orbital-circle-set-3 { transform: scale(0.7); }
  }
`;

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const ServicePageTemplate = ({ data }: ServicePageTemplateProps) => {
  const servicesIndexPath = "/leading-marketing-services-for-accounting-firms";
  const defaultFAQs = [
    {
      question: "How long does implementation take?",
      answer: "Most service implementations are completed within 2-4 weeks, with initial results visible in the first month."
    },
    {
      question: "What integrations are supported?",
      answer: "We integrate with leading accounting platforms including QuickBooks, Xero, and popular CRM systems."
    },
    {
      question: "Is training included?",
      answer: "Yes, we provide comprehensive onboarding and training for your team to ensure smooth adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-sf-fixed="headings entities">
      <SEO
        pageType="service"
        serviceName={data.title.replace(' for Accounting Firms', '').replace(' for Finance Firms', '')}
        audience="accounting firms"
        title={data.title}
        description={(data.heroDescription || data.heroSubtitle).substring(0, 155)}
        canonicalUrl={data.canonicalUrl}
        noindex={false}
        dateModified={new Date().toISOString()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: servicesIndexPath },
          { name: data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', ''), url: window.location.pathname }
        ]}
        faqs={data.faqs || defaultFAQs}
      />
      <Header />
      
      <main id="main-content" role="main">
      {/* Hero Section - Blue Gradient Background */}
      <section
        className="hero-section relative pt-32 min-h-[600px] px-4 sm:px-6 lg:px-8 overflow-hidden wave-bottom"
        style={{
          background: 'linear-gradient(135deg, #243b55 0%, #4a7ba7 100%)'
        }}
      >
        <style>{heroStyles}</style>
        
        {/* Breadcrumbs */}
        <nav id="sf-breadcrumbs" className="absolute top-0 left-0 right-0 pt-4 z-20" aria-label="Breadcrumb">
          <div className="max-w-[1400px] mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList className="text-xs text-white/60">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white/80">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/leading-marketing-services-for-accounting-firms" className="hover:text-white/80">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white/60">{data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', '')}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        <div className="hero-container max-w-[1400px] mx-auto relative flex items-center justify-center min-h-[500px] pt-8">
          {/* Hero Content - Centered */}
          <div className="hero-content relative z-10 text-center max-w-[800px] px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {data.heroTitle}
            </motion.h1>
            
            <div id="sf-keyword-intro">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {data.heroSubtitle}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Button 
                size="lg"
                className="px-8 py-4 md:px-8 md:py-4 text-lg font-bold bg-gradient-to-r from-[#fb7185] to-[#f43f5e] text-white rounded-xl shadow-[0_4px_24px_rgba(251,113,133,0.6)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(251,113,133,0.8)] transition-all duration-200"
                style={{ animation: 'pulse-button 2s ease-in-out infinite' }}
                asChild
              >
                <a href="/get-started">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Hero Graphics - Orbital Circles */}
          <div className="hero-graphics absolute inset-0 z-[1] pointer-events-none">
            {/* Glass Bubble with Settings Icon */}
            <div 
              className="absolute top-10 left-[190px] w-[120px] h-[120px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] bg-white/8 backdrop-blur-[20px] border border-white/12 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-[15]"
              style={{ animation: 'bubble-float 4s ease-in-out infinite' }}
            >
              <Settings className="w-[50px] h-[50px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] text-[#14b8a6]" style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} />
            </div>
            
            {/* SET 1: CENTER/MAIN - ALL TEAL */}
            <div className="orbital-circle-set-1">
              <div 
                className="absolute top-1/2 left-1/2"
                style={{ transform: 'translate(calc(-50% + 500px), -50%)' }}
              >
                {/* Outer Circle (400px) */}
                <div 
                  className="absolute w-[400px] h-[400px] border-[3px] border-[rgba(20,184,166,0.5)] rounded-full"
                  style={{ top: 'calc(50% - 200px)', left: 'calc(50% - 200px)', animation: 'rotateClockwise 60s linear infinite' }}
                >
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 200px)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 141px)', top: 'calc(50% - 141px)', animation: 'pulse-dot 2s ease-in-out infinite 0.2s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 200px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 0.4s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 141px)', top: 'calc(50% + 141px)', animation: 'pulse-dot 2s ease-in-out infinite 0.6s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 200px)', animation: 'pulse-dot 2s ease-in-out infinite 0.8s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 141px)', top: 'calc(50% + 141px)', animation: 'pulse-dot 2s ease-in-out infinite 1s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 200px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 1.2s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 141px)', top: 'calc(50% - 141px)', animation: 'pulse-dot 2s ease-in-out infinite 1.4s' }} />
                </div>
                
                {/* Middle Circle (250px) */}
                <div 
                  className="absolute w-[250px] h-[250px] border-[3px] border-[rgba(20,184,166,0.5)] rounded-full"
                  style={{ top: 'calc(50% - 125px)', left: 'calc(50% - 125px)', animation: 'rotateCounterClockwise 60s linear infinite' }}
                >
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 125px)', animation: 'pulse-dot 2s ease-in-out infinite 0.1s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 88px)', top: 'calc(50% - 88px)', animation: 'pulse-dot 2s ease-in-out infinite 0.3s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 125px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 0.5s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 88px)', top: 'calc(50% + 88px)', animation: 'pulse-dot 2s ease-in-out infinite 0.7s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 125px)', animation: 'pulse-dot 2s ease-in-out infinite 0.9s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 88px)', top: 'calc(50% + 88px)', animation: 'pulse-dot 2s ease-in-out infinite 1.1s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 125px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 1.3s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 88px)', top: 'calc(50% - 88px)', animation: 'pulse-dot 2s ease-in-out infinite 1.5s' }} />
                </div>
                
                {/* Inner Circle (100px) */}
                <div 
                  className="absolute w-[100px] h-[100px] border-[3px] border-[rgba(20,184,166,0.5)] rounded-full"
                  style={{ top: 'calc(50% - 50px)', left: 'calc(50% - 50px)', animation: 'rotateClockwise 60s linear infinite' }}
                >
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 50px)', animation: 'pulse-dot 2s ease-in-out infinite 0.15s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 35px)', top: 'calc(50% - 35px)', animation: 'pulse-dot 2s ease-in-out infinite 0.35s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 50px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 0.55s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% + 35px)', top: 'calc(50% + 35px)', animation: 'pulse-dot 2s ease-in-out infinite 0.75s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 50px)', animation: 'pulse-dot 2s ease-in-out infinite 0.95s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 35px)', top: 'calc(50% + 35px)', animation: 'pulse-dot 2s ease-in-out infinite 1.15s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 50px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 1.35s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-[#14b8a6] -ml-1 -mt-1" style={{ left: 'calc(50% - 35px)', top: 'calc(50% - 35px)', animation: 'pulse-dot 2s ease-in-out infinite 1.55s' }} />
                </div>
              </div>
            </div>
            
            {/* SET 2: BOTTOM RIGHT - ALL GOLD */}
            <div className="orbital-circle-set-2">
              <div 
                className="absolute w-[280px] h-[280px] border-[3px] border-[rgba(251,191,36,0.4)] rounded-full"
                style={{ bottom: '270px', right: '-120px', animation: 'rotateClockwiseBottomRight 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 140px)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% + 121px)', top: 'calc(50% - 70px)', animation: 'pulse-dot 2s ease-in-out infinite 0.3s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% + 121px)', top: 'calc(50% + 70px)', animation: 'pulse-dot 2s ease-in-out infinite 0.6s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 140px)', animation: 'pulse-dot 2s ease-in-out infinite 0.9s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% - 121px)', top: 'calc(50% + 70px)', animation: 'pulse-dot 2s ease-in-out infinite 1.2s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% - 121px)', top: 'calc(50% - 70px)', animation: 'pulse-dot 2s ease-in-out infinite 1.5s' }} />
              </div>
              
              <div 
                className="absolute w-[210px] h-[210px] border-[3px] border-[rgba(251,191,36,0.4)] rounded-full"
                style={{ bottom: '305px', right: '-85px', animation: 'rotateCounterClockwiseBottomRight 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 105px)', animation: 'pulse-dot 2s ease-in-out infinite 0.2s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% + 91px)', top: 'calc(50% - 52px)', animation: 'pulse-dot 2s ease-in-out infinite 0.4s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% + 91px)', top: 'calc(50% + 52px)', animation: 'pulse-dot 2s ease-in-out infinite 0.5s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 105px)', animation: 'pulse-dot 2s ease-in-out infinite 0.8s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% - 91px)', top: 'calc(50% + 52px)', animation: 'pulse-dot 2s ease-in-out infinite 1.1s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% - 91px)', top: 'calc(50% - 52px)', animation: 'pulse-dot 2s ease-in-out infinite 1.4s' }} />
              </div>
              
              <div 
                className="absolute w-[140px] h-[140px] border-[3px] border-[rgba(251,191,36,0.4)] rounded-full"
                style={{ bottom: '340px', right: '-50px', animation: 'rotateClockwiseBottomRight 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 70px)', animation: 'pulse-dot 2s ease-in-out infinite 0.25s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% + 70px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 0.55s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 70px)', animation: 'pulse-dot 2s ease-in-out infinite 1s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fbbf24] -ml-1 -mt-1" style={{ left: 'calc(50% - 70px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 1.35s' }} />
              </div>
            </div>
            
            {/* SET 3: UPPER LEFT - ALL CORAL */}
            <div className="orbital-circle-set-3">
              <div 
                className="absolute w-[260px] h-[260px] border-[3px] border-[rgba(251,113,133,0.4)] rounded-full"
                style={{ top: '-140px', left: '-80px', animation: 'rotateClockwiseUpperLeft 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 130px)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% + 113px)', top: 'calc(50% - 65px)', animation: 'pulse-dot 2s ease-in-out infinite 0.3s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% + 113px)', top: 'calc(50% + 65px)', animation: 'pulse-dot 2s ease-in-out infinite 0.6s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 130px)', animation: 'pulse-dot 2s ease-in-out infinite 0.9s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% - 113px)', top: 'calc(50% + 65px)', animation: 'pulse-dot 2s ease-in-out infinite 1.2s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% - 113px)', top: 'calc(50% - 65px)', animation: 'pulse-dot 2s ease-in-out infinite 1.5s' }} />
              </div>
              
              <div 
                className="absolute w-[190px] h-[190px] border-[3px] border-[rgba(251,113,133,0.4)] rounded-full"
                style={{ top: '-105px', left: '-45px', animation: 'rotateCounterClockwiseUpperLeft 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 95px)', animation: 'pulse-dot 2s ease-in-out infinite 0.2s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% + 82px)', top: 'calc(50% - 47px)', animation: 'pulse-dot 2s ease-in-out infinite 0.4s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% + 82px)', top: 'calc(50% + 47px)', animation: 'pulse-dot 2s ease-in-out infinite 0.5s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 95px)', animation: 'pulse-dot 2s ease-in-out infinite 0.8s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% - 82px)', top: 'calc(50% + 47px)', animation: 'pulse-dot 2s ease-in-out infinite 1.1s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% - 82px)', top: 'calc(50% - 47px)', animation: 'pulse-dot 2s ease-in-out infinite 1.4s' }} />
              </div>
              
              <div 
                className="absolute w-[120px] h-[120px] border-[3px] border-[rgba(251,113,133,0.4)] rounded-full"
                style={{ top: '-70px', left: '-10px', animation: 'rotateClockwiseUpperLeft 60s linear infinite' }}
              >
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% - 60px)', animation: 'pulse-dot 2s ease-in-out infinite 0.25s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% + 60px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 0.55s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: '50%', top: 'calc(50% + 60px)', animation: 'pulse-dot 2s ease-in-out infinite 1s' }} />
                <div className="absolute w-2 h-2 rounded-full bg-[#fb7185] -ml-1 -mt-1" style={{ left: 'calc(50% - 60px)', top: '50%', animation: 'pulse-dot 2s ease-in-out infinite 1.35s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - White Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative wave-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-[#0a2e2e] mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Key Benefits
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-base md:text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Discover how this service transforms your accounting firm
            </motion.p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {data.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: isMobile ? 0.4 : 0.6,
                  delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <StandardCard
                  icon={CheckCircle}
                  title={benefit.title}
                  description={benefit.description}
                  variant={
                    benefit.title === "Executive Dashboards" ? "popular" : 
                    index === 1 ? "featured" : 
                    "default"
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - White Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative wave-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-[#0a2e2e] mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Features & Capabilities
            </motion.h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: isMobile ? 0.4 : 0.6,
                  delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <StandardCard
                  title={feature.title}
                  description={feature.description}
                  variant={index === 1 ? "featured" : "default"}
                >
                  {feature.details && (
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-[#14b8a6] mt-1 flex-shrink-0" />
                            <span className="text-sm text-[#334155]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </StandardCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - White Background (Moved before Final CTA) */}
      <section id="sf-faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white wave-bottom">
        <div className="max-w-4xl mx-auto">
          {/* Decorative centered line */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent mx-auto mb-8"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-[#0a2e2e] mb-8 text-center leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {(data.faqs || defaultFAQs).map((faq, index) => (
              <motion.details 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: isMobile ? 0.4 : 0.6,
                  delay: isMobile ? Math.min(index * 0.1, 0.3) : index * 0.1,
                  ease: "easeOut" 
                }}
                className="border border-[#e2e8f0] rounded-lg p-4 bg-white shadow-sm"
              >
                <summary className="cursor-pointer font-semibold text-lg text-[#0a2e2e]" style={{ fontFamily: "'Poppins', sans-serif" }}>{faq.question}</summary>
                <div className="text-[#334155] mt-3 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{faq.answer}</div>
              </motion.details>
            ))}
          </div>
        </div>
        <script id="sf-faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (data.faqs || defaultFAQs).map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
        <script id="sf-entity-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": data.title,
            "provider": {
              "@type": "Organization",
              "name": "SmartFirm",
              "url": window.location.origin
            },
            "description": data.heroDescription
          })}
        </script>
      </section>

      {/* Final CTA Section - Blue Gradient Background */}
      <section 
        className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden wave-top wave-bottom"
        style={{
          background: 'linear-gradient(135deg, #243b55 0%, #4a7ba7 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center pb-8 md:pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {data.ctaTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.ctaDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: isMobile ? 0.4 : 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-bold bg-white text-[#243b55] hover:bg-white/90 transition-all duration-200 group"
              asChild
            >
              <a href={data.ctaButtonLink}>
                {data.ctaButtonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      </main>

      <script id="sf-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${window.location.origin}/` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${window.location.origin}${servicesIndexPath}` },
            { "@type": "ListItem", "position": 3, "name": data.title.replace(' for Accounting Firms', '').replace(' | SmartFirm', ''), "item": window.location.href }
          ]
        })}
      </script>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
