/* eslint-disable no-unused-vars */
import { organisers } from "../../data/DummyData";
import { motion } from "framer-motion";

export default function EventOrganisers() {

  const showOrganisers = organisers.slice(0, 3)
 

  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-left">
        Meet The Organisers
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {showOrganisers.map((person, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
           <div className="bg-gradient-to-r from-[#007847] to-yellow-400 p-[3px] rounded-full">
    <img
      src={person.image}
      alt={person.name}
      className="w-40 h-40 rounded-full object-cover bg-white shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>
            <h4 className="text-lg font-semibold text-black mt-4">{person.name}</h4>
            <p className="text-gray-600 text-sm">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
