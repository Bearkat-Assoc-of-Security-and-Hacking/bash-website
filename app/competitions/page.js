// app/competitions/page.js
import FeaturedCompetitionCard from "./FeaturedCompetitionCard";
import CtfFeed from "./CtfFeed";

const beginnerCompetitions = [
  {
    name: "NCAE Cyber Games",
    description:
      "NCAE Cyber Games is a small network defense competition for college students who have never participated in a competition before. ",
    link: "https://ui.sandbox.ncaecybergames.org/",
    ctaText: "Master the Sandbox",
  },
  {
    name: "Hivestorm",
    description:
      "Hivestorm is a endpoint defense competition. Teams compete by securing provided Windows and Linux based virtual machines ",
    link: "https://www.hivestorm.org/",
    ctaText: "Storm the Hive",
  },
];

const advancedCompetitions = [
  {
    name: "CCDC",
    description: `Teams assume administrative and protective responsibilities for an existing
      network - typically a small company with 50+ users, 7 to 10 servers, and common Internet services `,
    link: "https://www.nationalccdc.org/",
    ctaText: "Mount the Defense",
  },
  {
    name: "CPTC",
    description: `The Collegiate Penetration Testing Competition focuses on mimicking the activities of a real-world pen test in 
      a virtual enterprise enviroment`,
    link: "https://cp.tc/",
    ctaText: "Breach the Defenses",
  },
];

async function getInitialCtfs() {
  const url = "https://ctftime.org/api/v1/events/?limit=15";
  const headers = { "User-Agent": "BASH-Club-Website/1.0 (Development)" };
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
  const initialCtfs = await getInitialCtfs();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Competitions</h1>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 font-mono">
          Beginner Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerCompetitions.map((comp) => (
            <FeaturedCompetitionCard key={comp.name} competition={comp} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold border-b-2 border-teal-400 pb-2 mb-6 font-mono">
          Advanced Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedCompetitions.map((comp) => (
            <FeaturedCompetitionCard key={comp.name} competition={comp} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2 mb-6 font-mono">
          Upcoming CTFs from CTFtime
        </h2>
        <CtfFeed initialCtfs={initialCtfs} />
      </div>
    </div>
  );
}
