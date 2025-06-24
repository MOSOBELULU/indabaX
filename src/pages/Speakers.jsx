import { Link } from 'react-router-dom';
import { speakers } from "../data/DummyData";
import SpeakerCard from "../components/reusable/SpeakersCard";
import BackBtn from '../components/reusable/BackBtn';
import { useTranslation } from "react-i18next";

export default function SpeakersPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-25" id="all-speakers">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <BackBtn />
          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center text-black px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#009639]">
              {t("speakersPage.title")}
            </h2>
            <h3 className="text-lg md:text-xl mb-4 max-w-3xl">
              {t("speakersPage.description1")}
            </h3>
            <h3 className="text-lg md:text-xl max-w-3xl">
              {t("speakersPage.description2")}
            </h3>
          </div>
        </div>

        <br />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
    </>
  );
}
