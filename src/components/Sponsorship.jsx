/* eslint-disable no-unused-vars */
import { sponsors } from "../data/DummyData";
import { motion } from "framer-motion";

export default function Sponsorship() {
  return (
    <section className="py-16 text-center" id="sponsors">
      <h2 className="text-3xl  md:text-4xl font-bold mb-8 ">
        Our Sponsors
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={sponsor.name}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="transition-transform transform hover:scale-105"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-24 w-24 md:h-35 md:w-35 object-cover rounded-full border-2 border-gray-300 shadow-sm grayscale hover:grayscale-0 transition"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
