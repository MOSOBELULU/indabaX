/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { benefits } from "../../data/DummyData";

export default function WhyJoin() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Join Us?
        </motion.h2>

        {/* Layout: Image + Benefits */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/whyjoin.jpg"
              alt="Why Join IndabaX"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md"
            />
          </motion.div>

          {/* Right - Benefits */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ${
                  index % 2 === 0 ? "mt-6" : "-mt-6"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
