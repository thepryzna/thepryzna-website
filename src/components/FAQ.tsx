import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-orange-600' : 'text-zinc-900 group-hover:text-orange-600'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${isOpen ? 'bg-orange-600 text-white rotate-180' : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-zinc-600 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Pryzna offer?",
      answer: "Pryzna provides creative social media marketing, content creation, branding, and digital growth strategies."
    },
    {
      question: "How long does a project take?",
      answer: "Most projects are completed within 7–14 days depending on complexity."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, Pryzna works with clients globally and offers remote collaboration."
    },
    {
      question: "How can I start a project?",
      answer: "Click the “Start Project” button and submit your project details to get started."
    },
    {
      question: "Do you provide custom marketing strategies?",
      answer: "Yes, every project is tailored to the client's brand and business goals."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-zinc-100 text-zinc-500 rounded-full"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-zinc-900"
          >
            Frequently Asked <span className="text-orange-600">Questions</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-50/50 rounded-[2.5rem] p-8 md:p-12 border border-zinc-100"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
