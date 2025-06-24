/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function VolunteerOpportunities() {
  const {t} = useTranslation()
  return (
    <section
      className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10"
      id="volunteer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          
          
          <div>
            <motion.p
              className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
               {t("volunteerSection.subtitle")}
            </motion.p>

            <motion.h2
              className="text-3xl font-bold text-[#007847] sm:text-4xl lg:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
               {t("volunteerSection.title")}
            </motion.h2>

            <motion.p
              className="text-gray-700 max-w-xl mb-8 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
               {t("volunteerSection.description")}
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/register"
                className="bg-[#007847] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg transition inline-block"
              >
                 {t("volunteerSection.button")}
              </Link>
            </motion.div>
          </div>

         
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto hidden lg:block">
            <div className="absolute w-full h-full -mb-12 overflow-hidden bg-[#007847] top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top rounded-lg">
              <img
                className="object-cover object-right w-full h-full scale-150 rounded-lg"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                alt="Decorative lines"
              />
            </div>
            <div className="relative lg:-top-12 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/volunteer.png"
                alt="Volunteer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
