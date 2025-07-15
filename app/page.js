import Link from "next/link";
import Image from "next/image";
import {
  FiCalendar,
  FiTerminal,
  FiMapPin,
  FiUsers,
  FiShield,
  FiServer,
  FiTarget,
  FiMic,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { getNextMeeting } from "../lib/googleCalendar";

export default async function HomePage() {
  const nextMeeting = await getNextMeeting();

  // Array of topics for the "Topics We Cover" section.
  // This makes it easy to add or update topics in the future.
  const topics = [
    {
      icon: <FiShield size={32} className="text-blue-400 mb-4" />,
      title: "Ethical Hacking",
      description:
        "Learn the tools and techniques used to test and secure systems, all within a responsible and ethical framework.",
    },
    {
      icon: <FiTerminal size={32} className="text-blue-400 mb-4" />,
      title: "Pentesting & Scripting",
      description:
        "Prepare for cybersecurity competitions by writing scripts to automate tasks like identifying and exploiting vulnerabilities in target systems.",
    },
    {
      icon: <FiServer size={32} className="text-blue-400 mb-4" />,
      title: "Network Security",
      description:
        "Explore the fundamentals of securing networks, from firewalls to intrusion detection systems.",
    },
    {
      icon: <FiTarget size={32} className="text-blue-400 mb-4" />,
      title: "Capture The Flag",
      description:
        "Engage in fun and challenging CTF competitions to test your hacking skills in a safe, legal environment.",
    },
  ];

  return (
    <div>
      <section className="text-center pt-0 pb-0">
        <div className="flex justify-center mb-8">
          <Image
            src="/bearkatpaw-nobg.png"
            alt="Bearkat Paw Logo"
            width={300}
            height={300}
            className="animation-float"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-4">
          Explore. Learn. Secure.
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          The Bearkat Association of Security and Hacking (BASH) at Sam Houston
          State University empowers aspiring cybersecurity professionals and
          enthusiasts to go beyond academia. We offer a hands-on, collaborative
          environment for students of all skill levels to collaborate on
          projects, ethical hacking, and competitive challenges.
        </p>
        <Link
          href="/schedule"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 inline-block"
        >
          View Full Schedule
        </Link>
      </section>

      {/* --- Next Meeting Section --- */}
      <section className="py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Next Meeting</h2>
          {nextMeeting ? (
            <div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-4 text-lg text-gray-300">
                <span className="flex items-center">
                  <FiCalendar className="mr-2 text-blue-400" />{" "}
                  {nextMeeting.start}
                </span>
                {nextMeeting.location && (
                  <span className="flex items-center">
                    <FiMapPin className="mr-2 text-blue-400" />{" "}
                    {nextMeeting.location}
                  </span>
                )}
              </div>
              <p className="mt-4 text-xl">Topic: {nextMeeting.summary}</p>
            </div>
          ) : (
            <p className="text-gray-400 text-lg">
              No upcoming meetings scheduled at the moment. Please check the
              full calendar!
            </p>
          )}
        </div>
      </section>

      {/* --- Topics We Cover Section --- */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Topics We Cover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-800/40 p-6 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-2"
            >
              {topic.icon}
              <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
              <p className="text-gray-400">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Get Involved Section --- */}
      <section className="pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1: Join Discord */}
          <div className="bg-gray-800/40 p-6 rounded-lg text-center border border-gray-700 flex flex-col items-center">
            <FaDiscord size={32} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Join Our Discord</h3>
            <p className="text-gray-400 mb-4 flex-grow">
              Connect with members, ask questions, and stay up-to-date with the
              latest announcements.
            </p>
            <Link
              href="https://discord.gg/ZwfEaB7e"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Card 2: Attend a Meeting */}
          <div className="bg-gray-800/40 p-6 rounded-lg text-center border border-gray-700 flex flex-col items-center">
            <FiUsers size={32} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Attend a Meeting</h3>
            <p className="text-gray-400 mb-4 flex-grow">
              We welcome everyone, regardless of skill level. Come learn with us
              in a friendly environment.
            </p>
            <Link
              href="/schedule"
              className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Schedule
            </Link>
          </div>

          {/* Card 3: Speak at BASH */}
          <div className="bg-gray-800/40 p-6 rounded-lg text-center border border-gray-700 flex flex-col items-center">
            <FiMic size={32} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Speak at BASH</h3>
            <p className="text-gray-400 mb-4 flex-grow">
              Have an idea for a talk or workshop? We are always looking for
              professionals to share their knowledge.
            </p>
            <Link
              href="/sponsors#speak"
              className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Propose a Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
