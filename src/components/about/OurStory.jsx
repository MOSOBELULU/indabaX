/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
       
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/Ourstory.jpg"
            alt="Community event"
            className="rounded-xl shadow-md object-cover w-full h-full"
          />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-26">
            Our Story
          </h2>
          
          <p className="text-gray-700 text-base leading-relaxed ">
            IndabaX São Tomé and Príncipe started with a small but passionate group
            of students and technologists who believed in the power of AI to uplift
            local communities.
          </p>
          <br></br>
          <p className="text-gray-700 text-base leading-relaxed">
            From humble workshops to community-led initiatives, we’ve grown into a
            platform that connects local talent to global knowledge. Our journey is
            proof that big things can start from small spaces — especially when people
            come together for a shared vision.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
