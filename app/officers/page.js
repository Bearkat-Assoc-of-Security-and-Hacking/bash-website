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
  {
    name: "Ayden Sowers",
    title: "Education Director and Treasurer",
    details: "",
    socials: {
      email: "mailto:aqs002@SHSU.EDU",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Chase Cooper",
    title: "Secretary",
    details: "",
    socials: {
      email: "mailto:cmc233@SHSU.EDU",
      linkedin: "https://www.linkedin.com/in/chase-cooper-9491b7308/",
      github: "",
    },
  },
];

const advisor = [
  {
    name: "Kirk Burns",
    title: "Off-campus Advisor",
    details: "CISO at Texas Higher Ed Board",
    socials: {
      email: "mailto:LIB_KAB@SHSU.EDU",
      linkedin: "https://www.linkedin.com/in/kirk-burns-cissp-4a629115/",
    },
  },
  {
    name: "Dustin Thornton",
    title: "On-campus Advisor",
    details: "SOC Manager ",
    socials: {
      email: "mailto:dustin.thornton@shsu.edu",
      linkedin: "https://www.linkedin.com/in/dustin-c-thornton/",
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
    details: "SHSU SOC Alumni and aspiring Network Engineer",
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
    name: "James Robbins",
    title: "SHSU Comp-sci Graduate",
    details: "Software Engineer at LDARTools",
    socials: {
      linkedin: "https://www.linkedin.com/in/james-robbins-44b731219/",
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
          <span className="border-b-4 border-red-500 pb-1">Advisors</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisor.map((person) => (
            <OfficerCard key={person.name} officer={person} />
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
