import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AgendaSection() {
  const { t } = useTranslation();
  const previewItems = t("agenda.preview.Day1", { returnObjects: true });

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {t("agenda.sectionTitle")}
          </h2>

          <div className="space-y-4 mb-6">
            {previewItems.map((item, index) => (
              <div key={index} className="border-l-4 border-[#007847] pl-4">
                <p className="text-sm text-gray-500">{item.time}</p>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <span className="text-xs uppercase text-[#007847] font-bold">
                  {t(`agenda.types.${item.type}`)}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/agenda"
            className="inline-flex items-center text-[#007847] font-semibold hover:underline"
          >
            {t("agenda.seeFull")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="w-full h-full">
          <img
            src="/images/agendapre.png"
            alt="IndabaX Agenda Preview"
            className="rounded-xl shadow-lg w-full h-[340px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
