// app/competitions/page.js
import CtfCard from "./CtfCard";
import FeaturedCompetitionCard from "./FeaturedCompetitionCard"; // Import the new component

// --- Data for your club's featured competitions ---
const beginnerCompetitions = [
  {
    name: "NCAE Cyber Games",
    description:
      "A series of fun and challenging cybersecurity games for students at NCAE-C designated institutions.",
    link: "https://www.caecommunity.org/initiatives/cae-cyber-games",
  },
  {
    name: "Hivestorm",
    description:
      "A collegiate-level competition designed to provide students with real-world defensive cybersecurity skills.",
    link: "https://www.hivestorm.org/",
  },
];

const advancedCompetitions = [
  {
    name: "CCDC",
    description:
      "The National Collegiate Cyber Defense Competition is a premier event focused on the operational aspect of managing and protecting a network.",
    link: "https://www.nationalccdc.org/",
  },
  {
    name: "CPTC",
    description:
      "The Collegiate Penetration Testing Competition focuses on mimicking the activities of a real-world penetration test.",
    link: "https://collegiatepentesting.org/",
  },
];

// This async function fetches the data from the CTFtime API
async function getCtfs() {
  const url = "https://ctftime.org/api/v1/events/?limit=15";
  const headers = {
    "User-Agent": "BASH-Website-Project/1.0 (https://your-website-url.com)",
  };
  try {
    const res = await fetch(url, {
      headers: headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error("Failed to fetch CTF data:", res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching CTFs:", error);
    return [];
  }
}

export default async function CompetitionsPage() {
  const ctfs = await getCtfs();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Competitions</h1>

      {/* --- NEW Club Competitions Section --- */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold border-b-2 border-teal-400 pb-2 mb-6">
          Beginner Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerCompetitions.map((comp) => (
            <FeaturedCompetitionCard key={comp.name} competition={comp} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold border-b-2 border-teal-400 pb-2 mb-6">
          Advanced Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedCompetitions.map((comp) => (
            <FeaturedCompetitionCard key={comp.name} competition={comp} />
          ))}
        </div>
      </div>

      {/* --- Live CTFtime Feed Section --- */}
      <div>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2 mb-6">
          Upcoming Events from CTFtime
        </h2>
        {ctfs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctfs.map((ctf) => (
              <CtfCard key={ctf.id} ctf={ctf} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-gray-400">
              Could not load CTF events at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
