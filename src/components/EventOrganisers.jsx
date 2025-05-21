import { organisers } from "../data/DummyData";
export default function EventOrganisers() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Meet The Organisers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {organisers.map((person, i) => (
          <div key={i} className="text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-[#009639]">{person.name}</h4>
            <p className="text-gray-500 text-sm">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}