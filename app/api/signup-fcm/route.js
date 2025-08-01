// /app/api/signup-fcm/route.js

import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { initializeAdminApp } from "@/lib/server/firebaseAdmin";

export const runtime = "edge";

// Initialize the admin app
initializeAdminApp();

export async function POST(req) {
  const idToken = req.headers.get("Authorization")?.split("Bearer ")[1];

  if (!idToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const { token: fcmToken } = await req.json();
    if (!fcmToken) {
      return new Response(JSON.stringify({ error: "FCM token required" }), {
        status: 400,
      });
    }

    // Using the Admin SDK's chained syntax to get the document reference
    const db = getFirestore();
    const userFcmRef = db
      .collection("users")
      .doc(uid)
      .collection("fcm-tokens")
      .doc(fcmToken);

    // Using the .set() method on the document reference
    await userFcmRef.set({
      signedUpAt: new Date(), // Using new Date() is fine on the server
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    // The error originates from the catch block
    return new Response(
      JSON.stringify({
        error: "Invalid authentication token or server error.",
      }),
      { status: 401 }
    );
  }
}
