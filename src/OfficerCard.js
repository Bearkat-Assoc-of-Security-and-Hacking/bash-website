// components/OfficerCard.js
const OfficerCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
      <img
        src={imageUrl}
        alt={`Photo of ${name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-blue-300">{title}</p>
    </div>
  );
};
export default OfficerCard;
