/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
      {/* Animated 404 Bouncing */}
      <motion.h1
        initial={{ y: -10 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-8xl font-extrabold text-[#007847]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl font-semibold mt-4 text-gray-800"
      >
        Whoops! This page vanished into the digital void.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-2 text-gray-600"
      >
        But no worries — let’s get you back on track.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-[#007847] text-white rounded-md font-semibold hover:bg-[#006437] transition"
        >
          Go Home
        </Link>
      </motion.div>
    </section>
  );
}