import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col space-y-3 z-50 transition-opacity duration-300 ${
        showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Scroll to Top */}
      <button
        onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
        className="p-3 bg-darkPrimary text-white rounded-full  hover:shadow-[0_0_20px_rgba(129,33,208,0.7)]  hover:bg-darkPrimary/80 border-2 border-lightPrimary"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={() => scroll.scrollToBottom({ duration: 500, smooth: true })}
        className="p-3 bg-darkPrimary text-white rounded-full  hover:shadow-[0_0_20px_rgba(129,33,208,0.7)]  hover:bg-darkPrimary/80 border-2 border-lightPrimary"
        aria-label="Scroll to bottom"
      >
        <FaArrowDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ScrollButtons;
