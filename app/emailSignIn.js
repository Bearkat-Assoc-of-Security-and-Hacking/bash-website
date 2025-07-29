// /app/emailSignIn.js
"use client";

import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { app } from "@/lib/firebase"; // Make sure this path to your firebase config is correct

export default function EmailSignIn() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ text: "", type: "" });

    if (!email.endsWith("@shsu.edu")) {
      setFeedback({
        text: "Error: You must use a valid SHSU email address.",
        type: "error",
      });
      setLoading(false);
      return;
    }

    const actionCodeSettings = {
      url: `${window.location.origin}/finish-login`,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setFeedback({
        text: "Success! Please check your SHSU email for a sign-in link.",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setFeedback({
        text: "Error: Could not send sign-in link.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-white text-center">
        Member Sign-In
      </h3>
      <p className="text-gray-300 mb-6 text-center">
        Enter your SHSU email to get a secure sign-in link.
      </p>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your_email@shsu.edu"
          className="bg-gray-900 text-white p-2 rounded-md w-full max-w-xs border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 disabled:bg-gray-500"
        >
          {loading ? "Sending..." : "Send Link"}
        </button>
      </form>
      {feedback.text && (
        <p
          className={`mt-4 text-sm text-center font-semibold ${
            feedback.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback.text}
        </p>
      )}
    </div>
  );
}
