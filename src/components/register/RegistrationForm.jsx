/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  User,
  Mail,
  Globe,
  Briefcase,
  MessageCircle,
  Upload,
} from "lucide-react";

export default function RegistrationForm() {
  const [participantType, setParticipantType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Registration submitted successfully!");
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="register-form">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Register for IndabaX
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {["Attendee", "Speaker", "Volunteer", "Online participant"].map(
              (type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setParticipantType(type)}
                  className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-200 ${
                    participantType === type
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              )
            )}
          </div>

          <div className="flex items-center border rounded-md overflow-hidden bg-white">
            <div className="px-3">
              <User size={18} />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 focus:outline-none"
            />
          </div>

          <div className="flex items-center border rounded-md overflow-hidden bg-white">
            <div className="px-3">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 focus:outline-none"
            />
          </div>

          <div className="flex items-center border rounded-md overflow-hidden bg-white">
            <div className="px-3">
              <Globe size={18} />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              className="w-full p-3 focus:outline-none"
            />
          </div>

          <div className="flex items-center border rounded-md overflow-hidden bg-white">
            <div className="px-3">
              <Briefcase size={18} />
            </div>
            <input
              type="text"
              name="role"
              placeholder="Your current role (e.g. Student, Developer)"
              className="w-full p-3 focus:outline-none"
            />
          </div>

          <div className="flex items-start border rounded-md overflow-hidden bg-white">
            <div className="px-3 pt-3">
              <MessageCircle size={18} />
            </div>
            <textarea
              name="interests"
              placeholder="What are your interests in AI?"
              rows="4"
              className="w-full p-3 focus:outline-none"
            ></textarea>
          </div>

          {participantType === "Speaker" && (
            <div className="border rounded-md p-3 flex items-center gap-3">
              <Upload size={18} />
              <input
                type="file"
                name="resume"
                className="w-full text-sm text-gray-700"
              />
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit Registration
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
