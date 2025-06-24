import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/DummyData";
import { useTranslation } from "react-i18next";

export default function MiniGallery() {
  const {t} = useTranslation()
  const showFew = images.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4 ">
          {t("miniGallery.title")}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-10">
       {t("miniGallery.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {showFew.map(({ image }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300 ease-in-out"
              />

              {index === 2 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Link
                    to="/gallerypage"
                    className="bg-white text-black font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
                  >
                    <span>{t("miniGallery.viewMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
