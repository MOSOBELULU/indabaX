/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agenda, speakers } from "../../data/DummyData";

const days = ["Day1", "Day2", "Day3"];

export default function AgendaTabs() {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAgendaClick = (item) => {
    if (item.speakerId) {
      const match = speakers.find((s) => s.id === item.speakerId);
      if (match) {
        setSelectedSpeaker(match);
        setShowFullDescription(false); 
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto " id="agendaTabs">
      <h2 className="text-3xl font-bold text-center mb-6">Agenda</h2>

      
      <div className="flex justify-center gap-4 mb-8">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedDay === day
                ? "bg-[#007847] text-white"
                : "bg-gray-200 hover:bg-blue-100"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      
      <div className="space-y-4">
        {agenda[selectedDay]?.map((item, index) => {
          const speaker = item.speakerId
            ? speakers.find((s) => s.id === item.speakerId)
            : null;

          return (
            <div
              key={index}
              onClick={() => handleAgendaClick(item)}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md cursor-pointer transition"
            >
              <p className="text-sm text-gray-500">{item.time}</p>
              <h4 className="text-lg font-semibold">
                {item.title}
                {speaker && (
                  <span className="text-gray-500 text-sm font-normal block">
                    – {speaker.name}
                  </span>
                )}
              </h4>
              <span className="text-xs uppercase text-[#007847] font-bold">
                {item.type}
              </span>
            </div>
          );
        })}
      </div>

      
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative bg-[#007847] rounded-xl shadow-lg max-w-md w-[90%] p-6">
             
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-2 right-2 text-white hover:text-red-600 text-4xl"
              >
                &times;
              </button>

              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-35 h-35 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-white">{selectedSpeaker.name}</h3>
                <p className="text-sm text-white italic">{selectedSpeaker.profession}</p>
                <p className="text-sm font-medium text-white">
                  Topic: {selectedSpeaker.topic}
                </p>

                <p className="text-sm text-white">
                  {showFullDescription
                    ? selectedSpeaker.background
                    : selectedSpeaker.background.slice(0, 100) + "..."}
                </p>

                <button
                  className="text-xs text-white font-semibold underline"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
