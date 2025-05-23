/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ShieldCheck, Info, LockKeyhole, Cookie, RefreshCcw, UserRoundCheck } from "lucide-react";
import CurrentYear from "../components/reusable/CurrentYear";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-tr from-white via-yellow-50 to-white min-h-screen py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Effective Date: <CurrentYear />
        </p>

        <PolicySection
          title="1. Information We Collect"
          icon={<Info size={22} className="text-[#12AD2B]" />}
          text="We may collect basic information such as your name, email address, and usage data when you interact with our website or application."
        />

        <PolicySection
          title="2. How We Use Your Information"
          icon={<UserRoundCheck size={22} className="text-[#12AD2B]" />}
          list={[
            "To improve our services",
            "To communicate with you",
            "To provide customer support",
            "To ensure security and prevent fraud",
          ]}
        />

        <PolicySection
          title="3. Data Sharing"
          icon={<RefreshCcw size={22} className="text-[#12AD2B]" />}
          text="We do not sell or share your personal data with third parties, except when legally required or necessary to provide essential services."
        />

        <PolicySection
          title="4. Cookies"
          icon={<Cookie size={22} className="text-[#12AD2B]" />}
          text="We may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings."
        />

        <PolicySection
          title="5. Data Security"
          icon={<LockKeyhole size={22} className="text-[#12AD2B]" />}
          text="We take reasonable steps to protect your data from unauthorized access, disclosure, or loss."
        />

        <PolicySection
          title="6. Your Rights"
          icon={<ShieldCheck size={22} className="text-[#12AD2B]" />}
          text="You have the right to access, update, or delete your personal information. Please contact us at 014 585 9663 to make a request."
        />

        <PolicySection
          title="7. Changes to This Policy"
          icon={<RefreshCcw size={22} className="text-[#12AD2B]" />}
          text="We may update this policy from time to time. Please check this page regularly to stay informed about any changes."
        />
      </motion.div>
    </section>
  );
}

function PolicySection({ title, text, list, icon }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-2 text-xl font-semibold text-gray-800">
        {icon}
        <h2>{title}</h2>
      </div>
      {text && <p className="text-gray-600">{text}</p>}
      {list && (
        <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}
