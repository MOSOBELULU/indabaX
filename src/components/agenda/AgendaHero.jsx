/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function HeroAgendaSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/agenda/hero.png')" }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#007847] via-[#007847] to-transparent"></div>

      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-10 pt-20 md:pt-32">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 min-w-[300px] space-y-6"
          >
            <h1 className="text-white text-3xl md:text-6xl font-bold drop-shadow-lg mb-4 text-left">
              Discover What’s Coming
            </h1>

            <p className="text-lg md:text-xl font-medium text-white max-w-xl drop-shadow-sm mb-1 text-left">
              Dive into three impactful days of hands-on workshops, inspiring talks,
              research showcases, and community moments. Explore the full agenda and
              plan your IndabaX experience.
            </p>

            <div className="pt-1">
              <a
                href="#agendaTabs"
                className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                View Full Schedule
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
