// app/resources/page.js
const resourceCategories = [
  {
    category: "Practice Platforms",
    items: [
      {
        name: "Hack The Box",
        description:
          "An advanced online platform to test and advance your skills in penetration testing and cybersecurity.",
        link: "https://www.hackthebox.com/",
      },
      {
        name: "TryHackMe",
        description:
          "A beginner learning platform that makes learning cybersecurity fun and interactive.",
        link: "https://tryhackme.com/",
      },
      {
        name: "PWN College",
        description:
          "An excellent platform for students to learn all around computer and cyber skills",
        link: "https://pwn.college/",
      },
      {
        name: "VulnHub",
        description:
          "Provides downloadable vulnerable virtual machines to practice pen testing",
        link: "https://www.vulnhub.com/",
      },
    ],
  },
  {
    category: "Cybersecurity News",
    items: [
      {
        name: "The Hacker News",
        description:
          "A leading source for the latest cybersecurity and technology news.",
        link: "https://thehackernews.com/",
      },
      {
        name: "Bleeping Computer",
        description:
          "A premier destination for technology news and support, especially on security topics.",
        link: "https://www.bleepingcomputer.com/",
      },

      {
        name: "Google Project Zero Blog",
        description:
          "Deep technical analysis of zero-day vulnerabilities from Google's elite security research team.",
        link: "https://googleprojectzero.blogspot.com/",
      },

      {
        name: "Zero Day Initiative Blog",
        description:
          "In-depth vulnerability analysis and exploit breakdowns from one of the leading bug bounty programs.",
        link: "https://www.zerodayinitiative.com/blog",
      },
      {
        name: "TrendMirco",
        description:
          "Covers current APT threats & Targeted Attacks, ransomware, and exploits and vulnerabilities",
        link: "https://www.trendmicro.com/en_us/research.html",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Cyber Resources</h1>

      {resourceCategories.map((group) => (
        <div key={group.category} className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-400 pb-2 mb-4">
            {group.category}
          </h2>
          <ul className="space-y-4">
            {group.items.map((resource) => (
              <li key={resource.name} className="bg-gray-800 p-4 rounded-md">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-300 hover:underline"
                >
                  {resource.name}
                </a>
                <p className="text-gray-300 mt-1">{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
