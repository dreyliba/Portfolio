import ProfileInfo from "../Resume/ProfileInfo";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function AboutContainer({ title, subtitle }) {
  return (
    <section className="w-full py-10 px-6  pt-32 bg-lightSecondary dark:bg-darkSecondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <ProfileInfo />
        {/* Right Column */}
        <div className="w-full md:w-[60%] space-y-10" data-aos="fade-left">
          {/* About Me */}
          <div>
            <h2 className="text-2xl font-semibold text-darkAccent dark:text-lightAccent">
              About Me
            </h2>
            <motion.hr
              className="block h-[4px] border-0 my-4 bg-gradient-dark"
              initial={{ width: 0 }}
              animate={{ width: "70px" }}
              transition={{ duration: 0.5 }}
            />

            <div className="flex flex-col md:flex-row w-full md:space-x-10">
              {" "}
              <p className="text-md text-darkPrimary dark:text-lightPrimary w-full text-justify">
                I am a passionate and dedicated Full-Stack Web Developer with a
                strong focus on creating responsive, user-friendly websites and
                applications. With experience in both frontend and backend
                technologies, I specialize in building seamless digital
                experiences using modern frameworks. I am always eager to learn,
                grow, and take on new challenges while delivering high-quality
                solutions that meet the needs of clients and users alike.
              </p>
              <div className="text-sm text-darkPrimary text-justify dark:text-lightPrimary w-full flex justify-between mt-8 md:mt-0">
                <div className="space-y-3">
                  <p className="bg-darkAccent px-4 py-1 rounded-sm text-lightAccent">
                    Age:
                  </p>
                  <p className="bg-darkAccent px-4 py-1 rounded-sm text-lightAccent">
                    Address:
                  </p>
                  <p className="bg-darkAccent px-4 py-1 rounded-sm text-lightAccent">
                    Freelance:
                  </p>
                  <p className="bg-darkAccent px-4 py-1 rounded-sm text-lightAccent">
                    Residence:
                  </p>
                  <p className="bg-darkAccent px-4 py-1 rounded-sm text-lightAccent">
                    Birthday:
                  </p>
                </div>
                <div className="space-y-3">
                  <p className=" px-4 py-1 rounded-sm">26</p>
                  <p className=" px-4 py-1 rounded-sm">Leyte, Philippines</p>
                  <p className=" px-4 py-1 rounded-sm">Available</p>
                  <p className=" px-4 py-1 rounded-sm">PH</p>
                  <p className=" px-4 py-1 rounded-sm">February 2, 1999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-darkAccent dark:text-lightAccent">
              My Services
            </h2>
            <motion.hr
              className="block h-[4px] border-0 my-4 bg-gradient-dark"
              initial={{ width: 0 }}
              animate={{ width: "70px" }}
              transition={{ duration: 0.5 }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServiceCard
                title="Web Development"
                subtitle="Building modern websites"
              />
              <ServiceCard
                title="Game Development"
                subtitle="Creating interactive games"
              />
              <ServiceCard
                title="Advertising"
                subtitle="Marketing your business"
              />
              <ServiceCard
                title="Graphic Design"
                subtitle="Creative visual designs"
              />
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-darkPrimary dark:text-lightPrimary">
            Passionate Full-Stack Developer with a love for creating efficient,
            modern, and user-friendly applications. Let's build something great
            together!
          </p>
        </div>
      </div>
    </section>
  );
}

// // Service Card Component
// function ServiceCard({ title, subtitle }) {
//   return (
//     <div className="p-4 bg-lightSecondary dark:bg-darkSecondary rounded-lg shadow">
//       <h4 className="font-semibold">{title}</h4>
//       <p className="text-sm text-gray-500">{subtitle}</p>
//     </div>
//   );
// }
