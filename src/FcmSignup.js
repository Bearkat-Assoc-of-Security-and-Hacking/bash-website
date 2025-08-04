"use client";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { getToken } from "firebase/messaging";
import { app, messaging } from "@/lib/firebase";
import { FaEnvelope } from "react-icons/fa";

const CardShell = ({ children }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center flex flex-col h-full">
    {children}
  </div>
);

export default function FcmSignup() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const user = auth.currentUser;

  // Check if the user is signed in and their email is verified
  if (user && !user.emailVerified) {
    return (
      <CardShell>
        <FaEnvelope size={32} className="text-yellow-400 mb-4 mx-auto" />
        <h3 className="text-xl font-bold mb-2 text-white">Verify Your Email</h3>
        <p className="text-gray-300 flex-grow">
          Please check your SHSU inbox and click the verification link before
          enabling notifications.
        </p>
      </CardShell>
    );
  }

  const handleSignup = async () => {
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
      if (!messaging)
        throw new Error("Messaging is not supported in this browser.");

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
      <FaEnvelope size={32} className="text-blue-400 mb-4 mx-auto" />
      <h3 className="text-xl font-bold mb-2 text-white">
        Member Announcements
      </h3>
      <p className="text-gray-300 mb-4 flex-grow">
        Enable push notifications to stay updated with club news.
      </p>
      <div className="mt-auto">
        <button
          onClick={handleSignup}
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-500"
        >
          {loading ? "Enabling..." : "Enable Notifications"}
        </button>
        {message && <p className="mt-4 text-sm text-gray-300 h-5">{message}</p>}
      </div>
    </CardShell>
  );
}
