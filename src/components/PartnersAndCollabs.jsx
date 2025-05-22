/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { partners } from "../data/DummyData"

export default function PartnersAndCollabs() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Our Partners & Collaborators
        </motion.h2>
        <p className="text-gray-600 mt-3 text-base max-w-xl mx-auto">
          We proudly collaborate with organizations that believe in AI for development and community growth.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            // className=" p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}