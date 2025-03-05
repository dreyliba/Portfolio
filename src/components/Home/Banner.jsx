import {
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Banner() {
  return (
    <section className="bg-gradient-secondaryDark w-full md:min-h-[60vh] bg-cover bg-center flex items-center justify-center pt-32 md:mt-0 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Left Column - Text */}
        <div
          className="text-center p-4 md:p-0 md:text-left  space-y-3 md:space-y-6 "
          data-aos="fade-right"
        >
          <h1 className="text-2xl md:text-5xl font-bold  text-lightAccent">
            Hi! I'm Andrian
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold  text-lightPrimary/50">
            Empowering Your Digital Presence{" "}
          </h1>

          <p className="text-lightAccent text-sm md:text-xl">
            Specializing in Custom Wordpress Development & Full-Stack
            Applications
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-2  md:space-x-4">
            <a
              href="https://web.facebook.com/dreyliba/"
              target="_blank"
              className="p-2 md:p-3 bg-lightPrimary/50 rounded-full shadow-md"
            >
              <FaFacebookMessenger className="text-darkPrimary w-3 h-3  md:w-4 md:h-4" />
            </a>
            <a
              href="https://github.com/dreyliba/"
              target="_blank"
              className="p-2 md:p-3 bg-lightPrimary/50 rounded-full shadow-md"
            >
              <FaGithub className="text-darkPrimary w-3 h-3  md:w-4 md:h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrian-pontejo-5565181b7/"
              target="_blank"
              className="p-2 md:p-3  bg-lightPrimary/50 rounded-full shadow-md"
            >
              <FaLinkedin className="text-darkPrimary w-3 h-3  md:w-4 md:h-4" />
            </a>
            <a
              href="https://www.instagram.com/drey_liba/"
              target="_blank"
              className="p-2 md:p-3  bg-lightPrimary/50 rounded-full shadow-md"
            >
              <FaInstagram className="text-darkPrimary w-3 h-3  md:w-4 md:h-4" />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="" data-aos="fade-left">
          <div className="absolute inset-1 -bottom-1 -left-2 w-full h-[50vh] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
          <img
            src="/assets/andrianpontejo.PNG"
            alt="Profile"
            className="object-cover relative w-screen md:h-[70vh] absolute"
          />
        </div>
      </div>
    </section>
  );
}
