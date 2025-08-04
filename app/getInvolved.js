"use client";
import { useState, useEffect } from "react";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useAuth } from "./AuthContext"; // 1. Import the useAuth hook

import { FiUsers, FiMic } from "react-icons/fi";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import ActionCard from "./actionCard";
import Modal from "./modal";
import FcmSignup from "/src/FcmSignup.js";
import AuthForm from "./AuthForm";

export default function GetInvolved() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, loading: authLoading } = useAuth(); // 2. Get user state from our context
  const [feedback, setFeedback] = useState("");

  // 3. This useEffect is now only for the service worker
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) =>
          console.log("Service Worker registered successfully.")
        )
        .catch((error) =>
          console.error("Service Worker registration failed:", error)
        );
    }

    // Auto-close modal once the user is verified
    if (user && user.emailVerified) {
      setIsModalOpen(false);
    }
  }, [user]); // Rerun when user state changes

  const handleResendVerification = async () => {
    if (user) {
      try {
        await sendEmailVerification(user);
        setFeedback("Verification email sent! Please check your inbox.");
      } catch (error) {
        setFeedback("Error sending email. Please try again later.");
        console.error("Error resending verification email:", error);
      }
    }
  };

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

  const renderMemberCard = () => {
    if (authLoading) {
      return null; // Show nothing until Firebase has checked the auth state
    }

    if (user && user.emailVerified) {
      return <FcmSignup />;
    } else if (user && !user.emailVerified) {
      return (
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col h-full">
          <FaEnvelope size={32} className="text-yellow-400 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-2 text-white">
            Verify Your Email
          </h3>
          <p className="text-gray-300 mb-4 flex-grow">
            A verification link has been sent. Please verify to continue.
          </p>
          <div className="mt-auto">
            <button
              onClick={handleResendVerification}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Resend Email
            </button>
            {feedback && (
              <p className="mt-4 text-sm text-green-400 h-5">{feedback}</p>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <ActionCard
          icon={<FaEnvelope size={32} className="text-blue-400 mb-4" />}
          title="Member Announcements"
          description="Sign up or log in with your SHSU email to enable push notifications."
          buttonText="Sign Up / Log In"
          onClick={() => setIsModalOpen(true)}
        />
      );
    }
  };

  return (
    <>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {actions.map((action) => (
            <ActionCard key={action.title} {...action} />
          ))}
          {renderMemberCard()}
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AuthForm />
      </Modal>
    </>
  );
}
