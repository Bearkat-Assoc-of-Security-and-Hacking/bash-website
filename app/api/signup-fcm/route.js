// app/api/signup-fcm/route.js

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req) {
  try {
    const { token } = await req.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "Token required" }), {
        status: 400,
      });
    }

    await addDoc(collection(db, "fcm-tokens"), {
      token,
      signedUpAt: serverTimestamp(), // Uses Firestore's server timestamp
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("FCM Signup Error:", err);
    return new Response(
      JSON.stringify({ error: "An internal server error occurred." }),
      { status: 500 }
    );
  }
}
