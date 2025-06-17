import { motion } from "framer-motion";
import { aiTopics } from "../../data/DummyData";

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

export default function EventTopics() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Exploring AI at IndabaX
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">
            Our event dives into the most exciting areas of artificial intelligence, through talks, demos, and real-world challenges.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {aiTopics.map((topic) => (
            <motion.div
              key={topic.title}
              className="relative rounded-xl overflow-hidden h-64 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-cover bg-center"
              style={{ backgroundImage: `url(${topic.image})` }}
              variants={cardVariant}
            >
              <div className="absolute inset-0 bg-black/60 z-0" />
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-6">
                <div className="mb-3">{topic.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <ul className="text-sm space-y-1">
                  {topic.items.map((item) => (
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
