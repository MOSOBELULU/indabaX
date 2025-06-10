/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { events } from "../../data/DummyData";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Events() {
  function getDaysLeft(dateStr) {
    const eventDate = new Date(dateStr);
    const currentDate = new Date();
    eventDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    const timediff = eventDate - currentDate;
    const datediff = Math.ceil(timediff / (1000 * 60 * 60 * 24));
    return datediff >= 0 ? datediff : 0;
  }

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Upcoming Events
        </h2>

        <div className="flex flex-wrap gap-8 justify-center">
          {events.map((event, index) => {
            const daysLeft = getDaysLeft(event.date);

            return (
              <motion.div
                key={index}
                className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full max-w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-5 text-center">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {event.type || "Session"}
                  </span>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-700 flex items-center justify-center gap-1 mb-1">
                    <HiOutlineCalendar />
                    {event.date}
                  </p>

                  <p className="text-sm text-[#007847] font-medium mb-2">
                    {daysLeft > 0
                      ? `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`
                      : "Today or past event"}
                  </p>

                  <p className="text-sm flex items-center justify-center gap-1 mb-3">
                    <HiOutlineLocationMarker />
                    {event.location}
                  </p>

                 
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
       <div className="flex justify-center">
                <Link to="/eventspage">
                  <button className="flex items-center gap-2 px-6 py-2 mt-10 bg-[#007847] text-white rounded-lg hover:bg-green-700 transition">
                    Show More <FaArrowRight />
                  </button>
                </Link>
              </div>
    </section>
  );
}
