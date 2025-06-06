/* eslint-disable no-unused-vars */
import { sponsors } from "../../data/DummyData";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Sponsorship() {
  return (
    <section className="px-4 mt-30 sm:px-8 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[280px]">

        
        <div
          className="md:w-1/2 w-full py-8 md:py-14 flex items-center justify-center 
        bg-[#007847] text-white 
        md:rounded-tr-none rounded-t-lg md:rounded-l-lg"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black 
          md:-rotate-90 rotate-0 
          md:whitespace-nowrap text-center"
          >
            Sponsors
          </h2>
        </div>

      
        <div className="bg-gradient-to-r from-[#007847] to-[#003d25] flex-1 flex items-center justify-center px-4 py-6 md:rounded-r-lg rounded-b-lg scrollbar-hide">
          <Marquee gradient={false} speed={40} pauseOnHover>
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mx-6"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
