// /app/fcmSignup.js
"use client";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getToken } from "firebase/messaging";
import { app, messaging } from "@/lib/firebase";

export default function FcmSignup() {
  const [authState, setAuthState] = useState({ status: "loading", user: null });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  // Listen for changes in user sign-in state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthState({ status: "authenticated", user: currentUser });
      } else {
        setAuthState({ status: "unauthenticated", user: null });
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleSignup = async () => {
    if (authState.status !== "authenticated") {
      setMessage("Error: You must be signed in to enable notifications.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const idToken = await authState.user.getIdToken();
      const permission = await Notification.requestPermission();
      if (permission !== "granted") throw new Error("Permission not granted.");

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

  const CardShell = ({ children }) => (
    <div className="bg-gray-800/40 p-8 rounded-lg border border-gray-700 text-center">
      {children}
    </div>
  );

  // 1. Show a loading state initially
  if (authState.status === "loading") {
    return (
      <CardShell>
        <p className="text-gray-300">Loading member status...</p>
      </CardShell>
    );
  }

  // 2. If user is NOT signed in, show a message
  if (authState.status === "unauthenticated") {
    return (
      <CardShell>
        <h3 className="text-xl font-bold mb-4 text-white">
          Member Announcements
        </h3>
        <p className="text-gray-300">
          Please sign in to enable push notifications.
        </p>
      </CardShell>
    );
  }

  // 3. If user IS signed in, show the button
  return (
    <CardShell>
      <h3 className="text-xl font-bold mb-4 text-white">
        Enable Push Announcements
      </h3>
      <p className="text-gray-300 mb-4">
        Get instant updates on club events, meetings, and more!
      </p>
      <button
        onClick={handleSignup}
        disabled={loading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-500"
      >
        {loading ? "Enabling..." : "Enable Notifications"}
      </button>
      {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
    </CardShell>
  );
}
