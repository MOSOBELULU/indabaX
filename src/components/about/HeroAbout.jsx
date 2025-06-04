export default function HeroAbout() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4]"
      >
        <source src="/videos/aboutHero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          About IndabaX São Tomé and Príncipe
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Uniting minds, Building knowledge – learn more about our mission, how we're shaping Africa's AI future.
        </p>
      </div>
    </section>
  );
}
