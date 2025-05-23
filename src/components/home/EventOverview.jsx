/* eslint-disable no-unused-vars */
import { features } from "../../data/DummyData";
import { motion } from "framer-motion";

export default function EventOverview() {
  
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-4xl   mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
          Why Attend this Event
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This event brings together tech enthusiasts, industry leaders, and innovators to explore emerging solutions in tech and connect over meaningful discussions.
          Whether you're a developer, entrepreneur, or curious learner — there's something here for you!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl ">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="bg-[#f9fafb] p-6 rounded-2xl shadow-sm text-center cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Icon size={42} className="text-[#12AD2B]" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
