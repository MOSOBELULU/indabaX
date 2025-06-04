/* eslint-disable no-unused-vars */
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our Mission & Vision
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
       
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" p-8 rounded-xl shadow-lg"
        >
          <Target className="text-[#007847] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className=" text-sm leading-relaxed">
            To foster a vibrant AI ecosystem by empowering students, developers, and researchers
            in São Tomé and Príncipe through accessible education, community collaboration,
            and hands-on experience.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" p-8 rounded-xl shadow-lg"
        >
          <Eye className="text-[#007847] w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className=" text-sm leading-relaxed">
            To become a leading platform that sparks innovation and inclusion in Africa’s AI space,
            nurturing talent and inspiring solutions that uplift our communities and continent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
