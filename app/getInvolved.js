// /app/getInvolved.js
"use client";

import { useState } from "react";
import { FiUsers, FiMic } from "react-icons/fi";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import ActionCard from "./actionCard"; // Corrected path
import Modal from "./modal"; // Corrected path
import EmailSignIn from "./emailSignIn"; // Corrected path

export default function GetInvolved() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const actions = [
    {
      icon: <FaDiscord size={32} className="text-blue-400 mb-4" />,
      title: "Join Our Discord",
      description: "Connect with members, ask questions, and stay up-to-date.",
      href: "https://discord.gg/ZwfEaB7e",
      buttonText: "Join Now",
    },
    {
      icon: <FiUsers size={32} className="text-blue-400 mb-4" />,
      title: "Attend a Meeting",
      description:
        "We welcome everyone, regardless of skill level. Come learn with us.",
      href: "/schedule",
      buttonText: "View Schedule",
    },
    {
      icon: <FiMic size={32} className="text-blue-400 mb-4" />,
      title: "Speak at BASH",
      description:
        "Have an idea for a talk or workshop? Share your knowledge with the club.",
      href: "/sponsors#speak",
      buttonText: "Propose a Talk",
    },
  ];

  return (
    <>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {actions.map((action) => (
            <ActionCard key={action.title} {...action} />
          ))}
          <ActionCard
            icon={<FaEnvelope size={32} className="text-blue-400 mb-4" />}
            title="Member Announcements"
            description="Sign in with your SHSU email to enable push notifications for members."
            buttonText="Sign Up"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmailSignIn />
      </Modal>
    </>
  );
}
