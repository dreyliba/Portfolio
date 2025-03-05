import { FaBriefcase } from "react-icons/fa";

export default function WorkExperience() {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Software Engineer",
      company: "Accenture",
      description:
        "Design, develop, test, and maintain software for a variety of devices and systems",
    },
    {
      year: "2022 - 2024",
      role: "Full-Stack Web Developer",
      company: "CreativeDevLabs",
      description:
        "Developing and maintaining modern web applications with backend and frontend integration.",
    },
    {
      year: "2019 - 2021",
      role: "IT Chat Support",
      company: "MLG",
      description:
        "Addressing students' queries related to both the Learning Management System (LMS) and the Portal.",
    },
  ];

  return (
    <section className="">
      <h2 className="mb-8 text-2xl font-bold text-darkSecondary dark:text-lightSecondary">
        Work Experience
      </h2>
      <div className="relative ml-6 border-l-2 border-purple-500">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-purple-500 border-2 border-white rounded-full -left-2 dark:border-darkPrimary"></div>
            {/* Content */}
            <p className="text-sm text-gray-500">{exp.year}</p>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-darkPrimary dark:text-lightPrimary">
              <FaBriefcase className="text-purple-500" /> {exp.role}
            </h3>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {exp.company}
            </h4>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
