/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../data/DummyData";

export default function MiniFaqs() {
  const showFew = faqs.slice(0, 4);
  const [openIndex, setOpenIndex] = useState();

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-20 py-10 sm:py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl py-3">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-700">
            Explore the common questions and answers about IndabaX Sao Tome and Principe
          </p>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {showFew.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="transition-all duration-200 bg-white border border-black shadow-lg cursor-pointer hover:bg-green-50 rounded-lg"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6 focus:outline-none"
                >
                  <span className="text-left text-lg font-semibold text-black">
                    {question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-800">{answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex items-center justify-center mt-12">
          <div className="px-8 py-4 text-center bg-[#007847] rounded-full">
            <p className="text-white">
              Didn’t find the answer you are looking for?{" "}
              <a
                href="/faqspage"
                className="text-yellow-300 transition-all duration-200 hover:underline"
              >
                See more FAQs
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
