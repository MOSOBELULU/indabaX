import SpeakerCard from "../reusable/SpeakersCard";
import { useState } from "react";

export default function SpeakerModal({ speaker, onClose }) {
const [showFull, setShowFull] = useState(false)

  if (!speaker) return null;

  return (
    <div
      className="fixed inset-0  flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className=" rounded-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <SpeakerCard speaker={speaker} />

       {!showFull ? (
  <button
    onClick={() => setShowFull(true)}
    className="mt-4 text-sm text-[#007847] hover:underline"
  >
    Read More
  </button>
) : (
  <p className="mt-4 whitespace-pre-line">{speaker.background}</p>
)}

      </div>
    </div>
  );
}
