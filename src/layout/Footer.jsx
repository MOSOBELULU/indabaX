import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#007847] to-[#003d25] text-black ">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

         
          <div className='text-white'>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/aboutus" className="hover:underline">About</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

       
          <div className='text-white'>
            <h4 className="text-lg font-semibold mb-4">More Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/faqs" className="hover:underline">FAQs</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/codeofconduct" className="hover:underline">Code of Conduct</a></li>
              <li><a href="/privacypolicy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          
          <div className='text-white'>
            <h4 className="text-lg font-semibold mb-4">Stay in the Loop</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter to hear about more events and updates.</p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border border-white rounded-md text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>


    <div className="text-white flex flex-col gap-4">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} IndabaX São Tomé. All rights reserved.
  </p>
  <div className="flex items-center gap-4 text-xl">
    <a
      href="https://web.facebook.com/deepindaba/?ref=br_rs&_rdc=1&_rdr#"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition"
    >
      <FaFacebook />
    </a>
    <a
      href="https://x.com/deepindaba"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.linkedin.com/company/deep-learning-indaba/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 transition"
    >
      <FaLinkedin />
    </a>
  </div>
</div>


        </div>
      </div>
    </footer>
  );
}
