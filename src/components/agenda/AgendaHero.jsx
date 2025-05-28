/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function HeroAgendaSection() {
  return (
    <section
      className="w-full min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/agenda/hero.jpg')" }}
    >
      {/* Green gradient overlay */}
   <div className="absolute inset-0 bg-gradient-to-r from-[#004d31] via-[#00663d] to-transparent"></div>


      {/* Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 text-white px-6 py-16 md:px-10 md:py-24 text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Discover What’s Coming
        </h1>
        <p className="text-base sm:text-lg mb-6 max-w-xl mx-auto md:mx-0">
          Dive into three impactful days of hands-on workshops, inspiring talks,
          research showcases, and community moments. Explore the full agenda and
          plan your IndabaX experience.
        </p>
        <button className="bg-white text-[#007847] font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          View Full Schedule
        </button>
      </motion.div>
    </section>
  );
}
