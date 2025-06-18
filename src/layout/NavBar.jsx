import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/aboutus" },
    { label: t("nav.events"), path: "/eventspage" },
    { label: t("nav.agenda"), path: "/agenda" },
    { label: t("nav.register"), path: "/register" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-10">
       
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/indabaX_logo.png"
            alt="indabaLogo"
            className="h-10 w-auto object-contain"
          />
        </Link>


        <div className="flex items-center space-x-4 md:hidden">
       
          <button
            onClick={toggleLanguage}
            className="text-sm px-2 py-1 border border-[#007847] rounded text-[#007847] hover:bg-[#007847] hover:text-white transition"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>

          
          <button
            onClick={toggleMenu}
            className="text-[#007847]"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

    
        <nav className="hidden md:flex items-center gap-4 font-semibold text-sm sm:text-base">
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
          
          <button
            onClick={toggleLanguage}
            className="text-sm px-3 py-1 border border-[#007847] rounded text-[#007847] hover:bg-[#007847] hover:text-white transition"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
        </nav>
      </div>

      
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col gap-2 py-4 px-4 font-semibold text-base">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
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
