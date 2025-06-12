/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinUs() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-0 py-10 sm:py-16 lg:py-20">
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        
       
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover md:object-left md:scale-125 md:origin-top-left"
            src="/images/whyjoinHero.png"
            alt=""
          />
        </div>

        
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 block md:hidden bg-black/60 rounded-2xl"></div>

        <div className="relative z-10 px-6 sm:px-10 py-12">
          <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-10 py-12">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-bold"
  >
    Ready to be part of the AI movement in <br></br> São Tomé and Príncipe?
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="mt-4 text-base sm:text-lg"
  >
    Whether you're a student, developer, researcher, or just curious <br></br>
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
      className="inline-flex items-center gap-2 bg-[#007847] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 hover:text-black transition"
    >
      Register <ArrowRight className="w-5 h-5" />
    </a>
  </motion.div>
</div>

        </div>
      </div>
    </section>
  );
}
