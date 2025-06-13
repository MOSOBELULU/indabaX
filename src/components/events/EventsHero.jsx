/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function HeroEventsSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/images/events/EventsHero.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-6 text-center max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Explore Our Upcoming Events
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Discover where innovation, collaboration, and learning meet. Join
          us for impactful gatherings across Africa, led by the AI community.
        </p>
      </motion.div>
    </section>
  );
}
