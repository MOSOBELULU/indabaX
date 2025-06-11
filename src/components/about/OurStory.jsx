/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pr-12 sm:pr-0"
          >
            <div className="relative max-w-xs mb-12">
              <img
                src="/images/impact2.png"
                alt="Community event"
                className="object-bottom rounded-md "
              />
              <img
                className="absolute  h-60 origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                src="/images/impact1.png" 
                alt="Smiling participant"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
              Our Story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              IndabaX São Tomé and Príncipe started with a small but passionate group
              of students and technologists who believed in the power of AI to uplift
              local communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              From humble workshops to community-led initiatives, we’ve grown into a
              platform that connects local talent to global knowledge. Our journey is
              proof that big things can start from small spaces — especially when people
              come together for a shared vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
