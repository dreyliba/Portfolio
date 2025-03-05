import { IoSchoolSharp } from "react-icons/io5";
export default function Education() {
  const experiences = [
    {
      year: "2023 - Present",
      role: "MLG College of Learning, Inc.",
      company: "Bachelor of Science in Information Technology",
      description:
        "Developing and maintaining modern web applications with backend and frontend integration.",
    },
    {
      year: "2021 - 2023",
      role: "Hilongos High School",
      company: "Personal Computer & Hardware Servicing",
      description:
        "Worked on responsive UI designs and interactive user experiences using React.",
    },
    {
      year: "2019 - 2021",
      role: "San Isidro Primary School",
      company: "Handsome Corps. Inc.",
      description:
        "Created marketing materials, logos, and branding assets for various clients.",
    },
  ];

  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-8 text-darkSecondary dark:text-lightSecondary text-end md:text-start">
        Education
      </h2>
      <div className="relative border-r-2 md:border-r-0 md:border-l-2 border-purple-500 mr-6 md:ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 mr-6 md:mr-0 md:ml-6">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -right-2 md:-left-2 border-2 border-white dark:border-darkPrimary"></div>
            {/* Content */}
            <p className="text-sm text-gray-500 text-end md:text-start">
              {exp.year}
            </p>
            <h3 className="text-xl font-semibold text-darkPrimary dark:text-lightPrimary flex items-center justify-end md:justify-start gap-2 ">
              <span className="order-2 md:order-1">
                <IoSchoolSharp className="text-purple-500 " />
              </span>
              <span className="order-1 md:order-2"> {exp.role}</span>
            </h3>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 text-end md:text-start">
              {exp.company}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-end md:text-start">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
