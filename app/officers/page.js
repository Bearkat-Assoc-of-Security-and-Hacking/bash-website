// app/officers/page.js

import OfficerCard from "../../globals/OfficerCard";

//OFFICER DATA STRUCTURE
const officers = [
  {
    name: "Giovanni Martinez",
    title: "President",
    details: "",
    socials: {
      email: "mailto:gam077@shsu.edu",
      linkedin: "https://www.linkedin.com/in/gio-mart/",
      github: "https://github.com/giomart1122",
    },
  },
  {
    name: "Bruce Mikel",
    title: "Vice President and Web Master",
    details: "",
    socials: {
      email: "mailto:mikelbruce230@gmail.com",
      linkedin: "https://www.linkedin.com/in/bruce-mikel-7b373721b/",
      github: "https://github.com/TipsyPhiber",
    },
  },
  {
    name: "Mason Murphy",
    title: "Competition Director",
    details: "",
    socials: {
      email: "mailto:mason.r.murphy@shsu.edu",
      linkedin: "https://www.linkedin.com/in/mason-ray-murphy/",
      github: "",
    },
  },
];

const advisor = [
  {
    name: "Kirk Burns",
    title: "Advisor",
    details: "Cybersecurity Graduate Professor",
    socials: {
      email: "mailto:LIB_KAB@SHSU.EDU",
      linkedin: "https://www.linkedin.com/in/kirk-burns-cissp-4a629115/",
    },
  },
];

const alumni = [
  {
    name: "Josh Robison",
    title: "Former President",
    details: "IT Director at RDI Mechanical",
    socials: {
      linkedin: "https://www.linkedin.com/in/josh-robison-b3aab9255/",
    },
  },
  {
    name: "Quentin Burns",
    title: "Past Education Director",
    details: "Jr. Network Associate @ OneSource Building Technologies",
    socials: {
      linkedin: "https://www.linkedin.com/in/burnsquentin/",
    },
  },
  {
    name: "Richard Olivarri",
    title: "Former CTF Director",
    details: "Incident Response - Senior Staff @ Crowe LLP",
    socials: {
      linkedin: "https://www.linkedin.com/in/richard-olivarri/",
      github: "https://anonode.github.io/",
    },
  },
  {
    name: "Daniel Perez",
    title: "Former Competition Director",
    details: "Working on a goverment black site",
    socials: {
      linkedin: "https://www.linkedin.com/in/daniel-p-b45369200/",
    },
  },
   {
    name: "Caleb Caballero",
    title: "Pentester and Web Administrator",
    details: "Working inside the matrix",
    socials: {
      linkedin: "https://www.linkedin.com/in/caleb-c-a6a0a7271/",
    },
  },
];

export default function OfficersPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
          <span className="border-b-4 border-red-500 pb-1">
            2025-2026 Officers
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officers.map((officer) => {
            const isPresident = officer.title === "President";

            if (isPresident) {
              // Centered the top card to remove empty space on larger screens
              return (
                <div
                  key={officer.title}
                  className="md:col-span-2 flex justify-center"
                >
                  <div className="w-full md:max-w-xl">
                    <OfficerCard officer={officer} />
                  </div>
                </div>
              );
            }

            return <OfficerCard key={officer.title} officer={officer} />;
          })}
        </div>
      </div>

      {/* Advisor Section */}
      <div className="mt-16">
        {" "}
        {/* mt-16 adds space between the two sections */}
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          <span className="border-b-4 border-red-500 pb-1">Advisor</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisor.map((person) => (
            <div
              key={person.name}
              className="md:col-span-2 flex justify-center"
            >
              <div className="w-full md:max-w-xl">
                <OfficerCard officer={person} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Section */}
      <div className="mt-16">
        {" "}
        {/* mt-16 adds space between the two sections */}
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          <span className="border-b-4 border-red-500 pb-1">Alumni</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alumni.map((alumni) => (
            <OfficerCard key={alumni.name} officer={alumni} />
          ))}
        </div>
      </div>
    </>
  );
}
