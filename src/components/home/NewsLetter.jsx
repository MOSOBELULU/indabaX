export default function NewsLetter() {
  return (
    <section className=" flex items-center pt-10 sm:pt-16 md:pt-0 bg-gradient-to-r from-[#007847] to-[#003d25]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20 items-center">
          {/* Text + Form */}
          <div className="text-center md:py-16 xl:py-24 md:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-white max-w-xl">
              Get event news, speaker announcements, and exclusive updates for IndabaX São Tomé.
            </p>

            <form className="mt-8 sm:flex sm:max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent sm:flex-1"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-semibold text-white bg-black rounded-md sm:mt-0 sm:ml-4 hover:opacity-90 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              className="md:scale-110 lg:scale-100 2xl:scale-110 2xl:-mt-20 h-auto max-h-[500px]"
              src="images/newsletter.png"
              alt="Newsletter illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
