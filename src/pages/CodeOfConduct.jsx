/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ShieldCheck, Handshake, AlertTriangle } from "lucide-react";

export default function CodeOfConduct() {
  const rules = [
    {
      icon: ShieldCheck,
      title: "Respect Everyone",
      description:
        "Treat all participants with respect, regardless of gender, race, background, or beliefs. Harassment of any kind will not be tolerated."
    },
    {
      icon: Handshake,
      title: "Foster Collaboration",
      description:
        "Engage with others constructively. Embrace diversity of thought and encourage open, inclusive discussions."
    },
    {
      icon: AlertTriangle,
      title: "Report Issues Promptly",
      description:
        "If you experience or witness any behavior that violates our code, report it immediately to the organizing team."
    }
  ];

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Code of Conduct
      </motion.h2>
      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md border"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <rule.icon className="w-10 h-10  mb-4 text-orange-600" />
            <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
            <p className=" text-sm leading-relaxed">{rule.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
