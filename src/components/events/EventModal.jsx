import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EventModal({ event, onClose }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("You’ve successfully registered!");
    setShowForm(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Main Event Modal */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <div className="bg-white max-w-xl w-full p-6 rounded-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-black"
          >
            &times;
          </button>

          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
          <p className="text-sm text-gray-500 mb-1">
            {event.date} – {event.location}
          </p>
          <p className="mt-4 text-gray-700">{event.description}</p>
          <p className="mt-3 text-gray-700">{event.description2}</p>

          {event.registrationLink && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-block mt-4 px-4 py-2 bg-[#007847] text-white rounded hover:bg-green-700"
            >
              Register
            </button>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-md w-full p-6 rounded-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Register for {event.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full border rounded px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-[#007847] text-white py-2 rounded hover:bg-green-700"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
