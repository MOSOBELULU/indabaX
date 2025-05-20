import { HiOutlineLocationMarker } from "react-icons/hi";
import RegisterButton from "../components/Register_button";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.home.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-black/50 z-0"></div>

  
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-23 text-center">
        <div className="max-w-4xl w-full space-y-6">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            IndabaX São Tomé and Príncipe 2025
          </h1>

          <div className="flex items-center justify-center space-x-2 text-white  text-xl md:text-2xl font-medium drop-shadow-sm mb-1 pt-5">
            <HiOutlineLocationMarker className="text-white  " />
            <span>University of São Tomé and Príncipe</span>
          </div>

         
          <div className="flex flex-col items-center justify-center space-y-4 pt-1">
            <CountdownTimer />
            <RegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
}
