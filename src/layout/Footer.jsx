import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-white shadow-md text-black py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline text-black">Home</a></li>
            <li><a href="/aboutus" className="hover:underline text-black">About</a></li>
            <li><a href="/register" className="hover:underline text-black">Register</a></li>
            <li><a href="/contact" className="hover:underline text-black">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold mb-2">More Info</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/faqs" className="hover:underline text-black">FAQs</a></li>
            <li><a href="/careers" className="hover:underline text-black">Careers</a></li>
            <li><a href="/gallery" className="hover:underline text-black">Gallery</a></li>
            <li><a href="/codeofconduct" className="hover:underline text-black">Code of Conduct</a></li>
            <li><a href="/privacypolicy" className="hover:underline text-black">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold mb-2">Stay in the Loop</h4>
          <p className="text-sm mb-2">Subscribe to our newsletter to hear about more events and updates.</p>
          <form className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md bg-white text-black border border-black text-sm w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold px-4 py-2 rounded-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

      
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} IndabaX São Tomé. All rights reserved.</p>
          <div className="flex space-x-6 text-4xl">
            <a
              href="https://web.facebook.com/deepindaba/?ref=br_rs&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/deepindaba"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/deep-learning-indaba/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
