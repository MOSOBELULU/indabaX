/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {aiInsightsCards} from "../../data/DummyData"

const cardVariants = {
    hidden: { opacity : 0, y: 40},
    visible: { opacity: 1, y: 0},

}

export default function AIInfo() {
    return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          AI Innovation Highlights
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {aiInsightsCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}