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

  
  <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-4 md:px-35 py-15">
    <div className="max-w-4xl w-full space-y-6">
      <h1 className="text-white text-3xl md:text-6xl font-bold drop-shadow-lg mb-4">
        IndabaX São Tomé and Príncipe <CurrentYear/>
      </h1>

      <div className="space-x-2 text-white md:text-2xl font-medium drop-shadow-sm mb-1 pt-5">
        <h3 className="text-lg md:text-xl font-medium text-white max-w-xl">
          Be part of a growing movement shaping the future of AI in Africa through collaboration, community, and cutting-edge discussions.
        </h3>
      </div>

      <div className="flex flex-col items-start space-y-4 pt-1">
        <CountdownTimer />
        <RegisterButton />
      </div>
    </div>
  </div>
</section>



  );
}
