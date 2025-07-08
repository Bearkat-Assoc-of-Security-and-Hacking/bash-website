import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const FeaturedCompetitionCard = ({ competition }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full border border-gray-700 hover:border-teal-500 transition-colors">
      <h3 className="text-xl font-bold text-teal-300">{competition.name}</h3>
      <p className="text-gray-300 mt-2 flex-grow">{competition.description}</p>
      <Link
        href={competition.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center hover:bg-teal-600 transition-all group inline-flex items-center justify-center"
      >
        {competition.ctaText || "View Details"}
        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default FeaturedCompetitionCard;
