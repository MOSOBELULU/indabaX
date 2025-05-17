import { sponsors } from "../data/DummyData";

export default function Sponsorship() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-105"
          >
           <img
  src={sponsor.logo}
  alt={sponsor.name}
  className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-full border-2 border-gray-300 shadow-sm grayscale hover:grayscale-0 transition"
/>

          </a>
        ))}
      </div>
    </section>
  );
}
