import { motion } from "framer-motion";
import { aiTopics } from "../../data/DummyData";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EventTopics() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black break-words">
            Exploring AI at IndabaX
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-700">
            Our event dives into the most exciting areas of artificial
            intelligence, through talks, demos, and real-world challenges.
          </p>
        </motion.div>

        <div className="space-y-16">
          {aiTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-stretch gap-10 border border-gray-300 rounded-2xl shadow-md bg-gray-50`}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              
              <div className="w-full lg:w-1/2 h-80 hidden lg:block">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className={`w-full h-full object-cover ${
                    index % 2 === 1 ? "rounded-r-2xl" : "rounded-l-2xl"
                  }`}
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-start text-center lg:text-left p-6 space-y-3">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-black border-b-2 border-[#007847] pb-2 w-full break-words">
                  {topic.title}
                </h2>
                <h3 className="text-sm sm:text-base text-black">
                  {topic.description}
                </h3>
              <ul className="list-disc list-inside pl-2 text-left text-black text-sm sm:text-base leading-relaxed space-y-1">



                  {topic.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
