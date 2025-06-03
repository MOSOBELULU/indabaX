/* eslint-disable no-unused-vars */
"use client";
import { Mail, Phone, User, Briefcase, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800 mb-10"
      >
        Get In Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto shadow-md rounded-lg overflow-hidden bg-white"
      >
        {/* Left - Map & Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-4">
          <p className="text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            We'd love to hear from you! Whether you have questions, need support, or want to learn more about our event.
          </p>
          <div className="h-[300px] sm:h-[400px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536178345513!2d6.727497873638973!3d0.32630386401342143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10766a8d79d4e1e7%3A0xf004d1414a2055cb!2sUniversity%20of%20S%C3%A3o%20Tom%C3%A9%20and%20Pr%C3%ADncipe!5e0!3m2!1sen!2sza!4v1747128524029!5m2!1sen!2sza"
              className="w-full h-full border-0 rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-1/2 bg-white">
          <form
            action="https://formsubmit.co/mosobelulu@gmail.com"
            method="POST"
            className="w-full px-4 py-6 sm:px-6 space-y-5"
          >
            {[
              { id: "name", label: "Full Names", icon: <User />, type: "text" },
              { id: "email", label: "Email", icon: <Mail />, type: "email" },
              { id: "phone", label: "Phone Number", icon: <Phone />, type: "text" },
              { id: "job", label: "Job Position", icon: <Briefcase />, type: "text" },
            ].map(({ id, label, icon, type }) => (
              <div key={id}>
                <label htmlFor={id} className="flex items-center gap-2 font-medium text-gray-700">
                  {icon} {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="flex items-center gap-2 font-medium text-gray-700">
                <MessageCircle /> Leave a message for us
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-fit">
              <button
                type="submit"
                className="px-6 py-2 bg-[#007847] text-white font-semibold rounded-md hover:bg-[#FCD116] hover:text-black transition duration-300"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
