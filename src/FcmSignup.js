// src/FcmSignup.js
"use client";

import { useState, useEffect } from "react";
import { getToken } from "firebase/messaging";
import { getFcmMessaging } from "./firebase";

const FcmSignup = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Register service worker on component mount
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    } else {
      console.warn("Service workers are not supported in this browser.");
    }
  }, []); // Empty array: Runs once on load

  const handleSignup = async () => {
    setLoading(true);
    setMessage("");
    try {
      const messaging = await getFcmMessaging();
      if (!messaging)
        throw new Error(
          "Notifications not supported in your browser. Please try a modern browser like Chrome or Firefox."
        );

      const permission = await Notification.requestPermission();
      if (permission === "denied")
        throw new Error(
          "Notification permission denied. You can enable it in your browser settings."
        );
      if (permission !== "granted")
        throw new Error("Permission not granted. Please try again.");

      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FCM_VAPID_KEY,
      });
      if (!token)
        throw new Error(
          "Failed to generate token. Check your internet connection or browser permissions."
        );

      const res = await fetch("/api/signup-fcm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Signup failed: ${errorText}`);
      }

      setMessage(
        "Signed up successfully! You'll now receive push notifications."
      );
    } catch (err) {
      console.error("Signup error:", err);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-bold mb-4 text-white">
        Sign Up for Push Announcements
      </h3>
      <p className="text-gray-300 mb-4">
        Get instant updates on club events, meetings, and more!
      </p>
      <button
        onClick={handleSignup}
        disabled={loading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {loading ? "Signing Up..." : "Enable Notifications"}
      </button>
      {message && <p className="mt-4 text-gray-300">{message}</p>}
    </div>
  );
};

export default FcmSignup;
