import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

interface FinalCTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  reassuranceText?: string;
}

const FinalCTASection = ({ 
  title = "Are You Serious About Scaling to $1M?",
  description = "Join 40+ companies building the marketing foundation that drives consistent growth. Early adopter pricing ends soon—start now and see results in 30 days.",
  primaryButtonText = "Book a Free Call",
  primaryButtonLink = "/get-started",
  reassuranceText = "No commitment required • 30-minute consultation"
}: FinalCTASectionProps = {}) => {
  const content = useScrollAnimation();

  return (
    <section className="relative overflow-hidden bg-gradient-muted-blue section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-text-md">
        <motion.div 
          ref={content.ref}
          initial="hidden"
          animate={content.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="mx-auto text-center"
        >
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {title}
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/70 leading-relaxed max-w-text-sm mx-auto mb-10">
            {description}
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center mb-4">
            <Button
              size="lg"
              asChild
              className="px-12 py-5 text-xl font-bold bg-gradient-coral text-white hover:translate-y-[-2px] glow-coral hover:shadow-[0_12px_40px_rgba(251,113,133,0.7)] transition-all duration-300 rounded-card animate-gentle-pulse"
            >
              <Link to={primaryButtonLink}>
                {primaryButtonText}
              </Link>
            </Button>
          </div>

          {/* Reassurance Text */}
          <p className="text-sm text-white/60 text-center">
            {reassuranceText}
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default FinalCTASection;
