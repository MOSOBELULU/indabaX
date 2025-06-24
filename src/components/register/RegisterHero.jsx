import CurrentYear from "../reusable/CurrentYear";
import { useTranslation } from "react-i18next";
import Register_button from "../reusable/Register_button"

export default function RegisterHero(){
  const {t} = useTranslation();
    return (
    <section className="relative h-screen w-full overflow-hidden"
     style={{ backgroundImage: "url('/images/values/Image3.png')" }}>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {t("registerHeroTitle")}<CurrentYear/>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
          {t("registerHeroSubtitle")}
        </p>
        <div className="mt-10">
        <Register_button />
        </div>
      </div>
    </section>
  );
}