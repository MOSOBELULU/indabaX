import CurrentYear from "../reusable/CurrentYear";

export default function RegisterHero(){
    return (
    <section className="relative h-screen w-full overflow-hidden"
     style={{ backgroundImage: "url('/images/values/Image3.png')" }}>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Be Part of IndabaX AI <CurrentYear/>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
          Engage. Learn. Network. Join Africa's leading AI community.
        </p>
        <a
          href="#register-form"
          className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}