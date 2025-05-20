import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Register", path: "/register" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

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
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-md transition ${
                    isActive(item.path)
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800 border-2 border-red-500">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
  <nav className="md:hidden bg-white shadow-md px-6 pb-4 absolute top-full left-0 w-full z-40">
    <ul className="flex flex-col gap-3 text-gray-800 font-semibold text-base">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            onClick={toggleMenu}
            className={`block px-4 py-2 rounded-md transition ${
              isActive(item.path)
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)}

    </header>
  );
}
