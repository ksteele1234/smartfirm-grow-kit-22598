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
    <section className="bg-white overflow-hidden section-padding">
      <div className="mx-auto max-w-container-2xl">
        {/* Section Header */}
        <motion.div 
          ref={heading.ref}
          initial="hidden"
          animate={heading.isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#647FBC] mb-4">
            Questions? We Have Answers.
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
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
                className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200"
              >
                {/* Question (Clickable) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
                >
                  <span className="text-lg font-semibold text-[#243b55] group-hover:text-[#14b8a6] transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <ChevronDown 
                    className={`w-5 h-5 text-[#14b8a6] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer (Expandable) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <FaqAnswer
                      text={faq.answer}
                      paragraphClassName="text-base text-[#333333] leading-[1.7]"
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
