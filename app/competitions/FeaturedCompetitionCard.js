// components/FeaturedCompetitionCard.js
import Link from "next/link";

const FeaturedCompetitionCard = ({ competition }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
      <h3 className="text-xl font-bold text-teal-300">{competition.name}</h3>
      <p className="text-gray-300 mt-2 flex-grow">{competition.description}</p>
      <Link
        href={competition.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center hover:bg-teal-600 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default FeaturedCompetitionCard;
