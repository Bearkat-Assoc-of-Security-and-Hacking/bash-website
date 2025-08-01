// In file /src/FcmSignup.js
"use client";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { getToken } from "firebase/messaging";
import { app, messaging } from "@/lib/firebase";
import { FaEnvelope } from "react-icons/fa"; // 1. Add the import for the icon

// 2. Add flexbox and height classes to the CardShell
const CardShell = ({ children }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col h-full">
    {children}
  </div>
);

export default function FcmSignup() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const handleSignup = async () => {
    const user = auth.currentUser;

    if (!user) {
      setMessage("Error: You must be signed in to enable notifications.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const idToken = await user.getIdToken();
      const permission = await Notification.requestPermission();
      if (permission !== "granted") throw new Error("Permission not granted.");

      if (!messaging) throw new Error("Could not get notification token.");

      const fcmToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FCM_VAPID_KEY,
      });
      if (!fcmToken) throw new Error("Could not get notification token.");

      const res = await fetch("/api/signup-fcm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ token: fcmToken }),
      });

      if (!res.ok) throw new Error("Server registration failed.");

      setMessage("Successfully enabled notifications!");
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardShell>
      {/* 1. Add the icon back here */}
      <FaEnvelope size={32} className="text-blue-400 mb-4 mx-auto" />

      <h3 className="text-xl font-bold mb-2 text-white">
        Member Announcements
      </h3>
      <p className="text-gray-300 mb-4 flex-grow">
        Enable push notifications to stay updated with club news.
      </p>

      {/* This part is correct! The mt-auto pushes the button down */}
      <div className="mt-auto">
        <button
          onClick={handleSignup}
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-500"
        >
          {loading ? "Enabling..." : "Enable Notifications"}
        </button>
        {/* Added a fixed height to the message to prevent layout shift */}
        {message && <p className="mt-4 text-sm text-gray-300 h-5">{message}</p>}
      </div>
    </CardShell>
  );
}
