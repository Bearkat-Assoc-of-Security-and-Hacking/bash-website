// In file FinishLoginClient.js
"use client";

import { useEffect, useState } from "react";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function FinishLoginClient() {
  const [message, setMessage] = useState("Verifying your sign-in link...");
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const completeSignIn = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          setMessage(
            "Could not complete sign-in. Please try again from the same browser you started from."
          );
          return;
        }
        try {
          await signInWithEmailLink(auth, email, window.location.href);
          window.localStorage.removeItem("emailForSignIn"); // Clean up
          setMessage("Success! You are signed in. Redirecting now...");
          setTimeout(() => router.push("/"), 2000); // Redirect to homepage
        } catch (error) {
          setMessage(`Error: This link may have expired or already been used.`);
        }
      } else {
        setMessage("This page is for completing an email sign-in.");
      }
    };
    completeSignIn();
  }, [auth, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Finalizing Sign-In</h1>
      <p className="text-lg text-gray-300">{message}</p>
    </div>
  );
}
