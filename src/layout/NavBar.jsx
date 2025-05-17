import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6 md:px-10">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img
              src="/images/indabaX_logo.png"
              alt="indabaLogo"
              className="h-10 w-auto object-contain"
            />
            <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent font-semibold">
              São Tomé and Príncipe
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex flex-wrap gap-3 sm:gap-4 text-gray-800 font-semibold text-sm sm:text-base">
            <li>
              <Link
                to="/"
                className="px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="px-4 py-2 rounded-md hover:bg-yellow-300 hover:text-black transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-3 text-gray-800 font-semibold text-base">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-black hover:text-white rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-yellow-300 hover:text-black rounded-md"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-green-500 hover:text-white rounded-md"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block px-4 py-2 hover:bg-red-500 hover:text-white rounded-md"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
