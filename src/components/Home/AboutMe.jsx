import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import MyProjects from "./MyProjects";

export default function AboutMe() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col  px-4 md:px-20 py-10 md:py-20 gap-6 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 -z-10 bg-lightSecondary dark:bg-darkSecondary"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div
          className="text-center p-4 md:p-0 md:text-left  space-y-3 md:space-y-6 md:mt-10"
          data-aos="fade-right"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-darkPrimary dark:text-lightPrimary text-start">
            About Me
          </h1>

          <p className="text-darkPrimary dark:text-lightSecondary text-sm md:text-2xl max-w-4xl text-justify leading-relaxed">
            Hi, I'm Andrian Pontejo, a passionate web developer specializing in
            custom WordPress development and full-stack applications. My journey
            into web development started with a fascination for how websites
            work and an unwavering love for technology. Growing up in the
            Philippines, I dedicated myself to learning HTML, CSS, and PHP. Over
            time, I expanded my skills and mastered Laravel and WordPress,
            allowing me to build custom WordPress themes and develop full-stack
            web applications.
          </p>
        </div>
      </div>

      <div
        className="max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center "
        data-aos="fade-left"
      >
        <div className=" p-4 md:p-0 md:text-left  space-y-3 md:space-y-6 md:mt-10 hidden md:block"></div>

        <div className=" p-4 md:p-0 md:texta-left  space-y-3 md:space-y-6 md:mt-10">
          {" "}
          <h1 className="text-2xl md:text-5xl font-bold text-darkPrimary dark:text-lightPrimary text-start">
            My Skills
          </h1>
          <p className="text-darkPrimary dark:text-lightSecondary text-sm md:text-2xl max-w-4xl text-justify leading-relaxed">
            A collection of tools, languages, and frameworks I use to build
            fast, responsive, and scalable web applications.{" "}
          </p>
          <div className="grid grid-cols-8 md:grid-cols-4 justify-center gap-1 text-4xl text-darkAccent dark:text-lightAccent">
            <img
              src="/assets/andriantech/1.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />
            <img
              src="/assets/andriantech/2.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/3.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/4.png"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/5.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/6.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/7.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
            <img
              src="/assets/andriantech/8.PNG"
              alt="Profile"
              className=" w-10 h-auto md:w-20 md:-auto"
            />{" "}
          </div>
        </div>
      </div>

      <MyProjects />
    </section>
  );
}
