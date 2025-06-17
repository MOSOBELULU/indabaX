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
             <Link
  to={`/eventdetail/${event.id}`}
  className="inline-block text-sm font-semibold text-[#007847] border border-[#007847] px-4 py-2 rounded-lg hover:bg-[#007847] hover:text-white transition"
>
  Learn More
</Link>

          </div>
        ))}
      </div>
    </section>
  );
}
    
