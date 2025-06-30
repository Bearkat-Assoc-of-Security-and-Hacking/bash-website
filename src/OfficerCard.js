// src/OfficerCard.js
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const OfficerCard = ({ officer }) => {
  const { name, title, details, socials } = officer;

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
      {/* Officer Info */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500 mt-1">{title}</p>
        <p className="text-gray-500 text-sm">{details}</p>
      </div>

      {/* Social Icons */}
      <div className="mt-4 flex items-center space-x-3">
        {socials.email && (
          <a
            href={socials.email}
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <MdEmail size={24} />
          </a>
        )}
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default OfficerCard;
