import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-[#007847] hover:bg-[#005f36] text-white p-3 rounded-full shadow-lg transition-all z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
