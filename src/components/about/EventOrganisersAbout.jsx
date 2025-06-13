import { organisers } from "../../data/DummyData";

export default function EventOrganisersAbout() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl mb-12">
          Team Behind The Magic
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {organisers.slice(0, 3).map(({ name, role, image, bio, twitter, linkedin }) => (
            <div
              key={name}
              className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className=" mb-2">{role}</p>
              <p className=" mb-4">{bio}</p>
              <div className="flex space-x-4">
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                  aria-label={`${name} Twitter`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.06 9.06 0 01-2.88 1.1 4.52 4.52 0 00-7.69 4.13 12.9 12.9 0 01-9.35-4.74 4.52 4.52 0 001.4 6.05A4.48 4.48 0 012 9.71v.05a4.52 4.52 0 003.64 4.43 4.5 4.5 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.86 0-.2 0-.42-.02-.63A9.2 9.2 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                  aria-label={`${name} LinkedIn`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.5v16H.24zM8.52 8h4.29v2.33h.06c.6-1.13 2.06-2.33 4.25-2.33 4.54 0 5.37 2.99 5.37 6.87V24h-4.5v-7.61c0-1.81-.03-4.15-2.53-4.15-2.54 0-2.93 1.98-2.93 4.02V24h-4.5z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
