import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FaqAnswer from "@/components/faq/FaqAnswer";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
  className?: string;
}

const AccordionFAQ = ({ 
  faqs, 
  heading = "Frequently Asked Questions",
  subheading,
  className = ""
}: AccordionFAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={`py-[100px] md:py-[80px] bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a2e2e] mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-[#334155] max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
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
                      paragraphClassName="text-base text-[#1e293b] leading-[1.7]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionFAQ;
