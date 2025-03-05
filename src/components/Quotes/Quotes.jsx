import { FaQuoteLeft } from "react-icons/fa";

const quotesData = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    image: "https://i.imgur.com/1bX5QH6.jpg",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    image: "https://i.imgur.com/kH9H0KM.jpg",
  },
];

export default function Quotes() {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-6">
        {quotesData.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-md shadow-md flex flex-col gap-4 text-darkPrimary dark:text-lightPrimary bg-lightSecondary dark:bg-darkPrimary/50 "
          >
            <FaQuoteLeft className="text-4xl text-purple-500" />
            <p className="text-md italic">"{item.quote}"</p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-lightAccent/80"
              />
              <span className="font-semibold">{item.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
