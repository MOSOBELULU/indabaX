/* eslint-disable no-unused-vars */
import { features } from "../../data/DummyData";
import { motion } from "framer-motion";

export default function EventOverview() {
  
  return (
    <section className="py-16 px-6 md:px-35 ">
      <div className="max-w-4xl mb-14 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-left">
          Why Attend this Event
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This event brings together tech enthusiasts, industry leaders, and innovators to explore emerging solutions in tech and connect over meaningful discussions.
          Whether you're a developer, entrepreneur, or curious learner — there's something here for you!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
  key={i}
  className="relative rounded-2xl shadow-sm text-center overflow-hidden cursor-default group"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: i * 0.2 }}
  whileHover={{ scale: 1.03 }}
  viewport={{ once: true }}
>
 
  <div
    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
    style={{
      backgroundImage: `url(${item.image})`,
    }}
  ></div>


  <div className="absolute inset-0 bg-black/50 z-0" />

 
  <div className="relative z-10 p-6 text-white">
    <div className="flex justify-center mb-4">
      <Icon size={42} className="text-white" />
    </div>
    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
    <p className="text-sm leading-relaxed">{item.desc}</p>
  </div>
</motion.div>

          );
        })}
      </div>
    </section>
  );
}
