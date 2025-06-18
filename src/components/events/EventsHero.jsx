import RegisterButton from "../reusable/Register_button";

export default function EventHero({ title, image }) {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <div className="absolute inset-0  bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

     
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <div className="mt-10">

        <RegisterButton/>
        </div>
        

        {/* Optional CTA Button (future) */}
        {/* <a href="#" className="inline-block mt-6 px-6 py-3 bg-[#007847] text-white rounded-full">
          Register Now
        </a> */}
      </div>
    </section>
  );
}
