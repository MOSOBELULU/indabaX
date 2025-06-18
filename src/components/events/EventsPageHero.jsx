export default function EventPageHero() {
 

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
    style={{ backgroundImage: "url('/images/events/EventsHero.jpg')" }}
    >
    <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Explore the Future of AI & Tech
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium max-w-lg mx-auto">
          Join leading minds and innovators in AI and technology at top events designed to inspire and connect.
        </p>
      </div>
    </section>
  );
}
