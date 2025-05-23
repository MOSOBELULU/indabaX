/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { events } from "../data/DummyData";
import { organisers } from "../data/DummyData"; 
import { speakers } from "../data/DummyData";   
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import BackBtn from "../components/reusable/BackBtn"

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return <div className="text-center mt-20 text-xl text-red-600">Event not found.</div>;
  }

  
  const shuffledOrganisers = [...organisers].sort(() => 0.5 - Math.random());

  const randomOrganisers = shuffledOrganisers.slice(0, 2);

  const shuffledSpeakers = [...speakers].sort(() => 0.5 - Math.random());
const randomSpeakers = shuffledSpeakers.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <BackBtn className="mb-8"/>
      <h1 className="text-3xl font-bold mb-8">{event.title}</h1>
      <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-xl mb-6" />
      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
        <span className="flex items-center gap-1"><HiOutlineCalendar /> {event.date}</span>
        <span className="flex items-center gap-1"><HiOutlineClock /> {event.time}</span>
        <span className="flex items-center gap-1"><HiOutlineLocationMarker /> {event.location}</span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-12">{event.description2}</p>

     
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {randomSpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-36 h-36 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p className="text-sm text-gray-600 italic">{speaker.profession}</p>
              <p className="mt-2 text-gray-700 text-sm max-h-36 overflow-auto">{speaker.topic}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet The Organisers</h2>
        <div className="grid sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {randomOrganisers.map((person, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-600 to-yellow-400 p-[3px] rounded-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-40 h-40 rounded-full object-cover bg-white shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-black mt-4">{person.name}</h4>
              <p className="text-gray-600 text-sm">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
