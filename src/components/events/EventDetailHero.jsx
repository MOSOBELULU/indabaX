import RegisterButton from "../reusable/Register_button";
import { useTranslation } from "react-i18next";

export default function EventDetailHero({ title, image }) {
  const {t} = useTranslation()
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/80 to-transparent" />

     
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mt-20">
          {t("events.title")}
        </h1>
        <div className="mt-10">

        <RegisterButton/>
        </div>
        

        
      </div>
    </section>
  );
}
