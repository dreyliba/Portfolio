import { IoSchoolSharp } from "react-icons/io5";
export default function Education() {
  const experiences = [
    {
      year: "2018 - 2022",
      role: "Bachelor",
      company: "MLG College of Learning, Inc.",
      description: "Bachelor of Science in Information Technology",
    },
    {
      year: "2016 - 2018",
      role: "Secondary",
      company: "Balocawehay National High School",
      description: "General Academic Strand",
    },
    // {
    //   year: "2019 - 2021",
    //   role: "Katipunan Primary School",
    //   company: "Handsome Corps. Inc.",
    //   description: "",
    // },
  ];

  return (
    <section className="">
      <h2 className="mb-8 text-2xl font-bold text-darkSecondary dark:text-lightSecondary text-end md:text-start">
        Education
      </h2>
      <div className="relative mr-6 border-purple-500 bor6der-r-2 md:border-r-0 md:border-l-2 md:ml-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 mr-6 md:mr-0 md:ml-6">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-purple-500 border-2 border-white rounded-full -right-2 md:-left-2 dark:border-darkPrimary"></div>
            {/* Content */}
            <p className="text-sm text-gray-500 text-end md:text-start">
              {exp.year}
            </p>
            <h3 className="flex items-center justify-end gap-2 text-xl font-semibold text-darkPrimary dark:text-lightPrimary md:justify-start ">
              <span className="order-2 md:order-1">
                <IoSchoolSharp className="text-purple-500 " />
              </span>
              <span className="order-1 md:order-2"> {exp.role}</span>
            </h3>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 text-end md:text-start">
              {exp.company}
            </h4>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-end md:text-start">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
