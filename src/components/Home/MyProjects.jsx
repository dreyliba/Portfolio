import ProjectCard from "./ProjectCard";

export default function MyProjects() {
  return (
    <section
      className="relative w-full flex flex-col  px-4 md:px-0 py-10 md:py-20 gap-6 overflow-hidden max-w-7xl  mx-auto"
      data-aos="zoom-in-right"
    >
      <div className="text-center md:text-left  space-y-3 md:space-y-6 md:mt-10">
        <h1 className="text-2xl md:text-5xl font-bold text-darkPrimary dark:text-lightPrimary text-start">
          My Projects
        </h1>

        <p className="text-darkPrimary dark:text-lightSecondary text-sm md:text-2xl  text-justify leading-relaxed">
          Take a look at some of my recent work where I applied creative
          solutions and technical skills to solve real-world problems.
        </p>
        <ProjectCard />
      </div>
    </section>
  );
}
