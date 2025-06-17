import { Link, useParams } from "react-router-dom";
import { events } from "../data/DummyData";
import BackBtn from "../components/reusable/BackBtn";
import RegisterButton from "../components/reusable/Register_button";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return <p className="text-center text-red-500 mt-20">Event not found 😕</p>;
  }

  return (
    <div className="pt-28 pb-12 bg-gradient-to-r from-[#007847] to-[#003d25] text-white">
      <div className="px-4 mb-6">
        <Link to="/events">
          <BackBtn />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch px-4 md:px-10 lg:px-20">
        <div className="flex-1">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{event.title}</h2>
          <p className="font-medium">{event.type}</p>
          <p>{event.date} • {event.location}</p>
          <p className="leading-relaxed">{event.description2}</p>
        </div>
      </div>

      <div className="px-4 mt-10 flex justify-center">
        <RegisterButton />
      </div>
    </div>
  );
}
