"use client";

import { FiUsers, FiMic } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export default function GetInvolved() {
  // The actions array has been removed.
  // The component now returns static JSX directly.

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Card 1: Join Our Discord */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FaDiscord size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            Join Our Discord
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">
            Connect with members, ask questions, and stay up-to-date.
          </p>
          <a
            href="https://discord.gg/ZwfEaB7e"
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Card 2: Attend a Meeting */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FiUsers size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            Attend a Meeting
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">
            We welcome everyone, regardless of skill level. Come learn with us.
          </p>
          <a
            href="/schedule"
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Schedule
          </a>
        </div>

        {/* Card 3: Speak at BASH */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col">
          <div className="mx-auto">
            <FiMic size={32} className="text-blue-400 mb-4" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Speak at BASH</h3>
          <p className="text-gray-300 mb-4 flex-grow">
            Have an idea for a talk or workshop? Share your knowledge with the
            club.
          </p>
          <a
            href="/sponsors#speak"
            className="mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Propose a Talk
          </a>
        </div>
      </div>
    </section>
  );
}
