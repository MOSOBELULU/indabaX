/* eslint-disable no-unused-vars */
"use client";
import { Mail, Phone, User, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50  sm:py-24">
      <div className="max-w-6xl  px-4 mx-auto sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">We Love to hear from you, Get in Touch</h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600">
            Reach out for questions, collaborations, or event details.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Phone className="w-8 h-8 mx-auto text-green-700" />
            <p className="mt-4 text-lg font-medium text-gray-900">+23-316-555-0116</p>
            <p className="text-lg font-medium text-gray-900">+81-446-526-0117</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Mail className="w-8 h-8 mx-auto text-green-700" />
            <p className="mt-4 text-lg font-medium text-gray-900">indabaXSTP@indaba.com</p>
            <p className="text-lg font-medium text-gray-900">indabaXSTP@indaba.com</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto text-green-700" />
            <p className="mt-4 text-lg font-medium text-gray-900 leading-relaxed">
            University of Sao Tome and Principe
            </p>
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6"> Send us a Message</h3>
          <form
            action="https://formsubmit.co/mosobelulu@gmail.com"
            method="POST"
            className="space-y-5"
          >
            {[
              { id: "name", label: "Full Names", icon: <User />, type: "text" },
              { id: "email", label: "Email", icon: <Mail />, type: "email" },
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
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
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
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536178345513!2d6.727497873638973!3d0.32630386401342143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10766a8d79d4e1e7%3A0xf004d1414a2055cb!2sUniversity%20of%20S%C3%A3o%20Tom%C3%A9%20and%20Pr%C3%ADncipe!5e0!3m2!1sen!2sza!4v1747128524029!5m2!1sen!2sza"
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
