import CurrentYear from "../reusable/CurrentYear";
import RegisterButton from "../reusable/Register_button";
import CountdownTimer from "../reusable/CountdownTimer";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.home.png')" }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/100 via-black/90 to-transparent"></div>

     <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 md:px-10 pt-20 md:pt-32">


        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between w-full">
         
          <div className="flex-1 min-w-[300px] space-y-6">
            <h1 className="text-white text-3xl md:text-6xl font-bold drop-shadow-lg mb-4 text-left">
              IndabaX São Tomé and <br/> Príncipe <CurrentYear />
            </h1>

            <h3 className="text-lg md:text-xl font-medium text-white max-w-xl drop-shadow-sm mb-1 text-left">
              Be part of a growing movement shaping the future of AI in Africa through collaboration, community, and cutting-edge discussions.
            </h3>

            <div className="flex flex-col items-start space-y-4 pt-1">
              <CountdownTimer />
              <RegisterButton />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
``