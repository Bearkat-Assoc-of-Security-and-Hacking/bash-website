// /lib/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- Add this import
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging"; // <-- Add this import

// Use the NEXT_PUBLIC_ prefix for client-side code
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize all the services you need
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

// Export everything so other files can use them
export { app, auth, db, messaging };
