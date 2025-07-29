"use client";

import { useState, useEffect } from "react";
import { getToken } from "firebase/messaging";
// Assuming getFcmMessaging initializes and returns the messaging instance
import { getFcmMessaging } from "./firebase";

const FcmSignup = () => {
  // Correctly initialize state as an object
  const [feedback, setFeedback] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  // Your useEffect for registering the service worker is fine.

  const handleSignup = async () => {
    setLoading(true);
    setFeedback({ text: "", type: "" }); // Clear previous feedback
    try {
      const messaging = await getFcmMessaging();
      if (!messaging)
        throw new Error("Notifications not supported in this browser.");

      const permission = await Notification.requestPermission();
      if (permission === "denied")
        throw new Error("Notification permission denied.");
      if (permission !== "granted") throw new Error("Permission not granted.");

      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FCM_VAPID_KEY,
      });
      if (!token) throw new Error("Failed to generate token.");

      const res = await fetch("/api/signup-fcm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!res.ok) {
        // This part is good, it helps debug the 500 error
        const errorData = await res.json();
        throw new Error(errorData.error || "Server responded with an error.");
      }

      // Update state using the correct object structure
      setFeedback({
        text: "Signed up successfully! You'll now receive push notifications.",
        type: "success",
      });
    } catch (err) {
      console.error("Signup error:", err);
      // Update state using the correct object structure
      setFeedback({ text: `Error: ${err.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800/40 p-8 rounded-lg border border-gray-700 text-center">
      <h3 className="text-xl font-bold mb-4 text-white">
        Sign Up for Push Announcements
      </h3>
      <p className="text-gray-300 mb-4">
        Get instant updates on club events, meetings, and more!
      </p>
      <button
        onClick={handleSignup}
        disabled={loading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-500"
      >
        {loading ? "Signing Up..." : "Enable Notifications"}
      </button>

      {/* This now correctly references the 'feedback' state */}
      {feedback.text && (
        <p
          className={`mt-4 font-semibold ${
            feedback.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback.text}
        </p>
      )}
    </div>
  );
};

export default FcmSignup;
