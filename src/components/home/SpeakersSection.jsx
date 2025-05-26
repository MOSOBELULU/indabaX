/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { speakers } from "../../data/DummyData";
import SpeakerCard from "..reusable/SpeakersCard";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SpeakersSection() {
  const showFewSpeakers = speakers.slice(0, 3);

  return (
    <section className="py-16" id="speakers">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
          Meet the Speakers
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {showFewSpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -8,  }}
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/speakerspage">
            <button className="flex items-center gap-2 px-6 py-2 bg-[#007847] text-white rounded-lg hover:bg-green-700 transition">
              Show More <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
