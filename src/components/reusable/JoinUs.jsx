/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinUs() {
  return (
  <section className="relative py-10 sm:py-16 lg:py-6 overflow-hidden ">

      
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src="/images/whyjoinHero.png"
          alt=""
        />
      </div>

     
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black to-transparent"></div> 
       <div className="absolute inset-0 block md:hidden bg-black/60"></div>

     
      <div className="relative px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Ready to be part of the AI movement in São Tomé and Principe?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-white"
          >
            Whether you're a student, developer, researcher, or just curious —
            there's a place for you in our community.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-[#007847] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition"
            >
              Register <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
