import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Runs animation only once
    threshold: 0.5, // Starts the animation when 50% visible
  });

  return (
    <div
      ref={ref}
      className="w-full px-6 py-5 bg-darkPrimary dark:bg-lightPrimary shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column */}
        <div className="flex flex-row gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 font-semibold justify-start text-start">
            <h2 className="text-3xl md:text-5xl font-bold text-lightAccent dark:text-darkSecondary">
              {inView && <CountUp start={0} end={3} duration={2} />}+
            </h2>
            <p className="text-sm md:text-xl text-lightAccent dark:text-darkSecondary font-normal">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-4 font-semibold justify-start text-start">
            <h2 className="text-3xl md:text-5xl font-bold text-lightAccent dark:text-darkSecondary">
              {inView && <CountUp start={0} end={10} duration={3} />}+
            </h2>
            <p className="text-sm md:text-xl text-lightAccent dark:text-darkSecondary font-normal">
              Projects <br />
              Completed
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-wrap justify-center gap-1 text-4xl text-darkAccent dark:text-lightAccent">
          {[
            "1.PNG",
            "2.PNG",
            "3.PNG",
            "4.png",
            "5.PNG",
            "6.PNG",
            "7.PNG",
            "8.PNG",
          ].map((img, idx) => (
            <img
              key={idx}
              src={`/assets/andriantech/${img}`}
              alt="Tech Logo"
              className="w-10 h-auto md:w-20 md:h-auto"
              data-aos="zoom-in"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
