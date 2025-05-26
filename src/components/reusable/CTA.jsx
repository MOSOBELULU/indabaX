/* eslint-disable no-unused-vars */
import { Users, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      className="text-black py-16 px-35  max-w-4xl my-12 "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-4 mb-6">
        <Users className="w-10 h-10 text-black" />
        <h2 className="text-3xl font-semibold tracking-wide">
          Join Our Growing AI Community
        </h2>
      </div>
      <p className="text-lg max-w-xl mb-8">
        Connect with like-minded innovators, share ideas, and stay updated on the
        latest in AI across São Tomé and beyond.
        <br />
        <span className="font-semibold">
          Be part of the movement—let’s shape the future together!
        </span>
      </p>
      <motion.a
        href="#register-form"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center bg-white text-[#007847] font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
      >
        Join the Community
        <ArrowUp className="w-5 h-5 ml-2" />
      </motion.a>
    </motion.section>
  );
}
