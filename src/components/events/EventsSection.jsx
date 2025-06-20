import { useState } from "react";
import { events } from "../../data/DummyData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BackBtn from "../reusable/BackBtn";

const categories = ["All", "Hackathon", "Talks", "Workshops"];

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All"
    ? events
    : events.filter(event => event.category === activeCategory);

  return (
    <motion.section
      className="px-4 py-20 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <BackBtn className="mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="border-b-5 border-[#007847]">Upcoming Events</span>
      </h1>

    
  <div className="grid grid-cols-2 gap-4 mb-10 max-w-xs mx-auto">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-4 py-2 rounded-full border text-center transition ${
        activeCategory === category
          ? "bg-[#007847] text-white border-[#007847]"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {category}
    </button>
  ))}
</div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-t-xl mb-3 h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-700">{event.description}</p>
              <Link
                to={`/eventdetailpage/${event.id}`}
                className="inline-block text-sm font-semibold text-[#007847] border border-[#007847] px-4 py-2 mt-5 rounded-lg hover:bg-[#007847] hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
