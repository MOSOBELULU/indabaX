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
    { label: "Events", path: "/eventspage" },
    { label: "Agenda", path: "/agenda" },
    { label: "Register", path: "/register" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-10 overflow-hidden">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img
              src="/images/indabaX_logo.png"
              alt="indabaLogo"
              className="h-10 w-auto object-contain max-w-full"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 font-semibold text-sm sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md transition ${
                isActive(item.path) ? "text-[#007847]" : "hover:text-[#007847]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={toggleMenu}
            className="text-[#007847] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col gap-2 py-4 px-4 font-semibold text-base max-w-full mx-auto overflow-hidden">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block px-4 py-2 rounded-md transition ${
                    isActive(item.path) ? "text-[#007847]" : "text-black"
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
