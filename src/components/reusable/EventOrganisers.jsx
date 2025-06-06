/* eslint-disable no-unused-vars */
import { organisers } from "../../data/DummyData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function EventOrganisers() {
  const showOrganisers = organisers.slice(0, 5);

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto rounded-xl bg-gray-300 p-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Meet the Organisers
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-md">
              Our organisers are a dedicated team of experts and visionaries who work behind the scenes to make this event possible. With diverse skills and passion, they bring creativity, coordination, and care to ensure every detail runs smoothly.
            </p>
          </div>

        
          {showOrganisers.slice(0, 2).map((person, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-50 overflow-hidden shadow-md rounded-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h4 className="text-sm font-semibold">{person.name}</h4>
                  <p className="text-xs">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {showOrganisers.slice(2, 5).map((person, i) => (
            <motion.div
              key={i + 2}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-50 overflow-hidden shadow-md rounded-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h4 className="text-sm font-semibold">{person.name}</h4>
                  <p className="text-xs">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}


          <div className="flex items-end md:col-start-1 md:row-start-2 sm:col-span-2 md:col-span-1">
            <a
              href="/organisers"
              className="inline-flex items-center text-[#007847] font-semibold"
            >
              See all members&nbsp;
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
