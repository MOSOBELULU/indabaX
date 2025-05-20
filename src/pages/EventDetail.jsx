import { useParams } from "react-router-dom";
import { events } from "../data/DummyData";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

//   const { id} = useParams();
// const speaker = speakers.find((s) => s.id.toString()=== id)
// if(!speaker) return <p className="text-center text-red-500">Speaker not found</p>

  if (!event) {
    return <div className="text-center mt-20 text-xl text-red-600">Event not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
        <span className="flex items-center gap-1"><HiOutlineCalendar /> {event.date}</span>
        <span className="flex items-center gap-1"><HiOutlineClock /> {event.time}</span>
        <span className="flex items-center gap-1"><HiOutlineLocationMarker /> {event.location}</span>
      </div>
      <p className="text-gray-700 leading-relaxed">{event.description}</p>
    </div>
  );
}
