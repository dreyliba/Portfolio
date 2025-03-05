import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("contactme", {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }, 100);
  };
  return (
    <nav className="bg-gradient-dark bg-darkPrimary fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/logo.PNG"
            alt="logo andrian"
            className=" w-11 h-auto"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-lightAccent hidden md:block">
            Andrian Pontejo
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="group inline-block">
            <button
              onClick={handleHireMeClick}
              type="button"
              className="flex items-center gap-2 text-darkPrimary bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-darkSecondary font-semibold rounded-lg text-md px-5 py-2.5 text-center 
      transition-all duration-300 ease-in-out transform hover:scale-105 
      hover:shadow-[0_0_20px_rgba(129,33,208,0.7)] 
      "
            >
              <MdOutlineMailOutline className="text-xl group-hover:animate-jello" />
              Hire Me
            </button>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-lightAccent rounded-lg md:hidden "
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-sm ${
                    isActive
                      ? "text-lightAccent text-md"
                      : "text-lightPrimary/70 hover:text-lightAccent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-sm ${
                    isActive
                      ? "text-lightAccent text-md"
                      : "text-lightPrimary/70 hover:text-lightAccent"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-sm ${
                    isActive
                      ? "text-lightAccent text-md"
                      : "text-lightPrimary/70 hover:text-lightAccent"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-sm ${
                    isActive
                      ? "text-lightAccent text-md"
                      : "text-lightPrimary/70 hover:text-lightAccent"
                  }`
                }
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quotes"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-sm ${
                    isActive
                      ? "text-lightAccent text-md"
                      : "text-lightPrimary/70 hover:text-lightAccent"
                  }`
                }
              >
                Quotes
              </NavLink>
            </li>
            <li className="flex items-center">
              <button
                onClick={toggleTheme}
                className="block py-2 px-3 text-lightPrimary hover:text-lightAccent rounded-sm text-xl"
              >
                {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
