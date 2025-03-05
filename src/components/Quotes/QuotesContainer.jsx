import ProfileInfo from "../Resume/ProfileInfo";
import { motion } from "framer-motion";
import Quotes from "./Quotes";

export default function QuotesContainer() {
  return (
    <section className="w-full py-10 px-6  pt-32 bg-lightSecondary dark:bg-darkSecondary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <ProfileInfo />
        {/* Right Column */}
        <div className="w-full md:w-[60%] space-y-10" data-aos="fade-left">
          {/* About Me */}
          <div>
            <h2 className="text-2xl font-semibold text-darkAccent dark:text-lightAccent">
              My Favorite Quotes
            </h2>
            <motion.hr
              className="block h-[4px] border-0 my-4 bg-gradient-dark"
              initial={{ width: 0 }}
              animate={{ width: "70px" }}
              transition={{ duration: 0.5 }}
            />{" "}
            <Quotes />
          </div>
        </div>
      </div>
    </section>
  );
}
