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
        {/* Heading */}
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
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            See how our core values are brought to life through real stories,
            visual impact, and community-powered initiatives.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="relative rounded-xl overflow-hidden h-64 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-cover bg-center"
              style={{
                backgroundImage: `url(${value.image})`,
              }}
              variants={cardVariant}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60  z-0" />

              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-6">
                <div className="mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <ul className="text-sm space-y-1">
                  {value.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
