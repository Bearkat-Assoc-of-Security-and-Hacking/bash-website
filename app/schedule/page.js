export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Meeting Schedule</h1>
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=bashcyberclub%40gmail.com&ctz=America%2FChicago"
          style={{ borderWidth: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
