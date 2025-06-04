/* eslint-disable no-unused-vars */
import { faqs } from "../../data/DummyData";
import { motion } from "framer-motion";

export default function MiniFaqs() {
  const showFew = faqs.slice(0, 4);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="mt-20 py-10 sm:py-16 lg:py-24">
      <div className="bg-gray-300 rounded-lg max-w-5xl px-6 py-12 mx-auto sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold leading-tight text-[#007847] sm:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed">
            Explore the common questions and answers about IndabaX Sao Tome and Principe
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {showFew.map(({ question, answer }, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-[#007847] rounded-full font-semibold cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ?
              </motion.div>
              <div className="ml-4">
                <p className="text-xl font-semibold">{question}</p>
                <p className="mt-4 text-base">{answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center mt-12">
          <div className="px-8 py-4 text-center bg-[#007847] rounded-full">
            <p className="text-white">
              Didn’t find the answer you are looking for?{" "}
              <a
                href="/faqspage"
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
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
