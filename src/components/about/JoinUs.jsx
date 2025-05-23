/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function JoinUs() {
    return (
        <section className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto text-center space-y-6">
                <motion.h2 
                initial={{opacity: 0, y:20}}
                whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold">
            Ready to be part of the AI movement in São Tomé?
          </motion.h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're a student, developer, researcher, or just curious there is a place for you in our community.
          </p>
          <motion.a href="/register"
           whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 bg-white text-[#12AD2B] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >Join the community <ArrowRight className="w-5 h-5"/>
        </motion.a>
            </div>
        </section>
    )
}