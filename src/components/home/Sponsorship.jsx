/* eslint-disable no-unused-vars */
import { sponsors } from "../../data/DummyData";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Sponsorship() {
  return (
    <section className=" flex flex-col md:flex-row w-full min-h-[280px]">
      
      
      <div className="bg-[#15b110] text-white flex items-center justify-center md:w-1/2 w-full py-14 md:rounded-tr-none rounded-t-lg md:rounded-l-lg">
        <h2 className="text-3xl md:text-4xl font-bold  text-black transform -rotate-90 ">
  Sponsors
</h2>

      </div>


      <div className="bg-[#e6d92a] flex-1 flex items-center justify-center px-4 py-6 md:rounded-r-lg rounded-b-lg">
        <Marquee gradient={false} speed={60} pauseOnHover>
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
    </section>
  );
}
