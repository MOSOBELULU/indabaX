import { Link } from "react-router-dom";
import { speakers } from "../../data/DummyData";
import SpeakerCard from "../reusable/SpeakersCard";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

export default function SpeakersSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="all-speakers">
      <h1 className="text-center mb-12 text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">{t("speakersSection.title")}</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {speakers.slice(0, 3).map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
            <div className="mt-10 flex justify-center">
        <Link
          to="/speakerspage"
          className="flex items-center gap-2 px-6 py-2 mt-10 bg-[#007847] text-white rounded-lg hover:bg-green-700 transition"
        >
          {t("events.showMore")} <FaArrowRight/>
        </Link>
      </div>
    </section>
  );
}
