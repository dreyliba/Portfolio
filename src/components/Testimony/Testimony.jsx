import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonies = [
  {
    id: 1,
    feedback:
      "This developer exceeded our expectations! High-quality work and great communication.",
    author: "John Doe",
    company: "Tech Innovations Inc.",
    stars: 5,
  },
  {
    id: 2,
    feedback:
      "This developer exceeded our expectations! High-quality work and great communication.",
    author: "Jane Smith",
    company: "Creative Minds Studio",
    stars: 4.5,
  },
  {
    id: 3,
    feedback:
      "This developer exceeded our expectations! High-quality work and great communication.",
    author: "Michael Johnson",
    company: "Startup Pro",
    stars: 5,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Testimony() {
  return (
    <section className="w-full py-12 px-0 overflow-hidden ">
      <Slider {...settings}>
        {testimonies.map((item) => (
          <div
            key={item.id}
            className=" p-1 sm:p-2 md:p-3 rounded-lg  text-center max-w-4xl mx-auto overflow-hidden"
          >
            {" "}
            <div className="bg-lightSecondary dark:bg-darkPrimary/50 shadow-lg rounded-md p-4">
              {" "}
              <p className="text-md italic text-gray-600 dark:text-gray-300 mb-4">
                "{item.feedback}"
              </p>
              <div className="flex justify-center gap-1 mb-4 text-yellow-500">
                {Array.from({ length: Math.floor(item.stars) }, (_, i) => (
                  <FaStar key={i} />
                ))}
                {item.stars % 1 !== 0 && <FaStarHalfAlt />}
              </div>
              <h4 className="text-xl font-semibold text-darkPrimary dark:text-lightPrimary">
                {item.author}
              </h4>
              <p className="text-sm text-gray-500">{item.company}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
