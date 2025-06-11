/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { values } from "../../data/DummyData";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Values() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Values in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            See how our core values are brought to life through real stories, visual impact, and community-powered initiatives.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-gradient-to-r from-[#007847] to-[#003d25] rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={cardVariant}
            >
              <div className="flex justify-center text-white mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <ul className="text-sm text-white space-y-1">
                {value.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
