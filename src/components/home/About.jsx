/* eslint-disable no-unused-vars */
import { Users, Wrench, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const {t} = useTranslation();

  return (
    <section className="py-30 px-4 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center">
        
      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 min-w-0"
        >
          <img
            src="/images/aboutSec.png"
            alt="AI in Africa"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6 min-w-0 break-words"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              {t("about.title")}
          </h2>

          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] min-h-[40px] bg-gray-200 rounded-full mt-1 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{t("about.who_title")}</h3>
              <p className="text-sm sm:text-base text-gray-700">
               {t("about.who_desc")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] min-h-[40px] bg-gray-200 rounded-full mt-1 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">W{t("about.what_title")}</h3>
              <p className="text-sm sm:text-base text-gray-700">
               {t("about.what_desc")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] min-h-[40px] bg-gray-200 rounded-full mt-1 flex items-center justify-center">
              <HeartHandshake className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{t("about.why_title")}</h3>
              <p className="text-sm sm:text-base text-gray-700">
                {t("about.why_desc")}
              </p>
            </div>
          </div>

          <a
            href="/aboutus"
            className="inline-block mt-4 bg-[#007847] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007f2f] transition duration-200 text-sm sm:text-base"
          >
             {t("about.learn_more")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
