export default function NewsLetter() {
    return (
     <section class="pt-10  2xl:py-24  sm:pt-16 md:pt-0">
  <div class="px-4 mx-auto  bg-gradient-to-r from-[#007847] to-[#003d25] max-w-7xl sm:px-6 lg:px-8">
    <div class="2xl:pl-24">
      <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
        <div class="text-center md:py-16 xl:py-24 md:text-left">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Stay in the Loop
          </h2>
          <p class="mt-4 text-lg text-white max-w-xl">
            Get event news, speaker announcements, and exclusive updates for IndabaX São Tomé.
          </p>

          <form class="mt-8 sm:flex sm:max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent sm:flex-1"
              required
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-semibold text-white bg-black rounded-md sm:mt-0 sm:ml-4 hover:opacity-90 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div class="flex items-center justify-center">
          <img
             class=" relative md:bottom-0 md:scale-110 h-70 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
            src="images/newsletter.png"
            alt="Newsletter illustration"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    )
}



{/* <section class="pt-10 bg-amber-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
    <div class="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
        <div class="2xl:pl-24">
            <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                <div class="text-center md:py-16 xl:py-24 md:text-left">
                    <blockquote>
                        <p class="text-2xl font-semibold leading-relaxed text-gray-900">“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”</p>
                    </blockquote>
                    <div class="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                        <p class="text-base font-semibold text-gray-900">Jenny Wilson</p>
                        <p class="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">Project Manager at Microsoft</p>
                    </div>
                    <p class="mt-12 text-base text-gray-900 lg:mt-20">Want to see Celebration in action?</p>
                    <a href="#" title="" class="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80" role="button"> Create your first website </a>
                </div>

                <div class="relative">
                    <img class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png" alt="" />
                </div>
            </div>ction> */}
