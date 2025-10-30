import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion';
import { homepageFaqs } from "@/data/faqContent";
import FaqAnswer from "@/components/faq/FaqAnswer";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUpVariants } from '@/lib/animationVariants';

const HomepageFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const heading = useScrollAnimation();

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = homepageFaqs;


  return (
    <section className="relative bg-gradient-mesh-professional overflow-hidden section-padding">
      <div className="mx-auto max-w-container-2xl relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-on-dark-heading mb-4">
            Questions? We Have Answers.
          </h2>
          <p className="text-lg text-on-dark-muted max-w-text-md mx-auto">
            Everything you need to know about building your marketing foundation with SmartFirm
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-container-lg mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            const delay = Math.min(index * 0.05, 0.2);
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={heading.isInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ delay }}
                className="bg-white border border-border rounded-card elevation-1 hover:elevation-2 transition-shadow duration-200"
              >
                {/* Question (Clickable) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
                >
                  <span className="text-lg font-semibold text-secondary group-hover:text-accent transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <ChevronDown 
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer (Expandable) */}
                <div
                  className={`overflow-hidden color-transition ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <FaqAnswer
                      text={faq.answer}
                      paragraphClassName="text-base text-foreground leading-[1.7]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomepageFAQSection;
