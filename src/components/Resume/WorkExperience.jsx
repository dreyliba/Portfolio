import { FaBriefcase } from "react-icons/fa";

export default function WorkExperience() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Full-Stack Web Developer",
      company: "AndrianTech Solutions",
      description:
        "Developing and maintaining modern web applications with backend and frontend integration.",
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Worked on responsive UI designs and interactive user experiences using React.",
    },
    {
      year: "2019 - 2021",
      role: "Graphic Designer",
      company: "Pixel Studio",
      description:
        "Created marketing materials, logos, and branding assets for various clients.",
    },
  ];

  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8 text-darkSecondary dark:text-lightSecondary">
        Work Experience
      </h2>
      <div className="relative border-l-2 border-purple-500 ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 border-2 border-white dark:border-darkPrimary"></div>
            {/* Content */}
            <p className="text-sm text-gray-500">{exp.year}</p>
            <h3 className="text-xl font-semibold text-darkPrimary dark:text-lightPrimary flex items-center gap-2">
              <FaBriefcase className="text-purple-500" /> {exp.role}
            </h3>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {exp.company}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
