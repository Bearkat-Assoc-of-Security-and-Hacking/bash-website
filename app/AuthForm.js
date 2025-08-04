"use client";

import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "@/lib/firebase";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In
  const [feedback, setFeedback] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ text: "", type: "" });

    // Enforce SHSU email on the client-side
    if (!email.endsWith("@shsu.edu")) {
      setFeedback({
        text: "Error: You must use a valid @shsu.edu email.",
        type: "error",
      });
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        // Sign Up Flow
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await sendEmailVerification(userCredential.user);
        setFeedback({
          text: "Success! Account created. Please check your SHSU email to verify your account before signing in.",
          type: "success",
        });
        setIsSignUp(false); // Switch to sign-in form
      } else {
        // Sign In Flow
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (!userCredential.user.emailVerified) {
          await auth.signOut(); // Sign out unverified user
          setFeedback({
            text: "Error: You must verify your email before signing in. Please check your inbox.",
            type: "error",
          });
        }
        // On successful sign in, the onAuthStateChanged listener will close the modal.
      }
    } catch (error) {
      setFeedback({ text: `Error: ${error.message}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white text-center">
        {isSignUp ? "Create Member Account" : "Member Sign-In"}
      </h3>
      <p className="text-gray-300 text-center mb-6">
        Use your @shsu.edu email to sign up or sign in.
      </p>

      <form
        onSubmit={handleSubmit}
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-gray-900 text-white p-2 rounded-md w-full max-w-xs border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
          minLength="6"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 disabled:bg-gray-500 w-full max-w-xs"
        >
          {loading ? "..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-sm text-blue-300 hover:underline"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Need to create an account? Sign Up"}
        </button>
      </div>

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
