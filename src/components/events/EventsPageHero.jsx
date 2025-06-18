export default function EventPageHero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/events/EventsHero.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md sm:drop-shadow-lg">
          Explore the Future of <br/> AI & Tech
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium max-w-lg mx-auto drop-shadow-sm">
          Join leading minds and innovators in AI and technology at top events designed to inspire and connect.
        </p>
      </div>
    </section>
  );
}
