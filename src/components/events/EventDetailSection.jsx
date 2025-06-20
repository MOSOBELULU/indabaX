import { useParams } from "react-router-dom";
import { events } from "../../data/DummyData";
import { motion } from "framer-motion";
import BackBtn from "../reusable/BackBtn"

export default function EventDetailSection() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return <p className="text-center text-red-500 mt-20">Event not found 😕</p>;
  }

  const parsedDate = new Date(event.date);

  return (
    <div className="py-20 bg-gradient-to-r from-[#007847] to-[#003d25] text-white">
 <BackBtn className="mb-6"/>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-20">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-[#003d25] rounded-xl w-28 h-28 flex flex-col items-center justify-center shadow-xl"
    >
      <span className="text-sm font-semibold uppercase tracking-widest">
        {parsedDate.toLocaleString("default", { month: "short" })}
      </span>
      <span className="text-4xl font-bold">{parsedDate.getDate()}</span>
      <span className="text-xs">{parsedDate.getFullYear()}</span>
    </motion.div>

   
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-xl space-y-4 text-center md:text-left"
    >
    
      <p className="text-base font-medium">{event.location}</p>
      <p className="leading-relaxed text-sm sm:text-base text-white/90">
        {event.description2}
      </p>
    </motion.div>
  </div>

</div>
  )
}
