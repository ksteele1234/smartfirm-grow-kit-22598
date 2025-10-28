import { Search, Globe, Star, Mail, BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

export const CompleteMarketingSolutions = () => {
  const heading = useScrollAnimation();

  return (
    <section className="relative overflow-hidden bg-gradient-muted-blue section-padding">
      <div className="mx-auto max-w-container-2xl">
        {/* Section Heading */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white max-w-container-lg mx-auto mb-4">
            Complete Marketing Solutions for Accountants, CPAs, and Bookkeepers
          </h2>
          <p className="text-lg text-white/70 max-w-text-md mx-auto mb-12">
            The foundational marketing infrastructure every accounting firm needs to attract, convert, and retain high-value clients.
          </p>
        </motion.div>

        {/* Foundation Setup Card - Full Width at Top */}
        <motion.div 
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ delay: 0 }}
          className="mb-8"
        >
          <Link 
            to="/services/strategy-integration" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-4">
              Core Service
            </span>
            
            <Settings 
              className="w-12 h-12 text-[#14b8a6] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Foundation Setup: Strategy + Integration
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Every SmartFirm client starts here: intake call, competitive research, calendar + CRM setup, your first automated workflow live in 7-10 days.
            </p>
          </Link>
        </motion.div>

        {/* Two Core Services Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* SEO Card */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.1 }}
          >
            <Link
            to="/services/seo-for-accountants" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-4">
              Core Service
            </span>
            
            <Search 
              className="w-12 h-12 text-[#2dd4bf] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Get Found By Local Clients
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Local SEO, Google Business Profile optimization, and directory listings so prospects searching "CPA near me" find YOU first.
            </p>
          </Link>
          </motion.div>

          {/* Website Card */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            <Link
            to="/services/website-design" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-lg mb-4">
              Core Service
            </span>
            
            <Globe 
              className="w-12 h-12 text-[#14b8a6] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Website That Converts + Full Tracking
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Professional website with contact forms, booking, and analytics—so you know exactly where your leads come from.
            </p>
          </Link>
          </motion.div>
        </div>

        {/* Three Supporting Services - 3 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Generation Card */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.3 }}
          >
            <Link
            to="/services/client-review-generation" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <Star 
              className="w-12 h-12 text-[#2dd4bf] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Automated Review Generation
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Set-and-forget review requests that build your reputation while you focus on client work.
            </p>
          </Link>
          </motion.div>

          {/* Email/SMS Card */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.4 }}
          >
            <Link
            to="/services/email-marketing" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <Mail 
              className="w-12 h-12 text-[#14b8a6] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Professional Email & SMS Workflows
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Nurture sequences, appointment reminders, and follow-ups that keep clients engaged without manual effort.
            </p>
          </Link>
          </motion.div>

          {/* Analytics Card */}
          <motion.div
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ delay: 0.4 }}
          >
            <Link
            to="/services/technology-solutions" 
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-[20px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(45,212,191,0.2)]"
          >
            <BarChart3 
              className="w-12 h-12 text-[#2dd4bf] mb-5" 
              style={{ filter: 'drop-shadow(0 0 12px rgba(20, 184, 166, 0.5))' }} 
            />
            
            <h3 className="text-xl font-semibold text-white mb-3">
              Your Marketing Command Center
            </h3>
            
            <p className="text-base text-white/80 leading-relaxed">
              Real-time dashboards showing leads, conversions, and ROI—marketing that actually proves its value.
            </p>
          </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
