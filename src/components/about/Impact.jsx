/* eslint-disable no-unused-vars */
import { impactData } from "../../data/DummyData";
import { motion } from "framer-motion";
import CountUpNumber from "./CountUpNumber";

export default function Impact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="bg-gradient-to-r from-[#007847] to-[#003d25] py-16 px-4 md:px-20"
      id="impact"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white mb-4">
          Our Impact
        </h2>
        <p className="text-white max-w-3xl mx-auto mb-12">
          IndabaX São Tomé and Príncipe is more than an event — it’s a movement.
          Each year, we bring together students, researchers, tech enthusiasts,
          and community leaders to explore how AI can shape a better future for
          our islands.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#007847]">
                <CountUpNumber target={item.count} />{item.suffix} {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
