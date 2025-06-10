export default function EventModal({ event, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-xl w-full p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{event.date} – {event.location}</p>
        <p className="mt-4 text-gray-700">{event.description}</p>
        <p className="mt-3 text-gray-700">{event.description2}</p>

        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#007847] text-white rounded hover:bg-green-700"
          >
            Register
          </a>
        )}
      </div>
    </div>
  );
}
