/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast"

export default function VolunteerOpportunities() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    toast.success("Thank you for Voluteering!")
    setIsOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-35 mb-20 " id="volunteer">
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-300 ${isOpen ? "blur-sm scale-95" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          <div>
            <motion.p
              className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Get Involved
            </motion.p>
            <motion.h2
              className="text-3xl font-bold text-[#007847] sm:text-4xl lg:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Volunteer with IndabaX São Tomé and Principe
            </motion.h2>
            <motion.p
              className="text-gray-700 max-w-xl mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Be part of the movement! Whether you're passionate about tech, love organizing events, or want to network with AI experts — we need your energy. Join as a volunteer and help shape an unforgettable experience.
            </motion.p>

            <motion.button
              onClick={openModal}
              className="bg-[#007847] text-white px-8 py-3 rounded-full text-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Volunteer
            </motion.button>
          </div>

          <div className="relative h-96 lg:h-auto">
         <div className="absolute w-full h-full -mb-12 overflow-hidden bg-[#007847] top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top rounded-lg">

              <img
                className="object-cover object-right w-full h-full scale-150 rounded-lg"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                alt="Decorative lines"
              />
            </div>
            <div className="relative lg:-top-12 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/volunteer.png"
                alt="Volunteer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-6 text-[#007847]">Volunteer Sign-Up</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007847]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007847]"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why do you want to volunteer?"
                  rows={4}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007847]"
                  required
                />
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-300 px-5 py-2 rounded-md hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#007847] text-white px-5 py-2 rounded-md  transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
