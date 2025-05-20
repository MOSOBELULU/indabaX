import { events } from "../data/DummyData";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

export default function Events() {
  return (
    <div className="py-16 px-6 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-12 text-3xl md:text-4xl font-extrabold text-black tracking-tight">
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
                
                
                <span className="inline-block bg-[#12AD2B]/10 text-[#12AD2B] text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {event.type || "Session"}
                </span>

               
                <h3 className="text-xl font-semibold text-black mb-2">
                  {event.title}
                </h3>

          
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1 mb-1">
                  <HiOutlineCalendar className="text-lg" /> {event.date}
                </p>
               
                <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mb-3">
                  <HiOutlineLocationMarker className="text-lg" /> {event.location}
                </p>

                <p className="text-gray-700 text-sm mb-4">
                  {event.description}
                </p>

                
                <button className="mt-2 bg-[#12AD2B] hover:bg-[#0f8e23] text-white text-sm font-semibold py-2 px-4 rounded-full transition duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
