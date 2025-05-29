import { agenda } from "../../data/DummyData";

import { ArrowRight } from "lucide-react";

export default function AgendaSection() {
  const previewItems = agenda.Day1.slice(0, 3); 

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What’s Happening at IndabaX?
          </h2>

          <div className="space-y-4 mb-6">
            {previewItems.map((item, index) => (
              <div key={index} className="border-l-4 border-[#007847] pl-4">
                <p className="text-sm text-gray-500">{item.time}</p>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <span className="text-xs uppercase text-[#007847] font-bold">
                  {item.type}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/agenda"
            className="inline-flex items-center text-[#007847] font-semibold hover:underline"
          >
            See Full Agenda
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

       
        <div className="w-full h-full">
          <img
            src="/images/agendapre.jpg"
            alt="IndabaX Agenda Preview"
            className="rounded-xl shadow-lg w-full h-[340px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
