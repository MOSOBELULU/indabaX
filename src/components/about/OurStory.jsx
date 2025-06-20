/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24 bg-white sm:py-32 lg:py-40">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-y-16 md:gap-y-24 md:gap-x-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-[30rem] mb-8 md:mb-12">
              <img
                src="/images/impact2.png"
                alt="Community event"
                className="object-cover w-full h-full rounded-md"
              />
              <motion.img
                src="/images/impact1.png"
                alt="Smiling participant"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute h-48 sm:h-56 md:h-70 origin-bottom-right scale-90 rounded-md -bottom-10 -right-10 shadow-xl hover:scale-100 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black mb-4 sm:mb-6 lg:text-6xl">
              Our Story
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
              IndabaX São Tomé and Príncipe started with a small but committed
              group of students and technologists who believed in the power of
              AI to uplift local communities.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
              From humble workshops to community-led initiatives, we’ve grown
              into a platform that connects local talent to global knowledge.
              Our journey is proof that big things can start from small spaces —
              especially when people come together for a shared vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
