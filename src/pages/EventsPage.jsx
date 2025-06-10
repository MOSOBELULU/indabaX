import { useState } from "react";
import { events } from "../data/DummyData";
import EventModal from "../components/events/EventModal";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">All Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
          >
            <img src={event.image} alt={event.title} className="rounded-lg mb-3 h-48 w-full object-cover" />
            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
            <p className="text-sm text-gray-700">{event.description}</p>
            <button
              className="mt-3 text-[#007847] font-medium hover:underline"
              onClick={() => setSelectedEvent(event)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
