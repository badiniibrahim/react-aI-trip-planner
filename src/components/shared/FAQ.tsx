import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex items-center justify-between w-full py-4 text-left text-white focus:outline-none hover:bg-gray-800 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 bg-[#1a2233] text-gray-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does AI Trip Planner work?",
      answer:
        "Our app uses artificial intelligence to create personalized travel itineraries based on your preferences and interests.",
    },
    {
      question: "Is AI Trip Planner free to use?",
      answer:
        "Yes, we offer a free version with basic features. You can also opt for our Pro plan for advanced features.",
    },
    {
      question: "Can I customize my travel plans?",
      answer:
        "Absolutely! You can adjust your itinerary based on your needs and preferences at any time.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#09111f] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
