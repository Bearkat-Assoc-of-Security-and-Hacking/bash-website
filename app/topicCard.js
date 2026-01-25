// /app/topicCard.js
//
export default function TopicCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/40 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-2">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
