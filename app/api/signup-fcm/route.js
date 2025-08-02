// app/api/signup-fcm/route.js
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

export const runtime = "edge";

export async function POST(request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ error: "FCM token required" }), {
        status: 400,
      });
    }

    const auth = getAuth(app);
    const idToken = await auth.currentUser?.getIdToken();
    if (!idToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const response = await fetch(
      "https://us-central1-bash-website-backend.cloudfunctions.net/signupFcm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ data: { token } }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Cloud Function call failed");
    }

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to register FCM token: " + error.message,
      }),
      { status: 500 }
    );
  }
}
