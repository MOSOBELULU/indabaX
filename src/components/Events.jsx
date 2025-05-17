import { events } from "../data/DummyData";

export default function Events() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-3xl md:text-4xl font-extrabold text-[#009639] tracking-tight">
          Events Schedule
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-[#009639] mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {event.date} · {event.time}
                </p>
                <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
