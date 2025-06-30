import OfficerCard from "../../src/OfficerCard";

// In a real app, you might fetch this from a database, but for now, we'll hardcode it.
const officers = [
  {
    name: "Alice Johnson",
    title: "President",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Williams",
    title: "Vice President",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Charlie Brown",
    title: "Treasurer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Diana Miller",
    title: "Secretary",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function OfficersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Our Officers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {officers.map((officer) => (
          <OfficerCard
            key={officer.name}
            name={officer.name}
            title={officer.title}
            imageUrl={officer.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
