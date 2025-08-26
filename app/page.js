// /app/page.js

import Link from "next/link";
import Image from "next/image";
import {
  FiCalendar,
  FiTerminal,
  FiMapPin,
  FiShield,
  FiServer,
  FiTarget,
} from "react-icons/fi";
import { getNextMeeting } from "../lib/googleCalendar";

// Import your components
import TopicCard from "./topicCard";
import GetInvolved from "./getInvolved";

export default async function HomePage() {
  const nextMeeting = await getNextMeeting();

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
      {/* --- Hero Section --- */}
      <section className="text-center pt-0 pb-0">
        <div className="flex justify-center mb-8">
          <Image
            src="/bash-logo-nobg.png"
            alt="Bash Shield"
            width={300}
            height={300}
            className="animation-float"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-4">
          Explore. Learn. Secure.
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl xl:max-w-4xl mx-auto">
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
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 max-w-4xl xl:max-w-5xl 3xl:max-w-6xl mx-auto text-center">
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
          {topics.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </section>

      {/* --- Get Involved Section --- */}
      <GetInvolved />
    </div>
  );
}
