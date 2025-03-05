import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-lightBg dark:bg-darkBg px-4">
      <h1 className="text-6xl font-bold text-darkPrimary dark:text-darkSecondary mb-4">
        404
      </h1>
      <p className="text-lg text-darkSecondary dark:text-darkPrimary mb-8 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="inline-flex items-center px-5 py-3 bg-darkAccent hover:bg-darkSecondary text-white text-sm font-medium rounded-lg shadow-md"
      >
        <FaArrowLeft className="mr-2" />
        Go Back Home
      </Link>
    </div>
  );
}
