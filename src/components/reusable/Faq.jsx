/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  
  const faqObject = t("faqs", { returnObjects: true });
  const faqList = Object.values(faqObject);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{t("faqsTitle")}</h2>

      {faqList.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 cursor-pointer transition-all duration-300"
        >
          <div
            className="flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            <h3 className="text-lg font-medium text-black">{item.question}</h3>
            {openIndex === index ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </div>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.p
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden text-gray-700 mt-3"
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
