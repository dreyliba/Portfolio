import { FaGithub, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { blogData } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function ProjectCard() {
  const [showAll, setShowAll] = useState(false);

  // Show either first 4 or all depending on toggle
  const visibleBlogs = showAll ? blogData : blogData.slice(0, 4);

  return (
    <div className="w-full py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="w-full bg-lightPrimary/70 dark:bg-darkPrimary/90 border border-gray-200 rounded-lg shadow-md dark:bg-darkSecondary dark:border-darkPrimary  transition-all duration-300 ease-in-out hover:shadow-lg"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={blog.image}
              alt={blog.title}
            />

            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-darkPrimary dark:text-white">
                {blog.title}
              </h5>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
              <div className="group inline-block text-center w-full sm:w-full md:w-[70%]">
                <Link to="https://www.facebook.com" target="_blank">
                  <button
                    type="button"
                    className="flex items-center justify-center md:justify-start gap-2 text-lightPrimary dark:text-darkPrimary bg-darkAccent dark:bg-lightAccent hover:bg-darkSecondary dark:hover:bg-lightPrimary focus:ring-2 focus:outline-none focus:ring-darkSecondary font-semibold rounded-lg text-md px-5 py-2.5 text-center 
                    transition-all duration-300 ease-in-out transform hover:scale-105 text-center w-full"
                  >
                    <FaGithub className="text-xl group-hover:animate-jello" />
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* See More / See Less button */}
      <div className="flex justify-center mt-10 ">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-darkPrimary dark:text-white bg-gray-200 border-2 border-darkPrimary dark:border-lightPrimary dark:bg-darkPrimary hover:bg-gray-300 dark:hover:bg-darkSecondary focus:ring-2 focus:outline-none focus:ring-darkSecondary font-semibold rounded-lg text-md px-6 py-3 text-center 
          transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {showAll ? (
            <>
              Show Less <FaArrowUp className="text-lg" />
            </>
          ) : (
            <>
              See More <FaArrowDown className="text-lg" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
