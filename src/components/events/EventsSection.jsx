import { events } from "../../data/DummyData";
import { Link } from "react-router-dom";

export default function EventsSection() {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg mb-3 h-48 w-full object-cover"
            />
            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
            <p className="text-sm text-gray-700">{event.description}</p>
            <Link to={`/eventdetail/${event.id}`}>
             <button
              className="mt-3 text-[#007847] font-medium hover:underline"
            >
              Learn More
            </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
    //  <Link to={`/speakerdetail/${speaker.id}`}></Link>
