/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";


export default function VolunteerOpportunities() {
  return (
    <section className="bg-gray-100 py-16 px-6" id="volunteer">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Involved with IndabaX São Tomé 🇸🇹
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Be part of the movement! Whether you're passionate about tech, love organizing events,
          or want to network with AI experts — we need your energy. Join as a volunteer and help
          shape an unforgettable experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/volunteer"
            className="inline-block bg-[#007847] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#007847] transition"
          >
            Become a Volunteer
          </a>
        </motion.div>
      </div>
    </section>
  );
}
