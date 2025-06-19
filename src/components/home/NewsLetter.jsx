export default function NewsLetter() {
  return (
    <section className="flex items-end bg-gradient-to-r from-[#007847] to-[#003d25]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end">
          {/* TEXT + FORM */}
          <div className="text-center md:text-left py-12 md:py-20 xl:py-24">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg text-white max-w-xl">
              Get event news, speaker announcements, and exclusive updates for
              IndabaX São Tomé.
            </p>

            <form className="mt-8 flex w-full max-w-md gap-0 mx-auto md:mx-0 flex-nowrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white bg-black rounded-r-md hover:opacity-90 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* IMAGE */}
          <div className="hidden md:flex justify-end items-end h-full">
            <img
              className="w-full max-h-[500px] object-contain"
              src="images/newsletter.png"
              alt="Newsletter illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
