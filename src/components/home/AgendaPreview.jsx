import {agenda, speakers} from "../../data/DummyData";
import { ArrowRight } from "lucide-react";

export default function AgendaPreview() {

    const previewDay = "Day1"

    return (
       <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agenda Preview</h2>

      <div className="space-y-3">
        {agenda[previewDay]?.slice(0, 3).map((item, index) => {
          const speaker = item.speakerId
            ? speakers.find((s) => s.id === item.speakerId)
            : null;

          return (
            <div key={index} className="border p-4 rounded-md bg-white shadow-sm">
              <p className="text-sm text-gray-500">{item.time}</p>
              <h4 className="text-md font-semibold">
                {item.title}
                {speaker && (
                  <span className="text-sm block font-normal text-gray-500">
                    – {speaker.name}
                  </span>
                )}
              </h4>
              <span className="text-xs uppercase text-[#007847] font-bold">
                {item.type}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <a
          href="/agenda"
          className="inline-block bg-[#007847] text-white font-medium px-15 py-2 rounded-full hover:bg-[#005c36] transition"
        >
          Show Full Agenda <ArrowRight size={18} />
        </a>
      </div>
    </section>  
    )
}