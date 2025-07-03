// components/CtfCard.js
import Link from "next/link";

const CtfCard = ({ ctf }) => {
  // Helper function to format date and time
  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col h-full">
      <h3 className="text-xl font-bold text-blue-300 flex-grow">{ctf.title}</h3>
      <p className="text-gray-300 mt-2">
        <strong>Starts:</strong> {formatDateTime(ctf.start)}
      </p>
      <p className="text-gray-300">
        <strong>Ends:</strong> {formatDateTime(ctf.finish)}
      </p>
      <p className="text-gray-300 mt-2">
        <strong>Duration:</strong> {ctf.duration.days} days,{" "}
        {ctf.duration.hours} hours
      </p>
      <Link
        href={ctf.ctftime_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 text-center hover:bg-blue-600 transition-colors"
      >
        View on CTFtime
      </Link>
    </div>
  );
};

export default CtfCard;
