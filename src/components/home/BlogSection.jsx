import { blogPosts } from "../../data/DummyData"

export default function BlogSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Stories from the IndabaX AI Community
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-black">
            Real stories and insights from AI enthusiasts and local tech heroes pushing boundaries.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
          {blogPosts.map(({ id, category, title, description, author, avatar, link }) => (
            <div key={id} className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
              <div className="flex flex-col justify-between flex-1 px-5 py-5">
                <div className="flex-shrink-0">
                  <span className="block text-xs font-semibold tracking-widest bg-[#007847] text-white rounded-xl pl-2 uppercase">
                    {category}
                  </span>
                </div>

                <div className="flex-1 mt-16">
                  <p className="text-2xl font-semibold">
                    <a href={link} title={title} className="text-black">
                      {title}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">{description}</p>
                </div>
              </div>

              <div className="border-t border-gray-200">
                <div className="flex items-center flex-1 px-6 py-4">
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src={avatar}
                    alt={author}
                  />
                  <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                    {author}
                  </span>

                  <a
                    href={link}
                    title="Read more"
                    className="inline-flex items-center flex-shrink-0 px-4 py-4 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-[#005b33] hover:text-white hover:rounded-xl"
                  >
                    Read more
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


