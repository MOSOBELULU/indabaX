import { useParams } from "react-router-dom";
import { speakers } from "../data/DummyData";
import BackBtn from "../components/reusable/BackBtn";
import { useTranslation } from "react-i18next";

export default function SpeakerDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const speaker = speakers.find((s) => s.id.toString() === id);

  if (!speaker)
    return <p className="text-center text-red-500">Speaker not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-12">
      <BackBtn className="mb-4" />
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <div className="flex-1">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#009639] mb-2">
            {speaker.name}
          </h2>
          <h4 className="text-xl mb-4">
            {t(`speakers.${speaker.id}.profession`)}
          </h4>
          <p className="leading-relaxed">
            {t(`speakers.${speaker.id}.background`)}
          </p>
        </div>
      </div>
    </div>
  );
}
