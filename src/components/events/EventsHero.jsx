

export default function EventHero({ title, date, location, image }) {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <div className="absolute inset-0 bg-opacity-60" />

     
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm sm:text-lg font-medium">
          {date} | {location}
        </p>

        {/* Optional CTA Button (future) */}
        {/* <a href="#" className="inline-block mt-6 px-6 py-3 bg-[#007847] text-white rounded-full">
          Register Now
        </a> */}
      </div>
    </section>
  );
}
