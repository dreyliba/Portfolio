import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="relative w-full flex flex-col  px-4 md:px-0 py-10 md:py-20 gap-6 overflow-hidden bg-lightPrimary dark:bg-darkPrimary"
      id="contactme"
    >
      <div className="text-center md:text-left  space-y-3 px-4 sm:px-4 md:px-10 md:space-y-6 md:mt-10 max-w-7xl  mx-auto my-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
          {/* Left Column */}
          <div
            className="flex-1 flex flex-col gap-10"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-2xl md:text-5xl font-bold text-darkPrimary dark:text-lightPrimary text-start">
              Let's Work Together!
            </h1>
            <p className="text-darkPrimary dark:text-lightSecondary text-sm md:text-2xl max-w-4xl text-justify leading-relaxed">
              I'm interested in collaborating on:
            </p>
            {/* Interest Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "E-commerce Website",
                "Portfolio Website",
                "Full-Stack Application",
                "Landing Page",
                "Blog Website",
                "Business Website",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 md:py-2 text-sm md:text-lg rounded-full bg-darkAccent/10 text-darkAccent border border-darkAccent hover:scale-105 transition cursor-default
                  
                  dark:bg-lightAccent/10 dark:text-lightAccent border dark:border-lightAccent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <form
            className="flex-1 flex flex-col gap-4 text-lg w-full"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-darkPrimary/5 text-darkPrimary placeholder:text-darkPrimary/50 focus:ring-darkAccent 
            dark:bg-lightPrimary/5 dark:text-lightPrimary dark:placeholder:text-lightPrimary/50 dark:focus:ring-lightAccent  focus:outline-none focus:ring-2 transition ease-in-out duration-300 hover:shadow-md hover:shadow-purple-500
          
            "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-darkPrimary/5 text-darkPrimary placeholder:text-darkPrimary/50 focus:ring-darkAccent 
            dark:bg-lightPrimary/5 dark:text-lightPrimary dark:placeholder:text-lightPrimary/50 dark:focus:ring-lightAccent  focus:outline-none focus:ring-2 transition ease-in-out duration-300 hover:shadow-md hover:shadow-purple-500
          
            "
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-md bg-darkPrimary/5 text-darkPrimary placeholder:text-darkPrimary/50 focus:ring-darkAccent 
            dark:bg-lightPrimary/5 dark:text-lightPrimary dark:placeholder:text-lightPrimary/50 dark:focus:ring-lightAccent  focus:outline-none focus:ring-2 transition ease-in-out duration-300 hover:shadow-md hover:shadow-purple-500
          
            "
            ></textarea>
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-lightPrimary dark:text-darkPrimary bg-darkAccent dark:bg-lightAccent hover:bg-darkSecondary dark:hover:bg-lightPrimary focus:ring-2 focus:outline-none focus:ring-darkSecondary font-semibold rounded-lg text-md px-5 py-2.5 text-center 
                             transition-all duration-300 ease-in-out transform hover:scale-105 text-center w-full
                            
                             "
            >
              <FaPaperPlane className="text-lg" />
              Submit{" "}
            </button>
            {/* <div className="flex gap-6 justify-center mt-5">
              <a
                href="#"
                target="_blank"
                className="text-darkAccent dark:text-lightAccent text-2xl hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-darkAccent dark:text-lightAccent text-2xl hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-darkAccent dark:text-lightAccent text-2xl hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
            </div> */}
          </form>
        </div>
        {/* Social Media */}
      </div>
    </section>
  );
}
