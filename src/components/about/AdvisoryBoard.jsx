/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { advisory } from "../../data/DummyData";

export default function AdvisoryBoard() {
const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + advisory.length) % advisory.length);
  const next = () => setIndex((index + 1) % advisory.length);

  const { name, role, image, statement, story } = advisory[index];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#007847] to-[#003d25]">
      <div className="max-w-4xl mx-auto text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Advisory Board</h2>
        <p className=" max-w-2xl mx-auto mb-10">
          Meet the inspiring voices helping shape our event into a truly youth-driven experience.
        </p>

        <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          <motion.img
            key={image}
            src={image}
            alt={name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-48 rounded-xl object-cover shadow-md"
          />

          <div className="text-left text-black">
            <h3 className="text-2xl font-semibold ">{name}</h3>
            <p className="text-sm  mb-2">{role}</p>
            <p className="italic  mb-4">“{statement}”</p>
            <p className="text-sm">{story}</p>
          </div>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <button onClick={prev} className="bg-white text-black border rounded-full p-2 shadow ">
              <ChevronLeft className="w-5 h-5 " />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <button onClick={next} className="bg-white text-black border rounded-full p-2 shadow hover:bg-indigo-100">
              <ChevronRight className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}