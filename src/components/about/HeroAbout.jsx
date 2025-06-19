export default function HeroAbout() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
     
      <div className=" absolute inset-0">
        <img
          src="/images/impact1.png"
          alt="About IndabaX São Tomé"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          About IndabaX São Tomé and Príncipe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl drop-shadow-sm">
          Uniting minds, Building knowledge – learn more about our mission, how we're shaping Africa's AI future.
        </p>
      </div>
    </section>
  );
}
