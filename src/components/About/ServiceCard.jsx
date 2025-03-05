import { FaCode, FaGamepad, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const iconMap = {
  "Web Development": <FaCode className="w-8 h-8 text-purple-500" />,
  "Game Development": <FaGamepad className="w-8 h-8 text-green-500" />,
  Advertising: <FaBullhorn className="w-8 h-8 text-yellow-500" />,
  "Graphic Design": <FaPaintBrush className="w-8 h-8 text-blue-500" />,
};

export default function ServiceCard({ title, subtitle }) {
  return (
    <div className="p-6 bg-lightSecondary dark:bg-darkPrimary/50  rounded-lg shadow-lg flex items-start gap-4">
      <div>{iconMap[title]}</div>
      <div>
        <h4 className="font-semibold text-lg text-darkPrimary dark:text-lightPrimary">
          {title}
        </h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
