import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function SpeakerCard({ speaker }) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg group">
      <div className="relative">
        <Link to={`/speakerdetail/${speaker.id}`}>
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-72 object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
          <div className="text-left">
            <Link to={`/speakerdetail/${speaker.id}`}>
              <h3 className="text-white text-lg font-bold">{speaker.name}</h3>
              <p className="text-gray-200 text-sm">  {t(`speakers.${speaker.id}.profession`)}</p>
              <p className="text-sm italic text-gray-300 mt-1">
                “{t(`speakers.${speaker.id}.topic`)}”
              </p>
            </Link>

            <div className="flex gap-3 mt-3">
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white hover:text-[#0A66C2]" />
                </a>
              )}
              {speaker.twitter && (
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white hover:text-[#1DA1F2]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
