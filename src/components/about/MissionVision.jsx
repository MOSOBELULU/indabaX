/* eslint-disable no-unused-vars */
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold"
        >
          Our Mission & Vision
        </motion.h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base">
  Discover the heart of IndabaX São Tomé and Príncipe — where purpose meets progress. Our mission and vision guide every step we take toward building a future shaped by knowledge, collaboration, and meaningful innovation.
</p>

      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 sm:px-0">
    
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <Target className="text-[#007847] w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-[#003d25]">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            To foster a vibrant AI ecosystem by empowering students, developers,
            and researchers in São Tomé and Príncipe through accessible education,
            community collaboration, and hands-on experience.
          </p>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <Eye className="text-[#007847] w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-[#003d25]">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            To become a leading platform that sparks innovation and inclusion in Africa’s AI space,
            nurturing talent and inspiring solutions that uplift our communities and continent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
