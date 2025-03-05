import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "English", percentage: 75 },
  { name: "Tagalog", percentage: 85 },
  { name: "Bisaya", percentage: 95 },
];

export default function Language() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress.map((value, index) =>
            value < skills[index].percentage ? value + 1 : value
          )
        );
      }, 20); // speed of the animation
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-8 text-darkSecondary dark:text-lightSecondary">
        Language
      </h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-md text-darkPrimary dark:text-lightPrimary">
              {skill.name}
            </span>
            <span className="text-md text-darkPrimary dark:text-lightPrimary">
              {progress[index]}%
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-400/50">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-darkSecondary to-purple-500 transition-all duration-500 ease-in-out"
              style={{ width: `${progress[index]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
