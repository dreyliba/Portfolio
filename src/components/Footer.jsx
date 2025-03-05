import {
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 md:px-20 bg-gradient-secondaryDark border-t border-lightAccent/20 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto px-4 md:px-0">
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
          <a
            href="https://web.facebook.com/dreyliba/"
            target="_blank"
            className="p-2 md:p-3 bg-lightPrimary/100 rounded-full shadow-md"
          >
            <FaFacebookMessenger className="text-darkPrimary w-3 h-3 md:w-4 md:h-4" />
          </a>
          <a
            href="https://github.com/dreyliba/"
            target="_blank"
            className="p-2 md:p-3 bg-lightPrimary/100 rounded-full shadow-md"
          >
            <FaGithub className="text-darkPrimary w-3 h-3 md:w-4 md:h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrian-pontejo-5565181b7/"
            target="_blank"
            className="p-2 md:p-3 bg-lightPrimary/100 rounded-full shadow-md"
          >
            <FaLinkedin className="text-darkPrimary w-3 h-3 md:w-4 md:h-4" />
          </a>
          <a
            href="https://www.instagram.com/drey_liba/"
            target="_blank"
            className="p-2 md:p-3 bg-lightPrimary/100 rounded-full shadow-md"
          >
            <FaInstagram className="text-darkPrimary w-3 h-3 md:w-4 md:h-4" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="flex items-center gap-4 flex-col sm:flex-row md:flex-row ">
          {" "}
          <img
            src="/assets/logo.PNG"
            alt="logo andrian"
            className=" w-11 h-auto"
          />
          <p className="self-center text-sm md:text-md font-normal whitespace-nowrap text-lightAccent">
            © {year} Andrian Pontejo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
