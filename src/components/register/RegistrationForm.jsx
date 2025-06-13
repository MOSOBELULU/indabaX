/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Globe,
  Briefcase,
  MessageCircle,
  Upload,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function RegistrationForm() {
  const [participantType, setParticipantType] = useState("");
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    role: "",
    interests: "",
    resume: null,
  });

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        const data = await res.json();
        const sorted = data
          .map((c) => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sorted);
      } catch (error) {
        console.error("Country fetch error:", error);
        toast.error("Failed to load countries");
      }
    }
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!participantType) {
      toast.error("Please select a participation type.");
      return;
    }
    const loading = toast.loading("Submitting...");

 
    setTimeout(() => {
      toast.dismiss(loading);
      toast.success("Registration submitted!");
      console.log("Form Data Submitted:", { ...formData, participantType });

   
      setFormData({
        name: "",
        email: "",
        country: "",
        role: "",
        interests: "",
        resume: null,
      });
      setParticipantType("");
    }, 1500);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10" id="register-form">
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Register for IndabaX
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["Attendee", "Speaker", "Volunteer", "Online participant"].map(
              (type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setParticipantType(type)}
                  className={`px-5 py-2 text-xs sm:text-sm rounded-full border font-medium transition ${
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

          
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="px-3">
              <User size={18} />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base focus:outline-none"
            />
          </div>

          
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="px-3">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base focus:outline-none"
            />
          </div>

       
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="px-3">
              <Globe size={18} />
            </div>
            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base focus:outline-none bg-white text-gray-700"
            >
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

         
          <div className="flex items-center border rounded-md overflow-hidden">
            <div className="px-3">
              <Briefcase size={18} />
            </div>
            <input
              type="text"
              name="role"
              placeholder="Your current role (e.g. Student, Developer)"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base focus:outline-none"
            />
          </div>

         
          <div className="flex items-start border rounded-md overflow-hidden">
            <div className="px-3 pt-3">
              <MessageCircle size={18} />
            </div>
            <textarea
              name="interests"
              placeholder="What are your interests in AI?"
              rows="4"
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base focus:outline-none"
            ></textarea>
          </div>

         
          {participantType === "Speaker" && (
            <div className="border rounded-md p-3 flex items-center gap-3">
              <Upload size={18} />
              <input
                type="file"
                name="resume"
                onChange={handleChange}
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
