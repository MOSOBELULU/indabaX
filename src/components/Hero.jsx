import RegisterButton from "../components/Register_button";

export default function Hero() {
  return (
    <div>
      <div className="relative bg-[url('/images/hero.home.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            IndabaX São Tomé and Príncipe 2025
          </h1>

          <h2 className="text-white text-xl md:text-2xl font-medium">
            University of São Tomé and Príncipe
          </h2>

          <h2 className="text-white text-lg md:text-xl font-light">
            14 August 2025 to 16 August 2025
          </h2>

          <RegisterButton />
        </div>
      </div>
    </div>
  );
}
