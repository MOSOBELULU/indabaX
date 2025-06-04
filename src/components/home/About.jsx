/* eslint-disable no-unused-vars */
import { Users, Wrench, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-30 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="/images/aboutSec.png"
            alt="AI in Africa"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            About IndabaX São Tomé and Príncipe
          </h2>

          {/* Block 1 */}
          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] mt-1">
              <Users className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Who We Are</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We're a local AI community under the Deep Learning Indaba family,
                passionate about making artificial intelligence education accessible
                in São Tomé and Príncipe.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] mt-1">
              <Wrench className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">What We Do</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We organize workshops, talks, and hands-on sessions to equip students,
                researchers, and tech lovers with practical AI skills and global connections.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex gap-4 items-start">
            <div className="min-w-[40px] mt-1">
              <HeartHandshake className="w-8 h-8 text-[#007847]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Why You Should Care</h3>
              <p className="text-sm sm:text-base text-gray-700">
                AI will shape the future of Africa. Being part of IndabaX helps you learn,
                network, and contribute to solutions that matter for our communities.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/aboutus"
            className="inline-block mt-4 bg-[#007847] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007f2f] transition duration-200 text-sm sm:text-base"
          >
            Learn More About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
