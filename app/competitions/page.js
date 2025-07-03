// app/competitions/page.js
export default function CompetitionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">CTF Competitions</h1>
      <p className="text-lg text-center mb-8">
        Here are some upcoming Capture The Flag events.
      </p>

      {/* We will integrate the CTFtime API here in a future step */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <p className="text-gray-400">
          Upcoming events will be displayed here soon!
        </p>
      </div>
    </div>
  );
}
