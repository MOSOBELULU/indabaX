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
    <header className="bg-white shadow-md top-0 left-0 w-full z-50 relative">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 py-3 sm:px-6 md:px-10">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-gray-800 font-semibold text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md transition ${
                isActive(item.path)
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={toggleMenu}
            className=" text-green-800 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
{isOpen && (
  <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40 overflow-x-hidden">
    <ul className="flex flex-col gap-2 py-4 px-4 text-gray-800 font-semibold text-base max-w-screen-sm mx-auto">


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
