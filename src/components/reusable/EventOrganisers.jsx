import { organisers } from "../../data/DummyData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function EventOrganisers({ variant = "home" }) {
  const showOrganisers = organisers.slice(0, 5);

  if (variant === "home") {
    // Your existing home page layout
    return (
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto rounded-xl bg-gray-300 p-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Meet the Organisers
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-md">
                Our organisers are a dedicated team of experts and visionaries who
                work behind the scenes to make this event possible. With diverse
                skills and passion, they bring creativity, coordination, and care
                to ensure every detail runs smoothly.
              </p>
            </div>

            {showOrganisers.slice(0, 2).map((person, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-50 overflow-hidden shadow-md rounded-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-2 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <h4 className="text-sm font-semibold">{person.name}</h4>
                    <p className="text-xs">{person.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {showOrganisers.slice(2, 5).map((person, i) => (
              <motion.div
                key={i + 2}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-50 overflow-hidden shadow-md rounded-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-2 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <h4 className="text-sm font-semibold">{person.name}</h4>
                    <p className="text-xs">{person.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex items-end md:col-start-1 md:row-start-2 sm:col-span-2 md:col-span-1">
              <a
                href="/organiserspage"
                className="inline-flex items-center text-[#007847] font-semibold"
              >
                See all organisers&nbsp;
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (variant === "about") {
    // About page layout - testimonial style cards
    return (
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Meet the <span className="text-blue-600">Organisers</span>
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            {showOrganisers.slice(0, 3).map((person, i) => (
              <div
                key={i}
                className="overflow-hidden bg-white rounded-md shadow"
              >
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src={person.image}
                      alt={person.name}
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                      “{person.bio}”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold text-black mt-9">
                    {person.name}
                  </p>
                  <p className="mt-1 text-base text-gray-600">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // fallback: just render nothing or something basic
  return null;
}
