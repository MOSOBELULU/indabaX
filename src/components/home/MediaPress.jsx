/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { mediaPress } from "../../data/DummyData";

export default function MediaPress() {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold = mb-6">Media & Press</h2>
        <p className=" mb-12">
          See how IndabaX São Tomé is making headlines around the world.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mediaPress.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              <img
                src={item.logo}
                alt={`${item.outlet} logo`}
                className="w-32 h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.outlet}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
