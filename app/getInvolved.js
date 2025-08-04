"use client";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";

import { FiUsers, FiMic } from "react-icons/fi";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import ActionCard from "./actionCard";
import Modal from "./modal";
import FcmSignup from "/src/FcmSignup.js";

// Import the new email/password authentication form
import AuthForm from "./AuthForm";

export default function GetInvolved() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Register the Firebase Messaging service worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered successfully.");
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    // Listen for changes in the user's sign-in state
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      // Close the modal automatically on successful sign-in
      if (currentUser) {
        setIsModalOpen(false);
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

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

          {!authLoading &&
            (user ? (
              <FcmSignup />
            ) : (
              <ActionCard
                icon={<FaEnvelope size={32} className="text-blue-400 mb-4" />}
                title="Member Announcements"
                description="Sign up or log in with your SHSU email to enable push notifications for meeting reminders."
                buttonText="Sign Up / Log In"
                onClick={() => setIsModalOpen(true)}
              />
            ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AuthForm />
      </Modal>
    </>
  );
}
