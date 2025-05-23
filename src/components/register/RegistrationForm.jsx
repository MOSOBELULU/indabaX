/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";

export default function RegistrationForm() {
  const [participantType, setParticipantType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    
  };

  return (
    <section className=" py-16 px-6" id="register-form">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Register for IndabaX</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
         
          <div className="flex flex-wrap gap-4 justify-center">
            {["Attendee", "Speaker", "Volunteer", "Online participant"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setParticipantType(type)}
                className={`px-6 py-2 rounded-full border ${
                  participantType === type
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 text-gray-700"
                } hover:bg-gray-100 hover:text-black transition`}
              >
                {type}
              </button>
            ))}
          </div>

          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded-md"
          />

         
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-md"
          />

          
          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            className="w-full p-3 border rounded-md"
          />

      
          <input
            type="text"
            name="role"
            placeholder="Your current role (e.g. Student, Developer)"
            className="w-full p-3 border rounded-md"
          />

        
          <textarea
            name="interests"
            placeholder="What are your interests in AI?"
            rows="4"
            className="w-full p-3 border rounded-md"
          ></textarea>

    
          {participantType === "Speaker" && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Resume (optional for Speakers)
              </label>
              <input
                type="file"
                name="resume"
                className="w-full text-sm border border-gray-300 rounded-md p-2"
              />
            </div>
          )}

       
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg w-full font-semibold"
          >
            Submit Registration
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
