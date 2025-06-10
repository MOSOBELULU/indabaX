import { organisers } from "../data/DummyData";
import OrganisersHero from "../components/organisers/organisersHero";
import BackBtn from "../components/reusable/BackBtn"
export default function OrganisersPage() {
  return (
    <>
<OrganisersHero/>

    <div className="px-4 py-16 max-w-6xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {organisers.map((person, index) => (
          <div
            key={index}
            className="relative h-74 rounded-2xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <h4 className="text-white text-lg font-semibold">{person.name}</h4>
              <p className="text-white text-sm">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    <BackBtn/>
    </div>
    </>
  );
}
