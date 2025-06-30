// app/officers/page.js

import OfficerCard from "../../src/OfficerCard";

// UPDATE THIS DATA STRUCTURE
const officers = [
  {
    name: "Giovanni Martinez",
    title: "President",
    details: "Spring 2026", // Major and Year
    socials: {
      email: "mailto:gio.a.martinez03@gmail.com",
      linkedin: "https://www.linkedin.com/in/gio-mart/",
      github: "https://github.com/giomart1122",
    },
  },
  {
    name: "Bruce Mikel",
    title: "Vice President",
    details: "Spring 2026",
    socials: {
      email: "mailto:mikelbruce230@gmail.com",
      linkedin: "https://www.linkedin.com/in/bruce-mikel-7b373721b/",
      github: "https://github.com/TipsyPhiber",
    },
  },
  {
    name: "Chase Cooper",
    title: "Secretary",
    details: "",
    socials: {
      email: "mailto:cmc233@SHSU.EDU",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Mason Murphy",
    title: "Competition Director",
    details: "",
    socials: {
      email: "mailto:mason.r.murphy@shsu.edu",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Ayden Sowers",
    title: "Education Director",
    details: "",
    socials: {
      email: "mailto:aqs002@SHSU.EDU",
      linkedin: "",
      github: "",
    },
  },
];

export default function OfficersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
        <span className="border-b-4 border-red-500 pb-1">Officers</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {officers.map((officer) => (
          <OfficerCard key={officer.name} officer={officer} />
        ))}
      </div>
    </div>
  );
}
